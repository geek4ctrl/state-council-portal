import { Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { I18nPipe } from '../../i18n/i18n.pipe';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [I18nPipe, FooterComponent],
  template: `
    <div class="page-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-overlay">
          <div class="container">
            <h1 class="hero-title" [innerHTML]="'about.hero.title' | i18n"></h1>
          </div>
        </div>
      </section>

      <!-- Content Section -->
      <section class="content-section">
        <div class="container">
          <!-- Introduction -->
          <div class="intro-box">
            <h2 class="section-heading" [innerHTML]="'about.intro.title' | i18n"></h2>
            <div class="intro-text">
              <p>{{ 'about.intro.body' | i18n }}</p>
            </div>
          </div>

          <!-- Legal Texts Section -->
          <div class="legal-section">
            <h2 class="section-heading" [innerHTML]="'about.legal.title' | i18n"></h2>

            <div class="legal-content">
              <!-- Left Column - Document Links -->
              <div class="document-links">
                <div class="doc-item">
                  <span class="doc-number">1</span>
                  <div class="doc-text">
                    <h3>{{ 'about.legal.docs.1' | i18n }}</h3>
                  </div>
                </div>

                <div class="doc-item">
                  <span class="doc-number">2</span>
                  <div class="doc-text">
                    <h3>{{ 'about.legal.docs.2' | i18n }}</h3>
                  </div>
                </div>

                <div class="doc-item">
                  <span class="doc-number">3</span>
                  <div class="doc-text">
                    <h3>{{ 'about.legal.docs.3' | i18n }}</h3>
                  </div>
                </div>
              </div>

              <!-- Right Column - Detailed Text -->
              <div class="detailed-text">
                <div class="text-block">
                  <h4>{{ 'about.legal.detail.title' | i18n }}</h4>
                  <p>{{ 'about.legal.detail.paragraph1' | i18n }}</p>
                  <p>{{ 'about.legal.detail.paragraph2' | i18n }}</p>
                  <ul>
                    <li>{{ 'about.legal.detail.list1.1' | i18n }}</li>
                    <li>{{ 'about.legal.detail.list1.2' | i18n }}</li>
                    <li>{{ 'about.legal.detail.list1.3' | i18n }}</li>
                    <li>{{ 'about.legal.detail.list1.4' | i18n }}</li>
                    <li>{{ 'about.legal.detail.list1.5' | i18n }}</li>
                  </ul>
                  <p>{{ 'about.legal.detail.paragraph3' | i18n }}</p>
                  <ul>
                    <li>{{ 'about.legal.detail.list2.1' | i18n }}</li>
                    <li>{{ 'about.legal.detail.list2.2' | i18n }}</li>
                    <li>{{ 'about.legal.detail.list2.3' | i18n }}</li>
                  </ul>
                  <p>{{ 'about.legal.detail.paragraph4' | i18n }}</p>
                  <p>{{ 'about.legal.detail.paragraph5' | i18n }}</p>
                  <p>{{ 'about.legal.detail.paragraph6' | i18n }}</p>
                  <p>{{ 'about.legal.detail.paragraph7' | i18n }}</p>
                  <p>{{ 'about.legal.detail.paragraph8' | i18n }}</p>
                  <p>{{ 'about.legal.detail.paragraph9' | i18n }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .page-container {
      min-height: 100vh;
    }

    /* Hero Section */
    .hero-section {
      position: relative;
      height: 400px;
      background: linear-gradient(rgba(10, 25, 41, 0.85), rgba(26, 41, 66, 0.9)),
                  url('https://placehold.co/1920x400/1a2942/ffffff?text=Court+Building') center/cover;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .hero-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
      opacity: 0.3;
    }

    .hero-overlay {
      position: relative;
      z-index: 1;
      width: 100%;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .hero-title {
      font-size: 2.75rem;
      font-weight: 700;
      color: white;
      text-align: center;
      line-height: 1.3;
      letter-spacing: 1px;
      margin: 0;
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
    }

    /* Content Section */
    .content-section {
      background: #f8f9fa;
      padding: 80px 0;
    }

    .section-heading {
      font-size: 2rem;
      font-weight: 700;
      color: #1a1a1a;
      text-align: center;
      margin: 0 0 40px 0;
      line-height: 1.4;
      letter-spacing: 0.5px;
    }

    /* Introduction Box */
    .intro-box {
      background: white;
      padding: 60px 80px;
      margin-bottom: 80px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }

    .intro-text {
      margin-top: 40px;
    }

    .intro-text p {
      font-size: 1rem;
      line-height: 1.9;
      color: #333;
      text-align: justify;
      margin: 0;
    }

    /* Legal Section */
    .legal-section {
      background: white;
      padding: 60px 80px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }

    .legal-content {
      display: grid;
      grid-template-columns: 300px 1fr;
      gap: 40px;
      margin-top: 40px;
    }

    /* Document Links */
    .document-links {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .doc-item {
      display: flex;
      gap: 15px;
      align-items: flex-start;
      padding: 20px;
      background: #f8f9fa;
      border-radius: 8px;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .doc-item:hover {
      background: #e8eef7;
      transform: translateX(5px);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .doc-number {
      flex-shrink: 0;
      width: 30px;
      height: 30px;
      background: #c41e3a;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 0.9rem;
    }

    .doc-text h3 {
      font-size: 0.85rem;
      font-weight: 600;
      color: #1a1a1a;
      line-height: 1.5;
      margin: 0;
    }

    /* Detailed Text */
    .detailed-text {
      background: #f8f9fa;
      padding: 30px;
      border-radius: 8px;
      border-left: 4px solid #c8956b;
    }

    .text-block h4 {
      font-size: 1rem;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0 0 20px 0;
      line-height: 1.6;
    }

    .text-block p {
      font-size: 0.9rem;
      line-height: 1.8;
      color: #333;
      margin: 0 0 15px 0;
      text-align: justify;
    }

    .text-block ul {
      margin: 15px 0;
      padding-left: 25px;
    }

    .text-block li {
      font-size: 0.9rem;
      line-height: 1.8;
      color: #333;
      margin-bottom: 8px;
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
      .hero-title {
        font-size: 2.25rem;
      }

      .intro-box,
      .legal-section {
        padding: 50px 40px;
      }

      .legal-content {
        grid-template-columns: 1fr;
        gap: 30px;
      }

      .document-links {
        flex-direction: row;
        overflow-x: auto;
        gap: 15px;
      }

      .doc-item {
        min-width: 250px;
      }
    }

    @media (max-width: 768px) {
      .hero-section {
        height: 300px;
      }

      .hero-title {
        font-size: 1.75rem;
      }

      .section-heading {
        font-size: 1.5rem;
      }

      .content-section {
        padding: 50px 0;
      }

      .intro-box,
      .legal-section {
        padding: 40px 25px;
      }

      .document-links {
        flex-direction: column;
      }

      .doc-item {
        min-width: auto;
      }
    }

    @media (max-width: 480px) {
      .hero-section {
        height: 250px;
      }

      .hero-title {
        font-size: 1.4rem;
      }

      .section-heading {
        font-size: 1.25rem;
      }

      .intro-box,
      .legal-section {
        padding: 30px 20px;
      }

      .intro-text p,
      .text-block p,
      .text-block li {
        font-size: 0.85rem;
      }

      .doc-text h3 {
        font-size: 0.8rem;
      }

      .text-block h4 {
        font-size: 0.95rem;
      }
    }
  `]
})
export class PresentationComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit() {
    this.seoService.updateMetadata({
      title: 'Présentation',
      description: 'Présentation du Conseil d\'État de la RDC : historique, attributions, textes légaux et règlementaires. Accédez aux lois organiques et décrets relatifs au fonctionnement de la juridiction.',
      keywords: 'présentation, histoire, attributions, lois, décrets, textes légaux, Conseil d\'État',
      ogUrl: '/presentation'
    });
  }
}
