import { Directive, HostListener, Input } from '@angular/core';
import { PreloadService } from '../services/preload.service';

/**
 * Directive to preload route components when user hovers over a link
 *
 * Usage:
 * <a routerLink="/news" appPreloadOnHover="/news">News</a>
 *
 * This optimizes perceived performance by loading the next page
 * before the user clicks, making navigation feel instant.
 */
@Directive({
  selector: '[appPreloadOnHover]',
  standalone: true
})
export class PreloadOnHoverDirective {
  @Input() appPreloadOnHover: string = '';
  private preloadTimeout?: number;

  constructor(private preloadService: PreloadService) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    // Start preload after a short delay to avoid preloading on accidental hovers
    this.preloadTimeout = this.preloadService.preloadOnHover(this.appPreloadOnHover);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // Cancel preload if user moves away quickly
    if (this.preloadTimeout) {
      this.preloadService.cancelPreload(this.preloadTimeout);
    }
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    // On mobile, preload immediately on touch
    // This gives ~300ms before the click event fires
    this.preloadService.preloadRoute(this.appPreloadOnHover);
  }
}
