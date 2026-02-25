import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { I18nPipe } from '../../i18n/i18n.pipe';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-coming-soon',
  imports: [CommonModule, RouterLink, I18nPipe, FooterComponent],
  standalone: true,
  template: `
    <div class="page-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-grid">
            <div class="hero-left">
              <h1>{{ title() }}</h1>
            </div>
            <div class="vertical-divider"></div>
            <div class="hero-right">
              <p>{{ 'comingSoon.description' | i18n }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Coming Soon Content -->
      <section class="coming-soon-section">
        <div class="container">
          <div class="coming-soon-content">
            <div class="icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h2 class="coming-soon-title">{{ 'comingSoon.subtitle' | i18n }}</h2>
            <p class="coming-soon-description">{{ 'comingSoon.description' | i18n }}</p>
            <a routerLink="/" class="btn-home">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              {{ 'comingSoon.backHome' | i18n }}
            </a>
          </div>
        </div>
      </section>

      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .page-container {
      background: white;
      min-height: 100vh;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .hero-section {
      background: linear-gradient(135deg, rgba(26, 41, 66, 0.92), rgba(44, 62, 80, 0.88)),
                  url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=600&fit=crop') center/cover;
      background-color: #2c3e50;
      color: white;
      padding: 120px 0;
      position: relative;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1fr 2px 2fr;
      gap: 60px;
      align-items: center;
    }

    .hero-left h1 {
      font-size: 2.5rem;
      font-weight: 700;
      margin: 0;
      letter-spacing: 4px;
      color: #ffffff;
      text-transform: uppercase;
      text-align: left;
    }

    .vertical-divider {
      width: 2px;
      height: 140px;
      background-color: rgba(255, 255, 255, 0.7);
      display: block;
      align-self: center;
    }

    .hero-right p {
      font-size: 1.05rem;
      line-height: 1.8;
      margin: 0;
      opacity: 0.95;
      color: #ffffff;
      font-weight: 300;
      text-align: left;
    }

    .coming-soon-section {
      padding: 100px 0;
      background: white;
    }

    .coming-soon-content {
      text-align: center;
      max-width: 700px;
      margin: 0 auto;
    }

    .icon-wrapper {
      width: 100px;
      height: 100px;
      margin: 0 auto 1.5rem;
      background: linear-gradient(135deg, #1F9BD9 0%, #1F9BD9 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 10px 30px rgba(0, 127, 255, 0.3);
    }

    .icon-wrapper svg {
      width: 50px;
      height: 50px;
      color: white;
    }

    .coming-soon-title {
      font-size: 1.75rem;
      font-weight: 700;
      color: #1F9BD9;
      margin-bottom: 1rem;
      letter-spacing: 0.5px;
    }

    .coming-soon-description {
      font-size: 1rem;
      color: #667085;
      line-height: 1.7;
      margin-bottom: 2rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .btn-home {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.875rem 2rem;
      background: #1F9BD9;
      color: white;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 700;
      font-size: 0.9rem;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(0, 127, 255, 0.3);
      border: 1px solid #1F9BD9;
    }

    .btn-home svg {
      width: 18px;
      height: 18px;
    }

    .btn-home:hover {
      background: #1F9BD9;
      border-color: #1F9BD9;
      transform: translateY(-2px);
      // box-shadow: 0 8px 25px rgba(0, 127, 255, 0.4);
    }

    /* Responsive Design */
    @media (max-width: 1023px) {
      .hero-section {
        padding: 100px 0;
      }

      .hero-grid {
        grid-template-columns: 1fr;
        gap: 30px;
        text-align: center;
      }

      .hero-left h1 {
        font-size: 2rem;
        letter-spacing: 2.5px;
        text-align: center;
      }

      .vertical-divider {
        width: 150px;
        height: 2px;
        margin: 0 auto;
        background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.7), transparent);
      }

      .hero-right p {
        text-align: center;
      }
    }

    @media (max-width: 767px) {
      .hero-section {
        padding: 80px 0;
      }

      .hero-left h1 {
        font-size: 1.5rem;
        letter-spacing: 2px;
      }

      .vertical-divider {
        width: 120px;
      }

      .hero-right p {
        font-size: 0.95rem;
      }

      .coming-soon-section {
        padding: 70px 0;
      }

      .icon-wrapper {
        width: 90px;
        height: 90px;
      }

      .icon-wrapper svg {
        width: 45px;
        height: 45px;
      }

      .coming-soon-title {
        font-size: 1.75rem;
      }

      .coming-soon-description {
        font-size: 0.95rem;
      }

      .btn-home {
        padding: 0.8rem 1.75rem;
        font-size: 0.875rem;
      }
    }

    @media (max-width: 575px) {
      .hero-section {
        padding: 60px 0;
      }

      .hero-left h1 {
        font-size: 1.25rem;
        letter-spacing: 1.5px;
      }

      .vertical-divider {
        width: 100px;
      }

      .hero-right p {
        font-size: 0.9rem;
      }

      .coming-soon-section {
        padding: 50px 0;
      }

      .icon-wrapper {
        width: 80px;
        height: 80px;
      }

      .icon-wrapper svg {
        width: 40px;
        height: 40px;
      }

      .coming-soon-title {
        font-size: 1.5rem;
      }

      .coming-soon-description {
        font-size: 0.875rem;
      }

      .btn-home {
        padding: 0.75rem 1.5rem;
        font-size: 0.8rem;
      }
    }

    @media (max-width: 374px) {
      .hero-left h1 {
        font-size: 1rem;
        letter-spacing: 1px;
      }

      .vertical-divider {
        width: 80px;
      }
    }
  `]
})
export class ComingSoonComponent implements OnInit {
  title = signal<string>('');

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeTitle = this.route.snapshot.data['title'];
    this.title.set(routeTitle || 'Coming Soon');
  }
}
