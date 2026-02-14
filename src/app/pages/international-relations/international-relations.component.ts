import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nPipe } from '../../i18n/i18n.pipe';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-international-relations',
  imports: [CommonModule, I18nPipe, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-overlay"></div>
        <div class="container">
          <div class="hero-grid">
            <div class="hero-title">
              <h1 [innerHTML]="'international.hero.title' | i18n"></h1>
            </div>
            <div class="vertical-line"></div>
            <div class="hero-description">
              <p>{{ 'international.hero.body' | i18n }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="stats-section">
        <div class="container">
          <div class="stats-grid">
            <div class="stat-item">
              <div class="stat-number">2</div>
              <div class="stat-divider"></div>
              <div class="stat-label">{{ 'international.stats.associations' | i18n }}</div>
            </div>
            <div class="stat-separator"></div>
            <div class="stat-item">
              <div class="stat-number">50+</div>
              <div class="stat-divider"></div>
              <div class="stat-label">{{ 'international.stats.partners' | i18n }}</div>
            </div>
            <div class="stat-separator"></div>
            <div class="stat-item">
              <div class="stat-number">100+</div>
              <div class="stat-divider"></div>
              <div class="stat-label">{{ 'international.stats.exchanges' | i18n }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- International Judicial Networks Section -->
      <section class="networks-section">
        <div class="container">
          <div class="section-header">
            <div class="header-line"></div>
            <h2>{{ 'international.networks.title' | i18n }}</h2>
          </div>
          <p class="section-subtitle">{{ 'international.networks.subtitle' | i18n }}</p>

          <div class="network-cards">
            <div class="network-card glass-card">
              <div class="card-accent"></div>
              <div class="card-content">
                <h3>AHJUCAF</h3>
                <p class="network-full-name">{{ 'international.networks.ahjucaf.name' | i18n }}</p>
                <p class="network-description">{{ 'international.networks.ahjucaf.body' | i18n }}</p>
              </div>
            </div>

            <div class="network-card glass-card">
              <div class="card-accent"></div>
              <div class="card-content">
                <h3>AA-HJF</h3>
                <p class="network-full-name">{{ 'international.networks.aahjf.name' | i18n }}</p>
                <p class="network-description">{{ 'international.networks.aahjf.body' | i18n }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- International Cooperation Domains Section -->
      <section class="cooperation-section">
        <div class="container">
          <div class="section-header centered">
            <div class="header-line-left"></div>
            <h2>{{ 'international.domains.title' | i18n }}</h2>
            <div class="header-line-right"></div>
          </div>
          <p class="section-subtitle centered">{{ 'international.domains.subtitle' | i18n }}</p>

          <div class="domain-grid">
            <div class="domain-card glass-card">
              <div class="domain-header">
                <div class="domain-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <h3>{{ 'international.domains.dialogue.title' | i18n }}</h3>
              </div>
              <p>{{ 'international.domains.dialogue.body' | i18n }}</p>
            </div>

            <div class="domain-card glass-card">
              <div class="domain-header">
                <div class="domain-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <h3>{{ 'international.domains.assistance.title' | i18n }}</h3>
              </div>
              <p>{{ 'international.domains.assistance.body' | i18n }}</p>
            </div>

            <div class="domain-card glass-card">
              <div class="domain-header">
                <div class="domain-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3>{{ 'international.domains.capacity.title' | i18n }}</h3>
              </div>
              <p>{{ 'international.domains.capacity.body' | i18n }}</p>
            </div>

            <div class="domain-card glass-card">
              <div class="domain-header">
                <div class="domain-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <h3>{{ 'international.domains.forums.title' | i18n }}</h3>
              </div>
              <p>{{ 'international.domains.forums.body' | i18n }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Collaboration Section -->
      <section class="collaboration-section">
        <div class="container">
          <div class="collaboration-content">
            <div class="collaboration-text">
              <h2>{{ 'international.collaboration.title' | i18n }}</h2>
              <p class="section-subtitle">{{ 'international.collaboration.body' | i18n }}</p>
            </div>
            <button class="contact-btn">{{ 'international.collaboration.cta' | i18n }}</button>
          </div>
        </div>
      </section>

      <app-footer></app-footer>
    </div>
  `,
  styles: [`
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
      background-image: url('/assets/images/international-hero.jpg');
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
      grid-template-columns: 1fr auto 1.3fr;
      gap: 60px;
      align-items: center;
    }

    .hero-title h1 {
      font-size: 4rem;
      font-weight: 700;
      line-height: 1.15;
      margin: 0;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: white;
    }

    .vertical-line {
      width: 3px;
      height: 180px;
      background-color: #ffffff;
      display: block;
    }

    .hero-description p {
      font-size: 1.05rem;
      line-height: 1.9;
      opacity: 0.95;
      margin: 0;
      font-weight: 300;
    }

    /* Stats Section */
    .stats-section {
      background: #e8eef7;
      padding: 60px 0;
    }

    .stats-grid {
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 40px;
    }

    .stat-item {
      text-align: center;
      flex: 1;
    }

    .stat-number {
      font-size: 3.5rem;
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 15px;
      line-height: 1;
    }

    .stat-divider {
      width: 60px;
      height: 2px;
      background: #BF9874;
      margin: 15px auto;
    }

    .stat-label {
      font-size: 0.9rem;
      color: #666;
      line-height: 1.5;
      max-width: 220px;
      margin: 0 auto;
    }

    .stat-separator {
      width: 1px;
      height: 80px;
      background: #BF9874;
      flex-shrink: 0;
    }

    /* Networks Section */
    .networks-section {
      padding: 100px 0;
      background: white;
    }

    .section-header {
      display: flex;
      align-items: center;
      gap: 30px;
      margin-bottom: 20px;
    }

    .section-header.centered {
      justify-content: center;
    }

    .section-header h2 {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0;
      letter-spacing: 1px;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .header-line {
      flex: 0 0 60px;
      height: 2px;
      background: #BF9874;
    }

    .header-line-left,
    .header-line-right {
      flex: 0 0 60px;
      height: 2px;
      background: #BF9874;
    }

    .section-subtitle {
      font-size: 0.9rem;
      color: #BF9874 !important;
      margin: 0 0 60px 0;
      line-height: 1.7;
      letter-spacing: 1.5px;
    }

    .section-subtitle.centered {
      text-align: center;
    }

    .network-cards {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
    }

    .network-card {
      background: white;
      border: 1px solid #e0e0e0;
      position: relative;
      transition: all 0.3s ease;
      overflow: hidden;
    }

    .network-card:hover {
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    }

    .card-accent {
      width: 4px;
      height: 100%;
      background: #BF9874;
      position: absolute;
      left: 0;
      top: 0;
    }

    .card-content {
      padding: 30px 30px 30px 40px;
    }

    .network-card h3 {
      font-size: 1.4rem;
      color: #1a1a1a;
      margin: 0 0 10px 0;
      font-weight: 700;
      letter-spacing: 0.5px;
    }

    .network-full-name {
      font-size: 0.9rem;
      color: #666;
      margin: 0 0 20px 0;
      display: block;
      font-weight: 400;
    }

    .network-description {
      line-height: 1.8;
      color: #555;
      font-size: 0.95rem;
      margin: 0;
    }

    /* Cooperation Section */
    .cooperation-section {
      padding: 100px 0;
      background: #e8eef7;
    }

    .domain-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
    }

    .domain-card {
      background: white;
      padding: 30px;
      transition: all 0.3s ease;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
    }

    .domain-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    }

    .domain-header {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 20px;
    }

    .domain-icon {
      width: 50px;
      height: 50px;
      min-width: 50px;
      color: #666;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #BF9874;
      border-radius: 50%;
    }

    .domain-icon svg {
      width: 24px;
      height: 24px;
    }

    .domain-card h3 {
      font-size: 1.1rem;
      color: #1a1a1a;
      margin: 0;
      font-weight: 600;
      letter-spacing: 0.3px;
    }

    .domain-card p {
      line-height: 1.7;
      color: #666;
      font-size: 0.9rem;
      text-align: left;
      margin: 0;
    }

    /* Collaboration Section */
    .collaboration-section {
      background: #f5f5f5;
      padding: 60px 0;
    }

    .collaboration-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 50px;
    }

    .collaboration-text {
      flex: 1;
    }

    .collaboration-text h2 {
      font-size: 1.8rem;
      margin-bottom: 15px;
      color: #1a1a1a;
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    .collaboration-text p {
      font-size: 1rem;
      line-height: 1.7;
      margin: 0;
      color: #666;
    }

    .contact-btn {
      background-color: #1a1a1a;
      color: white;
      border: none;
      padding: 16px 40px;
      font-size: 0.85rem;
      font-weight: 600;
      border-radius: 0;
      cursor: pointer;
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 1px;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .contact-btn:hover {
      background-color: #000;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    /* ========================================
       RESPONSIVE DESIGN - MEDIA QUERIES
       ======================================== */

    /* Large Tablets & Small Desktops (1024px - 1199px) */
    @media (max-width: 1199px) {
      .container {
        padding: 0 30px;
      }

      .hero-title h1 {
        font-size: 3.5rem;
      }

      .hero-grid {
        gap: 50px;
      }

      .vertical-line {
        height: 150px;
      }

      .section-header h2 {
        font-size: 2.2rem;
      }

      .domain-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
      }
    }

    /* Tablets (768px - 1023px) */
    @media (max-width: 1023px) {
      .hero-section {
        padding: 100px 0;
      }

      .hero-title h1 {
        font-size: 3rem;
        letter-spacing: 2px;
      }

      .hero-grid {
        gap: 40px;
      }

      .vertical-line {
        height: 130px;
      }

      .hero-description p {
        font-size: 1rem;
      }

      .stats-section,
      .networks-section,
      .cooperation-section {
        padding: 80px 0;
      }

      .stat-number {
        font-size: 3rem;
      }

      .section-header h2 {
        font-size: 2rem;
      }

      .network-cards {
        gap: 30px;
      }

      .card-content {
        padding: 25px 25px 25px 35px;
      }

      .collaboration-content {
        gap: 40px;
      }

      .collaboration-text h2 {
        font-size: 1.6rem;
      }

      .footer-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
      }
    }

    /* Mobile Landscape & Small Tablets (576px - 767px) */
    @media (max-width: 767px) {
      .container {
        padding: 0 20px;
      }

      .hero-section {
        padding: 80px 0;
      }

      .hero-grid {
        grid-template-columns: 1fr;
        gap: 30px;
        text-align: center;
      }

      .hero-title h1 {
        font-size: 2.5rem;
        letter-spacing: 2px;
      }

      .vertical-line {
        width: 80px;
        height: 3px;
        margin: 0 auto;
      }

      .hero-description p {
        font-size: 0.95rem;
        line-height: 1.7;
      }

      .stats-section,
      .networks-section,
      .cooperation-section {
        padding: 60px 0;
      }

      .stats-grid {
        flex-direction: column;
        gap: 35px;
      }

      .stat-separator {
        display: none;
      }

      .stat-number {
        font-size: 2.8rem;
      }

      .section-header {
        gap: 20px;
        flex-wrap: wrap;
        justify-content: center;
      }

      .section-header h2 {
        font-size: 1.8rem;
        white-space: normal;
        text-align: center;
      }

      .section-header.centered {
        flex-direction: column;
      }

      .header-line,
      .header-line-left,
      .header-line-right {
        flex: 0 0 50px;
      }

      .section-subtitle {
        font-size: 0.85rem;
        margin-bottom: 40px;
      }

      .network-cards {
        grid-template-columns: 1fr;
        gap: 25px;
      }

      .card-content {
        padding: 25px;
      }

      .network-card h3 {
        font-size: 1.3rem;
      }

      .network-description {
        font-size: 0.9rem;
      }

      .domain-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .domain-card {
        padding: 25px;
      }

      .domain-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
      }

      .collaboration-section {
        padding: 50px 0;
      }

      .collaboration-content {
        flex-direction: column;
        gap: 30px;
        text-align: center;
      }

      .collaboration-text h2 {
        font-size: 1.5rem;
      }

      .collaboration-text p {
        font-size: 0.95rem;
      }

      .contact-btn {
        width: 100%;
        padding: 14px 30px;
      }
    }

    /* Mobile Portrait (up to 575px) */
    @media (max-width: 575px) {
      .container {
        padding: 0 15px;
      }

      .hero-section {
        padding: 60px 0;
      }

      .hero-title h1 {
        font-size: 2rem;
        letter-spacing: 1.5px;
      }

      .vertical-line {
        width: 60px;
        height: 2px;
      }

      .hero-description p {
        font-size: 0.9rem;
      }

      .stats-section,
      .networks-section,
      .cooperation-section {
        padding: 50px 0;
      }

      .stats-grid {
        gap: 30px;
      }

      .stat-number {
        font-size: 2.5rem;
      }

      .stat-divider {
        width: 50px;
      }

      .stat-label {
        font-size: 0.85rem;
      }

      .section-header {
        gap: 15px;
      }

      .section-header h2 {
        font-size: 1.5rem;
      }

      .header-line,
      .header-line-left,
      .header-line-right {
        flex: 0 0 40px;
      }

      .section-subtitle {
        font-size: 0.8rem;
        margin-bottom: 35px;
      }

      .network-cards {
        gap: 20px;
      }

      .card-content {
        padding: 20px;
      }

      .network-card h3 {
        font-size: 1.2rem;
      }

      .network-full-name {
        font-size: 0.85rem;
      }

      .network-description {
        font-size: 0.85rem;
      }

      .domain-grid {
        gap: 18px;
      }

      .domain-card {
        padding: 20px;
      }

      .domain-icon {
        width: 45px;
        height: 45px;
        min-width: 45px;
      }

      .domain-icon svg {
        width: 22px;
        height: 22px;
      }

      .domain-card h3 {
        font-size: 1rem;
      }

      .domain-card p {
        font-size: 0.85rem;
      }

      .collaboration-section {
        padding: 40px 0;
      }

      .collaboration-text h2 {
        font-size: 1.3rem;
      }

      .collaboration-text p {
        font-size: 0.9rem;
      }

      .contact-btn {
        padding: 12px 25px;
        font-size: 0.8rem;
      }
    }

    /* Extra Small Devices (up to 374px) */
    @media (max-width: 374px) {
      .hero-title h1 {
        font-size: 1.8rem;
      }

      .stat-number {
        font-size: 2.2rem;
      }

      .section-header h2 {
        font-size: 1.3rem;
      }

      .header-line,
      .header-line-left,
      .header-line-right {
        flex: 0 0 30px;
      }

      .network-card h3 {
        font-size: 1.1rem;
      }

      .domain-card {
        padding: 18px;
      }

      .collaboration-text h2 {
        font-size: 1.2rem;
      }

      .contact-btn {
        padding: 10px 20px;
        font-size: 0.75rem;
      }
    }

    /* Landscape Orientation Fixes */
    @media (max-height: 600px) and (orientation: landscape) {
      .hero-section {
        padding: 50px 0;
      }

      .stats-section,
      .networks-section,
      .cooperation-section {
        padding: 40px 0;
      }
    }

    /* Reduce Motion for Accessibility */
    @media (prefers-reduced-motion: reduce) {
      .network-card,
      .domain-card,
      .contact-btn {
        transition: none;
      }

      .domain-card:hover,
      .contact-btn:hover {
        transform: none;
      }
    }
  `]
})
export class InternationalRelationsComponent {}

