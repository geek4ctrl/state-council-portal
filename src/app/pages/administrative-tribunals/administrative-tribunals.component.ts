import { Component, inject } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { I18nPipe } from '../../i18n/i18n.pipe';
import { FooterComponent } from '../../components/footer/footer.component';

const ARTICLE_NUMBERS = [69, 70, 71, 72, 73, 74] as const;

@Component({
  selector: 'app-administrative-tribunals',
  standalone: true,
  imports: [I18nPipe, FooterComponent],
  template: `
    <div class="page-container">
      <section class="hero-section">
        <div class="hero-overlay">
          <div class="container">
            <h1 class="hero-title" [innerHTML]="'administrativeTribunals.hero.title' | i18n"></h1>
            <p class="hero-body">{{ 'administrativeTribunals.hero.body' | i18n }}</p>
          </div>
        </div>
      </section>

      <section class="intro-section">
        <div class="container">
          <div class="intro-box">
            <h2 class="intro-title">{{ 'administrativeTribunals.intro.title' | i18n }}</h2>
            <p class="intro-subtitle">{{ 'administrativeTribunals.intro.subtitle' | i18n }}</p>
          </div>
        </div>
      </section>

      <section class="articles-section">
        <div class="container">
          @for (n of articleNumbers; track n) {
            @if (n === 71) {
              <h3 class="section-title">{{ 'administrativeTribunals.section.title' | i18n }}</h3>
            }
            <div class="article-card">
              <div class="article-number">{{ n }}</div>
              <div class="article-body">
                <h3 class="article-title">{{ 'administrativeTribunals.articles.' + n + '.title' | i18n }}</h3>
                <p class="article-text" [innerHTML]="('administrativeTribunals.articles.' + n + '.body' | i18n).replace(/\\n/g, '<br>')"></p>
              </div>
            </div>
          }
        </div>
      </section>

      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .page-container {
      min-height: 100vh;
    }

    .hero-section {
      position: relative;
      height: 380px;
      background: linear-gradient(rgba(10, 25, 41, 0.85), rgba(26, 41, 66, 0.9)),
                  url('https://placehold.co/1920x400/1a2942/ffffff?text=Administrative+Tribunals') center/cover;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hero-overlay {
      position: relative;
      z-index: 1;
      width: 100%;
      text-align: center;
    }

    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 24px;
    }

    .hero-title {
      font-size: 2.75rem;
      font-weight: 700;
      color: white;
      line-height: 1.25;
      margin: 0 0 16px;
      text-shadow: 2px 2px 8px rgba(0,0,0,0.5);
    }

    .hero-body {
      font-size: 1.05rem;
      color: rgba(255,255,255,0.85);
      max-width: 760px;
      margin: 0 auto;
      line-height: 1.7;
    }

    .intro-section {
      background: #f4f6f8;
      padding: 60px 0 40px;
    }

    .intro-box {
      background: white;
      padding: 40px 60px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      border-left: 5px solid #2a9fd4;
    }

    .intro-title {
      font-size: 1.4rem;
      font-weight: 700;
      color: #2a9fd4;
      margin: 0 0 10px;
    }

    .intro-subtitle {
      font-size: 1rem;
      color: #555;
      margin: 0;
      line-height: 1.6;
    }

    .articles-section {
      background: #f4f6f8;
      padding: 40px 0 80px;
    }

    .section-title {
      font-size: 1.1rem;
      color: #2a9fd4;
      font-weight: 700;
      margin: 6px 0 16px;
      text-transform: uppercase;
      letter-spacing: 0.4px;
    }

    .article-card {
      display: flex;
      gap: 28px;
      align-items: flex-start;
      background: white;
      padding: 36px 48px;
      margin-bottom: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.07);
      border-radius: 4px;
      transition: box-shadow 0.2s;
    }

    .article-card:hover {
      box-shadow: 0 4px 16px rgba(0,0,0,0.12);
    }

    .article-number {
      flex-shrink: 0;
      width: 48px;
      height: 48px;
      background: #2a9fd4;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.85rem;
      font-weight: 700;
      margin-top: 2px;
    }

    .article-body {
      flex: 1;
    }

    .article-title {
      font-size: 1.1rem;
      font-weight: 700;
      color: #2a9fd4;
      margin: 0 0 12px;
    }

    .article-text {
      font-size: 0.97rem;
      color: #444;
      line-height: 1.85;
      margin: 0;
      text-align: justify;
    }

    @media (max-width: 768px) {
      .hero-title { font-size: 1.8rem; }
      .intro-box { padding: 28px 24px; }
      .article-card { padding: 24px 20px; }
    }

    /* Dark Mode */
    :host-context([data-theme="dark"]) .intro-section { background: #0d1117; }
    :host-context([data-theme="dark"]) .intro-box { background: #161b22; border-left-color: #58a6ff; box-shadow: 0 4px 12px rgba(0,0,0,0.3); }
    :host-context([data-theme="dark"]) .intro-subtitle { color: #8b949e; }
    :host-context([data-theme="dark"]) .articles-section { background: #0d1117; }
    :host-context([data-theme="dark"]) .section-title { color: #58a6ff; }
    :host-context([data-theme="dark"]) .article-card { background: #161b22; box-shadow: 0 2px 8px rgba(0,0,0,0.3); }
    :host-context([data-theme="dark"]) .article-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.5); }
    :host-context([data-theme="dark"]) .article-text { color: #8b949e; }
  `]
})
export class AdministrativeTribunalsComponent {
  readonly articleNumbers = ARTICLE_NUMBERS;

  constructor() {
    inject(SeoService).updateMetadata({
      title: 'Administrative Tribunals | State Council DRC',
      description: 'Organization, composition and functioning of Administrative Tribunals, Articles 69 to 74.'
    });
  }
}
