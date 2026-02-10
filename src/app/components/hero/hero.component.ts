import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  currentSlide = 0;

  slides = [
    {
      category: 'HOME OF LAW & ORDER',
      title: 'DRC: JUDICIAL YEAR BEGINS AT THE STATE COUNCIL FOR THE 2025-2026 TERM',
      description: 'This video covers the formal opening of the judicial year for 2025-2026. In the presence of President Félix Tshisekedi, counselors and magistrates resumed their duties after the judicial recess, OPENING OF THE JUDICIAL YEAR AT THE STATE COUNCIL — YouTube',
      link: '',
      buttonText: 'Watch Live Proceedings on Youtube',
      buttonUrl: '#'
    }
  ];

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  previousSlide() {
    this.currentSlide = this.currentSlide > 0 ? this.currentSlide - 1 : this.slides.length - 1;
  }

  nextSlide() {
    this.currentSlide = this.currentSlide < this.slides.length - 1 ? this.currentSlide + 1 : 0;
  }
}
