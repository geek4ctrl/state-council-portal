import { Component, DestroyRef, inject, signal } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';
import { I18nPipe } from '../../i18n/i18n.pipe';

interface BreadcrumbItem {
  labelKey: string;
  url: string;
}

const SEGMENT_MAP: Record<string, string> = {
  presentation: 'header.nav.presentation',
  judges: 'judges.title',
  organization: 'header.nav.presentation',
  member: 'memberDetail.title',
  'administrative-courts': 'header.nav.administrativeCourts',
  'administrative-tribunals': 'header.nav.administrativeTribunals',
  history: 'history.title',
  reforms: 'header.nav.reforms',
  'international-relations': 'header.nav.international',
  audiences: 'header.nav.audiences',
  steps: 'header.nav.steps',
  process: 'process.title',
  news: 'news.hero.title',
  publications: 'header.nav.publications',
  // Presentation sub-sections
  organisations: 'about.rubrics.organization',
  missions: 'about.rubrics.mission',
  fondements: 'about.rubrics.legalBasis',
  competences: 'about.rubrics.competences',
  procedures: 'about.rubrics.procedureBeforeCouncil',
  historique: 'history.title',
  organigramme: 'organization.chart.title',
  'premiere-presidente': 'organization.firstPresident.title',
  'section-consultative': 'organization.chart.nodes.consultativeSection',
  'section-contentieux': 'organization.chart.nodes.litigationSection',
  'greffe-secretariat-general': 'organization.greffe.title',
};

const ORG_CHILD_SECTIONS = new Set([
  'organigramme',
  'premiere-presidente',
  'section-consultative',
  'section-contentieux',
  'greffe-secretariat-general',
]);

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterLink, I18nPipe],
  template: `
    @if (breadcrumbs().length > 0) {
      <nav class="breadcrumb-nav" aria-label="Breadcrumb">
        <div class="container">
          <ol class="breadcrumb-list">
            <li class="breadcrumb-item">
              <a routerLink="/" class="breadcrumb-link">{{ 'header.nav.home' | i18n }}</a>
            </li>
            @for (item of breadcrumbs(); track item.url; let last = $last) {
              <li class="breadcrumb-item" [class.active]="last">
                <span class="breadcrumb-separator" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </span>
                @if (!last) {
                  <a [routerLink]="item.url" class="breadcrumb-link">{{ item.labelKey | i18n }}</a>
                } @else {
                  <span class="breadcrumb-current" aria-current="page">{{ item.labelKey | i18n }}</span>
                }
              </li>
            }
          </ol>
        </div>
      </nav>
    }
  `,
  styles: [
    `
      .breadcrumb-nav {
        background: #f8fafc;
        border-bottom: 1px solid #e2e8f0;
        padding: 12px 0;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }

      .breadcrumb-list {
        display: flex;
        align-items: center;
        gap: 0;
        list-style: none;
        margin: 0;
        padding: 0;
        flex-wrap: wrap;
      }

      .breadcrumb-item {
        display: flex;
        align-items: center;
        font-size: 0.85rem;
        color: #64748b;
      }

      .breadcrumb-separator {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        margin: 0 2px;
        color: #94a3b8;
      }

      .breadcrumb-separator svg {
        width: 14px;
        height: 14px;
      }

      .breadcrumb-link {
        color: #64748b;
        text-decoration: none;
        font-weight: 500;
        padding: 2px 4px;
        border-radius: 4px;
        transition: color 0.2s ease, background 0.2s ease;
      }

      .breadcrumb-link:hover {
        color: #1F9BD9;
        background: rgba(31, 155, 217, 0.08);
      }

      .breadcrumb-current {
        color: #1e293b;
        font-weight: 600;
        padding: 2px 4px;
      }

      @media (max-width: 767px) {
        .breadcrumb-nav {
          padding: 10px 0;
        }

        .breadcrumb-item {
          font-size: 0.8rem;
        }
      }
    `,
  ],
})
export class BreadcrumbComponent {
  breadcrumbs = signal<BreadcrumbItem[]>([]);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    const sub = this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => this.buildBreadcrumbs());

    this.destroyRef.onDestroy(() => sub.unsubscribe());
    this.buildBreadcrumbs();
  }

  private buildBreadcrumbs(): void {
    const url = this.router.url.split('?')[0].split('#')[0];
    if (url === '/' || url === '') {
      this.breadcrumbs.set([]);
      return;
    }

    const segments = url.split('/').filter((s) => s);
    const items: BreadcrumbItem[] = [];
    let cumulativeUrl = '';

    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];
      cumulativeUrl += `/${segment}`;

      // Skip redirect routes
      if (segment === 'filing' || segment === 'appointment' || segment === 'procedures') {
        continue;
      }

      // Inject Organisation step for organization child sections under /presentation
      if (i === 1 && segments[0] === 'presentation' && ORG_CHILD_SECTIONS.has(segment)) {
        items.push({ labelKey: 'about.rubrics.organization', url: '/presentation/organisations' });
      }

      // Inject Presentation and Organisation steps for /judges
      if (segment === 'judges' && items.length === 0) {
        items.push({ labelKey: 'header.nav.presentation', url: '/presentation' });
        items.push({ labelKey: 'about.rubrics.organization', url: '/presentation/organisations' });
      }

      const mappedKey = SEGMENT_MAP[segment];
      if (mappedKey) {
        items.push({ labelKey: mappedKey, url: cumulativeUrl });
      } else if (i === segments.length - 1) {
        // Last segment not in map — derive from context
        const isNumeric = /^\d+$/.test(segment);
        const prevSegment = segments[i - 1];
        let labelKey: string;
        if (isNumeric) {
          labelKey = 'news.detail.title';
        } else if (prevSegment === 'member') {
          labelKey = 'memberDetail.title';
        } else {
          labelKey = 'header.nav.presentation';
        }
        items.push({ labelKey, url: cumulativeUrl });
      }
    }

    this.breadcrumbs.set(items);
  }
}
