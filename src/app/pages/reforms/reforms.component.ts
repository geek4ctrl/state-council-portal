import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reforms',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-grid">
            <div class="hero-content-left">
              <h1>SUGGESTED<br>REFORMS</h1>
            </div>
            <div class="hero-content-right">
              <p>
                Modernizing the judicial system through strategic reforms that enhance efficiency, transparency, and access to justice
                for all Congolese citizens.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Building Section -->
      <section class="building-section">
        <div class="container">
          <h2 class="section-title">BUILDING A STRONGER JUSTICE SYSTEM</h2>
          <p class="section-description">
            Anchoring the State Constitution, the Court of Justice as the supreme court in the ordinary judicial system is committed to
            transforming into a modern, accessible, and efficient justice system for achieving a full scale rule of law that delivers
            justice in the Democratic Republic of Congo.
          </p>
        </div>
      </section>

      <!-- Strategic Reform Initiatives -->
      <section class="initiatives-section">
        <div class="container">
          <h2 class="section-title">STRATEGIC REFORM INITIATIVES</h2>
          <p class="section-subtitle">KEY PRIORITY AREAS</p>

          <div class="diagram-container">
            <div class="reform-circle">
              <!-- Top Left -->
              <div class="reform-card card-1">
                <div class="card-icon beige">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 14v-2h10v2H7z"/>
                    <path d="M20 8h-3V6c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6h6v2H9V6zm11 14H4V10h16v10z"/>
                    <path d="M12 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                  </svg>
                </div>
                <h3>Institutional<br>Independence</h3>
                <p>Strengthening judicial independence through constitutional safeguards and financial autonomy for the Court.</p>
              </div>

              <!-- Top Center -->
              <div class="reform-card card-2">
                <div class="card-icon dark-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="2" y="2" width="20" height="20" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 10h8M8 14h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    <circle cx="12" cy="7" r="1.5"/>
                  </svg>
                </div>
                <h3>Access to Justice</h3>
                <p>Ensuring digital and physical access points, establishing regional service points, and reducing barriers for litigants.</p>
              </div>

              <!-- Top Right -->
              <div class="reform-card card-3">
                <div class="card-icon black">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V9h7V6.3l5 2.42V12z"/>
                  </svg>
                </div>
                <h3>International<br>Cooperation</h3>
                <p>Deepening partnerships with AU-COMJE, ACALAN and other international judicial bodies and courts.</p>
              </div>

              <!-- Bottom Left -->
              <div class="reform-card card-4">
                <div class="card-icon gray">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                    <path d="M7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/>
                  </svg>
                </div>
                <h3>Digital<br>Transformation</h3>
                <p>Implementing modern case management systems, online filing capabilities, and database for enhanced efficiency.</p>
              </div>

              <!-- Bottom Right -->
              <div class="reform-card card-5">
                <div class="card-icon orange">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="white">
                    <text x="10" y="45" font-size="18" font-weight="bold">CAPACITY</text>
                    <text x="15" y="65" font-size="18" font-weight="bold">BUILDING</text>
                  </svg>
                </div>
                <h3>Capacity Building</h3>
                <p>Continuous training for magistrates, international judicial exchanges, and advanced legal training programs.</p>
              </div>

              <!-- Dotted Lines -->
              <svg class="dotted-lines" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
                <!-- Pentagon shape connecting all 5 points -->
                <path d="M 400 80 L 650 250 L 550 520 L 250 520 L 150 250 Z"
                      stroke="#c0c0c0"
                      stroke-width="2"
                      stroke-dasharray="8,6"
                      fill="none"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <!-- Key Stakeholders Section -->
      <section class="stakeholders-section">
        <div class="container">
          <h2 class="section-title">KEY STAKEHOLDERS</h2>
          <p class="section-subtitle">DRIVING LEADERSHIP</p>

          <div class="stakeholders-grid">
            <div class="stakeholder-card" *ngFor="let stakeholder of stakeholders">
              <div class="stakeholder-image">
                <img [src]="stakeholder.image" [alt]="stakeholder.name">
              </div>
              <h3>{{ stakeholder.name }}</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .page-container {
      min-height: 100vh;
      background: white;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    /* Hero Section */
    .hero-section {
      background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
      color: white;
      padding: 100px 0;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: center;
    }

    .hero-content-left h1 {
      font-size: 3rem;
      font-weight: 700;
      line-height: 1.2;
      margin: 0;
      letter-spacing: 2px;
    }

    .hero-content-right p {
      font-size: 1rem;
      line-height: 1.8;
      opacity: 0.95;
      margin: 0;
    }

    /* Building Section */
    .building-section {
      background: white;
      padding: 80px 0;
    }

    .section-title {
      font-size: 2rem;
      font-weight: 700;
      color: #1a1a1a;
      text-align: center;
      margin: 0 0 25px 0;
      letter-spacing: 1px;
    }

    .section-description {
      font-size: 1rem;
      line-height: 1.8;
      color: #666;
      text-align: center;
      max-width: 900px;
      margin: 0 auto;
    }

    /* Initiatives Section */
    .initiatives-section {
      background: white;
      padding: 60px 0 100px;
    }

    .section-subtitle {
      text-align: center;
      font-size: 0.85rem;
      color: #999;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin: 0 0 60px 0;
    }

    .diagram-container {
      position: relative;
      padding: 80px 20px;
      max-width: 1000px;
      margin: 0 auto;
    }

    .reform-circle {
      position: relative;
      width: 100%;
      height: 700px;
      margin: 0 auto;
    }

    .reform-card {
      position: absolute;
      width: 260px;
      text-align: center;
    }

    .card-icon {
      width: 100px;
      height: 100px;
      margin: 0 auto 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
    }

    .card-icon svg {
      width: 50px;
      height: 50px;
      color: white;
    }

    .card-icon.beige {
      background: #c9a961;
    }

    .card-icon.dark-blue {
      background: #2c3e50;
    }

    .card-icon.black {
      background: #1a1a1a;
    }

    .card-icon.gray {
      background: #7d8a96;
    }

    .card-icon.orange {
      background: #f39c12;
    }

    .reform-card h3 {
      font-size: 1.1rem;
      color: #1a1a1a;
      margin-bottom: 15px;
      font-weight: 700;
      line-height: 1.3;
    }

    .reform-card p {
      font-size: 0.85rem;
      color: #666;
      line-height: 1.6;
    }

    /* Position cards in pentagon shape */
    .card-1 {
      top: 50px;
      left: 50px;
    }

    .card-2 {
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    .card-3 {
      top: 50px;
      right: 50px;
    }

    .card-4 {
      bottom: 50px;
      left: 80px;
    }

    .card-5 {
      bottom: 50px;
      right: 80px;
    }

    .dotted-lines {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
    }

    /* Stakeholders Section */
    .stakeholders-section {
      background: #e8e8e8;
      padding: 80px 0;
    }

    .stakeholders-section .section-title {
      color: #1a1a1a;
    }

    .stakeholders-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
      margin-top: 50px;
    }

    .stakeholder-card {
      text-align: center;
    }

    .stakeholder-image {
      width: 100%;
      aspect-ratio: 4/5;
      background: #d0d0d0;
      margin-bottom: 15px;
      border-radius: 4px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .stakeholder-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .stakeholder-card h3 {
      font-size: 0.95rem;
      color: #1a1a1a;
      font-weight: 700;
      margin: 0;
      text-transform: uppercase;
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
      .hero-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .hero-content-left h1 {
        font-size: 2.5rem;
      }

      .reform-circle {
        height: 600px;
      }

      .reform-card {
        width: 220px;
      }

      .card-icon {
        width: 80px;
        height: 80px;
      }

      .card-icon svg {
        width: 40px;
        height: 40px;
      }

      .stakeholders-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .hero-section {
        padding: 80px 0;
      }

      .hero-content-left h1 {
        font-size: 2rem;
      }

      .building-section,
      .initiatives-section,
      .stakeholders-section {
        padding: 60px 0;
      }

      .section-title {
        font-size: 1.6rem;
      }

      .diagram-container {
        padding: 60px 20px;
      }

      .reform-circle {
        position: static;
        height: auto;
        display: flex;
        flex-direction: column;
        gap: 40px;
      }

      .reform-card {
        position: static !important;
        width: 100%;
        transform: none !important;
      }

      .dotted-lines {
        display: none;
      }

      .stakeholders-grid {
        grid-template-columns: 1fr;
        gap: 30px;
      }
    }

    @media (max-width: 480px) {
      .hero-section {
        padding: 60px 0;
      }

      .hero-content-left h1 {
        font-size: 1.6rem;
      }

      .hero-content-right p {
        font-size: 0.9rem;
      }

      .section-title {
        font-size: 1.4rem;
      }

      .section-description {
        font-size: 0.9rem;
      }

      .reform-card h3 {
        font-size: 1rem;
      }

      .reform-card p {
        font-size: 0.8rem;
      }
    }
  `]
})
export class ReformsComponent {
  stakeholders = [
    { name: 'BAYONA NSOMWE', image: 'https://placehold.co/300x400' },
    { name: 'NGOMBA KABEYYA', image: 'https://placehold.co/300x400' },
    { name: 'CHRISTINA MWALE', image: 'https://placehold.co/300x400' },
    { name: 'BUKENGELA MUGDERINA', image: 'https://placehold.co/300x400' }
  ];
}

