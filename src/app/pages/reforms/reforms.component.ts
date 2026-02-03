import { Component } from '@angular/core';

@Component({
  selector: 'app-reforms',
  standalone: true,
  template: `
    <div class="page-container">
      <section class="hero-section">
        <div class="container">
          <div class="hero-grid">
            <div class="hero-title">
              <h1>SUGGESTED<br>REFORMS</h1>
            </div>
            <div class="hero-description">
              <p>
                Modernizing the judicial system through strategic reforms that enhance efficiency, transparency, and access to justice
                for all Congolese citizens.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <h2 class="section-title">BUILDING A STRONGER JUSTICE SYSTEM</h2>
          <p class="section-description">
            Through a comprehensive reform agenda, we are committed to creating a modern, accessible, and efficient judicial system that upholds the
            rule of law and delivers justice to all citizens of the Democratic Republic of Congo.
          </p>

          <h2 class="section-title">STRATEGIC REFORM INITIATIVES</h2>
          <p class="section-subtitle">Modernizing Justice</p>

          <div class="diagram-container">
            <div class="reform-circle">
              <!-- Top Left -->
              <div class="reform-card card-1">
                <div class="card-icon beige">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
                <h3>Institutional<br>Independence</h3>
                <p>Strengthening judicial autonomy and ensuring the independence of the judiciary from external pressures for the Court.</p>
              </div>

              <!-- Top Right -->
              <div class="reform-card card-2">
                <div class="card-icon dark-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                  </svg>
                </div>
                <h3>Access to Justice</h3>
                <p>Expanding legal aid services and mobile courts to ensure justice is accessible to the farthest corners of the nation.</p>
              </div>

              <!-- Right -->
              <div class="reform-card card-3">
                <div class="card-icon black">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 11h-3.17l2.54-2.54-1.41-1.41L15 11h-2V9l3.95-3.95-1.41-1.41L13 6.17V3h-2v3.17L8.46 3.63 7.05 5.05 11 9v2H9L5.05 7.05 3.63 8.46 6.17 11H3v2h3.17l-2.54 2.54 1.41 1.41L9 13h2v2l-3.95 3.95 1.41 1.41L11 17.83V21h2v-3.17l2.54 2.54 1.41-1.41L13 15v-2h2l3.95 3.95 1.41-1.41L17.83 13H21v-2z"/>
                  </svg>
                </div>
                <h3>International<br>Cooperation</h3>
                <p>Strengthening ties with foreign judicial systems and international organizations to share best practices.</p>
              </div>

              <!-- Bottom Right -->
              <div class="reform-card card-4">
                <div class="card-icon gray">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <h3>Digital<br>Transformation</h3>
                <p>Implementing a modern case management system with electronic filing and online access to enhance efficiency.</p>
              </div>

              <!-- Bottom Left -->
              <div class="reform-card card-5">
                <div class="card-icon orange">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                  </svg>
                </div>
                <h3>Capacity Building</h3>
                <p>Continuous training and professional development for magistrates and court staff to strengthen expertise.</p>
              </div>

              <!-- Connector Badges -->
              <div class="connector badge-l badge-1">L</div>
              <div class="connector badge-l badge-2">L</div>
              <div class="connector badge-h badge-3">H</div>

              <!-- Dotted Lines -->
              <svg class="dotted-lines" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                <path d="M 150 150 Q 100 300 150 450" stroke="#ddd" stroke-width="2" stroke-dasharray="5,5" fill="none"/>
                <path d="M 450 150 Q 500 300 450 450" stroke="#ddd" stroke-width="2" stroke-dasharray="5,5" fill="none"/>
                <path d="M 150 150 Q 300 100 450 150" stroke="#ddd" stroke-width="2" stroke-dasharray="5,5" fill="none"/>
                <path d="M 150 450 Q 300 500 450 450" stroke="#ddd" stroke-width="2" stroke-dasharray="5,5" fill="none"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section class="stakeholders-section">
        <div class="container">
          <h2 class="section-title">KEY STAKEHOLDERS</h2>
          <p class="section-subtitle">DRIVING LEADERSHIP</p>

          <div class="stakeholders-grid">
            <div class="stakeholder-card">
              <div class="stakeholder-image">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250" fill="none">
                  <rect width="200" height="250" fill="#ddd"/>
                  <circle cx="100" cy="90" r="35" fill="#999"/>
                  <ellipse cx="100" cy="180" rx="60" ry="40" fill="#999"/>
                </svg>
              </div>
              <h3>BAYONA NSOMWE</h3>
            </div>

            <div class="stakeholder-card">
              <div class="stakeholder-image">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250" fill="none">
                  <rect width="200" height="250" fill="#ddd"/>
                  <circle cx="100" cy="90" r="35" fill="#999"/>
                  <ellipse cx="100" cy="180" rx="60" ry="40" fill="#999"/>
                </svg>
              </div>
              <h3>NGOMBE KABETA</h3>
            </div>

            <div class="stakeholder-card">
              <div class="stakeholder-image">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250" fill="none">
                  <rect width="200" height="250" fill="#ddd"/>
                  <circle cx="100" cy="90" r="35" fill="#999"/>
                  <ellipse cx="100" cy="180" rx="60" ry="40" fill="#999"/>
                </svg>
              </div>
              <h3>Christina Mwale</h3>
            </div>

            <div class="stakeholder-card">
              <div class="stakeholder-image">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250" fill="none">
                  <rect width="200" height="250" fill="#ddd"/>
                  <circle cx="100" cy="90" r="35" fill="#999"/>
                  <ellipse cx="100" cy="180" rx="60" ry="40" fill="#999"/>
                </svg>
              </div>
              <h3>MUANGILA MUKONDA</h3>
            </div>
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
      background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%);
      color: white;
      padding: 100px 20px;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: center;
    }

    .hero-title h1 {
      font-size: 3rem;
      font-weight: 700;
      line-height: 1.2;
      margin: 0;
      letter-spacing: 2px;
    }

    .hero-description p {
      font-size: 1rem;
      line-height: 1.8;
      opacity: 0.95;
      margin: 0;
    }

    .content-section {
      padding: 80px 20px;
      background: white;
    }

    .section-title {
      font-size: 2rem;
      color: #2c3e50;
      margin-bottom: 20px;
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    .section-description {
      font-size: 1.05rem;
      line-height: 1.8;
      color: #666;
      margin-bottom: 60px;
    }

    .section-subtitle {
      text-align: center;
      font-size: 0.9rem;
      color: #999;
      margin-bottom: 60px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .diagram-container {
      position: relative;
      padding: 100px 20px;
    }

    .reform-circle {
      position: relative;
      width: 100%;
      max-width: 900px;
      height: 600px;
      margin: 0 auto;
    }

    .reform-card {
      position: absolute;
      width: 240px;
      text-align: center;
    }

    .card-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
    }

    .card-icon svg {
      width: 40px;
      height: 40px;
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
      background: #5d6d7e;
    }

    .card-icon.orange {
      background: #f39c12;
    }

    .reform-card h3 {
      font-size: 1.2rem;
      color: #2c3e50;
      margin-bottom: 15px;
      font-weight: 600;
      line-height: 1.3;
    }

    .reform-card p {
      font-size: 0.9rem;
      color: #666;
      line-height: 1.6;
    }

    /* Position cards in circle */
    .card-1 {
      top: 0;
      left: 50px;
    }

    .card-2 {
      top: 0;
      right: 50px;
    }

    .card-3 {
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }

    .card-4 {
      bottom: 0;
      right: 50px;
    }

    .card-5 {
      bottom: 0;
      left: 50px;
    }

    /* Connector badges */
    .connector {
      position: absolute;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 1.3rem;
      color: white;
      z-index: 10;
    }

    .badge-l {
      background: linear-gradient(135deg, #e91e63 0%, #c2185b 100%);
    }

    .badge-h {
      background: linear-gradient(135deg, #9c27b0 0%, #7b1fa2 100%);
    }

    .badge-1 {
      top: 28%;
      left: 50%;
      transform: translateX(-50%);
    }

    .badge-2 {
      bottom: 28%;
      left: 50%;
      transform: translateX(-50%);
    }

    .badge-3 {
      top: 50%;
      right: 22%;
      transform: translateY(-50%);
    }

    .dotted-lines {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 600px;
      height: 600px;
      pointer-events: none;
      z-index: 1;
    }

    .stakeholders-section {
      padding: 80px 20px;
      background: #f8f8f8;
    }

    .stakeholders-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
      margin-top: 40px;
    }

    .stakeholder-card {
      text-align: center;
    }

    .stakeholder-image {
      width: 100%;
      aspect-ratio: 4/5;
      background: #e0e0e0;
      margin-bottom: 15px;
      border-radius: 4px;
      overflow: hidden;
    }

    .stakeholder-image svg {
      width: 100%;
      height: 100%;
      display: block;
    }

    .stakeholder-card h3 {
      font-size: 1rem;
      color: #2c3e50;
      font-weight: 600;
      margin: 0;
    }

    @media (max-width: 1024px) {
      .hero-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .reform-circle {
        height: 500px;
      }

      .reform-card {
        width: 200px;
      }

      .stakeholders-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .hero-title h1 {
        font-size: 2.5rem;
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

      .connector,
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
        padding: 80px 15px;
      }

      .hero-title h1 {
        font-size: 2rem;
      }

      .content-section {
        padding: 60px 15px;
      }

      .section-title {
        font-size: 1.6rem;
      }

      .stakeholders-section {
        padding: 60px 15px;
      }
    }
  `]
})
export class ReformsComponent {}

