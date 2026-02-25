import { Component, inject, signal, computed, HostListener } from '@angular/core';
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
    'document:keydown.escape': 'onEscapeKey()'
  },
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isCourtDropdownOpen = signal(false);
  isStepsDropdownOpen = signal(false);
  isLangDropdownOpen = signal(false);
  isMobileMenuOpen = signal(false);

  readonly languages: { code: LanguageCode; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'French' },
    { code: 'sw', label: 'Swahili' },
    { code: 'ln', label: 'Lingala' },
    { code: 'ts', label: 'Tshiluba' },
    { code: 'kg', label: 'Kikongo' }
  ];

  private readonly i18n = inject(I18nService);
  private readonly router = inject(Router);

  readonly activeLang = this.i18n.activeLang;
  currentLanguageLabel = computed(() => {
    const lang = this.i18n.activeLang();
    return this.languages.find((l) => l.code === lang)?.label ?? 'English';
  });

  logoSrc = computed(() => 'assets/new-logo.png');

  constructor() {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const clickedInsideNavDropdown = target.closest('.dropdown');
    const clickedInsideLangDropdown = target.closest('.lang-dropdown-wrapper');
    if (!clickedInsideNavDropdown && !clickedInsideLangDropdown) {
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
    this.isLangDropdownOpen.set(false);
  }

  toggleLangDropdown() {
    this.isLangDropdownOpen.set(!this.isLangDropdownOpen());
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
    this.isLangDropdownOpen.set(false);
  }
}