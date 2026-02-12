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

interface HeroSlide {
  id: number;
  titleKey: string;
  subtitleKey: string;
  descriptionKey: string;
  buttonKey: string;
  image: string;
}

interface PresidentSlide {
  id: number;
  titleKey: string;
  image: string;
  paragraphKeys: string[];
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, I18nPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `

    <!-- Hero Carousel Section -->
    <section class="hero-carousel">
      <div class="hero-slide" [style.background-image]="'url(' + heroSlides[currentSlide()].image + ')'">
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <div class="container">
            <div class="hero-text">
              <p class="hero-subtitle">{{ heroSlides[currentSlide()].subtitleKey | i18n }}</p>
              <h1 class="hero-title">{{ heroSlides[currentSlide()].titleKey | i18n }}</h1>
              <div class="hero-actions">
                <button class="hero-button">{{ heroSlides[currentSlide()].buttonKey | i18n }}</button>
                <button class="hero-button secondary">Learn more</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Carousel Navigation -->
        <div class="carousel-nav">
          <div class="container">
            <div class="carousel-controls">
              <button class="nav-arrow" (click)="previousSlide()">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
              </button>

              <div class="carousel-indicators">
                @for (slide of heroSlides; track slide.id; let i = $index) {
                  <button
                    class="indicator"
                    [class.active]="i === currentSlide()"
                    (click)="goToSlide(i)">
                  </button>
                }
              </div>

              <button class="nav-arrow" (click)="nextSlide()">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Facts Section -->
    <section class="key-facts-section" aria-labelledby="key-facts-title">
      <div class="container">
        <div class="key-facts-header">
          <div class="key-facts-line"></div>
          <h2 id="key-facts-title" class="section-title">{{ 'home.keyFacts.title' | i18n }}</h2>
        </div>
        <p class="key-facts-subtitle">{{ 'home.keyFacts.subtitle' | i18n }}</p>

        <div class="key-facts-grid">
          <div class="key-fact-card glass-card">
            <div class="key-fact-meta">
              <h3>{{ 'home.keyFacts.cards.volume.title' | i18n }}</h3>
              <span class="key-fact-note">{{ 'home.keyFacts.cards.volume.note' | i18n }}</span>
            </div>
            <div
              #caseVolumeChart
              class="key-fact-chart"
              role="img"
              [attr.aria-label]="'home.keyFacts.cards.volume.aria' | i18n">
            </div>
          </div>

          <div class="key-fact-card glass-card">
            <div class="key-fact-meta">
              <h3>{{ 'home.keyFacts.cards.processing.title' | i18n }}</h3>
              <span class="key-fact-note">{{ 'home.keyFacts.cards.processing.note' | i18n }}</span>
            </div>
            <div
              #processingTimeChart
              class="key-fact-chart"
              role="img"
              [attr.aria-label]="'home.keyFacts.cards.processing.aria' | i18n">
            </div>
          </div>

          <div class="key-fact-card glass-card">
            <div class="key-fact-meta">
              <h3>{{ 'home.keyFacts.cards.decisions.title' | i18n }}</h3>
              <span class="key-fact-note">{{ 'home.keyFacts.cards.decisions.note' | i18n }}</span>
            </div>
            <div
              #decisionsTypeChart
              class="key-fact-chart"
              role="img"
              [attr.aria-label]="'home.keyFacts.cards.decisions.aria' | i18n">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Info Cards Section -->
    <section class="quick-links-section">
      <div class="container">
        <div class="quick-links-container">
          <div class="quick-link-item glass-card">
            <div class="quick-link-icon">
              <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=120&h=120&fit=crop" [alt]="'home.quickLinks.items.news.alt' | i18n">
            </div>
            <div class="quick-link-content">
              <h3>{{ 'home.quickLinks.items.news.title' | i18n }}</h3>
              <p>{{ 'home.quickLinks.items.news.body' | i18n }}</p>
              <a href="#" class="quick-link-action">{{ 'home.quickLinks.items.news.action' | i18n }}</a>
            </div>
            <div class="connector-line"></div>
          </div>

          <div class="quick-link-item glass-card">
            <div class="quick-link-icon">
              <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=120&h=120&fit=crop" [alt]="'home.quickLinks.items.excerpts.alt' | i18n">
            </div>
            <div class="quick-link-content">
              <h3>{{ 'home.quickLinks.items.excerpts.title' | i18n }}</h3>
              <p>{{ 'home.quickLinks.items.excerpts.body' | i18n }}</p>
              <a href="#" class="quick-link-action">{{ 'home.quickLinks.items.excerpts.action' | i18n }}</a>
            </div>
            <div class="connector-line"></div>
          </div>

          <div class="quick-link-item glass-card">
            <div class="quick-link-icon">
              <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=120&h=120&fit=crop" [alt]="'home.quickLinks.items.report.alt' | i18n">
            </div>
            <div class="quick-link-content">
              <h3>{{ 'home.quickLinks.items.report.title' | i18n }}</h3>
              <p>{{ 'home.quickLinks.items.report.body' | i18n }}</p>
              <a href="#" class="quick-link-action">{{ 'home.quickLinks.items.report.action' | i18n }}</a>
            </div>
            <div class="connector-line"></div>
          </div>

          <div class="quick-link-item glass-card">
            <div class="quick-link-icon">
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=120&h=120&fit=crop" [alt]="'home.quickLinks.items.appointment.alt' | i18n">
            </div>
            <div class="quick-link-content">
              <h3>{{ 'home.quickLinks.items.appointment.title' | i18n }}</h3>
              <p>{{ 'home.quickLinks.items.appointment.body' | i18n }}</p>
              <a href="#" class="quick-link-action">{{ 'home.quickLinks.items.appointment.action' | i18n }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What We Offer Section -->
    <section class="offer-section">
      <div class="container">
        <div class="offer-header">
          <div class="offer-line"></div>
          <h2 class="section-title">{{ 'home.offer.title' | i18n }}</h2>
        </div>
        <p class="section-subtitle">{{ 'home.offer.subtitle' | i18n }}</p>

        <div class="offer-grid">
          <div class="offer-card">
            <div class="offer-card-header">
              <div class="offer-icon">
                <svg viewBox="0 0 64 64" fill="currentColor">
                  <path d="M32 8L16 16L16 32C16 44 24 52 32 56C40 52 48 44 48 32L48 16L32 8Z"/>
                </svg>
              </div>
              <h3>{{ 'home.offer.cards.1.title' | i18n }}</h3>
            </div>
            <p>{{ 'home.offer.cards.1.body' | i18n }}</p>
          </div>

          <div class="offer-card">
            <div class="offer-card-header">
              <div class="offer-icon">
                <svg viewBox="0 0 64 64" fill="currentColor">
                  <rect x="18" y="12" width="28" height="40" rx="2"/>
                  <rect x="22" y="16" width="4" height="4" fill="white"/>
                  <rect x="22" y="24" width="4" height="4" fill="white"/>
                  <rect x="28" y="16" width="14" height="4" fill="white"/>
                  <rect x="28" y="24" width="14" height="4" fill="white"/>
                </svg>
              </div>
              <h3>{{ 'home.offer.cards.2.title' | i18n }}</h3>
            </div>
            <p>{{ 'home.offer.cards.2.body' | i18n }}</p>
          </div>

          <div class="offer-card">
            <div class="offer-card-header">
              <div class="offer-icon">
                <svg viewBox="0 0 64 64" fill="currentColor">
                  <circle cx="32" cy="20" r="8"/>
                  <path d="M32 30C24 30 16 32 16 36V42H48V36C48 32 40 30 32 30Z"/>
                  <path d="M26 18L30 22L38 14L40 16L30 26L24 20L26 18Z" fill="white"/>
                </svg>
              </div>
              <h3>{{ 'home.offer.cards.3.title' | i18n }}</h3>
            </div>
            <p>{{ 'home.offer.cards.3.body' | i18n }}</p>
          </div>

          <div class="offer-card">
            <div class="offer-card-header">
              <div class="offer-icon">
                <svg viewBox="0 0 64 64" fill="currentColor">
                  <circle cx="32" cy="32" r="24"/>
                  <path d="M20 28L28 32L38 22L42 26L28 40L16 32L20 28Z" fill="white"/>
                </svg>
              </div>
              <h3>{{ 'home.offer.cards.4.title' | i18n }}</h3>
            </div>
            <p>{{ 'home.offer.cards.4.body' | i18n }}</p>
          </div>
        </div>
      </div>
    </section>
<hr class="style-hr">
    <!-- Fields of Expertise Section -->
    <section class="expertise-section">
      <div class="container">
        <div class="expertise-header">
          <div class="expertise-line"></div>
          <h2 class="section-title">{{ 'home.expertise.title' | i18n }}</h2>
          <div class="expertise-line"></div>
        </div>
        <p class="section-subtitle">{{ 'home.expertise.subtitle' | i18n }}</p>

        <div class="practice-grid">
          <a class="practice-card accent-civil" href="#">
            <div class="practice-content">
              <div class="practice-header">
                <div class="practice-icon">
                  <svg viewBox="0 0 64 64" fill="currentColor">
                    <path d="M38 8L26 8C24 8 22 10 22 12L22 52C22 54 24 56 26 56L38 56C40 56 42 54 42 52L42 12C42 10 40 8 38 8Z"/>
                    <path d="M32 12L28 16L36 16L32 12Z" fill="white"/>
                  </svg>
                </div>
                <h3>{{ 'home.expertise.areas.civil.title' | i18n }}</h3>
              </div>
              <p class="practice-desc">{{ 'home.expertise.areas.civil.desc' | i18n }}</p>
              <ul>
                <li>{{ 'home.expertise.areas.civil.items.1' | i18n }}</li>
                <li>{{ 'home.expertise.areas.civil.items.2' | i18n }}</li>
                <li>{{ 'home.expertise.areas.civil.items.3' | i18n }}</li>
              </ul>
              <span class="practice-cta">{{ 'home.expertise.cta' | i18n }}</span>
            </div>
          </a>

          <a class="practice-card accent-family" href="#">
            <div class="practice-content">
              <div class="practice-header">
                <div class="practice-icon">
                  <svg viewBox="0 0 64 64" fill="currentColor">
                    <path d="M24 40C16 40 10 44 10 50V56H38V50C38 44 32 40 24 40Z"/>
                    <path d="M40 40C38 40 36 40.4 34 41C37 43 38 46 38 50V56H54V50C54 44 48 40 40 40Z"/>
                    <circle cx="24" cy="26" r="10"/>
                    <circle cx="42" cy="24" r="8"/>
                  </svg>
                </div>
                <h3>{{ 'home.expertise.areas.family.title' | i18n }}</h3>
              </div>
              <p class="practice-desc">{{ 'home.expertise.areas.family.desc' | i18n }}</p>
              <ul>
                <li>{{ 'home.expertise.areas.family.items.1' | i18n }}</li>
                <li>{{ 'home.expertise.areas.family.items.2' | i18n }}</li>
                <li>{{ 'home.expertise.areas.family.items.3' | i18n }}</li>
              </ul>
              <span class="practice-cta">{{ 'home.expertise.cta' | i18n }}</span>
            </div>
          </a>

          <a class="practice-card accent-public" href="#">
            <div class="practice-content">
              <div class="practice-header">
                <div class="practice-icon">
                  <svg viewBox="0 0 64 64" fill="currentColor">
                    <path d="M32 8L18 14V28C18 40 26 48 32 52C38 48 46 40 46 28V14L32 8Z M32 12L42 16V28C42 38 36 44 32 48C28 44 22 38 22 28V16L32 12Z"/>
                    <rect x="28" y="24" width="8" height="16" fill="white"/>
                    <rect x="24" y="32" width="16" height="4" fill="white"/>
                  </svg>
                </div>
                <h3>{{ 'home.expertise.areas.public.title' | i18n }}</h3>
              </div>
              <p class="practice-desc">{{ 'home.expertise.areas.public.desc' | i18n }}</p>
              <ul>
                <li>{{ 'home.expertise.areas.public.items.1' | i18n }}</li>
                <li>{{ 'home.expertise.areas.public.items.2' | i18n }}</li>
                <li>{{ 'home.expertise.areas.public.items.3' | i18n }}</li>
              </ul>
              <span class="practice-cta">{{ 'home.expertise.cta' | i18n }}</span>
            </div>
          </a>

          <a class="practice-card accent-labor" href="#">
            <div class="practice-content">
              <div class="practice-header">
                <div class="practice-icon">
                  <svg viewBox="0 0 64 64" fill="currentColor">
                    <rect x="22" y="28" width="20" height="20" rx="2"/>
                    <rect x="26" y="20" width="12" height="10" rx="2"/>
                    <circle cx="32" cy="38" r="3" fill="white"/>
                  </svg>
                </div>
                <h3>{{ 'home.expertise.areas.labor.title' | i18n }}</h3>
              </div>
              <p class="practice-desc">{{ 'home.expertise.areas.labor.desc' | i18n }}</p>
              <ul>
                <li>{{ 'home.expertise.areas.labor.items.1' | i18n }}</li>
                <li>{{ 'home.expertise.areas.labor.items.2' | i18n }}</li>
                <li>{{ 'home.expertise.areas.labor.items.3' | i18n }}</li>
              </ul>
              <span class="practice-cta">{{ 'home.expertise.cta' | i18n }}</span>
            </div>
          </a>

          <a class="practice-card accent-criminal" href="#">
            <div class="practice-content">
              <div class="practice-header">
                <div class="practice-icon">
                  <svg viewBox="0 0 64 64" fill="currentColor">
                    <path d="M32 8C24 8 18 14 18 22C18 30 24 36 32 36C40 36 46 30 46 22C46 14 40 8 32 8Z"/>
                    <path d="M46 18C46 14 43 11 39 11L25 11C21 11 18 14 18 18L18 46C18 50 21 53 25 53L39 53C43 53 46 50 46 46L46 18Z"/>
                    <path d="M28 18L32 24L36 18" stroke="#BF9874" stroke-width="2" fill="none"/>
                  </svg>
                </div>
                <h3>{{ 'home.expertise.areas.criminal.title' | i18n }}</h3>
              </div>
              <p class="practice-desc">{{ 'home.expertise.areas.criminal.desc' | i18n }}</p>
              <ul>
                <li>{{ 'home.expertise.areas.criminal.items.1' | i18n }}</li>
                <li>{{ 'home.expertise.areas.criminal.items.2' | i18n }}</li>
                <li>{{ 'home.expertise.areas.criminal.items.3' | i18n }}</li>
              </ul>
              <span class="practice-cta">{{ 'home.expertise.cta' | i18n }}</span>
            </div>
          </a>

          <a class="practice-card accent-property" href="#">
            <div class="practice-content">
              <div class="practice-header">
                <div class="practice-icon">
                  <svg viewBox="0 0 64 64" fill="currentColor">
                    <rect x="16" y="32" width="32" height="20"/>
                    <polygon points="32,12 16,32 48,32"/>
                    <rect x="28" y="24" width="8" height="8" fill="white"/>
                  </svg>
                </div>
                <h3>{{ 'home.expertise.areas.property.title' | i18n }}</h3>
              </div>
              <p class="practice-desc">{{ 'home.expertise.areas.property.desc' | i18n }}</p>
              <ul>
                <li>{{ 'home.expertise.areas.property.items.1' | i18n }}</li>
                <li>{{ 'home.expertise.areas.property.items.2' | i18n }}</li>
                <li>{{ 'home.expertise.areas.property.items.3' | i18n }}</li>
              </ul>
              <span class="practice-cta">{{ 'home.expertise.cta' | i18n }}</span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Contact Information Bar -->
    <section class="contact-info-section">
      <div class="container">
        <div class="contact-bar">
          <div class="contact-item">
            <h3>{{ 'home.contact.address.title' | i18n }}</h3>
            <p>{{ 'home.contact.address.body' | i18n }}</p>
          </div>
          <div class="contact-divider"></div>
          <div class="contact-item">
            <h3>{{ 'home.contact.phone.title' | i18n }}</h3>
            <p>{{ 'home.contact.phone.body' | i18n }}</p>
          </div>
          <div class="contact-divider"></div>
          <div class="contact-item">
            <h3>{{ 'home.contact.email.title' | i18n }}</h3>
            <p>{{ 'home.contact.email.body' | i18n }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- President Section -->
    <section class="president-section">
      <div class="container">
        <div class="president-content">
          <div class="president-image-wrapper">
            <img [src]="presidentSlides[currentPresidentSlide()].image" [alt]="'home.president.imageAlt' | i18n">
          </div>

          <div class="president-text">
            <h2>{{ presidentSlides[currentPresidentSlide()].titleKey | i18n }}</h2>
            @for (paragraphKey of presidentSlides[currentPresidentSlide()].paragraphKeys; track paragraphKey) {
              <p>{{ paragraphKey | i18n }}</p>
            }
            <button class="president-learn-btn">
              {{ 'home.president.cta' | i18n }}
            </button>

            <div class="president-pagination">
              @for (slide of presidentSlides; track slide.id; let i = $index) {
                <button
                  class="pagination-dot"
                  [class.active]="i === currentPresidentSlide()"
                  (click)="goToPresidentSlide(i)">
                </button>
              }
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="newsletter-section">
      <div class="container">
        <div class="newsletter-header">
          <div class="header-line"></div>
          <h2>{{ 'home.newsletter.title' | i18n }}</h2>
          <div class="header-line"></div>
        </div>

        <div class="newsletter-grid">
          <div class="news-card glass-card">
            <div class="news-image">
              <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop" [alt]="'home.newsletter.items.1.alt' | i18n">
            </div>
            <div class="news-content">
              <p class="news-date">{{ 'home.newsletter.items.1.date' | i18n }}</p>
              <h3>{{ 'home.newsletter.items.1.title' | i18n }}</h3>
              <a href="#" class="read-more-link">
                {{ 'home.newsletter.readMore' | i18n }}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="news-card glass-card">
            <div class="news-image">
              <img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&h=600&fit=crop" [alt]="'home.newsletter.items.2.alt' | i18n">
            </div>
            <div class="news-content">
              <p class="news-date">{{ 'home.newsletter.items.2.date' | i18n }}</p>
              <h3>{{ 'home.newsletter.items.2.title' | i18n }}</h3>
              <a href="#" class="read-more-link">
                {{ 'home.newsletter.readMore' | i18n }}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="news-card glass-card">
            <div class="news-image">
              <img src="https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=800&h=600&fit=crop" [alt]="'home.newsletter.items.3.alt' | i18n">
            </div>
            <div class="news-content">
              <p class="news-date">{{ 'home.newsletter.items.3.date' | i18n }}</p>
              <h3>{{ 'home.newsletter.items.3.title' | i18n }}</h3>
              <a href="#" class="read-more-link">
                {{ 'home.newsletter.readMore' | i18n }}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="news-card glass-card">
            <div class="news-image">
              <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=600&fit=crop" [alt]="'home.newsletter.items.4.alt' | i18n">
            </div>
            <div class="news-content">
              <p class="news-date">{{ 'home.newsletter.items.4.date' | i18n }}</p>
              <h3>{{ 'home.newsletter.items.4.title' | i18n }}</h3>
              <a href="#" class="read-more-link">
                {{ 'home.newsletter.readMore' | i18n }}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="newsletter-actions">
          <button class="newsletter-learn-btn">{{ 'home.newsletter.cta' | i18n }}</button>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="footer-section">
      <div class="footer-main">
        <div class="footer-logo-wrapper">
                <img [src]="logo" alt="Footer Logo">
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
  `,
  styles: [`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    /* Hero Carousel */
    .hero-carousel {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .hero-slide {
      position: relative;
      height: 600px;
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      transition: background-image 0.8s ease;
    }

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(90deg, rgba(0, 20, 50, 0.92) 0%, rgba(0, 20, 50, 0.75) 50%, rgba(0, 20, 50, 0.5) 100%);
    }

    .hero-content {
      position: relative;
      z-index: 2;
      width: 100%;
    }

    .hero-text {
      max-width: 650px;
      color: white;
    }

    .hero-subtitle {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 2.5px;
      color: #BF9874;
      margin-bottom: 18px;
      text-transform: uppercase;
    }

    .hero-title {
      font-size: 2.8rem;
      font-weight: 800;
      line-height: 1.15;
      margin-bottom: 22px;
      color: white;
      text-transform: uppercase;
    }

    .hero-description {
      font-size: 0.95rem;
      line-height: 1.7;
      color: rgba(255, 255, 255, 0.95);
      margin-bottom: 35px;
    }

    .hero-actions {
      display: flex;
      align-items: center;
      gap: 14px;
      flex-wrap: wrap;
    }

    .hero-button {
      padding: 18px 46px;
      background-color: #C82333;
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.2);
      font-size: 1rem;
      font-weight: 700;
      letter-spacing: 0.5px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-transform: capitalize;
      box-shadow: 0 12px 26px rgba(12, 18, 40, 0.35);
    }

    .hero-button:hover {
      background-color: #A01D29;
      transform: translateY(-1px);
    }

    .hero-button.secondary {
      background-color: transparent;
      color: #ffffff;
      border-color: rgba(255, 255, 255, 0.55);
      box-shadow: 0 8px 18px rgba(12, 18, 40, 0.25);
    }

    .hero-button.secondary:hover {
      background-color: rgba(255, 255, 255, 0.12);
      border-color: rgba(255, 255, 255, 0.75);
    }

    .carousel-nav {
      position: absolute;
      bottom: 35px;
      left: 0;
      right: 0;
      z-index: 3;
    }

    .carousel-controls {
      display: flex;
      align-items: center;
      gap: 35px;
      justify-content: flex-start;
    }

    .nav-arrow {
      width: 48px;
      height: 48px;
      background-color: rgba(255, 255, 255, 0.15);
      border: 2px solid rgba(255, 255, 255, 0.6);
      border-radius: 50%;
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }

    .nav-arrow:hover {
      background-color: rgba(255, 255, 255, 0.25);
    }

    .nav-arrow svg {
      width: 26px;
      height: 26px;
    }

    .carousel-indicators {
      display: flex;
      gap: 18px;
    }

    .indicator {
      width: 55px;
      height: 5px;
      background-color: rgba(255, 255, 255, 0.35);
      border: none;
      cursor: pointer;
      transition: all 0.4s ease;
      border-radius: 3px;
    }

    .indicator.active {
      background-color: #BF9874;
    }

    /* Key Facts Section */
    .key-facts-section {
      background: radial-gradient(circle at top left, rgba(191, 152, 116, 0.16), transparent 55%),
        linear-gradient(180deg, #f8f6f2 0%, #ffffff 100%);
      padding: 64px 0 48px;
      border-bottom: 1px solid rgba(26, 41, 66, 0.08);
      --glass-bg: linear-gradient(135deg, rgba(255, 255, 255, 0.58), rgba(255, 255, 255, 0.18));
      --glass-shadow: 0 16px 32px rgba(26, 41, 66, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.5);
    }

    .key-facts-header {
      display: flex;
      align-items: center;
      gap: 18px;
      margin-bottom: 10px;
    }

    .key-facts-line {
      width: 60px;
      height: 3px;
      background: #BF9874;
    }

    .key-facts-subtitle {
      font-size: 0.9rem;
      color: #6b5a41;
      margin: 0 0 28px;
      max-width: 720px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      line-height: 1.6;
    }

    .key-facts-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 18px;
    }

    .glass-card {
      background: var(--glass-bg, linear-gradient(135deg, rgba(255, 255, 255, 0.62), rgba(255, 255, 255, 0.22)));
      border: none;
      box-shadow: var(--glass-shadow, 0 16px 32px rgba(26, 41, 66, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.5));
      backdrop-filter: var(--glass-blur, blur(14px) saturate(130%));
      -webkit-backdrop-filter: var(--glass-blur, blur(14px) saturate(130%));
    }

    .key-fact-card {
      border-radius: 16px;
      padding: 18px 18px 12px;
    }

    .key-fact-meta {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 12px;
    }

    .key-fact-meta h3 {
      font-size: 1rem;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0;
    }

    .key-fact-note {
      font-size: 0.75rem;
      color: #8b7355;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 600;
      white-space: nowrap;
    }

    .key-fact-chart {
      width: 100%;
      height: 250px;
      overflow: visible;
    }

    .key-fact-chart .highcharts-container {
      overflow: visible !important;
    }

    /* Quick Links Section */
    .quick-links-section {
      background: #ECECF1;
      color: black;
      padding: 32px 0;
      border-top: 1px solid rgba(255, 255, 255, 0.18);
      border-bottom: 1px solid rgba(255, 255, 255, 0.18);
      backdrop-filter: blur(18px) saturate(140%);
      -webkit-backdrop-filter: blur(18px) saturate(140%);
      --glass-bg: linear-gradient(135deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.06));
      --glass-shadow: 0 14px 28px rgba(9, 16, 40, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.35);
    }

    .quick-links-container {
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      gap: 10px;
    }

    .quick-link-item {
      display: flex;
      align-items: stretch;
      gap: 12px;
      flex: 1;
      position: relative;
      padding: 10px 12px;
      border-radius: 14px;
      transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
    }

    .quick-link-item:hover {
      transform: translateY(-4px);
      border-color: rgba(191, 152, 116, 0.4);
      box-shadow: 0 18px 34px rgba(9, 16, 40, 0.26), inset 0 1px 0 rgba(255, 255, 255, 0.45);
    }

    .quick-link-icon {
      width: 64px;
      height: 100%;
      flex-shrink: 0;
      border-radius: 14px;
      overflow: hidden;
      background-color: rgba(255, 255, 255, 0.6);
      align-self: stretch;
      border: 1px solid rgba(255, 255, 255, 0.35);
      box-shadow: 0 10px 18px rgba(7, 12, 28, 0.22);
    }

    .quick-link-icon img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .quick-link-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .quick-link-content h3 {
      font-size: 0.75rem;
      font-weight: 800;
      color: #1a1a1a;
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.7px;
      line-height: 1.25;
    }

    .quick-link-content p {
      font-size: 0.78rem;
      color: #4b5563;
      line-height: 1.55;
      margin-bottom: 6px;
    }

    .quick-link-action {
      color: #1a2942;
      font-size: 0.75rem;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      text-decoration: underline;
      text-decoration-thickness: 2px;
      text-underline-offset: 4px;
      text-transform: capitalize;
      margin-top: auto;
      padding-top: 8px;
      line-height: 1.2;
    }

    .connector-line {
      width: 1px;
      height: 70px;
      background: linear-gradient(to bottom, transparent, rgba(191, 152, 116, 0.6), transparent);
      margin: 0 12px;
      flex-shrink: 0;
      opacity: 0.35;
    }

    /* What We Offer */
    .offer-section {
      padding: 64px 0;
      background-color: #ffffff;
      border-bottom: 1px solid rgba(26, 41, 66, 0.08);
    }

    .offer-header {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 15px;
    }

    .offer-line {
      width: 60px;
      height: 3px;
      background: #BF9874;
    }

    .section-title {
      font-size: 2.4rem;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0;
    }

    .section-subtitle {
      font-size: 0.9rem;
      color: #BF9874;
      margin-top: 10px;
      margin-bottom: 50px;
      line-height: 1.6;
      max-width: 820px;
      margin-left: calc(60px + 20px);
    }

    .offer-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
    }

    .offer-card {
      background: white;
      padding: 25px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    }

    .offer-card-header {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 15px;
    }

    .offer-icon {
      width: 50px;
      height: 50px;
      color: #1E2E45;
      flex-shrink: 0;
    }

    .offer-icon svg {
      width: 100%;
      height: 100%;
    }

    .offer-card h3 {
      font-size: 0.95rem;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0;
      line-height: 1.2;
    }

    .offer-card p {
      font-size: 0.85rem;
      color: #666;
      line-height: 1.7;
    }

    /* Fields of Expertise */
    .expertise-section {
      position: relative;
      padding: 90px 0;
      background: #ECECF1;
      overflow: hidden;
    }

    .style-hr {
      background: #BF9874 !important;
      color: #BF9874 !important;
      border: none !important;
      height: 1px !important;
      width: auto !important;
    }

    .expertise-section::before {
      content: '';
      position: absolute;
      inset: 0;
      background: repeating-linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.04) 0,
        rgba(255, 255, 255, 0.04) 1px,
        transparent 1px,
        transparent 120px
      );
      opacity: 0.25;
      pointer-events: none;
    }

    .expertise-header {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 24px;
      margin-bottom: 12px;
      text-transform: uppercase;
    }

    .expertise-line {
      width: 180px;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(191, 152, 116, 0.5), transparent);
    }

    .expertise-section .section-title {
      color: black;
      font-size: clamp(1.8rem, 2.2vw, 2.6rem);
      letter-spacing: 3px;
      font-weight: 700;
    }

    .expertise-section .section-subtitle {
      text-align: center;
      color: #BF9874;
      font-size: 0.95rem;
      line-height: 1.7;
      margin: 12px auto 52px;
      max-width: 720px;
      margin-left: 0;
    }

    .practice-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 18px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .practice-card {
      --accent: #8b7355;
      padding: 34px 30px;
      background: white;
      display: flex;
      gap: 18px;
      align-items: flex-start;
      border: 1px solid rgba(15, 15, 15, 0.08);
      border-radius: 14px;
      border-top: 3px solid var(--accent);
      min-height: 210px;
      box-shadow: 0 10px 26px rgba(0, 0, 0, 0.12);
      transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
      text-decoration: none;
      color: inherit;
      position: relative;
      opacity: 0;
      transform: translateY(12px);
      animation: expertise-rise 0.6s ease forwards;
    }

    .practice-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 16px 36px rgba(0, 0, 0, 0.18);
      border-color: rgba(191, 152, 116, 0.55);
    }

    .practice-card:focus-visible {
      outline: 2px solid rgba(191, 152, 116, 0.9);
      outline-offset: 3px;
    }

    .practice-icon {
      width: 54px;
      height: 54px;
      color: var(--accent);
      flex-shrink: 0;
      border-radius: 12px;
      background: linear-gradient(135deg, rgba(191, 152, 116, 0.18), rgba(15, 15, 15, 0.02));
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .practice-icon svg {
      width: 32px;
      height: 32px;
    }

    .practice-header {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 10px;
    }

    .practice-content h3 {
      font-size: 1.05rem;
      font-weight: 700;
      margin: 0;
      color: #1a1a1a;
      line-height: 1.2;
    }

    .practice-content {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .practice-desc {
      font-size: 0.88rem;
      color: #6a6a6a;
      line-height: 1.6;
      margin: 0 0 12px 0;
    }

    .practice-content ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .practice-content li {
      display: flex;
      align-items: baseline;
      gap: 10px;
      padding: 6px 0;
      color: #5b5b5b;
      font-size: 0.9rem;
      position: relative;
      line-height: 1.55;
    }

    .practice-content li::before {
      content: "•";
      position: static;
      flex: 0 0 auto;
      color: var(--accent);
      font-weight: bold;
      font-size: 1rem;
      line-height: 1;
    }

    .practice-cta {
      margin-top: auto;
      padding-top: 16px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .practice-cta::after {
      content: "→";
      font-size: 0.95rem;
    }

    .accent-civil { --accent: #6b5a41; }
    .accent-family { --accent: #b8754d; }
    .accent-public { --accent: #4e6a8a; }
    .accent-labor { --accent: #a45858; }
    .accent-criminal { --accent: #7a4d66; }
    .accent-property { --accent: #7f6b4a; }

    .practice-grid .practice-card:nth-child(1) { animation-delay: 0.05s; }
    .practice-grid .practice-card:nth-child(2) { animation-delay: 0.12s; }
    .practice-grid .practice-card:nth-child(3) { animation-delay: 0.19s; }
    .practice-grid .practice-card:nth-child(4) { animation-delay: 0.26s; }
    .practice-grid .practice-card:nth-child(5) { animation-delay: 0.33s; }
    .practice-grid .practice-card:nth-child(6) { animation-delay: 0.4s; }

    @keyframes expertise-rise {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Contact Info */
    .contact-info-section {
      background: #ffffff;
    }

    .contact-bar {
      display: flex;
      align-items: stretch;
    }

    .contact-item {
      flex: 1;
      text-align: center;
      padding: 35px 20px;
    }

    .contact-item h3 {
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 10px;
      color: #1a1a1a;
    }

    .contact-item p {
      font-size: 0.85rem;
      color: #4b5563;
    }

    .contact-divider {
      width: 2px;
      background: linear-gradient(to bottom, transparent, rgba(191, 152, 116, 0.7), transparent);
    }

    /* President Section */
    .president-section {
      padding: 90px 0;
      background: #ECECF1;
      position: relative;
      overflow: hidden;
    }

    .president-section::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        radial-gradient(circle at 85% 10%, rgba(191, 152, 116, 0.18), transparent 55%),
        radial-gradient(circle at 10% 80%, rgba(44, 62, 80, 0.08), transparent 55%);
      pointer-events: none;
    }

    .president-content {
      display: grid;
      grid-template-columns: 420px 1fr;
      gap: 70px;
      align-items: center;
      position: relative;
      z-index: 1;
    }

    .president-image-wrapper {
      border-radius: 18px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(20, 28, 40, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.7);
      background: #fff;
      height: 520px;
    }

    .president-image-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transform: scale(1.01);
    }

    .president-text {
      background: rgba(255, 255, 255, 0.75);
      border: 1px solid rgba(255, 255, 255, 0.6);
      box-shadow: 0 18px 36px rgba(26, 41, 66, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.7);
      border-radius: 18px;
      padding: 36px 38px;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      height: 520px;
      display: flex;
      flex-direction: column;
    }

    .president-text h2 {
      font-size: 2.1rem;
      font-weight: 800;
      color: #2C3E50;
      margin-bottom: 28px;
      text-transform: uppercase;
      line-height: 1.2;
      letter-spacing: 1px;
      position: relative;
      padding-bottom: 14px;
    }

    .president-text h2::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 70px;
      height: 3px;
      background: linear-gradient(90deg, #BF9874, transparent);
    }

    .president-text p {
      font-size: 0.95rem;
      line-height: 1.8;
      color: #4b5563;
      margin-bottom: 18px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .president-learn-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 14px 38px;
      background-color: transparent;
      color: #BF9874;
      border: 2px solid #BF9874;
      font-size: 0.9rem;
      font-weight: 700;
      cursor: pointer;
      margin-top: 18px;
      text-transform: capitalize;
      transition: all 0.3s ease;
      border-radius: 999px;
    }

    .president-learn-btn:hover {
      background-color: #BF9874;
      color: white;
    }

    .president-pagination {
      display: flex;
      gap: 12px;
      margin-top: 25px;
    }

    .pagination-dot {
      width: 12px;
      height: 12px;
      background-color: #d0d0d0;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      padding: 0;
      transition: all 0.3s ease;
    }

    .pagination-dot.active {
      background-color: #BF9874;
    }

    /* Newsletter */
    .newsletter-section {
      padding: 80px 0;
      background: #ffffff;
      color: #1a1a1a;
      position: relative;
      overflow: hidden;
      --glass-bg: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05));
      --glass-shadow: 0 16px 34px rgba(11, 18, 42, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.4);
    }

    .newsletter-section::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        radial-gradient(circle at 20% 20%, rgba(191, 152, 116, 0.08), transparent 45%),
        radial-gradient(circle at 80% 10%, rgba(44, 62, 80, 0.05), transparent 55%);
      pointer-events: none;
      z-index: 0;
    }

    .newsletter-section .container {
      position: relative;
      z-index: 1;
    }

    .newsletter-header {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 40px;
      margin-bottom: 15px;
    }

    .newsletter-header h2 {
      font-size: 2.4rem;
      font-weight: 800;
      color: #1a1a1a;
      margin: 0;
      letter-spacing: 4px;
      text-shadow: none;
    }

    .header-line {
      flex: 1;
      max-width: 200px;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(191, 152, 116, 0.85), transparent);
    }

    .newsletter-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 26px;
      margin-bottom: 50px;
      margin-top: 60px;
    }

    .news-card {
      background-color: transparent;
      border-radius: 18px;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      display: flex;
      flex-direction: column;
      border: none;
    }

    .news-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 18px 34px rgba(10, 16, 32, 0.25);
    }

    .news-image {
      width: 100%;
      height: 190px;
      overflow: hidden;
    }

    .news-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    .news-card:hover .news-image img {
      transform: scale(1.03);
    }

    .news-content {
      padding: 26px 22px 28px;
      color: #1a1a1a;
      flex: 1;
      display: flex;
      flex-direction: column;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.72));
      border-top: 1px solid rgba(255, 255, 255, 0.4);
    }

    .news-date {
      color: #6b5a41;
      font-weight: 600;
      font-size: 0.75rem;
      margin-bottom: 16px;
      text-transform: uppercase;
    }

    .news-content h3 {
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.5;
      color: #1f2937;
      margin: 0 0 20px 0;
    }

    .read-more-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: #9b6b3f;
      font-size: 0.85rem;
      font-weight: 700;
      text-decoration: none;
      text-transform: capitalize;
      margin-top: auto;
      padding-top: 12px;
    }

    .read-more-link svg {
      transition: transform 0.3s ease;
    }

    .read-more-link:hover svg {
      transform: translateX(4px);
    }

    .newsletter-actions {
      text-align: center;
    }

    .newsletter-learn-btn {
      padding: 16px 50px;
      background: transparent;
      color: #BF9874;
      border: 2px solid #BF9874;
      font-size: 0.95rem;
      font-weight: 700;
      cursor: pointer;
      text-transform: capitalize;
      transition: all 0.3s ease;
    }

    .newsletter-learn-btn:hover {
      background: #BF9874;
      color: white;
    }

    /* Footer */
    .footer-section {
      background-color: transparent;
    }

    .footer-main {
      background: #ECECF1;
      color: #55645c;
      padding: 60px 0 40px;
      position: relative;
      border-top: 1px solid rgba(255, 255, 255, 0.8);
    }

    .footer-main::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        radial-gradient(circle at 50% 0%, rgba(191, 152, 116, 0.22), transparent 55%),
        linear-gradient(90deg, rgba(255, 255, 255, 0.3), transparent 45%, rgba(255, 255, 255, 0.2));
      pointer-events: none;
    }

    .footer-main::after {
      content: '';
      position: absolute;
      inset: 0;
      background: repeating-linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.25) 0,
        rgba(255, 255, 255, 0.25) 1px,
        transparent 1px,
        transparent 140px
      );
      opacity: 0.15;
      pointer-events: none;
    }

    .footer-logo-wrapper {
      position: absolute;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(135deg, #ffffff, #f1f5fb);
      width: 120px;
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
      box-shadow: 0 18px 36px rgba(12, 18, 40, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.9);
    }

    .footer-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 50px;
      padding-top: 40px;
      position: relative;
      z-index: 1;
    }

    .footer-column h3 {
      color: #1a1a1a;
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 20px;
      text-transform: uppercase;
      letter-spacing: 1.2px;
      position: relative;
      display: inline-flex;
      padding-bottom: 10px;
    }

    .footer-column h3::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 36px;
      height: 2px;
      background: linear-gradient(90deg, #BF9874, transparent);
    }

    .footer-column p {
      font-size: 0.9rem;
      line-height: 1.8;
      margin: 5px 0;
      color: #4f5b66;
    }

    .footer-column ul {
      list-style: none;
      padding: 0;
    }

    .footer-column ul li {
      margin-bottom: 12px;
    }

    .footer-column ul li a {
      color: #4f5b66;
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s ease;
    }

    .footer-column ul li a:hover {
      color: #BF9874;
      text-decoration: underline;
      text-underline-offset: 4px;
    }

    .footer-bottom {
      background: #ffffff;
      padding: 25px 0;
      border-top: 1px solid rgba(26, 41, 66, 0.08);
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
      background-color: #ffffff;
      border-radius: 50%;
      color: #1f2937;
      border: 1px solid rgba(191, 152, 116, 0.35);
      box-shadow: 0 6px 14px rgba(10, 16, 32, 0.12);
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .social-icon:hover {
      background-color: #BF9874;
      border-color: #BF9874;
      color: #ffffff;
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
      color: #BF9874;
    }

    /* ========================================
       RESPONSIVE DESIGN - MEDIA QUERIES
       ======================================== */

    /* Large Tablets & Small Desktops (1024px - 1199px) */
    @media (max-width: 1199px) {
      .container {
        padding: 0 30px;
      }

      .hero-title {
        font-size: 2.4rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .key-facts-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .key-facts-subtitle {
        margin-left: 0;
      }

      .offer-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
      }

      .practice-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }

      .newsletter-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .president-content {
        grid-template-columns: 380px 1fr;
        gap: 50px;
      }
    }

    /* Tablets (768px - 1023px) */
    @media (max-width: 1023px) {
      .hero-slide {
        height: 500px;
      }

      .hero-title {
        font-size: 2rem;
      }

      .hero-description {
        font-size: 0.9rem;
      }

      .carousel-controls {
        gap: 20px;
      }

      .nav-arrow {
        width: 42px;
        height: 42px;
      }

      .quick-links-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }

      .connector-line {
        display: none;
      }

      .offer-section,
      .expertise-section,
      .president-section,
      .newsletter-section {
        padding: 56px 0;
      }

      .section-title {
        font-size: 1.8rem;
      }

      .key-facts-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .key-fact-chart {
        height: 200px;
      }

      .section-subtitle {
        margin-left: 0 !important;
        padding-left: 0 !important;
      }

      .expertise-line {
        width: 100px;
      }

      .practice-card {
        padding: 28px 24px;
        min-height: auto;
      }

      .contact-bar {
        flex-direction: column;
      }

      .contact-divider {
        width: 100%;
        height: 1px;
        background: linear-gradient(to right, transparent, #BF9874, transparent);
      }

      .contact-item {
        padding: 25px 20px;
      }

      .president-content {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .president-image-wrapper {
        max-width: 400px;
        margin: 0 auto;
      }

      .newsletter-header h2 {
        font-size: 2rem;
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

      .hero-slide {
        height: 450px;
      }

      .hero-title {
        font-size: 1.6rem;
      }

      .hero-subtitle {
        font-size: 0.7rem;
        letter-spacing: 1.5px;
      }

      .hero-description {
        font-size: 0.85rem;
        margin-bottom: 25px;
      }

      .hero-button {
        padding: 14px 30px;
        font-size: 0.85rem;
      }

      .hero-actions {
        gap: 10px;
      }

      .carousel-nav {
        bottom: 20px;
      }

      .carousel-controls {
        gap: 15px;
      }

      .nav-arrow {
        width: 38px;
        height: 38px;
      }

      .nav-arrow svg {
        width: 22px;
        height: 22px;
      }

      .indicator {
        width: 40px;
      }

      .key-facts-grid {
        grid-template-columns: 1fr;
      }

      .key-facts-subtitle {
        margin-left: 0;
      }

      .key-fact-chart {
        height: 190px;
      }

      .quick-links-container {
        grid-template-columns: 1fr;
        gap: 15px;
      }

      .quick-link-icon {
        width: 60px;
      }

      .quick-link-content h3 {
        font-size: 0.7rem;
      }

      .quick-link-content p {
        font-size: 0.75rem;
      }

      .offer-section,
      .expertise-section,
      .president-section,
      .newsletter-section {
        padding: 50px 0;
      }

      .section-title {
        font-size: 1.5rem;
      }

      .section-subtitle {
        font-size: 0.85rem;
      }

      .offer-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .offer-card {
        padding: 20px;
      }

      .expertise-header {
        gap: 15px;
        flex-wrap: wrap;
      }

      .expertise-line {
        width: 60px;
      }

      .practice-grid {
        grid-template-columns: 1fr;
        gap: 15px;
      }

      .practice-card {
        padding: 24px 20px;
        gap: 15px;
      }

      .practice-icon {
        width: 48px;
        height: 48px;
      }

      .practice-content h3 {
        font-size: 0.95rem;
      }

      .practice-desc {
        font-size: 0.85rem;
      }

      .practice-content li {
        font-size: 0.85rem;
      }

      .president-text h2 {
        font-size: 1.6rem;
        margin-bottom: 20px;
      }

      .president-text p {
        font-size: 0.9rem;
      }

      .newsletter-header {
        gap: 20px;
        flex-direction: column;
      }

      .header-line {
        max-width: 100px;
        display: none;
      }

      .newsletter-header h2 {
        font-size: 1.6rem;
        letter-spacing: 2px;
      }

      .newsletter-grid {
        grid-template-columns: 1fr;
        gap: 25px;
        margin-top: 40px;
      }

      .news-content {
        padding: 22px 18px;
      }

      .news-content h3 {
        font-size: 0.95rem;
      }

      .footer-logo-wrapper {
        width: 100px;
        height: 100px;
        top: -35px;
      }

      .footer-grid {
        grid-template-columns: 1fr;
        gap: 35px;
        padding-top: 30px;
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

      .hero-slide {
        height: 400px;
      }

      .hero-title {
        font-size: 1.4rem;
        margin-bottom: 15px;
      }

      .hero-subtitle {
        font-size: 0.65rem;
        margin-bottom: 12px;
      }

      .hero-description {
        font-size: 0.8rem;
        margin-bottom: 20px;
      }

      .hero-button {
        padding: 12px 25px;
        font-size: 0.8rem;
      }

      .hero-actions {
        gap: 8px;
      }

      .carousel-controls {
        gap: 12px;
      }

      .nav-arrow {
        width: 36px;
        height: 36px;
      }

      .indicator {
        width: 35px;
        height: 4px;
      }

      .quick-links-section {
        padding: 20px 0;
      }

      .key-facts-grid {
        grid-template-columns: 1fr;
      }

      .quick-links-container {
        grid-template-columns: 1fr;
      }

      .quick-link-item {
        padding: 12px;
        gap: 12px;
      }

      .quick-link-icon {
        width: 50px;
      }

      .quick-link-content h3 {
        font-size: 0.65rem;
      }

      .quick-link-content p {
        font-size: 0.7rem;
      }

      .quick-link-action {
        font-size: 0.7rem;
        padding: 8px 12px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.12);
      }

      .read-more-link {
        padding: 8px 12px;
        border-radius: 999px;
        background: rgba(191, 152, 116, 0.12);
      }

      .offer-section,
      .expertise-section,
      .president-section,
      .newsletter-section {
        padding: 36px 0;
      }

      .section-title {
        font-size: 1.3rem;
      }

      .section-subtitle {
        font-size: 0.8rem;
        margin-bottom: 35px;
      }

      .offer-header {
        gap: 12px;
      }

      .offer-line {
        width: 40px;
        height: 2px;
      }

      .offer-card {
        padding: 18px;
      }

      .offer-icon {
        width: 40px;
        height: 40px;
      }

      .offer-card h3 {
        font-size: 0.85rem;
      }

      .offer-card p {
        font-size: 0.8rem;
      }

      .expertise-header {
        gap: 12px;
      }

      .expertise-line {
        width: 40px;
      }

      .expertise-section .section-title {
        font-size: 1.3rem;
        letter-spacing: 1.5px;
      }

      .expertise-section .section-subtitle {
        font-size: 0.85rem;
        margin-bottom: 35px;
      }

      .practice-card {
        padding: 20px 16px;
      }

      .practice-icon {
        width: 44px;
        height: 44px;
      }

      .practice-icon svg {
        width: 28px;
        height: 28px;
      }

      .practice-content h3 {
        font-size: 0.9rem;
      }

      .practice-desc {
        font-size: 0.8rem;
      }

      .practice-content li {
        font-size: 0.8rem;
      }

      .practice-cta {
        font-size: 0.75rem;
      }

      .contact-item {
        padding: 20px 15px;
      }

      .contact-item h3 {
        font-size: 0.85rem;
      }

      .contact-item p {
        font-size: 0.8rem;
      }

      .president-text h2 {
        font-size: 1.4rem;
      }

      .president-text p {
        font-size: 0.85rem;
        line-height: 1.7;
      }

      .president-learn-btn {
        padding: 12px 30px;
        font-size: 0.85rem;
      }

      .newsletter-header h2 {
        font-size: 1.4rem;
      }

      .newsletter-grid {
        margin-top: 30px;
        gap: 20px;
      }

      .news-image {
        height: 180px;
      }

      .news-content {
        padding: 20px 16px;
      }

      .news-date {
        font-size: 0.7rem;
      }

      .news-content h3 {
        font-size: 0.9rem;
      }

      .read-more-link {
        font-size: 0.8rem;
      }

      .newsletter-learn-btn {
        padding: 14px 40px;
        font-size: 0.85rem;
      }

      .footer-main {
        padding: 50px 0 30px;
      }

      .footer-logo-wrapper {
        width: 90px;
        height: 90px;
        top: -30px;
      }

      .footer-grid {
        gap: 30px;
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
      .hero-slide {
        height: 350px;
      }

      .hero-title {
        font-size: 1.2rem;
      }

      .hero-subtitle {
        font-size: 0.6rem;
      }

      .hero-description {
        font-size: 0.75rem;
      }

      .section-title {
        font-size: 1.2rem;
      }

      .practice-card {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .practice-content li {
        text-align: left;
      }
    }

    /* Reduce Motion for Accessibility */
    @media (prefers-reduced-motion: reduce) {
      .practice-card {
        animation: none;
        opacity: 1;
        transform: none;
      }

      .hero-slide,
      .quick-link-item,
      .news-card,
      .nav-arrow,
      .hero-button,
      .president-learn-btn,
      .newsletter-learn-btn {
        transition: none;
      }
    }
  `]
})
export class HomeComponent implements OnInit, AfterViewInit {
  private heroSlideIntervalId?: number;
  private presidentSlideIntervalId?: number;
  private resizeObserver?: ResizeObserver;
  private readonly handleVisibilityChange = () => {
    if (!document.hidden) {
      this.reflowCharts();
    }
  };
  @ViewChild('caseVolumeChart', { static: true })
  caseVolumeChart!: ElementRef<HTMLDivElement>;

