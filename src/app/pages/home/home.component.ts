import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { SkeletonLoaderComponent } from '../../components/skeleton-loader/skeleton-loader.component';
import { IconComponent } from '../../components/icon/icon.component';
import { LazyLoadDirective } from '../../directives/lazy-load.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, SkeletonLoaderComponent, IconComponent, LazyLoadDirective],
  template: `
    <app-hero></app-hero>

    <!-- What We Offer Section -->
    <section class="expertise-section">
      <div class="container">
        <h2 class="section-title offer-title">WHAT WE OFFER</h2>
        <p class="section-subtitle offer-subtitle">
          We provide tailored legal solutions to meet your unique needs, ensuring your rights are protected and justice is served.
        </p>

        <div class="offer-grid">
          @if (isLoadingOffers()) {
            @for (item of [1, 2, 3, 4]; track item) {
              <app-skeleton-loader type="card"></app-skeleton-loader>
            }
          } @else {
            <div class="offer-card">
              <div class="card-header">
                <img src="https://placehold.co/60x60/2c3e50/white?text=SC" alt="Supreme Judicial Authority" class="card-image" loading="lazy">
              <h3>Supreme Administrative Authority</h3>
            </div>
            <p>As the highest administrative court, the State Council ensures uniform interpretation and application of administrative law throughout the Democratic Republic of Congo.</p>
          </div>

          <div class="offer-card">
            <div class="card-header">
              <img src="https://placehold.co/60x60/8B6914/white?text=LC" alt="Legal Certainty" class="card-image" loading="lazy">
              <h3>Legal Certainty</h3>
            </div>
            <p>Through our jurisprudence and decisions, we establish legal precedents that guide lower courts and ensure consistency in the application of justice across the nation.</p>
          </div>

          <div class="offer-card">
            <div class="card-header">
              <img src="https://placehold.co/60x60/c41e3a/white?text=JE" alt="Judicial Excellence" class="card-image" loading="lazy">
              <h3>Judicial Excellence</h3>
            </div>
            <p>Our magistrates and counselors are selected based on merit, ensuring the highest standards of legal expertise, integrity, and commitment to justice.</p>
          </div>

          <div class="offer-card">
            <div class="card-header">
              <img src="https://placehold.co/60x60/34495e/white?text=IC" alt="International Cooperation" class="card-image" loading="lazy">
              <h3>International Cooperation</h3>
            </div>
            <p>We actively participate in dialogue with international judicial bodies and maintain cooperation with French-speaking and African courts. HJF.</p>
          </div>
          }
        </div>
      </div>
    </section>

    <!-- Fields of Expertise Section -->
    <section class="practice-areas-section">
      <div class="container">
        <h2 class="section-title expertise-title">FIELDS OF EXPERTISE</h2>
        <p class="section-subtitle expertise-subtitle">
          The State Council exercises jurisdiction over administrative matters as the supreme administrative court.
        </p>

        <div class="practice-grid">
          <div class="practice-card">
            <div class="practice-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M32 8 L16 16 L16 32 C16 44 24 52 32 56 C40 52 48 44 48 32 L48 16 Z" fill="currentColor"/>
              </svg>
            </div>
            <h3>Civil & Commercial<br>Law</h3>
            <ul>
              <li>Appeals from Courts of Appeal</li>
              <li>Commercial disputes and contracts</li>
              <li>Property and inheritance matters</li>
            </ul>
          </div>

          <div class="practice-card">
            <div class="practice-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="currentColor">
                <path d="M32 8 L18 14 L18 28 C18 38 24 46 32 50 C40 46 46 38 46 28 L46 14 Z"/>
                <path d="M28 34 L22 28 L24 26 L28 30 L38 20 L40 22 Z" fill="white"/>
              </svg>
            </div>
            <h3>Criminal Law</h3>
            <ul>
              <li>Criminal appeals in cassation</li>
              <li>Procedural error reviews</li>
              <li>Application of criminal law</li>
            </ul>
          </div>

          <div class="practice-card">
            <div class="practice-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="currentColor">
                <circle cx="24" cy="20" r="6"/>
                <circle cx="40" cy="20" r="6"/>
                <path d="M24 28 C18 28 12 30 12 34 L12 38 L36 38 L36 34 C36 30 30 28 24 28 Z"/>
                <path d="M40 28 C38 28 36 28.2 34 28.5 C36 30 37 32 37 34 L37 38 L52 38 L52 34 C52 30 46 28 40 28 Z"/>
              </svg>
            </div>
            <h3>Family Law</h3>
            <ul>
              <li>Marriage and divorce appeals</li>
              <li>Child custody disputes</li>
              <li>Succession matters</li>
            </ul>
          </div>

          <div class="practice-card">
            <div class="practice-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="currentColor">
                <rect x="20" y="24" width="24" height="28" rx="2"/>
                <rect x="24" y="16" width="16" height="10" rx="2"/>
                <path d="M28 16 L28 20 L36 20 L36 16" fill="white"/>
              </svg>
            </div>
            <h3>Labor & Employment</h3>
            <ul>
              <li>Labor dispute appeals</li>
              <li>Employment contract matters</li>
              <li>Workers' rights protection</li>
            </ul>
          </div>

          <div class="practice-card">
            <div class="practice-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="currentColor">
                <path d="M32 44 L32 28 L40 28 L40 44 L48 44 L48 24 L54 24 L32 8 L10 24 L16 24 L16 44 Z"/>
              </svg>
            </div>
            <h3>Public Law</h3>
            <ul>
              <li>Jurisdictional privilege cases</li>
              <li>Prosecution of high officials</li>
              <li>Constitutional matters</li>
            </ul>
          </div>

          <div class="practice-card">
            <div class="practice-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="currentColor">
                <rect x="16" y="12" width="32" height="40" rx="2"/>
                <rect x="20" y="16" width="4" height="4" fill="white"/>
                <rect x="20" y="24" width="4" height="4" fill="white"/>
                <rect x="20" y="32" width="4" height="4" fill="white"/>
                <rect x="28" y="16" width="16" height="4" fill="white"/>
                <rect x="28" y="24" width="16" height="4" fill="white"/>
                <rect x="28" y="32" width="12" height="4" fill="white"/>
              </svg>
            </div>
            <h3>Property Rights</h3>
            <ul>
              <li>Real estate disputes</li>
              <li>Land ownership matters</li>
              <li>Property transactions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Information Section -->
    <section class="contact-info-section">
      <div class="container">
        <div class="contact-bar">
          <div class="contact-item">
            <h3>Office Address</h3>
            <p>No. 2 Avenue de la Justice in the Gombe district of Kinshasa.</p>
          </div>
          <div class="contact-divider"></div>
          <div class="contact-item">
            <h3>Office Number</h3>
            <p>+243 000000000</p>
          </div>
          <div class="contact-divider"></div>
          <div class="contact-item">
            <h3>Office Email</h3>
            <p>info@coneildetat.cd</p>
          </div>
        </div>
      </div>
    </section>

    <!-- First President Section -->
    <section class="president-section">
      <div class="container">
        <div class="president-content">
          <div class="president-image">
            <img src="https://placehold.co/400x500/d4b5a1/ffffff?text=President" alt="First President of the State Council" loading="lazy">
          </div>
          <div class="president-text">
            <h2>THE FIRST PRESIDENT OF THE STATE COUNCIL</h2>
            <p>
              As the third-ranking member of the DRC's High Council of the Judiciary, the First President of the State
              Council, Professor NGOMBA KABEYYA ELIE LEON, elected blood in Thursday, February 29th,
              2024, is in charge of coordinating the entire High Court College and Clerk's office.
            </p>
            <p>
              For every democratic Congolese citizen, contributing to the war effort is a civic duty. The judiciary is no
              exception.
            </p>
            <p>
              Since decades, the DRC has suffered aggression perpetuated by Rwanda and other negative
              armed groups, resulting in millions of deaths, tens of thousands of displaced persons, and a precarious
              humanitarian situation.
            </p>
            <button class="learn-more-btn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Learn More
            </button>
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#1a2942;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#2c3e50;stop-opacity:1" />
                  </linearGradient>
                </defs>
                <rect fill="url(#grad1)" width="400" height="300"/>
                <g opacity="0.3">
                  <circle cx="320" cy="80" r="60" fill="#c41e3a"/>
                  <circle cx="100" cy="200" r="80" fill="#8B6914"/>
                </g>
                <g transform="translate(200, 150)">
                  <rect x="-60" y="-40" width="120" height="80" rx="8" fill="white" opacity="0.9"/>
                  <path d="M-40,-20 L-30,-10 L-20,-20 M0,-20 L0,20 M20,-20 L20,20 M-40,0 L-20,0 M-40,20 L-20,20" stroke="#c41e3a" stroke-width="3" fill="none"/>
                  <text x="0" y="50" font-family="Arial" font-size="14" fill="white" text-anchor="middle" font-weight="bold">ADMINISTRATIVE APPEALS</text>
                </g>
              </svg>
            </div>
            <div class="news-content">
              <div class="news-meta">
                <span class="news-date">15 Nov 2025</span>
                <span class="news-category">Decision Report</span>
              </div>
              <h3>Navigating Appeals: Legal Advice for a Smooth Process</h3>
              <a href="#" class="read-more-link">
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </article>

          <article class="news-card">
            <div class="news-image">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#2c3e50;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#34495e;stop-opacity:1" />
                  </linearGradient>
                </defs>
                <rect fill="url(#grad2)" width="400" height="300"/>
                <g opacity="0.3">
                  <circle cx="80" cy="100" r="70" fill="#8B6914"/>
                  <circle cx="320" cy="220" r="90" fill="#c41e3a"/>
                </g>
                <g transform="translate(200, 150)">
                  <circle cx="0" cy="0" r="70" fill="white" opacity="0.9"/>
                  <path d="M-25,-15 L-10,0 L25,-35" stroke="#8B6914" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="0" cy="0" r="65" stroke="#8B6914" stroke-width="3" fill="none"/>
                  <text x="0" y="95" font-family="Arial" font-size="14" fill="white" text-anchor="middle" font-weight="bold">ADMINISTRATIVE REVIEW</text>
                </g>
              </svg>
            </div>
            <div class="news-content">
              <div class="news-meta">
                <span class="news-date">22 Oct 2025</span>
                <span class="news-category">Court Update</span>
              </div>
              <h3>Key Considerations in Cassation Proceedings</h3>
              <a href="#" class="read-more-link">
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </article>

          <article class="news-card">
            <div class="news-image">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#34495e;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#1a2942;stop-opacity:1" />
                  </linearGradient>
                </defs>
                <rect fill="url(#grad3)" width="400" height="300"/>
                <g opacity="0.3">
                  <circle cx="320" cy="100" r="80" fill="#4169E1"/>
                  <circle cx="80" cy="220" r="70" fill="#c41e3a"/>
                </g>
                <g transform="translate(200, 150)">
                  <rect x="-50" y="-60" width="100" height="120" rx="4" fill="white" opacity="0.9"/>
                  <line x1="-30" y1="-40" x2="30" y2="-40" stroke="#4169E1" stroke-width="3"/>
                  <line x1="-30" y1="-20" x2="30" y2="-20" stroke="#4169E1" stroke-width="3"/>
                  <line x1="-30" y1="0" x2="30" y2="0" stroke="#4169E1" stroke-width="3"/>
                  <line x1="-30" y1="20" x2="30" y2="20" stroke="#4169E1" stroke-width="3"/>
                  <line x1="-30" y1="40" x2="20" y2="40" stroke="#4169E1" stroke-width="3"/>
                  <text x="0" y="85" font-family="Arial" font-size="14" fill="white" text-anchor="middle" font-weight="bold">ADMINISTRATIVE LAW</text>
                </g>
              </svg>
            </div>
            <div class="news-content">
              <div class="news-meta">
                <span class="news-date">18 Oct 2025</span>
                <span class="news-category">Judicial Ruling</span>
              </div>
              <h3>Recent Changes in Procedural Law</h3>
              <a href="#" class="read-more-link">
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </article>

          <article class="news-card">
            <div class="news-image">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#2c3e50;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#1a2942;stop-opacity:1" />
                  </linearGradient>
                </defs>
                <rect fill="url(#grad4)" width="400" height="300"/>
                <g opacity="0.3">
                  <circle cx="100" cy="80" r="70" fill="#FFD700"/>
                  <circle cx="300" cy="230" r="80" fill="#c41e3a"/>
                </g>
                <g transform="translate(200, 150)">
                  <polygon points="0,-60 15,-20 55,-20 25,5 40,45 0,20 -40,45 -25,5 -55,-20 -15,-20" fill="white" opacity="0.9"/>
                  <circle cx="0" cy="0" r="50" stroke="#FFD700" stroke-width="3" fill="none"/>
                  <path d="M-15,-10 L-5,0 L15,-20" stroke="#FFD700" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                  <text x="0" y="85" font-family="Arial" font-size="14" fill="white" text-anchor="middle" font-weight="bold">CITIZENS' RIGHTS</text>
                </g>
              </svg>
            </div>
            <div class="news-content">
              <div class="news-meta">
                <span class="news-date">12 Oct 2025</span>
                <span class="news-category">Legal Update</span>
              </div>
              <h3>Understanding Your Rights in the Appeals Process</h3>
              <a href="#" class="read-more-link">
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </article>
        </div>

        <div class="newsletter-actions">
          <button class="learn-more-btn">Learn More</button>
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
            <p class="footer-contact">Email: info@statecouncil.cd</p>
          </div>

          <div class="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">About the Council</a></li>
              <li><a href="#">Jurisprudence</a></li>
              <li><a href="#">Filing Procedures</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Legal Documents</a></li>
              <li><a href="#">Council Decisions</a></li>
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
      margin-bottom: 0;
    }

    .practice-areas-section {
      background-color: #ffffff;
      margin-top: 0;
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

    .offer-title {
      text-align: left;
      margin-left: 0;
    }

    .offer-title::before {
      content: '';
      position: absolute;
      left: -70px;
      top: 50%;
      transform: translateY(-50%);
      width: 60px;
      height: 3px;
      background: #c41e3a;
    }

    .offer-title::after {
      display: none;
    }

    .expertise-title {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
    }

    .expertise-title::before,
    .expertise-title::after {
      content: '';
      flex: 0 0 100px;
      height: 2px;
      background: linear-gradient(90deg, transparent, #c8956b 50%, transparent);
    }

    .expertise-subtitle {
      color: #c8956b;
      font-size: 0.95rem;
    }

    .expertise-title {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
    }

    .expertise-title::before,
    .expertise-title::after {
      content: '';
      flex: 0 0 100px;
      height: 2px;
      background: linear-gradient(90deg, transparent, #c8956b 50%, transparent);
    }

    .expertise-subtitle {
      color: #c8956b;
      font-size: 0.95rem;
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

    .offer-subtitle {
      text-align: left;
      color: #c8956b;
      font-size: 0.95rem;
      margin: 0 0 50px 0;
      max-width: 100%;
    }

    .expertise-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 40px;
      margin-top: 60px;
    }

    .offer-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
      margin-top: 40px;
    }

    .offer-card {
      background: white;
      border-left: 3px solid #c41e3a;
      padding: 20px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .offer-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .card-header {
      display: flex;
      align-items: flex-start;
      gap: 15px;
      margin-bottom: 15px;
    }

    .card-image {
      width: 60px;
      height: 60px;
      flex-shrink: 0;
      object-fit: cover;
    }

    .offer-card h3 {
      font-size: 1rem;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0;
      line-height: 1.3;
    }

    .offer-card p {
      font-size: 0.9rem;
      color: #666;
      line-height: 1.6;
      margin: 0;
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
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
      margin-top: 60px;
    }

    .practice-card {
      text-align: center;
      padding: 35px 25px;
      background: white;
      border-top: 3px solid #c8956b;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
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
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 18px;
      color: #1a1a1a;
      transition: color 0.3s ease;
      padding-bottom: 12px;
      border-bottom: 2px solid #c8956b;
      line-height: 1.4;
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
      padding: 0;
      background-color: #e8eef7;
      border-top: 3px solid #4a90e2;
      border-bottom: 1px solid #d0d7e0;
    }

    .contact-bar {
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      background-color: #e8eef7;
    }

    .contact-item {
      flex: 1;
      text-align: center;
      padding: 30px 20px;
      position: relative;
    }

    .contact-item h3 {
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 8px;
      color: #1a1a1a;
      text-transform: capitalize;
    }

    .contact-item p {
      font-size: 0.85rem;
      color: #666;
      line-height: 1.5;
      margin: 0;
    }

    .contact-divider {
      width: 2px;
      background: linear-gradient(to bottom, transparent, #c8956b, transparent);
      position: relative;
    }

    .contact-divider::before,
    .contact-divider::after {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 8px;
      height: 8px;
      background-color: #c8956b;
      border-radius: 50%;
    }

    .contact-divider::before {
      top: 20px;
    }

    .contact-divider::after {
      bottom: 20px;
    }

    /* President Section */
    .president-section {
      padding: 80px 0;
      background: #ffffff;
    }

    .president-content {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 60px;
      align-items: center;
    }

    .president-image {
      position: relative;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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

    .president-text .learn-more-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 12px 35px;
      background-color: #c41e3a;
      color: white;
      border: none;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 10px;
    }

    .president-text .learn-more-btn svg {
      transition: transform 0.3s ease;
    }

    .president-text .learn-more-btn:hover {
      background-color: #a01729;
    }

    .president-text .learn-more-btn:hover svg {
      transform: translateX(-4px);
    }

    /* Newsletter Section */
    .newsletter-section {
      padding: 80px 0;
      background: linear-gradient(135deg, #1a2942 0%, #2c3e50 50%, #34495e 100%);
      color: white;
      position: relative;
      overflow: hidden;
    }

    .newsletter-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background:
        radial-gradient(circle at 20% 50%, rgba(196, 30, 58, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(139, 105, 20, 0.1) 0%, transparent 50%);
      pointer-events: none;
    }

    .newsletter-header {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      margin-bottom: 60px;
      position: relative;
      z-index: 1;
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
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
      position: relative;
      z-index: 1;
      margin-bottom: 40px;
    }

    .news-card {
      background-color: white;
      border-radius: 0;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      border-bottom: 4px solid #c8956b;
    }

    .news-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
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
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    .news-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      font-size: 0.85rem;
    }

    .news-date {
      color: #c8956b;
      font-weight: 500;
    }

    .news-category {
      color: #c8956b;
      font-weight: 500;
    }

    .news-content h3 {
      font-size: 1.1rem;
      font-weight: 600;
      line-height: 1.5;
      color: #1a1a1a;
      margin: 0 0 15px 0;
      flex-grow: 1;
    }

    .read-more-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: #c41e3a;
      font-size: 0.9rem;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
      margin-top: auto;
    }

    .read-more-link svg {
      width: 16px;
      height: 16px;
      transition: transform 0.3s ease;
    }

    .read-more-link:hover {
      color: #a01729;
      gap: 12px;
    }

    .read-more-link:hover svg {
      transform: translateX(4px);
    }

    .newsletter-actions {
      text-align: center;
      margin-top: 40px;
      position: relative;
      z-index: 1;
    }

    .newsletter-actions .learn-more-btn {
      padding: 12px 40px;
      background: transparent;
      color: white;
      border: 2px solid white;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .newsletter-actions .learn-more-btn:hover {
      background: white;
      color: #2c3e50;
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

    @media (max-width: 1024px) {
      .offer-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
      }

      .practice-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 25px;
      }

      .practice-grid .practice-card:nth-child(6) {
        grid-column: 2 / 3;
      }

      .newsletter-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
      }

      .offer-title::before {
        left: -50px;
        width: 40px;
      }
    }

    @media (max-width: 768px) {
      .section-title {
        font-size: 2rem;
      }

      .offer-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .offer-title {
        text-align: center;
      }

      .offer-title::before {
        display: none;
      }

      .offer-subtitle {
        text-align: center;
      }

      .expertise-title::before,
      .expertise-title::after {
        flex: 0 0 50px;
      }

      .expertise-grid,
      .practice-grid {
        grid-template-columns: 1fr;
        gap: 30px;
      }

      .practice-grid .practice-card:nth-child(6) {
        grid-column: 1 / 2;
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
        width: 70px;
        height: 70px;
        flex-shrink: 0;
      }

      .practice-icon svg {
        width: 100%;
        height: 100%;
      }

      .practice-card {
        padding: 30px 20px;
      }

      .practice-card h3 {
        font-size: 1.05rem;
      }

      .contact-bar {
        flex-direction: column;
      }

      .contact-divider {
        width: 100%;
        height: 2px;
        background: linear-gradient(to right, transparent, #c8956b, transparent);
      }

      .contact-divider::before,
      .contact-divider::after {
        display: none;
      }

      .contact-item {
        padding: 20px;
      }

      .president-content {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .president-text h2 {
        font-size: 1.6rem;
      }

      .contact-info-section {
        padding: 0;
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

    @media (max-width: 480px) {
      .section-title {
        font-size: 1.5rem;
      }

      .offer-subtitle,
      .section-subtitle,
      .expertise-subtitle {
        font-size: 0.85rem;
      }

      .offer-card {
        padding: 15px;
      }

      .card-header {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 10px;
      }

      .card-image {
        width: 50px;
        height: 50px;
      }

      .offer-card h3 {
        font-size: 0.95rem;
      }

      .offer-card p {
        font-size: 0.85rem;
      }

      .practice-card {
        padding: 25px 20px;
      }

      .practice-icon {
        width: 60px;
        height: 60px;
        flex-shrink: 0;
        margin: 0 auto 20px;
      }

      .practice-icon svg {
        width: 100%;
        height: 100%;
      }

      .practice-card h3 {
        font-size: 1rem;
      }

      .practice-card ul {
        font-size: 0.85rem;
      }

      .expertise-title::before,
      .expertise-title::after {
        flex: 0 0 30px;
      }

      .newsletter-header h2 {
        font-size: 1.5rem;
      }

      .news-card h3 {
        font-size: 1rem;
      }

      .newsletter-actions .learn-more-btn {
        padding: 10px 30px;
        font-size: 0.9rem;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  isLoadingOffers = signal(true);

  ngOnInit() {
    // Simulate loading data
    setTimeout(() => {
      this.isLoadingOffers.set(false);
    }, 1200);
  }
}
