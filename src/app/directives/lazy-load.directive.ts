import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: 'img[appLazyLoad]',
  standalone: true
})
export class LazyLoadDirective implements OnInit, OnDestroy {
  @Input() src: string = '';
  @Input() placeholder: string = '';

  private intersectionObserver?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLImageElement>) {}

  ngOnInit() {
    // Use a blurred low-res placeholder if src is available, else fallback to gray SVG
    const blurPlaceholder = this.src ? this.getBlurPlaceholder(this.src) : this.fallbackPlaceholder();
    this.el.nativeElement.src = blurPlaceholder;
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

  private fallbackPlaceholder(): string {
    return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3C/svg%3E';
  }

  private getBlurPlaceholder(src: string): string {
    // Cloudinary: generate a tiny blurred version
    if (src.includes('cloudinary.com')) {
      return src.replace('/upload/', '/upload/w_30,e_blur:800,q_auto,f_auto/');
    }
    // For other images, return the image itself (browser will cache and scale it down)
    return src;
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
