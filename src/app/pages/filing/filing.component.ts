import { Component } from '@angular/core';

@Component({
  selector: 'app-filing',
  standalone: true,
  template: `
    <div class="page-container">
      <section class="hero-section">
        <div class="hero-content">
          <h1>Report</h1>
          <p class="subtitle">Submit a Report to the Court of Cassation</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <div class="intro">
            <h2>How to Submit a Report</h2>
            <p>
              Learn how to submit a formal report to the Court of Cassation regarding judicial matters,
              procedural concerns, or other official communications.
            </p>
          </div>
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

    .content-section {
      padding: 80px 20px;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .intro {
      text-align: center;
      margin-bottom: 60px;
    }

    .intro h2 {
      font-size: 2.2rem;
      color: #2c3e50;
      margin-bottom: 20px;
    }

    .intro p {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #555;
      max-width: 900px;
      margin: 0 auto;
    }

    @media (max-width: 768px) {
      .hero-content h1 {
        font-size: 2.5rem;
      }

      .subtitle {
        font-size: 1.2rem;
      }

      .content-section {
        padding: 60px 15px;
      }

      .intro h2 {
        font-size: 1.6rem;
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
export class FilingComponent {}
