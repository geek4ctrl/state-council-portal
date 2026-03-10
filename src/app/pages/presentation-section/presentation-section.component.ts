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
} as const;

type SectionKey = keyof typeof SECTION_MAP;

@Component({
  selector: 'app-presentation-section',
  standalone: true,
  imports: [I18nPipe, RouterLink, FooterComponent],
  template: `
    <div class="page-wrap section-page">
      <section class="section-hero">
        <div class="container">
          <a class="back-link" routerLink="/presentation">{{ 'memberDetail.back' | i18n }}</a>
          <h1 class="section-title">{{ titleKey() | i18n }}</h1>
          <p class="section-subtitle">{{ bodyKey() | i18n }}</p>
        </div>
      </section>

      <section class="section-body">
        <div class="container">
          <div class="section-card">
            <h2>{{ titleKey() | i18n }}</h2>
            <p>{{ bodyKey() | i18n }}</p>
          </div>
        </div>
      </section>

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

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const section = params.get('section') as SectionKey | null;
      if (section && SECTION_MAP[section]) {
        this.sectionKey.set(section);
      }
    });
  }
}
