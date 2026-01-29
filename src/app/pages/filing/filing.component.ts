import { Component } from '@angular/core';

@Component({
  selector: 'app-filing',
  standalone: true,
  template: `
    <div class="page-container">
      <h1>Filing a Case</h1>
      <p>Learn how to file a case with the State Council.</p>
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
export class FilingComponent {}
