import { Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="page-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-overlay">
          <div class="container">
            <h1 class="hero-title">UNDERSTANDING THE HIGHEST COURT<br>OF THE JUDICIAL SYSTEM</h1>
          </div>
        </div>
      </section>

      <!-- Content Section -->
      <section class="content-section">
        <div class="container">
          <!-- Introduction -->
          <div class="intro-box">
            <h2 class="section-heading">UNDERSTANDING THE HIGHEST COURT<br>OF THE JUDICIAL SYSTEM</h2>
            <div class="intro-text">
              <p>
                Article 151 paragraph 1 of the Constitution of the DRC of February 18, 2006, establishes an administrative judicial system composed of administrative
                courts and tribunals with the supervision of the State Council. Article 82 of Organic Law No. 13/011-B of
                April 11, 2013 establishing the organization, composition and functioning of the administrative courts stipulates that « there is
                existence of a State Council whose ordinary seat is located in the capital of the Democratic Republic of Congo. Its
                jurisdictional capacity can be exercised in another place». Historically, the State Council in this short presentation, traces its
                history and roots in our judicial institution. Created by Decree-Law on January 31, 1968, the State Council finds its
                distinct mark more than a century. Indeed, it was eight years after gaining independence in 1960 that the country established
                this State Council to regulate administrative appeals. It was only after a century in 2015 that the Supreme Administrative Court. This
                Court ceased to exist in the wake of the 2006 Constitution and its establishment, which declared null and void all provisions
                contrary and stipulated in its Article 223 that "The judgments and orders rendered before the promulgation of the Constitution in
                force that has passed and tribunals into those passed in extreme by virtue greater specialization, and seated in case precedential,
                as instrument in the specialization of February 18, 2006, the Supreme Administrative Court ceased to exist definitively on April 11,
                2013 when the Organic Law No. 13/011-B of April 11, 2013 establishing the organization, composition and functioning of the
                administrative courts. Pursuant to Article 151 paragraph 3 of the Constitution which establishes the regulatory authority for exercise of
                powers of the former Supreme Administrative Court. The administrative courts and tribunals comprising the administrative judicial system of
                Congo."
              </p>
            </div>
          </div>

          <!-- Legal Texts Section -->
          <div class="legal-section">
            <h2 class="section-heading">ACCESS THE MAIN LEGAL AND REGULATORY<br>TEXTS OF THE STATE COUNCIL</h2>

            <div class="legal-content">
              <!-- Left Column - Document Links -->
              <div class="document-links">
                <div class="doc-item">
                  <span class="doc-number">1</span>
                  <div class="doc-text">
                    <h3>Organic Law N° 13/011-B of April 11, 2013 containing the organization, composition and functioning of the ordinary jurisdictions</h3>
                  </div>
                </div>

                <div class="doc-item">
                  <span class="doc-number">2</span>
                  <div class="doc-text">
                    <h3>Decree N° 13/046 of September 25, 2013 rules concerning the chambers of State Council</h3>
                  </div>
                </div>

                <div class="doc-item">
                  <span class="doc-number">3</span>
                  <div class="doc-text">
                    <h3>Decree Law N° 13/018 relative to the remuneration and allowances to the magistrates</h3>
                  </div>
                </div>
              </div>

              <!-- Right Column - Detailed Text -->
              <div class="detailed-text">
                <div class="text-block">
                  <h4>Organic Law N° 13/011-B of April 11, 2013 containing the organization, composition and functioning of the administrative jurisdictions</h4>
                  <p>The content of this Law N° 13/011-B of April 11, 2013 containing the organization, composition and functioning of the administrative jurisdictions has been placed in a general administrative judicial context.</p>
                  <p>Each of the articles of the Law is written across the key provisions of the Title I of the magistrates:</p>
                  <ul>
                    <li>CHAPTER I: General provisions</li>
                    <li>CHAPTER II: Nomination and installation of the magistrates and clerks</li>
                    <li>CHAPTER III: of the legal regime</li>
                    <li>CHAPTER IV: Powers, guarantees and limits of the Magistrates</li>
                    <li>CHAPTER V: Discipline</li>
                  </ul>
                  <p>It is governed by Title II of the State Council Article 81 to Article 95 that each article deals specifically with the State Council in the following chapters:</p>
                  <ul>
                    <li>CHAPTER I: Legal regime</li>
                    <li>CHAPTER II: Installation, composition of the State Council</li>
                    <li>CHAPTER III: Different formations, functioning and personnel of the State Council</li>
                  </ul>
                  <p>The composition in article 82 provides how the State Council is composed, and lists the personnel which assists the magistrates and the auxiliary personnel attributions for the achievement of the administrative mandate.</p>
                  <p>Article 83 provided for the attribution of the State Council, one of which is: Appeals in administrative matters; It exercises the discipline of judges and court auxiliaries in its jurisdictional capacity; It receives the oath of magistrates and court officers falling under the administrative jurisdiction; It gives the legal opinion in the presence of judges nominated or the jurisdictional authority. Article 84 provided for the composition of different sections and formation of the State Council; Article 88 provided for the attribution in the deliberation of the chamber, each chamber shall constitute a jurisdictional formation for achievement of the mandate of the State Council as to sit for different attributions only if the quorum is reached.</p>
                  <p>The quorum required in the article is reached, when all chambers are composed as follows: the president or vice-president of chamber and two other magistrates, as well as a legal adviser and the Clerk.</p>
                  <p>With regards to the judicial quorum in Article 89, each chamber may constitute a jurisdictional formation for the achievement of the mandate of the State Council and sit for different attributions only if the quorum is reached.</p>
                  <p>The quorum required in the article is reached, when all chambers are composed as follows: the president or vice-president of chamber and two other magistrates, as well as a legal adviser and the Clerk. With the addition of the concerned interested party seated during the procedure with his assistance if need be and at the time of deliberations at the closed door, with participation of the Attorney General in the deliberations with participation of the clerk is done by the instruction of the matter.</p>
                  <p>After reading and having the legal texts explained to the jurisdictions in this platform, you can request their service directly by contacting us by email or by telephone and therefore receive them.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
export class AboutComponent implements OnInit {
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
