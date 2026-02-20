import { Component, computed, inject } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';
import { I18nPipe } from '../../i18n/i18n.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, I18nPipe],
  template: `
    <footer class="footer-section">
      <div class="footer-main">
        <div class="footer-logo-wrapper">
          <img [src]="footerLogo()" alt="Footer Logo">
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
  `,
  styles: [
    `/* Footer styles copied from home.component.ts */
    .footer-section { background-color: transparent; }
    .footer-main { background: #ECECF1; color: #55645c; padding: 60px 0 40px; position: relative; }
    .footer-main::before { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 50% 0%, rgba(0, 127, 255, 0.15), transparent 55%), linear-gradient(90deg, rgba(255, 255, 255, 0.3), transparent 45%, rgba(255, 255, 255, 0.2)); pointer-events: none; }
    .footer-main::after { content: ''; position: absolute; inset: 0; background: repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.25) 0, rgba(255, 255, 255, 0.25) 1px, transparent 1px, transparent 140px); opacity: 0.15; pointer-events: none; }
    .footer-logo-wrapper { position: absolute; top: -46px; left: 50%; transform: translateX(-50%); background: linear-gradient(135deg, #ffffff, #f1f5fb); width: 120px; height: 120px; display: flex; align-items: center; justify-content: center; clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%); box-shadow: 0 18px 36px rgba(12, 18, 40, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.8); border: 1px solid rgba(255, 255, 255, 0.9); }
    .footer-logo-wrapper img { max-width: 64%; max-height: 80%; object-fit: contain; }
    .footer-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 50px; padding-top: 40px; position: relative; z-index: 1; }
    .footer-column { text-align: left; }
    .footer-column h3 { color: #1a1a1a; font-size: 1.1rem; font-weight: 600; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1.2px; position: relative; display: inline-flex; padding-bottom: 10px; text-align: left; }
    .footer-column h3::after { content: ''; position: absolute; left: 0; bottom: 0; width: 36px; height: 2px; background: linear-gradient(90deg, #007FFF, transparent); }
    .footer-column p { font-size: 0.9rem; line-height: 1.8; margin: 5px 0; color: #4f5b66; text-align: left; }
    .footer-column ul { list-style: none; padding: 0; }
    .footer-column ul li { margin-bottom: 12px; text-align: left; }
    .footer-column ul li a { color: #4f5b66; text-decoration: none; font-size: 0.9rem; transition: color 0.3s ease; text-align: left; }
    .footer-column ul li a:hover { color: #007FFF; text-decoration: underline; text-underline-offset: 4px; }
    .footer-bottom { background: #ffffff; padding: 16px 0 !important; border-top: 1px solid rgba(26, 41, 66, 0.08); }
    .footer-bottom-content { display: flex; align-items: center; justify-content: space-between; gap: 20px; }
    .social-icons { display: flex; gap: 15px; }
    .social-icon { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; background-color: #ffffff; border-radius: 50%; color: #1f2937; border: 1px solid rgba(0, 127, 255, 0.35); box-shadow: 0 6px 14px rgba(10, 16, 32, 0.12); text-decoration: none; transition: all 0.3s ease; }
    .social-icon:hover { background-color: #007FFF; border-color: #007FFF; color: #ffffff; }
    .social-icon svg { width: 16px; height: 16px; }
    .copyright { font-size: 0.85rem; color: #555; text-align: center; }
    .privacy-link { color: #555; text-decoration: none; font-size: 0.85rem; transition: color 0.3s ease; }
    .privacy-link:hover { color: #007FFF; }
    @media (max-width: 1199px) { .footer-grid { grid-template-columns: repeat(2, 1fr); gap: 40px; } .footer-logo-wrapper { width: 100px; height: 100px; top: -35px; } }
    @media (max-width: 767px) { .footer-grid { grid-template-columns: 1fr; gap: 35px; padding-top: 30px; } .footer-logo-wrapper { width: 90px; height: 90px; top: -30px; } .footer-bottom-content { flex-direction: column; gap: 15px; text-align: center; } .social-icons { justify-content: center; } }
    @media (max-width: 575px) { .footer-logo-wrapper { width: 80px; height: 80px; top: -25px; } .footer-grid { gap: 30px; } .footer-column h3 { font-size: 1rem; } .footer-column p, .footer-column ul li a { font-size: 0.85rem; } .footer-bottom { padding: 20px 0; } .copyright, .privacy-link { font-size: 0.8rem; } .social-icon { width: 32px; height: 32px; } }
    `
  ]
})
export class FooterComponent {
  private readonly i18n = inject(I18nService);
  footerLogo = computed(() => {
    return this.i18n.activeLang() === 'fr' ? '/assets/logo-fn.png' : '/assets/logo-en.png';
  });
}
