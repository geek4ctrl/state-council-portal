import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {
  private document = inject(DOCUMENT);

  constructor() {
    this.initPerformanceMonitoring();
  }

  private initPerformanceMonitoring(): void {
    if (typeof window === 'undefined') return;

    // Core Web Vitals monitoring
    this.observeLCP();
    this.observeFID();
    this.observeCLS();
    this.observeFCP();
    this.observeTTFB();
  }

  private observeLCP(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry & { element?: Element };
        console.log('LCP:', lastEntry.startTime, lastEntry.element);
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] as any });
    } catch (e) {
      // LCP not supported
    }
  }

  private observeFID(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fidEntry = entry as PerformanceEntry & { processingStart: number; startTime: number };
          const delay = fidEntry.processingStart - fidEntry.startTime;
          console.log('FID:', delay);
        }
      });
      observer.observe({ entryTypes: ['first-input'] as any });
    } catch (e) {
      // FID not supported
    }
  }

  private observeCLS(): void {
    if (!('PerformanceObserver' in window)) return;

    let clsValue = 0;
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const layoutEntry = entry as PerformanceEntry & { value: number; hadRecentInput: boolean };
          if (!layoutEntry.hadRecentInput) {
            clsValue += layoutEntry.value;
          }
        }
        console.log('CLS:', clsValue);
      });
      observer.observe({ entryTypes: ['layout-shift'] as any });
    } catch (e) {
      // CLS not supported
    }
  }

  private observeFCP(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            console.log('FCP:', entry.startTime);
          }
        }
      });
      observer.observe({ entryTypes: ['paint'] as any });
    } catch (e) {
      // Paint API not supported
    }
  }

  private observeTTFB(): void {
    if (typeof window === 'undefined' || !window.performance) return;

    const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      const ttfb = navigation.responseStart - navigation.startTime;
      console.log('TTFB:', ttfb);
    }
  }

  // Lazy load images with Intersection Observer
  lazyLoadImages(): void {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset['src']) {
            img.src = img.dataset['src'];
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    const images = this.document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
  }

  // Preload critical resources
  preloadResource(href: string, as: 'style' | 'script' | 'image' | 'font'): void {
    const link = this.document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (as === 'font') {
      link.crossOrigin = 'anonymous';
    }
    this.document.head.appendChild(link);
  }

  // Prefetch routes
  prefetchRoute(url: string): void {
    const link = this.document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    this.document.head.appendChild(link);
  }
}