  @ViewChild('processingTimeChart', { static: true })
  processingTimeChart!: ElementRef<HTMLDivElement>;

  @ViewChild('decisionsTypeChart', { static: true })
  decisionsTypeChart!: ElementRef<HTMLDivElement>;

  private readonly destroyRef = inject(DestroyRef);
  private chartInstances: Highcharts.Chart[] = [];

  currentSlide = signal(0);
  currentPresidentSlide = signal(0);
  logo = '/assets/logo.png';

  heroSlides: HeroSlide[] = [
    {
      id: 1,
      titleKey: 'home.hero.slides.1.title',
      subtitleKey: 'home.hero.slides.1.subtitle',
      descriptionKey: 'home.hero.slides.1.body',
      buttonKey: 'home.hero.slides.1.cta',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop'
    },
    {
      id: 2,
      titleKey: 'home.hero.slides.2.title',
      subtitleKey: 'home.hero.slides.2.subtitle',
      descriptionKey: 'home.hero.slides.2.body',
      buttonKey: 'home.hero.slides.2.cta',
      image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1920&h=1080&fit=crop'
    },
    {
      id: 3,
      titleKey: 'home.hero.slides.3.title',
      subtitleKey: 'home.hero.slides.3.subtitle',
      descriptionKey: 'home.hero.slides.3.body',
      buttonKey: 'home.hero.slides.3.cta',
      image: 'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=1920&h=1080&fit=crop'
    }
  ];

