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
import { HttpClient } from '@angular/common/http';
import { SkeletonLoaderComponent } from '../../components/skeleton-loader/skeleton-loader.component';
import { IconComponent } from '../../components/icon/icon.component';
import { SeoService } from '../../services/seo.service';
import { I18nPipe } from '../../i18n/i18n.pipe';
import { I18nService } from '../../i18n/i18n.service';
import Highcharts from 'highcharts';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-news',
  imports: [CommonModule, SkeletonLoaderComponent, IconComponent, I18nPipe, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- LOADER -->
    <div class="loader" [class.out]="isPageLoaded()">
      <div class="loader-sphere">
        <div class="sphere-ring r1"></div>
        <div class="sphere-ring r2"></div>
        <div class="sphere-ring r3"></div>
        <div class="sphere-core">
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M32 8L16 16L16 32C16 44 24 52 32 56C40 52 48 44 48 32L48 16L32 8Z"/>
          </svg>
        </div>
      </div>
      <div class="loader-track"><div class="loader-fill"></div></div>
      <span class="loader-label">Initializing...</span>
    </div>

    <div class="cur-dot" #curDot></div>
    <div class="cur-ring" #curRing></div>
    <div class="cur-trail" #curTrail></div>

    <div class="page-wrap page-container">
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
            <div class="header-decoration-left anim-line-c"></div>
            <h2 class="anim-up">{{ 'news.section.title' | i18n }}</h2>
            <div class="header-decoration-right anim-line-c"></div>
          </div>
          <p class="section-subtitle anim-up a-d1">{{ 'news.section.subtitle' | i18n }}</p>

          <div class="insights-section">
            <div class="insights-header">
              <div class="insights-line anim-line"></div>
              <h3 class="anim-up">{{ 'news.insights.title' | i18n }}</h3>
            </div>
            <p class="insights-subtitle anim-up a-d1">{{ 'news.insights.subtitle' | i18n }}</p>

            <div class="insights-grid">
              <div class="insight-card glass-card tilt-card" style="--i:0" (mousemove)="tilt($event)" (mouseleave)="tiltReset($event)">
                <div class="tilt-shine"></div>
                <div class="insight-card-header">
                  <h4>{{ 'news.insights.topics.title' | i18n }}</h4>
                  <span class="insight-note anim-label-pulse">{{ 'news.insights.topics.note' | i18n }}</span>
                </div>
                <div
                  #newsCategoryChart
                  class="insight-chart"
                  role="img"
                  [attr.aria-label]="'news.insights.topics.aria' | i18n">
                </div>
              </div>

              <div class="insight-card glass-card tilt-card" style="--i:1" (mousemove)="tilt($event)" (mouseleave)="tiltReset($event)">
                <div class="tilt-shine"></div>
                <div class="insight-card-header">
                  <h4>{{ 'news.insights.cadence.title' | i18n }}</h4>
                  <span class="insight-note anim-label-pulse">{{ 'news.insights.cadence.note' | i18n }}</span>
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
            } @else if (articles().length === 0) {
              <div class="news-empty" role="status" aria-live="polite">
                <h3>{{ 'news.empty.title' | i18n }}</h3>
                <p>{{ 'news.empty.body' | i18n }}</p>
              </div>
            } @else {
<<<<<<< HEAD
              @for (article of getCurrentPageArticles(); track article.id; let i = $index) {
                <article class="news-card glass-card tilt-card" [style.--i]="i" (mousemove)="tilt($event)" (mouseleave)="tiltReset($event)">
                  <div class="tilt-shine"></div>
                  <div class="news-image img-zoom">
                    <img [src]="article.image" [alt]="article.titleKey | i18n" loading="lazy">
                    <div class="img-sheen"></div>
=======
              @for (article of getCurrentPageArticles(); track article.id) {
                <article class="news-card glass-card">
                  <div class="news-image">
                    <img [src]="article.image" [alt]="article.title" loading="lazy">
>>>>>>> 6c2bf8ab9303933ae43cbf5c35ae6537463bd357
                  </div>
                  <div class="news-content">
                    <div class="news-meta">
                      <span class="news-date">{{ article.date }}</span>
                      <span class="news-divider">|</span>
                      <span class="news-category">{{ article.category }}</span>
                    </div>
<<<<<<< HEAD
                    <h3 class="news-title">{{ article.titleKey | i18n }}</h3>
                    <p class="news-excerpt">{{ article.excerptKey | i18n }}</p>
                    <a href="#" class="read-more mag-btn" (mousemove)="mag($event)" (mouseleave)="magOut($event)" (click)="ripple($event)">
                      <span>{{ 'news.actions.readMore' | i18n }}</span>
                      <app-icon name="arrow-right" [size]="16"></app-icon>
                    </a>
=======
                    <h3 class="news-title">{{ article.title }}</h3>
                    <p class="news-excerpt">{{ article.excerpt }}</p>
                    @if (article.link) {
                      <a [href]="article.link" class="read-more" target="_blank" rel="noopener noreferrer">
                        Lire la suite
                        <app-icon name="arrow-right" [size]="16"></app-icon>
                      </a>
                    } @else {
                      <span class="read-more">
                        Lire la suite
                        <app-icon name="arrow-right" [size]="16"></app-icon>
                      </span>
                    }
>>>>>>> 6c2bf8ab9303933ae43cbf5c35ae6537463bd357
                  </div>
                </article>
              }
            }
          </div>

          <!-- Pagination -->
          <nav class="pagination" [attr.aria-label]="'news.pagination.label' | i18n" role="navigation">
            <button
              class="pagination-btn prev-btn mag-btn"
              [disabled]="currentPage() === 1"
              (click)="goToPreviousPage(); ripple($event)"
              (mousemove)="mag($event)"
              (mouseleave)="magOut($event)"
              [attr.aria-label]="'news.pagination.previous' | i18n">
              <app-icon name="chevron-down" [size]="20" [customClass]="'rotate-90'" [attr.aria-hidden]="true"></app-icon>
<<<<<<< HEAD
              <span>Previous</span>
=======
              <span class="prev-btn-text">{{ 'news.pagination.previous' | i18n }}</span>
>>>>>>> 6c2bf8ab9303933ae43cbf5c35ae6537463bd357
            </button>
            @for (page of pageNumbers(); track page) {
              <button
                class="pagination-number"
                [class.active]="currentPage() === page"
                (click)="goToPage(page)"
                [attr.aria-current]="currentPage() === page ? 'page' : null"
                [attr.aria-label]="'news.pagination.pageLabel' | i18n : { page }">
                {{ page }}
              </button>
            }
            <button
<<<<<<< HEAD
              class="pagination-number mag-btn"
              [class.active]="currentPage() === 1"
              (click)="goToPage(1); ripple($event)"
              (mousemove)="mag($event)"
              (mouseleave)="magOut($event)"
              [attr.aria-current]="currentPage() === 1 ? 'page' : null"
              [attr.aria-label]="'news.pagination.pageLabel' | i18n : { page: 1 }">
              1
            </button>
            <button
              class="pagination-number mag-btn"
              [class.active]="currentPage() === 2"
              (click)="goToPage(2); ripple($event)"
              (mousemove)="mag($event)"
              (mouseleave)="magOut($event)"
              [attr.aria-current]="currentPage() === 2 ? 'page' : null"
              [attr.aria-label]="'news.pagination.pageLabel' | i18n : { page: 2 }">
              2
            </button>
            <button
              class="pagination-number mag-btn"
              [class.active]="currentPage() === 3"
              (click)="goToPage(3); ripple($event)"
              (mousemove)="mag($event)"
              (mouseleave)="magOut($event)"
              [attr.aria-current]="currentPage() === 3 ? 'page' : null"
              [attr.aria-label]="'news.pagination.pageLabel' | i18n : { page: 3 }">
              3
            </button>
            <button 
              class="pagination-btn next-btn mag-btn" 
              [disabled]="currentPage() === totalPages"
              (click)="goToNextPage(); ripple($event)"
              (mousemove)="mag($event)"
              (mouseleave)="magOut($event)"
=======
              class="pagination-btn next-btn"
              [disabled]="currentPage() === totalPages()"
              (click)="goToNextPage()"
>>>>>>> 6c2bf8ab9303933ae43cbf5c35ae6537463bd357
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
      background: linear-gradient(90deg, transparent, #007FFF, transparent);
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
      color: #B8860B !important;
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
      background: #007FFF;
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
      color: #B8860B !important;
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
      color: #B8860B !important;
      font-weight: 600;
      white-space: nowrap;
    }

    .insight-chart {
      width: 100%;
      height: clamp(180px, 45vw, 260px);
      overflow: hidden;
    }

    .news-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      margin-bottom: 50px;
    }

    .news-empty {
      grid-column: 1 / -1;
      text-align: center;
      padding: 48px 24px;
      border: 1px solid rgba(26, 41, 66, 0.12);
      border-radius: 6px;
      background: #ffffff;
      box-shadow: 0 12px 26px rgba(26, 41, 66, 0.12);
    }

    .news-empty h3 {
      margin: 0 0 10px 0;
      font-size: 1.1rem;
      font-weight: 600;
      color: #1a1a1a;
      letter-spacing: 0.5px;
    }

    .news-empty p {
      margin: 0;
      font-size: 0.9rem;
      color: #666;
      line-height: 1.6;
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
      color: #B8860B !important;
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
      border: 1px solid #007FFF !important;
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
      min-width: 160px;
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
      background: #007FFF;
      color: white;
      border-color: #007FFF !important;
    }

    .pagination-number:hover:not(.active) {
      border-color: #007FFF !important;
      color: #007FFF;
    }

    .pagination-btn:hover:not(:disabled) {
      border-color: #007FFF !important;
      color: #007FFF;
    }

    .pagination-btn.next-btn,
    .pagination-btn.prev-btn {
      padding: 10px 20px;
      font-weight: 600;
      text-transform: capitalize;
    }

    .next-text {
      font-size: 0.9rem;
    }

    .prev-btn-text {
      display: inline;
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
      .insight-chart { height: clamp(180px, 48vw, 230px); }
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
      .insight-chart { height: clamp(180px, 55vw, 220px); }
      .news-grid { grid-template-columns: 1fr; gap: 24px; margin-bottom: 40px; }
      .news-image { height: 200px; }
      .news-content { padding: 20px; }
      .news-title { min-height: auto; font-size: 1rem; }
      .news-excerpt { font-size: 0.85rem; }
      .read-more { align-self: flex-start !important; text-align: left !important; }
      .pagination { gap: 8px; flex-wrap: nowrap; }
      .pagination-btn { min-width: 40px; padding: 10px; width: 40px; height: 40px; background: transparent !important; border: none !important; }
      .pagination-btn app-icon { display: flex; }
      .prev-btn-text { display: none; }
      .pagination-number { padding: 10px; font-size: 0.85rem; min-width: 40px; width: 40px; height: 40px; background: transparent !important; border: none !important; }
      .pagination-number.active { background: transparent !important; color: #007FFF; font-weight: 700; border: none !important; }
      .next-text { display: none; }
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
      .insight-chart { height: clamp(170px, 60vw, 200px); }
      .news-grid { gap: 20px; margin-bottom: 35px; }
      .news-image { height: 180px; }
      .news-content { padding: 18px; }
      .news-meta { font-size: 0.75rem; }
      .news-title { font-size: 0.95rem; margin-bottom: 12px; }
      .news-excerpt { font-size: 0.8rem; margin-bottom: 12px; }
      .read-more { font-size: 0.8rem; }
      .pagination { gap: 6px; flex-wrap: nowrap; }
      .pagination-btn { min-width: 38px; padding: 9px; width: 38px; height: 38px; background: transparent !important; border: none !important; }
      .pagination-btn app-icon { display: flex; }
      .prev-btn-text { display: none; }
      .pagination-number { padding: 9px; font-size: 0.8rem; min-width: 38px; width: 38px; height: 38px; background: transparent !important; border: none !important; }
      .pagination-number.active { background: transparent !important; color: #007FFF; font-weight: 700; border: none !important; }
      .next-text { display: none; }
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

    /* Home-style: loader, cursor, tilt, mag, ripple */
    @keyframes fillBar{0%{width:0}60%{width:70%}100%{width:100%}}
    @keyframes labelPulse{0%,100%{opacity:.4;letter-spacing:2px}50%{opacity:1;letter-spacing:5px}}
    @keyframes rOrbit1{from{transform:rotateX(65deg) rotateZ(0)}to{transform:rotateX(65deg) rotateZ(360deg)}}
    @keyframes rOrbit2{from{transform:rotateX(65deg) rotateZ(120deg)}to{transform:rotateX(65deg) rotateZ(480deg)}}
    @keyframes rOrbit3{from{transform:rotateX(65deg) rotateZ(240deg)}to{transform:rotateX(65deg) rotateZ(600deg)}}
    @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
    @keyframes shimmerSweep{from{transform:translateX(-120%) skewX(-20deg)}to{transform:translateX(220%) skewX(-20deg)}}
    @keyframes rippleAnim{to{transform:scale(1);opacity:0}}
    @keyframes cardIn{from{opacity:0;transform:translateY(40px) rotateX(20deg) scale(.94)}to{opacity:1;transform:translateY(0) rotateX(0) scale(1)}}
    @keyframes lineExpand{from{width:0;opacity:0}to{width:60px;opacity:1}}
    @keyframes lineCExpand{from{width:0;opacity:0}to{width:80px;opacity:1}}
    @keyframes upFade{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
    .page-wrap{cursor:none;}
    .loader{position:fixed;inset:0;background:linear-gradient(135deg,#080e1a,#1a2942);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:32px;z-index:9999;transition:opacity .7s ease,visibility .7s ease,transform .7s ease;}
    .loader.out{opacity:0;visibility:hidden;transform:scale(1.06);pointer-events:none;}
    .loader-sphere{width:120px;height:120px;position:relative;display:flex;align-items:center;justify-content:center;}
    .sphere-ring{position:absolute;inset:0;border-radius:50%;border:1px solid rgba(191,152,116,.35);}
    .loader .r1{inset:10px;animation:rOrbit1 2.5s linear infinite;}
    .loader .r2{inset:0;animation:rOrbit2 3.5s linear infinite;}
    .loader .r3{inset:-12px;animation:rOrbit3 5s linear infinite;}
    .sphere-core{width:52px;height:52px;border-radius:50%;background:radial-gradient(circle,rgba(191,152,116,.25),rgba(191,152,116,.05));border:1px solid rgba(191,152,116,.5);display:flex;align-items:center;justify-content:center;color:#BF9874;box-shadow:0 0 30px rgba(191,152,116,.3);animation:float 3s ease-in-out infinite;}
    .sphere-core svg{width:30px;height:30px;}
    .loader-track{width:220px;height:3px;background:rgba(255,255,255,.08);border-radius:99px;overflow:hidden;}
    .loader-fill{height:100%;background:linear-gradient(90deg,#BF9874,#e0b98a);border-radius:99px;animation:fillBar 2s ease-in-out infinite;}
    .loader-label{font-size:.72rem;font-weight:700;letter-spacing:2px;color:#BF9874;text-transform:uppercase;animation:labelPulse 2s ease-in-out infinite;}
    .cur-dot{position:fixed;width:8px;height:8px;border-radius:50%;background:#BF9874;pointer-events:none;z-index:99999;transform:translate(-50%,-50%);}
    .cur-ring{position:fixed;width:38px;height:38px;border-radius:50%;border:2px solid rgba(191,152,116,.55);pointer-events:none;z-index:99998;transform:translate(-50%,-50%);transition:width .25s,height .25s,border-color .25s;}
    .cur-trail{position:fixed;width:80px;height:80px;border-radius:50%;border:1px solid rgba(191,152,116,.15);pointer-events:none;z-index:99997;transform:translate(-50%,-50%);transition:width .4s,height .4s;}
    .page-wrap:has(button:hover) .cur-ring,.page-wrap:has(a:hover) .cur-ring{width:56px;height:56px;border-color:rgba(191,152,116,.9);}
    .anim-line{animation:lineExpand .8s ease-out both;}
    .header-decoration-left.anim-line-c,.header-decoration-right.anim-line-c{animation:lineCExpand .8s ease-out both;}
    .anim-up{animation:upFade .7s cubic-bezier(.23,1,.32,1) both;opacity:0;}
    .a-d1{animation-delay:.15s;}
    .anim-label-pulse{animation:labelPulse 3s ease-in-out infinite;}
    .tilt-card{transform-style:preserve-3d;position:relative;overflow:hidden;transition:transform .5s cubic-bezier(.23,1,.32,1),box-shadow .5s ease;opacity:0;animation:cardIn .7s cubic-bezier(.23,1,.32,1) calc(var(--i,0)*.1s) forwards;}
    .tilt-shine{position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:10;background:linear-gradient(105deg,transparent 45%,rgba(255,255,255,.18) 50%,transparent 55%);transform:translateX(-120%) skewX(-20deg);}
    .img-zoom{overflow:hidden;position:relative;}
    .img-zoom img{transition:transform .5s ease;}
    .img-zoom:hover img{transform:scale(1.1);}
    .img-sheen{position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,.3) 0%,transparent 50%);pointer-events:none;}
    .mag-btn{position:relative;overflow:hidden;transition:transform .25s ease;}
    .mag-btn::before{content:'';position:absolute;inset:0;background:linear-gradient(105deg,transparent 40%,rgba(255,255,255,.2) 50%,transparent 60%);transform:translateX(-120%) skewX(-20deg);pointer-events:none;}
    .mag-btn:hover::before{animation:shimmerSweep .6s ease forwards;}
  `]
})
export class NewsComponent implements OnInit, AfterViewInit {
  private seoService = inject(SeoService);
  private readonly http = inject(HttpClient);
  private readonly i18n = inject(I18nService);
  private readonly destroyRef = inject(DestroyRef);
  private chartInstances: Highcharts.Chart[] = [];
  private resizeObserver?: ResizeObserver;
<<<<<<< HEAD
  private rafId?: number;
  private curRx = 0; private curRy = 0;
  private trailRx = 0; private trailRy = 0;
=======
  private readonly apiUrl = 'https://patient-wonder-production.up.railway.app/api/posts';
  private readonly fallbackImage = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop';
>>>>>>> 6c2bf8ab9303933ae43cbf5c35ae6537463bd357
  private readonly handleVisibilityChange = () => {
    if (!document.hidden) {
      this.reflowCharts();
    }
  };

  @ViewChild('newsCategoryChart', { static: true })
  newsCategoryChart!: ElementRef<HTMLDivElement>;

  @ViewChild('newsCadenceChart', { static: true })
  newsCadenceChart!: ElementRef<HTMLDivElement>;

  @ViewChild('curDot') curDot!: ElementRef<HTMLDivElement>;
  @ViewChild('curRing') curRing!: ElementRef<HTMLDivElement>;
  @ViewChild('curTrail') curTrail!: ElementRef<HTMLDivElement>;

  currentPage = signal(1);
  isLoading = signal(true);
<<<<<<< HEAD
  isPageLoaded = signal(false);
  totalPages = 3;
  itemsPerPage = 3;
=======
  itemsPerPage = 6;
  protected readonly articles = signal<NewsArticle[]>([]);
  readonly totalPages = computed(() => Math.max(1, Math.ceil(this.articles().length / this.itemsPerPage)));
  readonly pageNumbers = computed(() => Array.from({ length: this.totalPages() }, (_, index) => index + 1));
>>>>>>> 6c2bf8ab9303933ae43cbf5c35ae6537463bd357

  ngOnInit() {
    this.seoService.updateMetadata({
      title: 'Actualités',
      description: 'Suivez les dernières actualités, événements et communications officielles du Conseil d\'État de la République Démocratique du Congo.',
      keywords: 'actualités, nouvelles, Conseil d\'État RDC, événements, communications officielles',
      ogUrl: '/news'
    });

<<<<<<< HEAD
    setTimeout(() => this.isPageLoaded.set(true), 1800);
    setTimeout(() => this.isLoading.set(false), 1500);
    this.destroyRef.onDestroy(() => { if (this.rafId) cancelAnimationFrame(this.rafId); });
=======
    this.loadNews();
>>>>>>> 6c2bf8ab9303933ae43cbf5c35ae6537463bd357
  }

  ngAfterViewInit() {
    this.renderNewsCharts();
    this.setupChartObservers([this.newsCategoryChart, this.newsCadenceChart]);
    this.initCursor();
    this.destroyRef.onDestroy(() => {
      this.chartInstances.forEach(chart => chart.destroy());
      this.chartInstances = [];
      document.removeEventListener('visibilitychange', this.handleVisibilityChange);
      this.resizeObserver?.disconnect();
      this.resizeObserver = undefined;
      if (this.rafId) cancelAnimationFrame(this.rafId);
    });
  }

  private initCursor() {
    const dot = this.curDot?.nativeElement;
    const ring = this.curRing?.nativeElement;
    const trail = this.curTrail?.nativeElement;
    if (!dot || !ring || !trail) return;
    let mx = 0, my = 0;
    document.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; dot.style.left = mx + 'px'; dot.style.top = my + 'px'; });
    const anim = () => {
      this.curRx += (mx - this.curRx) * 0.14;
      this.curRy += (my - this.curRy) * 0.14;
      this.trailRx += (mx - this.trailRx) * 0.07;
      this.trailRy += (my - this.trailRy) * 0.07;
      ring.style.left = this.curRx + 'px'; ring.style.top = this.curRy + 'px';
      trail.style.left = this.trailRx + 'px'; trail.style.top = this.trailRy + 'px';
      this.rafId = requestAnimationFrame(anim);
    };
    requestAnimationFrame(anim);
    document.querySelectorAll('.page-wrap button,.page-wrap a').forEach(el => {
      el.addEventListener('mouseenter', () => { ring.style.width = '56px'; ring.style.height = '56px'; ring.style.borderColor = 'rgba(191,152,116,.9)'; trail.style.width = '90px'; trail.style.height = '90px'; });
      el.addEventListener('mouseleave', () => { ring.style.width = '38px'; ring.style.height = '38px'; ring.style.borderColor = 'rgba(191,152,116,.55)'; trail.style.width = '80px'; trail.style.height = '80px'; });
    });
  }

  tilt(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
    const dy = (e.clientY - r.top - r.height / 2) / (r.height / 2);
    const tx = -dy * 14; const ty = dx * 14;
    el.style.transform = `perspective(900px) rotateX(${tx}deg) rotateY(${ty}deg) translateZ(14px)`;
    el.style.boxShadow = `${-ty * 1.5}px ${tx * 1.5}px 50px rgba(0,0,0,.18)`;
    const shine = el.querySelector<HTMLElement>('.tilt-shine');
    if (shine) { shine.style.transform = `translateX(${dx * 60}%) translateY(${dy * 40}%) skewX(-20deg)`; shine.style.opacity = '.7'; }
  }

  tiltReset(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    el.style.transform = ''; el.style.boxShadow = '';
    const shine = el.querySelector<HTMLElement>('.tilt-shine');
    if (shine) { shine.style.transform = 'translateX(-120%) skewX(-20deg)'; shine.style.opacity = '0'; }
  }

  mag(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width / 2) * 0.4;
    const dy = (e.clientY - r.top - r.height / 2) * 0.4;
    el.style.transform = `translate(${dx}px,${dy}px)`;
  }

  magOut(e: MouseEvent) { (e.currentTarget as HTMLElement).style.transform = ''; }

  ripple(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    const r = el.getBoundingClientRect();
    const rip = document.createElement('span');
    const size = Math.max(r.width, r.height) * 2;
    rip.style.cssText = `position:absolute;width:${size}px;height:${size}px;border-radius:50%;background:rgba(255,255,255,.35);transform:scale(0);left:${e.clientX - r.left - size / 2}px;top:${e.clientY - r.top - size / 2}px;animation:rippleAnim .6s ease-out forwards;pointer-events:none;z-index:10;`;
    const style = document.createElement('style');
    style.textContent = '@keyframes rippleAnim{to{transform:scale(1);opacity:0;}}';
    document.head.appendChild(style);
    el.style.position = 'relative'; el.style.overflow = 'hidden';
    el.appendChild(rip);
    setTimeout(() => { rip.remove(); style.remove(); }, 700);
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
      color: '#007FFF',
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
          color: 'rgba(0, 127, 255, 0.7)'
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
          color: '#007FFF',
          marker: { radius: 4 }
        }
      ]
    };

    this.chartInstances = [
      Highcharts.chart(this.newsCategoryChart.nativeElement, categoryTrendOptions),
      Highcharts.chart(this.newsCadenceChart.nativeElement, cadenceOptions)
    ];
  }

  getCurrentPageArticles() {
    const startIndex = (this.currentPage() - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.articles().slice(startIndex, endIndex);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
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
    if (this.currentPage() < this.totalPages()) {
      this.goToPage(this.currentPage() + 1);
    }
  }

  private loadNews() {
    this.isLoading.set(true);
    this.http.get<PostsResponse>(this.apiUrl).subscribe({
      next: (response) => {
        const posts = (response?.posts ?? [])
          .sort((a, b) => this.getTimestamp(b.date) - this.getTimestamp(a.date))
          .map((post) => this.mapPostToArticle(post));

        this.articles.set(posts);
        if (this.currentPage() > this.totalPages()) {
          this.currentPage.set(1);
        }
        this.isLoading.set(false);
      },
      error: () => {
        this.articles.set([]);
        this.isLoading.set(false);
      }
    });
  }

  private mapPostToArticle(post: ApiPost): NewsArticle {
    const title = post.title?.trim() || 'Untitled';
    const excerpt = post.excerpt?.trim() || post.content?.trim() || '';
    const category = post.category?.trim() || 'General';
    const image = post.image_url?.trim() || this.fallbackImage;
    return {
      id: post.id,
      title,
      excerpt,
      category,
      image,
      date: this.formatDate(post.date),
      link: post.external_link?.trim() || undefined
    };
  }

  private formatDate(dateValue?: string | null): string {
    if (!dateValue) {
      return '';
    }
    const parsed = new Date(dateValue);
    if (Number.isNaN(parsed.getTime())) {
      return '';
    }
    const lang = this.i18n.activeLang();
    return new Intl.DateTimeFormat(lang, {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).format(parsed);
  }

  private getTimestamp(dateValue?: string | null): number {
    if (!dateValue) {
      return 0;
    }
    const parsed = new Date(dateValue);
    return Number.isNaN(parsed.getTime()) ? 0 : parsed.getTime();
  }
}

type ApiPost = {
  id: number;
  title?: string | null;
  content?: string | null;
  excerpt?: string | null;
  category?: string | null;
  image_url?: string | null;
  date?: string | null;
  external_link?: string | null;
  status?: string | null;
};

type PostsResponse = {
  posts?: ApiPost[];
};

type NewsArticle = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  link?: string;
};
