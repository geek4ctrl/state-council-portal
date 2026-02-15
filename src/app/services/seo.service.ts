import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private router = inject(Router);

  private readonly baseTitle = 'Conseil d\'État - République Démocratique du Congo';
  private readonly baseUrl = 'https://conseildetatrdc.com';

  constructor() {
    // Update canonical URL on navigation
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateCanonicalUrl(event.urlAfterRedirects);
      });
  }

  updateMetadata(metadata: PageMetadata): void {
    // Update title
    const fullTitle = metadata.title
      ? `${metadata.title} | ${this.baseTitle}`
      : this.baseTitle;
    this.titleService.setTitle(fullTitle);

    // Update description
    this.metaService.updateTag({
      name: 'description',
      content: metadata.description
    });

    // Update keywords if provided
    if (metadata.keywords) {
      this.metaService.updateTag({
        name: 'keywords',
        content: metadata.keywords
      });
    }

    // Update Open Graph tags
    this.metaService.updateTag({
      property: 'og:title',
      content: metadata.ogTitle || fullTitle
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: metadata.ogDescription || metadata.description
    });

    if (metadata.ogImage) {
      this.metaService.updateTag({
        property: 'og:image',
        content: metadata.ogImage
      });
    }

    if (metadata.ogUrl) {
      this.metaService.updateTag({
        property: 'og:url',
        content: `${this.baseUrl}${metadata.ogUrl}`
      });
    }

    // Update Twitter Card tags
    this.metaService.updateTag({
      name: 'twitter:title',
      content: metadata.ogTitle || fullTitle
    });
    this.metaService.updateTag({
      name: 'twitter:description',
      content: metadata.ogDescription || metadata.description
    });

    if (metadata.ogImage) {
      this.metaService.updateTag({
        name: 'twitter:image',
        content: metadata.ogImage
      });
    }
  }

  private updateCanonicalUrl(url: string): void {
    const canonicalUrl = `${this.baseUrl}${url}`;

    // Remove existing canonical link
    const existingLink = document.querySelector('link[rel="canonical"]');
    if (existingLink) {
      existingLink.setAttribute('href', canonicalUrl);
    } else {
      // Create new canonical link
      const link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', canonicalUrl);
      document.head.appendChild(link);
    }

    // Update og:url
    this.metaService.updateTag({
      property: 'og:url',
      content: canonicalUrl
    });
    this.metaService.updateTag({
      name: 'twitter:url',
      content: canonicalUrl
    });
  }

  addStructuredData(data: any): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  }

  removeStructuredData(): void {
    const scripts = document.head.querySelectorAll('script[type="application/ld+json"]');
    scripts.forEach(script => {
      // Don't remove the main organization schema
      if (!script.textContent?.includes('GovernmentOrganization')) {
        script.remove();
      }
    });
  }
}
