import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
  signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nPipe } from '../../i18n/i18n.pipe';
import Highcharts from 'highcharts';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-audiences',
  imports: [CommonModule, I18nPipe, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- LOADER -->
    <div class="loader" [class.out]="isPageLoaded()">
      <div class="loader-sphere">
        <div class="sphere-ring r1"></div>
        <div class="sphere-ring r2"></div>
        <div class="sphere-ring r3"></div>
        <div class="sphere-core">
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M32 8L16 16L16 32C16 44 24 52 32 56C40 52 48 44 48 32L48 16L32 8Z"/>
          </svg>
        </div>
      </div>
      <div class="loader-track"><div class="loader-fill"></div></div>
      <span class="loader-label">Initializing...</span>
    </div>

    <div class="cur-dot" #curDot></div>
    <div class="cur-ring" #curRing></div>
    <div class="cur-trail" #curTrail></div>

    <div class="page-wrap page-container">
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

          <!-- Monthly Hearing Metrics Section -->
          <div class="metrics-section">
            <div class="section-header">
              <div class="header-line"></div>
              <h2>{{ 'audiences.metrics.title' | i18n }}</h2>
            </div>
            <p class="section-subtitle">{{ 'audiences.metrics.subtitle' | i18n }}</p>

            <div class="metrics-grid">
              <div class="metrics-card glass-card tilt-card" style="--i:0" (mousemove)="tilt($event)" (mouseleave)="tiltReset($event)">
                <div class="tilt-shine"></div>
                <div class="metrics-card-header">
                  <h3>{{ 'audiences.metrics.volume.title' | i18n }}</h3>
                  <span class="metrics-note anim-label-pulse">{{ 'audiences.metrics.volume.note' | i18n }}</span>
                </div>
                <div
                  #monthlyVolumeChart
                  class="metrics-chart"
                  role="img"
                  [attr.aria-label]="'audiences.metrics.volume.aria' | i18n">
                </div>
              </div>

              <div class="metrics-card glass-card tilt-card" style="--i:1" (mousemove)="tilt($event)" (mouseleave)="tiltReset($event)">
                <div class="tilt-shine"></div>
                <div class="metrics-card-header">
                  <h3>{{ 'audiences.metrics.outcomes.title' | i18n }}</h3>
                  <span class="metrics-note anim-label-pulse">{{ 'audiences.metrics.outcomes.note' | i18n }}</span>
                </div>
                <div
                  #outcomesChart
                  class="metrics-chart"
                  role="img"
                  [attr.aria-label]="'audiences.metrics.outcomes.aria' | i18n">
                </div>
              </div>
            </div>
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
              <div class="document-card glass-card tilt-card" style="--i:0" (mousemove)="tilt($event)" (mouseleave)="tiltReset($event)">
                <div class="tilt-shine"></div>
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
                    <span class="label-text">{{ 'audiences.documents.civil.label' | i18n }}</span>
                    <span class="label-date">18/01/26</span>
                  </div>
                </div>
                <div class="document-info">
                  <h3>{{ 'audiences.documents.civil.title' | i18n }}</h3>
                  <button class="download-btn mag-btn" (mousemove)="mag($event)" (mouseleave)="magOut($event)" (click)="ripple($event)">
                    <span>{{ 'audiences.actions.downloadPdf' | i18n }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Document Card 2 -->
              <div class="document-card glass-card tilt-card" style="--i:1" (mousemove)="tilt($event)" (mouseleave)="tiltReset($event)">
                <div class="tilt-shine"></div>
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
                    <span class="label-text">{{ 'audiences.documents.criminal.label' | i18n }}</span>
                    <span class="label-date">18/01/26</span>
                  </div>
                </div>
                <div class="document-info">
                  <h3>{{ 'audiences.documents.criminal.title' | i18n }}</h3>
                  <button class="download-btn mag-btn" (mousemove)="mag($event)" (mouseleave)="magOut($event)" (click)="ripple($event)">
                    <span>{{ 'audiences.actions.downloadPdf' | i18n }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Document Card 3 -->
              <div class="document-card glass-card tilt-card" style="--i:2" (mousemove)="tilt($event)" (mouseleave)="tiltReset($event)">
                <div class="tilt-shine"></div>
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
                    <span class="label-text">{{ 'audiences.documents.social.label' | i18n }}</span>
                    <span class="label-date">12/01/26</span>
                  </div>
                </div>
                <div class="document-info">
                  <h3>{{ 'audiences.documents.social.title' | i18n }}</h3>
                  <button class="download-btn mag-btn" (mousemove)="mag($event)" (mouseleave)="magOut($event)" (click)="ripple($event)">
                    <span>{{ 'audiences.actions.downloadPdf' | i18n }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Document Card 4 -->
              <div class="document-card glass-card tilt-card" style="--i:3" (mousemove)="tilt($event)" (mouseleave)="tiltReset($event)">
                <div class="tilt-shine"></div>
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
                    <span class="label-text">{{ 'audiences.documents.general.label' | i18n }}</span>
                    <span class="label-date">08/01/26</span>
                  </div>
                </div>
                <div class="document-info">
                  <h3>{{ 'audiences.documents.general.title' | i18n }}</h3>
                  <button class="download-btn mag-btn" (mousemove)="mag($event)" (mouseleave)="magOut($event)" (click)="ripple($event)">
                    <span>{{ 'audiences.actions.downloadPdf' | i18n }}</span>
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
            <button class="contact-btn mag-btn" (mousemove)="mag($event)" (mouseleave)="magOut($event)" (click)="ripple($event)">
              <span>{{ 'audiences.assistance.cta' | i18n }}</span>
            </button>
          </div>
        </div>
      </section>

      <app-footer></app-footer>
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
  position: relative;
  min-height: 400px;
  background-image: url('https://plus.unsplash.com/premium_photo-1706546717570-865a9430bb34?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  overflow: hidden;
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

      /* VERTICAL LINE HERO GRID - Desktop */
      .hero-grid {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        gap: 50px;
        align-items: center;
      }

      .hero-title {
        position: relative;
        text-align: left;
      }

      /* VERTICAL LINE SEPARATOR */
      .vertical-line {
        width: 2px;
        height: 180px;
        background: linear-gradient(to bottom,
          transparent 0%,
          rgba(255, 255, 255, 0.2) 10%,
          rgba(255, 255, 255, 0.5) 30%,
          rgba(255, 255, 255, 0.8) 50%,
          rgba(255, 255, 255, 0.5) 70%,
          rgba(255, 255, 255, 0.2) 90%,
          transparent 100%);
        position: relative;
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
      }

      .vertical-line::before,
      .vertical-line::after {
        content: '';
        left: 50%;
        transform: translateX(-50%);
        width: 10px;
        height: 10px;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 50%;
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
      }

      .hero-description {
        padding-left: 0;
        text-align: left;
        color: #ffffff;
      }

      .hero-title h1 {
        font-size: 3.6rem;
        font-weight: 700;
        line-height: 1.05;
        margin: 0;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #ffffff;
      }

      .hero-description p {
        font-size: 1.05rem;
        line-height: 1.9;
        opacity: 0.95;
        margin: 0;
        font-weight: 300;
        color: #ffffff;
      }

      /* Content Section */
      .content-section {
        padding: 100px 0 80px;
        background: #fafafa;
      }

      /* Understanding Audiences Section */
      .understanding-section {
        margin-bottom: 100px;
        background: transparent;
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
        text-align: left;
      }

      /* Metrics Section */
      .metrics-section {
        margin-bottom: 90px;
      }

      .metrics-section h2 {
        font-size: 2.5rem;
        color: #1a1a1a;
        margin: 0;
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: uppercase;
      }

      .metrics-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 28px;
        margin-bottom: 70px;
      }

      .metrics-card {
        background: white;
        border: 1px solid rgba(26, 41, 66, 0.08);
        box-shadow: 0 12px 26px rgba(26, 41, 66, 0.12);
        padding: 22px 22px 16px;
      }

      .metrics-card-header {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 12px;
      }

      .metrics-card-header h3 {
        font-size: 1.05rem;
        font-weight: 600;
        color: #1a1a1a;
        margin: 0;
      }

      .metrics-note {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #c9a961;
        font-weight: 600;
        white-space: nowrap;
      }

      .metrics-chart {
        width: 100%;
        height: 260px;
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
        color: #FCD116 !important;
        margin: 0 0 60px 0;
        text-transform: uppercase;
        letter-spacing: 2.5px;
        font-weight: 400;
        text-align: left !important;
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
        gap: 8px;
        flex-wrap: wrap;
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

      .assistance-content {
        flex: 1;
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
        background: #007FFF;
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
        flex-shrink: 0;
      }

      .contact-btn:hover {
        background: #005CBF;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 127, 255, 0.3);
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

      .understanding-section p {
        text-align: left;  /* Changed from 'justify' to 'left' */
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
        color: #007FFF;
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
        background-color: #007FFF;
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
        color: #007FFF;
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
          gap: 40px;
        }

        .vertical-line {
          height: 160px;
        }

        .schedules-section h2 {
          font-size: 2.2rem;
        }

        .documents-grid {
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .metrics-grid {
          grid-template-columns: 1fr;
        }

        .metrics-chart {
          height: 240px;
        }

        .document-preview {
          height: 280px;
        }
      }

      /* Tablets (768px - 1023px) - CHANGE TO HORIZONTAL LINE */
      @media (max-width: 1023px) {
        .hero-section {
          padding: 100px 0;
        }

        /* SWITCH TO SINGLE COLUMN + HORIZONTAL LINE */
        .hero-grid {
          grid-template-columns: 1fr;
          gap: 30px;
          text-align: center;
        }

        .hero-title {
          text-align: center;
        }

        .hero-description {
          text-align: center;
        }

        /* HORIZONTAL LINE FOR TABLET/MOBILE */
        .vertical-line {
          width: 150px;
          height: 2px;
          margin: 0 auto;
          background: linear-gradient(to right,
            transparent 0%,
            rgba(255, 255, 255, 0.2) 10%,
            rgba(255, 255, 255, 0.5) 30%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(255, 255, 255, 0.5) 70%,
            rgba(255, 255, 255, 0.2) 90%,
            transparent 100%);
        }

        .vertical-line::before {
          top: 50%;
          left: -5px;
          transform: translate(0, -50%);
        }

        .vertical-line::after {
          top: 50%;
          left: auto;
          right: -5px;
          transform: translate(0, -50%);
        }

        .hero-title h1 {
          font-size: 3.2rem;
          letter-spacing: 1.5px;
        }

        .hero-description p {
          font-size: 1rem;
        }

        .content-section {
          padding: 80px 0 60px;
        }

        .understanding-section {
          margin-bottom: 80px;
        }

        .metrics-section {
          margin-bottom: 70px;
        }

        .metrics-section h2 {
          font-size: 2rem;
        }

        .understanding-section h2 {
          font-size: 1.8rem;
        }

        .understanding-section p {
          font-size: 0.95rem;
        }

        .schedules-section {
          margin-bottom: 60px;
        }

        .schedules-section h2 {
          font-size: 2rem;
        }

        .documents-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
          margin-bottom: 60px;
        }

        .metrics-grid {
          gap: 22px;
          margin-bottom: 60px;
        }

        .document-preview {
          height: 260px;
        }

        .assistance-section {
          padding: 45px 50px;
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

      /* Mobile Landscape & Small Tablets (576px - 767px) */
      @media (max-width: 767px) {
        .container {
          padding: 0 20px;
        }

        .hero-section {
          padding: 80px 0;
        }

        .hero-grid {
          gap: 25px;
        }

        .hero-title h1 {
          font-size: 2.5rem;
          letter-spacing: 2px;
        }

        .vertical-line {
          width: 100px;
        }

        .hero-description p {
          font-size: 0.95rem;
          line-height: 1.7;
        }

        .content-section {
          padding: 60px 0 50px;
        }

        .understanding-section {
          margin-bottom: 60px;
        }

        .metrics-section {
          margin-bottom: 60px;
        }

        .metrics-section h2 {
          font-size: 1.8rem;
        }

        .understanding-section h2 {
          font-size: 1.6rem;
          margin-bottom: 20px;
        }

        .understanding-section p {
          font-size: 0.9rem;
          text-align: left;
        }

        .schedules-section {
          margin-bottom: 50px;
        }

        .section-header {
          gap: 20px;
          flex-wrap: wrap;
        }

        .schedules-section h2 {
          font-size: 1.8rem;
        }

        .header-line {
          flex: 0 0 50px;
        }

        .section-subtitle {
          font-size: 0.75rem;
          margin-bottom: 40px;
          text-align: left;
          color: #FCD116 !important;
        }

        .documents-grid {
          grid-template-columns: 1fr;
          gap: 24px;
          margin-bottom: 50px;
        }

        .metrics-card {
          padding: 20px 18px 14px;
        }

        .metrics-chart {
          height: 220px;
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
          padding: 10px 18px;
          font-size: 0.75rem;
        }

        .assistance-section {
          flex-direction: column;
          padding: 40px 30px;
          gap: 30px;
          text-align: center;
        }

        .assistance-content h2 {
          font-size: 1.5rem;
        }

        .assistance-content p {
          font-size: 0.95rem;
        }

        .contact-btn {
          width: 100%;
          padding: 14px 30px;
        }

        .footer-logo-wrapper {
          width: 100px;
          height: 100px;
          top: -35px;
        }

        .footer-grid {
          grid-template-columns: 1fr;
          gap: 35px;
        }

        .footer-bottom-content {
          flex-direction: column;
          gap: 15px;
          text-align: center;
        }

        .social-icons {
          justify-content: center;
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
          width: 80px;
        }

        .hero-description p {
          font-size: 0.9rem;
        }

        .content-section {
          padding: 50px 0 40px;
        }

        .understanding-section {
          margin-bottom: 50px;
        }

        .metrics-section {
          margin-bottom: 50px;
        }

        .metrics-section h2 {
          font-size: 1.5rem;
        }

        .understanding-section h2 {
          font-size: 1.4rem;
          margin-bottom: 18px;
        }

        .understanding-section p {
          font-size: 0.85rem;
          line-height: 1.8;
        }

        .schedules-section {
          margin-bottom: 40px;
        }

        .section-header {
          gap: 15px;
        }

        .schedules-section h2 {
          font-size: 1.5rem;
        }

        .header-line {
          flex: 0 0 40px;
        }

        .section-subtitle {
          font-size: 0.7rem;
          letter-spacing: 2px;
          margin-bottom: 35px;
          color: #FCD116 !important;
        }

        .documents-grid {
          gap: 20px;
          margin-bottom: 40px;
        }

        .metrics-card-header {
          flex-direction: column;
          align-items: flex-start;
        }

        .metrics-note {
          white-space: normal;
        }

        .metrics-chart {
          height: 200px;
        }

        .document-preview {
          height: 220px;
        }

        .document-info {
          padding: 18px 16px;
        }

        .document-info h3 {
          font-size: 0.95rem;
          margin-bottom: 16px;
        }

        .download-btn {
          padding: 10px 16px;
          font-size: 0.7rem;
          letter-spacing: 0.5px;
        }

        .download-btn svg {
          width: 16px;
          height: 16px;
        }

        .assistance-section {
          padding: 35px 25px;
          gap: 25px;
        }

        .assistance-content h2 {
          font-size: 1.3rem;
        }

        .assistance-content p {
          font-size: 0.9rem;
        }

        .contact-btn {
          padding: 12px 25px;
          font-size: 0.8rem;
        }

        .footer-logo-wrapper {
          width: 90px;
          height: 90px;
          top: -30px;
        }

        .footer-main {
          padding: 50px 0 30px;
        }

        .footer-grid {
          gap: 30px;
          padding-top: 30px;
        }

        .footer-column h3 {
          font-size: 1rem;
        }

        .footer-column p,
        .footer-column ul li a {
          font-size: 0.85rem;
        }

        .footer-bottom {
          padding: 20px 0;
        }

        .copyright,
        .privacy-link {
          font-size: 0.8rem;
        }

        .social-icon {
          width: 32px;
          height: 32px;
        }
      }

      /* Extra Small Devices (up to 374px) */
      @media (max-width: 374px) {
        .hero-title h1 {
          font-size: 1.8rem;
        }

        .understanding-section h2 {
          font-size: 1.3rem;
        }

        .metrics-section h2 {
          font-size: 1.3rem;
        }

        .schedules-section h2 {
          font-size: 1.3rem;
        }

        .header-line {
          flex: 0 0 30px;
        }

        .document-preview {
          height: 200px;
        }

        .document-info {
          padding: 16px 14px;
        }

        .document-info h3 {
          font-size: 0.9rem;
        }

        .download-btn {
          padding: 8px 14px;
          font-size: 0.65rem;
        }

        .assistance-section {
          padding: 30px 20px;
        }

        .assistance-content h2 {
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
          padding: 60px 0;
        }

        .content-section {
          padding: 40px 0 35px;
        }
      }

      /* Reduce Motion for Accessibility */
      @media (prefers-reduced-motion: reduce) {
        .document-card,
        .contact-btn,
        .social-icon,
        .download-btn {
          transition: none;
        }

        .document-card:hover,
        .contact-btn:hover {
          transform: none;
        }

        .document-card:hover .document-preview img {
          transform: none;
        }
      }

      /* Home-style: loader, cursor, tilt, labelPulse, mag, ripple */
      @keyframes fillBar{0%{width:0}60%{width:70%}100%{width:100%}}
      @keyframes labelPulse{0%,100%{opacity:.4;letter-spacing:2px}50%{opacity:1;letter-spacing:5px}}
      @keyframes rOrbit1{from{transform:rotateX(65deg) rotateZ(0)}to{transform:rotateX(65deg) rotateZ(360deg)}}
      @keyframes rOrbit2{from{transform:rotateX(65deg) rotateZ(120deg)}to{transform:rotateX(65deg) rotateZ(480deg)}}
      @keyframes rOrbit3{from{transform:rotateX(65deg) rotateZ(240deg)}to{transform:rotateX(65deg) rotateZ(600deg)}}
      @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
      @keyframes shimmerSweep{from{transform:translateX(-120%) skewX(-20deg)}to{transform:translateX(220%) skewX(-20deg)}}
      @keyframes rippleAnim{to{transform:scale(1);opacity:0}}
      @keyframes cardIn{from{opacity:0;transform:translateY(40px) rotateX(20deg) scale(.94)}to{opacity:1;transform:translateY(0) rotateX(0) scale(1)}}
      .page-wrap{cursor:none;}
      .loader{position:fixed;inset:0;background:linear-gradient(135deg,#080e1a,#1a2942);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:32px;z-index:9999;transition:opacity .7s ease,visibility .7s ease,transform .7s ease;}
      .loader.out{opacity:0;visibility:hidden;transform:scale(1.06);pointer-events:none;}
      .loader-sphere{width:120px;height:120px;position:relative;display:flex;align-items:center;justify-content:center;}
      .sphere-ring{position:absolute;inset:0;border-radius:50%;border:1px solid rgba(252,209,22,.35);}
      .loader .r1{inset:10px;animation:rOrbit1 2.5s linear infinite;}
      .loader .r2{inset:0;animation:rOrbit2 3.5s linear infinite;}
      .loader .r3{inset:-12px;animation:rOrbit3 5s linear infinite;}
      .sphere-core{width:52px;height:52px;border-radius:50%;background:radial-gradient(circle,rgba(252,209,22,.25),rgba(252,209,22,.05));border:1px solid rgba(252,209,22,.5);display:flex;align-items:center;justify-content:center;color:#FCD116;box-shadow:0 0 30px rgba(252,209,22,.3);animation:float 3s ease-in-out infinite;}
      .sphere-core svg{width:30px;height:30px;}
      .loader-track{width:220px;height:3px;background:rgba(255,255,255,.08);border-radius:99px;overflow:hidden;}
      .loader-fill{height:100%;background:linear-gradient(90deg,#FCD116,#FFE066);border-radius:99px;animation:fillBar 2s ease-in-out infinite;}
      .loader-label{font-size:.72rem;font-weight:700;letter-spacing:2px;color:#FCD116;text-transform:uppercase;animation:labelPulse 2s ease-in-out infinite;}
      .cur-dot{position:fixed;width:8px;height:8px;border-radius:50%;background:#FCD116;pointer-events:none;z-index:99999;transform:translate(-50%,-50%);}
      .cur-ring{position:fixed;width:38px;height:38px;border-radius:50%;border:2px solid rgba(252,209,22,.55);pointer-events:none;z-index:99998;transform:translate(-50%,-50%);transition:width .25s,height .25s,border-color .25s;}
      .cur-trail{position:fixed;width:80px;height:80px;border-radius:50%;border:1px solid rgba(252,209,22,.15);pointer-events:none;z-index:99997;transform:translate(-50%,-50%);transition:width .4s,height .4s;}
      .page-wrap:has(button:hover) .cur-ring,.page-wrap:has(a:hover) .cur-ring{width:56px;height:56px;border-color:rgba(252,209,22,.9);}
      .anim-label-pulse{animation:labelPulse 3s ease-in-out infinite;}
      .tilt-card{transform-style:preserve-3d;position:relative;overflow:hidden;transition:transform .5s cubic-bezier(.23,1,.32,1),box-shadow .5s ease;opacity:0;animation:cardIn .7s cubic-bezier(.23,1,.32,1) calc(var(--i,0)*.1s) forwards;}
      .tilt-shine{position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:10;background:linear-gradient(105deg,transparent 45%,rgba(255,255,255,.18) 50%,transparent 55%);transform:translateX(-120%) skewX(-20deg);}
      .mag-btn{position:relative;overflow:hidden;transition:transform .25s ease;}
      .mag-btn::before{content:'';position:absolute;inset:0;background:linear-gradient(105deg,transparent 40%,rgba(255,255,255,.2) 50%,transparent 60%);transform:translateX(-120%) skewX(-20deg);pointer-events:none;}
      .mag-btn:hover::before{animation:shimmerSweep .6s ease forwards;}
    `
  ]
})
export class AudiencesComponent implements OnInit, AfterViewInit {
  @ViewChild('monthlyVolumeChart', { static: true })
  monthlyVolumeChart!: ElementRef<HTMLDivElement>;

  @ViewChild('outcomesChart', { static: true })
  outcomesChart!: ElementRef<HTMLDivElement>;

  @ViewChild('curDot') curDot!: ElementRef<HTMLDivElement>;
  @ViewChild('curRing') curRing!: ElementRef<HTMLDivElement>;
  @ViewChild('curTrail') curTrail!: ElementRef<HTMLDivElement>;

  private readonly destroyRef = inject(DestroyRef);
  private chartInstances: Highcharts.Chart[] = [];
  private resizeObserver?: ResizeObserver;
  private rafId?: number;
  private curRx = 0; private curRy = 0;
  private trailRx = 0; private trailRy = 0;
  private readonly handleVisibilityChange = () => {
    if (!document.hidden) {
      this.reflowCharts();
    }
  };

  isPageLoaded = signal(false);

  ngOnInit() {
    setTimeout(() => this.isPageLoaded.set(true), 1800);
    this.destroyRef.onDestroy(() => { if (this.rafId) cancelAnimationFrame(this.rafId); });
  }

  ngAfterViewInit() {
    this.renderAudienceCharts();
    this.setupChartObservers([this.monthlyVolumeChart, this.outcomesChart]);
    this.initCursor();
    this.destroyRef.onDestroy(() => {
      this.chartInstances.forEach(chart => chart.destroy());
      this.chartInstances = [];
      document.removeEventListener('visibilitychange', this.handleVisibilityChange);
      this.resizeObserver?.disconnect();
      this.resizeObserver = undefined;
      if (this.rafId) cancelAnimationFrame(this.rafId);
    });
  }

  private initCursor() {
    const dot = this.curDot?.nativeElement;
    const ring = this.curRing?.nativeElement;
    const trail = this.curTrail?.nativeElement;
    if (!dot || !ring || !trail) return;
    let mx = 0, my = 0;
    document.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; dot.style.left = mx + 'px'; dot.style.top = my + 'px'; });
    const anim = () => {
      this.curRx += (mx - this.curRx) * 0.14;
      this.curRy += (my - this.curRy) * 0.14;
      this.trailRx += (mx - this.trailRx) * 0.07;
      this.trailRy += (my - this.trailRy) * 0.07;
      ring.style.left = this.curRx + 'px'; ring.style.top = this.curRy + 'px';
      trail.style.left = this.trailRx + 'px'; trail.style.top = this.trailRy + 'px';
      this.rafId = requestAnimationFrame(anim);
    };
    requestAnimationFrame(anim);
    document.querySelectorAll('.page-wrap button,.page-wrap a').forEach(el => {
      el.addEventListener('mouseenter', () => { ring.style.width = '56px'; ring.style.height = '56px'; ring.style.borderColor = 'rgba(252,209,22,.9)'; trail.style.width = '90px'; trail.style.height = '90px'; });
      el.addEventListener('mouseleave', () => { ring.style.width = '38px'; ring.style.height = '38px'; ring.style.borderColor = 'rgba(252,209,22,.55)'; trail.style.width = '80px'; trail.style.height = '80px'; });
    });
  }

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

  private setupChartObservers(containers: ElementRef<HTMLDivElement>[]) {
    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => this.reflowCharts());
      containers.forEach(container => this.resizeObserver?.observe(container.nativeElement));
    }

    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  }

  private reflowCharts() {
    this.chartInstances.forEach(chart => chart.reflow());
  }

  private renderAudienceCharts() {
    const axisLabelStyle = {
      color: '#007FFF',
      fontSize: '11px'
    };

    const months = ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'];

    const volumeOptions: Highcharts.Options = {
      chart: {
        type: 'column',
        backgroundColor: 'transparent',
        height: 260,
        spacing: [10, 10, 0, 10]
      },
      title: { text: undefined },
      credits: { enabled: false },
      legend: { enabled: false },
      xAxis: {
        categories: months,
        labels: { style: axisLabelStyle },
        lineColor: 'rgba(26, 41, 66, 0.12)',
        tickColor: 'rgba(26, 41, 66, 0.12)'
      },
      yAxis: {
        title: { text: undefined },
        labels: { style: axisLabelStyle },
        gridLineColor: 'rgba(26, 41, 66, 0.08)'
      },
      tooltip: {
        backgroundColor: '#1a1a1a',
        style: { color: '#ffffff' },
        borderColor: '#1a1a1a'
      },
      series: [
        {
          type: 'column',
          name: 'Hearings',
          data: [120, 135, 150, 142, 168, 176],
          color: '#c9a961',
          borderRadius: 4
        }
      ]
    };

    const outcomesOptions: Highcharts.Options = {
      chart: {
        type: 'area',
        backgroundColor: 'transparent',
        height: 260,
        spacing: [10, 10, 0, 10]
      },
      title: { text: undefined },
      credits: { enabled: false },
      legend: {
        align: 'center',
        verticalAlign: 'bottom',
        itemStyle: { color: '#1a1a1a', fontWeight: '600' }
      },
      xAxis: {
        categories: months,
        labels: { style: axisLabelStyle },
        lineColor: 'rgba(26, 41, 66, 0.12)',
        tickColor: 'rgba(26, 41, 66, 0.12)'
      },
      yAxis: {
        title: { text: undefined },
        labels: { style: axisLabelStyle },
        gridLineColor: 'rgba(26, 41, 66, 0.08)'
      },
      tooltip: {
        backgroundColor: '#1a1a1a',
        style: { color: '#ffffff' },
        borderColor: '#1a1a1a',
        shared: true
      },
      plotOptions: {
        area: {
          stacking: 'normal',
          marker: { radius: 3 }
        }
      },
      series: [
        {
          type: 'area',
          name: 'Decisions rendered',
          data: [54, 61, 70, 66, 78, 82],
          color: 'rgba(26, 41, 66, 0.7)'
        },
        {
          type: 'area',
          name: 'Adjourned',
          data: [36, 38, 42, 40, 45, 47],
          color: 'rgba(0, 127, 255, 0.7)'
        },
        {
          type: 'area',
          name: 'Dismissed',
          data: [22, 24, 26, 24, 28, 29],
          color: 'rgba(90, 113, 132, 0.7)'
        }
      ]
    };

    this.chartInstances = [
      Highcharts.chart(this.monthlyVolumeChart.nativeElement, volumeOptions),
      Highcharts.chart(this.outcomesChart.nativeElement, outcomesOptions)
    ];
  }
}
