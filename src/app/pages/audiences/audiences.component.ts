import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-audiences',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-overlay"></div>
        <div class="container">
          <div class="hero-grid">
            <div class="hero-title">
              <h1>SCHEDULE AND<br />ROLE EXCERPTS</h1>
            </div>
            <div class="vertical-line"></div>
            <div class="hero-description">
              <p>
                Access hearing schedules, court calendars, and role excerpts for upcoming sessions
                at the STATE COUNCIL. Stay informed about scheduled audiences and case
                listings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Content Section -->
      <section class="content-section">
        <div class="container">
          <!-- Understanding Audiences -->
          <div class="understanding-section">
            <h2>Understanding Audiences</h2>
            <p>
              "Audiences" refer to the formal court sessions where cases are heard before the State
              Council. The State Council publishes role excerpts (extraits de rôle) which list the
              cases scheduled for hearing, including case numbers, parties' names, legal
              representatives' names, case types, and hearing dates. These documents help lawyers,
              litigants, and the public stay informed about upcoming proceedings. The State Council
              hears matters organized by chambers: Civil, Criminal, Commercial, and Social matters.
              Schedules are published in advance to ensure transparency and allow parties to prepare
              appropriately.
            </p>
          </div>

          <!-- Recent Role Excerpts Section -->
          <div class="schedules-section">
            <div class="section-header">
              <div class="header-line"></div>
              <h2>RECENT ROLE EXCERPTS & HEARING</h2>
            </div>
            <p class="section-subtitle">PUBLISHED SCHEDULES</p>

            <div class="documents-grid">
              <!-- Document Card 1 -->
              <div class="document-card">
                <div class="document-preview">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260" fill="none">
                    <rect width="200" height="260" fill="#ffffff" />
                    <rect x="20" y="30" width="160" height="8" fill="#ddd" />
                    <rect x="20" y="50" width="140" height="6" fill="#eee" />
                    <rect x="20" y="70" width="160" height="4" fill="#eee" />
                    <rect x="20" y="80" width="160" height="4" fill="#eee" />
                    <rect x="20" y="90" width="120" height="4" fill="#eee" />
                    <rect x="20" y="110" width="160" height="4" fill="#eee" />
                    <rect x="20" y="120" width="160" height="4" fill="#eee" />
                    <rect x="20" y="130" width="140" height="4" fill="#eee" />
                  </svg>
                  <div class="document-label">
                    <span class="label-text">Role Excerpt - Civil Chamber</span>
                    <span class="label-date">18/01/26</span>
                  </div>
                </div>
                <div class="document-info">
                  <h3>Civil Matters Hearing Schedule - January 2026</h3>
                  <button class="download-btn">
                    DOWNLOAD PDF
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Document Card 2 -->
              <div class="document-card">
                <div class="document-preview">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260" fill="none">
                    <rect width="200" height="260" fill="#ffffff" />
                    <rect x="20" y="30" width="160" height="8" fill="#ddd" />
                    <rect x="20" y="50" width="140" height="6" fill="#eee" />
                    <rect x="20" y="70" width="160" height="4" fill="#eee" />
                    <rect x="20" y="80" width="160" height="4" fill="#eee" />
                    <rect x="20" y="90" width="120" height="4" fill="#eee" />
                    <rect x="20" y="110" width="160" height="4" fill="#eee" />
                    <rect x="20" y="120" width="160" height="4" fill="#eee" />
                    <rect x="20" y="130" width="140" height="4" fill="#eee" />
                  </svg>
                  <div class="document-label">
                    <span class="label-text">Role Excerpt - Criminal Chamber</span>
                    <span class="label-date">18/01/26</span>
                  </div>
                </div>
                <div class="document-info">
                  <h3>Criminal Cases Calendar - January 2026</h3>
                  <button class="download-btn">
                    DOWNLOAD PDF
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Document Card 3 -->
              <div class="document-card">
                <div class="document-preview">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260" fill="none">
                    <rect width="200" height="260" fill="#ffffff" />
                    <rect x="20" y="30" width="160" height="8" fill="#ddd" />
                    <rect x="20" y="50" width="140" height="6" fill="#eee" />
                    <rect x="20" y="70" width="160" height="4" fill="#eee" />
                    <rect x="20" y="80" width="160" height="4" fill="#eee" />
                    <rect x="20" y="90" width="120" height="4" fill="#eee" />
                    <rect x="20" y="110" width="160" height="4" fill="#eee" />
                    <rect x="20" y="120" width="160" height="4" fill="#eee" />
                    <rect x="20" y="130" width="140" height="4" fill="#eee" />
                  </svg>
                  <div class="document-label">
                    <span class="label-text">Role Excerpt - Social Chamber</span>
                    <span class="label-date">12/01/26</span>
                  </div>
                </div>
                <div class="document-info">
                  <h3>Social & Labor Cases - December 2025</h3>
                  <button class="download-btn">
                    DOWNLOAD PDF
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Document Card 4 -->
              <div class="document-card">
                <div class="document-preview">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260" fill="none">
                    <rect width="200" height="260" fill="#ffffff" />
                    <rect x="20" y="30" width="160" height="8" fill="#ddd" />
                    <rect x="20" y="50" width="140" height="6" fill="#eee" />
                    <rect x="20" y="70" width="160" height="4" fill="#eee" />
                    <rect x="20" y="80" width="160" height="4" fill="#eee" />
                    <rect x="20" y="90" width="120" height="4" fill="#eee" />
                    <rect x="20" y="110" width="160" height="4" fill="#eee" />
                    <rect x="20" y="120" width="160" height="4" fill="#eee" />
                    <rect x="20" y="130" width="140" height="4" fill="#eee" />
                  </svg>
                  <div class="document-label">
                    <span class="label-text">General Calendar</span>
                    <span class="label-date">08/01/26</span>
                  </div>
                </div>
                <div class="document-info">
                  <h3>Complete Court Calendar - Q1 2026</h3>
                  <button class="download-btn">
                    DOWNLOAD PDF
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Need Assistance Section -->
          <div class="assistance-section">
            <div class="assistance-content">
              <h2>Need Assistance?</h2>
              <p>
                If you cannot find your case on the hearing schedule or have questions about an
                upcoming audience, please contact the Court Registry for assistance.
              </p>
            </div>
            <button class="contact-btn">CONTACT REGISTRY</button>
          </div>
        </div>
      </section>

    <!-- Footer Section -->
    <footer class="footer-section">
      <div class="footer-main">
        <div class="footer-logo-wrapper">
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
            <path d="M50 15L35 25V50L50 60L65 50V25L50 15Z" fill="#BF9874"/>
            <path d="M50 30L42 35V50L50 55L58 50V35L50 30Z" fill="white"/>
            <rect x="48" y="10" width="4" height="8" fill="#BF9874"/>
            <rect x="46" y="5" width="8" height="4" fill="#BF9874"/>
          </svg>
        </div>
        <div class="container">
          <div class="footer-grid">
            <div class="footer-column">
              <h3>Main Office</h3>
              <p>No. 3 Avenue de la Justice</p>
              <p>Central District of Kinshasa</p>
              <p>Democratic Republic of Congo</p>
              <p class="footer-contact">Tel: +243 (21) 0000000</p>
              <p class="footer-contact">Email: info@conseildetat.cd</p>
            </div>

            <div class="footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#">About the Court</a></li>
                <li><a href="#">Jurisprudence</a></li>
                <li><a href="#">Filing Procedures</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>

            <div class="footer-column">
              <h3>Resources</h3>
              <ul>
                <li><a href="#">Legal Documents</a></li>
                <li><a href="#">Court Decisions</a></li>
                <li><a href="#">Annual Reports</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>

            <div class="footer-column">
              <h3>Connect</h3>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <div class="footer-bottom-content">
            <a href="#" class="privacy-link">Privacy</a>
            <p class="copyright">Copyright State Council. All Rights Reserved</p>
            <div class="social-icons">
              <a href="#" class="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                </svg>
              </a>
              <a href="#" class="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.82 2.16-4.82 4.82 0 .38.04.75.13 1.1-4-.2-7.54-2.12-9.91-5.04-.42.72-.66 1.55-.66 2.44 0 1.67.85 3.15 2.14 4.01-.79-.03-1.53-.24-2.18-.6v.06c0 2.34 1.66 4.29 3.87 4.73-.4.11-.83.17-1.27.17-.31 0-.62-.03-.92-.08.63 1.96 2.44 3.38 4.6 3.42-1.68 1.32-3.8 2.1-6.11 2.1-.4 0-.79-.02-1.17-.07 2.18 1.4 4.77 2.21 7.55 2.21 9.06 0 14-7.5 14-14 0-.21 0-.42-.02-.63.96-.69 1.8-1.56 2.46-2.55z"/>
                </svg>
              </a>
              <a href="#" class="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  `,
  styles: [
    `
      /* General Reset */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .page-container {
        background: white;
        min-height: 100vh;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }

      /* Hero Section */
      .hero-section {
        background-image: url('/assets/images/audience-hero.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-color: #2c3e50;
        color: white;
        padding: 120px 0;
        position: relative;
      }

      .hero-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(44, 62, 80, 0.88) 0%, rgba(52, 73, 94, 0.85) 100%);
        z-index: 1;
      }

      .hero-section .container {
        position: relative;
        z-index: 2;
      }

      .hero-grid {
        display: grid;
        grid-template-columns: 1fr auto 1.2fr;
        gap: 60px;
        align-items: center;
      }

      .hero-title {
        position: relative;
        text-align: left;
      }

      .vertical-line {
        width: 3px;
        height: 180px;
        background-color: #ffffff;
        display: block;
      }

      .hero-description {
        padding-left: 0;
      }

      .hero-title h1 {
        font-size: 4rem;
        font-weight: 700;
        line-height: 1.15;
        margin: 0;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: #ffffff;
        font-family: 'Playfair Display', serif;
      }

      .hero-description p {
        font-size: 1.05rem;
        line-height: 1.9;
        opacity: 0.95;
        margin: 0;
        font-weight: 300;
      }

      /* Content Section */
      .content-section {
        padding: 100px 0 80px;
        background: #fafafa;
      }

      /* Understanding Audiences Section */
      .understanding-section {
        margin-bottom: 100px;
        background: white;
        padding: 0;
      }

      .understanding-section h2 {
        font-size: 2rem;
        color: #1a1a1a;
        margin-bottom: 25px;
        font-weight: 600;
        letter-spacing: 0.5px;
      }

      .understanding-section p {
        font-size: 1rem;
        line-height: 1.9;
        color: #666;
        text-align: justify;
      }

      /* Schedules Section */
      .schedules-section {
        margin-bottom: 80px;
      }

      .section-header {
        display: flex;
        align-items: center;
        gap: 30px;
        margin-bottom: 15px;
      }

      .header-line {
        flex: 0 0 60px;
        height: 2px;
        background: #c9a961;
      }

      .schedules-section h2 {
        font-size: 2.5rem;
        color: #1a1a1a;
        margin: 0;
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: uppercase;
      }

      .section-subtitle {
        font-size: 0.8rem;
        color: #c9a961;
        margin: 0 0 60px 0;
        text-transform: uppercase;
        letter-spacing: 2.5px;
        font-weight: 400;
      }

      /* Documents Grid */
      .documents-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;
        margin-bottom: 80px;
      }

      .document-card {
        background: white;
        border-radius: 0;
        overflow: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      }

      .document-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
      }

      .document-preview {
        width: 100%;
        height: 320px;
        background: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
      }

      .document-preview img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }

      .document-card:hover .document-preview img {
        transform: scale(1.05);
      }

      .document-label {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: transparent !important;
        padding: 12px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: black;
        font-size: 0.8rem;
      }

      .label-text {
        font-weight: 400;
      }

      .label-date {
        font-weight: 600;
        color: #c9a961;
      }

      .document-info {
        padding: 25px 20px;
        background: white;
      }

      .document-info h3 {
        font-size: 1.05rem;
        color: #1a1a1a;
        margin-bottom: 20px;
        font-weight: 600;
        line-height: 1.5;
        min-height: 50px;
      }

      .download-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        background: transparent;
        border: 1px solid #1a1a1a;
        color: #1a1a1a;
        font-size: 0.8rem;
        font-weight: 600;
        cursor: pointer;
        padding: 12px 20px;
        transition: all 0.3s ease;
        width: 100%;
        letter-spacing: 0.8px;
        text-transform: uppercase;
      }

      .download-btn:hover {
        background: #1a1a1a;
        color: white;
      }

      .download-btn svg {
        width: 18px;
        height: 18px;
        order: 2;
      }

      /* Assistance Section */
      .assistance-section {
        background: white;
        padding: 50px 60px;
        border-radius: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 50px;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
      }

      .assistance-content h2 {
        font-size: 1.8rem;
        color: #1a1a1a;
        margin-bottom: 15px;
        font-weight: 600;
        letter-spacing: 0.5px;
      }

      .assistance-content p {
        font-size: 1rem;
        color: #666;
        line-height: 1.7;
        margin: 0;
      }

      .contact-btn {
        background: #1a1a1a;
        color: white;
        border: none;
        padding: 16px 40px;
        font-size: 0.85rem;
        font-weight: 600;
        border-radius: 0;
        cursor: pointer;
        white-space: nowrap;
        transition: all 0.3s ease;
        letter-spacing: 1px;
        text-transform: uppercase;
      }

      .contact-btn:hover {
        background: #000;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      }

      /* Footer Section */
      .footer-section {
      background-color: transparent;
    }

    .footer-main {
      background-color: #2C3E50;
      color: #b0b0b0;
      padding: 60px 0 40px;
      position: relative;
    }

    .footer-logo-wrapper {
      position: absolute;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
      background-color: white;
      width: 120px;
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
    }

    .footer-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 50px;
      padding-top: 40px;
    }

    .footer-column h3 {
      color: white;
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .footer-column p {
      font-size: 0.9rem;
      line-height: 1.8;
      margin: 5px 0;
      color: #b0b0b0;
    }

    .footer-column ul {
      list-style: none;
      padding: 0;
    }

    .footer-column ul li {
      margin-bottom: 12px;
    }

    .footer-column ul li a {
      color: #b0b0b0;
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s ease;
    }

    .footer-column ul li a:hover {
      color: #BF9874;
    }

    .footer-bottom {
      background-color: #EAF1FA;
      padding: 25px 0;
    }

    .footer-bottom-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }

    .social-icons {
      display: flex;
      gap: 15px;
    }

    .social-icon {
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #5A7184;
      border-radius: 50%;
      color: white;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .social-icon:hover {
      background-color: #BF9874;
    }

    .social-icon svg {
      width: 16px;
      height: 16px;
    }

    .copyright {
      font-size: 0.85rem;
      color: #555;
    }

    .privacy-link {
      color: #555;
      text-decoration: none;
      font-size: 0.85rem;
      transition: color 0.3s ease;
    }

    .privacy-link:hover {
      color: #BF9874;
    }

    @media (max-width: 1024px) {
      .offer-grid,
      .practice-grid,
      .newsletter-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .quick-links-container {
        flex-wrap: wrap;
      }

      .president-content {
        grid-template-columns: 380px 1fr;
      }

      .info-left {
        gap: 20px;
      }

      .info-item span {
        font-size: 0.75rem;
      }
    }

    @media (max-width: 768px) {
      .quick-links-container,
      .offer-grid,
      .practice-grid,
      .newsletter-grid {
        grid-template-columns: 1fr;
      }

      .president-content {
        grid-template-columns: 1fr;
      }

      .contact-bar {
        flex-direction: column;
      }

      .footer-grid {
        grid-template-columns: 1fr;
      }



        .section-header {
          flex-direction: column;
          align-items: flex-start;
        }

        .header-line {
          display: none;
        }

        .assistance-section {
          flex-direction: column;
          padding: 40px 30px;
        }

        .contact-btn {
          width: 100%;
        }
      }
    `
  ]
})
export class AudiencesComponent {}
