import {
  AfterViewInit, Component, DestroyRef, ElementRef,
  OnInit, ViewChild, inject, signal,
} from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { I18nPipe } from '../../i18n/i18n.pipe';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [I18nPipe, FooterComponent],
  template: `
    <!-- LOADER -->
    <div class="loader" [class.out]="isPageLoaded()">
      <div class="loader-sphere">
        <div class="sphere-ring r1"></div>
        <div class="sphere-ring r2"></div>
        <div class="sphere-ring r3"></div>
        <div class="sphere-core">
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M32 8L16 16L16 32C16 44 24 52 32 56C40 52 48 44 48 32L48 16L32 8Z"/>
          </svg>
        </div>
      </div>
      <div class="loader-track"><div class="loader-fill"></div></div>
      <span class="loader-label">Initializing...</span>
    </div>

    <div class="cur-dot" #curDot></div>
    <div class="cur-ring" #curRing></div>
    <div class="cur-trail" #curTrail></div>

    <div class="page-wrap page-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-overlay">
          <div class="container">
            <h1 class="hero-title" [innerHTML]="'about.hero.title' | i18n"></h1>
          </div>
        </div>
      </section>

      <!-- Content Section -->
      <section class="content-section">
        <div class="container">
          <!-- Introduction -->
          <div class="intro-box">
            <h2 class="section-heading" [innerHTML]="'about.intro.title' | i18n"></h2>
            <div class="intro-text">
              <p>{{ 'about.intro.body' | i18n }}</p>
            </div>
          </div>

          <!-- Legal Texts Section -->
          <div class="legal-section">
            <h2 class="section-heading" [innerHTML]="'about.legal.title' | i18n"></h2>

            <div class="legal-content">
              <!-- Left Column - Document Links -->
              <div class="document-links">
                <div class="doc-item">
                  <span class="doc-number">1</span>
                  <div class="doc-text">
                    <h3>{{ 'about.legal.docs.1' | i18n }}</h3>
                  </div>
                </div>

                <div class="doc-item">
                  <span class="doc-number">2</span>
                  <div class="doc-text">
                    <h3>{{ 'about.legal.docs.2' | i18n }}</h3>
                  </div>
                </div>

                <div class="doc-item">
                  <span class="doc-number">3</span>
                  <div class="doc-text">
                    <h3>{{ 'about.legal.docs.3' | i18n }}</h3>
                  </div>
                </div>
              </div>

              <!-- Right Column - Detailed Text -->
              <div class="detailed-text">
                <div class="text-block">
                  <h4>{{ 'about.legal.detail.title' | i18n }}</h4>
                  <p>{{ 'about.legal.detail.paragraph1' | i18n }}</p>
                  <p>{{ 'about.legal.detail.paragraph2' | i18n }}</p>
                  <ul>
                    <li>{{ 'about.legal.detail.list1.1' | i18n }}</li>
                    <li>{{ 'about.legal.detail.list1.2' | i18n }}</li>
                    <li>{{ 'about.legal.detail.list1.3' | i18n }}</li>
                    <li>{{ 'about.legal.detail.list1.4' | i18n }}</li>
                    <li>{{ 'about.legal.detail.list1.5' | i18n }}</li>
                  </ul>
                  <p>{{ 'about.legal.detail.paragraph3' | i18n }}</p>
                  <ul>
                    <li>{{ 'about.legal.detail.list2.1' | i18n }}</li>
                    <li>{{ 'about.legal.detail.list2.2' | i18n }}</li>
                    <li>{{ 'about.legal.detail.list2.3' | i18n }}</li>
                  </ul>
                  <p>{{ 'about.legal.detail.paragraph4' | i18n }}</p>
                  <p>{{ 'about.legal.detail.paragraph5' | i18n }}</p>
                  <p>{{ 'about.legal.detail.paragraph6' | i18n }}</p>
                  <p>{{ 'about.legal.detail.paragraph7' | i18n }}</p>
                  <p>{{ 'about.legal.detail.paragraph8' | i18n }}</p>
                  <p>{{ 'about.legal.detail.paragraph9' | i18n }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .page-container {
      min-height: 100vh;
    }

    /* Hero Section */
    .hero-section {
      position: relative;
      height: 400px;
      background: linear-gradient(rgba(10, 25, 41, 0.85), rgba(26, 41, 66, 0.9)),
                  url('https://placehold.co/1920x400/1a2942/ffffff?text=Court+Building') center/cover;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .hero-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
      opacity: 0.3;
    }

    .hero-overlay {
      position: relative;
      z-index: 1;
      width: 100%;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .hero-title {
      font-size: 2.75rem;
      font-weight: 700;
      color: white;
      text-align: center;
      line-height: 1.3;
      letter-spacing: 1px;
      margin: 0;
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
    }

    /* Content Section */
    .content-section {
      background: #f8f9fa;
      padding: 80px 0;
    }

    .section-heading {
      font-size: 2rem;
      font-weight: 700;
      color: #1a1a1a;
      text-align: center;
      margin: 0 0 40px 0;
      line-height: 1.4;
      letter-spacing: 0.5px;
    }

    /* Introduction Box */
    .intro-box {
      background: white;
      padding: 60px 80px;
      margin-bottom: 80px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }

    .intro-text {
      margin-top: 40px;
    }

    .intro-text p {
      font-size: 1rem;
      line-height: 1.9;
      color: #333;
      text-align: justify;
      margin: 0;
    }

    /* Legal Section */
    .legal-section {
      background: white;
      padding: 60px 80px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }

    .legal-content {
      display: grid;
      grid-template-columns: 300px 1fr;
      gap: 40px;
      margin-top: 40px;
    }

    /* Document Links */
    .document-links {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .doc-item {
      display: flex;
      gap: 15px;
      align-items: flex-start;
      padding: 20px;
      background: #f8f9fa;
      border-radius: 8px;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .doc-item:hover {
      background: #e8eef7;
      transform: translateX(5px);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .doc-number {
      flex-shrink: 0;
      width: 30px;
      height: 30px;
      background: #c41e3a;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 0.9rem;
    }

    .doc-text h3 {
      font-size: 0.85rem;
      font-weight: 600;
      color: #1a1a1a;
      line-height: 1.5;
      margin: 0;
    }

    /* Detailed Text */
    .detailed-text {
      background: #f8f9fa;
      padding: 30px;
      border-radius: 8px;
      border-left: 4px solid #c8956b;
    }

    .text-block h4 {
      font-size: 1rem;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0 0 20px 0;
      line-height: 1.6;
    }

    .text-block p {
      font-size: 0.9rem;
      line-height: 1.8;
      color: #333;
      margin: 0 0 15px 0;
      text-align: justify;
    }

    .text-block ul {
      margin: 15px 0;
      padding-left: 25px;
    }

    .text-block li {
      font-size: 0.9rem;
      line-height: 1.8;
      color: #333;
      margin-bottom: 8px;
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
      .hero-title {
        font-size: 2.25rem;
      }

      .intro-box,
      .legal-section {
        padding: 50px 40px;
      }

      .legal-content {
        grid-template-columns: 1fr;
        gap: 30px;
      }

      .document-links {
        flex-direction: row;
        overflow-x: auto;
        gap: 15px;
      }

      .doc-item {
        min-width: 250px;
      }
    }

    @media (max-width: 768px) {
      .hero-section {
        height: 300px;
      }

      .hero-title {
        font-size: 1.75rem;
      }

      .section-heading {
        font-size: 1.5rem;
      }

      .content-section {
        padding: 50px 0;
      }

      .intro-box,
      .legal-section {
        padding: 40px 25px;
      }

      .document-links {
        flex-direction: column;
      }

      .doc-item {
        min-width: auto;
      }
    }

    @media (max-width: 480px) {
      .hero-section {
        height: 250px;
      }

      .hero-title {
        font-size: 1.4rem;
      }

      .section-heading {
        font-size: 1.25rem;
      }

      .intro-box,
      .legal-section {
        padding: 30px 20px;
      }

      .intro-text p,
      .text-block p,
      .text-block li {
        font-size: 0.85rem;
      }

      .doc-text h3 {
        font-size: 0.8rem;
      }

      .text-block h4 {
        font-size: 0.95rem;
      }
    }

    /* Home-style: loader, cursor */
    @keyframes fillBar{0%{width:0}60%{width:70%}100%{width:100%}}
    @keyframes labelPulse{0%,100%{opacity:.4}50%{opacity:1}}
    @keyframes rOrbit1{from{transform:rotateX(65deg) rotateZ(0)}to{transform:rotateX(65deg) rotateZ(360deg)}}
    @keyframes rOrbit2{from{transform:rotateX(65deg) rotateZ(120deg)}to{transform:rotateX(65deg) rotateZ(480deg)}}
    @keyframes rOrbit3{from{transform:rotateX(65deg) rotateZ(240deg)}to{transform:rotateX(65deg) rotateZ(600deg)}}
    @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
    .page-wrap{cursor:none;}
    .loader{position:fixed;inset:0;background:linear-gradient(135deg,#080e1a,#1a2942);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:32px;z-index:9999;transition:opacity .7s ease,visibility .7s ease,transform .7s ease;}
    .loader.out{opacity:0;visibility:hidden;transform:scale(1.06);pointer-events:none;}
    .loader-sphere{width:120px;height:120px;position:relative;display:flex;align-items:center;justify-content:center;}
    .sphere-ring{position:absolute;inset:0;border-radius:50%;border:1px solid rgba(191,152,116,.35);}
    .loader .r1{inset:10px;animation:rOrbit1 2.5s linear infinite;}
    .loader .r2{inset:0;animation:rOrbit2 3.5s linear infinite;}
    .loader .r3{inset:-12px;animation:rOrbit3 5s linear infinite;}
    .sphere-core{width:52px;height:52px;border-radius:50%;background:radial-gradient(circle,rgba(191,152,116,.25),rgba(191,152,116,.05));border:1px solid rgba(191,152,116,.5);display:flex;align-items:center;justify-content:center;color:#BF9874;box-shadow:0 0 30px rgba(191,152,116,.3);animation:float 3s ease-in-out infinite;}
    .sphere-core svg{width:30px;height:30px;}
    .loader-track{width:220px;height:3px;background:rgba(255,255,255,.08);border-radius:99px;overflow:hidden;}
    .loader-fill{height:100%;background:linear-gradient(90deg,#BF9874,#e0b98a);border-radius:99px;animation:fillBar 2s ease-in-out infinite;}
    .loader-label{font-size:.72rem;font-weight:700;letter-spacing:2px;color:#BF9874;text-transform:uppercase;animation:labelPulse 2s ease-in-out infinite;}
    .cur-dot{position:fixed;width:8px;height:8px;border-radius:50%;background:#BF9874;pointer-events:none;z-index:99999;transform:translate(-50%,-50%);}
    .cur-ring{position:fixed;width:38px;height:38px;border-radius:50%;border:2px solid rgba(191,152,116,.55);pointer-events:none;z-index:99998;transform:translate(-50%,-50%);transition:width .25s,height .25s,border-color .25s;}
    .cur-trail{position:fixed;width:80px;height:80px;border-radius:50%;border:1px solid rgba(191,152,116,.15);pointer-events:none;z-index:99997;transform:translate(-50%,-50%);transition:width .4s,height .4s;}
    .page-wrap:has(button:hover) .cur-ring,.page-wrap:has(a:hover) .cur-ring{width:56px;height:56px;border-color:rgba(191,152,116,.9);}
  `]
})
export class PresentationComponent implements OnInit, AfterViewInit {
  private seoService = inject(SeoService);
  private destroyRef = inject(DestroyRef);

