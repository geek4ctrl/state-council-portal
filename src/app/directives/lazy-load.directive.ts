import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: 'img[appLazyLoad]',
  standalone: true
})
export class LazyLoadDirective implements OnInit, OnDestroy {
  @Input() src: string = '';
  @Input() placeholder: string = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3C/svg%3E';

  private intersectionObserver?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLImageElement>) {}

  ngOnInit() {
    // Set placeholder
    this.el.nativeElement.src = this.placeholder;
    this.el.nativeElement.classList.add('lazy-loading');

    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
      this.setupIntersectionObserver();
    } else {
      // Fallback: load image immediately if IntersectionObserver is not supported
      this.loadImage();
    }
  }

  private setupIntersectionObserver() {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '50px', // Start loading 50px before the image enters viewport
      threshold: 0.01
    };

    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadImage();
          this.intersectionObserver?.unobserve(this.el.nativeElement);
        }
      });
    }, options);

    this.intersectionObserver.observe(this.el.nativeElement);
  }

  private loadImage() {
    const img = this.el.nativeElement;

    // Create a new image to preload
    const tempImg = new Image();

    tempImg.onload = () => {
      img.src = this.src;
      img.classList.remove('lazy-loading');
      img.classList.add('lazy-loaded');
    };

    tempImg.onerror = () => {
      img.classList.remove('lazy-loading');
      img.classList.add('lazy-error');
      console.error(`Failed to load image: ${this.src}`);
    };

    tempImg.src = this.src;
  }

  ngOnDestroy() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }
}
