import { Component, signal, ChangeDetectorRef } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { I18nPipe } from './i18n/i18n.pipe';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, I18nPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('state-council-portal');
  protected currentRoute = signal('');

  constructor(
    private readonly router: Router,
    private readonly cdr: ChangeDetectorRef
  ) {
    // Subscribe to router events to update current route
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute.set(event.urlAfterRedirects);
        this.cdr.markForCheck();
      });
    
    // Set initial route
    this.currentRoute.set(this.router.url);
  }

  isRouteActive(path: string): boolean {
    const url = this.currentRoute();
    if (path === '/') {
      return url === '/' || url === '';
    }
    return url === path || url.startsWith(path + '/');
  }

  isFilingActive(): boolean {
    const url = this.currentRoute();
    return url.startsWith('/steps') || url.startsWith('/filing');
  }

  scrollToTop(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
