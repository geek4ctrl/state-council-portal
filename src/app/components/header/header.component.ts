import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IconComponent } from '../icon/icon.component';
import { PreloadOnHoverDirective } from '../../directives/preload-on-hover.directive';
import { I18nPipe } from '../../i18n/i18n.pipe';
import { I18nService, LanguageCode } from '../../i18n/i18n.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive, IconComponent, PreloadOnHoverDirective, I18nPipe],
  host: {
    'document:click': 'onDocumentClick($event)',
    'document:keydown.escape': 'onEscapeKey()'
  },
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isCourtDropdownOpen = signal(false);
  isStepsDropdownOpen = signal(false);
  isMobileMenuOpen = signal(false);
  
  private readonly i18n = inject(I18nService);
  private readonly router = inject(Router);

  // Computed signal for header logo based on active language
  logoSrc = computed(() => {
    return this.i18n.activeLang() === 'fr' ? 'assets/logo-fn.png' : 'assets/logo-en.png';
  });
    logosSrc = computed(() => {
    return this.i18n.activeLang() === 'fr' ? 'assets/news1.png' : 'assets/logo-en.png';
  });

  constructor() {}

  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const clickedInsideDropdown = target.closest('.dropdown');
    if (!clickedInsideDropdown) {
      this.closeDropdowns();
    }
  }

  onEscapeKey() {
    this.closeDropdowns();
    this.closeMobileMenu();
  }

  toggleCourtDropdown() {
    this.isCourtDropdownOpen.set(!this.isCourtDropdownOpen());
    this.isStepsDropdownOpen.set(false);
  }

  toggleStepsDropdown() {
    this.isStepsDropdownOpen.set(!this.isStepsDropdownOpen());
    this.isCourtDropdownOpen.set(false);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.set(!this.isMobileMenuOpen());
    this.syncBodyMenuState();
    if (!this.isMobileMenuOpen()) {
      this.closeDropdowns();
    }
  }

  closeDropdowns() {
    this.isCourtDropdownOpen.set(false);
    this.isStepsDropdownOpen.set(false);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
    this.syncBodyMenuState();
    this.closeDropdowns();
  }

  private syncBodyMenuState() {
    if (typeof document === 'undefined') {
      return;
    }
    document.body.classList.toggle('menu-open', this.isMobileMenuOpen());
  }

  navigateToAppointment() {
    this.closeDropdowns();
    this.closeMobileMenu();
    this.router.navigate(['/appointment']);
    this.scrollToTop();
  }

  onNavLinkClick() {
    this.closeMobileMenu();
    this.scrollToTop();
  }

  onDropdownLinkClick() {
    this.closeMobileMenu();
    this.scrollToTop();
  }

  private scrollToTop() {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  setLanguage(lang: LanguageCode) {
    void this.i18n.setLanguage(lang);
  }

  activeLang() {
    return this.i18n.activeLang();
  }
}