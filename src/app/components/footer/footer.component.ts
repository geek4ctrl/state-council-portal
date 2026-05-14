import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../i18n/i18n.service';
import { I18nPipe } from '../../i18n/i18n.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, I18nPipe, RouterLink],
  template: `
    <footer class="footer-section">
      <!-- Main Footer -->
      <div class="footer-main">
        <div class="footer-inner">
          <div class="footer-grid">
            <!-- About Column -->
            <div class="footer-column footer-about">
              <div class="footer-brand">
                <img [src]="footerLogo()" alt="Footer Logo" class="footer-logo-img" />
                <span class="footer-brand-name">Conseil d'État</span>
              </div>
              <p class="footer-about-text">{{ 'footer.about.description' | i18n }}</p>
              <div class="footer-address-card">
                <div class="address-card-header">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>{{ 'footer.mainOffice.title' | i18n }}</span>
                </div>
                <div class="address-card-body">
                  <p>{{ 'footer.mainOffice.address1' | i18n }}</p>
                  <p>{{ 'footer.mainOffice.address2' | i18n }}</p>
                  <p>{{ 'footer.mainOffice.address3' | i18n }}</p>
                </div>
              </div>
              <div class="footer-contact-row">
                <a href="tel:+243813494697" class="contact-chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <span>+243 813 494 697</span>
                </a>
                <a href="mailto:info@conseildetatrdc.com" class="contact-chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <span>info&#64;conseildetatrdc.com</span>
                </a>
              </div>
            </div>

            <!-- Quick Links -->
            <div class="footer-column">
              <h3>{{ 'footer.quickLinks.title' | i18n }}</h3>
              <ul>
                <li><a routerLink="/presentation">{{ 'footer.quickLinks.about' | i18n }}</a></li>
                <li><a routerLink="/judges">{{ 'footer.quickLinks.jurisprudence' | i18n }}</a></li>
                <li><a routerLink="/steps">{{ 'footer.quickLinks.filing' | i18n }}</a></li>
                <li><a routerLink="/news">{{ 'footer.quickLinks.news' | i18n }}</a></li>
                <li><a routerLink="/publications">{{ 'footer.quickLinks.publications' | i18n }}</a></li>
              </ul>
            </div>

            <!-- Resources -->
            <div class="footer-column">
              <h3>{{ 'footer.resources.title' | i18n }}</h3>
              <ul>
                <li><a routerLink="/process">{{ 'footer.resources.legalDocs' | i18n }}</a></li>
                <li><a routerLink="/news">{{ 'footer.resources.decisions' | i18n }}</a></li>
                <li><a routerLink="/news">{{ 'footer.resources.reports' | i18n }}</a></li>
                <li><a routerLink="/steps">{{ 'footer.resources.faqs' | i18n }}</a></li>
                <li><a routerLink="/appointment">{{ 'footer.resources.appointment' | i18n }}</a></li>
              </ul>
            </div>

            <!-- Legal -->
            <div class="footer-column">
              <h3>{{ 'footer.legal.title' | i18n }}</h3>
              <ul>
                <li><a routerLink="/presentation">{{ 'footer.legal.terms' | i18n }}</a></li>
                <li><a routerLink="/presentation">{{ 'footer.legal.privacy' | i18n }}</a></li>
                <li><a routerLink="/presentation">{{ 'footer.legal.accessibility' | i18n }}</a></li>
                <li><a routerLink="/presentation">{{ 'footer.legal.sitemap' | i18n }}</a></li>
              </ul>
              <div class="footer-social">
                <span>{{ 'footer.connect.title' | i18n }}</span>
                <div class="social-icons">
                  <a href="https://www.facebook.com/ConseilEtatRDC/" target="_blank" rel="noopener noreferrer" class="social-icon" [attr.aria-label]="'footer.connect.facebook' | i18n">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
                  </a>
                  <a href="https://x.com/ConseilEtatRDC" target="_blank" rel="noopener noreferrer" class="social-icon" [attr.aria-label]="'footer.connect.twitter' | i18n">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <div class="footer-inner">
          <div class="footer-bottom-content">
            <p class="copyright">{{ 'footer.copyright' | i18n }}</p>
            <div class="footer-bottom-links">
              <a routerLink="/presentation">{{ 'footer.legal.privacy' | i18n }}</a>
              <span class="dot-separator"></span>
              <a routerLink="/presentation">{{ 'footer.legal.terms' | i18n }}</a>
              <span class="dot-separator"></span>
              <span class="footer-hours">{{ 'footer.mainOffice.hours' | i18n }}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
      }
      .footer-section {
        background-color: transparent;
        width: 100%;
      }

      /* Main Footer */
      .footer-main {
        background: linear-gradient(180deg, #f0f2f7 0%, #e8ecf3 100%);
        color: #55645c;
        padding: 64px 0 48px;
        position: relative;
      }
      .footer-main::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(31, 155, 217, 0.2), transparent);
      }
      .footer-inner {
        width: 100%;
        max-width: 1200px;
        padding: 0 40px;
        margin: 0 auto;
      }
      .footer-grid {
        display: grid;
        grid-template-columns: 1.4fr 1fr 1fr 1fr;
        gap: 48px;
        position: relative;
        z-index: 1;
      }

      /* About Column */
      .footer-about {
        padding-right: 24px;
      }
      .footer-brand {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 16px;
      }
      .footer-logo-img {
        height: 48px;
        width: auto;
        object-fit: contain;
      }
      .footer-brand-name {
        font-size: 1.15rem;
        font-weight: 700;
        color: #1a2942;
        letter-spacing: 0.3px;
      }
      .footer-about-text {
        font-size: 0.88rem;
        line-height: 1.7;
        color: #5c6773;
        margin: 0 0 20px;
      }
      .footer-address-card {
        background: #ffffff;
        border-radius: 12px;
        padding: 16px;
        box-shadow: 0 4px 16px rgba(26, 41, 66, 0.06);
        border: 1px solid rgba(31, 155, 217, 0.1);
        margin-bottom: 16px;
      }
      .address-card-header {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #1F9BD9;
        font-weight: 600;
        font-size: 0.85rem;
        margin-bottom: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(31, 155, 217, 0.1);
      }
      .address-card-header svg {
        width: 18px;
        height: 18px;
      }
      .address-card-body p {
        font-size: 0.82rem;
        line-height: 1.7;
        margin: 3px 0;
        color: #4f5b66;
      }
      .footer-contact-row {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }
      .contact-chip {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 14px;
        background: #ffffff;
        border-radius: 8px;
        border: 1px solid rgba(31, 155, 217, 0.12);
        color: #4f5b66;
        font-size: 0.82rem;
        text-decoration: none;
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
        box-shadow: 0 2px 8px rgba(26, 41, 66, 0.04);
      }
      .contact-chip:hover {
        border-color: rgba(31, 155, 217, 0.3);
        box-shadow: 0 4px 12px rgba(26, 41, 66, 0.08);
        color: #1a2942;
      }
      .contact-chip svg {
        width: 14px;
        height: 14px;
        color: #1F9BD9;
      }

      /* Link Columns */
      .footer-column h3 {
        color: #1a2942;
        font-size: 0.95rem;
        font-weight: 700;
        margin: 0 0 20px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
      }
      .footer-column ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .footer-column ul li {
        margin-bottom: 12px;
      }
      .footer-column ul li a {
        color: #5c6773;
        text-decoration: none;
        font-size: 0.88rem;
        transition: color 0.2s ease, padding-left 0.2s ease;
        display: inline-block;
      }
      .footer-column ul li a:hover {
        color: #1F9BD9;
        padding-left: 4px;
      }

      /* Social in Legal Column */
      .footer-social {
        margin-top: 24px;
        padding-top: 20px;
        border-top: 1px solid rgba(26, 41, 66, 0.08);
      }
      .footer-social span {
        display: block;
        font-size: 0.8rem;
        font-weight: 600;
        color: #1a2942;
        margin-bottom: 12px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .social-icons {
        display: flex;
        gap: 10px;
      }
      .social-icon {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #ffffff;
        border-radius: 10px;
        color: #5c6773;
        border: 1px solid rgba(26, 41, 66, 0.1);
        text-decoration: none;
        transition: all 0.25s ease;
        box-shadow: 0 2px 8px rgba(26, 41, 66, 0.06);
      }
      .social-icon:hover {
        background: #1F9BD9;
        border-color: #1F9BD9;
        color: #ffffff;
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(31, 155, 217, 0.25);
      }
      .social-icon svg {
        width: 16px;
        height: 16px;
      }

      /* Bottom Bar */
      .footer-bottom {
        background: #ffffff;
        padding: 20px 0;
        border-top: 1px solid rgba(26, 41, 66, 0.06);
      }
      .footer-bottom-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        flex-wrap: wrap;
      }
      .copyright {
        font-size: 0.82rem;
        color: #7b8594;
        margin: 0;
      }
      .footer-bottom-links {
        display: flex;
        align-items: center;
        gap: 16px;
        flex-wrap: wrap;
      }
      .footer-bottom-links a {
        color: #7b8594;
        text-decoration: none;
        font-size: 0.82rem;
        transition: color 0.2s ease;
      }
      .footer-bottom-links a:hover {
        color: #1F9BD9;
      }
      .dot-separator {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: rgba(26, 41, 66, 0.2);
      }
      .footer-hours {
        font-size: 0.82rem;
        color: #7b8594;
      }

      /* Responsive */
      @media (max-width: 1024px) {
        .newsletter-content {
          flex-direction: column;
          text-align: center;
          gap: 24px;
        }
        .newsletter-form {
          width: 100%;
          justify-content: center;
        }
        .newsletter-input {
          flex: 1;
          max-width: 300px;
        }
        .footer-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }
        .footer-about {
          grid-column: 1 / -1;
          padding-right: 0;
        }
      }
      @media (max-width: 768px) {
        .newsletter-band {
          padding: 36px 0;
        }
        .newsletter-form {
          flex-direction: column;
          width: 100%;
        }
        .newsletter-input {
          width: 100%;
          max-width: none;
        }
        .newsletter-btn {
          width: 100%;
        }
        .footer-main {
          padding: 48px 0 36px;
        }
        .footer-grid {
          grid-template-columns: 1fr;
          gap: 32px;
        }
        .footer-bottom-content {
          flex-direction: column;
          text-align: center;
          gap: 12px;
        }
        .footer-bottom-links {
          justify-content: center;
        }
      }
      @media (max-width: 480px) {
        .footer-inner {
          padding: 0 24px;
        }
        .footer-brand-name {
          font-size: 1rem;
        }
        .footer-column h3 {
          font-size: 0.9rem;
        }
        .footer-column ul li a {
          font-size: 0.85rem;
        }
      }

      /* Dark Mode */
      :host-context([data-theme="dark"]) .footer-main {
        background: linear-gradient(180deg, #1f2d3f 0%, #1a2332 100%);
        color: #8899aa;
      }
      :host-context([data-theme="dark"]) .footer-main::before {
        background: linear-gradient(90deg, transparent, rgba(79, 195, 247, 0.15), transparent);
      }
      :host-context([data-theme="dark"]) .footer-brand-name {
        color: #e4eaf0;
      }
      :host-context([data-theme="dark"]) .footer-about-text {
        color: #8899aa;
      }
      :host-context([data-theme="dark"]) .footer-address-card {
        background: #243447;
        border-color: rgba(79, 195, 247, 0.12);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
      }
      :host-context([data-theme="dark"]) .address-card-header {
        border-bottom-color: rgba(79, 195, 247, 0.1);
      }
      :host-context([data-theme="dark"]) .address-card-body p {
        color: #8899aa;
      }
      :host-context([data-theme="dark"]) .contact-chip {
        background: #243447;
        border-color: rgba(79, 195, 247, 0.12);
        color: #8899aa;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      }
      :host-context([data-theme="dark"]) .contact-chip:hover {
        border-color: rgba(79, 195, 247, 0.3);
        color: #e4eaf0;
      }
      :host-context([data-theme="dark"]) .footer-column h3 {
        color: #e4eaf0;
      }
      :host-context([data-theme="dark"]) .footer-column ul li a {
        color: #8899aa;
      }
      :host-context([data-theme="dark"]) .footer-column ul li a:hover {
        color: #4fc3f7;
      }
      :host-context([data-theme="dark"]) .footer-social {
        border-top-color: rgba(79, 195, 247, 0.06);
      }
      :host-context([data-theme="dark"]) .footer-social span {
        color: #e4eaf0;
      }
      :host-context([data-theme="dark"]) .social-icon {
        background: #243447;
        border-color: rgba(79, 195, 247, 0.12);
        color: #8899aa;
      }
      :host-context([data-theme="dark"]) .social-icon:hover {
        background: #4fc3f7;
        border-color: #4fc3f7;
        color: #fff;
      }
      :host-context([data-theme="dark"]) .footer-bottom {
        background: #162030;
        border-top-color: rgba(79, 195, 247, 0.06);
      }
      :host-context([data-theme="dark"]) .copyright {
        color: #6b7d8e;
      }
      :host-context([data-theme="dark"]) .footer-bottom-links a {
        color: #6b7d8e;
      }
      :host-context([data-theme="dark"]) .footer-bottom-links a:hover {
        color: #4fc3f7;
      }
      :host-context([data-theme="dark"]) .dot-separator {
        background: rgba(79, 195, 247, 0.15);
      }
      :host-context([data-theme="dark"]) .footer-hours {
        color: #6b7d8e;
      }
    `,
  ],
})
export class FooterComponent {
  private readonly i18n = inject(I18nService);
  footerLogo = computed(() => '/assets/new-logo.png');
}
