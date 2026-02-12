import { Component, signal, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonLoaderComponent } from '../../components/skeleton-loader/skeleton-loader.component';
import { IconComponent } from '../../components/icon/icon.component';
import { SeoService } from '../../services/seo.service';
import { I18nPipe } from '../../i18n/i18n.pipe';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, SkeletonLoaderComponent, IconComponent, I18nPipe],
  template: `
    <div class="page-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-grid">
            <div class="hero-left">
              <h1>{{ 'news.hero.title' | i18n }}</h1>
            </div>
            <div class="vertical-divider"></div>
            <div class="hero-right">
              <p>{{ 'news.hero.body' | i18n }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- News Feed Section -->
      <section class="news-section">
        <div class="container">
          <div class="section-header">
            <div class="header-decoration-left"></div>
            <h2>{{ 'news.section.title' | i18n }}</h2>
            <div class="header-decoration-right"></div>
          </div>
          <p class="section-subtitle">{{ 'news.section.subtitle' | i18n }}</p>

          <div class="news-grid">
            @if (isLoading()) {
              @for (item of [1, 2, 3]; track item) {
                <app-skeleton-loader type="news-card"></app-skeleton-loader>
              }
            } @else {
              @for (article of getCurrentPageArticles(); track article.id) {
                <article class="news-card">
                  <div class="news-image">
                    <img [src]="article.image" [alt]="article.titleKey | i18n" loading="lazy">
                  </div>
                  <div class="news-content">
                    <div class="news-meta">
                      <span class="news-date">{{ article.dateKey | i18n }}</span>
                      <span class="news-divider">|</span>
                      <span class="news-category">{{ article.categoryKey | i18n }}</span>
                    </div>
                    <h3 class="news-title">{{ article.titleKey | i18n }}</h3>
                    <p class="news-excerpt">{{ article.excerptKey | i18n }}</p>
                    <a href="#" class="read-more">
                      {{ 'news.actions.readMore' | i18n }}
                    </a>
                  </div>
                </article>
              }
            }
          </div>

          <!-- Pagination -->
          <nav class="pagination" [attr.aria-label]="'news.pagination.label' | i18n" role="navigation">
            <button
              class="pagination-btn prev-btn"
              [disabled]="currentPage() === 1"
              (click)="goToPreviousPage()"
              [attr.aria-label]="'news.pagination.previous' | i18n">
              <app-icon name="chevron-down" [size]="20" [customClass]="'rotate-90'" [attr.aria-hidden]="true"></app-icon>Previous
            </button>
            <button
              class="pagination-number"
              [class.active]="currentPage() === 1"
              (click)="goToPage(1)"
              [attr.aria-current]="currentPage() === 1 ? 'page' : null"
              [attr.aria-label]="'news.pagination.pageLabel' | i18n : { page: 1 }">
              1
            </button>
            <button
              class="pagination-number"
              [class.active]="currentPage() === 2"
              (click)="goToPage(2)"
              [attr.aria-current]="currentPage() === 2 ? 'page' : null"
              [attr.aria-label]="'news.pagination.pageLabel' | i18n : { page: 2 }">
              2
            </button>
            <button
              class="pagination-number"
              [class.active]="currentPage() === 3"
              (click)="goToPage(3)"
              [attr.aria-current]="currentPage() === 3 ? 'page' : null"
              [attr.aria-label]="'news.pagination.pageLabel' | i18n : { page: 3 }">
              3
            </button>
            <button 
              class="pagination-btn next-btn" 
              [disabled]="currentPage() === totalPages"
              (click)="goToNextPage()"
              [attr.aria-label]="'news.pagination.next' | i18n">
              <span class="next-text">{{ 'news.pagination.next' | i18n }}</span>
              <app-icon name="chevron-right" [size]="16" [attr.aria-hidden]="true"></app-icon>
            </button>
          </nav>
        </div>
      </section>

      <!-- Footer Section -->
      <footer class="footer-section">
        <div class="footer-main">
          <div class="footer-logo-wrapper">
            <img src="/src/assets/logo.png" alt="Footer Logo">
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
                    <path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.82 2.16-4.82 4.82 0 .38.04.75.13 1.10-4-.2-7.54-2.12-9.91-5.04-.42.72-.66 1.55-.66 2.44 0 1.67.85 3.15 2.14 4.01-.79-.03-1.53-.24-2.18-.6v.06c0 2.34 1.66 4.29 3.87 4.73-.4.11-.83.17-1.27.17-.31 0-.62-.03-.92-.08.63 1.96 2.44 3.38 4.6 3.42-1.68 1.32-3.8 2.1-6.11 2.1-.4 0-.79-.02-1.17-.07 2.18 1.4 4.77 2.21 7.55 2.21 9.06 0 14-7.5 14-14 0-.21 0-.42-.02-.63.96-.69 1.8-1.56 2.46-2.55z"/>
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
                  url('/assets/images/news-hero.jpg') center/cover;
      background-color: #2c3e50;
      color: white;
      padding: 100px 0;
      position: relative;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1fr auto 1.8fr;
      gap: 60px;
      align-items: center;
    }

    .hero-left h1 {
      font-size: 5rem;
      font-weight: 700;
      margin: 0;
      letter-spacing: 8px;
      color: #ffffff;
      text-transform: uppercase;
      font-family: 'Playfair Display', serif;
    }

    .vertical-divider {
      width: 2px;
      height: 120px;
      background-color: rgba(255, 255, 255, 0.5);
      display: block;
    }

    .hero-right p {
      font-size: 1.05rem;
      line-height: 1.8;
      margin: 0;
      opacity: 0.95;
      color: #ffffff;
      font-weight: 300;
    }

    /* News Section */
    .news-section {
      padding: 80px 0 100px;
      background: #fafafa;
    }

    .section-header {
      text-align: center;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
    }

    .header-decoration-left,
    .header-decoration-right {
      flex: 0 0 80px;
      height: 1px;
      background: linear-gradient(90deg, transparent, #c9a961, transparent);
    }

    .section-header h2 {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0;
      letter-spacing: 3px;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .section-subtitle {
      font-size: 0.85rem;
      color: #c9a961;
      text-transform: uppercase;
      letter-spacing: 3px;
      margin: 0 0 60px 0;
      text-align: center;
      font-weight: 400;
    }

    /* News Grid */
    .news-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      margin-bottom: 50px;
    }

    .news-card {
      background: white;
      border-radius: 0;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      display: flex;
      flex-direction: column;
    }

    .news-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    }

    .news-image {
      width: 100%;
      height: 250px;
      overflow: hidden;
      background: #f0f0f0;
    }

    .news-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .news-card:hover .news-image img {
      transform: scale(1.05);
    }

    .news-content {
      padding: 25px;
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .news-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.8rem;
      color: #999;
      margin-bottom: 15px;
    }

    .news-date {
      color: #666;
      font-weight: 500;
    }

    .news-divider {
      color: #ddd;
    }

    .news-category {
      color: #666;
      font-weight: 500;
    }

    .news-title {
      font-size: 1.05rem;
      font-weight: 600;
      color: #1a1a1a;
      margin: 0 0 15px 0;
      line-height: 1.5;
      min-height: 50px;
    }

    .news-excerpt {
      font-size: 0.9rem;
      color: #666;
      line-height: 1.7;
      margin: 0 0 15px 0;
      flex: 1;
    }

    .read-more {
      color: #2c3e50;
      font-size: 0.85rem;
      font-weight: 600;
      text-decoration: underline;
      transition: color 0.3s ease;
      text-underline-offset: 4px;
      display: inline-block;
      margin-top: auto;
    }

    .read-more:hover {
      color: #BF9874;
    }

    /* Pagination */
    .pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    .pagination-btn,
    .pagination-number {
      background: white;
      border: 1px solid #ddd;
      color: #666;
      padding: 10px 15px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 0.9rem;
      font-weight: 500;
    }

    .pagination-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .pagination-btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .pagination-number {
      min-width: 45px;
      text-align: center;
    }

    .pagination-number.active {
      background: #BF9874;
      color: white;
      border-color: #BF9874;
    }

    .pagination-number:hover:not(.active) {
      border-color: #BF9874;
      color: #BF9874;
    }

    .pagination-btn:hover:not(:disabled) {
      border-color: #BF9874;
      color: #BF9874;
    }

    .pagination-btn.next-btn {
      padding: 10px 20px;
      font-weight: 600;
      text-transform: capitalize;
    }

    .pagination-btn.prev-btn {
      padding: 10px 15px;
    }

    .next-text {
      font-size: 0.9rem;
    }

    /* Icon rotations for arrows */
    ::ng-deep .rotate-90 {
      transform: rotate(90deg);
    }

    ::ng-deep .rotate-180 {
      transform: rotate(180deg);
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

      .hero-left h1 {
        font-size: 4.5rem;
        letter-spacing: 6px;
      }

      .hero-grid {
        gap: 50px;
      }

      .vertical-divider {
        height: 100px;
      }

      .section-header h2 {
        font-size: 2.2rem;
      }

      .news-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
      }
    }

    /* Tablets (768px - 1023px) */
    @media (max-width: 1023px) {
      .hero-section {
        padding: 90px 0;
      }

      .hero-left h1 {
        font-size: 4rem;
        letter-spacing: 5px;
      }

      .hero-grid {
        gap: 40px;
      }

      .vertical-divider {
        height: 90px;
      }

      .hero-right p {
        font-size: 1rem;
      }

      .news-section {
        padding: 70px 0 90px;
      }

      .section-header h2 {
        font-size: 2rem;
      }

      .header-decoration-left,
      .header-decoration-right {
        flex: 0 0 60px;
      }

      .news-image {
        height: 220px;
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
        grid-template-columns: 1fr;
        gap: 30px;
        text-align: center;
      }

      .hero-left h1 {
        font-size: 3rem;
        letter-spacing: 4px;
      }

      .vertical-divider {
        width: 100px;
        height: 2px;
        margin: 0 auto;
      }

      .hero-right p {
        font-size: 0.95rem;
        line-height: 1.7;
      }

      .news-section {
        padding: 60px 0 80px;
      }

      .section-header {
        flex-direction: column;
        gap: 15px;
      }

      .section-header h2 {
        font-size: 1.8rem;
        letter-spacing: 2px;
      }

      .header-decoration-left,
      .header-decoration-right {
        width: 80px;
        flex: 0 0 auto;
      }

      .section-subtitle {
        font-size: 0.8rem;
        margin-bottom: 40px;
      }

      .news-grid {
        grid-template-columns: 1fr;
        gap: 24px;
        margin-bottom: 40px;
      }

      .news-image {
        height: 200px;
      }

      .news-content {
        padding: 20px;
      }

      .news-title {
        min-height: auto;
        font-size: 1rem;
      }

      .news-excerpt {
        font-size: 0.85rem;
      }

      .pagination {
        gap: 8px;
        flex-wrap: wrap;
      }

      .pagination-btn,
      .pagination-number {
        padding: 8px 12px;
        font-size: 0.85rem;
      }

      .pagination-btn.next-btn {
        padding: 8px 16px;
      }

      .next-text {
        font-size: 0.85rem;
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

      .hero-left h1 {
        font-size: 2.5rem;
        letter-spacing: 3px;
      }

      .vertical-divider {
        width: 70px;
      }

      .hero-right p {
        font-size: 0.9rem;
      }

      .news-section {
        padding: 50px 0 70px;
      }

      .section-header h2 {
        font-size: 1.5rem;
        letter-spacing: 1.5px;
      }

      .header-decoration-left,
      .header-decoration-right {
        width: 60px;
      }

      .section-subtitle {
        font-size: 0.75rem;
        letter-spacing: 2px;
        margin-bottom: 35px;
      }

      .news-grid {
        gap: 20px;
        margin-bottom: 35px;
      }

      .news-image {
        height: 180px;
      }

      .news-content {
        padding: 18px;
      }

      .news-meta {
        font-size: 0.75rem;
      }

      .news-title {
        font-size: 0.95rem;
        margin-bottom: 12px;
      }

      .news-excerpt {
        font-size: 0.8rem;
        margin-bottom: 12px;
      }

      .read-more {
        font-size: 0.8rem;
      }

      .pagination {
        gap: 6px;
      }

      .pagination-btn,
      .pagination-number {
        padding: 7px 10px;
        font-size: 0.8rem;
      }

      .pagination-number {
        min-width: 38px;
      }

      .pagination-btn.next-btn {
        padding: 7px 14px;
      }

      .next-text {
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
      .hero-left h1 {
        font-size: 2rem;
        letter-spacing: 2px;
      }

      .vertical-divider {
        width: 50px;
      }

      .section-header h2 {
        font-size: 1.3rem;
      }

      .header-decoration-left,
      .header-decoration-right {
        width: 50px;
      }

      .news-image {
        height: 160px;
      }

      .pagination-btn,
      .pagination-number {
        padding: 6px 8px;
        font-size: 0.75rem;
      }

      .pagination-number {
        min-width: 35px;
      }
    }

    /* Landscape Orientation Fixes */
    @media (max-height: 600px) and (orientation: landscape) {
      .hero-section {
        padding: 50px 0;
      }

      .news-section {
        padding: 40px 0 60px;
      }
    }

    /* Reduce Motion for Accessibility */
    @media (prefers-reduced-motion: reduce) {
      .news-card,
      .social-icon,
      .pagination-btn,
      .pagination-number {
        transition: none;
      }

      .news-card:hover,
      .news-card:hover .news-image img {
        transform: none;
      }
    }
  `]
})
export class NewsComponent implements OnInit {
  private seoService = inject(SeoService);
  currentPage = signal(1);
  isLoading = signal(true);
  totalPages = 3;
  itemsPerPage = 3;

