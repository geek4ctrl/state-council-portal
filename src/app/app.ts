import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { I18nPipe } from './i18n/i18n.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, I18nPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('state-council-portal');

  constructor(private readonly router: Router) {}

  isFilingActive(): boolean {
    return this.router.url.startsWith('/steps') || this.router.url.startsWith('/filing');
  }
}
