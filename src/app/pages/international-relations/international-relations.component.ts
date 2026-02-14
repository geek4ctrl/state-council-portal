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
      background-image: url('/assets/image.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-color: #1E2E45;
      color: white;
      padding: 120px 0;
      position: relative;
      overflow: hidden;
    }

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        135deg,
        rgba(30, 46, 69, 0.92) 0%,
        rgba(44, 62, 80, 0.88) 35%,
        rgba(52, 73, 94, 0.85) 70%,
        rgba(30, 46, 69, 0.88) 100%
      );
      z-index: 1;
    }

    .hero-overlay::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 20% 30%, rgba(191, 152, 116, 0.18) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(191, 152, 116, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 60%);
      z-index: 2;
    }

    .hero-section .container {
      position: relative;
      z-index: 3;
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
      text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
    }

    .vertical-line {
      width: 3px;
      height: 180px;
      background: linear-gradient(
        180deg,
        transparent 0%,
        rgba(255, 255, 255, 0.8) 15%,
        rgba(191, 152, 116, 0.9) 50%,
        rgba(255, 255, 255, 0.8) 85%,
        transparent 100%
      );
      display: block;
      box-shadow: 0 0 20px rgba(191, 152, 116, 0.4);
    }

    .hero-description p {
      font-size: 1.05rem;
      line-height: 1.9;
      opacity: 0.95;
      margin: 0;
      font-weight: 300;
      text-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
    }

    /* Stats Section */
    .stats-section {
      background: linear-gradient(180deg, #e8eef7 0%, #f5f8fc 100%);
      padding: 60px 0;
      border-bottom: 1px solid rgba(191, 152, 116, 0.1);
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
      color: #1E2E45;
      margin-bottom: 15px;
      line-height: 1;
    }

    .stat-divider {
      width: 60px;
      height: 2px;
      background: linear-gradient(90deg, transparent, #BF9874, transparent);
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
      background: linear-gradient(180deg, transparent, #BF9874, transparent);
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
      background: linear-gradient(90deg, transparent, #BF9874);
    }

    .header-line-left,
    .header-line-right {
      flex: 0 0 60px;
      height: 2px;
    }

    .header-line-left {
      background: linear-gradient(90deg, transparent, #BF9874);
    }

    .header-line-right {
      background: linear-gradient(90deg, #BF9874, transparent);
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
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    }

    .network-card:hover {
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }

    .card-accent {
      width: 4px;
      height: 100%;
      background: linear-gradient(180deg, #BF9874 0%, #a87e5f 100%);
      position: absolute;
      left: 0;
      top: 0;
      box-shadow: 2px 0 8px rgba(191, 152, 116, 0.3);
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
      background: linear-gradient(180deg, #e8eef7 0%, #f5f8fc 100%);
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
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    }

    .domain-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
      border-color: #BF9874;
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
      color: #BF9874;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #BF9874;
      border-radius: 50%;
      transition: all 0.3s ease;
    }

    .domain-card:hover .domain-icon {
      background: #BF9874;
      color: white;
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
      background: linear-gradient(135deg, #1E2E45 0%, #2c3e50 100%);
      padding: 60px 0;
      position: relative;
      overflow: hidden;
    }

    .collaboration-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 10% 20%, rgba(191, 152, 116, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 90% 80%, rgba(191, 152, 116, 0.08) 0%, transparent 50%);
    }

    .collaboration-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 50px;
      position: relative;
      z-index: 1;
    }

    .collaboration-text {
      flex: 1;
    }

    .collaboration-text h2 {
      font-size: 1.8rem;
      margin-bottom: 15px;
      color: #ffffff;
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    .collaboration-text p {
      font-size: 1rem;
      line-height: 1.7;
      margin: 0;
      color: rgba(255, 255, 255, 0.85);
    }

    .contact-btn {
      background-color: transparent;
      color: #BF9874;
      border: 2px solid #BF9874;
      padding: 16px 40px;
      font-size: 0.85rem;
      font-weight: 600;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 1px;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .contact-btn:hover {
      background-color: #BF9874;
      color: #1E2E45;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(191, 152, 116, 0.4);
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
        background-attachment: scroll;
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
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), #BF9874, rgba(255, 255, 255, 0.8), transparent);
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
        flex-direction: row;
        align-items: center;
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
      .contact-btn:hover,
      .network-card:hover {
        transform: none;
      }
    }
  `]
})
export class InternationalRelationsComponent {}