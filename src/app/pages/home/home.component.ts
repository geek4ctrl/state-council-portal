import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nPipe } from '../../i18n/i18n.pipe';

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
  standalone: true,
  imports: [CommonModule, I18nPipe],
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
              <p class="hero-description">{{ heroSlides[currentSlide()].descriptionKey | i18n }}</p>
              <button class="hero-button">{{ heroSlides[currentSlide()].buttonKey | i18n }}</button>
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

    <!-- Info Cards Section -->
    <section class="quick-links-section">
      <div class="container">
        <div class="quick-links-container">
          <div class="quick-link-item">
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

          <div class="quick-link-item">
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

          <div class="quick-link-item">
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

          <div class="quick-link-item">
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

        <!-- <div class="expertise-stats">
          <div class="stat-item">
            <span class="stat-value">{{ 'home.expertise.stats.domains.value' | i18n }}</span>
            <span class="stat-label">{{ 'home.expertise.stats.domains.label' | i18n }}</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value">{{ 'home.expertise.stats.decisions.value' | i18n }}</span>
            <span class="stat-label">{{ 'home.expertise.stats.decisions.label' | i18n }}</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value">{{ 'home.expertise.stats.magistrates.value' | i18n }}</span>
            <span class="stat-label">{{ 'home.expertise.stats.magistrates.label' | i18n }}</span>
          </div>
        </div> -->

        <div class="practice-grid">
          <a class="practice-card accent-civil" href="#">
            <div class="practice-icon">
              <svg viewBox="0 0 64 64" fill="currentColor">
                <path d="M38 8L26 8C24 8 22 10 22 12L22 52C22 54 24 56 26 56L38 56C40 56 42 54 42 52L42 12C42 10 40 8 38 8Z"/>
                <path d="M32 12L28 16L36 16L32 12Z" fill="white"/>
              </svg>
            </div>
            <div class="practice-content">
              <h3>{{ 'home.expertise.areas.civil.title' | i18n }}</h3>
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
            <div class="practice-icon">
              <svg viewBox="0 0 64 64" fill="currentColor">
                <path d="M24 40C16 40 10 44 10 50V56H38V50C38 44 32 40 24 40Z"/>
                <path d="M40 40C38 40 36 40.4 34 41C37 43 38 46 38 50V56H54V50C54 44 48 40 40 40Z"/>
                <circle cx="24" cy="26" r="10"/>
                <circle cx="42" cy="24" r="8"/>
              </svg>
            </div>
            <div class="practice-content">
              <h3>{{ 'home.expertise.areas.family.title' | i18n }}</h3>
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
            <div class="practice-icon">
              <svg viewBox="0 0 64 64" fill="currentColor">
                <path d="M32 8L18 14V28C18 40 26 48 32 52C38 48 46 40 46 28V14L32 8Z M32 12L42 16V28C42 38 36 44 32 48C28 44 22 38 22 28V16L32 12Z"/>
                <rect x="28" y="24" width="8" height="16" fill="white"/>
                <rect x="24" y="32" width="16" height="4" fill="white"/>
              </svg>
            </div>
            <div class="practice-content">
              <h3>{{ 'home.expertise.areas.public.title' | i18n }}</h3>
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
            <div class="practice-icon">
              <svg viewBox="0 0 64 64" fill="currentColor">
                <rect x="22" y="28" width="20" height="20" rx="2"/>
                <rect x="26" y="20" width="12" height="10" rx="2"/>
                <circle cx="32" cy="38" r="3" fill="white"/>
              </svg>
            </div>
            <div class="practice-content">
              <h3>{{ 'home.expertise.areas.labor.title' | i18n }}</h3>
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
            <div class="practice-icon">
              <svg viewBox="0 0 64 64" fill="currentColor">
                <path d="M32 8C24 8 18 14 18 22C18 30 24 36 32 36C40 36 46 30 46 22C46 14 40 8 32 8Z"/>
                <path d="M46 18C46 14 43 11 39 11L25 11C21 11 18 14 18 18L18 46C18 50 21 53 25 53L39 53C43 53 46 50 46 46L46 18Z"/>
                <path d="M28 18L32 24L36 18" stroke="#BF9874" stroke-width="2" fill="none"/>
              </svg>
            </div>
            <div class="practice-content">
              <h3>{{ 'home.expertise.areas.criminal.title' | i18n }}</h3>
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
            <div class="practice-icon">
              <svg viewBox="0 0 64 64" fill="currentColor">
                <rect x="16" y="32" width="32" height="20"/>
                <polygon points="32,12 16,32 48,32"/>
                <rect x="28" y="24" width="8" height="8" fill="white"/>
              </svg>
            </div>
            <div class="practice-content">
              <h3>{{ 'home.expertise.areas.property.title' | i18n }}</h3>
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
          <div class="news-card">
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

          <div class="news-card">
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

          <div class="news-card">
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

          <div class="news-card">
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

    /* Top Info Bar */
    .top-info-bar {
      background-color: #1E2E45;
      padding: 12px 0;
      border-bottom: 1px solid rgba(191, 152, 116, 0.2);
    }

    .top-info-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .info-left {
      display: flex;
      align-items: center;
      gap: 35px;
    }

    .info-item {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #ffffff;
      font-size: 0.8rem;
      font-weight: 500;
    }

    .info-item svg {
      flex-shrink: 0;
    }

    .social-links {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .social-link {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      transition: all 0.3s ease;
      text-decoration: none;
    }

    .social-link:hover {
      background-color: #BF9874;
      transform: translateY(-2px);
    }

    .social-link:hover svg {
      fill: white;
    }

    /* Navigation */
    .main-nav {
      background-color: #ffffff;
      padding: 18px 0;
      border-bottom: 1px solid #e5e5e5;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .nav-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      flex-shrink: 0;
    }

    .nav-menu {
      display: flex;
      list-style: none;
      gap: 35px;
      margin: 0 auto;
    }

    .nav-item {
      position: relative;
    }

    .nav-link {
      color: #1a1a1a;
      text-decoration: none;
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 0.5px;
      display: flex;
      align-items: center;
      transition: color 0.3s ease;
    }

    .nav-item.active .nav-link {
      color: #BF9874;
    }

    .nav-link:hover {
      color: #BF9874;
    }

    .book-appointment-btn {
      padding: 12px 28px;
      background-color: #C82333;
      color: white;
      border: none;
      font-size: 0.85rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s ease;
      text-transform: capitalize;
    }

    .book-appointment-btn:hover {
      background-color: #A01D29;
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

    .hero-button {
      padding: 16px 38px;
      background-color: #C82333;
      color: white;
      border: none;
      font-size: 0.9rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s ease;
      text-transform: capitalize;
    }

    .hero-button:hover {
      background-color: #A01D29;
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

    /* Quick Links Section */
    .quick-links-section {
      background: linear-gradient(135deg, #26384c 0%, #2f4258 55%, #243548 100%);
      padding: 28px 0;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
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
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
      transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
    }

    .quick-link-item:hover {
      transform: translateY(-4px);
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(191, 152, 116, 0.35);
    }

    .quick-link-icon {
      width: 64px;
      height: 100%;
      flex-shrink: 0;
      border-radius: 14px;
      overflow: hidden;
      background-color: white;
      align-self: stretch;
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
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
      color: white;
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.7px;
      line-height: 1.25;
    }

    .quick-link-content p {
      font-size: 0.78rem;
      color: rgba(255, 255, 255, 0.85);
      line-height: 1.55;
      margin-bottom: 6px;
    }

    .quick-link-action {
      color: white;
      font-size: 0.75rem;
      font-weight: 700;
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
      padding: 80px 0;
      background-color: #ffffff;
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
  margin-top: 10px;         /* spacing below the title */
  margin-bottom: 50px;
  line-height: 1.6;
  max-width: 820px;         /* optional for readability */

  /* ALIGN WITH TITLE */
  margin-left: calc(60px + 20px);  /* offer-line width + gap from .offer-header */
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
      align-items: flex-start;
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
      background: white
      overflow: hidden;
    }
    .style-hr{
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

    // .expertise-stats {
    //   display: flex;
    //   align-items: center;
    //   justify-content: center;
    //   gap: 24px;
    //   margin: 0 auto 40px;
    //   color: rgba(255, 255, 255, 0.85);
    //   text-transform: uppercase;
    //   letter-spacing: 1.5px;
    //   font-size: 0.7rem;
    //   position: relative;
    //   z-index: 1;
    //   flex-wrap: wrap;
    // }

    .stat-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      min-width: 120px;
    }

    .stat-value {
      font-size: 1.6rem;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: 1px;
    }

    .stat-label {
      color: rgba(255, 255, 255, 0.6);
    }

    .stat-divider {
      width: 1px;
      height: 36px;
      background: linear-gradient(180deg, transparent, rgba(191, 152, 116, 0.6), transparent);
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

    .practice-card.featured {
      background: linear-gradient(135deg, #ffffff 0%, #f6f2ec 100%);
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

    .practice-content h3 {
      font-size: 1.05rem;
      font-weight: 700;
      margin-bottom: 8px;
      color: #1a1a1a;
      line-height: 1.3;
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

    .practice-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 1px;
      color: #8b7355;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    .practice-content ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .practice-content li {
      padding: 6px 0;
      color: #5b5b5b;
      font-size: 0.9rem;
      position: relative;
      padding-left: 18px;
      line-height: 1.55;
    }

    .practice-content li::before {
      content: "•";
      position: absolute;
      left: 0;
      color: var(--accent);
      font-weight: bold;
      font-size: 1.2rem;
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

    .accent-featured { --accent: #8b7355; }
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
    .practice-grid .practice-card:nth-child(7) { animation-delay: 0.47s; }

    @keyframes expertise-rise {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .practice-card {
        animation: none;
        opacity: 1;
        transform: none;
      }
    }

    /* Contact Info */
    .contact-info-section {
      background-color: #EAF1FA;
      // border-top: 2px solid #667C99;
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
      color: #555;
    }

    .contact-divider {
      width: 2px;
      background: linear-gradient(to bottom, transparent, #BF9874, transparent);
    }

    /* President Section */
    .president-section {
      padding: 80px 0;
      background: #F5F0EB;
    }

    .president-content {
      display: grid;
      grid-template-columns: 420px 1fr;
      gap: 70px;
    }

    .president-image-wrapper img {
      width: 100%;
      height: auto;
      display: block;
    }

    .president-text h2 {
      font-size: 2rem;
      font-weight: 800;
      color: #2C3E50;
      margin-bottom: 28px;
      text-transform: uppercase;
      line-height: 1.3;
    }

    .president-text p {
      font-size: 0.95rem;
      line-height: 1.8;
      color: #555;
      margin-bottom: 18px;
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
      background: linear-gradient(135deg, #26384c 0%, #2f4258 55%, #243548 100%);
      color: white;
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
      color: white;
      margin: 0;
      letter-spacing: 4px;
    }

    .header-line {
      flex: 1;
      max-width: 200px;
      height: 1px;
      background-color: #BF9874;
    }

    .newsletter-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
      margin-bottom: 50px;
      margin-top: 60px;
    }

    .news-card {
      background-color: white;
      overflow: hidden;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      border: 1px solid transparent;
    }

    .news-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    }

    .news-image {
      width: 100%;
      height: 200px;
      overflow: hidden;
    }

    .news-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .news-content {
      padding: 28px 22px;
      color: #1a1a1a;
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .news-date {
      color: #666;
      font-weight: 600;
      font-size: 0.75rem;
      margin-bottom: 16px;
      text-transform: uppercase;
    }

    .news-content h3 {
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.5;
      color: #1a1a1a;
      margin: 0 0 20px 0;
    }

    .read-more-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: #BF9874;
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

    @media (max-width: 1024px) {
      .offer-grid,
      .practice-grid,
      .newsletter-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .quick-links-container {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 24px 30px;
      }

      .quick-link-item {
        gap: 16px;
      }

      .president-content {
        grid-template-columns: 380px 1fr;
      }

      .info-left {
        gap: 20px;
      }

      .info-item span {
        font-size: 0.75rem;
      }
    }

    @media (max-width: 768px) {
      .quick-links-container {
        grid-template-columns: 1fr;
      }

      .quick-link-item {
        align-items: flex-start;
      }

      .quick-link-icon {
        width: 44px;
        height: 44px;
      }

      .offer-grid,
      .practice-grid,
      .newsletter-grid {
        grid-template-columns: 1fr;
      }

      // .expertise-stats {
      //   gap: 16px;
      // }

      .stat-divider {
        display: none;
      }

      .president-content {
        grid-template-columns: 1fr;
      }

      .contact-bar {
        flex-direction: column;
      }

      .footer-grid {
        grid-template-columns: 1fr;
      }

      .connector-line {
        display: none;
      }

      .section-subtitle {
        padding-left: 0 !important;
      }

      .top-info-content {
        flex-direction: column;
        gap: 15px;
      }

      .info-left {
        flex-direction: column;
        gap: 10px;
        width: 100%;
        align-items: flex-start;
      }

      .info-item {
        font-size: 0.75rem;
      }

      .social-links {
        width: 100%;
        justify-content: center;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  currentSlide = signal(0);
  currentPresidentSlide = signal(0);
  logo = '/src/assets/logo.png';

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
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop',
      paragraphKeys: [
        'home.president.slides.1.paragraphs.1',
        'home.president.slides.1.paragraphs.2',
        'home.president.slides.1.paragraphs.3'
      ]
    },
    {
      id: 2,
      titleKey: 'home.president.slides.2.title',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop',
      paragraphKeys: [
        'home.president.slides.2.paragraphs.1',
        'home.president.slides.2.paragraphs.2',
        'home.president.slides.2.paragraphs.3'
      ]
    },
    {
      id: 3,
      titleKey: 'home.president.slides.3.title',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop',
      paragraphKeys: [
        'home.president.slides.3.paragraphs.1',
        'home.president.slides.3.paragraphs.2',
        'home.president.slides.3.paragraphs.3'
      ]
    }
  ];

  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 7000);

    setInterval(() => {
      this.nextPresidentSlide();
    }, 8000);
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