  @ViewChild('curDot') curDot!: ElementRef<HTMLDivElement>;
  @ViewChild('curRing') curRing!: ElementRef<HTMLDivElement>;
  @ViewChild('curTrail') curTrail!: ElementRef<HTMLDivElement>;

  isPageLoaded = signal(false);
  private rafId?: number;
  private curRx = 0; private curRy = 0;
  private trailRx = 0; private trailRy = 0;

  ngOnInit() {
    setTimeout(() => this.isPageLoaded.set(true), 1800);
    this.destroyRef.onDestroy(() => { if (this.rafId) cancelAnimationFrame(this.rafId); });
    this.seoService.updateMetadata({
      title: 'Présentation',
      description: 'Présentation du Conseil d\'État de la RDC : historique, attributions, textes légaux et règlementaires. Accédez aux lois organiques et décrets relatifs au fonctionnement de la juridiction.',
      keywords: 'présentation, histoire, attributions, lois, décrets, textes légaux, Conseil d\'État',
      ogUrl: '/presentation'
    });
  }

  ngAfterViewInit() {
    this.initCursor();
  }

  private initCursor() {
    const dot = this.curDot?.nativeElement;
    const ring = this.curRing?.nativeElement;
    const trail = this.curTrail?.nativeElement;
    if (!dot || !ring || !trail) return;
    let mx = 0, my = 0;
    document.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; dot.style.left = mx + 'px'; dot.style.top = my + 'px'; });
    const anim = () => {
      this.curRx += (mx - this.curRx) * 0.14;
      this.curRy += (my - this.curRy) * 0.14;
      this.trailRx += (mx - this.trailRx) * 0.07;
      this.trailRy += (my - this.trailRy) * 0.07;
      ring.style.left = this.curRx + 'px'; ring.style.top = this.curRy + 'px';
      trail.style.left = this.trailRx + 'px'; trail.style.top = this.trailRy + 'px';
      this.rafId = requestAnimationFrame(anim);
    };
    requestAnimationFrame(anim);
    document.querySelectorAll('.page-wrap button,.page-wrap a').forEach(el => {
      el.addEventListener('mouseenter', () => { ring.style.width = '56px'; ring.style.height = '56px'; ring.style.borderColor = 'rgba(191,152,116,.9)'; trail.style.width = '90px'; trail.style.height = '90px'; });
      el.addEventListener('mouseleave', () => { ring.style.width = '38px'; ring.style.height = '38px'; ring.style.borderColor = 'rgba(191,152,116,.55)'; trail.style.width = '80px'; trail.style.height = '80px'; });
    });
  }
}
