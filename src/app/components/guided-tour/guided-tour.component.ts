import {
  Component,
  signal,
  computed,
  effect,
  inject,
  AfterViewInit,
  ChangeDetectionStrategy,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { I18nPipe } from '../../i18n/i18n.pipe';
import { I18nService } from '../../i18n/i18n.service';

interface TourStep {
  id: string;
  target: string;
  titleKey: string;
  contentKey: string;
  position: 'top' | 'bottom' | 'left' | 'right';
}

interface TourFeature {
  icon: SafeHtml;
  titleKey: string;
  descriptionKey: string;
}

@Component({
  selector: 'app-guided-tour',
  standalone: true,
  imports: [CommonModule, I18nPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <!-- Welcome Modal Overlay -->
    @if (showWelcome()) {
      <div class="tour-overlay" (click)="onOverlayClick($event)">
        <div class="tour-welcome-modal" (click)="$event.stopPropagation()">
          <!-- Close button -->
          <button class="tour-close-btn" (click)="skipTour()" aria-label="Fermer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          <!-- Header with icon -->
          <div class="tour-welcome-header">
            <div class="tour-icon-wrapper">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M32 8L16 16L16 32C16 44 24 52 32 56C40 52 48 44 48 32L48 16L32 8Z"/>
                <path d="M32 20V36M32 44V44" stroke-width="3"/>
              </svg>
            </div>
            <h2 class="tour-welcome-title">{{ 'tour.welcome.title' | i18n }}</h2>
            <p class="tour-welcome-subtitle">{{ 'tour.welcome.subtitle' | i18n }}</p>
          </div>

          <!-- Features list -->
          <div class="tour-features">
            @for (feature of features(); track feature.titleKey; let i = $index) {
              <div class="tour-feature-item" [style.--delay]="i * 0.1 + 's'">
                <div class="tour-feature-icon" [innerHTML]="feature.icon"></div>
                <div class="tour-feature-content">
                  <h3>{{ feature.titleKey | i18n }}</h3>
                  <p>{{ feature.descriptionKey | i18n }}</p>
                </div>
              </div>
            }
          </div>

          <!-- Actions -->
          <div class="tour-welcome-actions">
            <button class="tour-btn-secondary" (click)="skipTour()">
              {{ 'tour.welcome.skip' | i18n }}
            </button>
            <button class="tour-btn-primary" (click)="startTour()">
              {{ 'tour.welcome.start' | i18n }}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    }

    <!-- Tour Step Tooltip -->
    @if (isActive() && !showWelcome()) {
      <div class="tour-step-overlay" (click)="onOverlayClick($event)">
        <!-- Highlight box -->
        <div
          class="tour-highlight"
          [style.left.px]="highlightRect()?.left"
          [style.top.px]="highlightRect()?.top"
          [style.width.px]="highlightRect()?.width"
          [style.height.px]="highlightRect()?.height"
        ></div>

        <!-- Step counter badge -->
        <div class="tour-step-badge">
          <span class="tour-step-current">{{ currentStepIndex() + 1 }}</span>
          <span class="tour-step-separator">/</span>
          <span class="tour-step-total">{{ steps().length }}</span>
        </div>

        <!-- Tooltip -->
        <div
          class="tour-tooltip"
          [class.position-top]="tooltipPlacement() === 'top'"
          [class.position-bottom]="tooltipPlacement() === 'bottom'"
          [class.position-left]="tooltipPlacement() === 'left'"
          [class.position-right]="tooltipPlacement() === 'right'"
          [style.left.px]="tooltipPosition()?.left"
          [style.top.px]="tooltipPosition()?.top"
        >
          <!-- Progress bar -->
          <div class="tour-progress">
            <div
              class="tour-progress-bar"
              [style.width.%]="((currentStepIndex() + 1) / steps().length) * 100"
            ></div>
          </div>

          <!-- Close button -->
          <button class="tour-tooltip-close" (click)="endTour()" aria-label="Fermer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          <!-- Content -->
          <div class="tour-tooltip-content">
            @if (currentStep()) {
              <h3>{{ currentStep()!.titleKey | i18n }}</h3>
              <p>{{ currentStep()!.contentKey | i18n }}</p>
            }
          </div>

          <!-- Actions -->
          <div class="tour-tooltip-actions">
            <button
              class="tour-btn-text"
              (click)="skipTour()"
            >
              {{ 'tour.step.skip' | i18n }}
            </button>
            <div class="tour-tooltip-nav">
              @if (currentStepIndex() > 0) {
                <button class="tour-btn-outline" (click)="prevStep()">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                  </svg>
                  {{ 'tour.step.prev' | i18n }}
                </button>
              }
              @if (currentStepIndex() < steps().length - 1) {
                <button class="tour-btn-primary" (click)="nextStep()">
                  {{ 'tour.step.next' | i18n }}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              } @else {
                <button class="tour-btn-primary" (click)="endTour()">
                  {{ 'tour.step.finish' | i18n }}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12l5 5L20 7"/>
                  </svg>
                </button>
              }
            </div>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    /* Overlay */
    .tour-overlay,
    .tour-step-overlay {
      position: fixed;
      inset: 0;
      z-index: 10000;
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(4px);
      display: flex;
      align-items: center;
      justify-content: center;
      animation: tourFadeIn 0.3s ease;
    }

    .tour-step-overlay {
      pointer-events: none;
    }

    /* Welcome Modal */
    .tour-welcome-modal {
      position: relative;
      background: white;
      border-radius: 16px;
      padding: 40px;
      max-width: 480px;
      width: 90%;
      max-height: 90vh;
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: #1F9BD9 #eef6fb;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      animation: tourSlideUp 0.4s ease;
      pointer-events: auto;
    }

    .tour-welcome-modal::-webkit-scrollbar {
      width: 8px;
    }

    .tour-welcome-modal::-webkit-scrollbar-track {
      background: #eef6fb;
      border-radius: 10px;
    }

    .tour-welcome-modal::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, #1F9BD9 0%, #1a7fb3 100%);
      border-radius: 10px;
      border: 2px solid #eef6fb;
    }

    .tour-welcome-modal::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(180deg, #22a6e6 0%, #1673a4 100%);
    }

    .tour-close-btn {
      position: absolute;
      top: 16px;
      right: 16px;
      width: 32px;
      height: 32px;
      border: none;
      background: transparent;
      color: #6b7280;
      cursor: pointer;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
    }

    .tour-close-btn:hover {
      background: #f3f4f6;
      color: #374151;
    }

    .tour-close-btn svg {
      width: 20px;
      height: 20px;
    }

    /* Header */
    .tour-welcome-header {
      text-align: center;
      margin-bottom: 32px;
    }

    .tour-icon-wrapper {
      width: 72px;
      height: 72px;
      background: linear-gradient(135deg, #1F9BD9 0%, #1a7fb3 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
      color: white;
      box-shadow: 0 10px 25px -5px rgba(31, 155, 217, 0.4);
    }

    .tour-icon-wrapper svg {
      width: 36px;
      height: 36px;
    }

    .tour-welcome-title {
      font-size: 24px;
      font-weight: 700;
      color: #111827;
      margin: 0 0 8px;
      line-height: 1.3;
    }

    .tour-welcome-subtitle {
      font-size: 15px;
      color: #6b7280;
      margin: 0;
      line-height: 1.5;
    }

    /* Features */
    .tour-features {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 32px;
    }

    .tour-feature-item {
      display: flex;
      gap: 16px;
      padding: 16px;
      background: #f9fafb;
      border-radius: 12px;
      opacity: 0;
      animation: tourFadeInUp 0.5s ease forwards;
      animation-delay: var(--delay, 0s);
      transition: all 0.2s;
    }

    .tour-feature-item:hover {
      background: #f3f4f6;
      transform: translateX(4px);
    }

    .tour-feature-icon {
      width: 44px;
      height: 44px;
      min-width: 44px;
      background: #e7f5ff;
      border: 1px solid rgba(31, 155, 217, 0.25);
      box-shadow: 0 6px 14px rgba(31, 155, 217, 0.18);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #1F9BD9;
    }

    .tour-feature-icon svg {
      width: 22px;
      height: 22px;
      display: block;
      stroke: currentColor;
      fill: none;
    }

    .tour-feature-content h3 {
      font-size: 14px;
      font-weight: 600;
      color: #111827;
      margin: 0 0 4px;
    }

    .tour-feature-content p {
      font-size: 13px;
      color: #6b7280;
      margin: 0;
      line-height: 1.4;
    }

    /* Actions */
    .tour-welcome-actions {
      display: flex;
      gap: 12px;
      justify-content: flex-end;
    }

    .tour-btn-primary,
    .tour-btn-secondary,
    .tour-btn-outline,
    .tour-btn-text {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 20px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      border: none;
    }

    .tour-btn-primary {
      background: #1F9BD9;
      color: white;
      box-shadow: 0 4px 14px -2px rgba(31, 155, 217, 0.3);
    }

    .tour-btn-primary:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 20px -4px rgba(31, 155, 217, 0.4);
    }

    .tour-btn-secondary {
      background: transparent;
      color: #6b7280;
    }

    .tour-btn-secondary:hover {
      color: #374151;
      background: #f3f4f6;
    }

    .tour-btn-outline {
      background: white;
      color: #374151;
      border: 1px solid #e5e7eb;
    }

    .tour-btn-outline:hover {
      background: #f9fafb;
      border-color: #d1d5db;
    }

    .tour-btn-text {
      background: transparent;
      color: #6b7280;
      padding: 12px 16px;
    }

    .tour-btn-text:hover {
      color: #374151;
    }

    .tour-btn-primary svg,
    .tour-btn-outline svg {
      width: 16px;
      height: 16px;
    }

    /* Step Badge */
    .tour-step-badge {
      position: fixed;
      top: 20px;
      left: 20px;
      background: white;
      padding: 8px 16px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 14px;
      font-weight: 600;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 10001;
      pointer-events: auto;
    }

    .tour-step-current {
      color: #1F9BD9;
    }

    .tour-step-separator {
      color: #d1d5db;
    }

    .tour-step-total {
      color: #6b7280;
    }

    /* Highlight */
    .tour-highlight {
      position: fixed;
      border-radius: 8px;
      box-shadow: 0 0 0 4px rgba(31, 155, 217, 0.3), 0 0 0 9999px rgba(0, 0, 0, 0.5);
      z-index: 10000;
      pointer-events: none;
      animation: tourPulse 2s infinite;
    }

    /* Tooltip */
    .tour-tooltip {
      position: fixed;
      background: white;
      border-radius: 12px;
      padding: 24px;
      max-width: 400px;
      width: 90%;
      max-height: calc(100vh - 40px);
      box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.3);
      z-index: 10001;
      pointer-events: auto;
      animation: tourFadeIn 0.3s ease;
    }

    .tour-tooltip-scroll {
      max-height: calc(100vh - 80px);
      overflow-y: auto;
    }

    .tour-tooltip::after {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      background: white;
      transform: rotate(45deg);
      z-index: -1;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .tour-tooltip.position-bottom::after {
      bottom: -8px;
      left: 50%;
      margin-left: -8px;
    }

    .tour-tooltip.position-top::after {
      top: -8px;
      left: 50%;
      margin-left: -8px;
    }

    .tour-tooltip.position-right::after {
      left: -8px;
      top: 50%;
      margin-top: -8px;
    }

    .tour-tooltip.position-left::after {
      right: -8px;
      top: 50%;
      margin-top: -8px;
    }

    .tour-progress {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: #e5e7eb;
      border-radius: 12px 12px 0 0;
      overflow: hidden;
    }

    .tour-progress-bar {
      height: 100%;
      background: #1F9BD9;
      transition: width 0.3s ease;
    }

    .tour-tooltip-close {
      position: absolute;
      top: 12px;
      right: 12px;
      width: 28px;
      height: 28px;
      border: none;
      background: transparent;
      color: #9ca3af;
      cursor: pointer;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
    }

    .tour-tooltip-close:hover {
      background: #f3f4f6;
      color: #6b7280;
    }

    .tour-tooltip-close svg {
      width: 16px;
      height: 16px;
    }

    .tour-tooltip-content {
      margin-top: 8px;
    }

    .tour-tooltip-content h3 {
      font-size: 18px;
      font-weight: 600;
      color: #111827;
      margin: 0 0 8px;
    }

    .tour-tooltip-content p {
      font-size: 15px;
      color: #6b7280;
      margin: 0;
      line-height: 1.6;
    }

    .tour-tooltip-actions {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 24px;
      padding-top: 18px;
      border-top: 1px solid #e5e7eb;
    }

    .tour-tooltip-nav {
      display: flex;
      gap: 8px;
    }

    /* Animations */
    @keyframes tourFadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes tourSlideUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes tourFadeInUp {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes tourPulse {
      0%, 100% {
        box-shadow: 0 0 0 4px rgba(31, 155, 217, 0.3), 0 0 0 9999px rgba(0, 0, 0, 0.5);
      }
      50% {
        box-shadow: 0 0 0 6px rgba(31, 155, 217, 0.2), 0 0 0 9999px rgba(0, 0, 0, 0.5);
      }
    }

    /* Responsive */
    @media (max-width: 640px) {
      .tour-overlay,
      .tour-step-overlay {
        display: none;
      }

      .tour-welcome-modal {
        padding: 20px;
        margin: 16px;
        max-height: calc(100vh - 32px);
      }

      .tour-welcome-title {
        font-size: 18px;
      }

      .tour-welcome-subtitle {
        font-size: 13px;
      }

      .tour-feature-item {
        padding: 12px;
        gap: 12px;
      }

      .tour-feature-icon {
        width: 40px;
        height: 40px;
        min-width: 40px;
      }

      .tour-feature-icon :deep(svg) {
        width: 20px;
        height: 20px;
      }

      .tour-feature-content h3 {
        font-size: 13px;
      }

      .tour-feature-content p {
        font-size: 12px;
      }

      .tour-tooltip {
        max-width: calc(100vw - 24px);
        width: calc(100vw - 24px);
        left: 12px !important;
        right: 12px !important;
        padding: 16px;
        border-radius: 10px;
      }

      .tour-tooltip-content h3 {
        font-size: 16px;
      }

      .tour-tooltip-content p {
        font-size: 14px;
      }

      .tour-tooltip-actions {
        flex-direction: column;
        gap: 12px;
        align-items: stretch;
      }

      .tour-tooltip-nav {
        justify-content: space-between;
        width: 100%;
      }

      .tour-btn-primary,
      .tour-btn-secondary,
      .tour-btn-outline,
      .tour-btn-text {
        padding: 10px 16px;
        font-size: 13px;
      }

      .tour-welcome-actions {
        flex-direction: column;
      }

      .tour-btn-primary,
      .tour-btn-secondary {
        justify-content: center;
      }

      .tour-step-badge {
        top: 12px;
        left: 12px;
        padding: 6px 12px;
        font-size: 12px;
      }
    }
  `]
})
export class GuidedTourComponent implements AfterViewInit {
  private i18nService = inject(I18nService);
  private sanitizer = inject(DomSanitizer);

  // State signals
  showWelcome = signal(true);
  isActive = signal(false);
  currentStepIndex = signal(0);
  highlightRect = signal<{ left: number; top: number; width: number; height: number } | null>(null);
  tooltipPosition = signal<{ left: number; top: number } | null>(null);
  tooltipPlacement = signal<'top' | 'bottom' | 'left' | 'right'>('bottom');

  // Features for welcome modal
  features = signal<TourFeature[]>([
    {
      icon: this.sanitizer.bypassSecurityTrustHtml(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:22px;height:22px;display:block;"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
      ),
      titleKey: 'tour.features.language.title',
      descriptionKey: 'tour.features.language.description',
    },
    {
      icon: this.sanitizer.bypassSecurityTrustHtml(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:22px;height:22px;display:block;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`
      ),
      titleKey: 'tour.features.documents.title',
      descriptionKey: 'tour.features.documents.description',
    },
    {
      icon: this.sanitizer.bypassSecurityTrustHtml(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:22px;height:22px;display:block;"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
      ),
      titleKey: 'tour.features.members.title',
      descriptionKey: 'tour.features.members.description',
    },
    {
      icon: this.sanitizer.bypassSecurityTrustHtml(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:22px;height:22px;display:block;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`
      ),
      titleKey: 'tour.features.updates.title',
      descriptionKey: 'tour.features.updates.description',
    },
  ]);

  // Tour steps
  steps = signal<TourStep[]>([
    {
      id: 'header',
      target: 'app-header',
      titleKey: 'tour.steps.header.title',
      contentKey: 'tour.steps.header.content',
      position: 'bottom',
    },
    {
      id: 'hero',
      target: '.hero',
      titleKey: 'tour.steps.hero.title',
      contentKey: 'tour.steps.hero.content',
      position: 'bottom',
    },
    {
      id: 'newsletter',
      target: '.nl-section',
      titleKey: 'tour.steps.newsletter.title',
      contentKey: 'tour.steps.newsletter.content',
      position: 'top',
    },
    {
      id: 'offer',
      target: '.offer-section',
      titleKey: 'tour.steps.offer.title',
      contentKey: 'tour.steps.offer.content',
      position: 'top',
    },
    {
      id: 'expertise',
      target: '.exp-section',
      titleKey: 'tour.steps.expertise.title',
      contentKey: 'tour.steps.expertise.content',
      position: 'top',
    },
    {
      id: 'contact',
      target: '.ct-section',
      titleKey: 'tour.steps.contact.title',
      contentKey: 'tour.steps.contact.content',
      position: 'top',
    },
    {
      id: 'quicklinks',
      target: '.ql-section',
      titleKey: 'tour.steps.quicklinks.title',
      contentKey: 'tour.steps.quicklinks.content',
      position: 'top',
    },
    {
      id: 'footer',
      target: 'app-footer',
      titleKey: 'tour.steps.footer.title',
      contentKey: 'tour.steps.footer.content',
      position: 'top',
    },
  ]);

  // Computed
  currentStep = computed(() => this.steps()[this.currentStepIndex()]);

  constructor() {
    // Check if user has already seen the tour
    const hasSeenTour = localStorage.getItem('guided-tour-completed');
    if (hasSeenTour) {
      this.showWelcome.set(false);
    }
  }

  ngAfterViewInit() {
    // Initial check for tour state
  }

  startTour() {
    this.showWelcome.set(false);
    this.isActive.set(true);
    this.currentStepIndex.set(0);
    this.updateHighlight();
  }

  skipTour() {
    this.showWelcome.set(false);
    this.isActive.set(false);
    localStorage.setItem('guided-tour-completed', 'true');
  }

  endTour() {
    this.isActive.set(false);
    localStorage.setItem('guided-tour-completed', 'true');
  }

  nextStep() {
    if (this.currentStepIndex() < this.steps().length - 1) {
      this.currentStepIndex.update(i => i + 1);
      this.updateHighlight();
    }
  }

  prevStep() {
    if (this.currentStepIndex() > 0) {
      this.currentStepIndex.update(i => i - 1);
      this.updateHighlight();
    }
  }

  onOverlayClick(event: MouseEvent) {
    // Only close if clicking directly on the overlay background
    if (event.target === event.currentTarget) {
      this.skipTour();
    }
  }

  private findVisibleTarget(selector: string): HTMLElement | null {
    const element = document.querySelector(selector) as HTMLElement | null;
    if (!element) return null;
    return element;
  }

  private moveToNextVisibleStep() {
    const steps = this.steps();
    const startIndex = this.currentStepIndex();

    for (let i = startIndex + 1; i < steps.length; i += 1) {
      const candidate = this.findVisibleTarget(steps[i].target);
      if (candidate) {
        this.currentStepIndex.set(i);
        this.updateHighlight();
        return;
      }
    }

    this.endTour();
  }

  private updateHighlight() {
    const step = this.currentStep();
    if (!step) return;

    // First scroll to element, then calculate positions after scroll completes
    const target = this.findVisibleTarget(step.target);
    if (target) {
      // Scroll element into view first
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Wait for scroll to complete before calculating positions
      setTimeout(() => {
        const rect = target.getBoundingClientRect();
        const padding = 8;
        const isMobile = window.innerWidth <= 640;
        const margin = isMobile ? 12 : 16;

        this.highlightRect.set({
          left: rect.left - padding,
          top: rect.top - padding,
          width: rect.width + padding * 2,
          height: rect.height + padding * 2,
        });

        // Calculate tooltip position
        const tooltipWidth = isMobile ? window.innerWidth - 24 : 400;
        const tooltipHeight = isMobile ? 200 : 220;
        const gap = isMobile ? 8 : 16;

        let left: number;
        let top: number;
        let placement: 'top' | 'bottom' | 'left' | 'right' = 'bottom';

        // On mobile, center the tooltip horizontally with fixed margins
        if (isMobile) {
          left = 12;

          // Check if there's enough space below, otherwise place above
          const spaceBelow = window.innerHeight - rect.bottom;
          const spaceAbove = rect.top;

          if (spaceBelow < tooltipHeight + gap && spaceAbove > spaceBelow) {
            top = Math.max(margin, rect.top - tooltipHeight - gap);
            placement = 'top';
          } else {
            top = Math.min(rect.bottom + gap, window.innerHeight - tooltipHeight - margin);
            placement = 'bottom';
          }
        } else {
          // Desktop positioning
          left = rect.left + rect.width / 2 - tooltipWidth / 2;

          // Check available space
          const spaceBelow = window.innerHeight - rect.bottom;
          const spaceAbove = rect.top;

          // Place tooltip where there's more space
          if (spaceBelow < tooltipHeight + gap && spaceAbove > spaceBelow) {
            top = Math.max(margin, rect.top - tooltipHeight - gap);
            placement = 'top';
          } else {
            top = rect.bottom + gap;
            placement = 'bottom';
          }

          // Adjust horizontal position - keep tooltip within viewport
          if (left < margin) left = margin;
          if (left + tooltipWidth > window.innerWidth - margin) {
            left = window.innerWidth - tooltipWidth - margin;
          }

          // Ensure tooltip doesn't go off-screen vertically
          if (top + tooltipHeight > window.innerHeight - margin) {
            top = window.innerHeight - tooltipHeight - margin;
          }
          if (top < margin) {
            top = margin;
          }
        }

        const oppositePlacement: 'top' | 'bottom' | 'left' | 'right' =
          placement === 'top' ? 'bottom' :
          placement === 'bottom' ? 'top' :
          placement === 'left' ? 'right' : 'left';

        this.tooltipPosition.set({ left, top });
        this.tooltipPlacement.set(oppositePlacement);
      }, 400);
    } else {
      this.moveToNextVisibleStep();
    }
  }
}
