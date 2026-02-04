import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="page-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-grid">
            <div class="hero-left">
              <h1>BOOK<br>APPOINTMENT</h1>
            </div>
            <div class="hero-right">
              <p>To arrange a meeting with the State Council, please complete the following appointment request form. Ensure all required fields are filled out accurately so we can process your request efficiently. You'll receive a confirmation email or phone call with the scheduled date and time.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Tab Navigation -->
      <section class="tabs-section">
        <div class="container">
          <nav class="tabs" role="tablist" aria-label="Form selection">
            <a routerLink="/filing" routerLinkActive="active" class="tab" role="tab" aria-selected="false" aria-controls="filing-panel">Report</a>
            <a routerLink="/appointment" routerLinkActive="active" class="tab active" role="tab" aria-selected="true" aria-controls="appointment-panel">Book An Appointment</a>
            <a routerLink="/procedures" routerLinkActive="active" class="tab" role="tab" aria-selected="false" aria-controls="procedures-panel">File An Appeal</a>
          </nav>
        </div>
      </section>

      <!-- Appointment Form Section -->
      <section class="form-section" id="appointment-panel" role="tabpanel" aria-labelledby="appointment-tab">
        <div class="container">
          <div class="form-header">
            <h2>MAKE AN APPOINTMENT</h2>
            <p class="form-subtitle">WE WOULD LOVE TO ASSIST YOU WITH YOUR ISSUE</p>
          </div>

          <form class="appointment-form" aria-label="Appointment booking form">
            <div class="form-row">
              <div class="form-group">
                <label for="appt-name" class="visually-hidden">Full Name (required)</label>
                <input type="text" id="appt-name" name="name" placeholder="Full Name *" required aria-required="true">
              </div>
              <div class="form-group">
                <label for="appt-email" class="visually-hidden">Email address (required)</label>
                <input type="email" id="appt-email" name="email" placeholder="E-mail *" required aria-required="true">
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="appt-department" class="visually-hidden">Department</label>
                <select id="appt-department" name="department" required aria-required="true">
                  <option value="">Department</option>
                  <option value="criminal">Criminal Chamber</option>
                  <option value="civil">Civil Chamber</option>
                  <option value="social">Social Chamber</option>
                  <option value="commercial">Commercial Chamber</option>
                </select>
              </div>
              <div class="form-group">
                <label for="appt-person" class="visually-hidden">Who do you want to meet (required)</label>
                <select id="appt-person" name="person" required aria-required="true">
                  <option value="">Who do you want to meet ? *</option>
                  <option value="first-president">First President</option>
                  <option value="chamber-president">Chamber President</option>
                  <option value="legal-advisor">Legal Advisor</option>
                  <option value="clerk">Clerk of the Court</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="appt-when" class="visually-hidden">When do you plan to come</label>
              <select id="appt-when" name="when" required aria-required="true">
                <option value="">When do you plan to come ?</option>
                <option value="this-week">This Week</option>
                <option value="next-week">Next Week</option>
                <option value="this-month">This Month</option>
                <option value="next-month">Next Month</option>
              </select>
            </div>

            <div class="form-group">
              <label for="appt-message" class="visually-hidden">Message (required)</label>
              <textarea id="appt-message" name="message" placeholder="Message *" rows="6" required aria-required="true"></textarea>
            </div>

            <div class="form-submit">
              <button type="submit">SEND MESSAGE</button>
            </div>
          </form>
        </div>
      </section>

      <!-- Map Section -->
      <section class="map-section" aria-label="Location map">
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.8158168478994!2d15.313!3d-4.322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMTknMTkuMiJTIDE1wrAxOCc0Ni44IkU!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="400"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            title="State Council location on Google Maps"
            aria-label="Google Maps showing State Council location"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
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
      font-size: 4rem;
      font-weight: 700;
      margin: 0;
      letter-spacing: 3px;
      line-height: 1.1;
    }

    .hero-right p {
      font-size: 1.05rem;
      line-height: 1.8;
      margin: 0;
      opacity: 0.95;
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
      padding: 80px 0 100px;
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

    .appointment-form {
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

    /* Map Section */
    .map-section {
      background: #f5f5f5;
    }

    .map-container {
      width: 100%;
      height: 400px;
    }

    .map-container iframe {
      display: block;
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
        font-size: 1rem;
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

      .map-container {
        height: 300px;
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
        font-size: 0.95rem;
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

      .map-container {
        height: 250px;
      }
    }
  `]
})
export class AppointmentComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit() {
    this.seoService.updateMetadata({
      title: 'Prendre Rendez-vous',
      description: 'Prenez rendez-vous avec le Conseil d\'État de la RDC. Remplissez le formulaire de demande de rendez-vous en ligne pour organiser une rencontre.',
      keywords: 'rendez-vous, appointment, consultation, rencontre, Conseil d\'État',
      ogUrl: '/appointment'
    });
  }
}
