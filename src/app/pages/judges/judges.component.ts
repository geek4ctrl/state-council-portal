import { Component, ChangeDetectionStrategy } from '@angular/core';
import { I18nPipe } from '../../i18n/i18n.pipe';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-judges',
  imports: [I18nPipe, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page-container">
      <h1>{{ 'judges.title' | i18n }}</h1>
      <p>{{ 'judges.body' | i18n }}</p>
      <div class="judges-photo">
        <img src="assets/hero-group-photo.png" [alt]="'judges.photoAlt' | i18n" />
      </div>
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
      color: #B8860B;
      margin-bottom: 1rem;
    }
    .judges-photo {
      margin: 2rem 0 3rem;
      display: flex;
      justify-content: center;
    }
    .judges-photo img {
      width: min(100%, 880px);
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
      display: block;
    }
  `]
})
export class JudgesComponent {}
