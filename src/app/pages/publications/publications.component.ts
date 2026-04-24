import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
              <p>Consultez et téléchargez les publications officielles du Conseil d'État.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="publications-section">
        <div class="container">
          <article class="publication-card">
            <div class="publication-copy">
              <p class="publication-kicker">{{ 'header.nav.publications' | i18n }}</p>
              <h2 class="publication-title">{{ publication.title }}</h2>
              <p class="publication-meta">PDF</p>
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
              <span>PDF</span>
            </a>
          </article>
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
      }

      .publication-card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        padding: 28px;
        border-radius: 16px;
        border: 1px solid rgba(26, 41, 66, 0.08);
        background: linear-gradient(135deg, rgba(248, 250, 252, 0.98), rgba(241, 245, 249, 0.96));
        box-shadow: 0 16px 40px rgba(26, 41, 66, 0.12);
      }

      .publication-copy {
        min-width: 0;
      }

      .publication-kicker {
        margin: 0 0 10px;
        color: #1f9bd9;
        font-size: 0.78rem;
        font-weight: 700;
        letter-spacing: 2px;
        text-transform: uppercase;
      }

      .publication-title {
        margin: 0 0 10px;
        color: #1a2942;
        font-size: 0.9rem;
        line-height: 1.8;
      }

      .publication-meta {
        margin: 0;
        color: #64748b;
        font-size: 0.9rem;
      }

      .download-button {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 0.95rem 1.35rem;
        border-radius: 999px;
        background: #1f9bd9;
        color: #ffffff;
        text-decoration: none;
        font-weight: 700;
        box-shadow: 0 10px 24px rgba(31, 155, 217, 0.28);
        flex-shrink: 0;
      }

      .download-button svg {
        width: 18px;
        height: 18px;
      }

      .download-button:hover {
        color: #ffffff;
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
        }

        .download-button {
          width: 100%;
          justify-content: center;
        }
      }
    `,
  ],
})
export class PublicationsComponent {
  protected readonly publication = {
    title: 'J.O. n° spécial du 26 février 2026 - RITE.097',
    fileName: 'J.O. n° spécial du 26 février 2026_RITE.097 (1).pdf',
    href: encodeURI('/publications/J.O. n° spécial du 26 février 2026_RITE.097 (1).pdf'),
  };
}
