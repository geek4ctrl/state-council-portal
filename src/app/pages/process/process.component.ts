import { Component } from '@angular/core';
import { I18nPipe } from '../../i18n/i18n.pipe';

@Component({
  selector: 'app-process',
  imports: [I18nPipe],
  template: `
    <div class="page-container">
      <h1>{{ 'process.title' | i18n }}</h1>
      <p>{{ 'process.body' | i18n }}</p>
    </div>
  `,
  styles: [`
    .page-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 3rem 1rem;
    }
    h1 {
      color: #BF9874;
      margin-bottom: 1rem;
    }
  `]
})
export class ProcessComponent {}
