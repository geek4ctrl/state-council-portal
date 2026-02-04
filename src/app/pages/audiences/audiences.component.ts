import { Component } from '@angular/core';

@Component({
  selector: 'app-audiences',
  standalone: true,
  template: `
    <div class="page-container">
      <section class="hero-section">
        <div class="container">
          <div class="hero-grid">
            <div class="hero-title">
              <h1>SCHEDULE AND<br>ROLE EXCERPTS</h1>
            </div>
            <div class="hero-description">
              <p>
                Access hearing schedules, court calendars, and role excerpts for upcoming sessions at
                the State Council. Stay informed about scheduled audiences and case listings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <div class="understanding-section">
            <h2>Understanding Audiences</h2>
            <p>
              Audiences (or hearings) are organized court sessions where cases are heard before the State Council. The court publishes role
              excerpts (also called role lists) which list the cases scheduled to be heard during specific hearings, including case numbers, parties'
              names, legal representation details, and case types. Visit this page regularly to stay up-to-date on upcoming scheduled audiences and
              case progress.
            </p>
          </div>

          <div class="schedules-section">
            <h2>RECENT ROLE EXCERPTS & HEARING</h2>
            <p class="section-subtitle">PUBLISHED SCHEDULES</p>

            <div class="documents-grid">
              <div class="document-card">
                <div class="document-preview">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260" fill="none">
                    <rect width="200" height="260" fill="#f5f5f5"/>
                    <rect x="20" y="30" width="160" height="8" fill="#ddd"/>
                    <rect x="20" y="50" width="140" height="6" fill="#eee"/>
                    <rect x="20" y="70" width="160" height="4" fill="#eee"/>
                    <rect x="20" y="80" width="160" height="4" fill="#eee"/>
                    <rect x="20" y="90" width="120" height="4" fill="#eee"/>
                    <rect x="20" y="110" width="160" height="4" fill="#eee"/>
                    <rect x="20" y="120" width="160" height="4" fill="#eee"/>
                    <rect x="20" y="130" width="140" height="4" fill="#eee"/>
                  </svg>
                </div>
                <div class="document-info">
                  <h3>Civil Matters Hearing Schedule - January 2026</h3>
                  <p class="document-date">01/01/2026</p>
                  <button class="download-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                    </svg>
                    DOWNLOAD PDF
                  </button>
                </div>
              </div>

              <div class="document-card">
                <div class="document-preview">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260" fill="none">
                    <rect width="200" height="260" fill="#f5f5f5"/>
                    <rect x="20" y="30" width="160" height="8" fill="#ddd"/>
                    <rect x="20" y="50" width="140" height="6" fill="#eee"/>
                    <rect x="20" y="70" width="160" height="4" fill="#eee"/>
                    <rect x="20" y="80" width="160" height="4" fill="#eee"/>
                    <rect x="20" y="90" width="120" height="4" fill="#eee"/>
                    <rect x="20" y="110" width="160" height="4" fill="#eee"/>
                    <rect x="20" y="120" width="160" height="4" fill="#eee"/>
                    <rect x="20" y="130" width="140" height="4" fill="#eee"/>
                  </svg>
                </div>
                <div class="document-info">
                  <h3>Criminal Cases Calendar - January 2026</h3>
                  <p class="document-date">01/01/2026</p>
                  <button class="download-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                    </svg>
                    DOWNLOAD PDF
                  </button>
                </div>
              </div>

              <div class="document-card">
                <div class="document-preview">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260" fill="none">
                    <rect width="200" height="260" fill="#f5f5f5"/>
                    <rect x="20" y="30" width="160" height="8" fill="#ddd"/>
                    <rect x="20" y="50" width="140" height="6" fill="#eee"/>
                    <rect x="20" y="70" width="160" height="4" fill="#eee"/>
                    <rect x="20" y="80" width="160" height="4" fill="#eee"/>
                    <rect x="20" y="90" width="120" height="4" fill="#eee"/>
                    <rect x="20" y="110" width="160" height="4" fill="#eee"/>
                    <rect x="20" y="120" width="160" height="4" fill="#eee"/>
                    <rect x="20" y="130" width="140" height="4" fill="#eee"/>
                  </svg>
                </div>
                <div class="document-info">
                  <h3>Social & Labor Cases - December 2025</h3>
                  <p class="document-date">12/01/2025</p>
                  <button class="download-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                    </svg>
                    DOWNLOAD PDF
                  </button>
                </div>
              </div>

              <div class="document-card">
                <div class="document-preview">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260" fill="none">
                    <rect width="200" height="260" fill="#f5f5f5"/>
                    <rect x="20" y="30" width="160" height="8" fill="#ddd"/>
                    <rect x="20" y="50" width="140" height="6" fill="#eee"/>
                    <rect x="20" y="70" width="160" height="4" fill="#eee"/>
                    <rect x="20" y="80" width="160" height="4" fill="#eee"/>
                    <rect x="20" y="90" width="120" height="4" fill="#eee"/>
                    <rect x="20" y="110" width="160" height="4" fill="#eee"/>
                    <rect x="20" y="120" width="160" height="4" fill="#eee"/>
                    <rect x="20" y="130" width="140" height="4" fill="#eee"/>
                  </svg>
                </div>
                <div class="document-info">
                  <h3>Complete Court Calendar - Q1 2026</h3>
                  <p class="document-date">01/01/2026</p>
                  <button class="download-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                    </svg>
                    DOWNLOAD PDF
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="assistance-section">
            <div class="assistance-content">
              <h2>Need Assistance?</h2>
              <p>If you need help in navigating the hearings or have a question about an upcoming audience, please contact the Court Registry for assistance.</p>
            </div>
            <button class="contact-btn">CONTACT REGISTRY</button>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .page-container {
      padding-top: 80px;
    }

    .hero-section {
      background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%);
      color: white;
      padding: 100px 20px;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: center;
    }

    .hero-title h1 {
      font-size: 3rem;
      font-weight: 700;
      line-height: 1.2;
      margin: 0;
      letter-spacing: 2px;
    }

    .hero-description p {
      font-size: 1rem;
      line-height: 1.8;
      opacity: 0.95;
      margin: 0;
    }

    .content-section {
      padding: 80px 20px;
      background: white;
    }

    .understanding-section {
      margin-bottom: 80px;
    }

    .understanding-section h2 {
      font-size: 2rem;
      color: #2c3e50;
      margin-bottom: 25px;
      font-weight: 600;
    }

    .understanding-section p {
      font-size: 1.05rem;
      line-height: 1.8;
      color: #666;
    }

    .schedules-section h2 {
      font-size: 2rem;
      color: #2c3e50;
      margin-bottom: 10px;
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    .section-subtitle {
      font-size: 0.9rem;
      color: #999;
      margin-bottom: 50px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .documents-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 30px;
      margin-bottom: 80px;
    }

    .document-card {
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .document-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.1);
    }

    .document-preview {
      width: 100%;
      aspect-ratio: 10/13;
      background: #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #e0e0e0;
    }

    .document-preview svg {
      width: 100%;
      height: 100%;
      display: block;
    }

    .document-info {
      padding: 20px;
    }

    .document-info h3 {
      font-size: 1.1rem;
      color: #2c3e50;
      margin-bottom: 10px;
      font-weight: 600;
      line-height: 1.4;
      min-height: 50px;
    }

    .document-date {
      font-size: 0.9rem;
      color: #999;
      margin-bottom: 15px;
    }

    .download-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      background: transparent;
      border: none;
      color: #2c3e50;
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      padding: 0;
      transition: color 0.3s ease;
    }

    .download-btn:hover {
      color: #c41e3a;
    }

    .download-btn svg {
      width: 20px;
      height: 20px;
    }

    .assistance-section {
      background: #f8f8f8;
      padding: 50px;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 40px;
    }

    .assistance-content h2 {
      font-size: 1.8rem;
      color: #2c3e50;
      margin-bottom: 15px;
      font-weight: 600;
    }

    .assistance-content p {
      font-size: 1rem;
      color: #666;
      line-height: 1.6;
      margin: 0;
    }

    .contact-btn {
      background: #2c3e50;
      color: white;
      border: none;
      padding: 15px 30px;
      font-size: 0.9rem;
      font-weight: 600;
      border-radius: 4px;
      cursor: pointer;
      white-space: nowrap;
      transition: background 0.3s ease;
    }

    .contact-btn:hover {
      background: #1a252f;
    }

    @media (max-width: 1024px) {
      .hero-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .documents-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      }

      .assistance-section {
        flex-direction: column;
        text-align: center;
      }
    }

    @media (max-width: 768px) {
      .hero-title h1 {
        font-size: 2.5rem;
      }

      .hero-description p {
        font-size: 0.95rem;
      }

      .content-section {
        padding: 60px 15px;
      }

      .understanding-section h2,
      .schedules-section h2 {
        font-size: 1.6rem;
      }

      .documents-grid {
        grid-template-columns: 1fr;
      }

      .assistance-section {
        padding: 40px 20px;
      }

      .assistance-content h2 {
        font-size: 1.5rem;
      }
    }

    @media (max-width: 480px) {
      .hero-section {
        padding: 80px 15px;
      }

      .hero-title h1 {
        font-size: 2rem;
      }

      .understanding-section h2,
      .schedules-section h2 {
        font-size: 1.4rem;
      }

      .assistance-content h2 {
        font-size: 1.3rem;
      }

      .contact-btn {
        width: 100%;
      }
    }
  `]
})
export class AudiencesComponent {}
