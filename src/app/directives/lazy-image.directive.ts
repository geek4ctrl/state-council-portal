import { Directive, ElementRef, inject, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: 'img[appLazyImage]',
  standalone: true
})
export class LazyImageDirective implements OnInit {
  private el = inject(ElementRef<HTMLImageElement>);
  private renderer = inject(Renderer2);

  @Input('appLazyImage') src!: string;
  @Input() placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E';

  private observer: IntersectionObserver | null = null;

  ngOnInit(): void {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      // Fallback for SSR or browsers without IntersectionObserver
      this.loadImage();
      return;
    }

    const img = this.el.nativeElement;
    
    // Set initial placeholder
    this.renderer.setAttribute(img, 'src', this.placeholder);
    this.renderer.setStyle(img, 'opacity', '0');
    this.renderer.setStyle(img, 'transition', 'opacity 0.3s ease');

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadImage();
          this.observer?.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    this.observer.observe(img);
  }

  private loadImage(): void {
    const img = this.el.nativeElement;
    const imageLoader = new Image();
    
    imageLoader.onload = () => {
      this.renderer.setAttribute(img, 'src', this.src);
      this.renderer.setStyle(img, 'opacity', '1');
    };
    
    imageLoader.onerror = () => {
      // Keep placeholder on error
      console.warn('Failed to load image:', this.src);
    };
    
    imageLoader.src = this.src;
  }
}
