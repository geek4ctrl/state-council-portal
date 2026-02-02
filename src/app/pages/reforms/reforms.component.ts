import { Component } from '@angular/core';

@Component({
  selector: 'app-reforms',
  standalone: true,
  template: `
    <div class="page-container">
      <section class="hero-section">
        <div class="hero-content">
          <h1>Judicial Reforms</h1>
          <p class="subtitle">Modernizing Justice for the Democratic Republic of Congo</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <div class="intro">
            <h2>Our Reform Agenda</h2>
            <p>
              The Court of Cassation is committed to continuous improvement and modernization of the judicial system.
              Our reform initiatives aim to enhance efficiency, transparency, and accessibility of justice for all citizens.
            </p>
          </div>

          <div class="reform-areas">
            <div class="reform-card">
              <div class="reform-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </div>
              <h3>Digital Transformation</h3>
              <p>
                Implementation of digital case management systems, electronic filing, and online access to court decisions
                to improve efficiency and transparency.
              </p>
            </div>

            <div class="reform-card">
              <div class="reform-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Procedural Simplification</h3>
              <p>
                Streamlining court procedures to reduce delays, simplify processes, and ensure faster resolution of cases
                while maintaining judicial rigor.
              </p>
            </div>

            <div class="reform-card">
              <div class="reform-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <h3>Capacity Building</h3>
              <p>
                Continuous training and professional development programs for judges, clerks, and court staff to enhance
                legal expertise and judicial skills.
              </p>
            </div>

            <div class="reform-card">
              <div class="reform-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3>Transparency & Accountability</h3>
              <p>
                Enhanced publication of decisions, implementation of performance metrics, and regular reporting on court
                activities to increase public trust.
              </p>
            </div>

            <div class="reform-card">
              <div class="reform-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3>Access to Justice</h3>
              <p>
                Expanding legal aid services, establishing regional offices, and implementing mobile court services to
                ensure justice is accessible to all citizens.
              </p>
            </div>

            <div class="reform-card">
              <div class="reform-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>International Standards</h3>
              <p>
                Aligning our practices with international best practices and standards in judicial administration and
                human rights protection.
              </p>
            </div>
          </div>

          <div class="timeline-section">
            <h2>Reform Implementation Timeline</h2>
            <div class="timeline">
              <div class="timeline-item">
                <div class="timeline-date">2024-2025</div>
                <div class="timeline-content">
                  <h4>Phase 1: Foundation</h4>
                  <p>Assessment of current systems, stakeholder consultations, and development of reform framework.</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-date">2025-2026</div>
                <div class="timeline-content">
                  <h4>Phase 2: Implementation</h4>
                  <p>Rollout of digital systems, training programs, and procedural updates across all chambers.</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-date">2026-2027</div>
                <div class="timeline-content">
                  <h4>Phase 3: Consolidation</h4>
                  <p>Evaluation of reforms, fine-tuning processes, and expansion of successful initiatives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .page-container {
      min-height: 100vh;
    }

    .hero-section {
      background: linear-gradient(135deg, #c41e3a 0%, #a01729 100%);
      color: white;
      padding: 100px 20px 80px;
      text-align: center;
    }

    .hero-content h1 {
      font-size: 2.8rem;
      font-weight: 700;
      margin-bottom: 20px;
      color: white;
    }

    .subtitle {
      font-size: 1.3rem;
      color: rgba(255, 255, 255, 0.9);
      font-weight: 300;
    }

    .content-section {
      padding: 80px 20px;
      background-color: #f8f9fa;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .intro {
      margin-bottom: 60px;
      text-align: center;
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

    .reform-areas {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 30px;
      margin-bottom: 80px;
    }

    .reform-card {
      background: white;
      padding: 40px 30px;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      text-align: center;
    }

    .reform-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }

    .reform-icon {
      width: 60px;
      height: 60px;
      margin: 0 auto 20px;
      color: #c41e3a;
    }

    .reform-icon svg {
      width: 100%;
      height: 100%;
    }

    .reform-card h3 {
      font-size: 1.4rem;
      color: #2c3e50;
      margin-bottom: 15px;
      font-weight: 600;
    }

    .reform-card p {
      line-height: 1.7;
      color: #555;
      font-size: 1rem;
    }

    .timeline-section {
      background: white;
      padding: 60px 40px;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .timeline-section h2 {
      font-size: 2rem;
      color: #2c3e50;
      margin-bottom: 40px;
      text-align: center;
    }

    .timeline {
      position: relative;
      padding-left: 40px;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 3px;
      background: #c41e3a;
    }

    .timeline-item {
      position: relative;
      margin-bottom: 40px;
    }

    .timeline-item::before {
      content: '';
      position: absolute;
      left: -46px;
      top: 5px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: #c41e3a;
      border: 3px solid white;
      box-shadow: 0 0 0 3px #c41e3a;
    }

    .timeline-date {
      font-size: 0.9rem;
      color: #c41e3a;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .timeline-content h4 {
      font-size: 1.3rem;
      color: #2c3e50;
      margin-bottom: 10px;
    }

    .timeline-content p {
      color: #555;
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .hero-content h1 {
        font-size: 2rem;
      }

      .subtitle {
        font-size: 1.1rem;
      }

      .intro h2, .timeline-section h2 {
        font-size: 1.6rem;
      }

      .content-section {
        padding: 50px 20px;
      }

      .reform-areas {
        grid-template-columns: 1fr;
      }

      .timeline {
        padding-left: 30px;
      }

      .timeline-section {
        padding: 40px 20px;
      }
    }
  `]
})
export class ReformsComponent {}
