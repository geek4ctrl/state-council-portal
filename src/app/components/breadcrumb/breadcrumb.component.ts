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
              <a routerLink="/" class="breadcrumb-link home-link">
                <svg class="home-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                <span class="home-label">{{ 'header.nav.home' | i18n }}</span>
              </a>
            </li>
            @for (item of breadcrumbs(); track item.url; let last = $last) {
              <li class="breadcrumb-item" [class.active]="last">
                <span class="breadcrumb-separator" aria-hidden="true">/</span>
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
        background: #ffffff;
        border-bottom: 1px solid rgba(226, 232, 240, 0.8);
        padding: 14px 0;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 24px;
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
        font-size: 0.82rem;
        color: #94a3b8;
        letter-spacing: 0.2px;
      }

      .breadcrumb-separator {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        font-size: 0.7rem;
        font-weight: 300;
        color: #cbd5e1;
        user-select: none;
      }

      .breadcrumb-link {
        color: #64748b;
        text-decoration: none;
        font-weight: 500;
        padding: 4px 8px;
        border-radius: 6px;
        transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1);
        position: relative;
      }

      .breadcrumb-link::after {
        content: '';
        position: absolute;
        bottom: 2px;
        left: 8px;
        right: 8px;
        height: 1.5px;
        background: #1F9BD9;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.25s cubic-bezier(0.23, 1, 0.32, 1);
        border-radius: 1px;
      }

      .breadcrumb-link:hover {
        color: #1F9BD9;
        background: rgba(31, 155, 217, 0.06);
      }

      .breadcrumb-link:hover::after {
        transform: scaleX(1);
      }

      .home-link {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 4px 8px 4px 6px;
      }

      .home-icon {
        width: 15px;
        height: 15px;
        stroke-width: 2.2;
        transition: transform 0.25s cubic-bezier(0.23, 1, 0.32, 1);
      }

      .home-link:hover .home-icon {
        transform: translateY(-1px);
      }

      .home-label {
        position: relative;
      }

      .breadcrumb-current {
        color: #0f172a;
        font-weight: 600;
        padding: 4px 10px;
        background: linear-gradient(135deg, rgba(31, 155, 217, 0.08) 0%, rgba(31, 155, 217, 0.04) 100%);
        border-radius: 6px;
        border: 1px solid rgba(31, 155, 217, 0.12);
        font-size: 0.82rem;
        letter-spacing: 0.2px;
      }

      @media (max-width: 767px) {
        .breadcrumb-nav {
          padding: 12px 0;
        }

        .breadcrumb-item {
          font-size: 0.78rem;
        }

        .breadcrumb-current {
          font-size: 0.78rem;
          padding: 3px 8px;
        }
      }

      /* Dark Mode */
      :host-context([data-theme="dark"]) .breadcrumb-nav { background: #161b22; border-bottom-color: #21262d; box-shadow: 0 1px 3px rgba(0,0,0,0.2); }
      :host-context([data-theme="dark"]) .breadcrumb-link { color: #8b949e; }
      :host-context([data-theme="dark"]) .breadcrumb-link:hover { color: #58a6ff; background: rgba(88,166,255,0.08); }
      :host-context([data-theme="dark"]) .breadcrumb-separator { color: #484f58; }
      :host-context([data-theme="dark"]) .breadcrumb-current { color: #e6edf3; background: linear-gradient(135deg, rgba(88,166,255,0.1) 0%, rgba(88,166,255,0.05) 100%); border-color: rgba(88,166,255,0.2); }
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

      // Skip 'member' segment when followed by member detail slug (avoids duplicate label)
      if (segment === 'member' && i < segments.length - 1) {
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
