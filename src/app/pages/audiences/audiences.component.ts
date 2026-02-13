import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nPipe } from '../../i18n/i18n.pipe';

@Component({
  selector: 'app-audiences',
  imports: [CommonModule, I18nPipe],
  template: `
    <div class="page-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-overlay"></div>
        <div class="container">
          <div class="hero-grid">
            <div class="hero-title">
              <h1 [innerHTML]="'audiences.hero.title' | i18n"></h1>
            </div>
            <div class="vertical-line"></div>
            <div class="hero-description">
              <p>{{ 'audiences.hero.body' | i18n }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Content Section -->
      <section class="content-section">
        <div class="container">
          <!-- Understanding Audiences -->
          <div class="understanding-section">
            <h2>{{ 'audiences.understanding.title' | i18n }}</h2>
            <p>{{ 'audiences.understanding.body' | i18n }}</p>
          </div>

          <!-- Recent Role Excerpts Section -->
          <div class="schedules-section">
            <div class="section-header">
              <div class="header-line"></div>
              <h2>{{ 'audiences.recent.title' | i18n }}</h2>
            </div>
            <p class="section-subtitle">{{ 'audiences.recent.subtitle' | i18n }}</p>

            <div class="documents-grid">
              <!-- Document Card 1 -->
              <div class="document-card">
                <div class="document-preview">
                  <img src="https://images.unsplash.com/photo-1568667256549-094345857637?w=300&h=400&fit=crop&q=80" alt="PDF Preview">
                </div>
                <div class="document-info">
                  <div class="document-meta">
                    <span class="label-text">{{ 'audiences.documents.civil.label' | i18n }}</span>
                    <span class="label-date">18/01/26</span>
                  </div>
                  <h3>{{ 'audiences.documents.civil.title' | i18n }}</h3>
                  <button class="download-btn">
                    {{ 'audiences.actions.downloadPdf' | i18n }}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Document Card 2 -->
              <div class="document-card">
                <div class="document-preview">
                  <img src="https://images.unsplash.com/photo-1554224311-beee460201f9?w=300&h=400&fit=crop&q=80" alt="PDF Preview">
                </div>
                <div class="document-info">
                  <div class="document-meta">
                    <span class="label-text">{{ 'audiences.documents.criminal.label' | i18n }}</span>
                    <span class="label-date">18/01/26</span>
                  </div>
                  <h3>{{ 'audiences.documents.criminal.title' | i18n }}</h3>
                  <button class="download-btn">
                    {{ 'audiences.actions.downloadPdf' | i18n }}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Document Card 3 -->
              <div class="document-card">
                <div class="document-preview">
                  <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&h=400&fit=crop&q=80" alt="PDF Preview">
                </div>
                <div class="document-info">
                  <div class="document-meta">
                    <span class="label-text">{{ 'audiences.documents.social.label' | i18n }}</span>
                    <span class="label-date">12/01/26</span>
                  </div>
                  <h3>{{ 'audiences.documents.social.title' | i18n }}</h3>
                  <button class="download-btn">
                    {{ 'audiences.actions.downloadPdf' | i18n }}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Document Card 4 -->
              <div class="document-card">
                <div class="document-preview">
                  <img src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=300&h=400&fit=crop&q=80" alt="PDF Preview">
                </div>
                <div class="document-info">
                  <div class="document-meta">
                    <span class="label-text">{{ 'audiences.documents.general.label' | i18n }}</span>
                    <span class="label-date">08/01/26</span>
                  </div>
                  <h3>{{ 'audiences.documents.general.title' | i18n }}</h3>
                  <button class="download-btn">
                    {{ 'audiences.actions.downloadPdf' | i18n }}
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
              <h2>{{ 'audiences.assistance.title' | i18n }}</h2>
              <p>{{ 'audiences.assistance.body' | i18n }}</p>
            </div>
            <button class="contact-btn">{{ 'audiences.assistance.cta' | i18n }}</button>
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
              <h3>{{ 'footer.mainOffice.title' | i18n }}</h3>
              <p>{{ 'footer.mainOffice.address1' | i18n }}</p>
              <p>{{ 'footer.mainOffice.address2' | i18n }}</p>
              <p>{{ 'footer.mainOffice.address3' | i18n }}</p>
              <p class="footer-contact">{{ 'footer.mainOffice.phone' | i18n }}</p>
              <p class="footer-contact">{{ 'footer.mainOffice.email' | i18n }}</p>
            </div>

            <div class="footer-column">
              <h3>{{ 'footer.quickLinks.title' | i18n }}</h3>
              <ul>
                <li><a href="#">{{ 'footer.quickLinks.about' | i18n }}</a></li>
                <li><a href="#">{{ 'footer.quickLinks.jurisprudence' | i18n }}</a></li>
                <li><a href="#">{{ 'footer.quickLinks.filing' | i18n }}</a></li>
                <li><a href="#">{{ 'footer.quickLinks.contact' | i18n }}</a></li>
              </ul>
            </div>

            <div class="footer-column">
              <h3>{{ 'footer.resources.title' | i18n }}</h3>
              <ul>
                <li><a href="#">{{ 'footer.resources.legalDocs' | i18n }}</a></li>
                <li><a href="#">{{ 'footer.resources.decisions' | i18n }}</a></li>
                <li><a href="#">{{ 'footer.resources.reports' | i18n }}</a></li>
                <li><a href="#">{{ 'footer.resources.faqs' | i18n }}</a></li>
              </ul>
            </div>

            <div class="footer-column">
              <h3>{{ 'footer.connect.title' | i18n }}</h3>
              <ul>
                <li><a href="#">{{ 'footer.connect.facebook' | i18n }}</a></li>
                <li><a href="#">{{ 'footer.connect.twitter' | i18n }}</a></li>
                <li><a href="#">{{ 'footer.connect.instagram' | i18n }}</a></li>
                <li><a href="#">{{ 'footer.connect.linkedin' | i18n }}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <div class="footer-bottom-content">
            <a href="#" class="privacy-link">{{ 'footer.privacy' | i18n }}</a>
            <p class="copyright">{{ 'footer.copyright' | i18n }}</p>
            <div class="social-icons">
              <a href="#" class="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                </svg>
              </a>
              <a href="#" class="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.82 2.16-4.82 4.82 0 .38.04.75.13 1.10-4-.2-7.54-2.12-9.91-5.04-.42.72-.66 1.55-.66 2.44 0 1.67.85 3.15 2.14 4.01-.79-.03-1.53-.24-2.18-.6v.06c0 2.34 1.66 4.29 3.87 4.73-.4.11-.83.17-1.27.17-.31 0-.62-.03-.92-.08.63 1.96 2.44 3.38 4.6 3.42-1.68 1.32-3.8 2.1-6.11 2.1-.4 0-.79-.02-1.17-.07 2.18 1.4 4.77 2.21 7.55 2.21 9.06 0 14-7.5 14-14 0-.21 0-.42-.02-.63.96-.69 1.8-1.56 2.46-2.55z"/>
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

      /* Hero Section - ONLY THIS SECTION HAS BEEN CHANGED */
      .hero-section {
        background-image: url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=800&fit=crop&q=80');
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
        background: linear-gradient(135deg, rgba(44, 62, 80, 0.92) 0%, rgba(52, 73, 94, 0.88) 50%, rgba(30, 46, 68, 0.90) 100%);
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
        padding: 0 0 80px;
        background: #fafafa;
      }

      /* Understanding Audiences Section */
      .understanding-section {
        margin-bottom: 0;
        background: #f5f5f5;
        padding: 50px 60px;
        border-radius: 0;
      }

      .understanding-section h2 {
        font-size: 1.5rem;
        color: #1a1a1a;
        margin-bottom: 20px;
        font-weight: 600;
        letter-spacing: 0.5px;
        text-align: left;
      }

      .understanding-section p {
        font-size: 0.95rem;
        line-height: 1.75;
        color: #666;
        text-align: left;
        margin: 0;
      }

      /* Schedules Section */
      .schedules-section {
        margin-bottom: 80px;
        margin-top: 0;
        padding-top: 60px;
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
        text-align: left;
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

      .document-info {
        padding: 25px 20px;
        background: white;
      }

      .document-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        padding-bottom: 12px;
        border-bottom: 1px solid #f0f0f0;
      }

      .label-text {
        font-size: 0.85rem;
        font-weight: 500;
        color: #1a1a1a;
        text-transform: capitalize;
      }

      .label-date {
        font-size: 0.85rem;
        font-weight: 600;
        color: #c9a961;
      }

      .document-info h3 {
        font-size: 1.05rem;
        color: #1a1a1a;
        margin-bottom: 20px;
        font-weight: 600;
        line-height: 1.5;
        min-height: 50px;
        text-align: left;
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
        margin: 0;
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

      /* ==================== RESPONSIVE MEDIA QUERIES ==================== */

      /* Large Desktop (1440px and above) */
      @media (min-width: 1440px) {
        .container {
          max-width: 1400px;
        }

        .hero-title h1 {
          font-size: 4.5rem;
        }

        .schedules-section h2 {
          font-size: 3rem;
        }
      }

      /* Medium Desktop (1024px - 1280px) */
      @media (max-width: 1280px) {
        .hero-grid {
          gap: 50px;
        }

        .hero-title h1 {
          font-size: 3.5rem;
        }

        .vertical-line {
          height: 150px;
        }

        .documents-grid {
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .assistance-section {
          padding: 45px 50px;
        }
      }

      /* Tablet Landscape (900px - 1024px) */
      @media (max-width: 1024px) {
        .container {
          padding: 0 30px;
        }

        .hero-section {
          padding: 100px 0;
        }

        .hero-grid {
          grid-template-columns: 1fr auto 1fr;
          gap: 40px;
        }

        .hero-title h1 {
          font-size: 3rem;
          letter-spacing: 2px;
        }

        .vertical-line {
          height: 130px;
        }

        .hero-description p {
          font-size: 1rem;
        }

        .content-section {
          padding: 0 0 70px;
        }

        .understanding-section {
          margin-bottom: 0;
        }

        .understanding-section h2 {
          font-size: 1.8rem;
        }

        .schedules-section h2 {
          font-size: 2.2rem;
        }

        .section-subtitle {
          margin-bottom: 50px;
        }

        .documents-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
          margin-bottom: 60px;
        }

        .document-preview {
          height: 280px;
        }

        .assistance-section {
          padding: 40px 40px;
          gap: 40px;
        }

        .assistance-content h2 {
          font-size: 1.6rem;
        }

        .footer-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }
      }

      /* Tablet Portrait (768px - 900px) */
      @media (max-width: 900px) {
        .hero-section {
          padding: 80px 0;
        }

        .hero-grid {
          grid-template-columns: 1fr;
          gap: 30px;
          text-align: center;
        }

        .hero-title {
          text-align: center;
        }

        .vertical-line {
          width: 120px;
          height: 2px;
          margin: 0 auto;
        }

        .hero-title h1 {
          font-size: 2.5rem;
        }

        .hero-description p {
          font-size: 0.95rem;
        }

        .content-section {
          padding: 0 0 60px;
        }

        .understanding-section {
          margin-bottom: 0;
        }

        .understanding-section h2 {
          font-size: 1.7rem;
          margin-bottom: 20px;
        }

        .understanding-section p {
          font-size: 0.95rem;
        }

        .section-header {
          gap: 25px;
        }

        .header-line {
          flex: 0 0 50px;
        }

        .schedules-section h2 {
          font-size: 2rem;
        }

        .schedules-section {
          padding-top: 50px;
        }

        .section-subtitle {
          font-size: 0.75rem;
          margin-bottom: 45px;
        }

        .document-preview {
          height: 260px;
        }

        .assistance-section {
          padding: 35px 35px;
        }

        .footer-grid {
          gap: 35px;
        }
      }

      /* Mobile Landscape / Small Tablet (600px - 768px) */
      @media (max-width: 768px) {
        .container {
          padding: 0 25px;
        }

        .hero-section {
          padding: 70px 0;
        }

        .hero-title h1 {
          font-size: 2.2rem;
          letter-spacing: 1.5px;
        }

        .vertical-line {
          width: 100px;
        }

        .hero-description p {
          font-size: 0.9rem;
          line-height: 1.7;
        }

        .content-section {
          padding: 0 0 50px;
        }

        .understanding-section {
          margin-bottom: 0;
        }

        .understanding-section h2 {
          font-size: 1.6rem;
        }

        .understanding-section p {
          font-size: 0.9rem;
          text-align: left;
        }

        .section-header {
          flex-direction: column;
          align-items: flex-start;
          gap: 15px;
        }

        .header-line {
          display: none;
        }

        .schedules-section h2 {
          font-size: 1.8rem;
        }

        .section-subtitle {
          font-size: 0.7rem;
          margin-bottom: 40px;
        }

        .schedules-section {
          margin-bottom: 60px;
          padding-top: 45px;
        }

        .documents-grid {
          grid-template-columns: 1fr;
          gap: 24px;
          margin-bottom: 50px;
        }

        .document-preview {
          height: 240px;
        }

        .document-info {
          padding: 20px 18px;
        }

        .document-info h3 {
          min-height: auto;
          font-size: 1rem;
          margin-bottom: 18px;
        }

        .download-btn {
          padding: 11px 18px;
          font-size: 0.75rem;
        }

        .download-btn svg {
          width: 16px;
          height: 16px;
        }

        .assistance-section {
          flex-direction: column;
          padding: 35px 30px;
          gap: 25px;
        }

        .assistance-content h2 {
          font-size: 1.5rem;
          margin-bottom: 12px;
        }

        .assistance-content p {
          font-size: 0.95rem;
        }

        .contact-btn {
          width: 100%;
          padding: 14px 35px;
        }

        .footer-main {
          padding: 50px 0 30px;
        }

        .footer-logo-wrapper {
          width: 100px;
          height: 100px;
          top: -35px;
        }

        .footer-logo-wrapper svg {
          width: 65px;
          height: 65px;
        }

        .footer-grid {
          grid-template-columns: 1fr;
          gap: 30px;
          padding-top: 30px;
        }

        .footer-column h3 {
          font-size: 1rem;
          margin-bottom: 15px;
        }

        .footer-column p,
        .footer-column ul li a {
          font-size: 0.85rem;
        }

        .footer-bottom-content {
          flex-direction: column;
          gap: 15px;
          text-align: center;
        }

        .social-icons {
          order: -1;
        }
      }

      /* Mobile Portrait (480px - 600px) */
      @media (max-width: 600px) {
        .hero-section {
          padding: 60px 0;
        }

        .hero-title h1 {
          font-size: 2rem;
        }

        .vertical-line {
          width: 80px;
        }

        .content-section {
          padding: 0 0 45px;
        }

        .understanding-section {
          margin-bottom: 0;
        }

        .understanding-section h2 {
          font-size: 1.5rem;
        }

        .schedules-section h2 {
          font-size: 1.6rem;
        }

        .section-subtitle {
          margin-bottom: 35px;
        }

        .document-preview {
          height: 220px;
        }

        .assistance-section {
          padding: 30px 25px;
        }

        .assistance-content h2 {
          font-size: 1.4rem;
        }
      }

      /* Small Mobile (320px - 480px) */
      @media (max-width: 480px) {
        .container {
          padding: 0 20px;
        }

        .hero-section {
          padding: 50px 0;
        }

        .hero-title h1 {
          font-size: 1.8rem;
          letter-spacing: 1px;
        }

        .vertical-line {
          width: 70px;
        }

        .hero-description p {
          font-size: 0.85rem;
          line-height: 1.6;
        }

        .content-section {
          padding: 0 0 40px;
        }

        .understanding-section {
          margin-bottom: 0;
        }

        .understanding-section h2 {
          font-size: 1.4rem;
          margin-bottom: 18px;
        }

        .understanding-section p {
          font-size: 0.85rem;
          line-height: 1.7;
        }

        .schedules-section {
          margin-bottom: 50px;
          padding-top: 40px;
        }

        .schedules-section h2 {
          font-size: 1.5rem;
        }

        .section-subtitle {
          font-size: 0.65rem;
          letter-spacing: 2px;
          margin-bottom: 30px;
        }

        .documents-grid {
          gap: 20px;
          margin-bottom: 45px;
        }

        .document-preview {
          height: 200px;
        }

        .document-info {
          padding: 18px 15px;
        }

        .document-info h3 {
          font-size: 0.95rem;
          margin-bottom: 16px;
        }

        .download-btn {
          padding: 10px 16px;
          font-size: 0.7rem;
          letter-spacing: 0.6px;
        }

        .download-btn svg {
          width: 15px;
          height: 15px;
        }

        .assistance-section {
          padding: 25px 20px;
          gap: 20px;
        }

        .assistance-content h2 {
          font-size: 1.3rem;
          margin-bottom: 10px;
        }

        .assistance-content p {
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .contact-btn {
          padding: 13px 30px;
          font-size: 0.8rem;
        }

        .footer-main {
          padding: 45px 0 25px;
        }

        .footer-logo-wrapper {
          width: 90px;
          height: 90px;
          top: -30px;
        }

        .footer-logo-wrapper svg {
          width: 55px;
          height: 55px;
        }

        .footer-grid {
          gap: 25px;
          padding-top: 25px;
        }

        .footer-column h3 {
          font-size: 0.95rem;
          margin-bottom: 12px;
        }

        .footer-column p,
        .footer-column ul li a {
          font-size: 0.8rem;
          line-height: 1.6;
        }

        .footer-column ul li {
          margin-bottom: 10px;
        }

        .footer-bottom {
          padding: 20px 0;
        }

        .copyright,
        .privacy-link {
          font-size: 0.75rem;
        }

        .social-icon {
          width: 32px;
          height: 32px;
        }

        .social-icon svg {
          width: 14px;
          height: 14px;
        }
      }

      /* Extra Small Mobile (below 375px) */
      @media (max-width: 375px) {
        .hero-title h1 {
          font-size: 1.6rem;
        }

        .vertical-line {
          width: 60px;
        }

        .understanding-section h2 {
          font-size: 1.3rem;
        }

        .schedules-section h2 {
          font-size: 1.4rem;
        }

        .document-preview {
          height: 180px;
        }

        .assistance-content h2 {
          font-size: 1.2rem;
        }
      }

      /* Landscape Orientation for Mobile Devices */
      @media (max-height: 500px) and (orientation: landscape) {
        .hero-section {
          padding: 40px 0;
        }

        .hero-title h1 {
          font-size: 2rem;
        }

        .vertical-line {
          height: 60px;
        }

        .content-section {
          padding: 40px 0 35px;
        }

        .understanding-section {
          margin-bottom: 40px;
        }

        .schedules-section {
          margin-bottom: 45px;
        }
      }
    `
  ]
})
export class AudiencesComponent {}