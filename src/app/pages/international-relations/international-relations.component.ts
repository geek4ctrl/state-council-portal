import {
  AfterViewInit, ChangeDetectionStrategy, Component, DestroyRef,
  ElementRef, OnInit, ViewChild, inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nPipe } from '../../i18n/i18n.pipe';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-international-relations',
  imports: [CommonModule, I18nPipe, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page-wrap page-container">
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
            <div class="stat-item tilt-card" style="--i:0" (mousemove)="tilt($event)" (mouseleave)="tiltReset($event)">
              <div class="tilt-shine"></div>
              <div class="stat-number">2</div>
              <div class="stat-divider"></div>
              <div class="stat-label anim-label-pulse">{{ 'international.stats.associations' | i18n }}</div>
            </div>
            <div class="stat-separator"></div>
            <div class="stat-item tilt-card" style="--i:1" (mousemove)="tilt($event)" (mouseleave)="tiltReset($event)">
              <div class="tilt-shine"></div>
              <div class="stat-number">50+</div>
              <div class="stat-divider"></div>
              <div class="stat-label anim-label-pulse">{{ 'international.stats.partners' | i18n }}</div>
            </div>
            <div class="stat-separator"></div>
            <div class="stat-item tilt-card" style="--i:2" (mousemove)="tilt($event)" (mouseleave)="tiltReset($event)">
              <div class="tilt-shine"></div>
              <div class="stat-number">100+</div>
              <div class="stat-divider"></div>
              <div class="stat-label anim-label-pulse">{{ 'international.stats.exchanges' | i18n }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- International Judicial Networks Section -->
      <section class="networks-section">
        <div class="container">
          <div class="section-header">
            <div class="header-line anim-line"></div>
            <h2 class="anim-up">{{ 'international.networks.title' | i18n }}</h2>
          </div>
          <p class="section-subtitle anim-up a-d1">{{ 'international.networks.subtitle' | i18n }}</p>

          <div class="network-cards">
            <div class="network-card glass-card tilt-card" style="--i:0" (mousemove)="tilt($event)" (mouseleave)="tiltReset($event)">
              <div class="tilt-shine"></div>
              <div class="card-accent"></div>
              <div class="card-content">
                <h3>AHJUCAF</h3>
                <p class="network-full-name">{{ 'international.networks.ahjucaf.name' | i18n }}</p>
                <p class="network-description">{{ 'international.networks.ahjucaf.body' | i18n }}</p>
              </div>
            </div>

            <div class="network-card glass-card tilt-card" style="--i:1" (mousemove)="tilt($event)" (mouseleave)="tiltReset($event)">
              <div class="tilt-shine"></div>
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
            <div class="header-line-left anim-line-c"></div>
            <h2 class="anim-up">{{ 'international.domains.title' | i18n }}</h2>
            <div class="header-line-right anim-line-c"></div>
          </div>
          <p class="section-subtitle centered anim-up a-d1">{{ 'international.domains.subtitle' | i18n }}</p>

          <div class="domain-grid">
            <div class="domain-card glass-card tilt-card" style="--i:0" (mousemove)="tilt($event)" (mouseleave)="tiltReset($event)">
              <div class="tilt-shine"></div>
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

            <div class="domain-card glass-card tilt-card" style="--i:1" (mousemove)="tilt($event)" (mouseleave)="tiltReset($event)">
              <div class="tilt-shine"></div>
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

            <div class="domain-card glass-card tilt-card" style="--i:2" (mousemove)="tilt($event)" (mouseleave)="tiltReset($event)">
              <div class="tilt-shine"></div>
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

            <div class="domain-card glass-card tilt-card" style="--i:3" (mousemove)="tilt($event)" (mouseleave)="tiltReset($event)">
              <div class="tilt-shine"></div>
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
            <button class="contact-btn mag-btn" (mousemove)="mag($event)" (mouseleave)="magOut($event)" (click)="ripple($event)">
              <span>{{ 'international.collaboration.cta' | i18n }}</span>
            </button>
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
        radial-gradient(circle at 20% 30%, rgba(31, 155, 217, 0.18) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(31, 155, 217, 0.15) 0%, transparent 50%),
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
        rgba(31, 155, 217, 0.9) 50%,
        rgba(255, 255, 255, 0.8) 85%,
        transparent 100%
      );
      display: block;
      box-shadow: 0 0 20px rgba(31, 155, 217, 0.4);
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
      border-bottom: 1px solid rgba(31, 155, 217, 0.1);
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
      background: linear-gradient(90deg, transparent, #1F9BD9, transparent);
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
      background: linear-gradient(180deg, transparent, #1F9BD9, transparent);
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
      background: linear-gradient(90deg, transparent, #1F9BD9);
    }

    .header-line-left,
    .header-line-right {
      flex: 0 0 60px;
      height: 2px;
    }

    .header-line-left {
      background: linear-gradient(90deg, transparent, #1F9BD9);
    }

    .header-line-right {
      background: linear-gradient(90deg, #1F9BD9, transparent);
    }

    .section-subtitle {
      font-size: 0.9rem;
      color: #1F9BD9 !important;
      margin: 0 0 60px 0;
      line-height: 1.7;
      letter-spacing: 4.5px;
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
      background: linear-gradient(180deg, #1F9BD9 0%, #a87e5f 100%);
      position: absolute;
      left: 0;
      top: 0;
      box-shadow: 2px 0 8px rgba(31, 155, 217, 0.3);
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
      border-color: #1F9BD9;
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
      color: #1F9BD9;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #1F9BD9;
      border-radius: 50%;
      transition: all 0.3s ease;
    }

    .domain-card:hover .domain-icon {
      background: #1F9BD9;
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
        radial-gradient(circle at 10% 20%, rgba(31, 155, 217, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 90% 80%, rgba(31, 155, 217, 0.08) 0%, transparent 50%);
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
      color: #1F9BD9;
      border: 2px solid #1F9BD9;
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
      background-color: #1F9BD9;
      color: #1E2E45;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(31, 155, 217, 0.4);
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
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), #1F9BD9, rgba(255, 255, 255, 0.8), transparent);
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

      .header-line {
        flex: 0 0 50px;
      }

      .cooperation-section .header-line-left,
      .cooperation-section .header-line-right {
        display: none;
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

      .header-line {
        flex: 0 0 40px;
      }

      .cooperation-section .header-line-left,
      .cooperation-section .header-line-right {
        display: none;
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
    /* ━━━ Home-style animations ━━━ */
    @keyframes fillBar{0%{width:0}60%{width:70%}100%{width:100%}}
    @keyframes labelPulse{0%,100%{opacity:.4;letter-spacing:2px}50%{opacity:1;letter-spacing:5px}}
    @keyframes loaderOut{to{opacity:0;visibility:hidden}}
    @keyframes rOrbit1{from{transform:rotateX(65deg) rotateZ(0)}to{transform:rotateX(65deg) rotateZ(360deg)}}
    @keyframes rOrbit2{from{transform:rotateX(65deg) rotateZ(120deg)}to{transform:rotateX(65deg) rotateZ(480deg)}}
    @keyframes rOrbit3{from{transform:rotateX(65deg) rotateZ(240deg)}to{transform:rotateX(65deg) rotateZ(600deg)}}
    @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
    @keyframes shimmerSweep{from{transform:translateX(-120%) skewX(-20deg)}to{transform:translateX(220%) skewX(-20deg)}}
    @keyframes rippleAnim{to{transform:scale(1);opacity:0}}
    @keyframes cardIn{from{opacity:0;transform:translateY(40px) rotateX(20deg) scale(.94)}to{opacity:1;transform:translateY(0) rotateX(0) scale(1)}}
    @keyframes lineExpand{from{width:0;opacity:0}to{width:60px;opacity:1}}
    @keyframes lineCExpand{from{width:0;opacity:0}to{width:160px;opacity:1}}
    @keyframes upFade{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}

    .page-wrap{cursor:none;}
    .loader{
      position:fixed;inset:0;background:linear-gradient(135deg,#080e1a,#82BCDC);
      display:flex;flex-direction:column;align-items:center;justify-content:center;gap:32px;
      z-index:9999;transition:opacity .7s ease,visibility .7s ease,transform .7s ease;
    }
    .loader.out{opacity:0;visibility:hidden;transform:scale(1.06);pointer-events:none;}
    .loader-sphere{width:120px;height:120px;position:relative;display:flex;align-items:center;justify-content:center;}
    .sphere-ring{position:absolute;inset:0;border-radius:50%;border:1px solid rgba(31,155,217,.35);}
    .r1{inset:10px;animation:rOrbit1 2.5s linear infinite;}
    .r2{inset:0;animation:rOrbit2 3.5s linear infinite;}
    .r3{inset:-12px;animation:rOrbit3 5s linear infinite;}
    .sphere-core{
      width:52px;height:52px;border-radius:50%;
      background:radial-gradient(circle,rgba(31,155,217,.25),rgba(31,155,217,.05));
      border:1px solid rgba(31,155,217,.5);
      display:flex;align-items:center;justify-content:center;color:#1F9BD9;
      box-shadow:0 0 30px rgba(31,155,217,.3);animation:float 3s ease-in-out infinite;
    }
    .sphere-core svg{width:30px;height:30px;}
    .loader-track{width:220px;height:3px;background:rgba(255,255,255,.08);border-radius:99px;overflow:hidden;}
    .loader-fill{height:100%;background:linear-gradient(90deg,#1F9BD9,#e0b98a);border-radius:99px;animation:fillBar 2s ease-in-out infinite;}
    .loader-label{font-size:.72rem;font-weight:700;letter-spacing:2px;color:#1F9BD9;text-transform:uppercase;animation:labelPulse 2s ease-in-out infinite;}

    .anim-line{animation:lineExpand .8s ease-out both;}
    .anim-line-c{animation:lineCExpand .8s ease-out both;}
    .anim-up{animation:upFade .7s cubic-bezier(.23,1,.32,1) both;opacity:0;}
    .a-d1{animation-delay:.15s;}
    .anim-label-pulse{animation:labelPulse 3s ease-in-out infinite;}

    .tilt-card{transform-style:preserve-3d;position:relative;overflow:hidden;transition:transform .5s cubic-bezier(.23,1,.32,1),box-shadow .5s ease;}
    .tilt-card{opacity:0;animation:cardIn .7s cubic-bezier(.23,1,.32,1) calc(var(--i,0)*.1s) forwards;}
    .tilt-shine{position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:10;background:linear-gradient(105deg,transparent 45%,rgba(255,255,255,.18) 50%,transparent 55%);transform:translateX(-120%) skewX(-20deg);}

    .mag-btn{position:relative;overflow:hidden;transition:transform .25s ease;}
    .mag-btn::before{content:'';position:absolute;inset:0;background:linear-gradient(105deg,transparent 40%,rgba(255,255,255,.2) 50%,transparent 60%);transform:translateX(-120%) skewX(-20deg);pointer-events:none;}
    .mag-btn:hover::before{animation:shimmerSweep .6s ease forwards;}
  `]
})
export class InternationalRelationsComponent implements OnInit, AfterViewInit {
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
  }

  ngAfterViewInit() {}

  tilt(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
    const dy = (e.clientY - r.top - r.height / 2) / (r.height / 2);
    const tx = -dy * 14; const ty = dx * 14;
    el.style.transform = `perspective(900px) rotateX(${tx}deg) rotateY(${ty}deg) translateZ(14px)`;
    el.style.boxShadow = `${-ty * 1.5}px ${tx * 1.5}px 50px rgba(0,0,0,.18)`;
    const shine = el.querySelector<HTMLElement>('.tilt-shine');
    if (shine) { shine.style.transform = `translateX(${dx * 60}%) translateY(${dy * 40}%) skewX(-20deg)`; shine.style.opacity = '.7'; }
  }

  tiltReset(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    el.style.transform = ''; el.style.boxShadow = '';
    const shine = el.querySelector<HTMLElement>('.tilt-shine');
    if (shine) { shine.style.transform = 'translateX(-120%) skewX(-20deg)'; shine.style.opacity = '0'; }
  }

  mag(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width / 2) * 0.4;
    const dy = (e.clientY - r.top - r.height / 2) * 0.4;
    el.style.transform = `translate(${dx}px,${dy}px)`;
  }

  magOut(e: MouseEvent) { (e.currentTarget as HTMLElement).style.transform = ''; }

  ripple(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    const r = el.getBoundingClientRect();
    const rip = document.createElement('span');
    const size = Math.max(r.width, r.height) * 2;
    rip.style.cssText = `position:absolute;width:${size}px;height:${size}px;border-radius:50%;background:rgba(255,255,255,.35);transform:scale(0);left:${e.clientX - r.left - size / 2}px;top:${e.clientY - r.top - size / 2}px;animation:rippleAnim .6s ease-out forwards;pointer-events:none;z-index:10;`;
    const style = document.createElement('style');
    style.textContent = '@keyframes rippleAnim{to{transform:scale(1);opacity:0;}}';
    document.head.appendChild(style);
    el.style.position = 'relative'; el.style.overflow = 'hidden';
    el.appendChild(rip);
    setTimeout(() => { rip.remove(); style.remove(); }, 700);
  }
}