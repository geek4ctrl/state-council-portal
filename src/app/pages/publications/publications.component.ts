import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { I18nPipe } from '../../i18n/i18n.pipe';

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [CommonModule, I18nPipe, FooterComponent],
  template: `
    <div class="page-container">
      <section class="hero-section">
        <div class="container">
          <div class="hero-grid">
            <div class="hero-left">
              <h1>{{ 'header.nav.publications' | i18n }}</h1>
            </div>
            <div class="vertical-divider"></div>
            <div class="hero-right">
              <p>{{ 'publications.heroBody' | i18n }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="publications-section">
        <div class="container">
          <!-- Tabs -->
          <div class="pub-tabs" role="tablist" [attr.aria-label]="'publications.tabs.label' | i18n">
            <button
              type="button"
              class="pub-tab"
              role="tab"
              [class.active]="activeTab() === 'publications'"
              [attr.aria-selected]="activeTab() === 'publications'"
              (click)="activeTab.set('publications')"
            >
              {{ 'publications.tabs.publications' | i18n }}
            </button>
            <button
              type="button"
              class="pub-tab"
              role="tab"
              [class.active]="activeTab() === 'decisions'"
              [attr.aria-selected]="activeTab() === 'decisions'"
              (click)="activeTab.set('decisions')"
            >
              {{ 'publications.tabs.decisions' | i18n }}
            </button>
          </div>

          <!-- Publications list -->
          @if (activeTab() === 'publications') {
            <div class="publications-list">
              @for (item of publications; track item.title; let i = $index) {
                <article class="publication-card" [style.--i]="i">
                  <div class="pub-icon-col">
                    <div class="pub-doc-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10 9 9 9 8 9"/>
                      </svg>
                    </div>
                  </div>
                  <div class="publication-copy">
                    <p class="publication-kicker">{{ 'publications.tabs.publications' | i18n }}</p>
                    <h2 class="publication-title">{{ item.title }}</h2>
                    <div class="publication-badges">
                      <span class="badge badge-pdf">PDF</span>
                      <span class="badge badge-official">{{ 'publications.officialGazette' | i18n }}</span>
                    </div>
                  </div>
                  <a
                    class="download-button"
                    [href]="item.href"
                    [attr.download]="item.fileName"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="M12 3v12"></path>
                      <path d="M7 10l5 5 5-5"></path>
                      <path d="M5 21h14"></path>
                    </svg>
                    <span>{{ 'publications.download' | i18n }}</span>
                  </a>
                </article>
              }
            </div>
          }

          <!-- Decisions list -->
          @if (activeTab() === 'decisions') {
            <div class="publications-list">
              @for (item of decisions; track item.title; let i = $index) {
                <article class="publication-card" [style.--i]="i">
                  <div class="pub-icon-col">
                    <div class="pub-doc-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10 9 9 9 8 9"/>
                      </svg>
                    </div>
                  </div>
                  <div class="publication-copy">
                    <p class="publication-kicker">{{ 'publications.tabs.decisions' | i18n }}</p>
                    <h2 class="publication-title">{{ item.title }}</h2>
                    <div class="publication-badges">
                      <span class="badge badge-pdf">PDF</span>
                      <span class="badge badge-official">{{ 'publications.decision' | i18n }}</span>
                    </div>
                  </div>
                  <a
                    class="download-button"
                    [href]="item.href"
                    [attr.download]="item.fileName"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="M12 3v12"></path>
                      <path d="M7 10l5 5 5-5"></path>
                      <path d="M5 21h14"></path>
                    </svg>
                    <span>{{ 'publications.download' | i18n }}</span>
                  </a>
                </article>
              }
            </div>
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

      .page-container {
        min-height: 100vh;
        background: #ffffff;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }

      .hero-section {
        background:
          linear-gradient(135deg, rgba(26, 41, 66, 0.92), rgba(44, 62, 80, 0.88)),
          url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=600&fit=crop') center/cover;
        color: #ffffff;
        padding: 120px 0;
      }

      .hero-grid {
        display: grid;
        grid-template-columns: 1fr 2px 2fr;
        gap: 60px;
        align-items: center;
      }

      .hero-left h1 {
        margin: 0;
        font-size: clamp(1.8rem, 4vw, 2.9rem);
        font-weight: 700;
        letter-spacing: 2px;
        color: #ffffff;
      }

      .vertical-divider {
        width: 2px;
        height: 140px;
        background: rgba(255, 255, 255, 0.7);
      }

      .hero-right p {
        margin: 0;
        font-size: 1.05rem;
        line-height: 1.8;
        opacity: 0.95;
      }

      .publications-section {
        padding: 72px 0 96px;
        background: linear-gradient(180deg, #f0f4f8 0%, #e8eef5 100%);
      }

      .pub-tabs {
        display: flex;
        gap: 8px;
        margin-bottom: 40px;
        border-bottom: 2px solid rgba(31, 155, 217, 0.15);
      }

      .pub-tab {
        position: relative;
        padding: 14px 24px;
        background: transparent;
        border: none;
        color: #64748b;
        font-size: 0.95rem;
        font-weight: 600;
        cursor: pointer;
        transition: color 0.2s ease;
      }

      .pub-tab:hover {
        color: #1f9bd9;
      }

      .pub-tab.active {
        color: #1f9bd9;
      }

      .pub-tab.active::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -2px;
        height: 3px;
        background: linear-gradient(90deg, #1f9bd9, #1a5fa8);
        border-radius: 3px 3px 0 0;
      }

      .publications-list {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }

      .publication-card {
        animation: fadeInUp 0.4s ease both;
        animation-delay: calc(var(--i, 0) * 80ms);
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(16px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .publication-card {
        display: flex;
        align-items: center;
        gap: 28px;
        padding: 28px 32px;
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.9);
        background: #ffffff;
        box-shadow:
          0 1px 2px rgba(15, 23, 42, 0.04),
          0 8px 24px rgba(15, 23, 42, 0.08),
          0 24px 48px rgba(15, 23, 42, 0.06);
        position: relative;
        overflow: hidden;
        animation: fadeInUp 0.4s ease both;
        animation-delay: calc(var(--i, 0) * 80ms);
      }

      .publication-card::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 5px;
        background: linear-gradient(180deg, #1f9bd9, #1a5fa8);
        border-radius: 20px 0 0 20px;
      }

      .pub-icon-col {
        flex-shrink: 0;
      }

      .pub-doc-icon {
        width: 56px;
        height: 56px;
        border-radius: 14px;
        background: linear-gradient(135deg, #e8f4fd, #d0eaf9);
        border: 1px solid rgba(31, 155, 217, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #1f9bd9;
      }

      .pub-doc-icon svg {
        width: 26px;
        height: 26px;
      }

      .publication-copy {
        flex: 1;
        min-width: 0;
      }

      .publication-kicker {
        margin: 0 0 8px;
        color: #1f9bd9;
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 2.5px;
        text-transform: uppercase;
      }

      .publication-title {
        margin: 0 0 12px;
        color: #0f172a;
        font-size: 1.05rem;
        font-weight: 600;
        line-height: 1.5;
      }

      .publication-badges {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }

      .badge {
        display: inline-flex;
        align-items: center;
        padding: 3px 10px;
        border-radius: 999px;
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.8px;
        text-transform: uppercase;
      }

      .badge-pdf {
        background: rgba(239, 68, 68, 0.1);
        color: #dc2626;
        border: 1px solid rgba(239, 68, 68, 0.2);
      }

      .badge-official {
        background: rgba(31, 155, 217, 0.08);
        color: #1a5fa8;
        border: 1px solid rgba(31, 155, 217, 0.2);
      }

      .download-button {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 0.85rem 1.6rem;
        border-radius: 999px;
        background: linear-gradient(135deg, #1f9bd9, #1a5fa8);
        color: #ffffff;
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 700;
        letter-spacing: 0.5px;
        box-shadow: 0 8px 20px rgba(31, 155, 217, 0.35);
        flex-shrink: 0;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        white-space: nowrap;
      }

      .download-button svg {
        width: 18px;
        height: 18px;
      }

      .download-button:hover {
        color: #ffffff;
        transform: translateY(-2px);
        box-shadow: 0 12px 28px rgba(31, 155, 217, 0.45);
      }

      @media (max-width: 900px) {
        .hero-grid {
          grid-template-columns: 1fr;
          gap: 28px;
          text-align: center;
        }

        .vertical-divider {
          width: 140px;
          height: 2px;
          margin: 0 auto;
        }

        .publication-card {
          flex-direction: column;
          align-items: flex-start;
          padding: 28px 24px 24px;
        }

        .publication-card::before {
          width: 100%;
          height: 5px;
          top: 0;
          left: 0;
          right: 0;
          bottom: auto;
          border-radius: 20px 20px 0 0;
        }

        .download-button {
          width: 100%;
          justify-content: center;
        }
      }

      /* ── Dark Mode ── */
      :host-context([data-theme="dark"]) .page-container { background: #1a2332; }
      :host-context([data-theme="dark"]) .publications-section { background: linear-gradient(180deg, #243447, #2a3d52); }
      :host-context([data-theme="dark"]) .pub-tabs { border-bottom-color: rgba(79, 195, 247, 0.15); }
      :host-context([data-theme="dark"]) .pub-tab { color: #94a3b8; }
      :host-context([data-theme="dark"]) .pub-tab:hover,
      :host-context([data-theme="dark"]) .pub-tab.active { color: #4fc3f7; }
      :host-context([data-theme="dark"]) .pub-tab.active::after { background: linear-gradient(90deg, #4fc3f7, #1a5fa8); }
      :host-context([data-theme="dark"]) .publication-card { background: #243447; border-color: rgba(79, 195, 247,0.1); box-shadow: 0 8px 24px rgba(0,0,0,0.4); }
      :host-context([data-theme="dark"]) .publication-title { color: #e4eaf0; }
      :host-context([data-theme="dark"]) .publication-kicker { color: #4fc3f7; }
      :host-context([data-theme="dark"]) .pub-doc-icon { background: linear-gradient(135deg, rgba(79,195,247,0.12), rgba(79,195,247,0.06)); border-color: rgba(79,195,247,0.25); color: #4fc3f7; }
      :host-context([data-theme="dark"]) .badge-pdf { background: rgba(248,81,73,0.1); color: #f85149; border-color: rgba(248,81,73,0.2); }
      :host-context([data-theme="dark"]) .badge-official { background: rgba(79,195,247,0.08); color: #4fc3f7; border-color: rgba(79,195,247,0.2); }
    `,
  ],
})
export class PublicationsComponent {
  activeTab = signal<'publications' | 'decisions'>('publications');

  protected readonly publications = [
    {
      title: 'J.O. n° spécial du 26 février 2026 - RITE.097',
      fileName: 'J.O. n° spécial du 26 février 2026_RITE.097 (1).pdf',
      href: encodeURI('/publications/J.O. n° spécial du 26 février 2026_RITE.097 (1).pdf'),
    },
  ];

  protected readonly decisions = [
    {
      title: 'Décision n° 001/CCE/2026 - Contentieux électoral',
      fileName: 'decision-001-cce-2026.pdf',
      href: encodeURI('/publications/decision-001-cce-2026.pdf'),
    },
    {
      title: 'Décision n° 002/CCE/2026 - Recours en annulation',
      fileName: 'decision-002-cce-2026.pdf',
      href: encodeURI('/publications/decision-002-cce-2026.pdf'),
    },
  ];
}
