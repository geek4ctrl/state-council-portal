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
      <section class="member-hero">
        <div class="container">
          <a routerLink="/organization" class="back-link">{{ 'memberDetail.back' | i18n }}</a>
          <h1 class="member-title">{{ 'memberDetail.title' | i18n }}</h1>
          <p class="member-subtitle">{{ 'memberDetail.subtitle' | i18n }}</p>
        </div>
      </section>

      <section class="member-content">
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
              <a routerLink="/organization" class="back-link">{{ 'memberDetail.notFound.cta' | i18n }}</a>
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
        background: #0a1929;
        color: white;
      }

      .container {
        max-width: 1100px;
        margin: 0 auto;
        padding: 0 20px;
      }

      .member-hero {
        background: linear-gradient(rgba(10, 25, 41, 0.75), rgba(10, 25, 41, 0.9)),
          url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&h=500&fit=crop') center/cover;
        padding: 70px 0 60px;
      }

      .back-link {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: #007FFF;
        text-decoration: none;
        font-weight: 600;
        letter-spacing: 0.5px;
      }

      .back-link:hover {
        color: #d7b591;
      }

      .member-title {
        font-size: 2.6rem;
        font-weight: 300;
        margin: 20px 0 8px;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .member-subtitle {
        color: rgba(255, 255, 255, 0.7);
        font-size: 1rem;
      }

      .member-content {
        padding: 60px 0 80px;
      }

      .member-card {
        display: grid;
        grid-template-columns: 360px 1fr;
        gap: 40px;
        background: #1a2942;
        padding: 30px;
      }

      .member-photo {
        overflow: hidden;
        background: #22324d;
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
      }

      .role-pill {
        display: inline-block;
        background: rgba(0, 127, 255, 0.12);
        color: #007FFF;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 4px 10px;
        font-size: 0.7rem;
        font-weight: 600;
      }

      .member-role {
        color: rgba(255, 255, 255, 0.7);
        margin: 0 0 20px;
      }

      .member-summary {
        line-height: 1.8;
        color: rgba(255, 255, 255, 0.8);
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
        color: rgba(255, 255, 255, 0.5);
      }

      .member-meta dd {
        margin: 6px 0 0;
        font-size: 0.95rem;
      }

      .member-meta a {
        color: #007FFF;
        text-decoration: none;
      }

      .member-meta a:hover {
        color: #d7b591;
      }

      .not-found {
        background: #1a2942;
        padding: 30px;
        border-left: 4px solid #007FFF;
      }

      .not-found h2 {
        margin-top: 0;
      }

      @media (max-width: 900px) {
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
