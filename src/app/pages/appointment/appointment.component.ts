import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment',
  standalone: true,
  template: `
    <div class="page-container">
      <h1>Book an Appointment</h1>
      <p>Schedule your appointment with the State Council.</p>
      <form class="appointment-form">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div class="form-group">
          <label for="phone">Phone</label>
          <input type="tel" id="phone" placeholder="Enter your phone number" />
        </div>
        <div class="form-group">
          <label for="date">Preferred Date</label>
          <input type="date" id="date" />
        </div>
        <div class="form-group">
          <label for="reason">Reason for Appointment</label>
          <textarea id="reason" rows="4" placeholder="Describe your reason"></textarea>
        </div>
        <button type="submit" class="submit-btn">Submit Request</button>
      </form>
    </div>
  `,
  styles: [`
    .page-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 3rem 1rem;
    }
    h1 {
      color: #8B6914;
      margin-bottom: 1rem;
    }
    .appointment-form {
      margin-top: 2rem;
    }
    .form-group {
      margin-bottom: 1.5rem;
    }
    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }
    input, textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
    }
    input:focus, textarea:focus {
      outline: none;
      border-color: #8B6914;
    }
    .submit-btn {
      background-color: #8B6914;
      color: white;
      border: none;
      padding: 1rem 2rem;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      width: 100%;
    }
    .submit-btn:hover {
      background-color: #6d520f;
    }
  `]
})
export class AppointmentComponent {}
