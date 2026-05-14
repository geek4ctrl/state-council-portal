import { Component } from '@angular/core';
import { I18nPipe } from '../../i18n/i18n.pipe';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-process',
  imports: [I18nPipe, FooterComponent],
  template: `
    <div class="page-wrap page-container">
      <section class="hero-section">
        <div class="container">
          <div class="hero-grid">
            <div class="hero-left">
              <h1>{{ 'process.title' | i18n }}</h1>
            </div>
            <div class="vertical-divider"></div>
            <div class="hero-right">
              <p>{{ 'process.body' | i18n }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <article class="content-card">
            <h2>{{ 'process.title' | i18n }}</h2>
            <p>{{ 'process.body' | i18n }}</p>
          </article>
        </div>
      </section>

      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    * {
      box-sizing: border-box;
    }

    .page-container {
      background: #ffffff;
      min-height: 100vh;
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
      font-size: clamp(2rem, 4.6vw, 3.2rem);
      font-weight: 700;
      letter-spacing: 1.8px;
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

    .content-section {
      padding: 72px 0 96px;
    }

    .content-card {
      border: 1px solid rgba(26, 41, 66, 0.08);
      border-radius: 16px;
      background: linear-gradient(135deg, rgba(248, 250, 252, 0.98), rgba(241, 245, 249, 0.96));
      box-shadow: 0 16px 40px rgba(26, 41, 66, 0.12);
      padding: 28px;
      color: #1a2942;
    }

    .content-card h2 {
      margin: 0 0 12px;
      font-size: 1.5rem;
      font-weight: 700;
      color: #1a2942;
    }

    .content-card p {
      margin: 0;
      font-size: 1.02rem;
      line-height: 1.75;
      color: #475569;
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

      .content-card {
        padding: 22px;
      }

      .content-card h2 {
        font-size: 1.35rem;
      }
    }

    /* Dark Mode */
    :host-context([data-theme="dark"]) .page-container { background: #1a2332; }
    :host-context([data-theme="dark"]) .content-card { background: #243447; border-color: #2d4156; box-shadow: 0 16px 40px rgba(0,0,0,0.4); color: #e4eaf0; }
    :host-context([data-theme="dark"]) .content-card h2 { color: #e4eaf0; }
    :host-context([data-theme="dark"]) .content-card p { color: #8899aa; }
  `]
})
export class ProcessComponent {}
