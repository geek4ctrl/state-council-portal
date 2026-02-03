import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PreloadService {
  private preloadedRoutes = new Set<string>();
  private routeModuleMap: Map<string, () => Promise<any>> = new Map([
    ['/', () => import('../pages/home/home.component').then(m => m.HomeComponent)],
    ['/presentation', () => import('../pages/about/about.component').then(m => m.AboutComponent)],
    ['/organization', () => import('../pages/organization/organization.component').then(m => m.OrganizationComponent)],
    ['/news', () => import('../pages/news/news.component').then(m => m.NewsComponent)],
    ['/reforms', () => import('../pages/reforms/reforms.component').then(m => m.ReformsComponent)],
    ['/international-relations', () => import('../pages/international-relations/international-relations.component').then(m => m.InternationalRelationsComponent)],
    ['/steps', () => import('../pages/steps/steps.component').then(m => m.StepsComponent)],
    ['/audiences', () => import('../pages/audiences/audiences.component').then(m => m.AudiencesComponent)],
    ['/judges', () => import('../pages/judges/judges.component').then(m => m.JudgesComponent)],
    ['/history', () => import('../pages/history/history.component').then(m => m.HistoryComponent)],
    ['/process', () => import('../pages/process/process.component').then(m => m.ProcessComponent)]
  ]);

  constructor(private router: Router) {
    this.setupPreloadStrategy();
  }

  /**
   * Sets up automatic preloading strategy
   */
  private setupPreloadStrategy() {
    // Track navigation to determine likely next routes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.preloadLikelyNextRoutes(event.url);
      });

    // Preload on network idle
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => this.preloadPopularRoutes());
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(() => this.preloadPopularRoutes(), 3000);
    }
  }

  /**
   * Preload popular/common routes after initial load
   */
  private preloadPopularRoutes() {
    const popularRoutes = ['/', '/news', '/organization', '/steps'];

    popularRoutes.forEach(route => {
      if (!this.preloadedRoutes.has(route)) {
        this.preloadRoute(route);
      }
    });
  }

  /**
   * Preload likely next routes based on current route
   */
  private preloadLikelyNextRoutes(currentUrl: string) {
    const likelyNextRoutes: Record<string, string[]> = {
      '/': ['/news', '/organization', '/steps'],
      '/news': ['/organization', '/'],
      '/organization': ['/reforms', '/international-relations'],
      '/steps': ['/news', '/organization'],
      '/reforms': ['/international-relations', '/organization'],
      '/international-relations': ['/reforms', '/organization']
    };

    const nextRoutes = likelyNextRoutes[currentUrl] || [];
    nextRoutes.forEach(route => this.preloadRoute(route));
  }

  /**
   * Preload a specific route
   */
  public preloadRoute(route: string): Promise<any> {
    if (this.preloadedRoutes.has(route)) {
      return Promise.resolve();
    }

    const loader = this.routeModuleMap.get(route);
    if (!loader) {
      return Promise.resolve();
    }

    this.preloadedRoutes.add(route);

    return loader()
      .then(() => {
        console.log(`✅ Preloaded route: ${route}`);
      })
      .catch(error => {
        console.error(`❌ Failed to preload route: ${route}`, error);
        this.preloadedRoutes.delete(route);
      });
  }

  /**
   * Preload multiple routes
   */
  public preloadRoutes(routes: string[]): Promise<any[]> {
    return Promise.all(routes.map(route => this.preloadRoute(route)));
  }

  /**
   * Preload on link hover (call this from template)
   */
  public preloadOnHover(route: string) {
    // Use setTimeout to avoid preloading on accidental hovers
    return setTimeout(() => {
      this.preloadRoute(route);
    }, 50);
  }

  /**
   * Cancel a preload timeout (call when mouse leaves)
   */
  public cancelPreload(timeoutId: number) {
    clearTimeout(timeoutId);
  }

  /**
   * Check if a route has been preloaded
   */
  public isPreloaded(route: string): boolean {
    return this.preloadedRoutes.has(route);
  }

  /**
   * Clear all preloaded routes (useful for testing)
   */
  public clearPreloaded() {
    this.preloadedRoutes.clear();
  }

  /**
   * Get statistics about preloaded routes
   */
  public getStats() {
    return {
      totalPreloaded: this.preloadedRoutes.size,
      preloadedRoutes: Array.from(this.preloadedRoutes),
      availableRoutes: Array.from(this.routeModuleMap.keys())
    };
  }
}
