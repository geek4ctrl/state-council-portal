import { Component } from '@angular/core';

@Component({
  selector: 'app-process',
  standalone: true,
  template: `
    <div class="page-container">
      <h1>Court Process</h1>
      <p>Understand the court process and what to expect.</p>
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
export class ProcessComponent {}
