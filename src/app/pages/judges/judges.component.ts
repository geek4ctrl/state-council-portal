import { Component, ChangeDetectionStrategy, computed, inject } from '@angular/core';
import { I18nPipe } from '../../i18n/i18n.pipe';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { MemberService } from '../../services/members.service';

function cloudSrc(url: string): string {
  return url.replace('/upload/', '/upload/w_240,h_300,c_fill,g_face,q_auto,f_auto/');
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
                  width="240"
                  height="300"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div class="member-text">
                <h3>{{ president.name }}</h3>
                <span class="role-plain">{{ president.years }}</span>
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
                  width="240"
                  height="300"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div class="member-text">
                <h3>{{ sp.name }}</h3>
                <span class="role-badge">{{ sp.role }}</span>
              </div>
            </article>
          }
        </div>

        <h2 class="section-title">{{ 'organization.greffe.presidentsTitle' | i18n }}</h2>
        <div class="members-grid col-3">
          @for (president of presidents(); track president.email) {
            <article class="member-card">
              <div class="member-photo">
                <img
                  [src]="cloudSrc(president.image)"
                  [alt]="president.name"
                  width="240"
                  height="300"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div class="member-text">
                <h3>{{ president.name }}</h3>
                <span class="role-badge">{{ 'organization.chart.roles.president' | i18n }}</span>
              </div>
            </article>
          }
        </div>

        <h2 class="section-title">{{ 'organization.greffe.advisorsTitle' | i18n }}</h2>
        <div class="members-grid col-3">
          @for (advisor of advisors(); track advisor.email) {
            <article class="member-card">
              <div class="member-photo">
                <img
                  [src]="cloudSrc(advisor.image)"
                  [alt]="advisor.name"
                  width="240"
                  height="300"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div class="member-text">
                <h3>{{ advisor.name }}</h3>
                <span class="role-badge">{{ advisor.name.startsWith('Mme') ? ('organization.chart.roles.advisorFemale' | i18n) : ('organization.chart.roles.advisor' | i18n) }}</span>
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
      background: linear-gradient(180deg, #f8f9fb 0%, #f0f4f8 50%, #f8f9fb 100%);
      min-height: 100vh;
    }
    .page-container {
      background: transparent;
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
      font-size: 1.35rem;
      font-weight: 700;
      color: #0f172a;
      margin: 3rem 0 1.4rem;
      padding: 0 0 0.6rem 0;
      letter-spacing: 0.3px;
    }
    .members-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
      gap: 1.8rem;
    }
    .members-grid.col-3 {
      grid-template-columns: repeat(3, 1fr);
    }
    .first-president-grid,
    .section-president-grid {
      display: flex;
      justify-content: center;
      gap: 1.8rem;
      flex-wrap: wrap;
    }
    .member-card {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      padding: 1.5rem;
      background: #fff;
      border-radius: 20px;
      box-shadow: 0 4px 20px rgba(16, 27, 43, 0.06);
      border: 1px solid rgba(226, 232, 240, 0.6);
      transition: transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.35s cubic-bezier(0.23, 1, 0.32, 1);
      position: relative;
      overflow: hidden;
    }
    .member-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 16px 40px rgba(16, 27, 43, 0.12);
    }
    .member-photo {
      position: relative;
      flex-shrink: 0;
      width: 110px;
      height: 135px;
      overflow: hidden;
      transition: transform 0.35s cubic-bezier(0.23, 1, 0.32, 1);
    }
    .member-card:hover .member-photo {
      transform: scale(1.04);
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
      object-fit: cover;
      display: block;
    }
    .member-photo img.loaded {
      animation: none;
    }
    .member-text h3 {
      margin: 0 0 8px;
      font-size: 1.2rem;
      font-weight: 700;
      color: #0f172a;
      letter-spacing: 0.2px;
      line-height: 1.3;
    }
    .member-text .role-badge {
      font-size: 0.82rem;
      font-weight: 600;
      color: #1F9BD9;
      letter-spacing: 0.3px;
      line-height: 1.4;
    }
    .member-text .role-plain {
      margin: 0;
      font-size: 0.95rem;
      color: #64748b;
      font-weight: 500;
    }

    @media (max-width: 1100px) {
      .members-grid.col-3 {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 720px) {
      .members-grid.col-3 {
        grid-template-columns: 1fr;
      }
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
