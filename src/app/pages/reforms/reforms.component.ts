import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nPipe } from '../../i18n/i18n.pipe';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-reforms',
  standalone: true,
  imports: [CommonModule, I18nPipe, FooterComponent],
  template: `
    <div class="page-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-overlay"></div>
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
      background-image: url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop&q=80');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-color: #1E2E45;
      color: white;
      padding: 100px 0;
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
        radial-gradient(circle at 20% 30%, rgba(0, 127, 255, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(252, 209, 22, 0.12) 0%, transparent 50%),
        url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
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
      text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
    }

    .vertical-line {
      width: 3px;
      height: 120px;
      background: linear-gradient(
        180deg,
        transparent 0%,
        rgba(255, 255, 255, 0.8) 15%,
        rgba(0, 127, 255, 0.85) 50%,
        rgba(255, 255, 255, 0.8) 85%,
        transparent 100%
      );
      display: block;
      box-shadow: 0 0 20px rgba(0, 127, 255, 0.4);
    }

    .hero-content-right p {
      font-size: 1.05rem;
      line-height: 1.8;
      opacity: 0.95;
      margin: 0;
      text-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
    }

    /* Building Section - UPDATED ALIGNMENT */
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
      background: linear-gradient(90deg, transparent, #007FFF);
    }

    .section-tag span {
      font-size: 0.75rem;
      color: #007FFF;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 600;
    }

    /* Building Section Title - LEFT ALIGNED */
    .building-section .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1a1a1a;
      text-align: left;
      margin: 0 0 25px 0;
      letter-spacing: 1px;
    }

    /* Building Section Description - JUSTIFIED */
    .building-section .section-description {
      font-size: 1rem;
      line-height: 1.8;
      color: #007FFF;
      text-align: justify;
      max-width: 100%;
      margin: 0 0 60px 0;
    }

    /* Initiatives Section - Keeping centered alignment */
    .initiatives-section {
      background: linear-gradient(180deg, #fafafa 0%, #ffffff 100%);
      padding: 80px 0 100px;
    }

    .initiatives-section .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1a1a1a;
      text-align: center;
      margin: 0 0 25px 0;
      letter-spacing: 1px;
    }

    .initiatives-section .section-description {
      font-size: 1rem;
      line-height: 1.8;
      color: #007FFF;
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

    /* Stakeholders Section */
    .stakeholders-section {
      background: linear-gradient(180deg, #e8e8e8 0%, #f5f5f5 100%);
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

    /* ==================== RESPONSIVE MEDIA QUERIES ==================== */

    /* Large Desktop (1440px and above) */
    @media (min-width: 1440px) {
      .container {
        max-width: 1400px;
      }

      .hero-content-left h1 {
        font-size: 4rem;
      }

      .building-section .section-title {
        font-size: 3rem;
      }

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
        background-attachment: scroll;
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

      .building-section .section-title {
        font-size: 2.2rem;
      }

      .initiatives-section .section-title,
      .section-title-stakeholders {
        font-size: 2.2rem;
      }

      .building-section .section-description,
      .initiatives-section .section-description {
        font-size: 0.95rem;
      }

      .initiatives-section .section-description {
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

      .stakeholders-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 25px;
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
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), #007FFF, rgba(255, 255, 255, 0.8), transparent);
      }

      .hero-content-left h1 {
        font-size: 2.2rem;
      }

      .building-section,
      .initiatives-section,
      .stakeholders-section {
        padding: 60px 0;
      }

      .building-section .section-title {
        font-size: 2rem;
        text-align: left;
      }

      .building-section .section-description {
        text-align: justify;
      }

      .initiatives-section .section-title,
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

      .building-section .section-title {
        font-size: 1.8rem;
        margin-bottom: 20px;
        text-align: left;
      }

      .building-section .section-description {
        font-size: 0.9rem;
        margin-bottom: 40px;
        text-align: justify;
      }

      .initiatives-section .section-title,
      .section-title-stakeholders {
        font-size: 1.8rem;
        margin-bottom: 20px;
      }

      .initiatives-section .section-description {
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

      .building-section .section-title {
        font-size: 1.6rem;
        text-align: left;
      }

      .building-section .section-description {
        text-align: justify;
      }

      .initiatives-section .section-title,
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

      .building-section .section-title {
        font-size: 1.5rem;
        margin-bottom: 18px;
        text-align: left;
      }

      .building-section .section-description {
        font-size: 0.85rem;
        margin-bottom: 35px;
        text-align: justify;
      }

      .initiatives-section .section-title {
        font-size: 1.5rem;
        margin-bottom: 18px;
      }

      .initiatives-section .section-description {
        font-size: 0.85rem;
        margin-bottom: 35px;
      }

      .section-title-stakeholders {
        font-size: 1.4rem;
        letter-spacing: 1.5px;
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
    }

    /* Extra Small Mobile (below 375px) */
    @media (max-width: 375px) {
      .hero-content-left h1 {
        font-size: 1.4rem;
      }

      .building-section .section-title {
        font-size: 1.3rem;
        text-align: left;
      }

      .building-section .section-description {
        text-align: justify;
      }

      .initiatives-section .section-title {
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

    /* Reduce Motion for Accessibility */
    @media (prefers-reduced-motion: reduce) {
      .process-step:hover .step-content,
      .stakeholder-card:hover,
      .stakeholder-image img {
        transition: none;
        transform: none;
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