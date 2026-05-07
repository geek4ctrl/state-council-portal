import { Component, ChangeDetectionStrategy, computed, inject } from '@angular/core';
import { I18nPipe } from '../../i18n/i18n.pipe';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { MemberService } from '../../services/members.service';

function cloudSrc(url: string): string {
  // Inject Cloudinary transformation: w_180,h_220,c_fill,g_face,q_auto,f_auto
  return url.replace('/upload/', '/upload/w_180,h_220,c_fill,g_face,q_auto,f_auto/');
}

@Component({
  selector: 'app-judges',
  imports: [I18nPipe, FooterComponent, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="hero-banner">
      <div class="container">
        <a class="back-link" routerLink="/presentation/organisations">
          {{ 'memberDetail.backToOrganization' | i18n }}
        </a>
        <div class="hero-content">
          <h1 class="hero-title">{{ 'judges.title' | i18n }}</h1>
          <span class="hero-divider" aria-hidden="true"></span>
          <p class="hero-body">{{ 'judges.body' | i18n }}</p>
        </div>
      </div>
    </section>

    <div class="page-container">
      <section class="judges-list">
        <h2 class="section-title">{{ 'organization.greffe.firstPresidentsTitle' | i18n }}</h2>
        <div class="members-grid first-president-grid">
          @for (president of firstPresidents; track president.name) {
            <article class="member-card">
              <div class="member-photo">
                <img
                  [src]="cloudSrc(president.image)"
                  [alt]="president.name"
                  width="180"
                  height="220"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div class="member-text">
                <h3>{{ president.name }}</h3>
                <p>{{ president.years }}</p>
              </div>
            </article>
          }
        </div>

        <h2 class="section-title">{{ 'organization.orgPage.roles.sectionPresidents.title' | i18n }}</h2>
        <div class="members-grid section-president-grid">
          @for (sp of sectionPresidents; track sp.name) {
            <article class="member-card">
              <div class="member-photo">
                <img
                  [src]="cloudSrc(sp.image)"
                  [alt]="sp.name"
                  width="180"
                  height="220"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div class="member-text">
                <h3>{{ sp.name }}</h3>
                <p>{{ sp.role }}</p>
              </div>
            </article>
          }
        </div>

        <h2 class="section-title">{{ 'organization.greffe.presidentsTitle' | i18n }}</h2>
        <div class="members-grid">
          @for (president of presidents(); track president.email) {
            <article class="member-card">
              <div class="member-photo">
                <img
                  [src]="cloudSrc(president.image)"
                  [alt]="president.name"
                  width="180"
                  height="220"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div class="member-text">
                <h3>{{ president.name }}</h3>
                <p>{{ 'organization.chart.roles.president' | i18n }}</p>
              </div>
            </article>
          }
        </div>

        <h2 class="section-title">{{ 'organization.greffe.advisorsTitle' | i18n }}</h2>
        <div class="members-grid">
          @for (advisor of advisors(); track advisor.email) {
            <article class="member-card">
              <div class="member-photo">
                <img
                  [src]="cloudSrc(advisor.image)"
                  [alt]="advisor.name"
                  width="180"
                  height="220"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div class="member-text">
                <h3>{{ advisor.name }}</h3>
                <p>{{ 'organization.chart.roles.advisor' | i18n }}</p>
              </div>
            </article>
          }
        </div>
      </section>

      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      background: #f8f9fb;
      min-height: 100vh;
    }
    .page-container {
      background: #f8f9fb;
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
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
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
    .hero-title {
      margin: 0;
      font-size: clamp(2.2rem, 4.8vw, 3.1rem);
      letter-spacing: 2px;
      color: #ffffff;
      text-align: center;
    }
    .hero-divider {
      width: 1px;
      height: 110px;
      background: rgba(255, 255, 255, 0.6);
    }
    .hero-body {
      margin: 0;
      font-size: 1.05rem;
      line-height: 1.7;
      color: rgba(255, 255, 255, 0.88);
    }
    .judges-list {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 1rem 3rem;
    }
    .section-title {
      font-size: 1.4rem;
      font-weight: 700;
      color: #1a2942;
      margin: 2.5rem 0 1.2rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #e8ecf1;
    }
    .members-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
      gap: 1.4rem;
    }
    .first-president-grid,
    .section-president-grid {
      display: flex;
      justify-content: center;
      gap: 1.4rem;
      flex-wrap: wrap;
    }
    .member-card {
      display: flex;
      align-items: center;
      gap: 1.2rem;
      padding: 1.2rem;
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
      border: 1px solid #f0f0f0;
      transition: box-shadow 0.2s ease;
    }
    .member-card:hover {
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    }
    .member-photo {
      position: relative;
      flex-shrink: 0;
      width: 80px;
      height: 98px;
      border-radius: 12px;
      background: linear-gradient(90deg, #e8ecf1 25%, #f0f3f7 50%, #e8ecf1 75%);
      background-size: 200% 100%;
      animation: shimmer 1.4s infinite;
      overflow: hidden;
    }
    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    .member-photo img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      border-radius: 12px;
      object-fit: cover;
      display: block;
    }
    .member-photo img.loaded {
      animation: none;
    }
    .member-text h3 {
      margin: 0 0 4px;
      font-size: 1rem;
      color: #1a2942;
    }
    .member-text p {
      margin: 0;
      font-size: 0.9rem;
      color: #64748b;
    }
  `]
})
export class JudgesComponent {
  private readonly memberService = inject(MemberService);

  readonly cloudSrc = cloudSrc;

  readonly firstPresidents = [
    {
      name: 'Brigitte Nsensele wa Nsensele',
      years: '2025 - à ce jour',
      image:
        'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1772555485/Brigitte_NSENSELE_wa_NSENSELE_OK.jpg_ndsjzg.jpg',
    },
  ];

  readonly sectionPresidents = [
    {
      name: 'Eugène Kibwe Muter',
      role: 'Président de la section consultative',
      image:
        'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1772556921/Eug%C3%A8ne_KIBWE_MUTER.jpg_bacl4e.jpg',
    },
    {
      name: 'Hippolyte Masani Matshi',
      role: 'Président de la section du contentieux',
      image:
        'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1772556705/PRES_MASANI_40x50.jpg_ast5mq.jpg',
    },
  ];

  readonly presidents = computed(() =>
    this.memberService.members.filter((m) => m.role === 'president' && !m.name.includes('NSENSELE'))
  );

  readonly advisors = computed(() =>
    this.memberService.members.filter((m) => m.role === 'advisor')
  );
}
