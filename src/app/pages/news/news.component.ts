import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
  signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonLoaderComponent } from '../../components/skeleton-loader/skeleton-loader.component';
import { IconComponent } from '../../components/icon/icon.component';
import { SeoService } from '../../services/seo.service';
import { I18nPipe } from '../../i18n/i18n.pipe';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-news',
  imports: [CommonModule, SkeletonLoaderComponent, IconComponent, I18nPipe],
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
            <h2>{{ 'news.section.title' | i18n }}</h2>
            <p class="section-subtitle">{{ 'news.section.subtitle' | i18n }}</p>
          </div>

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
              @for (article of newsArticles; track article.id) {
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
              class="pagination-btn"
              [disabled]="currentPage() === 1"
              [attr.aria-label]="'news.pagination.previous' | i18n">
              <app-icon name="chevron-right" [size]="20" [customClass]="'rotate-180'" [attr.aria-hidden]="true"></app-icon>
            </button>
            <button
              class="pagination-number"
              [class.active]="currentPage() === 2"
              [attr.aria-current]="currentPage() === 2 ? 'page' : null"
              [attr.aria-label]="'news.pagination.pageLabel' | i18n : { page: 2 }">
              2
            </button>
            <button
              class="pagination-number"
              [class.active]="currentPage() === 3"
              [attr.aria-current]="currentPage() === 3 ? 'page' : null"
              [attr.aria-label]="'news.pagination.pageLabel' | i18n : { page: 3 }">
              3
            </button>
            <button class="pagination-btn next" [attr.aria-label]="'news.pagination.next' | i18n">
              {{ 'news.pagination.next' | i18n }}
              <app-icon name="chevron-right" [size]="16" [attr.aria-hidden]="true"></app-icon>
            </button>
          </nav>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .page-container {
      padding-top: 0;
      background: white;
      min-height: 100vh;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    /* Hero Section */
    .hero-section {
      background: linear-gradient(135deg, rgba(44, 62, 80, 0.95), rgba(52, 73, 94, 0.95)),
                  url('https://placehold.co/1920x400') center/cover;
      color: white;
      padding: 100px 0;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 60px;
      align-items: center;
    }

    .hero-left h1 {
      font-size: 5rem;
      font-weight: 700;
      margin: 0;
      letter-spacing: 4px;
      color: #ffffff;
    }

    .hero-right p {
      font-size: 1.05rem;
      line-height: 1.8;
      margin: 0;
      opacity: 0.95;
      color: #ffffff;
    }

    /* News Section */
    .news-section {
      padding: 80px 0 100px;
      background: white;
    }

    .section-header {
      text-align: center;
      margin-bottom: 60px;
    }

    .section-header h2 {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0 0 15px 0;
      letter-spacing: 2px;
    }

    .section-subtitle {
      font-size: 0.9rem;
      color: #c9a961;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin: 0;
    }

    /* Insights Section */
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
      background: #c9a961;
    }

    .insights-header h3 {
      font-size: 1.6rem;
      font-weight: 700;
      margin: 0;
      color: #1a1a1a;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    .insights-subtitle {
      font-size: 0.85rem;
      color: #BF9874;
      margin: 0 0 24px;
      letter-spacing: 1px;
      text-transform: uppercase;
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
    }

    .insight-note {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #c9a961;
      font-weight: 600;
      white-space: nowrap;
    }

    .insight-chart {
      width: 100%;
      height: 250px;
    }

    /* News Grid */
    .news-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      margin-bottom: 50px;
    }

    .news-card {
      background: white;
      border-radius: 0;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    }

    .news-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    }

    .news-image {
      width: 100%;
      height: 250px;
      overflow: hidden;
    }

    .news-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .news-card:hover .news-image img {
      transform: scale(1.05);
    }

    .news-content {
      padding: 25px;
    }

    .news-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.85rem;
      color: #999;
      margin-bottom: 15px;
    }

    .news-divider {
      color: #ddd;
    }

    .news-category {
      color: #666;
    }

    .news-title {
      font-size: 1.1rem;
      font-weight: 600;
      color: #1a1a1a;
      margin: 0 0 15px 0;
      line-height: 1.4;
    }

    .news-excerpt {
      font-size: 0.95rem;
      color: #666;
      line-height: 1.6;
      margin: 0 0 15px 0;
    }

    .read-more {
      color: #BF9874;
      font-size: 0.9rem;
      font-weight: 500;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .read-more:hover {
      color: #BF9874;
    }

    /* Pagination */
    .pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    .pagination-btn,
    .pagination-number {
      background: white;
      border: 1px solid #ddd;
      color: #666;
      padding: 8px 12px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 0.9rem;
    }

    .pagination-btn {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .pagination-btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .pagination-number {
      min-width: 40px;
    }

    .pagination-number.active {
      background: #2c3e50;
      color: white;
      border-color: #2c3e50;
    }

    .pagination-number:hover:not(.active) {
      border-color: #BF9874;
      color: #BF9874;
    }

    .pagination-btn:hover:not(:disabled) {
      border-color: #BF9874;
      color: #BF9874;
    }

    .pagination-btn.next {
      padding: 8px 20px;
      font-weight: 500;
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
      .hero-grid {
        grid-template-columns: 1fr;
        gap: 30px;
        text-align: center;
      }

      .hero-left h1 {
        font-size: 4rem;
      }

      .news-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .insights-grid {
        grid-template-columns: 1fr;
      }

      .insight-chart {
        height: 230px;
      }
    }

    @media (max-width: 768px) {
      .hero-section {
        padding: 80px 0;
      }

      .hero-left h1 {
        font-size: 3rem;
      }

      .news-grid {
        grid-template-columns: 1fr;
      }

      .insights-header h3 {
        font-size: 1.4rem;
      }

      .insight-card {
        padding: 20px 18px 14px;
      }

      .insight-chart {
        height: 220px;
      }

      .section-header h2 {
        font-size: 2rem;
      }

      .news-section {
        padding: 60px 0 80px;
      }
    }

    @media (max-width: 480px) {
      .hero-section {
        padding: 60px 0;
      }

      .hero-left h1 {
        font-size: 2.5rem;
        letter-spacing: 2px;
      }

      .hero-right p {
        font-size: 0.95rem;
      }

      .section-header h2 {
        font-size: 1.6rem;
      }

      .section-subtitle {
        font-size: 0.8rem;
      }

      .insight-card-header {
        flex-direction: column;
        align-items: flex-start;
      }

      .insight-note {
        white-space: normal;
      }

      .insight-chart {
        height: 200px;
      }

      .pagination {
        gap: 5px;
      }

      .pagination-btn,
      .pagination-number {
        padding: 6px 10px;
        font-size: 0.85rem;
      }
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

  currentPage = signal(2);
  isLoading = signal(true);

  ngOnInit() {
    // Set SEO metadata
    this.seoService.updateMetadata({
      title: 'Actualités',
      description: 'Suivez les dernières actualités, événements et communications officielles du Conseil d\'État de la République Démocratique du Congo.',
      keywords: 'actualités, nouvelles, Conseil d\'État RDC, événements, communications officielles',
      ogUrl: '/news'
    });

    // Simulate loading data
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
          color: '#c9a961',
          marker: { radius: 4 }
        }
      ]
    };

    this.chartInstances = [
      Highcharts.chart(this.newsCategoryChart.nativeElement, categoryTrendOptions),
      Highcharts.chart(this.newsCadenceChart.nativeElement, cadenceOptions)
    ];
  }

  newsArticles = [
    {
      id: 1,
      dateKey: 'news.articles.1.date',
      categoryKey: 'news.articles.1.category',
      titleKey: 'news.articles.1.title',
      excerptKey: 'news.articles.1.excerpt',
      image: 'https://placehold.co/400x300'
    },
    {
      id: 2,
      dateKey: 'news.articles.2.date',
      categoryKey: 'news.articles.2.category',
      titleKey: 'news.articles.2.title',
      excerptKey: 'news.articles.2.excerpt',
      image: 'https://placehold.co/400x300'
    },
    {
      id: 3,
      dateKey: 'news.articles.3.date',
      categoryKey: 'news.articles.3.category',
      titleKey: 'news.articles.3.title',
      excerptKey: 'news.articles.3.excerpt',
      image: 'https://placehold.co/400x300'
    }
  ];
}
