import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent],
  template: `
    <app-hero></app-hero>

    <!-- Fields of Expertise Section 1 -->
    <section class="expertise-section">
      <div class="container">
        <h2 class="section-title">FIELDS OF EXPERTISE</h2>
        <p class="section-subtitle">
          We provide tailored legal solutions to meet your unique needs, ensuring your rights are protected and justice is served.
        </p>

        <div class="expertise-grid">
          <div class="expertise-card">
            <div class="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
                <rect x="8" y="12" width="48" height="44" rx="2" stroke="#8B4513" stroke-width="2" fill="#D2691E" opacity="0.2"/>
                <path d="M32 8 L28 12 L36 12 Z" fill="#8B4513"/>
                <rect x="16" y="20" width="32" height="28" fill="#8B4513" opacity="0.3"/>
                <path d="M24 28 L28 32 L36 24" stroke="#8B4513" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="32" cy="38" r="6" fill="#FFD700" opacity="0.5"/>
              </svg>
            </div>
            <h3>Supreme Judicial Authority</h3>
            <p>As the highest court in the ordinary judicial system, the Court of Cassation ensures final appeals and ensures uniform interpretation and application of law throughout the Democratic Republic of Congo.</p>
          </div>

          <div class="expertise-card">
            <div class="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
                <path d="M32 8 L44 20 L44 52 L20 52 L20 20 Z" stroke="#4169E1" stroke-width="2" fill="#87CEEB" opacity="0.3"/>
                <path d="M26 26 H38 M26 32 H38 M26 38 H34" stroke="#4169E1" stroke-width="2" stroke-linecap="round"/>
                <circle cx="48" cy="16" r="8" fill="#FFD700" opacity="0.6"/>
                <path d="M46 16 L47.5 18 L50 15" stroke="#8B4513" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>Legal Certainty</h3>
            <p>Through our jurisprudence and decisions, we establish legal precedents that guide lower courts and ensure consistency in the application of justice across the nation.</p>
          </div>

          <div class="expertise-card">
            <div class="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
                <polygon points="32,12 36,24 48,24 38,32 42,44 32,36 22,44 26,32 16,24 28,24" fill="#FFD700" opacity="0.7"/>
                <circle cx="32" cy="32" r="10" stroke="#8B4513" stroke-width="2" fill="none"/>
                <path d="M32 26 L32 32 L36 36" stroke="#8B4513" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="32" cy="50" r="4" fill="#C41E3A" opacity="0.5"/>
              </svg>
            </div>
            <h3>Judicial Excellence</h3>
            <p>Our magistrates and counselors are selected based on merit, ensuring the highest standards of legal expertise, integrity, and commitment to justice.</p>
          </div>

          <div class="expertise-card">
            <div class="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="20" stroke="#228B22" stroke-width="2" fill="#90EE90" opacity="0.3"/>
                <ellipse cx="32" cy="32" rx="20" ry="10" stroke="#228B22" stroke-width="1.5" fill="none"/>
                <ellipse cx="32" cy="32" rx="10" ry="20" stroke="#228B22" stroke-width="1.5" fill="none"/>
                <path d="M12 32 H52 M32 12 V52" stroke="#228B22" stroke-width="1.5"/>
                <circle cx="20" cy="24" r="3" fill="#4169E1"/>
                <circle cx="44" cy="28" r="3" fill="#C41E3A"/>
                <circle cx="32" cy="44" r="3" fill="#FFD700"/>
              </svg>
            </div>
            <h3>International Cooperation</h3>
            <p>We actively participate in dialogue with international judicial bodies and maintain cooperation with French-speaking and African supreme courts through AHJUCAF and IIHF.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Fields of Expertise Section 2 -->
    <section class="practice-areas-section">
      <div class="container">
        <h2 class="section-title">FIELDS OF EXPERTISE</h2>
        <p class="section-subtitle">
          The Court of Cassation exercises jurisdiction over various legal matters as the supreme court of the ordinary judicial system.
        </p>

        <div class="practice-grid">
          <div class="practice-card">
            <div class="practice-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
            </div>
            <h3>Civil & Commercial Law</h3>
            <ul>
              <li>Appeals from Courts of Appeal</li>
              <li>Commercial disputes and contracts</li>
              <li>Property and inheritance matters</li>
              <li>Civil liability cases</li>
            </ul>
          </div>

          <div class="practice-card">
            <div class="practice-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
              </svg>
            </div>
            <h3>Criminal Law</h3>
            <ul>
              <li>Criminal appeals in cassation</li>
              <li>Procedural error reviews</li>
              <li>Application of criminal law</li>
              <li>Sentencing interpretations</li>
            </ul>
          </div>

          <div class="practice-card">
            <div class="practice-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            </div>
            <h3>Family Law</h3>
            <ul>
              <li>Marriage and divorce appeals</li>
              <li>Child custody disputes</li>
              <li>Succession matters</li>
              <li>Family property rights</li>
            </ul>
          </div>

          <div class="practice-card">
            <div class="practice-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
              </svg>
            </div>
            <h3>Labor & Employment</h3>
            <ul>
              <li>Labor dispute appeals</li>
              <li>Employment contract matters</li>
              <li>Workers' rights protection</li>
              <li>Workplace regulations</li>
            </ul>
          </div>

          <div class="practice-card">
            <div class="practice-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
              </svg>
            </div>
            <h3>Public Law</h3>
            <ul>
              <li>Jurisdictional privilege cases</li>
              <li>Prosecution of high officials</li>
              <li>Constitutional matters</li>
              <li>Public interest litigation</li>
            </ul>
          </div>

          <div class="practice-card">
            <div class="practice-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
            </div>
            <h3>Property Rights</h3>
            <ul>
              <li>Real estate disputes</li>
              <li>Land ownership matters</li>
              <li>Property transactions</li>
              <li>Intellectual property cases</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Information Section -->
    <section class="contact-info-section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-card">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <h3>Office Address</h3>
            <p>No. 2 Avenue de la Justice in the Gombe district of Kinshasa.</p>
          </div>

          <div class="contact-card">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <h3>Office Number</h3>
            <p>+243 1000000000</p>
          </div>

          <div class="contact-card">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <h3>Office Email</h3>
            <p>info@courtofcassation.cd</p>
          </div>
        </div>
      </div>
    </section>

    <!-- First President Section -->
    <section class="president-section">
      <div class="container">
        <div class="president-content">
          <div class="president-image">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="100%" height="100%">
              <rect fill="#e8eef7" width="400" height="500"/>
              <g opacity="0.6">
                <circle cx="200" cy="180" r="70" fill="#1a2942"/>
                <ellipse cx="200" cy="420" rx="120" ry="80" fill="#1a2942"/>
                <rect x="160" y="130" width="80" height="100" rx="40" fill="#1a2942"/>
                <circle cx="200" cy="140" r="25" fill="#8B6914" opacity="0.7"/>
              </g>
              <text x="200" y="470" font-family="Arial" font-size="14" fill="#666" text-anchor="middle" font-weight="bold">First President</text>
              <text x="200" y="490" font-family="Arial" font-size="12" fill="#999" text-anchor="middle">Court of Cassation</text>
            </svg>
          </div>
          <div class="president-text">
            <h2>THE FIRST PRESIDENT OF THE COURT OF CASSATION</h2>
            <p>
              As the first-ranking member of the DRC's High Council of the Judiciary, the First President of the Court of Cassation,
              Professor N'SONGO MUKE N'SI Dr. LÉON, elected back on Thursday, February 27th, in Kinshasa, and is in charge of coordinating
              the entire Supreme Court College and Clerck's office.
            </p>
            <p>
              For every democratic Congolese citizen, contributing to the life effort is a civic duty. The pathway is no exception.
            </p>
            <p>
              In public functions, the DRC has suffered aggressive persecution by financial education militants and youth through
              armed groups, resulting in millions of deaths, tens of thousands of displaced persons, and a considerable humanitarian situation.
            </p>
            <button class="learn-more-btn">Learn More</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="newsletter-section">
      <div class="container">
        <div class="newsletter-header">
          <div class="header-line"></div>
          <h2>NEWSLETTER</h2>
          <div class="header-line"></div>
        </div>

        <div class="newsletter-grid">
          <article class="news-card">
            <div class="news-image">
              <img src="assets/images/news-appeal.jpg" alt="Navigating Appeals">
            </div>
            <div class="news-content">
              <div class="news-meta">
                <span class="news-date">15 Nov 2025</span>
                <span class="news-category">Decision Report</span>
              </div>
              <h3>Navigating Appeals: Legal Advice for a Smooth Process</h3>
            </div>
          </article>

          <article class="news-card">
            <div class="news-image">
              <img src="assets/images/news-cassation.jpg" alt="Key Considerations in Cassation">
            </div>
            <div class="news-content">
              <div class="news-meta">
                <span class="news-date">22 Oct 2025</span>
                <span class="news-category">Court Update</span>
              </div>
              <h3>Key Considerations in Cassation Proceedings</h3>
            </div>
          </article>

          <article class="news-card">
            <div class="news-image">
              <img src="assets/images/news-procedural.jpg" alt="Recent Changes in Procedural Law">
            </div>
            <div class="news-content">
              <div class="news-meta">
                <span class="news-date">18 Oct 2025</span>
                <span class="news-category">Judicial Ruling</span>
              </div>
              <h3>Recent Changes in Procedural Law</h3>
            </div>
          </article>

          <article class="news-card">
            <div class="news-image">
              <img src="assets/images/news-rights.jpg" alt="Understanding Your Rights">
            </div>
            <div class="news-content">
              <div class="news-meta">
                <span class="news-date">12 Oct 2025</span>
                <span class="news-category">Legal Update</span>
              </div>
              <h3>Understanding Your Rights in the Appeals Process</h3>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="footer-section">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-column">
            <h3>Main Office</h3>
            <p>No. 3 Avenue de la Justice in the Gombe district of Kinshasa,</p>
            <p>Democratic Republic of Congo</p>
            <p class="footer-contact">Tel: +243 (81) 0000000</p>
            <p class="footer-contact">Email: info@courtecassation.cd</p>
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

        <div class="footer-bottom">
          <div class="social-icons">
            <a href="#" class="social-icon" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" class="social-icon" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" class="social-icon" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
              </svg>
            </a>
          </div>
          <p class="copyright">Copyright State Council. All Rights Reserved</p>
          <a href="#" class="privacy-link">Privacy</a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    /* Keyframe Animations */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes scaleIn {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    .expertise-section, .practice-areas-section {
      padding: 100px 0;
      background-color: #f8f9fa;
      margin-bottom: 40px;
    }

    .practice-areas-section {
      background-color: #ffffff;
      margin-top: 40px;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 20px;
      color: #1a1a1a;
      letter-spacing: 1px;
      animation: fadeInUp 0.8s ease-out;
      position: relative;
    }

    .section-title::after {
      content: '';
      display: block;
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, #c41e3a, #8B6914);
      margin: 20px auto 0;
      border-radius: 2px;
    }

    .section-subtitle {
      text-align: center;
      font-size: 1.1rem;
      color: #666;
      max-width: 800px;
      margin: 0 auto 60px;
      line-height: 1.6;
      animation: fadeInUp 0.8s ease-out 0.2s backwards;
    }

    .expertise-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 40px;
      margin-top: 60px;
    }

    .expertise-card {
      background: white;
      border-radius: 12px;
      padding: 50px 35px;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.4s ease, box-shadow 0.4s ease, background-color 0.3s ease;
      cursor: pointer;
      animation: fadeInUp 0.6s ease-out forwards;
      opacity: 0;
    }

    .expertise-card:nth-child(1) { animation-delay: 0.1s; }
    .expertise-card:nth-child(2) { animation-delay: 0.2s; }
    .expertise-card:nth-child(3) { animation-delay: 0.3s; }
    .expertise-card:nth-child(4) { animation-delay: 0.4s; }

    .expertise-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
      background-color: #fafbfc;
    }

    .expertise-card:hover .card-icon {
      transform: scale(1.1) rotateY(10deg);
      animation: float 2s ease-in-out infinite;
    }

    .expertise-card:hover h3 {
      color: #c41e3a;
    }

    .card-icon {
      width: 100px;
      height: 100px;
      margin: 0 auto 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.4s ease;
      transform-style: preserve-3d;
    }

    .card-icon img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .expertise-card h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 18px;
      color: #1a1a1a;
      transition: color 0.3s ease;
    }

    .expertise-card p {
      font-size: 1rem;
      line-height: 1.6;
      color: #666;
    }

    .practice-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 50px;
      margin-top: 60px;
    }

    .practice-card {
      text-align: center;
      padding: 35px 25px;
      transition: transform 0.3s ease;
      cursor: pointer;
      border-radius: 8px;
      animation: scaleIn 0.5s ease-out forwards;
      opacity: 0;
    }

    .practice-card:nth-child(1) { animation-delay: 0.1s; }
    .practice-card:nth-child(2) { animation-delay: 0.2s; }
    .practice-card:nth-child(3) { animation-delay: 0.3s; }
    .practice-card:nth-child(4) { animation-delay: 0.4s; }
    .practice-card:nth-child(5) { animation-delay: 0.5s; }
    .practice-card:nth-child(6) { animation-delay: 0.6s; }

    .practice-card:hover {
      transform: translateY(-8px);
      background-color: #f8f9fa;
    }

    .practice-card:hover .practice-icon {
      transform: scale(1.15);
      color: #a01729;
      animation: float 2s ease-in-out infinite;
    }

    .practice-card:hover h3 {
      color: #c41e3a;
    }

    .practice-icon {
      width: 75px;
      height: 75px;
      margin: 0 auto 25px;
      color: #c41e3a;
      transition: transform 0.3s ease, color 0.3s ease;
    }

    .practice-icon svg {
      width: 100%;
      height: 100%;
    }

    .practice-card h3 {
      font-size: 1.4rem;
      font-weight: 600;
      margin-bottom: 18px;
      color: #1a1a1a;
      transition: color 0.3s ease;
    }

    .practice-card ul {
      list-style: none;
      padding: 0;
      margin: 0;
      text-align: left;
    }

    .practice-card li {
      padding: 8px 0;
      color: #666;
      font-size: 0.95rem;
      position: relative;
      padding-left: 20px;
    }

    .practice-card li::before {
      content: "•";
      position: absolute;
      left: 0;
      color: #c41e3a;
      font-weight: bold;
    }

    /* Contact Information Section */
    .contact-info-section {
      padding: 60px 0;
      background-color: #e8eef7;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 40px;
    }

    .contact-card {
      text-align: center;
      padding: 20px;
    }

    .contact-icon {
      width: 50px;
      height: 50px;
      margin: 0 auto 15px;
      color: #c41e3a;
    }

    .contact-icon svg {
      width: 100%;
      height: 100%;
    }

    .contact-card h3 {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 10px;
      color: #1a1a1a;
    }

    .contact-card p {
      font-size: 1rem;
      color: #666;
      line-height: 1.6;
    }

    /* President Section */
    .president-section {
      padding: 80px 0;
      background: linear-gradient(135deg, #e8eef7 0%, #f8f9fa 100%);
    }

    .president-content {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 60px;
      align-items: center;
    }

    .president-image {
      position: relative;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      background-color: #e8eef7;
    }

    .president-image svg {
      width: 100%;
      height: auto;
      display: block;
    }

    .president-image img {
      width: 100%;
      height: auto;
      display: block;
      object-fit: cover;
    }

    .president-text {
      padding: 20px;
    }

    .president-text h2 {
      font-size: 2rem;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 25px;
      line-height: 1.3;
    }

    .president-text p {
      font-size: 1rem;
      line-height: 1.8;
      color: #555;
      margin-bottom: 20px;
      text-align: justify;
    }

    .learn-more-btn {
      background-color: #c41e3a;
      color: white;
      border: none;
      padding: 12px 32px;
      font-size: 1rem;
      font-weight: 600;
      border-radius: 6px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s ease;
      margin-top: 15px;
    }

    .learn-more-btn:hover {
      background-color: #a01729;
      transform: translateY(-2px);
    }

    /* Newsletter Section */
    .newsletter-section {
      padding: 80px 0;
      background-color: #2c3e50;
      color: white;
    }

    .newsletter-header {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      margin-bottom: 60px;
    }

    .newsletter-header h2 {
      font-size: 2.5rem;
      font-weight: 700;
      color: white;
      margin: 0;
      letter-spacing: 2px;
    }

    .header-line {
      flex: 1;
      max-width: 200px;
      height: 2px;
      background: linear-gradient(to right, transparent, #c41e3a, transparent);
    }

    .newsletter-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
    }

    .news-card {
      background-color: white;
      border-radius: 8px;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
    }

    .news-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }

    .news-image {
      width: 100%;
      height: 200px;
      overflow: hidden;
      background-color: #e0e0e0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .news-image svg {
      width: 100%;
      height: 100%;
      display: block;
    }

    .news-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .news-card:hover .news-image img,
    .news-card:hover .news-image svg {
      transform: scale(1.05);
    }

    .news-content {
      padding: 20px;
      color: #1a1a1a;
    }

    .news-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      font-size: 0.85rem;
      padding-bottom: 15px;
      border-bottom: 2px solid #c41e3a;
    }

    .news-date {
      color: #666;
    }

    .news-category {
      color: #c41e3a;
      font-weight: 600;
    }

    .news-content h3 {
      font-size: 1.1rem;
      font-weight: 600;
      line-height: 1.5;
      color: #1a1a1a;
      margin: 0;
    }

    /* Footer Section */
    .footer-section {
      background-color: #1a1a1a;
      color: #b0b0b0;
      padding: 60px 0 30px;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 40px;
      margin-bottom: 40px;
    }

    .footer-column h3 {
      color: white;
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .footer-column p {
      font-size: 0.95rem;
      line-height: 1.8;
      margin: 5px 0;
    }

    .footer-contact {
      margin-top: 10px;
    }

    .footer-column ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-column ul li {
      margin-bottom: 12px;
    }

    .footer-column ul li a {
      color: #b0b0b0;
      text-decoration: none;
      font-size: 0.95rem;
      transition: color 0.3s ease;
    }

    .footer-column ul li a:hover {
      color: #c41e3a;
    }

    .footer-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 30px;
      border-top: 1px solid #333;
      flex-wrap: wrap;
      gap: 20px;
    }

    .social-icons {
      display: flex;
      gap: 15px;
    }

    .social-icon {
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #333;
      border-radius: 50%;
      color: white;
      transition: background-color 0.3s ease, transform 0.2s ease;
      text-decoration: none;
    }

    .social-icon:hover {
      background-color: #c41e3a;
      transform: translateY(-3px);
    }

    .social-icon svg {
      width: 18px;
      height: 18px;
    }

    .copyright {
      font-size: 0.9rem;
      color: #b0b0b0;
      margin: 0;
    }

    .privacy-link {
      color: #b0b0b0;
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s ease;
    }

    .privacy-link:hover {
      color: #c41e3a;
    }

    @media (max-width: 768px) {
      .section-title {
        font-size: 2rem;
      }

      .expertise-grid,
      .practice-grid {
        grid-template-columns: 1fr;
        gap: 30px;
      }

      .expertise-section,
      .practice-areas-section {
        padding: 60px 0;
        margin-bottom: 20px;
      }

      .practice-areas-section {
        margin-top: 20px;
      }

      .card-icon {
        width: 90px;
        height: 90px;
      }

      .practice-icon {
        width: 65px;
        height: 65px;
      }

      .contact-grid {
        grid-template-columns: 1fr;
        gap: 30px;
      }

      .president-content {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .president-text h2 {
        font-size: 1.6rem;
      }

      .contact-info-section {
        padding: 40px 0;
      }

      .president-section {
        padding: 50px 0;
      }

      .newsletter-header {
        flex-direction: column;
        gap: 20px;
      }

      .newsletter-header h2 {
        font-size: 2rem;
      }

      .header-line {
        width: 100px;
        max-width: 100px;
      }

      .newsletter-grid {
        grid-template-columns: 1fr;
      }

      .newsletter-section {
        padding: 50px 0;
      }

      .footer-grid {
        grid-template-columns: 1fr;
        gap: 30px;
      }

      .footer-bottom {
        flex-direction: column;
        text-align: center;
      }

      .social-icons {
        justify-content: center;
      }
    }
  `]
})
export class HomeComponent {}
