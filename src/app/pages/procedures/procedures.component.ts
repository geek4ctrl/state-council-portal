import { Component } from '@angular/core';

@Component({
  selector: 'app-procedures',
  standalone: true,
  template: `
    <div class="page-container">
      <h1>Procedures</h1>
      <p>Review court procedures and requirements.</p>
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
export class ProceduresComponent {}
