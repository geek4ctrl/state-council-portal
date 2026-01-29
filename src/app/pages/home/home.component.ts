import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="page-container">
      <h1>Welcome to State Council Portal</h1>
      <p>Your gateway to judicial services and information.</p>
    </div>
  `,
  styles: [`
    .page-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 3rem 1rem;
    }
    h1 {
      color: #8B6914;
      margin-bottom: 1rem;
    }
  `]
})
export class HomeComponent {}
