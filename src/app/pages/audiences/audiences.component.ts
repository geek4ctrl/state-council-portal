import { Component } from '@angular/core';

@Component({
  selector: 'app-audiences',
  standalone: true,
  template: `
    <div class="page-container">
      <h1>Audiences</h1>
      <p>View upcoming court audiences and schedules.</p>
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
export class AudiencesComponent {}
