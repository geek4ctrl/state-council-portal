import { Component, signal, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonLoaderComponent } from '../../components/skeleton-loader/skeleton-loader.component';
import { IconComponent } from '../../components/icon/icon.component';
import { LazyLoadDirective } from '../../directives/lazy-load.directive';
import { SeoService } from '../../services/seo.service';
import { I18nPipe } from '../../i18n/i18n.pipe';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, SkeletonLoaderComponent, IconComponent, LazyLoadDirective, I18nPipe],
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

          <div class="news-grid">
            @if (isLoading()) {
              @for (item of [1, 2, 3]; track item) {
                <app-skeleton-loader type="news-card"></app-skeleton-loader>
              }
            } @else {
              @for (article of newsArticles; track article.id) {
                <article class="news-card">
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
      padding-top: 80px;
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
    }

    .hero-right p {
      font-size: 1.05rem;
      line-height: 1.8;
      margin: 0;
      opacity: 0.95;
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
      color: #2c3e50;
      font-size: 0.9rem;
      font-weight: 500;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .read-more:hover {
      color: #8B6914;
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
      border-color: #8B6914;
      color: #8B6914;
    }

    .pagination-btn:hover:not(:disabled) {
      border-color: #8B6914;
      color: #8B6914;
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
export class NewsComponent implements OnInit {
  private seoService = inject(SeoService);
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
