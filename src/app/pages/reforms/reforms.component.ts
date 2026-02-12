import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nPipe } from '../../i18n/i18n.pipe';

@Component({
  selector: 'app-reforms',
  standalone: true,
  imports: [CommonModule, I18nPipe],
  template: `
    <div class="page-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-grid">
            <div class="hero-content-left">
              <h1 [innerHTML]="'reforms.hero.title' | i18n"></h1>
            </div>
            <div class="vertical-line"></div>
            <div class="hero-content-right">
              <p>{{ 'reforms.hero.body' | i18n }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Building Section -->
      <section class="building-section">
        <div class="container">
          <div class="section-tag">
            <div class="tag-line"></div>
            <span>{{ 'reforms.building.tag' | i18n }}</span>
          </div>

          <h2 class="section-title">{{ 'reforms.building.title' | i18n }}</h2>
          <p class="section-description">{{ 'reforms.building.body' | i18n }}</p>
        </div>
      </section>

      <!-- Strategic Reform Initiatives -->
      <section class="initiatives-section">
        <div class="container">
          <div class="section-tag">
            <div class="tag-line"></div>
            <span>{{ 'reforms.initiatives.tag' | i18n }}</span>
          </div>

          <h2 class="section-title">{{ 'reforms.initiatives.title' | i18n }}</h2>
          <p class="section-description">{{ 'reforms.initiatives.body' | i18n }}</p>

          <!-- Process Flow -->
          <div class="process-flow-container">
            <!-- Step 1 -->
            <div class="process-step">
              <div class="step-number">01</div>
              <div class="step-content">
                <div class="step-icon-wrapper" style="background: linear-gradient(135deg, #c8956b 0%, #b8865b 100%);">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3>{{ 'reforms.initiatives.steps.1.title' | i18n }}</h3>
                <p>{{ 'reforms.initiatives.steps.1.body' | i18n }}</p>
                <div class="step-badge critical">{{ 'reforms.initiatives.badges.critical' | i18n }}</div>
              </div>
              <div class="arrow-connector">
                <svg viewBox="0 0 100 60" preserveAspectRatio="none">
                  <defs>
                    <marker id="arrowhead1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#c8956b"/>
                    </marker>
                  </defs>
                  <path d="M0,30 Q50,10 100,30" stroke="#c8956b" stroke-width="2" fill="none" stroke-dasharray="5,5" marker-end="url(#arrowhead1)"/>
                </svg>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="process-step">
              <div class="step-number">02</div>
              <div class="step-content">
                <div class="step-icon-wrapper" style="background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <h3>{{ 'reforms.initiatives.steps.2.title' | i18n }}</h3>
                <p>{{ 'reforms.initiatives.steps.2.body' | i18n }}</p>
                <div class="step-badge high">{{ 'reforms.initiatives.badges.high' | i18n }}</div>
              </div>
              <div class="arrow-connector">
                <svg viewBox="0 0 100 60" preserveAspectRatio="none">
                  <defs>
                    <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#c8956b"/>
                    </marker>
                  </defs>
                  <path d="M0,30 Q50,50 100,30" stroke="#c8956b" stroke-width="2" fill="none" stroke-dasharray="5,5" marker-end="url(#arrowhead2)"/>
                </svg>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="process-step">
              <div class="step-number">03</div>
              <div class="step-content">
                <div class="step-icon-wrapper" style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <h3>{{ 'reforms.initiatives.steps.3.title' | i18n }}</h3>
                <p>{{ 'reforms.initiatives.steps.3.body' | i18n }}</p>
                <div class="step-badge medium">{{ 'reforms.initiatives.badges.medium' | i18n }}</div>
              </div>
              <div class="arrow-connector">
                <svg viewBox="0 0 100 60" preserveAspectRatio="none">
                  <defs>
                    <marker id="arrowhead3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#c8956b"/>
                    </marker>
                  </defs>
                  <path d="M0,30 Q50,10 100,30" stroke="#c8956b" stroke-width="2" fill="none" stroke-dasharray="5,5" marker-end="url(#arrowhead3)"/>
                </svg>
              </div>
            </div>

            <!-- Step 4 -->
            <div class="process-step">
              <div class="step-number">04</div>
              <div class="step-content">
                <div class="step-icon-wrapper" style="background: linear-gradient(135deg, #7d8a96 0%, #8d9aa6 100%);">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h3>{{ 'reforms.initiatives.steps.4.title' | i18n }}</h3>
                <p>{{ 'reforms.initiatives.steps.4.body' | i18n }}</p>
                <div class="step-badge high">{{ 'reforms.initiatives.badges.high' | i18n }}</div>
              </div>
              <div class="arrow-connector">
                <svg viewBox="0 0 100 60" preserveAspectRatio="none">
                  <defs>
                    <marker id="arrowhead4" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#c8956b"/>
                    </marker>
                  </defs>
                  <path d="M0,30 Q50,50 100,30" stroke="#c8956b" stroke-width="2" fill="none" stroke-dasharray="5,5" marker-end="url(#arrowhead4)"/>
                </svg>
              </div>
            </div>

            <!-- Step 5 -->
            <div class="process-step last-step">
              <div class="step-number">05</div>
              <div class="step-content">
                <div class="step-icon-wrapper" style="background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h3>{{ 'reforms.initiatives.steps.5.title' | i18n }}</h3>
                <p>{{ 'reforms.initiatives.steps.5.body' | i18n }}</p>
                <div class="step-badge medium">{{ 'reforms.initiatives.badges.medium' | i18n }}</div>
              </div>
              <div class="completion-badge">
                <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="30" cy="30" r="28" stroke="#c8956b" stroke-width="2" fill="none"/>
                  <path d="M18 30l8 8 16-16" stroke="#c8956b" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Key Stakeholders Section -->
      <section class="stakeholders-section">
        <div class="container">
          <div class="stakeholders-header">
            <div class="header-line left"></div>
            <h2 class="section-title-stakeholders">{{ 'reforms.stakeholders.title' | i18n }}</h2>
            <div class="header-line right"></div>
          </div>
          <p class="section-subtitle">{{ 'reforms.stakeholders.subtitle' | i18n }}</p>

          <div class="stakeholders-grid">
            <div class="stakeholder-card" *ngFor="let stakeholder of stakeholders">
              <div class="stakeholder-image">
                <img [src]="stakeholder.image" [alt]="stakeholder.name">
                <div class="image-overlay"></div>
              </div>
              <div class="stakeholder-info">
                <h3>{{ stakeholder.name }}</h3>
                <p class="stakeholder-role">{{ stakeholder.roleKey | i18n }}</p>
              </div>
            </div>
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
  styles: [`
    /* General Reset */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .page-container {
      min-height: 100vh;
      background: white;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 40px;
    }

    /* Hero Section */
    .hero-section {
      background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
      color: white;
      padding: 100px 0;
      position: relative;
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

    .hero-grid {
      display: grid;
      grid-template-columns: 1fr auto 1.3fr;
      gap: 60px;
      align-items: center;
      position: relative;
      z-index: 1;
    }

    .hero-content-left h1 {
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 1.2;
      margin: 0;
      letter-spacing: 2px;
     color: #ffffff;
    }

    .vertical-line {
      width: 3px;
      height: 120px;
      background-color: #ffffff;
      display: block;
    }

    .hero-content-right p {
      font-size: 1.05rem;
      line-height: 1.8;
      opacity: 0.95;
      margin: 0;
    }

    /* Building Section */
    .building-section {
      background: white;
      padding: 80px 0;
    }

    .section-tag {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 25px;
    }

    .section-tag.centered {
      justify-content: center;
      margin-bottom: 30px;
    }

    .tag-line {
      width: 60px;
      height: 2px;
      background: #BF9874;
    }

    .section-tag span {
      font-size: 0.75rem;
      color: #BF9874;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 600;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1a1a1a;
      text-align: center;
      margin: 0 0 25px 0;
      letter-spacing: 1px;
    }

    .section-description {
      font-size: 1rem;
      line-height: 1.8;
      color: #666;
      text-align: center;
      max-width: 900px;
      margin: 0 auto 60px;
    }

    .section-subtitle {
      text-align: center;
      font-size: 0.85rem;
      color: #999;
      margin: -10px 0 20px 0;
    }

    /* Initiatives Section */
    .initiatives-section {
      background: linear-gradient(180deg, #fafafa 0%, #ffffff 100%);
      padding: 80px 0 100px;
    }

    /* Process Flow Container */
    .process-flow-container {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 3px;
      margin: 60px 0 80px;
      align-items: stretch;
    }

    .process-step {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
    }

    .step-number {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #c8956b 0%, #b8865b 100%);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      font-weight: 700;
      margin-bottom: 25px;
      box-shadow: 0 4px 12px rgba(200, 149, 107, 0.3);
      z-index: 2;
      position: relative;
    }

    .step-content {
      background: white;
      padding: 30px 25px;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      text-align: center;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      height: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .process-step:hover .step-content {
      transform: translateY(-8px);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
    }

    .step-icon-wrapper {
      width: 70px;
      height: 70px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .step-icon-wrapper svg {
      width: 35px;
      height: 35px;
      color: white;
    }

    .step-content h3 {
      font-size: 1.1rem;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0 0 15px 0;
      line-height: 1.3;
    }

    .step-content p {
      font-size: 0.9rem;
      color: #666;
      line-height: 1.7;
      margin: 0 0 20px 0;
      flex-grow: 1;
    }

    .step-badge {
      display: inline-block;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.7rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .step-badge.critical {
      background: #ffebee;
      color: #c41e3a;
    }

    .step-badge.high {
      background: #fff3e0;
      color: #f39c12;
    }

    .step-badge.medium {
      background: #e8f5e9;
      color: #4caf50;
    }

    .arrow-connector {
      position: absolute;
      top: 25px;
      left: calc(100% - 25px);
      width: 100px;
      height: 60px;
      z-index: 1;
      pointer-events: none;
    }

    .process-step.last-step .arrow-connector {
      display: none;
    }

    .completion-badge {
      position: absolute;
      top: 25px;
      left: calc(100% - 5px);
      width: 60px;
      height: 60px;
      animation: checkmark-pop 0.6s ease-out 0.5s both;
    }

    @keyframes checkmark-pop {
      0% {
        opacity: 0;
        transform: scale(0);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }

    /* Stakeholders Section */
    .stakeholders-section {
      background: #e8e8e8;
      padding: 80px 0;
    }

    .stakeholders-header {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      margin-bottom: 15px;
    }

    .header-line {
      height: 2px;
      width: 120px;
      background: linear-gradient(90deg, transparent, #c8956b);
    }

    .header-line.left {
      background: linear-gradient(90deg, transparent, #c8956b);
    }

    .header-line.right {
      background: linear-gradient(90deg, #c8956b, transparent);
    }

    .section-title-stakeholders {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1a1a1a;
      text-align: center;
      margin: 0;
      letter-spacing: 3px;
      text-transform: uppercase;
    }

    .section-subtitle {
      text-align: center;
      font-size: 0.9rem;
      color: #c8956b;
      margin: 0 0 50px 0;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-weight: 500;
    }

    .stakeholders-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 40px;
      margin-top: 50px;
    }

    .stakeholder-card {
      background: white;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .stakeholder-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }

    .stakeholder-image {
      position: relative;
      width: 100%;
      aspect-ratio: 3/4;
      background: #d0d0d0;
      overflow: hidden;
    }

    .stakeholder-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.4s ease;
    }

    .image-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100px;
      background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .stakeholder-card:hover .image-overlay {
      opacity: 1;
    }

    .stakeholder-card:hover .stakeholder-image img {
      transform: scale(1.05);
    }

    .stakeholder-info {
      padding: 25px 20px;
      text-align: center;
      background: white;
    }

    .stakeholder-info h3 {
      font-size: 1rem;
      color: #1a1a1a;
      font-weight: 700;
      margin: 0 0 8px 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .stakeholder-role {
      font-size: 0.85rem;
      color: #c8956b;
      font-weight: 500;
      margin: 0;
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

      .hero-content-left h1 {
        font-size: 4rem;
      }

      .section-title,
      .section-title-stakeholders {
        font-size: 3rem;
      }
    }

    /* Medium Desktop (1024px - 1280px) */
    @media (max-width: 1280px) {
      .hero-grid {
        gap: 45px;
      }

      .hero-content-left h1 {
        font-size: 3rem;
      }

      .process-flow-container {
        gap: 2px;
      }

      .arrow-connector {
        width: 80px;
        left: calc(100% - 20px);
      }

      .stakeholders-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;
      }
    }

    /* Tablet Landscape (900px - 1024px) */
    @media (max-width: 1024px) {
      .container {
        padding: 0 30px;
      }

      .hero-section {
        padding: 80px 0;
      }

      .hero-grid {
        grid-template-columns: 1fr auto 1fr;
        gap: 40px;
      }

      .hero-content-left h1 {
        font-size: 2.5rem;
      }

      .vertical-line {
        height: 100px;
      }

      .hero-content-right p {
        font-size: 1rem;
      }

      .building-section,
      .initiatives-section,
      .stakeholders-section {
        padding: 70px 0;
      }

      .section-title,
      .section-title-stakeholders {
        font-size: 2.2rem;
      }

      .section-description {
        font-size: 0.95rem;
        max-width: 800px;
      }

      .process-flow-container {
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin: 50px 0 60px;
      }

      .arrow-connector {
        display: none;
      }

      .completion-badge {
        display: none;
      }

      .stakeholders-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 25px;
      }

      .footer-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
      }
    }

    /* Tablet Portrait (768px - 900px) */
    @media (max-width: 900px) {
      .hero-section {
        padding: 70px 0;
      }

      .hero-grid {
        grid-template-columns: 1fr;
        gap: 30px;
        text-align: center;
      }

      .vertical-line {
        width: 100px;
        height: 2px;
        margin: 0 auto;
      }

      .hero-content-left h1 {
        font-size: 2.2rem;
      }

      .building-section,
      .initiatives-section,
      .stakeholders-section {
        padding: 60px 0;
      }

      .section-title,
      .section-title-stakeholders {
        font-size: 2rem;
      }

      .process-flow-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }

      .step-content {
        padding: 25px 20px;
      }

      .step-content h3 {
        font-size: 1rem;
      }

      .step-content p {
        font-size: 0.85rem;
      }

      .stakeholders-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }

      .stakeholders-header {
        gap: 20px;
      }

      .header-line {
        width: 80px;
      }

      .section-title-stakeholders {
        font-size: 1.8rem;
        letter-spacing: 2px;
      }

      .footer-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 35px;
      }
    }

    /* Mobile Landscape / Small Tablet (600px - 768px) */
    @media (max-width: 768px) {
      .container {
        padding: 0 25px;
      }

      .hero-section {
        padding: 60px 0;
      }

      .hero-content-left h1 {
        font-size: 2rem;
        letter-spacing: 1px;
      }

      .hero-content-right p {
        font-size: 0.95rem;
      }

      .vertical-line {
        width: 80px;
      }

      .building-section,
      .initiatives-section,
      .stakeholders-section {
        padding: 50px 0;
      }

      .section-tag {
        gap: 12px;
      }

      .tag-line {
        width: 50px;
      }

      .section-tag span {
        font-size: 0.7rem;
      }

      .section-title,
      .section-title-stakeholders {
        font-size: 1.8rem;
        margin-bottom: 20px;
      }

      .section-description {
        font-size: 0.9rem;
        margin-bottom: 40px;
      }

      .process-flow-container {
        grid-template-columns: 1fr;
        gap: 20px;
        margin: 40px 0 50px;
      }

      .step-number {
        width: 45px;
        height: 45px;
        font-size: 1.1rem;
        margin-bottom: 20px;
      }

      .step-icon-wrapper {
        width: 60px;
        height: 60px;
        margin-bottom: 15px;
      }

      .step-icon-wrapper svg {
        width: 30px;
        height: 30px;
      }

      .step-content h3 {
        font-size: 0.95rem;
        margin-bottom: 12px;
      }

      .step-content p {
        font-size: 0.8rem;
        margin-bottom: 15px;
      }

      .step-badge {
        padding: 5px 12px;
        font-size: 0.65rem;
      }

      .stakeholders-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .stakeholders-header {
        flex-direction: column;
        gap: 15px;
      }

      .header-line {
        width: 60px;
      }

      .section-title-stakeholders {
        font-size: 1.6rem;
      }

      .section-subtitle {
        font-size: 0.8rem;
        margin-bottom: 30px;
      }

      .stakeholder-info {
        padding: 20px 15px;
      }

      .stakeholder-info h3 {
        font-size: 0.95rem;
      }

      .stakeholder-role {
        font-size: 0.8rem;
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
        padding: 50px 0;
      }

      .hero-content-left h1 {
        font-size: 1.8rem;
      }

      .building-section,
      .initiatives-section,
      .stakeholders-section {
        padding: 45px 0;
      }

      .section-title,
      .section-title-stakeholders {
        font-size: 1.6rem;
      }

      .process-flow-container {
        margin: 35px 0 40px;
      }

      .step-content {
        padding: 20px 18px;
      }
    }

    /* Small Mobile (320px - 480px) */
    @media (max-width: 480px) {
      .container {
        padding: 0 20px;
      }

      .hero-section {
        padding: 40px 0;
      }

      .hero-content-left h1 {
        font-size: 1.6rem;
        letter-spacing: 0.5px;
      }

      .hero-content-right p {
        font-size: 0.9rem;
        line-height: 1.6;
      }

      .vertical-line {
        width: 60px;
      }

      .building-section,
      .initiatives-section,
      .stakeholders-section {
        padding: 40px 0;
      }

      .tag-line {
        width: 40px;
      }

      .section-tag span {
        font-size: 0.65rem;
      }

      .section-title {
        font-size: 1.5rem;
        margin-bottom: 18px;
      }

      .section-title-stakeholders {
        font-size: 1.4rem;
        letter-spacing: 1.5px;
      }

      .section-description {
        font-size: 0.85rem;
        margin-bottom: 35px;
      }

      .process-flow-container {
        margin: 30px 0 35px;
        gap: 18px;
      }

      .step-number {
        width: 40px;
        height: 40px;
        font-size: 1rem;
        margin-bottom: 18px;
      }

      .step-content {
        padding: 18px 15px;
      }

      .step-icon-wrapper {
        width: 55px;
        height: 55px;
        margin-bottom: 12px;
      }

      .step-icon-wrapper svg {
        width: 28px;
        height: 28px;
      }

      .step-content h3 {
        font-size: 0.9rem;
        margin-bottom: 10px;
      }

      .step-content p {
        font-size: 0.75rem;
        line-height: 1.6;
        margin-bottom: 12px;
      }

      .step-badge {
        padding: 4px 10px;
        font-size: 0.6rem;
      }

      .stakeholders-header {
        gap: 12px;
      }

      .header-line {
        width: 50px;
      }

      .section-subtitle {
        font-size: 0.75rem;
        margin-bottom: 25px;
      }

      .stakeholder-info {
        padding: 18px 12px;
      }

      .stakeholder-info h3 {
        font-size: 0.9rem;
        margin-bottom: 6px;
      }

      .stakeholder-role {
        font-size: 0.75rem;
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
      .hero-content-left h1 {
        font-size: 1.4rem;
      }

      .section-title {
        font-size: 1.3rem;
      }

      .section-title-stakeholders {
        font-size: 1.2rem;
        letter-spacing: 1px;
      }

      .step-content h3 {
        font-size: 0.85rem;
      }
    }

    /* Landscape Orientation for Mobile Devices */
    @media (max-height: 500px) and (orientation: landscape) {
      .hero-section {
        padding: 35px 0;
      }

      .hero-content-left h1 {
        font-size: 1.8rem;
      }

      .vertical-line {
        height: 60px;
      }

      .building-section,
      .initiatives-section,
      .stakeholders-section {
        padding: 35px 0;
      }
    }
  `]
})
export class ReformsComponent {
  stakeholders = [
    {
      name: 'BAGUNDA NSIMIRE',
      roleKey: 'reforms.stakeholders.roles.president',
      image: 'https://i.pravatar.cc/400?img=12'
    },
    {
      name: 'NDOMBA KABEYA',
      roleKey: 'reforms.stakeholders.roles.vicePresident',
      image: 'https://i.pravatar.cc/400?img=33'
    },
    {
      name: 'CHRISTINA WOCIN',
      roleKey: 'reforms.stakeholders.roles.chiefMagistrate',
      image: 'https://i.pravatar.cc/400?img=47'
    },
    {
      name: 'MUKENGULE MUDERHWA',
      roleKey: 'reforms.stakeholders.roles.internationalRelations',
      image: 'https://i.pravatar.cc/400?img=56'
    }
  ];
}
