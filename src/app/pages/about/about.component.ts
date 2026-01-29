import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="page-container">
      <h1>About the Court</h1>
      <p>Learn about the State Council and its role in the judicial system.</p>
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
export class AboutComponent {}
