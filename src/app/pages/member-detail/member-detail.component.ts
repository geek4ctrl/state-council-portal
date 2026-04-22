import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { MemberService } from '../../services/members.service';
import { I18nPipe } from '../../i18n/i18n.pipe';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-member-detail',
  imports: [CommonModule, RouterLink, NgOptimizedImage, I18nPipe, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="member-page">
      <section class="hero-banner">
        <div class="container">
          <a routerLink="/presentation" class="back-link">{{ 'memberDetail.back' | i18n }}</a>
          <div class="hero-content">
            <h1 class="member-title">{{ 'memberDetail.title' | i18n }}</h1>
            <span class="hero-divider" aria-hidden="true"></span>
            <p class="member-subtitle">{{ 'memberDetail.subtitle' | i18n }}</p>
          </div>
        </div>
      </section>

      <section class="member-content page-container">
        <div class="container">
          @if (member()) {
            <article class="member-card glass-card">
              <div class="member-photo">
                <img [ngSrc]="member()!.image" [alt]="member()!.name" width="360" height="420">
              </div>
              <div class="member-details">
                <div class="member-header">
                  <p class="role-pill">{{ member()!.role | titlecase }}</p>
                  <h2>{{ member()!.name }}</h2>
                  <p class="member-role">{{ member()!.title }}</p>
                </div>

                <p class="member-summary">{{ member()!.summary }}</p>

                <dl class="member-meta">
                  <div>
                    <dt>{{ 'memberDetail.office' | i18n }}</dt>
                    <dd>{{ member()!.office }}</dd>
                  </div>
                  <div>
                    <dt>{{ 'memberDetail.email' | i18n }}</dt>
                    <dd><a [href]="'mailto:' + member()!.email">{{ member()!.email }}</a></dd>
                  </div>
                </dl>
              </div>
            </article>
          } @else {
            <div class="not-found" role="status" aria-live="polite">
              <h2>{{ 'memberDetail.notFound.title' | i18n }}</h2>
              <p>{{ 'memberDetail.notFound.body' | i18n }}</p>
              <a routerLink="/presentation" class="back-link">{{ 'memberDetail.notFound.cta' | i18n }}</a>
            </div>
          }
        </div>
      </section>
      <app-footer></app-footer>
    </div>
  `,
  styles: [
    `
      .member-page {
        min-height: 100vh;
        background: #f8f9fb;
        color: #1a2942;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 16px;
      }

      .hero-banner {
        position: relative;
        color: #ffffff;
        padding: 90px 0 70px;
        background:
          linear-gradient(90deg, rgba(16, 27, 43, 0.88) 0%, rgba(16, 27, 43, 0.64) 55%, rgba(16, 27, 43, 0.42) 100%),
          url('https://images.unsplash.com/photo-1444628838545-ac100e7d4ecf?auto=format&fit=crop&w=1920&h=400&q=80') center/cover no-repeat;
        overflow: hidden;
      }

      .hero-banner::after {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at 20% 20%, rgba(31, 155, 217, 0.2), transparent 55%);
        pointer-events: none;
      }

      .hero-banner .container {
        position: relative;
        z-index: 1;
      }

      .back-link {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: #f8fbff;
        text-decoration: none;
        font-weight: 600;
        letter-spacing: 0.6px;
        margin-bottom: 20px;
        background: rgba(255, 255, 255, 0.14);
        border: 1px solid rgba(255, 255, 255, 0.45);
        padding: 8px 16px;
        border-radius: 999px;
        box-shadow: 0 12px 26px rgba(15, 23, 42, 0.35);
        cursor: pointer;
        transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
      }

      .back-link:hover {
        border-color: rgba(255, 255, 255, 0.7);
        box-shadow: 0 14px 28px rgba(15, 23, 42, 0.45);
        transform: translateY(-1px);
      }

      .hero-content {
        display: grid;
        grid-template-columns: minmax(0, 1.1fr) 1px minmax(0, 1fr);
        gap: 34px;
        align-items: center;
      }

      .hero-divider {
        width: 1px;
        height: 110px;
        background: rgba(255, 255, 255, 0.6);
      }

      .member-title {
        margin: 0;
        font-size: clamp(2.2rem, 4.8vw, 3.1rem);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: #ffffff;
        text-align: center;
      }

      .member-subtitle {
        margin: 0;
        color: rgba(255, 255, 255, 0.88);
        font-size: 1.05rem;
        line-height: 1.7;
      }

      .member-content {
        padding: 32px 0 80px;
      }

      .page-container {
        margin: 0 auto;
        background: transparent;
      }

      .member-card {
        display: grid;
        grid-template-columns: 360px 1fr;
        gap: 40px;
        background: #ffffff;
        border-radius: 16px;
        border: 1px solid #e8ecf1;
        box-shadow: 0 6px 24px rgba(17, 24, 39, 0.08);
        padding: 32px;
      }

      .member-photo {
        overflow: hidden;
        border-radius: 12px;
        background: #f1f5f9;
      }

      .member-photo img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .member-details h2 {
        margin: 10px 0 6px;
        font-size: 2rem;
        font-weight: 600;
        color: #1a2942;
      }

      .role-pill {
        display: inline-block;
        background: rgba(42, 159, 212, 0.12);
        color: #2a9fd4;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 4px 10px;
        font-size: 0.7rem;
        font-weight: 600;
        border-radius: 999px;
      }

      .member-role {
        color: #64748b;
        margin: 0 0 20px;
      }

      .member-summary {
        line-height: 1.8;
        color: #334155;
        margin-bottom: 24px;
      }

      .member-meta {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 20px;
        margin: 0;
      }

      .member-meta dt {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #64748b;
      }

      .member-meta dd {
        margin: 6px 0 0;
        font-size: 0.95rem;
        color: #0f172a;
      }

      .member-meta a {
        color: #2a9fd4;
        text-decoration: none;
      }

      .member-meta a:hover {
        color: #1a7da8;
      }

      .not-found {
        background: #ffffff;
        border: 1px solid #e8ecf1;
        border-left: 4px solid #2a9fd4;
        border-radius: 12px;
        padding: 30px;
        color: #1a2942;
      }

      .not-found h2 {
        margin-top: 0;
      }

      @media (max-width: 900px) {
        .hero-content {
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .hero-divider {
          display: none;
        }

        .member-title,
        .member-subtitle {
          text-align: left;
        }

        .member-card {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 600px) {
        .member-title {
          font-size: 2rem;
        }

        .member-meta {
          grid-template-columns: 1fr;
        }
      }
    `
  ]
})
export class MemberDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly memberService = inject(MemberService);

  readonly slug = toSignal(this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')), {
    initialValue: ''
  });
  readonly member = computed(() => this.memberService.getBySlug(this.slug()));
}
