import { AfterViewInit, Component, DestroyRef, ElementRef, ViewChild, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { I18nPipe } from './i18n/i18n.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, I18nPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected readonly title = signal('state-council-portal');

  @ViewChild('curDot') curDot!: ElementRef<HTMLDivElement>;
  @ViewChild('curRing') curRing!: ElementRef<HTMLDivElement>;
  @ViewChild('curTrail') curTrail!: ElementRef<HTMLDivElement>;

  private rafId?: number;
  private curRx = 0;
  private curRy = 0;
  private trailRx = 0;
  private trailRy = 0;
  private readonly destroyRef = inject(DestroyRef);

  constructor(private readonly router: Router) {}

  ngAfterViewInit(): void {
    this.initCursor();
  }

  private initCursor(): void {
    const dot = this.curDot?.nativeElement;
    const ring = this.curRing?.nativeElement;
    const trail = this.curTrail?.nativeElement;
    if (!dot || !ring || !trail) return;
    let mx = 0, my = 0;
    document.addEventListener('mousemove', (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
    });
    const anim = () => {
      this.curRx += (mx - this.curRx) * 0.14;
      this.curRy += (my - this.curRy) * 0.14;
      this.trailRx += (mx - this.trailRx) * 0.07;
      this.trailRy += (my - this.trailRy) * 0.07;
      ring.style.left = this.curRx + 'px';
      ring.style.top = this.curRy + 'px';
      trail.style.left = this.trailRx + 'px';
      trail.style.top = this.trailRy + 'px';
      this.rafId = requestAnimationFrame(anim);
    };
    requestAnimationFrame(anim);
    document.querySelectorAll('button, a').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        ring.style.width = '58px';
        ring.style.height = '58px';
        ring.style.borderColor = '#1F9BD9';
        trail.style.width = '90px';
        trail.style.height = '90px';
      });
      el.addEventListener('mouseleave', () => {
        ring.style.width = '38px';
        ring.style.height = '38px';
        ring.style.borderColor = '#1F9BD9';
        trail.style.width = '80px';
        trail.style.height = '80px';
      });
    });
    this.destroyRef.onDestroy(() => {
      if (this.rafId) cancelAnimationFrame(this.rafId);
    });
  }

  scrollToTop(): void {
    // Wait for route change to complete before scrolling
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  }
}
