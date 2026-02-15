import { Injectable } from '@angular/core';
import { Router, NavigationEnd, Routes } from '@angular/router';
import { isObservable, firstValueFrom } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PreloadService {
  private preloadedRoutes = new Set<string>();
  private routeModuleMap = new Map<string, () => Promise<unknown>>();

  constructor(private router: Router) {
    this.buildRouteModuleMap(this.router.config);
    this.setupPreloadStrategy();
  }

  private buildRouteModuleMap(routes: Routes, parentPath: string = '') {
    routes.forEach(route => {
      const routePath = route.path ?? '';
      const fullPath = this.normalizePath(parentPath, routePath);

      if (route.loadComponent && !this.isDynamicPath(routePath) && routePath !== '**') {
        const loader = route.loadComponent;
        this.routeModuleMap.set(fullPath, () => {
          const result = loader();

          if (result instanceof Promise) {
            return result;
          }

          if (isObservable(result)) {
            return firstValueFrom(result);
          }

          return Promise.resolve(result);
        });
      }

      if (route.children?.length) {
        this.buildRouteModuleMap(route.children, fullPath);
      }
    });
  }

  private normalizePath(parentPath: string, routePath: string): string {
    const combined = [parentPath, routePath].filter(Boolean).join('/');
    return combined ? `/${combined}` : '/';
  }

  private isDynamicPath(routePath: string): boolean {
    return routePath.includes(':');
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
