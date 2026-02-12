import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { I18nPipe } from '../../i18n/i18n.pipe';

@Component({
  selector: 'app-steps',
  imports: [CommonModule, I18nPipe],
  template: `
    <div class="page-container">
      <!-- Hero Section - Changes based on active tab -->
      @if (activeTab() === 'report') {
        <section class="hero-section">
          <div class="container">
            <div class="hero-grid">
              <div class="hero-left">
                <h1>{{ 'steps.hero.report.title' | i18n }}</h1>
              </div>
              <div class="vertical-line"></div>
              <div class="hero-right">
                <p>{{ 'steps.hero.report.body' | i18n }}</p>
              </div>
            </div>
          </div>
        </section>
      }

      @if (activeTab() === 'appointment') {
        <section class="hero-section">
          <div class="container">
            <div class="hero-grid">
              <div class="hero-left">
                <h1 [innerHTML]="'steps.hero.appointment.title' | i18n"></h1>
              </div>
              <div class="vertical-line"></div>
              <div class="hero-right">
                <p>{{ 'steps.hero.appointment.body' | i18n }}</p>
              </div>
            </div>
          </div>
        </section>
      }

      @if (activeTab() === 'appeal') {
        <section class="hero-section">
          <div class="container">
            <div class="hero-grid">
              <div class="hero-left">
                <h1 [innerHTML]="'steps.hero.appeal.title' | i18n"></h1>
              </div>
              <div class="vertical-line"></div>
              <div class="hero-right">
                <p>{{ 'steps.hero.appeal.body1' | i18n }}</p>
                <p>{{ 'steps.hero.appeal.body2' | i18n }}</p>
              </div>
            </div>
          </div>
        </section>
      }

      <!-- Tab Navigation -->
      <section class="tabs-section">
        <div class="container">
          <div class="tabs">
            <button
              (click)="activeTab.set('report')"
              [class.active]="activeTab() === 'report'"
              class="tab">
              {{ 'steps.tabs.report' | i18n }}
            </button>
            <div class="tab-separator"></div>
            <button
              (click)="activeTab.set('appointment')"
              [class.active]="activeTab() === 'appointment'"
              class="tab">
              {{ 'steps.tabs.appointment' | i18n }}
            </button>
            <div class="tab-separator"></div>
            <button
              (click)="activeTab.set('appeal')"
              [class.active]="activeTab() === 'appeal'"
              class="tab">
              {{ 'steps.tabs.appeal' | i18n }}
            </button>
          </div>
        </div>
      </section>

      <!-- Form Section -->
      <section class="form-section">
        <div class="container">
          <!-- Report Form -->
          @if (activeTab() === 'report') {
            <div class="form-header">
              <h2>{{ 'steps.forms.report.title' | i18n }}</h2>
              <p class="form-subtitle">{{ 'steps.forms.report.subtitle' | i18n }}</p>
            </div>

            <form class="complaint-form">
              <div class="form-row">
                <div class="form-group">
                  <input type="text" [placeholder]="'steps.forms.fullName' | i18n" required>
                </div>
                <div class="form-group">
                  <input type="email" [placeholder]="'steps.forms.email' | i18n" required>
                </div>
              </div>

              <div class="form-group">
                <select required>
                  <option value="">{{ 'steps.forms.department' | i18n }}</option>
                  <option value="criminal">{{ 'steps.forms.chambers.criminal' | i18n }}</option>
                  <option value="civil">{{ 'steps.forms.chambers.civil' | i18n }}</option>
                  <option value="social">{{ 'steps.forms.chambers.social' | i18n }}</option>
                  <option value="commercial">{{ 'steps.forms.chambers.commercial' | i18n }}</option>
                </select>
              </div>

              <div class="form-group">
                <textarea [placeholder]="'steps.forms.message' | i18n" rows="6" required></textarea>
              </div>

              <div class="form-submit">
                <button type="submit">{{ 'steps.forms.submit' | i18n }}</button>
              </div>
            </form>
          }

          <!-- Appointment Form -->
          @if (activeTab() === 'appointment') {
            <div class="form-header">
              <h2>{{ 'steps.forms.appointment.title' | i18n }}</h2>
              <p class="form-subtitle">{{ 'steps.forms.appointment.subtitle' | i18n }}</p>
            </div>

            <form class="appointment-form">
              <div class="form-row">
                <div class="form-group">
                  <input type="text" [placeholder]="'steps.forms.fullName' | i18n" required>
                </div>
                <div class="form-group">
                  <input type="email" [placeholder]="'steps.forms.email' | i18n" required>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <select required>
                    <option value="">{{ 'steps.forms.department' | i18n }}</option>
                    <option value="criminal">{{ 'steps.forms.chambers.criminal' | i18n }}</option>
                    <option value="civil">{{ 'steps.forms.chambers.civil' | i18n }}</option>
                    <option value="social">{{ 'steps.forms.chambers.social' | i18n }}</option>
                    <option value="commercial">{{ 'steps.forms.chambers.commercial' | i18n }}</option>
                  </select>
                </div>
                <div class="form-group">
                  <select required>
                    <option value="">{{ 'steps.forms.meeting.placeholder' | i18n }}</option>
                    <option value="first-president">{{ 'steps.forms.meeting.firstPresident' | i18n }}</option>
                    <option value="chamber-president">{{ 'steps.forms.meeting.chamberPresident' | i18n }}</option>
                    <option value="legal-advisor">{{ 'steps.forms.meeting.legalAdvisor' | i18n }}</option>
                    <option value="clerk">{{ 'steps.forms.meeting.clerk' | i18n }}</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <select required>
                  <option value="">{{ 'steps.forms.visit.placeholder' | i18n }}</option>
                  <option value="this-week">{{ 'steps.forms.visit.thisWeek' | i18n }}</option>
                  <option value="next-week">{{ 'steps.forms.visit.nextWeek' | i18n }}</option>
                  <option value="this-month">{{ 'steps.forms.visit.thisMonth' | i18n }}</option>
                  <option value="next-month">{{ 'steps.forms.visit.nextMonth' | i18n }}</option>
                </select>
              </div>

              <div class="form-group">
                <textarea [placeholder]="'steps.forms.message' | i18n" rows="6" required></textarea>
              </div>

              <div class="form-submit">
                <button type="submit">{{ 'steps.forms.submit' | i18n }}</button>
              </div>
            </form>
          }

          <!-- Appeal Form -->
          @if (activeTab() === 'appeal') {
            <div class="form-header">
              <h2>{{ 'steps.forms.appeal.title' | i18n }}</h2>
              <p class="form-subtitle">{{ 'steps.forms.appeal.subtitle' | i18n }}</p>
            </div>

            <form class="appeal-form">
              <div class="form-row">
                <div class="form-group">
                  <input type="text" [placeholder]="'steps.forms.fullName' | i18n" required>
                </div>
                <div class="form-group">
                  <input type="email" [placeholder]="'steps.forms.email' | i18n" required>
                </div>
              </div>

              <div class="form-group">
                <select required>
                  <option value="">{{ 'steps.forms.department' | i18n }}</option>
                  <option value="criminal">{{ 'steps.forms.chambers.criminal' | i18n }}</option>
                  <option value="civil">{{ 'steps.forms.chambers.civil' | i18n }}</option>
                  <option value="social">{{ 'steps.forms.chambers.social' | i18n }}</option>
                  <option value="commercial">{{ 'steps.forms.chambers.commercial' | i18n }}</option>
                </select>
              </div>

              <div class="form-group">
                <textarea [placeholder]="'steps.forms.message' | i18n" rows="6" required></textarea>
              </div>

              <div class="form-submit">
                <button type="submit">{{ 'steps.forms.submit' | i18n }}</button>
              </div>
            </form>
          }
        </div>
      </section>

      <!-- Map Section - Only for appointment -->
      @if (activeTab() === 'appointment') {
        <section class="map-section">
          <div class="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.8158168478994!2d15.313!3d-4.322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMTknMTkuMiJTIDE1wrAxOCc0Ni44IkU!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="400"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </section>
      }
    </div>
  `,
  styles: [`
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
      background: linear-gradient(135deg, rgba(44, 62, 80, 0.95), rgba(52, 73, 94, 0.95)),
                  url('https://placehold.co/1920x400') center/cover;
      color: white;
      height: 265px;
      padding: 0;
      display: flex;
      align-items: center;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1fr auto 1.5fr;
      gap: 60px;
      align-items: center;
    }

    .hero-left h1 {
      font-size: 3.2rem;
      font-weight: 700;
      margin: 0;
      letter-spacing: 4px;
      line-height: 1.1;
      color: white;
    }

    .vertical-line {
      width: 3px;
      height: 180px;
      background-color: #ffffff;
      display: block;
    }

    .hero-right p {
      font-size: 1.05rem;
      line-height: 1.8;
      margin: 0 0 20px 0;
      opacity: 0.95;
    }

    .hero-right p:last-child {
      margin-bottom: 0;
    }

    /* Tabs Section */
    .tabs-section {
      background: white;
      border-bottom: 1px solid rgba(26, 41, 66, 0.08);
      padding: 20px 0;
    }

    .tabs {
      display: flex;
      gap: 0;
      align-items: center;
      background: #f5f7fb;
      border: 1px solid rgba(26, 41, 66, 0.12);
      border-radius: 999px;
      padding: 6px;
      box-shadow: 0 12px 30px rgba(26, 41, 66, 0.08);
    }

    .tab {
      flex: 1;
      text-align: center;
      padding: 14px 28px;
      font-size: 0.9rem;
      font-weight: 600;
      color: #5b6470;
      background: transparent;
      border: none;
      border-radius: 999px;
      transition: color 0.25s ease, background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
      cursor: pointer;
      letter-spacing: 0.8px;
      text-transform: uppercase;
    }

    .tab:hover {
      color: #1a1a1a;
      background: rgba(255, 255, 255, 0.7);
      transform: translateY(-1px);
    }

    .tab.active {
      color: #1a1a1a;
      background: #ffffff;
      box-shadow: 0 10px 18px rgba(26, 41, 66, 0.12);
      position: relative;
    }

    .tab.active::after {
      content: '';
      position: absolute;
      left: 14px;
      right: 14px;
      bottom: -4px;
      height: 3px;
      background: linear-gradient(90deg, #8b6914, #d6b56f);
      border-radius: 999px;
    }

    .tab-separator {
      width: 0;
      height: 0;
      background: transparent;
      flex-shrink: 0;
    }

    /* Form Section */
    .form-section {
      padding: 80px 0 100px;
      background: white;
    }

    .form-header {
      text-align: center;
      margin-bottom: 60px;
    }

    .form-header h2 {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0 0 15px 0;
      letter-spacing: 2px;
    }

    .form-subtitle {
      font-size: 0.9rem;
      color: #c9a961;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin: 0;
    }

    .complaint-form,
    .appointment-form,
    .appeal-form {
      max-width: 800px;
      margin: 0 auto;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 20px;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      padding: 15px 20px;
      border: 1px solid #ddd;
      border-radius: 0;
      font-size: 0.95rem;
      font-family: inherit;
      transition: border-color 0.3s ease;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #8B6914;
    }

    .form-group input::placeholder,
    .form-group textarea::placeholder {
      color: #999;
    }

    .form-group select {
      color: #999;
      cursor: pointer;
    }

    .form-group textarea {
      resize: vertical;
      min-height: 150px;
    }

    .form-submit {
      text-align: center;
      margin-top: 30px;
    }

    .form-submit button {
      background: white;
      color: #1a1a1a;
      border: 1px solid #1a1a1a;
      padding: 15px 50px;
      font-size: 0.9rem;
      font-weight: 600;
      letter-spacing: 1px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .form-submit button:hover {
      background: #1a1a1a;
      color: white;
    }

    /* Map Section */
    .map-section {
      background: #f5f5f5;
    }

    .map-container {
      width: 100%;
      height: 400px;
    }

    .map-container iframe {
      display: block;
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
      .hero-grid {
        grid-template-columns: 1fr;
        gap: 30px;
        text-align: center;
      }

      .vertical-line {
        display: none;
      }

      .hero-left h1 {
        font-size: 2.8rem;
      }
    }

    @media (max-width: 768px) {
      .hero-section {
        height: 265px;
        padding: 0;
        overflow: hidden;
      }

      .hero-left h1 {
        font-size: 2.3rem;
      }

      .hero-right p {
        font-size: 0.95rem;
        line-height: 1.6;
        margin-bottom: 12px;
      }

      .tabs {
        flex-direction: column;
        border-radius: 18px;
      }

      .tab {
        width: 100%;
      }

      .tab.active {
        box-shadow: 0 8px 16px rgba(26, 41, 66, 0.1);
      }

      .tab.active::after {
        left: 24px;
        right: 24px;
        bottom: -2px;
      }

      .tab-separator {
        display: none;
      }

      .form-row {
        grid-template-columns: 1fr;
        gap: 0;
      }

      .form-header h2 {
        font-size: 2rem;
      }

      .form-section {
        padding: 60px 0 80px;
      }

      .map-container {
        height: 300px;
      }
    }

    @media (max-width: 480px) {
      .hero-section {
        height: 250px;
        padding: 0;
        overflow: hidden;
      }

      .hero-left h1 {
        font-size: 2.1rem;
        letter-spacing: 1.5px;
      }

      .hero-right p {
        font-size: 0.85rem;
        line-height: 1.5;
        margin-bottom: 10px;
      }

      .form-header h2 {
        font-size: 1.6rem;
      }

      .form-subtitle {
        font-size: 0.8rem;
      }

      .form-submit button {
        padding: 12px 40px;
        font-size: 0.85rem;
      }

      .map-container {
        height: 250px;
      }
    }
  `]
})
export class StepsComponent implements OnInit {
  activeTab = signal<'report' | 'appointment' | 'appeal'>('report');

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const tab = params['tab'];
      if (tab === 'report' || tab === 'appointment' || tab === 'appeal') {
        this.activeTab.set(tab);
      }
    });
  }
}
