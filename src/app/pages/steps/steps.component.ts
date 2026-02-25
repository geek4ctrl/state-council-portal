import {
  AfterViewInit, ChangeDetectionStrategy, Component, DestroyRef,
  ElementRef, OnInit, ViewChild, inject, signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { I18nPipe } from '../../i18n/i18n.pipe';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-steps',
  imports: [CommonModule, I18nPipe, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page-wrap page-container">
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
              class="tab mag-btn"
              (mousemove)="mag($event)"
              (mouseleave)="magOut($event)"
              (click)="ripple($event)">
              <span>{{ 'steps.tabs.report' | i18n }}</span>
            </button>
            <div class="tab-separator"></div>
            <button
              (click)="activeTab.set('appointment')"
              [class.active]="activeTab() === 'appointment'"
              class="tab mag-btn"
              (mousemove)="mag($event)"
              (mouseleave)="magOut($event)"
              (click)="ripple($event)">
              <span>{{ 'steps.tabs.appointment' | i18n }}</span>
            </button>
            <div class="tab-separator"></div>
            <button
              (click)="activeTab.set('appeal')"
              [class.active]="activeTab() === 'appeal'"
              class="tab mag-btn"
              (mousemove)="mag($event)"
              (mouseleave)="magOut($event)"
              (click)="ripple($event)">
              <span>{{ 'steps.tabs.appeal' | i18n }}</span>
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
              <div class="form-header-line anim-line"></div>
              <h2 class="anim-up">{{ 'steps.forms.report.title' | i18n }}</h2>
              <p class="form-subtitle anim-up a-d1">{{ 'steps.forms.report.subtitle' | i18n }}</p>
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
                <div class="custom-select" (click)="toggleDepartment('report')">
                  <div class="select-trigger">
                    <span [class.placeholder]="!selectedDepartmentReport()">
                      {{ selectedDepartmentReport() || ('steps.forms.department' | i18n) }}
                    </span>
                    <svg class="dropdown-arrow" [class.open]="departmentOpenReport()" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                  @if (departmentOpenReport()) {
                    <div class="select-dropdown">
                      <div class="dropdown-item" (click)="selectDepartment('report', 'criminal', $event)">
                        {{ 'steps.forms.chambers.criminal' | i18n }}
                      </div>
                      <div class="dropdown-item" (click)="selectDepartment('report', 'civil', $event)">
                        {{ 'steps.forms.chambers.civil' | i18n }}
                      </div>
                      <div class="dropdown-item" (click)="selectDepartment('report', 'social', $event)">
                        {{ 'steps.forms.chambers.social' | i18n }}
                      </div>
                      <div class="dropdown-item" (click)="selectDepartment('report', 'commercial', $event)">
                        {{ 'steps.forms.chambers.commercial' | i18n }}
                      </div>
                    </div>
                  }
                </div>
              </div>

              <div class="form-group">
                <textarea [placeholder]="'steps.forms.message' | i18n" rows="6" required></textarea>
              </div>

              <div class="form-submit">
                <button type="submit" class="mag-btn" (mousemove)="mag($event)" (mouseleave)="magOut($event)" (click)="ripple($event)">
                  <span>{{ 'steps.forms.submit' | i18n }}</span>
                </button>
              </div>
            </form>
          }

          <!-- Appointment Form -->
          @if (activeTab() === 'appointment') {
            <div class="form-header">
              <div class="form-header-line anim-line"></div>
              <h2 class="anim-up">{{ 'steps.forms.appointment.title' | i18n }}</h2>
              <p class="form-subtitle anim-up a-d1">{{ 'steps.forms.appointment.subtitle' | i18n }}</p>
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
                  <div class="custom-select" (click)="toggleDepartment('appointment')">
                    <div class="select-trigger">
                      <span [class.placeholder]="!selectedDepartmentAppointment()">
                        {{ selectedDepartmentAppointment() || ('steps.forms.department' | i18n) }}
                      </span>
                      <svg class="dropdown-arrow" [class.open]="departmentOpenAppointment()" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                    @if (departmentOpenAppointment()) {
                      <div class="select-dropdown">
                        <div class="dropdown-item" (click)="selectDepartment('appointment', 'criminal', $event)">
                          {{ 'steps.forms.chambers.criminal' | i18n }}
                        </div>
                        <div class="dropdown-item" (click)="selectDepartment('appointment', 'civil', $event)">
                          {{ 'steps.forms.chambers.civil' | i18n }}
                        </div>
                        <div class="dropdown-item" (click)="selectDepartment('appointment', 'social', $event)">
                          {{ 'steps.forms.chambers.social' | i18n }}
                        </div>
                        <div class="dropdown-item" (click)="selectDepartment('appointment', 'commercial', $event)">
                          {{ 'steps.forms.chambers.commercial' | i18n }}
                        </div>
                      </div>
                    }
                  </div>
                </div>
                <div class="form-group">
                  <div class="custom-select" (click)="toggleMeeting()">
                    <div class="select-trigger">
                      <span [class.placeholder]="!selectedMeeting()">
                        {{ selectedMeeting() || ('steps.forms.meeting.placeholder' | i18n) }}
                      </span>
                      <svg class="dropdown-arrow" [class.open]="meetingOpen()" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                    @if (meetingOpen()) {
                      <div class="select-dropdown">
                        <div class="dropdown-item" (click)="selectMeeting('first-president', $event)">
                          {{ 'steps.forms.meeting.firstPresident' | i18n }}
                        </div>
                        <div class="dropdown-item" (click)="selectMeeting('chamber-president', $event)">
                          {{ 'steps.forms.meeting.chamberPresident' | i18n }}
                        </div>
                        <div class="dropdown-item" (click)="selectMeeting('legal-advisor', $event)">
                          {{ 'steps.forms.meeting.legalAdvisor' | i18n }}
                        </div>
                        <div class="dropdown-item" (click)="selectMeeting('clerk', $event)">
                          {{ 'steps.forms.meeting.clerk' | i18n }}
                        </div>
                      </div>
                    }
                  </div>
                </div>
              </div>

              <div class="form-group">
                <div class="custom-select" (click)="toggleVisit()">
                  <div class="select-trigger">
                    <span [class.placeholder]="!selectedVisit()">
                      {{ selectedVisit() || ('steps.forms.visit.placeholder' | i18n) }}
                    </span>
                    <svg class="dropdown-arrow" [class.open]="visitOpen()" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                  @if (visitOpen()) {
                    <div class="select-dropdown">
                      <div class="dropdown-item" (click)="selectVisit('this-week', $event)">
                        {{ 'steps.forms.visit.thisWeek' | i18n }}
                      </div>
                      <div class="dropdown-item" (click)="selectVisit('next-week', $event)">
                        {{ 'steps.forms.visit.nextWeek' | i18n }}
                      </div>
                      <div class="dropdown-item" (click)="selectVisit('this-month', $event)">
                        {{ 'steps.forms.visit.thisMonth' | i18n }}
                      </div>
                      <div class="dropdown-item" (click)="selectVisit('next-month', $event)">
                        {{ 'steps.forms.visit.nextMonth' | i18n }}
                      </div>
                    </div>
                  }
                </div>
              </div>

              <div class="form-group">
                <textarea [placeholder]="'steps.forms.message' | i18n" rows="6" required></textarea>
              </div>

              <div class="form-submit">
                <button type="submit" class="mag-btn" (mousemove)="mag($event)" (mouseleave)="magOut($event)" (click)="ripple($event)">
                  <span>{{ 'steps.forms.submit' | i18n }}</span>
                </button>
              </div>
            </form>
          }

          <!-- Appeal Tab: Steps, Email CTA, FAQs -->
          @if (activeTab() === 'appeal') {
            <div class="appeal-content">
              <!-- Steps for filling an appeal -->
              <div class="form-header">
                <div class="form-header-line anim-line"></div>
                <h2 class="anim-up">{{ 'appealSteps.title' | i18n }}</h2>
                <p class="form-subtitle anim-up a-d1">{{ 'appealSteps.subtitle' | i18n }}</p>
              </div>

              <div class="appeal-steps">
                @for (step of appealStepIds; track step) {
                  <div class="appeal-step anim-up" [style.animation-delay]="(0.1 * $index) + 's'">
                    <div class="step-number">{{ step }}</div>
                    <div class="step-body">
                      <h3>{{ 'appealSteps.steps.' + step + '.title' | i18n }}</h3>
                      <p>{{ 'appealSteps.steps.' + step + '.body' | i18n }}</p>
                    </div>
                  </div>
                }
              </div>

              <!-- Have questions? Send email -->
              <div class="have-questions anim-up">
                <h3>{{ 'haveQuestions.title' | i18n }}</h3>
                <p>{{ 'haveQuestions.body' | i18n }}</p>
                <a
                  href="mailto:info@conseildetatrdc.com"
                  class="email-cta mag-btn"
                  (mousemove)="mag($event)"
                  (mouseleave)="magOut($event)"
                  (click)="ripple($event)"
                >
                  <span>{{ 'haveQuestions.cta' | i18n }}</span>
                </a>
              </div>

              <!-- Collapsible FAQs -->
              <div class="faqs-section">
                <div class="form-header">
                  <div class="form-header-line anim-line"></div>
                  <h2 class="anim-up">{{ 'faqs.title' | i18n }}</h2>
                </div>
                <div class="faqs-list">
                  @for (id of faqIds; track id) {
                    <div class="faq-item" [class.open]="openFaqId() === id">
                      <button
                        type="button"
                        class="faq-question"
                        (click)="toggleFaq(id)"
                        (mousemove)="mag($event)"
                        (mouseleave)="magOut($event)"
                      >
                        <span>{{ 'faqs.items.' + id + '.question' | i18n }}</span>
                        <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>
                      <div class="faq-answer">
                        <p>{{ 'faqs.items.' + id + '.answer' | i18n }}</p>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
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

      <app-footer></app-footer>
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
      background-image: url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=800&fit=crop&q=80');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-color: #2c3e50;
      position: relative;
      color: white;
      padding: 100px 0;
    }

    .hero-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(44, 62, 80, 0.92) 0%, rgba(52, 73, 94, 0.88) 50%, rgba(30, 46, 68, 0.90) 100%);
      z-index: 1;
    }

    .hero-section .container {
      position: relative;
      z-index: 2;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1fr auto 1.5fr;
      gap: 60px;
      align-items: center;
    }

    .hero-left h1 {
      font-size: 4rem;
      font-weight: 700;
      margin: 0;
      letter-spacing: 3px;
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
      border-bottom: 1px solid #e0e0e0;
    }

    .tabs {
      display: flex;
      gap: 0;
      align-items: center;
    }

    .tab {
      flex: 1;
      text-align: center;
      padding: 20px 30px;
      font-size: 0.95rem;
      font-weight: 500;
      color: #666;
      background: transparent;
      border: none;
      border-bottom: 3px solid transparent;
      transition: all 0.3s ease;
      cursor: pointer;
      border-radius: 1px;
    }

    .tab:hover {
      color: #2c3e50;
      background: #f8f8f8;
    }

    .tab.active {
      color: #2c3e50;
      border-bottom-color: #2c3e50;
      font-weight: 600;
    }

    .tab-separator {
      width: 1px;
      height: 30px;
      background: #d0d0d0;
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
      position: relative;
    }

    .form-header-line {
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, #1F9BD9, #d4a06a);
      margin: 0 auto 15px;
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
      color: #1F9BD9 !important;
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
      position: relative;
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 15px 20px;
      border: 1px solid #ddd;
      border-radius: 3px;
      font-size: 0.95rem;
      font-family: inherit;
      transition: border-color 0.3s ease;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #1a1a1a;
    }

    .form-group input::placeholder,
    .form-group textarea::placeholder {
      color: #999;
    }

    .form-group textarea {
      resize: vertical;
      min-height: 150px;
    }

    /* Custom Select Dropdown */
    .custom-select {
      position: relative;
      width: 100%;
      user-select: none;
    }

    .select-trigger {
      width: 100%;
      padding: 15px 20px;
      background: white;
      border: 1px solid #ddd;
      border-radius: 3px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: border-color 0.3s ease;
    }

    .select-trigger:hover {
      border-color: #1a1a1a;
    }

    .select-trigger span {
      font-size: 0.95rem;
      color: #333;
    }

    .select-trigger span.placeholder {
      color: #999;
    }

    .dropdown-arrow {
      width: 16px;
      height: 16px;
      transition: transform 0.3s ease;
      flex-shrink: 0;
      margin-left: 10px;
      stroke: #666;
    }

    .dropdown-arrow.open {
      transform: rotate(180deg);
    }

    .select-dropdown {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      right: 0;
      background: #eaf1f7;
      border-radius: 8px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
      z-index: 1000;
      overflow: hidden;
      animation: dropdownSlide 0.2s ease;
    }

    @keyframes dropdownSlide {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .dropdown-item {
      padding: 14px 20px;
      color: black;
      font-size: 0.95rem;
      cursor: pointer;
      transition: background-color 0.2s ease;
      border-bottom: 1px solid #667C99;
    }

    .dropdown-item:last-child {
      border-bottom: none;
    }

    .dropdown-item:hover {
      background-color: #6a6a6a;
    }

    .dropdown-item:active {
      background-color: #5a5a5a;
    }

    .form-submit {
      text-align: center;
      margin-top: 30px;
    }

    .form-submit button {
      background: white;
      color: #1F9BD9;
      border: 1px solid #1F9BD9;
      padding: 15px 50px;
      font-size: 0.9rem;
      font-weight: 600;
      letter-spacing: 1px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .form-submit button:hover {
      background: transparent;
      color: #1F9BD9;
    }

    /* Appeal Tab: Steps, Email CTA, FAQs */
    .appeal-content {
      max-width: 800px;
      margin: 0 auto;
    }
    .appeal-steps {
      display: flex;
      flex-direction: column;
      gap: 2px;
      margin-bottom: 50px;
    }
    .appeal-step {
      display: flex;
      gap: 24px;
      align-items: flex-start;
      padding: 24px 28px;
      margin-top: 16px;
      background: #fafafa;
      border-radius: 8px;
      border-left: 4px solid #1F9BD9;
      transition: background 0.2s ease;
    }
    .appeal-step:hover {
      background: #f5f5f5;
    }
    .step-number {
      flex-shrink: 0;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: linear-gradient(135deg, #1F9BD9, #4a9fff);
      color: white;
      font-size: 1rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .step-body h3 {
      font-size: 1.1rem;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0 0 8px 0;
    }
    .step-body p {
      font-size: 0.95rem;
      color: #555;
      line-height: 1.6;
      margin: 0;
    }
    .have-questions {
      text-align: center;
      padding: 40px 24px;
      background: linear-gradient(135deg, rgba(31, 155, 217, 0.08), rgba(31, 155, 217, 0.08));
      border-radius: 12px;
      margin-bottom: 50px;
    }
    .have-questions h3 {
      font-size: 1.4rem;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0 0 8px 0;
    }
    .have-questions p {
      font-size: 0.95rem;
      color: #555;
      margin: 0 0 20px 0;
    }
    .email-cta {
      display: inline-block;
      background: white;
      color: #1F9BD9;
      border: 1px solid #1F9BD9;
      padding: 14px 36px;
      font-size: 0.9rem;
      font-weight: 600;
      letter-spacing: 1px;
      text-decoration: none;
      border-radius: 3px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .email-cta:hover {
      background: #1F9BD9;
      color: white;
    }
    .faqs-section {
      margin-top: 20px;
    }
    .faqs-section .form-header {
      margin-bottom: 30px;
    }
    .faqs-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .faq-item {
      background: #fff;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      overflow: hidden;
      transition: border-color 0.2s ease;
    }
    .faq-item:hover {
      border-color: #1F9BD9;
    }
    .faq-item.open {
      border-color: #1F9BD9;
    }
    .faq-question {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 18px 22px;
      background: transparent;
      border: none;
      font-size: 0.95rem;
      font-weight: 600;
      color: #1a1a1a;
      text-align: left;
      cursor: pointer;
      transition: background 0.2s ease;
    }
    .faq-question:hover {
      background: #f8f8f8;
    }
    .faq-item.open .faq-question {
      background: #f0f8ff;
    }
    .faq-chevron {
      width: 18px;
      height: 18px;
      flex-shrink: 0;
      transition: transform 0.3s ease;
      color: #1F9BD9;
    }
    .faq-item.open .faq-chevron {
      transform: rotate(180deg);
    }
    .faq-answer {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.35s ease;
    }
    .faq-item.open .faq-answer {
      max-height: 500px;
    }
    .faq-answer p {
      padding: 0 22px 18px 22px;
      margin: 0;
      font-size: 0.9rem;
      color: #555;
      line-height: 1.6;
      border-top: 1px solid #eee;
    }
    .faq-item.open .faq-answer p {
      padding-top: 16px;
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
        font-size: 3rem;
      }
    }

    @media (max-width: 768px) {
      .hero-section {
        padding: 80px 0;
      }

      .hero-left h1 {
        font-size: 2.5rem;
      }

      .hero-right p {
        font-size: 1rem;
      }

      .tabs {
        flex-direction: column;
      }

      .tab {
        border-bottom: 1px solid #e0e0e0;
        border-right: none;
      }

      .tab.active {
        border-bottom-color: #2c3e50;
      }

      .tab-separator {
        display: none;
      }

      .form-row {
        grid-template-columns: 1fr;
        gap: 0;
      }

      .appeal-step {
        flex-direction: row;
        padding: 18px 20px;
        gap: 16px;
      }
      .step-number {
        width: 34px;
        height: 34px;
        font-size: 0.9rem;
      }
      .step-body h3 {
        font-size: 1rem;
      }
      .step-body p {
        font-size: 0.9rem;
      }
      .have-questions {
        padding: 30px 20px;
      }
      .have-questions h3 {
        font-size: 1.2rem;
      }
      .faq-question {
        padding: 16px 18px;
        font-size: 0.9rem;
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
        padding: 60px 0;
      }

      .hero-left h1 {
        font-size: 2rem;
        letter-spacing: 2px;
      }

      .hero-right p {
        font-size: 0.95rem;
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

    /* Home-style: loader, cursor, anims */
    @keyframes fillBar{0%{width:0}60%{width:70%}100%{width:100%}}
    @keyframes labelPulse{0%,100%{opacity:.4}50%{opacity:1}}
    @keyframes rOrbit1{from{transform:rotateX(65deg) rotateZ(0)}to{transform:rotateX(65deg) rotateZ(360deg)}}
    @keyframes rOrbit2{from{transform:rotateX(65deg) rotateZ(120deg)}to{transform:rotateX(65deg) rotateZ(480deg)}}
    @keyframes rOrbit3{from{transform:rotateX(65deg) rotateZ(240deg)}to{transform:rotateX(65deg) rotateZ(600deg)}}
    @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
    @keyframes shimmerSweep{from{transform:translateX(-120%) skewX(-20deg)}to{transform:translateX(220%) skewX(-20deg)}}
    @keyframes rippleAnim{to{transform:scale(1);opacity:0}}
    @keyframes lineExpand{from{width:0;opacity:0}to{width:60px;opacity:1}}
    @keyframes upFade{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
    .page-wrap{cursor:none;}
    .loader{position:fixed;inset:0;background:linear-gradient(135deg,#080e1a,#82BCDC);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:32px;z-index:9999;transition:opacity .7s ease,visibility .7s ease,transform .7s ease;}
    .loader.out{opacity:0;visibility:hidden;transform:scale(1.06);pointer-events:none;}
    .loader-sphere{width:120px;height:120px;position:relative;display:flex;align-items:center;justify-content:center;}
    .sphere-ring{position:absolute;inset:0;border-radius:50%;border:1px solid rgba(31,155,217,.35);}
    .r1{inset:10px;animation:rOrbit1 2.5s linear infinite;}
    .r2{inset:0;animation:rOrbit2 3.5s linear infinite;}
    .r3{inset:-12px;animation:rOrbit3 5s linear infinite;}
    .sphere-core{width:52px;height:52px;border-radius:50%;background:radial-gradient(circle,rgba(31,155,217,.25),rgba(31,155,217,.05));border:1px solid rgba(31,155,217,.5);display:flex;align-items:center;justify-content:center;color:#1F9BD9;box-shadow:0 0 30px rgba(31,155,217,.3);animation:float 3s ease-in-out infinite;}
    .sphere-core svg{width:30px;height:30px;}
    .loader-track{width:220px;height:3px;background:rgba(255,255,255,.08);border-radius:99px;overflow:hidden;}
    .loader-fill{height:100%;background:linear-gradient(90deg,#1F9BD9,#e0b98a);border-radius:99px;animation:fillBar 2s ease-in-out infinite;}
    .loader-label{font-size:.72rem;font-weight:700;letter-spacing:2px;color:#1F9BD9;text-transform:uppercase;animation:labelPulse 2s ease-in-out infinite;}
    .anim-line{animation:lineExpand .8s ease-out both;}
    .anim-up{animation:upFade .7s cubic-bezier(.23,1,.32,1) both;opacity:0;}
    .a-d1{animation-delay:.15s;}
    .mag-btn{position:relative;overflow:hidden;transition:transform .25s ease;}
    .mag-btn::before{content:'';position:absolute;inset:0;background:linear-gradient(105deg,transparent 40%,rgba(255,255,255,.2) 50%,transparent 60%);transform:translateX(-120%) skewX(-20deg);pointer-events:none;}
    .mag-btn:hover::before{animation:shimmerSweep .6s ease forwards;}
  `]
})
export class StepsComponent implements OnInit, AfterViewInit {
  private destroyRef = inject(DestroyRef);

  activeTab = signal<'report' | 'appointment' | 'appeal'>('report');
  appealStepIds = ['1', '2', '3', '4', '5'];
  faqIds = ['1', '2', '3', '4', '5'];
  openFaqId = signal<string | null>(null);

  departmentOpenReport = signal(false);
  departmentOpenAppointment = signal(false);
  departmentOpenAppeal = signal(false);
  meetingOpen = signal(false);
  visitOpen = signal(false);
  
  selectedDepartmentReport = signal('');
  selectedDepartmentAppointment = signal('');
  selectedDepartmentAppeal = signal('');
  selectedMeeting = signal('');
  selectedVisit = signal('');

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const tab = params['tab'];
      if (tab === 'report' || tab === 'appointment' || tab === 'appeal') {
        this.activeTab.set(tab);
      }
    });
  }

  ngAfterViewInit() {}

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

  selectDepartment(form: string, value: string, event: Event) {
    event.stopPropagation();
    const label = (event.target as HTMLElement).textContent?.trim() || '';
    if (form === 'report') {
      this.selectedDepartmentReport.set(label);
      this.departmentOpenReport.set(false);
    } else if (form === 'appointment') {
      this.selectedDepartmentAppointment.set(label);
      this.departmentOpenAppointment.set(false);
    } else if (form === 'appeal') {
      this.selectedDepartmentAppeal.set(label);
      this.departmentOpenAppeal.set(false);
    }
  }

  selectMeeting(value: string, event: Event) {
    event.stopPropagation();
    const label = (event.target as HTMLElement).textContent?.trim() || '';
    this.selectedMeeting.set(label);
    this.meetingOpen.set(false);
  }

  selectVisit(value: string, event: Event) {
    event.stopPropagation();
    const label = (event.target as HTMLElement).textContent?.trim() || '';
    this.selectedVisit.set(label);
    this.visitOpen.set(false);
  }

  toggleDepartment(form: string) {
    if (form === 'report') {
      this.departmentOpenReport.update(v => !v);
      this.departmentOpenAppointment.set(false);
      this.departmentOpenAppeal.set(false);
    } else if (form === 'appointment') {
      this.departmentOpenAppointment.update(v => !v);
      this.departmentOpenReport.set(false);
      this.departmentOpenAppeal.set(false);
    } else if (form === 'appeal') {
      this.departmentOpenAppeal.update(v => !v);
      this.departmentOpenReport.set(false);
      this.departmentOpenAppointment.set(false);
    }
    this.meetingOpen.set(false);
    this.visitOpen.set(false);
  }

  toggleMeeting() {
    this.meetingOpen.update(v => !v);
    this.departmentOpenReport.set(false);
    this.departmentOpenAppointment.set(false);
    this.departmentOpenAppeal.set(false);
    this.visitOpen.set(false);
  }

  toggleVisit() {
    this.visitOpen.update(v => !v);
    this.departmentOpenReport.set(false);
    this.departmentOpenAppointment.set(false);
    this.departmentOpenAppeal.set(false);
    this.meetingOpen.set(false);
  }

  toggleFaq(id: string) {
    this.openFaqId.update(current => (current === id ? null : id));
  }
}