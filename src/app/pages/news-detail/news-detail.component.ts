import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { I18nPipe } from '../../i18n/i18n.pipe';
import { I18nService } from '../../i18n/i18n.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FooterComponent, I18nPipe],
  template: `
    <div class="page-wrap detail-page">
      <section class="detail-hero">
        <div class="container">
          <a class="back-link" [routerLink]="['/news']">&larr; {{ 'news.detail.back' | i18n }}</a>
          <div class="hero-content">
            <p class="hero-kicker">{{ 'news.detail.title' | i18n }}</p>
            <h1 class="hero-title">{{ article()?.title || 'News' }}</h1>
            @if (article()) {
              <p class="hero-meta">
                <span>{{ article()!.date }}</span>
                <span class="meta-divider">|</span>
                <span>{{ article()!.category }}</span>
              </p>
            }
          </div>
        </div>
      </section>

      <section class="detail-body">
        <div class="container">
          @if (isLoading()) {
            <div class="detail-card loading">Loading...</div>
          } @else if (notFound()) {
            <div class="detail-card loading">Article not found.</div>
          } @else if (article()) {
            <article class="detail-card">
              <div class="detail-media">
                <img [src]="article()!.image" [alt]="article()!.title" loading="lazy" />
              </div>
              <div class="detail-content">
                @if (article()!.excerpt) {
                  <p class="detail-excerpt">{{ article()!.excerpt }}</p>
                }
                @if (article()!.content) {
                  <div class="detail-text" [innerHTML]="article()!.content"></div>
                }
              </div>
            </article>
          }
        </div>
      </section>

      <app-footer></app-footer>
    </div>
  `,
  styles: [
    `
      * {
        box-sizing: border-box;
      }

      .detail-page {
        background: #f8fafc;
        min-height: 100vh;
      }

      .container {
        max-width: 1100px;
        margin: 0 auto;
        padding: 0 20px;
      }

      .detail-hero {
        padding: 90px 0 70px;
        color: #ffffff;
        background:
          linear-gradient(90deg, rgba(16, 27, 43, 0.92) 0%, rgba(16, 27, 43, 0.7) 55%, rgba(16, 27, 43, 0.5) 100%),
          url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&h=480&fit=crop')
            center/cover;
      }

      .back-link {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: #ffffff;
        text-decoration: none;
        font-weight: 600;
        letter-spacing: 0.5px;
        margin-bottom: 24px;
        background: rgba(255, 255, 255, 0.18);
        border: 1px solid rgba(255, 255, 255, 0.4);
        padding: 8px 16px;
        border-radius: 999px;
      }

      .hero-content {
        max-width: 760px;
      }

      .hero-kicker {
        margin: 0 0 12px;
        letter-spacing: 3px;
        text-transform: uppercase;
        font-size: 0.85rem;
        color: rgba(255, 255, 255, 0.7);
      }

      .hero-title {
        margin: 0 0 14px;
        font-size: clamp(2.1rem, 4vw, 3rem);
        text-transform: uppercase;
        letter-spacing: 1.6px;
      }

      .hero-meta {
        margin: 0;
        display: flex;
        gap: 10px;
        color: rgba(255, 255, 255, 0.85);
      }

      .meta-divider {
        color: rgba(255, 255, 255, 0.55);
      }

      .detail-body {
        padding: 40px 0 80px;
      }

      .detail-card {
        background: #ffffff;
        border-radius: 20px;
        box-shadow: 0 20px 40px rgba(26, 41, 66, 0.12);
        overflow: hidden;
      }

      .detail-card.loading {
        padding: 32px;
        text-align: center;
        font-weight: 600;
        color: #1f2937;
      }

      .detail-media {
        background: #e2e8f0;
        overflow: hidden;
      }

      .detail-media img {
        width: 100%;
        height: auto;
        object-fit: contain;
        display: block;
      }

      .detail-content {
        padding: 28px 32px 36px;
      }

      .detail-excerpt {
        margin: 0 0 20px;
        font-size: 1.05rem;
        line-height: 1.7;
        color: #1f2937;
        font-weight: 600;
      }

      .detail-text {
        font-size: 1rem;
        line-height: 1.8;
        color: #4b5563;
      }

      .detail-text p {
        margin: 0 0 16px;
      }

      @media (max-width: 768px) {
        .detail-hero {
          padding: 70px 0 50px;
        }

        .detail-content {
          padding: 24px;
        }
      }
    `,
  ],
})
export class NewsDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly http = inject(HttpClient);
  private readonly seoService = inject(SeoService);
  private readonly i18n = inject(I18nService);
  private readonly apiUrl = 'https://patient-wonder-production.up.railway.app/api/posts';
  private readonly fallbackImage =
    'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop';

  protected readonly isLoading = signal(true);
  protected readonly notFound = signal(false);
  protected readonly article = signal<NewsDetail | null>(null);
  protected readonly title = computed(() => this.article()?.title || 'News');

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      if (!id) {
        this.notFound.set(true);
        this.isLoading.set(false);
        return;
      }
      this.loadNewsDetail(id);
    });
  }

  private loadNewsDetail(id: number) {
    this.isLoading.set(true);
    this.notFound.set(false);
    this.http.get<PostsResponse>(this.apiUrl).subscribe({
      next: (response) => {
        const post = (response?.posts ?? []).find((item) => item.id === id);
        if (!post) {
          this.notFound.set(true);
          this.isLoading.set(false);
          return;
        }
        const detail = this.mapPostToDetail(post);
        this.article.set(detail);
        this.seoService.updateMetadata({
          title: detail.title,
          description: detail.excerpt || detail.title,
          keywords: 'news, actualites, Conseil d\'Etat RDC',
          ogUrl: `/news/${id}`,
        });
        this.isLoading.set(false);
      },
      error: () => {
        this.notFound.set(true);
        this.isLoading.set(false);
      },
    });
  }

  private mapPostToDetail(post: ApiPost): NewsDetail {
    const title = post.title?.trim() || 'Untitled';
    const excerpt = post.excerpt?.trim() || post.content?.trim() || '';
    return {
      id: post.id,
      title,
      excerpt,
      category: post.category?.trim() || 'General',
      image: post.image_url?.trim() || this.fallbackImage,
      date: this.formatDate(post.date),
      content: post.content?.trim() || '',
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
      year: 'numeric',
    }).format(parsed);
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

type NewsDetail = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  content: string;
};
