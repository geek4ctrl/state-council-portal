import { Component, ChangeDetectionStrategy } from '@angular/core';
import { I18nPipe } from '../../i18n/i18n.pipe';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-history',
  imports: [I18nPipe, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page-container">
      <h1>{{ 'history.title' | i18n }}</h1>
      <p>{{ 'history.body' | i18n }}</p>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .page-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 3rem 1rem;
    }
    h1 {
      color: #FCD116;
      margin-bottom: 1rem;
    }
  `]
})
export class HistoryComponent {}