  presidentSlides: PresidentSlide[] = [
    {
      id: 1,
      titleKey: 'home.president.slides.1.title',
      image: 'https://scontent.fpry2-1.fna.fbcdn.net/v/t39.30808-6/481977439_661094752968468_3580912692254417664_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=781MphyOZxYQ7kNvwFA72Pl&_nc_oc=AdlS3efGmR2NwVl7AluKnrYklBBqsJYuTlJ2j9PkHSisG9RQ-4n7jDHjPIDmj6En6_w&_nc_zt=23&_nc_ht=scontent.fpry2-1.fna&_nc_gid=ECXY9r39JHQUTs-eZefdrQ&oh=00_AfsTzaj3KdpgLrEjgftG5I3y5wMeOJriKEBVHzCL_mVnRA&oe=69939BC0',
      paragraphKeys: [
        'home.president.slides.1.paragraphs.1',
        'home.president.slides.1.paragraphs.2',
        'home.president.slides.1.paragraphs.3'
      ]
    },
    {
      id: 2,
      titleKey: 'home.president.slides.2.title',
      image: 'https://scontent.fpry2-1.fna.fbcdn.net/v/t39.30808-6/481977439_661094752968468_3580912692254417664_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=781MphyOZxYQ7kNvwFA72Pl&_nc_oc=AdlS3efGmR2NwVl7AluKnrYklBBqsJYuTlJ2j9PkHSisG9RQ-4n7jDHjPIDmj6En6_w&_nc_zt=23&_nc_ht=scontent.fpry2-1.fna&_nc_gid=ECXY9r39JHQUTs-eZefdrQ&oh=00_AfsTzaj3KdpgLrEjgftG5I3y5wMeOJriKEBVHzCL_mVnRA&oe=69939BC0',
      paragraphKeys: [
        'home.president.slides.2.paragraphs.1',
        'home.president.slides.2.paragraphs.2',
        'home.president.slides.2.paragraphs.3'
      ]
    },
    {
      id: 3,
      titleKey: 'home.president.slides.3.title',
      image: 'https://scontent.fpry2-1.fna.fbcdn.net/v/t39.30808-6/481977439_661094752968468_3580912692254417664_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=781MphyOZxYQ7kNvwFA72Pl&_nc_oc=AdlS3efGmR2NwVl7AluKnrYklBBqsJYuTlJ2j9PkHSisG9RQ-4n7jDHjPIDmj6En6_w&_nc_zt=23&_nc_ht=scontent.fpry2-1.fna&_nc_gid=ECXY9r39JHQUTs-eZefdrQ&oh=00_AfsTzaj3KdpgLrEjgftG5I3y5wMeOJriKEBVHzCL_mVnRA&oe=69939BC0',
      paragraphKeys: [
        'home.president.slides.3.paragraphs.1',
        'home.president.slides.3.paragraphs.2',
        'home.president.slides.3.paragraphs.3'
      ]
    }
  ];

