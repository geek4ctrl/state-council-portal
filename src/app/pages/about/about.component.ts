import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="page-container">
      <section class="hero-section">
        <div class="hero-content">
          <h1>Presentation</h1>
          <p class="subtitle">The Court of Cassation</p>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .page-container {
      padding-top: 80px;
    }

    .hero-section {
      background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
      color: white;
      padding: 120px 20px;
      text-align: center;
    }

    .hero-content h1 {
      font-size: 3.5rem;
      font-weight: bold;
      margin: 0 0 20px 0;
      letter-spacing: 2px;
    }

    .subtitle {
      font-size: 1.5rem;
      opacity: 0.9;
      font-weight: 300;
    }

    @media (max-width: 768px) {
      .hero-content h1 {
        font-size: 2.5rem;
      }

      .subtitle {
        font-size: 1.2rem;
      }
    }

    @media (max-width: 480px) {
      .hero-section {
        padding: 80px 15px;
      }

      .hero-content h1 {
        font-size: 2rem;
      }

      .subtitle {
        font-size: 1rem;
      }
    }
  `]
})
export class AboutComponent {}
