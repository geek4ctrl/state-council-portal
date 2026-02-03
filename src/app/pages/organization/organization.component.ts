import { Component } from '@angular/core';

@Component({
  selector: 'app-organization',
  standalone: true,
  template: `
    <div class="page-container">
      <h1>Organization</h1>
      <p>Explore the organizational structure of the State Council.</p>
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
export class OrganizationComponent {}
