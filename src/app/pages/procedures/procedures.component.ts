import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-procedures',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="page-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-grid">
            <div class="hero-left">
              <h1>APPEAL TO THE<br>COURT OF<br>CASSATION</h1>
            </div>
            <div class="hero-right">
              <p>
                An appeal to the Court of Cassation is an extraordinary legal remedy allowing a party to challenge a final decision before the Court of Appeal. The Court of Cassation verifies whether the law was correctly applied and whether the procedures were followed.
              </p>
              <p>
                The Court of Cassation is seized by a request from the parties or by a declaration filed with the Court attached to that Court. In criminal matters, an appeal to the Court of Cassation may also be lodged by an oral or written declaration to the secretary of the registry of the court that rendered the decision under appeal. In this case, the appeal to the Court of Cassation must be confirmed, within three months, by a petition.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Tab Navigation -->
      <section class="tabs-section">
        <div class="container">
          <div class="tabs">
            <a routerLink="/filing" routerLinkActive="active" class="tab">Report</a>
            <a routerLink="/appointment" routerLinkActive="active" class="tab">Book An Appointment</a>
            <a routerLink="/procedures" routerLinkActive="active" class="tab active">File An Appeal</a>
          </div>
        </div>
      </section>

      <!-- Appeal Form Section -->
      <section class="form-section">
        <div class="container">
          <div class="form-header">
            <h2>APPEAL FORM</h2>
            <p class="form-subtitle">WE WOULD LOVE TO HEAR YOUR ISSUES</p>
          </div>

          <form class="appeal-form">
            <div class="form-row">
              <div class="form-group">
                <input type="text" placeholder="Full Name *" required>
              </div>
              <div class="form-group">
                <input type="email" placeholder="E-mail *" required>
              </div>
            </div>

            <div class="form-group">
              <select required>
                <option value="">Department</option>
                <option value="criminal">Criminal Chamber</option>
                <option value="civil">Civil Chamber</option>
                <option value="social">Social Chamber</option>
                <option value="commercial">Commercial Chamber</option>
              </select>
            </div>

            <div class="form-group">
              <textarea placeholder="Message *" rows="6" required></textarea>
            </div>

            <div class="form-submit">
              <button type="submit">SEND MESSAGE</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .page-container {
      padding-top: 80px;
      background: white;
      min-height: 100vh;
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
      grid-template-columns: 1fr 1.5fr;
      gap: 60px;
      align-items: center;
    }

    .hero-left h1 {
      font-size: 3.5rem;
      font-weight: 700;
      margin: 0;
      letter-spacing: 3px;
      line-height: 1.1;
    }

    .hero-right p {
      font-size: 1rem;
      line-height: 1.8;
      margin: 0 0 20px 0;
      opacity: 0.95;
    }

    .hero-right p:last-child {
      margin-bottom: 0;
    }

    /* Tabs Section */
    .tabs-section {
      background: white;
      border-bottom: 1px solid #e0e0e0;
    }

    .tabs {
      display: flex;
      gap: 0;
    }

    .tab {
      flex: 1;
      text-align: center;
      padding: 20px 30px;
      font-size: 0.95rem;
      font-weight: 500;
      color: #666;
      text-decoration: none;
      border-bottom: 3px solid transparent;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .tab:hover {
      color: #2c3e50;
      background: #f8f8f8;
    }

    .tab.active {
      color: #2c3e50;
      border-bottom-color: #8B6914;
      font-weight: 600;
    }

    /* Form Section */
    .form-section {
      padding: 80px 0 120px;
      background: white;
    }

    .form-header {
      text-align: center;
      margin-bottom: 60px;
    }

    .form-header h2 {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0 0 15px 0;
      letter-spacing: 2px;
    }

    .form-subtitle {
      font-size: 0.9rem;
      color: #c9a961;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin: 0;
    }

    .appeal-form {
      max-width: 800px;
      margin: 0 auto;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 20px;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      padding: 15px 20px;
      border: 1px solid #ddd;
      border-radius: 0;
      font-size: 0.95rem;
      font-family: inherit;
      transition: border-color 0.3s ease;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #8B6914;
    }

    .form-group input::placeholder,
    .form-group textarea::placeholder {
      color: #999;
    }

    .form-group select {
      color: #999;
      cursor: pointer;
    }

    .form-group textarea {
      resize: vertical;
      min-height: 150px;
    }

    .form-submit {
      text-align: center;
      margin-top: 30px;
    }

    .form-submit button {
      background: white;
      color: #1a1a1a;
      border: 1px solid #1a1a1a;
      padding: 15px 50px;
      font-size: 0.9rem;
      font-weight: 600;
      letter-spacing: 1px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .form-submit button:hover {
      background: #1a1a1a;
      color: white;
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
      .hero-grid {
        grid-template-columns: 1fr;
        gap: 30px;
        text-align: center;
      }

      .hero-left h1 {
        font-size: 3rem;
      }
    }

    @media (max-width: 768px) {
      .hero-section {
        padding: 80px 0;
      }

      .hero-left h1 {
        font-size: 2.5rem;
      }

      .hero-right p {
        font-size: 0.95rem;
      }

      .tabs {
        flex-direction: column;
      }

      .tab {
        border-bottom: 1px solid #e0e0e0;
        border-right: none;
      }

      .tab.active {
        border-bottom-color: #8B6914;
      }

      .form-row {
        grid-template-columns: 1fr;
        gap: 0;
      }

      .form-header h2 {
        font-size: 2rem;
      }

      .form-section {
        padding: 60px 0 80px;
      }
    }

    @media (max-width: 480px) {
      .hero-section {
        padding: 60px 0;
      }

      .hero-left h1 {
        font-size: 2rem;
        letter-spacing: 2px;
      }

      .hero-right p {
        font-size: 0.9rem;
      }

      .form-header h2 {
        font-size: 1.6rem;
      }

      .form-subtitle {
        font-size: 0.8rem;
      }

      .form-submit button {
        padding: 12px 40px;
        font-size: 0.85rem;
      }
    }
  `]
})
export class ProceduresComponent {}
