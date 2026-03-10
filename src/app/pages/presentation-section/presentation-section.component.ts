import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { I18nPipe } from '../../i18n/i18n.pipe';
import { FooterComponent } from '../../components/footer/footer.component';

const SECTION_MAP = {
  missions: {
    titleKey: 'about.rubrics.mission',
    bodyKey: 'about.legal.detail.paragraph1',
  },
  organisations: {
    titleKey: 'about.rubrics.organization',
    bodyKey: 'about.legal.detail.paragraph3',
  },
  fondements: {
    titleKey: 'about.rubrics.legalBasis',
    bodyKey: 'about.intro.body',
  },
  competences: {
    titleKey: 'about.rubrics.competences',
    bodyKey: 'about.legal.detail.paragraph5',
  },
  procedures: {
    titleKey: 'about.rubrics.procedureBeforeCouncil',
    bodyKey: 'about.legal.detail.paragraph6',
  },
  historique: {
    titleKey: 'history.title',
    bodyKey: 'history.body',
  },
  organigramme: {
    titleKey: 'organization.chart.title',
    bodyKey: 'organization.chart.subtitle',
  },
  'premiere-presidente': {
    titleKey: 'organization.firstPresident.title',
    bodyKey: 'organization.firstPresident.body',
  },
  'section-consultative': {
    titleKey: 'organization.chart.nodes.consultativeSection',
    bodyKey: 'organization.chart.subtitle',
  },
  'section-contentieux': {
    titleKey: 'organization.chart.nodes.litigationSection',
    bodyKey: 'organization.chart.subtitle',
  },
  'greffe-secretariat-general': {
    titleKey: 'organization.chart.nodes.registry',
    bodyKey: 'organization.chart.subtitle',
  },
} as const;

type SectionKey = keyof typeof SECTION_MAP;

