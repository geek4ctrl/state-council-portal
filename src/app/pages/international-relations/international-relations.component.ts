import { Component } from '@angular/core';

@Component({
  selector: 'app-international-relations',
  standalone: true,
  template: `
    <div class="page-container">
      <section class="hero-section">
        <div class="container">
          <div class="hero-grid">
            <div class="hero-title">
              <h1>INTERNATIONAL<br>RELATIONS</h1>
            </div>
            <div class="hero-description">
              <p>
                In the context of the internationalization of law and justice, the Court of Cassation of the Democratic Republic of Congo
                is not isolated from this environment. It actively participates in the dialogue of judges by maintaining a high level of
                cooperation within the frameworks of the Association of Supreme Courts of Cassation of French-speaking countries (AHJUCAF)
                and the African Association of Francophone Supreme Courts (AA-JHCF).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <div class="container">

          <div class="stats-section">
            <div class="stat-item">
              <div class="stat-number">2</div>
              <div class="stat-divider"></div>
              <div class="stat-label">Major International Judicial Associations</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">50+</div>
              <div class="stat-divider"></div>
              <div class="stat-label">Partner Countries & Supreme Courts</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">100+</div>
              <div class="stat-divider"></div>
              <div class="stat-label">Annual Judicial Exchanges & Conferences</div>
            </div>
          </div>

          <div class="networks-section">
            <div class="section-header">
              <div class="header-line"></div>
              <h2>INTERNATIONAL JUDICIAL NETWORKS</h2>
              <div class="header-line"></div>
            </div>
            <p class="section-subtitle">
              The Court maintains privileged relationships with the leading associations of Francophone and African supreme courts
            </p>

            <div class="network-cards">
              <div class="network-card">
                <h3>AHJUCAF</h3>
                <p class="network-full-name">Association of Supreme Courts of Cassation Using French</p>
                <p class="network-description">
                  A platform to encourage and collaborate between Francophone supreme courts, sharing of jurisprudence, sharing
                  of information, and strengthening institutional capacities. French-speaking superior courts for quality justice.
                </p>
              </div>

              <div class="network-card">
                <h3>AA-JHCF</h3>
                <p class="network-full-name">African Association of Francophone Supreme Courts</p>
                <p class="network-description">
                  A regional bridge along cooperation for the Francophone judicial system, sharing best practices, sharing of education,
                  and strengthening of capacity of justice systems Africa through judicial cooperation.
                </p>
              </div>
            </div>
          </div>

          <div class="cooperation-domains">
            <div class="section-header">
              <div class="header-line"></div>
              <h2>INTERNATIONAL COOPERATION DOMAINS</h2>
              <div class="header-line"></div>
            </div>
            <p class="section-subtitle">
              Our international engagement translates into active participation in various initiatives aimed at strengthening the quality of justice and the rule of law
            </p>

            <div class="domain-grid">
              <div class="domain-card">
                <div class="domain-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                  </svg>
                </div>
                <h3>Judicial Challenges</h3>
                <p>
                  Regular coordination and education workshops with higher and lower courts to exchange best practices and development mechanisms.
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
                  Financial and technical cooperation to infrastructure development, judicial reforms, adaptation of best practices,
                  and mutual assistance through international legal cooperation.
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
                  Ongoing training and professional development for magistrates, the development of legal expertise, and training to
                  better serve the Court and operate the centers.
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
                  Active participation in international conferences and debates to promote dialogue, share legal expertise, and develop regional and international cooperation.
                </p>
              </div>
            </div>
          </div>

          <div class="collaboration-section">
            <h2>Interested in Collaboration?</h2>
            <p>
              We are open to new partnerships with courts, international and intergovernmental institutions committed to strengthening justice systems.
            </p>
            <button class="contact-btn">CONTACT US</button>
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
      background: linear-gradient(135deg, #2c3e50 0%, #1a2938 100%);
      color: white;
      padding: 100px 20px 80px;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
    }

    .hero-title h1 {
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 1.1;
      color: white;
      margin: 0;
    }

    .hero-description p {
      font-size: 1rem;
      line-height: 1.8;
      color: rgba(255, 255, 255, 0.95);
    }

    .content-section {
      padding: 0;
      background-color: #f8f9fa;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .stats-section {
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: white;
      padding: 60px 20px;
      margin-bottom: 0;
    }

    .stat-item {
      text-align: center;
      position: relative;
    }

    .stat-number {
      font-size: 3rem;
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 10px;
    }

    .stat-divider {
      width: 60px;
      height: 2px;
      background: #c41e3a;
      margin: 15px auto;
    }

    .stat-label {
      font-size: 0.9rem;
      color: #555;
      line-height: 1.4;
      max-width: 200px;
    }

    .networks-section, .cooperation-domains {
      padding: 80px 20px;
      background: white;
    }

    .cooperation-domains {
      background: #f8f9fa;
    }

    .section-header {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      margin-bottom: 20px;
    }

    .section-header h2 {
      font-size: 1.8rem;
      font-weight: 700;
      color: #2c3e50;
      margin: 0;
      white-space: nowrap;
    }

    .header-line {
      flex: 1;
      max-width: 200px;
      height: 2px;
      background: linear-gradient(to right, transparent, #c9a961, transparent);
    }

    .section-subtitle {
      text-align: center;
      font-size: 1rem;
      color: #c9a961;
      margin-bottom: 50px;
      max-width: 900px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.6;
    }

    .network-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
      gap: 40px;
    }

    .network-card {
      background: white;
      padding: 35px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      border: 1px solid #e0e0e0;
    }

    .network-card h3 {
      font-size: 1.4rem;
      color: #2c3e50;
      margin-bottom: 8px;
      font-weight: 700;
    }

    .network-full-name {
      font-size: 0.9rem;
      color: #666;
      margin-bottom: 20px;
      display: block;
    }

    .network-description {
      line-height: 1.8;
      color: #555;
      font-size: 0.95rem;
    }

    .domain-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 30px;
    }

    .domain-card {
      background: white;
      padding: 35px 25px;
      border-radius: 8px;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      border: 1px solid #e0e0e0;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .domain-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
    }

    .domain-icon {
      width: 50px;
      height: 50px;
      margin: 0 auto 20px;
      color: #c9a961;
    }

    .domain-icon svg {
      width: 100%;
      height: 100%;
    }

    .domain-card h3 {
      font-size: 1.2rem;
      color: #2c3e50;
      margin-bottom: 15px;
      font-weight: 600;
    }

    .domain-card p {
      line-height: 1.7;
      color: #555;
      font-size: 0.9rem;
    }

    .collaboration-section {
      background: #f0f0f0;
      padding: 60px 40px;
      text-align: center;
      margin: 80px 20px 0;
    }

    .collaboration-section h2 {
      font-size: 1.8rem;
      margin-bottom: 15px;
      color: #2c3e50;
      font-weight: 600;
    }

    .collaboration-section p {
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 30px;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      color: #555;
    }

    .contact-btn {
      background-color: #2c3e50;
      color: white;
      border: none;
      padding: 12px 35px;
      font-size: 0.95rem;
      font-weight: 600;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s ease;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .contact-btn:hover {
      background-color: #1a2938;
      transform: translateY(-2px);
    }

    @media (max-width: 1024px) {
      .hero-grid {
        gap: 40px;
      }

      .hero-title h1 {
        font-size: 3rem;
      }

      .network-cards {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 768px) {
      .hero-section {
        padding: 80px 20px 60px;
      }

      .hero-grid {
        grid-template-columns: 1fr;
        gap: 30px;
      }

      .hero-title h1 {
        font-size: 2.5rem;
      }

      .hero-description p {
        font-size: 0.95rem;
      }

      .stats-section {
        flex-direction: column;
        gap: 40px;
        padding: 50px 20px;
      }

      .stat-item {
        padding: 0 20px;
      }

      .stat-number {
        font-size: 2.5rem;
      }

      .section-header {
        gap: 15px;
      }

      .section-header h2 {
        font-size: 1.4rem;
      }

      .header-line {
        max-width: 40px;
      }

      .section-subtitle {
        font-size: 0.95rem;
        padding: 0 10px;
      }

      .network-cards {
        grid-template-columns: 1fr;
        gap: 30px;
      }

      .network-card {
        padding: 25px;
      }

      .network-card h3 {
        font-size: 1.2rem;
      }

      .domain-grid {
        grid-template-columns: 1fr;
        gap: 25px;
      }

      .domain-card {
        padding: 30px 20px;
      }

      .collaboration-section {
        padding: 40px 20px;
        margin: 60px 15px 0;
      }

      .collaboration-section h2 {
        font-size: 1.5rem;
      }

      .collaboration-section p {
        font-size: 0.95rem;
      }

      .networks-section, .cooperation-domains {
        padding: 60px 20px;
      }
    }

    @media (max-width: 480px) {
      .hero-title h1 {
        font-size: 2rem;
      }

      .hero-description p {
        font-size: 0.9rem;
      }

      .stats-section {
        padding: 40px 15px;
      }

      .stat-number {
        font-size: 2rem;
      }

      .stat-label {
        font-size: 0.85rem;
      }

      .section-header {
        flex-direction: column;
        gap: 10px;
      }

      .section-header h2 {
        font-size: 1.2rem;
      }

      .header-line {
        display: none;
      }

      .network-card {
        padding: 20px;
      }

      .network-card h3 {
        font-size: 1.1rem;
      }

      .network-full-name {
        font-size: 0.85rem;
      }

      .network-description {
        font-size: 0.9rem;
      }

      .domain-card h3 {
        font-size: 1.1rem;
      }

      .domain-card p {
        font-size: 0.85rem;
      }

      .collaboration-section {
        margin: 40px 10px 0;
        padding: 30px 15px;
      }

      .collaboration-section h2 {
        font-size: 1.3rem;
      }

      .contact-btn {
        padding: 10px 25px;
        font-size: 0.85rem;
      }

      .networks-section, .cooperation-domains {
        padding: 40px 15px;
      }
    }
  `]
})
export class InternationalRelationsComponent {}
