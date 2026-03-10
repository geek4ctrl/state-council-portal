import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { I18nPipe } from '../../i18n/i18n.pipe';
import { FooterComponent } from '../../components/footer/footer.component';
import { OrganizationComponent } from '../organization/organization.component';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [I18nPipe, FooterComponent, OrganizationComponent],
  template: `
    <div class="page-wrap page-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-overlay">
          <div class="container">
            <h1 class="hero-title" [innerHTML]="'about.hero.title' | i18n"></h1>
          </div>
        </div>
      </section>

      <app-organization [embedded]="true"></app-organization>

      <!-- Content Section -->
      <section class="content-section">
        <div class="container">
          <div class="legal-section">
            <h2 class="section-heading" [innerHTML]="'about.intro.title' | i18n"></h2>

            <div class="rubrics-grid">
              <article class="rubric-card" id="fondements">
                <h3>{{ 'about.rubrics.legalBasis' | i18n }}</h3>
                <p>{{ 'about.intro.body' | i18n }}</p>
                <ul>
                  <li>{{ 'about.legal.docs.1' | i18n }}</li>
                  <li>{{ 'about.legal.docs.2' | i18n }}</li>
                  <li>{{ 'about.legal.docs.3' | i18n }}</li>
                </ul>
              </article>

              <article class="rubric-card" id="organisations">
                <h3>{{ 'about.rubrics.organization' | i18n }}</h3>
                <p>{{ 'about.legal.detail.paragraph3' | i18n }}</p>
                <ul>
                  <li>{{ 'about.legal.detail.list2.1' | i18n }}</li>
                  <li>{{ 'about.legal.detail.list2.2' | i18n }}</li>
                  <li>{{ 'about.legal.detail.list2.3' | i18n }}</li>
                </ul>
                <p>{{ 'about.legal.detail.paragraph4' | i18n }}</p>
              </article>

              <article class="rubric-card" id="missions">
                <h3>{{ 'about.rubrics.mission' | i18n }}</h3>
                <p>{{ 'about.legal.detail.paragraph1' | i18n }}</p>
                <p>{{ 'about.legal.detail.paragraph2' | i18n }}</p>
                <ul>
                  <li>{{ 'about.legal.detail.list1.1' | i18n }}</li>
                  <li>{{ 'about.legal.detail.list1.2' | i18n }}</li>
                  <li>{{ 'about.legal.detail.list1.3' | i18n }}</li>
                  <li>{{ 'about.legal.detail.list1.4' | i18n }}</li>
                  <li>{{ 'about.legal.detail.list1.5' | i18n }}</li>
                </ul>
              </article>

              <article class="rubric-card" id="competences">
                <h3>{{ 'about.rubrics.competences' | i18n }}</h3>
                <p>{{ 'about.legal.detail.paragraph5' | i18n }}</p>
              </article>

              <article class="rubric-card" id="procedures">
                <h3>{{ 'about.rubrics.procedureBeforeCouncil' | i18n }}</h3>
                <p>{{ 'about.legal.detail.paragraph6' | i18n }}</p>
                <p>{{ 'about.legal.detail.paragraph7' | i18n }}</p>
                <p>{{ 'about.legal.detail.paragraph8' | i18n }}</p>
                <p>{{ 'about.legal.detail.paragraph9' | i18n }}</p>
              </article>

              <article class="rubric-card" id="historique">
                <h3>{{ 'history.title' | i18n }}</h3>
                <p>{{ 'history.body' | i18n }}</p>
              </article>
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
                  url('https://placehold.co/1920x400/82BCDC/ffffff?text=Court+Building') center/cover;
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

    /* Legal Section */
    .legal-section {
      background: white;
      padding: 60px 80px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }

    .rubrics-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 40px;
      margin-top: 40px;
    }

    .rubric-card {
      background: #f8f9fa;
      padding: 30px;
      border-radius: 8px;
      border-left: 4px solid #82BCDC;
    }

    .rubric-card:nth-child(5) {
      grid-column: 1 / -1;
    }

    .rubric-card h3 {
      font-size: 1.15rem;
      font-weight: 600;
      color: #1a1a1a;
      margin: 0 0 20px 0;
    }

    .rubric-card p {
      font-size: 0.9rem;
      line-height: 1.8;
      color: #333;
      margin: 0 0 15px 0;
      text-align: justify;
    }

    .rubric-card ul {
      margin: 15px 0;
      padding-left: 25px;
    }

    .rubric-card li {
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

      .legal-section {
        padding: 50px 40px;
      }

      .rubrics-grid {
        grid-template-columns: 1fr;
        gap: 30px;
      }

      .rubric-card:nth-child(5) {
        grid-column: auto;
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

      .legal-section {
        padding: 40px 25px;
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

      .legal-section {
        padding: 30px 20px;
      }

      .rubric-card p,
      .rubric-card li {
        font-size: 0.85rem;
      }

      .rubric-card h3 {
        font-size: 1rem;
      }
    }

    /* Home-style: loader, cursor */
    @keyframes fillBar{0%{width:0}60%{width:70%}100%{width:100%}}
    @keyframes labelPulse{0%,100%{opacity:.4}50%{opacity:1}}
    @keyframes rOrbit1{from{transform:rotateX(65deg) rotateZ(0)}to{transform:rotateX(65deg) rotateZ(360deg)}}
    @keyframes rOrbit2{from{transform:rotateX(65deg) rotateZ(120deg)}to{transform:rotateX(65deg) rotateZ(480deg)}}
    @keyframes rOrbit3{from{transform:rotateX(65deg) rotateZ(240deg)}to{transform:rotateX(65deg) rotateZ(600deg)}}
    @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
    .loader{position:fixed;inset:0;background:linear-gradient(135deg,#080e1a,#82BCDC);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:32px;z-index:9999;transition:opacity .7s ease,visibility .7s ease,transform .7s ease;}
    .loader.out{opacity:0;visibility:hidden;transform:scale(1.06);pointer-events:none;}
    .loader-sphere{width:120px;height:120px;position:relative;display:flex;align-items:center;justify-content:center;}
    .sphere-ring{position:absolute;inset:0;border-radius:50%;border:1px solid rgba(31,155,217,.35);}
    .loader .r1{inset:10px;animation:rOrbit1 2.5s linear infinite;}
    .loader .r2{inset:0;animation:rOrbit2 3.5s linear infinite;}
    .loader .r3{inset:-12px;animation:rOrbit3 5s linear infinite;}
    .sphere-core{width:52px;height:52px;border-radius:50%;background:radial-gradient(circle,rgba(31,155,217,.25),rgba(31,155,217,.05));border:1px solid rgba(31,155,217,.5);display:flex;align-items:center;justify-content:center;color:#1F9BD9;box-shadow:0 0 30px rgba(31,155,217,.3);animation:float 3s ease-in-out infinite;}
    .sphere-core svg{width:30px;height:30px;}
    .loader-track{width:220px;height:3px;background:rgba(255,255,255,.08);border-radius:99px;overflow:hidden;}
    .loader-fill{height:100%;background:linear-gradient(90deg,#1F9BD9,#e0b98a);border-radius:99px;animation:fillBar 2s ease-in-out infinite;}
    .loader-label{font-size:.72rem;font-weight:700;letter-spacing:2px;color:#1F9BD9;text-transform:uppercase;animation:labelPulse 2s ease-in-out infinite;}
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
