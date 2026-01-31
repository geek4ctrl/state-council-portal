import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent],
  template: `
    <app-hero></app-hero>

    <!-- Fields of Expertise Section 1 -->
    <section class="expertise-section">
      <div class="container">
        <h2 class="section-title">FIELDS OF EXPERTISE</h2>
        <p class="section-subtitle">
          We provide tailored legal solutions to meet your unique needs, ensuring your rights are protected and justice is served.
        </p>

        <div class="expertise-grid">
          <div class="expertise-card">
            <div class="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
                <rect x="8" y="12" width="48" height="44" rx="2" stroke="#8B4513" stroke-width="2" fill="#D2691E" opacity="0.2"/>
                <path d="M32 8 L28 12 L36 12 Z" fill="#8B4513"/>
                <rect x="16" y="20" width="32" height="28" fill="#8B4513" opacity="0.3"/>
                <path d="M24 28 L28 32 L36 24" stroke="#8B4513" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="32" cy="38" r="6" fill="#FFD700" opacity="0.5"/>
              </svg>
            </div>
            <h3>Supreme Judicial Authority</h3>
            <p>As the highest court in the ordinary judicial system, the Court of Cassation ensures final appeals and ensures uniform interpretation and application of law throughout the Democratic Republic of Congo.</p>
          </div>

          <div class="expertise-card">
            <div class="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
                <path d="M32 8 L44 20 L44 52 L20 52 L20 20 Z" stroke="#4169E1" stroke-width="2" fill="#87CEEB" opacity="0.3"/>
                <path d="M26 26 H38 M26 32 H38 M26 38 H34" stroke="#4169E1" stroke-width="2" stroke-linecap="round"/>
                <circle cx="48" cy="16" r="8" fill="#FFD700" opacity="0.6"/>
                <path d="M46 16 L47.5 18 L50 15" stroke="#8B4513" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>Legal Certainty</h3>
            <p>Through our jurisprudence and decisions, we establish legal precedents that guide lower courts and ensure consistency in the application of justice across the nation.</p>
          </div>

          <div class="expertise-card">
            <div class="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
                <polygon points="32,12 36,24 48,24 38,32 42,44 32,36 22,44 26,32 16,24 28,24" fill="#FFD700" opacity="0.7"/>
                <circle cx="32" cy="32" r="10" stroke="#8B4513" stroke-width="2" fill="none"/>
                <path d="M32 26 L32 32 L36 36" stroke="#8B4513" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="32" cy="50" r="4" fill="#C41E3A" opacity="0.5"/>
              </svg>
            </div>
            <h3>Judicial Excellence</h3>
            <p>Our magistrates and counselors are selected based on merit, ensuring the highest standards of legal expertise, integrity, and commitment to justice.</p>
          </div>

          <div class="expertise-card">
            <div class="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="20" stroke="#228B22" stroke-width="2" fill="#90EE90" opacity="0.3"/>
                <ellipse cx="32" cy="32" rx="20" ry="10" stroke="#228B22" stroke-width="1.5" fill="none"/>
                <ellipse cx="32" cy="32" rx="10" ry="20" stroke="#228B22" stroke-width="1.5" fill="none"/>
                <path d="M12 32 H52 M32 12 V52" stroke="#228B22" stroke-width="1.5"/>
                <circle cx="20" cy="24" r="3" fill="#4169E1"/>
                <circle cx="44" cy="28" r="3" fill="#C41E3A"/>
                <circle cx="32" cy="44" r="3" fill="#FFD700"/>
              </svg>
            </div>
            <h3>International Cooperation</h3>
            <p>We actively participate in dialogue with international judicial bodies and maintain cooperation with French-speaking and African supreme courts through AHJUCAF and IIHF.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Fields of Expertise Section 2 -->
    <section class="practice-areas-section">
      <div class="container">
        <h2 class="section-title">FIELDS OF EXPERTISE</h2>
        <p class="section-subtitle">
          The Court of Cassation exercises jurisdiction over various legal matters as the supreme court of the ordinary judicial system.
        </p>

        <div class="practice-grid">
          <div class="practice-card">
            <div class="practice-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
            </div>
            <h3>Civil & Commercial Law</h3>
            <ul>
              <li>Appeals from Courts of Appeal</li>
              <li>Commercial disputes and contracts</li>
              <li>Property and inheritance matters</li>
              <li>Civil liability cases</li>
            </ul>
          </div>

          <div class="practice-card">
            <div class="practice-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
              </svg>
            </div>
            <h3>Criminal Law</h3>
            <ul>
              <li>Criminal appeals in cassation</li>
              <li>Procedural error reviews</li>
              <li>Application of criminal law</li>
              <li>Sentencing interpretations</li>
            </ul>
          </div>

          <div class="practice-card">
            <div class="practice-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            </div>
            <h3>Family Law</h3>
            <ul>
              <li>Marriage and divorce appeals</li>
              <li>Child custody disputes</li>
              <li>Succession matters</li>
              <li>Family property rights</li>
            </ul>
          </div>

          <div class="practice-card">
            <div class="practice-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
              </svg>
            </div>
            <h3>Labor & Employment</h3>
            <ul>
              <li>Labor dispute appeals</li>
              <li>Employment contract matters</li>
              <li>Workers' rights protection</li>
              <li>Workplace regulations</li>
            </ul>
          </div>

          <div class="practice-card">
            <div class="practice-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
              </svg>
            </div>
            <h3>Public Law</h3>
            <ul>
              <li>Jurisdictional privilege cases</li>
              <li>Prosecution of high officials</li>
              <li>Constitutional matters</li>
              <li>Public interest litigation</li>
            </ul>
          </div>

          <div class="practice-card">
            <div class="practice-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
            </div>
            <h3>Property Rights</h3>
            <ul>
              <li>Real estate disputes</li>
              <li>Land ownership matters</li>
              <li>Property transactions</li>
              <li>Intellectual property cases</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .expertise-section, .practice-areas-section {
      padding: 80px 0;
      background-color: #f8f9fa;
    }

    .practice-areas-section {
      background-color: #ffffff;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 20px;
      color: #1a1a1a;
      letter-spacing: 1px;
    }

    .section-subtitle {
      text-align: center;
      font-size: 1.1rem;
      color: #666;
      max-width: 800px;
      margin: 0 auto 60px;
      line-height: 1.6;
    }

    .expertise-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
      margin-top: 50px;
    }

    .expertise-card {
      background: white;
      border-radius: 12px;
      padding: 40px 30px;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .expertise-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }

    .card-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .card-icon img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .expertise-card h3 {
      font-size: 1.4rem;
      font-weight: 600;
      margin-bottom: 15px;
      color: #1a1a1a;
    }

    .expertise-card p {
      font-size: 1rem;
      line-height: 1.6;
      color: #666;
    }

    .practice-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 40px;
      margin-top: 50px;
    }

    .practice-card {
      text-align: center;
      padding: 30px 20px;
    }

    .practice-icon {
      width: 60px;
      height: 60px;
      margin: 0 auto 20px;
      color: #c41e3a;
    }

    .practice-icon svg {
      width: 100%;
      height: 100%;
    }

    .practice-card h3 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 15px;
      color: #1a1a1a;
    }

    .practice-card ul {
      list-style: none;
      padding: 0;
      margin: 0;
      text-align: left;
    }

    .practice-card li {
      padding: 8px 0;
      color: #666;
      font-size: 0.95rem;
      position: relative;
      padding-left: 20px;
    }

    .practice-card li::before {
      content: "•";
      position: absolute;
      left: 0;
      color: #c41e3a;
      font-weight: bold;
    }

    @media (max-width: 768px) {
      .section-title {
        font-size: 2rem;
      }

      .expertise-grid,
      .practice-grid {
        grid-template-columns: 1fr;
      }

      .expertise-section,
      .practice-areas-section {
        padding: 50px 0;
      }
    }
  `]
})
export class HomeComponent {}
