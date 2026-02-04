import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IconComponent } from '../icon/icon.component';
import { PreloadOnHoverDirective } from '../../directives/preload-on-hover.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, IconComponent, PreloadOnHoverDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isCourtDropdownOpen = signal(false);
  isStepsDropdownOpen = signal(false);
  isMobileMenuOpen = signal(false);

  constructor(private router: Router) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const clickedInsideDropdown = target.closest('.dropdown');

    if (!clickedInsideDropdown) {
      this.closeDropdowns();
    }
  }

  @HostListener('document:keydown.escape')
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
    this.closeDropdowns();
  }

  navigateToAppointment() {
    this.closeDropdowns();
    this.closeMobileMenu();
    this.router.navigate(['/appointment']);
  }
}