  ngOnInit() {
    this.heroSlideIntervalId = window.setInterval(() => {
      this.nextSlide();
    }, 7000);

    this.presidentSlideIntervalId = window.setInterval(() => {
      this.nextPresidentSlide();
    }, 8000);

    this.destroyRef.onDestroy(() => {
      if (this.heroSlideIntervalId !== undefined) {
        window.clearInterval(this.heroSlideIntervalId);
      }
      if (this.presidentSlideIntervalId !== undefined) {
        window.clearInterval(this.presidentSlideIntervalId);
      }
    });
  }

  ngAfterViewInit() {
    this.renderKeyFactsCharts();
    this.setupChartObservers([
      this.caseVolumeChart,
      this.processingTimeChart,
      this.decisionsTypeChart
    ]);
    this.destroyRef.onDestroy(() => {
      this.chartInstances.forEach(chart => chart.destroy());
      this.chartInstances = [];
      document.removeEventListener('visibilitychange', this.handleVisibilityChange);
      this.resizeObserver?.disconnect();
      this.resizeObserver = undefined;
    });
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

  private renderKeyFactsCharts() {
    const baseAxisLabelStyle = {
      color: '#4b5563',
      fontSize: '12px',
      fontWeight: '600'
    };

    const caseVolumeOptions: Highcharts.Options = {
      chart: {
        type: 'column',
        backgroundColor: 'transparent',
        height: 220,
        spacing: [10, 10, 0, 10]
      },
      title: { text: undefined },
      credits: { enabled: false },
      legend: { enabled: false },
      xAxis: {
        categories: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
        labels: { style: baseAxisLabelStyle },
        lineColor: 'rgba(26, 41, 66, 0.2)',
        tickColor: 'rgba(26, 41, 66, 0.2)'
      },
      yAxis: {
        title: { text: undefined },
        labels: { style: baseAxisLabelStyle },
        gridLineColor: 'rgba(26, 41, 66, 0.12)'
      },
      tooltip: {
        backgroundColor: '#1a2942',
        style: { color: '#ffffff' },
        borderColor: '#1a2942'
      },
      series: [
        {
          type: 'column',
          name: 'Cases',
          data: [420, 460, 510, 470, 530, 590],
          color: '#6b5a41',
          borderRadius: 4
        }
      ]
    };

    const processingTimeOptions: Highcharts.Options = {
      chart: {
        type: 'line',
        backgroundColor: 'transparent',
        height: 220,
        spacing: [10, 10, 0, 10]
      },
      title: { text: undefined },
      credits: { enabled: false },
      legend: { enabled: false },
      xAxis: {
        categories: ['Q1', 'Q2', 'Q3', 'Q4'],
        labels: { style: baseAxisLabelStyle },
        lineColor: 'rgba(26, 41, 66, 0.2)',
        tickColor: 'rgba(26, 41, 66, 0.2)'
      },
      yAxis: {
        title: { text: undefined },
        labels: { style: baseAxisLabelStyle },
        gridLineColor: 'rgba(26, 41, 66, 0.12)'
      },
      tooltip: {
        backgroundColor: '#1a2942',
        style: { color: '#ffffff' },
        borderColor: '#1a2942',
        valueSuffix: ' days'
      },
      series: [
        {
          type: 'line',
          name: 'Processing time',
          data: [92, 84, 76, 68],
          color: '#b8754d',
          marker: { radius: 4 }
        }
      ]
    };

    const decisionsTypeOptions: Highcharts.Options = {
      chart: {
        type: 'pie',
        backgroundColor: 'transparent',
        height: 220,
        spacing: [10, 10, 0, 10]
      },
      title: { text: undefined },
      credits: { enabled: false },
      legend: {
        align: 'center',
        verticalAlign: 'bottom',
        itemStyle: { color: '#1f2937', fontWeight: '600', fontSize: '12px' }
      },
      tooltip: {
        backgroundColor: '#1a2942',
        style: { color: '#ffffff' },
        borderColor: '#1a2942',
        pointFormat: '<b>{point.percentage:.0f}%</b>'
      },
      plotOptions: {
        pie: {
          innerSize: '55%',
          dataLabels: { enabled: false }
        }
      },
      series: [
        {
          type: 'pie',
          name: 'Decisions',
          data: [
            { name: 'Civil', y: 38, color: '#6b5a41' },
            { name: 'Public', y: 27, color: '#4e6a8a' },
            { name: 'Labor', y: 18, color: '#a45858' },
            { name: 'Other', y: 17, color: '#7f6b4a' }
          ]
        }
      ]
    };

    this.chartInstances = [
      Highcharts.chart(this.caseVolumeChart.nativeElement, caseVolumeOptions),
      Highcharts.chart(this.processingTimeChart.nativeElement, processingTimeOptions),
      Highcharts.chart(this.decisionsTypeChart.nativeElement, decisionsTypeOptions)
    ];
  }

  nextSlide() {
    this.currentSlide.update(current =>
      current === this.heroSlides.length - 1 ? 0 : current + 1
    );
  }

  previousSlide() {
    this.currentSlide.update(current =>
      current === 0 ? this.heroSlides.length - 1 : current - 1
    );
  }

  goToSlide(index: number) {
    this.currentSlide.set(index);
  }

  nextPresidentSlide() {
    this.currentPresidentSlide.update(current =>
      current === this.presidentSlides.length - 1 ? 0 : current + 1
    );
  }

  goToPresidentSlide(index: number) {
    this.currentPresidentSlide.set(index);
  }
}
