import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  standalone: true,
  template: `
    <div class="page-container">
      <h1>History</h1>
      <p>Discover the rich history of the State Council.</p>
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
export class HistoryComponent {}
