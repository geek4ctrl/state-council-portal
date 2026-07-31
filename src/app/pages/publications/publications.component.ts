import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { I18nPipe } from '../../i18n/i18n.pipe';
import { DECISIONS } from './decisions.data';

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
          <div class="publications-tabs" role="tablist" [attr.aria-label]="'publications.tabs.label' | i18n">
            <button
              type="button"
              class="publications-tab"
              role="tab"
              [class.active]="activeTab() === 'publications'"
              [attr.aria-selected]="activeTab() === 'publications'"
              (click)="activeTab.set('publications')"
            >
              {{ 'publications.tabs.publications' | i18n }}
            </button>
            <button
              type="button"
              class="publications-tab"
              role="tab"
              [class.active]="activeTab() === 'decisions'"
              [attr.aria-selected]="activeTab() === 'decisions'"
              (click)="activeTab.set('decisions')"
            >
              {{ 'publications.tabs.decisions' | i18n }}
            </button>
          </div>

          @if (activeTab() === 'publications') {
            <article class="publication-card">
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
              <p class="publication-kicker">{{ 'header.nav.publications' | i18n }}</p>
              <h2 class="publication-title">{{ publication.title }}</h2>
              <div class="publication-badges">
                <span class="badge badge-pdf">PDF</span>
                <span class="badge badge-official">{{ 'publications.officialGazette' | i18n }}</span>
              </div>
            </div>
            <a
              class="download-button"
              [href]="publication.href"
              [attr.download]="publication.fileName"
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

          @if (activeTab() === 'decisions') {
            @if (decisions.length > 0) {
              <div class="decisions-grid">
                @for (decision of decisions; track decision.fileName) {
                  <article class="decision-card">
                    <div class="decision-preview">
                      <svg class="docx-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M38 8H16a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4V24L38 8z" />
                        <polyline points="38 8 38 24 52 24" />
                        <line x1="20" y1="36" x2="44" y2="36" />
                        <line x1="20" y1="42" x2="44" y2="42" />
                        <line x1="20" y1="48" x2="34" y2="48" />
                      </svg>
                      <span class="decision-label">{{ decision.label }}</span>
                    </div>
                    <div class="decision-info">
                      <h3>{{ decision.title }}</h3>
                      <a
                        class="download-btn"
                        [href]="decision.href"
                        [attr.download]="decision.fileName"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {{ 'publications.download' | i18n }}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                      </a>
                    </div>
                  </article>
                }
              </div>
            } @else {
              <div class="decisions-empty" role="status" aria-live="polite">
                <h3>{{ 'publications.decisions.empty.title' | i18n }}</h3>
                <p>{{ 'publications.decisions.empty.body' | i18n }}</p>
              </div>
            }
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

      /* Tabs */
      .publications-tabs {
        display: flex;
        justify-content: flex-start;
        gap: 12px;
        margin-bottom: 40px;
        border-bottom: 2px solid rgba(26, 41, 66, 0.1);
        padding-bottom: 0;
      }

      .publications-tab {
        position: relative;
        background: transparent;
        border: none;
        padding: 14px 28px;
        font-size: 1rem;
        font-weight: 600;
        color: #6b7280;
        cursor: pointer;
        transition: color 0.25s ease;
      }

      .publications-tab::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 3px;
        background: #1f9bd9;
        transform: scaleX(0);
        transition: transform 0.25s ease;
      }

      .publications-tab:hover {
        color: #1a2942;
      }

      .publications-tab.active {
        color: #1f9bd9;
      }

      .publications-tab.active::after {
        transform: scaleX(1);
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

      .decisions-empty {
        text-align: center;
        padding: 48px 24px;
        border: 1px solid rgba(26, 41, 66, 0.12);
        border-radius: 20px;
        background: #ffffff;
        box-shadow:
          0 1px 2px rgba(15, 23, 42, 0.04),
          0 8px 24px rgba(15, 23, 42, 0.08),
          0 24px 48px rgba(15, 23, 42, 0.06);
      }

      .decisions-empty h3 {
        margin: 0 0 10px 0;
        font-size: 1.1rem;
        font-weight: 600;
        color: #1a1a1a;
        letter-spacing: 0.5px;
      }

      .decisions-empty p {
        margin: 0;
        font-size: 0.9rem;
        color: #666;
        line-height: 1.6;
      }

      /* Decisions Grid */
      .decisions-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 24px;
      }

      .decision-card {
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 22px 24px;
        border-radius: 16px;
        border: 1px solid rgba(255, 255, 255, 0.9);
        background: #ffffff;
        box-shadow:
          0 1px 2px rgba(15, 23, 42, 0.04),
          0 8px 24px rgba(15, 23, 42, 0.08);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }

      .decision-card:hover {
        transform: translateY(-3px);
        box-shadow:
          0 1px 2px rgba(15, 23, 42, 0.04),
          0 12px 32px rgba(15, 23, 42, 0.12);
      }

      .decision-preview {
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 72px;
        border-radius: 12px;
        background: linear-gradient(135deg, #e8f4fd, #d0eaf9);
        border: 1px solid rgba(31, 155, 217, 0.2);
        color: #1f9bd9;
        gap: 4px;
      }

      .decision-preview .docx-icon {
        width: 32px;
        height: 32px;
      }

      .decision-label {
        font-size: 0.65rem;
        font-weight: 700;
        letter-spacing: 0.8px;
        text-transform: uppercase;
        color: #1a5fa8;
      }

      .decision-info {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .decision-info h3 {
        margin: 0;
        font-size: 0.92rem;
        font-weight: 600;
        color: #0f172a;
        line-height: 1.45;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .download-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 0.65rem 1.2rem;
        border-radius: 999px;
        background: linear-gradient(135deg, #1f9bd9, #1a5fa8);
        color: #ffffff;
        text-decoration: none;
        font-size: 0.85rem;
        font-weight: 700;
        letter-spacing: 0.5px;
        box-shadow: 0 6px 16px rgba(31, 155, 217, 0.3);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        white-space: nowrap;
        align-self: flex-start;
      }

      .download-btn svg {
        width: 16px;
        height: 16px;
      }

      .download-btn:hover {
        color: #ffffff;
        transform: translateY(-2px);
        box-shadow: 0 10px 24px rgba(31, 155, 217, 0.4);
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

        .publications-tabs {
          gap: 8px;
        }

        .publications-tab {
          padding: 12px 18px;
          font-size: 0.9rem;
        }

        .decisions-grid {
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .decision-card {
          padding: 18px 20px;
        }

        .decision-info h3 {
          font-size: 0.88rem;
        }
      }

      /* ── Dark Mode ── */
      :host-context([data-theme="dark"]) .page-container { background: #1a2332; }
      :host-context([data-theme="dark"]) .publications-section { background: linear-gradient(180deg, #243447, #2a3d52); }
      :host-context([data-theme="dark"]) .publication-card { background: #243447; border-color: rgba(79, 195, 247,0.1); box-shadow: 0 8px 24px rgba(0,0,0,0.4); }
      :host-context([data-theme="dark"]) .publication-title { color: #e4eaf0; }
      :host-context([data-theme="dark"]) .publication-kicker { color: #4fc3f7; }
      :host-context([data-theme="dark"]) .pub-doc-icon { background: linear-gradient(135deg, rgba(79,195,247,0.12), rgba(79,195,247,0.06)); border-color: rgba(79,195,247,0.25); color: #4fc3f7; }
      :host-context([data-theme="dark"]) .badge-pdf { background: rgba(248,81,73,0.1); color: #f85149; border-color: rgba(248,81,73,0.2); }
      :host-context([data-theme="dark"]) .badge-official { background: rgba(79,195,247,0.08); color: #4fc3f7; border-color: rgba(79,195,247,0.2); }
      :host-context([data-theme="dark"]) .publications-tab { color: #8899aa; }
      :host-context([data-theme="dark"]) .publications-tab:hover { color: #e4eaf0; }
      :host-context([data-theme="dark"]) .publications-tab.active { color: #4fc3f7; }
      :host-context([data-theme="dark"]) .publications-tabs { border-bottom-color: rgba(240,246,252,0.1); }
      :host-context([data-theme="dark"]) .decisions-empty { background: #243447; border-color: rgba(240,246,252,0.1); box-shadow: 0 8px 24px rgba(0,0,0,0.4); }
      :host-context([data-theme="dark"]) .decisions-empty h3 { color: #e4eaf0; }
      :host-context([data-theme="dark"]) .decisions-empty p { color: #8899aa; }
      :host-context([data-theme="dark"]) .decision-card { background: #243447; border-color: rgba(79, 195, 247, 0.1); box-shadow: 0 8px 24px rgba(0,0,0,0.4); }
      :host-context([data-theme="dark"]) .decision-card:hover { box-shadow: 0 12px 32px rgba(0,0,0,0.5); }
      :host-context([data-theme="dark"]) .decision-info h3 { color: #e4eaf0; }
      :host-context([data-theme="dark"]) .decision-preview { background: linear-gradient(135deg, rgba(79,195,247,0.12), rgba(79,195,247,0.06)); border-color: rgba(79,195,247,0.25); color: #4fc3f7; }
      :host-context([data-theme="dark"]) .decision-label { color: #4fc3f7; }
    `,
  ],
})
export class PublicationsComponent {
  activeTab = signal<'publications' | 'decisions'>('publications');
  protected readonly decisions = DECISIONS;

  protected readonly publication = {
    title: 'J.O. n° spécial du 26 février 2026 - RITE.097',
    fileName: 'J.O. n° spécial du 26 février 2026_RITE.097 (1).pdf',
    href: encodeURI('/publications/J.O. n° spécial du 26 février 2026_RITE.097 (1).pdf'),
  };
}
