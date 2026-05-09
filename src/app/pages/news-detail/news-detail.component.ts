import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { SkeletonLoaderComponent } from '../../components/skeleton-loader/skeleton-loader.component';
import { I18nPipe } from '../../i18n/i18n.pipe';
import { I18nService } from '../../i18n/i18n.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FooterComponent, SkeletonLoaderComponent, I18nPipe],
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
                <span class="meta-divider">|</span>
                <span>{{ 'news.detail.readTime' | i18n : { count: article()!.readingTime } }}</span>
              </p>
            }
          </div>
        </div>
      </section>

      <section class="detail-body">
        <div class="container">
          @if (isLoading()) {
            <div class="detail-card">
              <app-skeleton-loader type="article"></app-skeleton-loader>
            </div>
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
              <div class="share-section">
                <span class="share-label">{{ 'news.detail.share' | i18n }}</span>
                <div class="share-buttons">
                  <button class="share-btn twitter" (click)="shareTwitter()" aria-label="Share on X">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </button>
                  <button class="share-btn facebook" (click)="shareFacebook()" aria-label="Share on Facebook">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </button>
                  <button class="share-btn linkedin" (click)="shareLinkedIn()" aria-label="Share on LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </button>
                  <button class="share-btn whatsapp" (click)="shareWhatsApp()" aria-label="Share on WhatsApp">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </button>
                  <button class="share-btn copy" (click)="copyLink()" aria-label="Copy link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                    </svg>
                    @if (copied()) {
                      <span class="copy-tooltip">{{ 'news.detail.share.copied' | i18n }}</span>
                    }
                  </button>
                </div>
              </div>
            </article>
          }
        </div>
      </section>

      @if (relatedPosts().length > 0) {
        <section class="related-section">
          <div class="container">
            <h2 class="related-title">{{ 'news.detail.related' | i18n }}</h2>
            <div class="related-grid">
              @for (post of relatedPosts(); track post.id) {
                <a class="related-card" [routerLink]="['/news', post.id]">
                  <div class="related-media">
                    <img [src]="post.image" [alt]="post.title" loading="lazy" />
                  </div>
                  <div class="related-body">
                    <span class="related-category">{{ post.category }}</span>
                    <h3 class="related-heading">{{ post.title }}</h3>
                    <span class="related-date">{{ post.date }}</span>
                  </div>
                </a>
              }
            </div>
          </div>
        </section>
      }

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

      .related-section {
        padding: 0 0 80px;
        background: #f8fafc;
      }

      .related-title {
        font-size: 1.4rem;
        font-weight: 700;
        color: #1e293b;
        margin: 0 0 28px;
        letter-spacing: 0.5px;
      }

      .related-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
      }

      .related-card {
        background: #ffffff;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 8px 24px rgba(26, 41, 66, 0.08);
        text-decoration: none;
        transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s ease;
        display: flex;
        flex-direction: column;
      }

      .related-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 16px 40px rgba(26, 41, 66, 0.14);
      }

      .related-media {
        background: #e2e8f0;
        aspect-ratio: 16 / 10;
        overflow: hidden;
      }

      .related-media img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.4s ease;
      }

      .related-card:hover .related-media img {
        transform: scale(1.05);
      }

      .related-body {
        padding: 20px 22px 24px;
        display: flex;
        flex-direction: column;
        flex: 1;
      }

      .related-category {
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #1F9BD9;
        margin-bottom: 8px;
      }

      .related-heading {
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.4;
        color: #1e293b;
        margin: 0 0 12px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .related-date {
        font-size: 0.85rem;
        color: #64748b;
        margin-top: auto;
      }

      .share-section {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 24px 32px 28px;
        border-top: 1px solid #e2e8f0;
      }

      .share-label {
        font-size: 0.9rem;
        font-weight: 600;
        color: #64748b;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .share-buttons {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      }

      .share-btn {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        position: relative;
      }

      .share-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      .share-btn svg {
        width: 18px;
        height: 18px;
      }

      .share-btn.twitter {
        background: #000000;
        color: #ffffff;
      }

      .share-btn.facebook {
        background: #1877F2;
        color: #ffffff;
      }

      .share-btn.linkedin {
        background: #0A66C2;
        color: #ffffff;
      }

      .share-btn.whatsapp {
        background: #25D366;
        color: #ffffff;
      }

      .share-btn.copy {
        background: #f1f5f9;
        color: #475569;
      }

      .share-btn.copy:hover {
        background: #e2e8f0;
      }

      .copy-tooltip {
        position: absolute;
        bottom: calc(100% + 8px);
        left: 50%;
        transform: translateX(-50%);
        background: #1e293b;
        color: #ffffff;
        font-size: 0.75rem;
        font-weight: 600;
        padding: 4px 10px;
        border-radius: 6px;
        white-space: nowrap;
        pointer-events: none;
        animation: tooltipIn 0.2s ease;
      }

      .copy-tooltip::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-width: 5px;
        border-style: solid;
        border-color: #1e293b transparent transparent transparent;
      }

      @keyframes tooltipIn {
        from {
          opacity: 0;
          transform: translateX(-50%) translateY(4px);
        }
        to {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }
      }

      @media (max-width: 768px) {
        .detail-hero {
          padding: 70px 0 50px;
        }

        .detail-content {
          padding: 24px;
        }

        .share-section {
          padding: 20px 24px 24px;
          gap: 12px;
          flex-wrap: wrap;
        }

        .related-grid {
          grid-template-columns: 1fr;
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
  protected readonly relatedPosts = signal<NewsDetail[]>([]);
  protected readonly copied = signal(false);
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
        const posts = response?.posts ?? [];
        const post = posts.find((item) => item.id === id);
        if (!post) {
          this.notFound.set(true);
          this.isLoading.set(false);
          return;
        }
        const detail = this.mapPostToDetail(post);
        this.article.set(detail);
        this.setRelatedPosts(posts, id, detail.category);
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
    const content = post.content?.trim() || '';
    return {
      id: post.id,
      title,
      excerpt,
      category: post.category?.trim() || 'General',
      image: post.image_url?.trim() || this.fallbackImage,
      date: this.formatDate(post.date),
      content,
      readingTime: this.calculateReadingTime(content),
    };
  }

  private calculateReadingTime(content: string): number {
    const text = content.replace(/<[^>]*>/g, ' ').trim();
    const words = text.split(/\s+/).filter((w) => w.length > 0).length;
    return Math.max(1, Math.ceil(words / 200));
  }

  private setRelatedPosts(posts: ApiPost[], currentId: number, currentCategory: string): void {
    const candidates = posts
      .filter((p) => p.id !== currentId)
      .map((p) => this.mapPostToDetail(p));

    // Prioritize same category, then most recent
    const sameCategory = candidates.filter((p) => p.category === currentCategory);
    const others = candidates.filter((p) => p.category !== currentCategory);
    const combined = [...sameCategory, ...others];

    this.relatedPosts.set(combined.slice(0, 3));
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

  protected getShareUrl(): string {
    return window.location.href;
  }

  protected shareTwitter(): void {
    const url = this.getShareUrl();
    const text = encodeURIComponent(this.article()?.title || '');
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${text}`, '_blank', 'width=600,height=400');
  }

  protected shareFacebook(): void {
    const url = this.getShareUrl();
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'width=600,height=400');
  }

  protected shareLinkedIn(): void {
    const url = this.getShareUrl();
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank', 'width=600,height=400');
  }

  protected shareWhatsApp(): void {
    const url = this.getShareUrl();
    const text = encodeURIComponent(this.article()?.title || '');
    window.open(`https://wa.me/?text=${text}%20${encodeURIComponent(url)}`, '_blank');
  }

  protected copyLink(): void {
    const url = this.getShareUrl();
    navigator.clipboard.writeText(url).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    });
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
  readingTime: number;
};