  ngOnInit() {
    // Set SEO metadata
    this.seoService.updateMetadata({
      title: 'Actualités',
      description: 'Suivez les dernières actualités, événements et communications officielles du Conseil d\'État de la République Démocratique du Congo.',
      keywords: 'actualités, nouvelles, Conseil d\'État RDC, événements, communications officielles',
      ogUrl: '/news'
    });

    // Simulate loading data
    setTimeout(() => {
      this.isLoading.set(false);
    }, 1500);
  }

  // All news articles (9 total for 3 pages)
  allNewsArticles = [
    // Page 1
    {
      id: 1,
      dateKey: 'news.articles.1.date',
      categoryKey: 'news.articles.1.category',
      titleKey: 'news.articles.1.title',
      excerptKey: 'news.articles.1.excerpt',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop'
    },
    {
      id: 2,
      dateKey: 'news.articles.2.date',
      categoryKey: 'news.articles.2.category',
      titleKey: 'news.articles.2.title',
      excerptKey: 'news.articles.2.excerpt',
      image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&h=600&fit=crop'
    },
    {
      id: 3,
      dateKey: 'news.articles.3.date',
      categoryKey: 'news.articles.3.category',
      titleKey: 'news.articles.3.title',
      excerptKey: 'news.articles.3.excerpt',
      image: 'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=800&h=600&fit=crop'
    },
    // Page 2
    {
      id: 4,
      dateKey: 'news.articles.4.date',
      categoryKey: 'news.articles.4.category',
      titleKey: 'news.articles.4.title',
      excerptKey: 'news.articles.4.excerpt',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=600&fit=crop'
    },
    {
      id: 5,
      dateKey: 'news.articles.5.date',
      categoryKey: 'news.articles.5.category',
      titleKey: 'news.articles.5.title',
      excerptKey: 'news.articles.5.excerpt',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop'
    },
    {
      id: 6,
      dateKey: 'news.articles.6.date',
      categoryKey: 'news.articles.6.category',
      titleKey: 'news.articles.6.title',
      excerptKey: 'news.articles.6.excerpt',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop'
    },
    // Page 3
    {
      id: 7,
      dateKey: 'news.articles.7.date',
      categoryKey: 'news.articles.7.category',
      titleKey: 'news.articles.7.title',
      excerptKey: 'news.articles.7.excerpt',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop'
    },
    {
      id: 8,
      dateKey: 'news.articles.8.date',
      categoryKey: 'news.articles.8.category',
      titleKey: 'news.articles.8.title',
      excerptKey: 'news.articles.8.excerpt',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop'
    },
    {
      id: 9,
      dateKey: 'news.articles.9.date',
      categoryKey: 'news.articles.9.category',
      titleKey: 'news.articles.9.title',
      excerptKey: 'news.articles.9.excerpt',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop'
    }
  ];

  // Get articles for current page
  getCurrentPageArticles() {
    const startIndex = (this.currentPage() - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.allNewsArticles.slice(startIndex, endIndex);
  }

  // Navigate to specific page
  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage.set(page);
      // Scroll to top of news section smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // Navigate to previous page
  goToPreviousPage() {
    if (this.currentPage() > 1) {
      this.goToPage(this.currentPage() - 1);
    }
  }

  // Navigate to next page
  goToNextPage() {
    if (this.currentPage() < this.totalPages) {
      this.goToPage(this.currentPage() + 1);
    }
  }
}