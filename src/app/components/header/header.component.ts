import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isCourtDropdownOpen = signal(false);
  isStepsDropdownOpen = signal(false);

  constructor(private router: Router) {}

  toggleCourtDropdown() {
    this.isCourtDropdownOpen.set(!this.isCourtDropdownOpen());
    this.isStepsDropdownOpen.set(false);
  }

  toggleStepsDropdown() {
    this.isStepsDropdownOpen.set(!this.isStepsDropdownOpen());
    this.isCourtDropdownOpen.set(false);
  }

  closeDropdowns() {
    this.isCourtDropdownOpen.set(false);
    this.isStepsDropdownOpen.set(false);
  }

  navigateToAppointment() {
    this.closeDropdowns();
    this.router.navigate(['/appointment']);
  }
}
