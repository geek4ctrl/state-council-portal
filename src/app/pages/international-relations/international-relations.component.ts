import { Component } from '@angular/core';

@Component({
  selector: 'app-international-relations',
  standalone: true,
  template: `
    <div class="page-container">
      <section class="hero-section">
        <div class="hero-content">
          <h1>International Relations</h1>
          <p class="subtitle">Global Cooperation in the Pursuit of Justice</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <div class="intro">
            <h2>International Cooperation</h2>
            <p>
              In the context of the internationalization of law and justice, the Court of Cassation of the Democratic Republic of Congo
              is not isolated from this environment. It actively participates in the dialogue of judges by maintaining a high level of
              cooperation within the frameworks of the Association of High Judicial Courts of Francophone Countries (AHJUCAF) and
              the African Association of Francophone Supreme Courts (AAJHF).
            </p>
          </div>

          <div class="stats-section">
            <div class="stat-card">
              <div class="stat-number">2</div>
              <div class="stat-label">Major International Judicial Associations</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">50+</div>
              <div class="stat-label">Partner Courts Worldwide</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">100+</div>
              <div class="stat-label">Annual Judicial Exchanges & Conferences</div>
            </div>
          </div>

          <div class="networks-section">
            <h2>International Judicial Networks</h2>
            <p class="section-description">
              The Court maintains privileged relationships with the leading associations of Francophone and African supreme courts.
            </p>

            <div class="network-cards">
              <div class="network-card">
                <div class="network-header">
                  <div class="network-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3>AHJUCAF</h3>
                  <p class="network-full-name">Association of Supreme Courts of Francophone Countries Using French</p>
                </div>
                <p class="network-description">
                  A platform to encourage and collaborate between Francophone supreme courts, facilitating the exchange of legal precedents
                  that guide lower courts and ensure consistency in the application of justice across the nation.
                </p>
              </div>

              <div class="network-card">
                <div class="network-header">
                  <div class="network-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/>
                      <path d="M12 2 L12 12 L20 12" stroke="currentColor" stroke-width="2" fill="none"/>
                    </svg>
                  </div>
                  <h3>AAJHF</h3>
                  <p class="network-full-name">African Association of Francophone Supreme Courts</p>
                </div>
                <p class="network-description">
                  A regional bridge link along cooperation lines for Francophone countries, working actively to strengthen judicial systems
                  through joint training, research collaboration and mutual legal assistance mechanisms throughout Africa.
                </p>
              </div>
            </div>
          </div>

          <div class="cooperation-domains">
            <h2>International Cooperation Domains</h2>
            <p class="section-description">
              Our international engagement spans multiple active partnerships in various legal and institutional development domains.
            </p>

            <div class="domain-grid">
              <div class="domain-card">
                <div class="domain-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                  </svg>
                </div>
                <h3>Judicial Education</h3>
                <p>
                  Regular seminars and training exchanges with partner courts to enhance judicial techniques and keep abreast of
                  international legal trends and best practices.
                </p>
              </div>

              <div class="domain-card">
                <div class="domain-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                  </svg>
                </div>
                <h3>Technical Assistance</h3>
                <p>
                  Technical cooperation for infrastructure building, adaptation of best practices and sharing experience on judicial reforms and court management.
                </p>
              </div>

              <div class="domain-card">
                <div class="domain-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
                <h3>Capacity Building</h3>
                <p>
                  Joint training, advanced courses and workshops to strengthen expertise of our magistrates and court staff in international law and comparative jurisprudence.
                </p>
              </div>

              <div class="domain-card">
                <div class="domain-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <h3>International Forums</h3>
                <p>
                  Active participation in dialogue with international judicial bodies and organizations to promote legal cooperation and exchange of best practices in jurisprudence.
                </p>
              </div>
            </div>
          </div>

          <div class="collaboration-cta">
            <h2>Interested in Collaboration?</h2>
            <p>
              We are open to new partnerships with other supreme courts, judicial training institutions and organizations committed to
              strengthening justice systems.
            </p>
            <button class="contact-btn">Contact Us</button>
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
      background: linear-gradient(135deg, #2c5f7c 0%, #1a3d52 100%);
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

    .stats-section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
      margin-bottom: 80px;
      text-align: center;
    }

    .stat-card {
      background: linear-gradient(135deg, #c41e3a 0%, #a01729 100%);
      color: white;
      padding: 40px 20px;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .stat-number {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 10px;
    }

    .stat-label {
      font-size: 1rem;
      line-height: 1.4;
    }

    .networks-section, .cooperation-domains {
      margin-bottom: 80px;
    }

    .networks-section h2, .cooperation-domains h2 {
      font-size: 2rem;
      color: #2c3e50;
      margin-bottom: 15px;
      text-align: center;
    }

    .section-description {
      text-align: center;
      font-size: 1.05rem;
      color: #555;
      margin-bottom: 40px;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }

    .network-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 40px;
    }

    .network-card {
      background: white;
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border-left: 5px solid #c41e3a;
    }

    .network-header {
      margin-bottom: 20px;
    }

    .network-icon {
      width: 50px;
      height: 50px;
      color: #c41e3a;
      margin-bottom: 15px;
    }

    .network-icon svg {
      width: 100%;
      height: 100%;
    }

    .network-card h3 {
      font-size: 1.6rem;
      color: #2c3e50;
      margin-bottom: 8px;
      font-weight: 700;
    }

    .network-full-name {
      font-size: 0.9rem;
      color: #c41e3a;
      font-style: italic;
      margin-bottom: 15px;
    }

    .network-description {
      line-height: 1.8;
      color: #555;
    }

    .domain-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
    }

    .domain-card {
      background: #f8f9fa;
      padding: 35px 25px;
      border-radius: 12px;
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .domain-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
      background: white;
    }

    .domain-icon {
      width: 60px;
      height: 60px;
      margin: 0 auto 20px;
      color: #2c5f7c;
    }

    .domain-icon svg {
      width: 100%;
      height: 100%;
    }

    .domain-card h3 {
      font-size: 1.3rem;
      color: #2c3e50;
      margin-bottom: 15px;
      font-weight: 600;
    }

    .domain-card p {
      line-height: 1.7;
      color: #555;
      font-size: 0.95rem;
    }

    .collaboration-cta {
      background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
      color: white;
      padding: 60px 40px;
      border-radius: 12px;
      text-align: center;
    }

    .collaboration-cta h2 {
      font-size: 2rem;
      margin-bottom: 20px;
      color: white;
    }

    .collaboration-cta p {
      font-size: 1.1rem;
      line-height: 1.8;
      margin-bottom: 30px;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }

    .contact-btn {
      background-color: #c41e3a;
      color: white;
      border: none;
      padding: 15px 40px;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 6px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s ease;
    }

    .contact-btn:hover {
      background-color: #a01729;
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
      .hero-content h1 {
        font-size: 2rem;
      }

      .subtitle {
        font-size: 1.1rem;
      }

      .intro h2, .networks-section h2, .cooperation-domains h2 {
        font-size: 1.6rem;
      }

      .content-section {
        padding: 50px 20px;
      }

      .network-cards {
        grid-template-columns: 1fr;
      }

      .domain-grid {
        grid-template-columns: 1fr;
      }

      .collaboration-cta {
        padding: 40px 20px;
      }
    }
  `]
})
export class InternationalRelationsComponent {}