@Component({
  selector: 'app-presentation-section',
  standalone: true,
  imports: [I18nPipe, RouterLink, FooterComponent],
  template: `
    <div class="page-wrap section-page">
      @if (isOrganigramme()) {
        <section class="chart-hero">
          <div class="container">
            <a class="back-link" routerLink="/presentation/organisations">{{ 'memberDetail.back' | i18n }}</a>
            <h1 class="chart-title">{{ 'organization.chart.title' | i18n }}</h1>
            <p class="chart-subtitle">{{ 'organization.chart.subtitle' | i18n }}</p>
          </div>
        </section>

        <section class="chart-body">
          <div class="container">
            <div class="chart-card">
              <h2>{{ 'organization.chart.title' | i18n }}</h2>
              <p>{{ 'organization.chart.subtitle' | i18n }}</p>
            </div>

            <div class="chart-media" aria-hidden="true">
              {{ 'organization.about.imageLabel' | i18n }}
            </div>

            <div class="chart-details">
              <h3>{{ 'organization.orgPage.organigramme.title' | i18n }}</h3>
              <div class="chart-names">
                <p>{{ 'organization.orgPage.tiles.firstPresident' | i18n }}</p>
                <p>{{ 'organization.orgPage.tiles.consultative' | i18n }}</p>
                <p>{{ 'organization.orgPage.tiles.contentieux' | i18n }}</p>
              </div>
            </div>
          </div>
        </section>
      } @else if (isOrganisation()) {
        <section class="org-hero">
          <div class="container">
            <a class="back-link" routerLink="/presentation/organisations">{{ 'memberDetail.back' | i18n }}</a>
            <div class="org-hero-grid">
              <div class="org-hero-media" aria-hidden="true">
                {{ 'organization.orgPage.photoLabel' | i18n }}
              </div>
              <div class="org-hero-copy">
                <h1 class="org-hero-title">{{ 'organization.orgPage.hero.title' | i18n }}</h1>
                <p class="org-hero-subtitle">{{ 'organization.orgPage.hero.subtitle' | i18n }}</p>
                <p class="org-hero-body">
                  {{ 'organization.orgPage.hero.body' | i18n }}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="org-tiles">
          <div class="container">
            <div class="org-grid">
              @for (tile of organisationTiles; track tile.section) {
                <a class="org-tile" [routerLink]="['/presentation', tile.section]">
                  <div class="org-tile-media" aria-hidden="true">
                    {{ 'organization.about.imageLabel' | i18n }}
                  </div>
                  <h3>{{ tile.titleKey | i18n }}</h3>
                </a>
              }
            </div>
          </div>
        </section>
      } @else {
        <section class="section-hero">
          <div class="container">
            <a class="back-link" routerLink="/presentation/organisations">{{ 'memberDetail.back' | i18n }}</a>
            <h1 class="section-title">{{ titleKey() | i18n }}</h1>
            <p class="section-subtitle">{{ bodyKey() | i18n }}</p>
          </div>
        </section>

        <section class="section-body">
          <div class="container">
            @if (isMission()) {
              <div class="section-card">
                <h2>{{ titleKey() | i18n }}</h2>
                <p>{{ 'about.legal.detail.paragraph1' | i18n }}</p>
                <p>{{ 'about.legal.detail.paragraph2' | i18n }}</p>
                <ul>
                  <li>{{ 'about.legal.detail.list1.1' | i18n }}</li>
                  <li>{{ 'about.legal.detail.list1.2' | i18n }}</li>
                  <li>{{ 'about.legal.detail.list1.3' | i18n }}</li>
                  <li>{{ 'about.legal.detail.list1.4' | i18n }}</li>
                  <li>{{ 'about.legal.detail.list1.5' | i18n }}</li>
                </ul>
              </div>
            } @else if (isFondements()) {
              <div class="section-card">
                <h2>{{ titleKey() | i18n }}</h2>
                <p>{{ 'about.intro.body' | i18n }}</p>
                <ul>
                  <li>{{ 'about.legal.docs.1' | i18n }}</li>
                  <li>{{ 'about.legal.docs.2' | i18n }}</li>
                  <li>{{ 'about.legal.docs.3' | i18n }}</li>
                </ul>
              </div>
            } @else {
              <div class="section-card">
                <h2>{{ titleKey() | i18n }}</h2>
                <p>{{ bodyKey() | i18n }}</p>
              </div>
            }
          </div>
        </section>
      }

      <app-footer></app-footer>
    </div>
  `,
  styles: [
    `
      .section-page {
        min-height: 100vh;
        background: #f8f9fb;
      }

      .container {
        max-width: 1100px;
        margin: 0 auto;
        padding: 0 20px;
      }

      .section-hero {
        background: linear-gradient(135deg, rgba(10, 25, 41, 0.95), rgba(26, 41, 66, 0.9));
        color: #ffffff;
        padding: 80px 0 70px;
      }

      .back-link {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: #cfe7f7;
        text-decoration: none;
        font-weight: 600;
        letter-spacing: 0.8px;
        margin-bottom: 20px;
      }

      .section-title {
        font-size: 2.4rem;
        font-weight: 700;
        margin: 0 0 16px;
        letter-spacing: 1px;
      }

      .section-subtitle {
        font-size: 1rem;
        line-height: 1.7;
        color: rgba(255, 255, 255, 0.85);
        margin: 0;
      }

      .section-body {
        padding: 60px 0 80px;
      }

      .section-card {
        background: #ffffff;
        padding: 40px 45px;
        border-radius: 16px;
        box-shadow: 0 14px 30px rgba(26, 41, 66, 0.12);
      }

      .section-card h2 {
        margin: 0 0 16px;
        font-size: 1.6rem;
        color: #1a1a1a;
      }

      .section-card p {
        margin: 0;
        color: #374151;
        line-height: 1.8;
        font-size: 0.98rem;
        text-align: left;
      }


      .org-hero {
        background: #ffffff;
        padding: 70px 0 40px;
      }

      .org-hero .back-link {
        color: #1a2942;
      }

      .chart-hero {
        background: linear-gradient(160deg, #1a2a3f 0%, #1f3248 60%, #213854 100%);
        color: #ffffff;
        padding: 70px 0 80px;
        text-align: center;
      }

      .chart-hero .back-link {
        color: #cfe7f7;
        width: 100%;
        justify-content: flex-start;
      }

      .chart-title {
        margin: 30px 0 10px;
        font-size: 2.6rem;
        letter-spacing: 2px;
        text-transform: uppercase;
      }

      .chart-subtitle {
        margin: 0;
        color: rgba(255, 255, 255, 0.8);
      }

      .chart-body {
        background: #f8f9fb;
        padding: 40px 0 80px;
      }

      .chart-card {
        background: #ffffff;
        border-radius: 18px;
        padding: 26px 30px;
        box-shadow: 0 14px 30px rgba(26, 41, 66, 0.12);
        margin-top: -70px;
      }

      .chart-card h2 {
        margin: 0 0 8px;
        font-size: 1.35rem;
      }

      .chart-card p {
        margin: 0;
        color: #4b5563;
      }

      .chart-media {
        margin: 30px 0 24px;
        background: linear-gradient(135deg, rgba(31, 155, 217, 0.12), rgba(26, 41, 66, 0.08));
        border-radius: 20px;
        min-height: 240px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #1a2942;
      }

      .chart-details h3 {
        margin: 0 0 12px;
        font-size: 1.2rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #1a1a1a;
      }

      .chart-names p {
        margin: 0 0 10px;
        font-size: 0.98rem;
        color: #374151;
      }

      .org-hero-grid {
        display: grid;
        grid-template-columns: minmax(240px, 320px) 1fr;
        gap: 40px;
        align-items: center;
      }

      .org-hero-media {
        background: linear-gradient(135deg, rgba(31, 155, 217, 0.12), rgba(26, 41, 66, 0.08));
        border-radius: 18px;
        min-height: 260px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #1a2942;
      }

      .org-hero-title {
        margin: 0 0 12px;
        font-size: 2.2rem;
        color: #1a1a1a;
        letter-spacing: 1px;
      }

      .org-hero-subtitle {
        margin: 0 0 16px;
        font-size: 1rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: #1f9bd9;
      }

      .org-hero-body {
        margin: 0;
        color: #4b5563;
        line-height: 1.8;
      }

      .org-tiles {
        background: #f8f9fb;
        padding: 10px 0 80px;
      }

      .org-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 24px;
      }

      .org-tile {
        display: block;
        background: #ffffff;
        border-radius: 16px;
        border: 1px solid rgba(26, 41, 66, 0.1);
        box-shadow: 0 10px 24px rgba(26, 41, 66, 0.12);
        overflow: hidden;
        text-align: center;
        color: inherit;
        text-decoration: none;
        transition: transform 0.25s ease, box-shadow 0.25s ease;
      }

      .org-tile:hover {
        transform: translateY(-4px);
        box-shadow: 0 16px 32px rgba(26, 41, 66, 0.16);
      }

      .org-tile-media {
        height: 150px;
        background: linear-gradient(135deg, rgba(31, 155, 217, 0.12), rgba(26, 41, 66, 0.08));
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #1a2942;
      }

      .org-tile h3 {
        margin: 16px 18px 20px;
        font-size: 0.95rem;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #1a1a1a;
        line-height: 1.4;
      }

      @media (max-width: 768px) {
        .section-hero {
          padding: 60px 0 50px;
        }

        .section-title {
          font-size: 2rem;
        }

        .section-card {
          padding: 30px 26px;
        }

        .org-hero-grid {
          grid-template-columns: 1fr;
        }

        .org-hero-title {
          font-size: 1.8rem;
        }

        .org-grid {
          grid-template-columns: 1fr;
        }

        .chart-title {
          font-size: 2rem;
        }

        .chart-card {
          margin-top: -50px;
        }
      }

      @media (max-width: 480px) {
        .section-title {
          font-size: 1.7rem;
        }

        .section-card {
          padding: 26px 20px;
        }
      }
    `,
  ],
})
export class PresentationSectionComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private sectionKey = signal<SectionKey>('missions');

  readonly titleKey = computed(() => SECTION_MAP[this.sectionKey()].titleKey);
  readonly bodyKey = computed(() => SECTION_MAP[this.sectionKey()].bodyKey);
  readonly isOrganigramme = computed(() => this.sectionKey() === 'organigramme');
  readonly isOrganisation = computed(() => this.sectionKey() === 'organisations');
  readonly isMission = computed(() => this.sectionKey() === 'missions');
  readonly isFondements = computed(() => this.sectionKey() === 'fondements');
  readonly organisationTiles = [
    { titleKey: 'organization.orgPage.tiles.organigramme', section: 'organigramme' },
    { titleKey: 'organization.orgPage.tiles.firstPresident', section: 'premiere-presidente' },
    { titleKey: 'organization.orgPage.tiles.consultative', section: 'section-consultative' },
    { titleKey: 'organization.orgPage.tiles.contentieux', section: 'section-contentieux' },
    { titleKey: 'organization.orgPage.tiles.registry', section: 'greffe-secretariat-general' },
  ];

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const section = params.get('section') as SectionKey | null;
      if (section && SECTION_MAP[section]) {
        this.sectionKey.set(section);
      }
    });
  }
}
