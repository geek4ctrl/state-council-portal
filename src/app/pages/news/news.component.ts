import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
  signal,
  computed
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonLoaderComponent } from '../../components/skeleton-loader/skeleton-loader.component';
import { IconComponent } from '../../components/icon/icon.component';
import { SeoService } from '../../services/seo.service';
import { I18nPipe } from '../../i18n/i18n.pipe';
import Highcharts from 'highcharts';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-news',
  imports: [CommonModule, SkeletonLoaderComponent, IconComponent, I18nPipe, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-grid">
            <div class="hero-left">
              <h1>{{ 'news.hero.title' | i18n }}</h1>
            </div>
            <div class="vertical-divider"></div>
            <div class="hero-right">
              <p>{{ 'news.hero.body' | i18n }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- News Feed Section -->
      <section class="news-section">
        <div class="container">
          <div class="section-header">
            <div class="header-decoration-left"></div>
            <h2>{{ 'news.section.title' | i18n }}</h2>
            <div class="header-decoration-right"></div>
          </div>
          <p class="section-subtitle">{{ 'news.section.subtitle' | i18n }}</p>

          <div class="insights-section">
            <div class="insights-header">
              <div class="insights-line"></div>
              <h3>{{ 'news.insights.title' | i18n }}</h3>
            </div>
            <p class="insights-subtitle">{{ 'news.insights.subtitle' | i18n }}</p>

            <div class="insights-grid">
              <div class="insight-card glass-card">
                <div class="insight-card-header">
                  <h4>{{ 'news.insights.topics.title' | i18n }}</h4>
                  <span class="insight-note">{{ 'news.insights.topics.note' | i18n }}</span>
                </div>
                <div
                  #newsCategoryChart
                  class="insight-chart"
                  role="img"
                  [attr.aria-label]="'news.insights.topics.aria' | i18n">
                </div>
              </div>

              <div class="insight-card glass-card">
                <div class="insight-card-header">
                  <h4>{{ 'news.insights.cadence.title' | i18n }}</h4>
                  <span class="insight-note">{{ 'news.insights.cadence.note' | i18n }}</span>
                </div>
                <div
                  #newsCadenceChart
                  class="insight-chart"
                  role="img"
                  [attr.aria-label]="'news.insights.cadence.aria' | i18n">
                </div>
              </div>
            </div>
          </div>

          <div class="news-grid">
            @if (isLoading()) {
              @for (item of [1, 2, 3]; track item) {
                <app-skeleton-loader type="news-card"></app-skeleton-loader>
              }
            } @else {
              @for (article of getCurrentPageArticles(); track article.id) {
                <article class="news-card glass-card">
                  <div class="news-image">
                    <img [src]="article.image" [alt]="article.titleKey | i18n" loading="lazy">
                  </div>
                  <div class="news-content">
                    <div class="news-meta">
                      <span class="news-date">{{ article.dateKey | i18n }}</span>
                      <span class="news-divider">|</span>
                      <span class="news-category">{{ article.categoryKey | i18n }}</span>
                    </div>
                    <h3 class="news-title">{{ article.titleKey | i18n }}</h3>
                    <p class="news-excerpt">{{ article.excerptKey | i18n }}</p>
                    <a href="#" class="read-more">
                      {{ 'news.actions.readMore' | i18n }}
                      <app-icon name="arrow-right" [size]="16"></app-icon>
                    </a>
                  </div>
                </article>
              }
            }
          </div>

          <!-- Pagination -->
          <nav class="pagination" [attr.aria-label]="'news.pagination.label' | i18n" role="navigation">
            <button
              class="pagination-btn prev-btn"
              [disabled]="currentPage() === 1"
              (click)="goToPreviousPage()"
              [attr.aria-label]="'news.pagination.previous' | i18n">
              <app-icon name="chevron-down" [size]="20" [customClass]="'rotate-90'" [attr.aria-hidden]="true"></app-icon>
              Previous
            </button>
            <button
              class="pagination-number"
              [class.active]="currentPage() === 1"
              (click)="goToPage(1)"
              [attr.aria-current]="currentPage() === 1 ? 'page' : null"
              [attr.aria-label]="'news.pagination.pageLabel' | i18n : { page: 1 }">
              1
            </button>
            <button
              class="pagination-number"
              [class.active]="currentPage() === 2"
              (click)="goToPage(2)"
              [attr.aria-current]="currentPage() === 2 ? 'page' : null"
              [attr.aria-label]="'news.pagination.pageLabel' | i18n : { page: 2 }">
              2
            </button>
            <button
              class="pagination-number"
              [class.active]="currentPage() === 3"
              (click)="goToPage(3)"
              [attr.aria-current]="currentPage() === 3 ? 'page' : null"
              [attr.aria-label]="'news.pagination.pageLabel' | i18n : { page: 3 }">
              3
            </button>
            <button 
              class="pagination-btn next-btn" 
              [disabled]="currentPage() === totalPages"
              (click)="goToNextPage()"
              [attr.aria-label]="'news.pagination.next' | i18n">
              <span class="next-text">{{ 'news.pagination.next' | i18n }}</span>
              <app-icon name="chevron-right" [size]="16" [attr.aria-hidden]="true"></app-icon>
            </button>
          </nav>
        </div>
      </section>

      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .page-container {
      background: white;
      min-height: 100vh;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .hero-section {
      background: linear-gradient(135deg, rgba(26, 41, 66, 0.92), rgba(44, 62, 80, 0.88)),
                  url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&h=600&fit=crop') center/cover;
      background-color: #2c3e50;
      color: white;
      padding: 120px 0;
      position: relative;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1fr 2px 2fr;
      gap: 60px;
      align-items: center;
    }

    .hero-left h1 {
      font-size: 5rem;
      font-weight: 700;
      margin: 0;
      letter-spacing: 8px;
      color: #ffffff;
      text-transform: uppercase;
      text-align: left;
    }

    .vertical-divider {
      width: 2px;
      height: 140px;
      background-color: rgba(255, 255, 255, 0.7);
      display: block;
      align-self: center;
    }

    .hero-right p {
      font-size: 1.05rem;
      line-height: 1.8;
      margin: 0;
      opacity: 0.95;
      color: #ffffff;
      font-weight: 300;
      text-align: left;
    }

    .news-section {
      padding: 80px 0 100px;
      background: white;
    }

    .section-header {
      text-align: center;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
    }

    .header-decoration-left,
    .header-decoration-right {
      flex: 0 0 80px;
      height: 1px;
      background: linear-gradient(90deg, transparent, #BF9874, transparent);
    }

    .section-header h2 {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0;
      letter-spacing: 3px;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .section-subtitle {
      font-size: 0.85rem;
      color: #BF9874 !important;
      text-transform: uppercase;
      letter-spacing: 3px;
      margin: 0 0 60px 0;
      text-align: center;
      font-weight: 400;
    }

    .insights-section {
      margin-bottom: 50px;
    }

    .insights-header {
      display: flex;
      align-items: center;
      gap: 18px;
      margin-bottom: 10px;
    }

    .insights-line {
      width: 50px;
      height: 2px;
      background: #BF9874;
    }

    .insights-header h3 {
      font-size: 1.6rem;
      font-weight: 700;
      margin: 0;
      color: #1a1a1a;
      letter-spacing: 1px;
      text-transform: uppercase;
      text-align: left;
    }

    .insights-subtitle {
      font-size: 0.85rem;
      color: #BF9874 !important;
      margin: 0 0 24px;
      letter-spacing: 1px;
      text-transform: uppercase;
      text-align: left;
    }

    .insights-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 26px;
    }

    .insight-card {
      background: #ffffff;
      border: 1px solid rgba(26, 41, 66, 0.08);
      box-shadow: 0 12px 26px rgba(26, 41, 66, 0.12);
      padding: 22px 22px 16px;
      border-radius: 6px !important;
    }

    .insight-card-header {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 12px;
    }

    .insight-card-header h4 {
      font-size: 1.05rem;
      font-weight: 600;
      margin: 0;
      color: #1a1a1a;
      text-align: left;
    }

    .insight-note {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #BF9874 !important;
      font-weight: 600;
      white-space: nowrap;
    }

    .insight-chart {
      width: 100%;
      height: 250px;
    }

    .news-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      margin-bottom: 50px;
    }

    .news-card {
      background: white;
      border-radius: 6px !important;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      display: flex;
      flex-direction: column;
    }

    .news-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    }

    .news-image {
      width: 100%;
      height: 250px;
      overflow: hidden;
      background: #f0f0f0;
      border: none !important;
    }

    .news-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
      border: none !important;
    }

    .news-card:hover .news-image img {
      transform: scale(1.05);
    }

    .news-content {
      padding: 25px;
      flex: 1;
      display: flex;
      flex-direction: column;
      text-align: left;
    }

    .news-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.8rem;
      color: #999;
      margin-bottom: 15px;
      text-align: left;
    }

    .news-date {
      color: #666;
      font-weight: 500;
    }

    .news-divider {
      color: #ddd;
    }

    .news-category {
      color: #666;
      font-weight: 500;
    }

    .news-title {
      font-size: 1.05rem;
      font-weight: 600;
      color: #1a1a1a;
      margin: 0 0 15px 0;
      line-height: 1.5;
      min-height: 50px;
      text-align: left;
    }

    .news-excerpt {
      font-size: 0.9rem;
      color: #666;
      line-height: 1.7;
      margin: 0 0 15px 0;
      flex: 1;
      text-align: left;
    }

    .read-more {
      color: #9b6b3f !important;
      font-size: 0.85rem;
      font-weight: 600;
      text-decoration: underline !important;
      text-decoration-thickness: 2px !important;
      text-underline-offset: 4px !important;
      transition: color 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-top: auto;
      border: none !important;
      background: transparent !important;
      padding: 0 !important;
      align-self: flex-start;
    }

    .read-more:hover {
      color: #BF9874 !important;
    }

    .pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    .pagination-btn,
    .pagination-number {
      background: transparent;
      border: 1px solid #BF9874 !important;
      border-radius: 6px !important;
      color: #666;
      padding: 10px 15px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 0.9rem;
      font-weight: 500;
    }

    .pagination-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .pagination-btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .pagination-number {
      min-width: 45px;
      text-align: center;
    }

    .pagination-number.active {
      background: #BF9874;
      color: white;
      border-color: #BF9874 !important;
    }

    .pagination-number:hover:not(.active) {
      border-color: #BF9874 !important;
      color: #BF9874;
    }

    .pagination-btn:hover:not(:disabled) {
      border-color: #BF9874 !important;
      color: #BF9874;
    }

    .pagination-btn.next-btn {
      padding: 10px 20px;
      font-weight: 600;
      text-transform: capitalize;
    }

    .pagination-btn.prev-btn {
      padding: 10px 15px;
    }

    .next-text {
      font-size: 0.9rem;
    }

    @media (max-width: 1199px) {
      .container { padding: 0 30px; }
      .hero-left h1 { font-size: 4.5rem; letter-spacing: 6px; }
      .hero-grid { gap: 50px; grid-template-columns: 1fr 2px 2fr; }
      .vertical-divider { height: 120px; }
      .section-header h2 { font-size: 2.2rem; }
      .news-grid { grid-template-columns: repeat(2, 1fr); gap: 25px; }
      .insights-grid { grid-template-columns: 1fr; }
    }

    @media (max-width: 1023px) {
      .hero-section { padding: 100px 0; }
      .hero-left h1 { font-size: 4rem; letter-spacing: 5px; }
      .hero-grid { gap: 40px; grid-template-columns: 1fr 2px 2fr; }
      .vertical-divider { height: 110px; }
      .hero-right p { font-size: 1rem; }
      .news-section { padding: 70px 0 90px; }
      .section-header h2 { font-size: 2rem; }
      .header-decoration-left, .header-decoration-right { flex: 0 0 60px; }
      .news-image { height: 220px; }
      .insight-chart { height: 230px; }
      .footer-grid { grid-template-columns: repeat(2, 1fr); gap: 40px; }
    }

    @media (max-width: 767px) {
      .container { padding: 0 20px; }
      .hero-section { padding: 80px 0; }
      .hero-grid { grid-template-columns: 1fr; gap: 30px; text-align: center; }
      .hero-left h1 { font-size: 3rem; letter-spacing: 4px; text-align: center; }
      .vertical-divider { width: 120px; height: 2px; margin: 0 auto; }
      .hero-right p { font-size: 0.95rem; line-height: 1.7; text-align: center; }
      .news-section { padding: 60px 0 80px; }
      .section-header { flex-direction: column; gap: 15px; }
      .section-header h2 { font-size: 1.8rem; letter-spacing: 2px; }
      .header-decoration-left, .header-decoration-right { width: 80px; flex: 0 0 auto; }
      .section-subtitle { font-size: 0.8rem; margin-bottom: 40px; }
      .insights-header h3 { font-size: 1.4rem; }
      .insight-card { padding: 20px 18px 14px; }
      .insight-chart { height: 220px; }
      .news-grid { grid-template-columns: 1fr; gap: 24px; margin-bottom: 40px; }
      .news-image { height: 200px; }
      .news-content { padding: 20px; }
      .news-title { min-height: auto; font-size: 1rem; }
      .news-excerpt { font-size: 0.85rem; }
      .read-more { align-self: flex-start !important; text-align: left !important; }
      .pagination { gap: 8px; flex-wrap: wrap; }
      .pagination-btn, .pagination-number { padding: 8px 12px; font-size: 0.85rem; border-width: 6px !important; }
      .pagination-btn.next-btn { padding: 8px 16px; }
      .next-text { font-size: 0.85rem; }
      .footer-logo-wrapper { width: 100px; height: 100px; top: -35px; }
      .footer-main { padding-bottom: 30px !important; }
      .footer-grid { grid-template-columns: 1fr; gap: 35px; }
      .footer-bottom { padding: 20px 0 0 0 !important; }
      .footer-bottom-content { flex-direction: column; gap: 15px; text-align: center; }
      .social-icons { justify-content: center; }
    }

    @media (max-width: 575px) {
      .container { padding: 0 15px; }
      .hero-section { padding: 60px 0; }
      .hero-left h1 { font-size: 2.5rem; letter-spacing: 3px; }
      .vertical-divider { width: 100px; height: 2px; }
      .hero-right p { font-size: 0.9rem; }
      .news-section { padding: 50px 0 70px; }
      .section-header h2 { font-size: 1.5rem; letter-spacing: 1.5px; }
      .header-decoration-left, .header-decoration-right { width: 60px; }
      .section-subtitle { font-size: 0.75rem; letter-spacing: 2px; margin-bottom: 35px; }
      .insights-header h3 { font-size: 1.3rem; }
      .insight-card-header { flex-direction: column; align-items: flex-start; }
      .insight-note { white-space: normal; }
      .insight-chart { height: 200px; }
      .news-grid { gap: 20px; margin-bottom: 35px; }
      .news-image { height: 180px; }
      .news-content { padding: 18px; }
      .news-meta { font-size: 0.75rem; }
      .news-title { font-size: 0.95rem; margin-bottom: 12px; }
      .news-excerpt { font-size: 0.8rem; margin-bottom: 12px; }
      .read-more { font-size: 0.8rem; }
      .pagination { gap: 6px; }
      .pagination-btn, .pagination-number { padding: 7px 10px; font-size: 0.8rem; border-width: 5px !important; }
      .pagination-number { min-width: 38px; }
      .pagination-btn.next-btn { padding: 7px 14px; }
      .next-text { font-size: 0.8rem; }
      .footer-logo-wrapper { width: 90px; height: 90px; top: -30px; }
      .footer-main { padding: 50px 0 25px !important; }
      .footer-grid { gap: 30px; padding-top: 30px; }
      .footer-column h3 { font-size: 1rem; }
      .footer-column p, .footer-column ul li a { font-size: 0.85rem; }
      .footer-bottom { padding: 20px 0 0 0 !important; }
      .copyright, .privacy-link { font-size: 0.8rem; }
      .social-icon { width: 32px; height: 32px; }
    }

    @media (max-width: 374px) {
      .hero-left h1 { font-size: 2rem; letter-spacing: 2px; }
      .vertical-divider { width: 80px; height: 2px; }
      .section-header h2 { font-size: 1.3rem; }
      .header-decoration-left, .header-decoration-right { width: 50px; }
      .news-image { height: 160px; }
      .pagination-btn, .pagination-number { padding: 6px 8px; font-size: 0.75rem; }
      .pagination-number { min-width: 35px; }
    }

    @media (prefers-reduced-motion: reduce) {
      .news-card, .social-icon, .pagination-btn, .pagination-number { transition: none; }
      .news-card:hover, .news-card:hover .news-image img { transform: none; }
    }
  `]
})
export class NewsComponent implements OnInit, AfterViewInit {
  private seoService = inject(SeoService);
  private readonly destroyRef = inject(DestroyRef);
  private chartInstances: Highcharts.Chart[] = [];
  private resizeObserver?: ResizeObserver;
  private readonly handleVisibilityChange = () => {
    if (!document.hidden) {
      this.reflowCharts();
    }
  };

  @ViewChild('newsCategoryChart', { static: true })
  newsCategoryChart!: ElementRef<HTMLDivElement>;

  @ViewChild('newsCadenceChart', { static: true })
  newsCadenceChart!: ElementRef<HTMLDivElement>;

  currentPage = signal(1);
  isLoading = signal(true);
  totalPages = 3;
  itemsPerPage = 3;

  ngOnInit() {
    this.seoService.updateMetadata({
      title: 'Actualités',
      description: 'Suivez les dernières actualités, événements et communications officielles du Conseil d\'État de la République Démocratique du Congo.',
      keywords: 'actualités, nouvelles, Conseil d\'État RDC, événements, communications officielles',
      ogUrl: '/news'
    });

    setTimeout(() => {
      this.isLoading.set(false);
    }, 1500);
  }

  ngAfterViewInit() {
    this.renderNewsCharts();
    this.setupChartObservers([this.newsCategoryChart, this.newsCadenceChart]);
    this.destroyRef.onDestroy(() => {
      this.chartInstances.forEach(chart => chart.destroy());
      this.chartInstances = [];
      document.removeEventListener('visibilitychange', this.handleVisibilityChange);
      this.resizeObserver?.disconnect();
      this.resizeObserver = undefined;
    });
  }

  private setupChartObservers(containers: ElementRef<HTMLDivElement>[]) {
    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => this.reflowCharts());
      containers.forEach(container => this.resizeObserver?.observe(container.nativeElement));
    }

    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  }

  private reflowCharts() {
    this.chartInstances.forEach(chart => chart.reflow());
  }

  private renderNewsCharts() {
    const axisLabelStyle = {
      color: '#BF9874',
      fontSize: '11px'
    };

    const months = ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'];

    const categoryTrendOptions: Highcharts.Options = {
      chart: {
        type: 'column',
        backgroundColor: 'transparent',
        height: 250,
        spacing: [10, 10, 0, 10]
      },
      title: { text: undefined },
      credits: { enabled: false },
      legend: {
        align: 'center',
        verticalAlign: 'bottom',
        itemStyle: { color: '#1a1a1a', fontWeight: '600' }
      },
      xAxis: {
        categories: months,
        labels: { style: axisLabelStyle },
        lineColor: 'rgba(26, 41, 66, 0.12)',
        tickColor: 'rgba(26, 41, 66, 0.12)'
      },
      yAxis: {
        title: { text: undefined },
        labels: { style: axisLabelStyle },
        gridLineColor: 'rgba(26, 41, 66, 0.08)'
      },
      tooltip: {
        shared: true,
        backgroundColor: '#1a1a1a',
        style: { color: '#ffffff' },
        borderColor: '#1a1a1a'
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          borderRadius: 3
        }
      },
      series: [
        {
          type: 'column',
          name: 'Administration',
          data: [8, 10, 12, 9, 11, 13],
          color: 'rgba(26, 41, 66, 0.75)'
        },
        {
          type: 'column',
          name: 'Reforms',
          data: [4, 5, 6, 7, 6, 8],
          color: 'rgba(191, 152, 116, 0.75)'
        },
        {
          type: 'column',
          name: 'Events',
          data: [3, 4, 5, 4, 5, 6],
          color: 'rgba(90, 113, 132, 0.75)'
        }
      ]
    };

    const cadenceOptions: Highcharts.Options = {
      chart: {
        type: 'line',
        backgroundColor: 'transparent',
        height: 250,
        spacing: [10, 10, 0, 10]
      },
      title: { text: undefined },
      credits: { enabled: false },
      legend: { enabled: false },
      xAxis: {
        categories: months,
        labels: { style: axisLabelStyle },
        lineColor: 'rgba(26, 41, 66, 0.12)',
        tickColor: 'rgba(26, 41, 66, 0.12)'
      },
      yAxis: {
        title: { text: undefined },
        labels: { style: axisLabelStyle },
        gridLineColor: 'rgba(26, 41, 66, 0.08)'
      },
      tooltip: {
        backgroundColor: '#1a1a1a',
        style: { color: '#ffffff' },
        borderColor: '#1a1a1a'
      },
      series: [
        {
          type: 'line',
          name: 'Publications',
          data: [15, 18, 22, 19, 24, 27],
          color: '#BF9874',
          marker: { radius: 4 }
        }
      ]
    };

    this.chartInstances = [
      Highcharts.chart(this.newsCategoryChart.nativeElement, categoryTrendOptions),
      Highcharts.chart(this.newsCadenceChart.nativeElement, cadenceOptions)
    ];
  }

  allNewsArticles = [
    {
      id: 1,
      dateKey: 'news.articles.1.date',
      categoryKey: 'news.articles.1.category',
      titleKey: 'news.articles.1.title',
      excerptKey: 'news.articles.1.excerpt',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop'
    },
    {
      id: 2,
      dateKey: 'news.articles.2.date',
      categoryKey: 'news.articles.2.category',
      titleKey: 'news.articles.2.title',
      excerptKey: 'news.articles.2.excerpt',
      image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&h=600&fit=crop'
    },
    {
      id: 3,
      dateKey: 'news.articles.3.date',
      categoryKey: 'news.articles.3.category',
      titleKey: 'news.articles.3.title',
      excerptKey: 'news.articles.3.excerpt',
      image: 'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=800&h=600&fit=crop'
    },
    {
      id: 4,
      dateKey: 'news.articles.1.date',
      categoryKey: 'news.articles.1.category',
      titleKey: 'news.articles.1.title',
      excerptKey: 'news.articles.1.excerpt',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=600&fit=crop'
    },
    {
      id: 5,
      dateKey: 'news.articles.2.date',
      categoryKey: 'news.articles.2.category',
      titleKey: 'news.articles.2.title',
      excerptKey: 'news.articles.2.excerpt',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop'
    },
    {
      id: 6,
      dateKey: 'news.articles.3.date',
      categoryKey: 'news.articles.3.category',
      titleKey: 'news.articles.3.title',
      excerptKey: 'news.articles.3.excerpt',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop'
    },
    {
      id: 7,
      dateKey: 'news.articles.1.date',
      categoryKey: 'news.articles.1.category',
      titleKey: 'news.articles.1.title',
      excerptKey: 'news.articles.1.excerpt',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop'
    },
    {
      id: 8,
      dateKey: 'news.articles.2.date',
      categoryKey: 'news.articles.2.category',
      titleKey: 'news.articles.2.title',
      excerptKey: 'news.articles.2.excerpt',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop'
    },
    {
      id: 9,
      dateKey: 'news.articles.3.date',
      categoryKey: 'news.articles.3.category',
      titleKey: 'news.articles.3.title',
      excerptKey: 'news.articles.3.excerpt',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop'
    }
  ];

  getCurrentPageArticles() {
    const startIndex = (this.currentPage() - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.allNewsArticles.slice(startIndex, endIndex);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage.set(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  goToPreviousPage() {
    if (this.currentPage() > 1) {
      this.goToPage(this.currentPage() - 1);
    }
  }

  goToNextPage() {
    if (this.currentPage() < this.totalPages) {
      this.goToPage(this.currentPage() + 1);
    }
  }
}