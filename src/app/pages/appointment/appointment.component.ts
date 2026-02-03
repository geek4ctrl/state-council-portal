import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment',
  standalone: true,
  template: `
    <div class="page-container">
      <section class="hero-section">
        <div class="hero-content">
          <h1>Book an Appointment</h1>
          <p class="subtitle">Schedule your appointment with the Court of Cassation</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <form class="appointment-form">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your full name" required />
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email address" required />
            </div>
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="Enter your phone number" required />
            </div>
            <div class="form-group">
              <label for="date">Preferred Date</label>
              <input type="date" id="date" required />
            </div>
            <div class="form-group">
              <label for="reason">Reason for Appointment</label>
              <textarea id="reason" rows="5" placeholder="Please describe the reason for your appointment" required></textarea>
            </div>
            <button type="submit" class="submit-btn">Submit Appointment Request</button>
          </form>
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
      background: #f8f8f8;
    }

    .container {
      max-width: 700px;
      margin: 0 auto;
    }

    .appointment-form {
      background: white;
      padding: 50px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    }

    .form-group {
      margin-bottom: 25px;
    }

    label {
      display: block;
      margin-bottom: 8px;
      font-weight: 600;
      color: #2c3e50;
      font-size: 1rem;
    }

    input, textarea {
      width: 100%;
      padding: 12px 15px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
      font-family: inherit;
      transition: border-color 0.3s ease;
    }

    input:focus, textarea:focus {
      outline: none;
      border-color: #c41e3a;
    }

    textarea {
      resize: vertical;
    }

    .submit-btn {
      background: #2c3e50;
      color: white;
      border: none;
      padding: 15px 40px;
      border-radius: 4px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      width: 100%;
      transition: background 0.3s ease;
    }

    .submit-btn:hover {
      background: #1a252f;
    }

    @media (max-width: 768px) {
      .hero-content h1 {
        font-size: 2.5rem;
      }

      .subtitle {
        font-size: 1.2rem;
      }

      .appointment-form {
        padding: 30px 20px;
      }

      .content-section {
        padding: 60px 15px;
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
export class AppointmentComponent {}
