import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nPipe } from '../../i18n/i18n.pipe';
import { I18nService } from '../../i18n/i18n.service';
import Highcharts from 'highcharts';
import { FooterComponent } from '../../components/footer/footer.component';

interface HeroSlide {
  id: number;
  titleKey: string;
  subtitleKey: string;
  descriptionKey: string;
  buttonKey: string;
  image: string;
}
interface PresidentSlide {
  id: number;
  titleKey: string;
  image: string;
  paragraphKeys: string[];
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, I18nPipe, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- LOADER -->
    <div class="loader" [class.out]="isPageLoaded()">
      <div class="loader-sphere">
        <div class="sphere-ring r1"></div>
        <div class="sphere-ring r2"></div>
        <div class="sphere-ring r3"></div>
        <div class="sphere-core">
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M32 8L16 16L16 32C16 44 24 52 32 56C40 52 48 44 48 32L48 16L32 8Z" />
          </svg>
        </div>
      </div>
      <div class="loader-track"><div class="loader-fill"></div></div>
      <span class="loader-label">Initializing...</span>
    </div>

    <!-- CUSTOM CURSOR -->
    <div class="cur-dot" #curDot></div>
    <div class="cur-ring" #curRing></div>
    <div class="cur-trail" #curTrail></div>

    <div class="page-wrap">
      <!-- ═══ HERO ═══ -->
      <section class="hero">
        <div
          class="hero-bg"
          [style.background-image]="'url(' + heroSlides[currentSlide()].image + ')'"
        ></div>
        <div class="hero-fog"></div>
        <canvas class="hero-canvas" #heroCanvas></canvas>
        <div class="hero-body">
          <div class="container">
            <div class="hero-text">
              <div class="hero-tag" [attr.data-slide]="currentSlide()">
                {{ heroSlides[currentSlide()].subtitleKey | i18n }}
              </div>
              <h1 class="hero-h1" [attr.data-slide]="currentSlide()">
                {{ heroSlides[currentSlide()].titleKey | i18n }}
              </h1>
              <div class="hero-btns">
                <button
                  class="hbtn primary mag-btn"
                  (mousemove)="mag($event)"
                  (mouseleave)="magOut($event)"
                  (click)="ripple($event)"
                >
                  <span>{{ heroSlides[currentSlide()].buttonKey | i18n }}</span>
                  <div class="hbtn-side"></div>
                </button>
                <button
                  class="hbtn ghost mag-btn"
                  (mousemove)="mag($event)"
                  (mouseleave)="magOut($event)"
                  (click)="ripple($event)"
                >
                  <span>Learn More</span>
                  <div class="hbtn-side"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-nav">
          <div class="container">
            <div class="hero-controls">
              <button
                class="h-arr"
                (click)="prevSlide()"
                (mouseenter)="arrHover($event, true)"
                (mouseleave)="arrHover($event, false)"
              >
                <div class="arr-face arr-front">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                  </svg>
                </div>
                <div class="arr-face arr-top"></div>
                <div class="arr-face arr-bottom"></div>
              </button>
              <div class="h-dots">
                @for(s of heroSlides; track s.id; let i=$index){
                <button class="h-dot" [class.on]="i === currentSlide()" (click)="gotoSlide(i)">
                  <span class="hdot-bar"></span>
                  <span class="hdot-glow"></span>
                </button>
                }
              </div>
              <button
                class="h-arr"
                (click)="nextSlide()"
                (mouseenter)="arrHover($event, true)"
                (mouseleave)="arrHover($event, false)"
              >
                <div class="arr-face arr-front">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                </div>
                <div class="arr-face arr-top"></div>
                <div class="arr-face arr-bottom"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══ KEY FACTS ═══ -->
      <section class="kf-section">
        <div class="kf-bg-aura"></div>
        <div class="container">
          <div class="sec-head">
            <div class="sec-line anim-line"></div>
            <h2 class="sec-title anim-up">{{ 'home.keyFacts.title' | i18n }}</h2>
          </div>
          <p class="sec-sub anim-up a-d1">{{ 'home.keyFacts.subtitle' | i18n }}</p>
          <div class="kf-grid">
            <div
              class="kf-card tilt-card"
              style="--i:0"
              (mousemove)="tilt($event)"
              (mouseleave)="tiltReset($event)"
            >
              <div class="tilt-shine"></div>
              <div class="tilt-shadow"></div>
              <div class="kf-meta">
                <h3>{{ 'home.keyFacts.cards.volume.title' | i18n }}</h3>
                <span class="kf-tag">{{ 'home.keyFacts.cards.volume.note' | i18n }}</span>
              </div>
              <div
                #caseVolumeChart
                class="kf-chart"
                role="img"
                [attr.aria-label]="'home.keyFacts.cards.volume.aria' | i18n"
              ></div>
              <div class="card-edge-r"></div>
              <div class="card-edge-b"></div>
            </div>
            <div
              class="kf-card tilt-card"
              style="--i:1"
              (mousemove)="tilt($event)"
              (mouseleave)="tiltReset($event)"
            >
              <div class="tilt-shine"></div>
              <div class="tilt-shadow"></div>
              <div class="kf-meta">
                <h3>{{ 'home.keyFacts.cards.processing.title' | i18n }}</h3>
                <span class="kf-tag">{{ 'home.keyFacts.cards.processing.note' | i18n }}</span>
              </div>
              <div
                #processingTimeChart
                class="kf-chart"
                role="img"
                [attr.aria-label]="'home.keyFacts.cards.processing.aria' | i18n"
              ></div>
              <div class="card-edge-r"></div>
              <div class="card-edge-b"></div>
            </div>
            <div
              class="kf-card tilt-card"
              style="--i:2"
              (mousemove)="tilt($event)"
              (mouseleave)="tiltReset($event)"
            >
              <div class="tilt-shine"></div>
              <div class="tilt-shadow"></div>
              <div class="kf-meta">
                <h3>{{ 'home.keyFacts.cards.decisions.title' | i18n }}</h3>
                <span class="kf-tag">{{ 'home.keyFacts.cards.decisions.note' | i18n }}</span>
              </div>
              <div
                #decisionsTypeChart
                class="kf-chart"
                role="img"
                [attr.aria-label]="'home.keyFacts.cards.decisions.aria' | i18n"
              ></div>
              <div class="card-edge-r"></div>
              <div class="card-edge-b"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══ QUICK LINKS ═══ -->
      <section class="ql-section">
        <div class="container">
          <div class="ql-row">
            @for(q of ql; track q.key; let i=$index){
            <div class="ql-card flip-card" style="--i:{{ i }}" (click)="flipToggle($event)">
              <div class="flip-inner">
                <div class="flip-front">
                  <div class="ql-img img-zoom">
                    <img [src]="q.img" alt="" />
                    <div class="img-sheen"></div>
                  </div>
                  <div class="ql-info">
                    <h3>{{ q.title | i18n }}</h3>
                    <p>{{ q.body | i18n }}</p>
                    <span class="ql-cta"
                      >{{ q.action | i18n }}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" /></svg
                    ></span>
                  </div>
                </div>
                <div class="flip-back">
                  <div class="flip-back-inner">
                    <div class="flip-back-icon">
                      <svg viewBox="0 0 64 64" fill="currentColor">
                        <path
                          d="M32 8L16 16L16 32C16 44 24 52 32 56C40 52 48 44 48 32L48 16L32 8Z"
                        />
                      </svg>
                    </div>
                    <p>{{ q.body | i18n }}</p>
                    <button class="flip-back-btn" (click)="$event.stopPropagation()">
                      {{ q.action | i18n }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            @if(i<3){
            <div class="ql-divider"></div>
            } }
          </div>
        </div>
      </section>

      <!-- ═══ OFFER ═══ -->
      <section class="offer-section">
        <div class="container">
          <div class="sec-head">
            <div class="sec-line anim-line"></div>
            <h2 class="sec-title anim-up">{{ 'home.offer.title' | i18n }}</h2>
          </div>
          <p class="sec-sub anim-up a-d1">{{ 'home.offer.subtitle' | i18n }}</p>
          <div class="offer-grid">
            <div
              class="o-card tilt-card"
              style="--i:0"
              (mousemove)="tilt($event)"
              (mouseleave)="tiltReset($event)"
            >
              <div class="tilt-shine"></div>
              <div class="o-card-floor"></div>
              <div class="o-icon-wrap">
                <div class="o-icon-sphere">
                  <svg viewBox="0 0 64 64" fill="currentColor">
                    <path d="M32 8L16 16L16 32C16 44 24 52 32 56C40 52 48 44 48 32L48 16L32 8Z" />
                  </svg>
                </div>
                <div class="o-icon-orbit"><span class="orbit-dot"></span></div>
              </div>
              <h3>{{ 'home.offer.cards.1.title' | i18n }}</h3>
              <p>{{ 'home.offer.cards.1.body' | i18n }}</p>
              <div class="o-card-beam"></div>
            </div>
            <div
              class="o-card tilt-card"
              style="--i:1"
              (mousemove)="tilt($event)"
              (mouseleave)="tiltReset($event)"
            >
              <div class="tilt-shine"></div>
              <div class="o-card-floor"></div>
              <div class="o-icon-wrap">
                <div class="o-icon-sphere">
                  <svg viewBox="0 0 64 64" fill="currentColor">
                    <rect x="18" y="12" width="28" height="40" rx="2" />
                    <rect x="22" y="16" width="4" height="4" fill="white" />
                    <rect x="22" y="24" width="4" height="4" fill="white" />
                    <rect x="28" y="16" width="14" height="4" fill="white" />
                    <rect x="28" y="24" width="14" height="4" fill="white" />
                  </svg>
                </div>
                <div class="o-icon-orbit"><span class="orbit-dot"></span></div>
              </div>
              <h3>{{ 'home.offer.cards.2.title' | i18n }}</h3>
              <p>{{ 'home.offer.cards.2.body' | i18n }}</p>
              <div class="o-card-beam"></div>
            </div>
            <div
              class="o-card tilt-card"
              style="--i:2"
              (mousemove)="tilt($event)"
              (mouseleave)="tiltReset($event)"
            >
              <div class="tilt-shine"></div>
              <div class="o-card-floor"></div>
              <div class="o-icon-wrap">
                <div class="o-icon-sphere">
                  <svg viewBox="0 0 64 64" fill="currentColor">
                    <circle cx="32" cy="20" r="8" />
                    <path d="M32 30C24 30 16 32 16 36V42H48V36C48 32 40 30 32 30Z" />
                    <path d="M26 18L30 22L38 14L40 16L30 26L24 20L26 18Z" fill="white" />
                  </svg>
                </div>
                <div class="o-icon-orbit"><span class="orbit-dot"></span></div>
              </div>
              <h3>{{ 'home.offer.cards.3.title' | i18n }}</h3>
              <p>{{ 'home.offer.cards.3.body' | i18n }}</p>
              <div class="o-card-beam"></div>
            </div>
            <div
              class="o-card tilt-card"
              style="--i:3"
              (mousemove)="tilt($event)"
              (mouseleave)="tiltReset($event)"
            >
              <div class="tilt-shine"></div>
              <div class="o-card-floor"></div>
              <div class="o-icon-wrap">
                <div class="o-icon-sphere">
                  <svg viewBox="0 0 64 64" fill="currentColor">
                    <circle cx="32" cy="32" r="24" />
                    <path d="M20 28L28 32L38 22L42 26L28 40L16 32L20 28Z" fill="white" />
                  </svg>
                </div>
                <div class="o-icon-orbit"><span class="orbit-dot"></span></div>
              </div>
              <h3>{{ 'home.offer.cards.4.title' | i18n }}</h3>
              <p>{{ 'home.offer.cards.4.body' | i18n }}</p>
              <div class="o-card-beam"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══ EXPERTISE ═══ -->
      <section class="exp-section">
        <div class="exp-grid-bg"></div>
        <div class="exp-glow-orb exp-orb1"></div>
        <div class="exp-glow-orb exp-orb2"></div>
        <div class="container">
          <div class="sec-head center">
            <div class="sec-line-c anim-line-c"></div>
            <h2 class="sec-title anim-up">{{ 'home.expertise.title' | i18n }}</h2>
            <div class="sec-line-c anim-line-c"></div>
          </div>
          <p class="sec-sub center anim-up a-d1">{{ 'home.expertise.subtitle' | i18n }}</p>
          <div class="exp-grid">
            <a
              class="exp-card tilt-card accent-civil"
              href="#"
              style="--i:0"
              (mousemove)="tilt($event)"
              (mouseleave)="tiltReset($event)"
            >
              <div class="tilt-shine"></div>
              <div class="exp-card-accent-bar"></div>
              <div class="exp-card-depth"></div>
              <div class="exp-icon-wrap">
                <div class="exp-icon float-icon">
                  <svg viewBox="0 0 64 64" fill="currentColor">
                    <path
                      d="M38 8L26 8C24 8 22 10 22 12L22 52C22 54 24 56 26 56L38 56C40 56 42 54 42 52L42 12C42 10 40 8 38 8Z"
                    />
                    <path d="M32 12L28 16L36 16L32 12Z" fill="white" />
                  </svg>
                  <div class="exp-icon-pulse"></div>
                </div>
                <h3>{{ 'home.expertise.areas.civil.title' | i18n }}</h3>
              </div>
              <p class="exp-desc">{{ 'home.expertise.areas.civil.desc' | i18n }}</p>
              <ul class="exp-list">
                <li>{{ 'home.expertise.areas.civil.items.1' | i18n }}</li>
                <li>{{ 'home.expertise.areas.civil.items.2' | i18n }}</li>
                <li>{{ 'home.expertise.areas.civil.items.3' | i18n }}</li>
              </ul>
              <span class="exp-cta"
                >{{ 'home.expertise.cta' | i18n }} <span class="cta-arr">→</span></span
              >
            </a>
            <a
              class="exp-card tilt-card accent-family"
              href="#"
              style="--i:1"
              (mousemove)="tilt($event)"
              (mouseleave)="tiltReset($event)"
            >
              <div class="tilt-shine"></div>
              <div class="exp-card-accent-bar"></div>
              <div class="exp-card-depth"></div>
              <div class="exp-icon-wrap">
                <div class="exp-icon float-icon">
                  <svg viewBox="0 0 64 64" fill="currentColor">
                    <path d="M24 40C16 40 10 44 10 50V56H38V50C38 44 32 40 24 40Z" />
                    <path
                      d="M40 40C38 40 36 40.4 34 41C37 43 38 46 38 50V56H54V50C54 44 48 40 40 40Z"
                    />
                    <circle cx="24" cy="26" r="10" />
                    <circle cx="42" cy="24" r="8" />
                  </svg>
                  <div class="exp-icon-pulse"></div>
                </div>
                <h3>{{ 'home.expertise.areas.family.title' | i18n }}</h3>
              </div>
              <p class="exp-desc">{{ 'home.expertise.areas.family.desc' | i18n }}</p>
              <ul class="exp-list">
                <li>{{ 'home.expertise.areas.family.items.1' | i18n }}</li>
                <li>{{ 'home.expertise.areas.family.items.2' | i18n }}</li>
                <li>{{ 'home.expertise.areas.family.items.3' | i18n }}</li>
              </ul>
              <span class="exp-cta"
                >{{ 'home.expertise.cta' | i18n }} <span class="cta-arr">→</span></span
              >
            </a>
            <a
              class="exp-card tilt-card accent-public"
              href="#"
              style="--i:2"
              (mousemove)="tilt($event)"
              (mouseleave)="tiltReset($event)"
            >
              <div class="tilt-shine"></div>
              <div class="exp-card-accent-bar"></div>
              <div class="exp-card-depth"></div>
              <div class="exp-icon-wrap">
                <div class="exp-icon float-icon">
                  <svg viewBox="0 0 64 64" fill="currentColor">
                    <path
                      d="M32 8L18 14V28C18 40 26 48 32 52C38 48 46 40 46 28V14L32 8Z M32 12L42 16V28C42 38 36 44 32 48C28 44 22 38 22 28V16L32 12Z"
                    />
                    <rect x="28" y="24" width="8" height="16" fill="white" />
                    <rect x="24" y="32" width="16" height="4" fill="white" />
                  </svg>
                  <div class="exp-icon-pulse"></div>
                </div>
                <h3>{{ 'home.expertise.areas.public.title' | i18n }}</h3>
              </div>
              <p class="exp-desc">{{ 'home.expertise.areas.public.desc' | i18n }}</p>
              <ul class="exp-list">
                <li>{{ 'home.expertise.areas.public.items.1' | i18n }}</li>
                <li>{{ 'home.expertise.areas.public.items.2' | i18n }}</li>
                <li>{{ 'home.expertise.areas.public.items.3' | i18n }}</li>
              </ul>
              <span class="exp-cta"
                >{{ 'home.expertise.cta' | i18n }} <span class="cta-arr">→</span></span
              >
            </a>
            <a
              class="exp-card tilt-card accent-labor"
              href="#"
              style="--i:3"
              (mousemove)="tilt($event)"
              (mouseleave)="tiltReset($event)"
            >
              <div class="tilt-shine"></div>
              <div class="exp-card-accent-bar"></div>
              <div class="exp-card-depth"></div>
              <div class="exp-icon-wrap">
                <div class="exp-icon float-icon">
                  <svg viewBox="0 0 64 64" fill="currentColor">
                    <rect x="22" y="28" width="20" height="20" rx="2" />
                    <rect x="26" y="20" width="12" height="10" rx="2" />
                    <circle cx="32" cy="38" r="3" fill="white" />
                  </svg>
                  <div class="exp-icon-pulse"></div>
                </div>
                <h3>{{ 'home.expertise.areas.labor.title' | i18n }}</h3>
              </div>
              <p class="exp-desc">{{ 'home.expertise.areas.labor.desc' | i18n }}</p>
              <ul class="exp-list">
                <li>{{ 'home.expertise.areas.labor.items.1' | i18n }}</li>
                <li>{{ 'home.expertise.areas.labor.items.2' | i18n }}</li>
                <li>{{ 'home.expertise.areas.labor.items.3' | i18n }}</li>
              </ul>
              <span class="exp-cta"
                >{{ 'home.expertise.cta' | i18n }} <span class="cta-arr">→</span></span
              >
            </a>
            <a
              class="exp-card tilt-card accent-criminal"
              href="#"
              style="--i:4"
              (mousemove)="tilt($event)"
              (mouseleave)="tiltReset($event)"
            >
              <div class="tilt-shine"></div>
              <div class="exp-card-accent-bar"></div>
              <div class="exp-card-depth"></div>
              <div class="exp-icon-wrap">
                <div class="exp-icon float-icon">
                  <svg viewBox="0 0 64 64" fill="currentColor">
                    <path
                      d="M32 8C24 8 18 14 18 22C18 30 24 36 32 36C40 36 46 30 46 22C46 14 40 8 32 8Z"
                    />
                    <path
                      d="M46 18C46 14 43 11 39 11L25 11C21 11 18 14 18 18L18 46C18 50 21 53 25 53L39 53C43 53 46 50 46 46L46 18Z"
                    />
                    <path d="M28 18L32 24L36 18" stroke="#7a4d66" stroke-width="2" fill="none" />
                  </svg>
                  <div class="exp-icon-pulse"></div>
                </div>
                <h3>{{ 'home.expertise.areas.criminal.title' | i18n }}</h3>
              </div>
              <p class="exp-desc">{{ 'home.expertise.areas.criminal.desc' | i18n }}</p>
              <ul class="exp-list">
                <li>{{ 'home.expertise.areas.criminal.items.1' | i18n }}</li>
                <li>{{ 'home.expertise.areas.criminal.items.2' | i18n }}</li>
                <li>{{ 'home.expertise.areas.criminal.items.3' | i18n }}</li>
              </ul>
              <span class="exp-cta"
                >{{ 'home.expertise.cta' | i18n }} <span class="cta-arr">→</span></span
              >
            </a>
            <a
              class="exp-card tilt-card accent-property"
              href="#"
              style="--i:5"
              (mousemove)="tilt($event)"
              (mouseleave)="tiltReset($event)"
            >
              <div class="tilt-shine"></div>
              <div class="exp-card-accent-bar"></div>
              <div class="exp-card-depth"></div>
              <div class="exp-icon-wrap">
                <div class="exp-icon float-icon">
                  <svg viewBox="0 0 64 64" fill="currentColor">
                    <rect x="16" y="32" width="32" height="20" />
                    <polygon points="32,12 16,32 48,32" />
                    <rect x="28" y="24" width="8" height="8" fill="white" />
                  </svg>
                  <div class="exp-icon-pulse"></div>
                </div>
                <h3>{{ 'home.expertise.areas.property.title' | i18n }}</h3>
              </div>
              <p class="exp-desc">{{ 'home.expertise.areas.property.desc' | i18n }}</p>
              <ul class="exp-list">
                <li>{{ 'home.expertise.areas.property.items.1' | i18n }}</li>
                <li>{{ 'home.expertise.areas.property.items.2' | i18n }}</li>
                <li>{{ 'home.expertise.areas.property.items.3' | i18n }}</li>
              </ul>
              <span class="exp-cta"
                >{{ 'home.expertise.cta' | i18n }} <span class="cta-arr">→</span></span
              >
            </a>
          </div>
        </div>
      </section>

      <!-- ═══ CONTACT BAR ═══ -->
      <section class="ct-section">
        <div class="container">
          <div class="ct-bar">
            <div
              class="ct-item"
              style="--i:0"
              (mouseenter)="ctPop($event)"
              (mouseleave)="ctUnpop($event)"
            >
              <div class="ct-icon-box">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  width="28"
                  height="28"
                >
                  <path
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div class="ct-icon-ring"></div>
              </div>
              <div class="ct-text">
                <h3>{{ 'home.contact.address.title' | i18n }}</h3>
                <p>{{ 'home.contact.address.body' | i18n }}</p>
              </div>
            </div>
            <div class="ct-sep"></div>
            <div
              class="ct-item"
              style="--i:1"
              (mouseenter)="ctPop($event)"
              (mouseleave)="ctUnpop($event)"
            >
              <div class="ct-icon-box">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  width="28"
                  height="28"
                >
                  <path
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div class="ct-icon-ring"></div>
              </div>
              <div class="ct-text">
                <h3>{{ 'home.contact.phone.title' | i18n }}</h3>
                <p>{{ 'home.contact.phone.body' | i18n }}</p>
              </div>
            </div>
            <div class="ct-sep"></div>
            <div
              class="ct-item"
              style="--i:2"
              (mouseenter)="ctPop($event)"
              (mouseleave)="ctUnpop($event)"
            >
              <div class="ct-icon-box">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  width="28"
                  height="28"
                >
                  <path
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div class="ct-icon-ring"></div>
              </div>
              <div class="ct-text">
                <h3>{{ 'home.contact.email.title' | i18n }}</h3>
                <p>{{ 'home.contact.email.body' | i18n }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══ PRESIDENT ═══ -->
      <section class="pres-section">
        <div class="pres-aurora pres-a1"></div>
        <div class="pres-aurora pres-a2"></div>
        <div class="pres-aurora pres-a3"></div>
        <div class="container">
          <div class="pres-layout">
            <div class="pres-img-stage" (mousemove)="tilt($event)" (mouseleave)="tiltReset($event)">
              <div class="tilt-shine"></div>
              <div class="pres-img-frame">
                <img
                  [src]="presSlides[currentPresSlide()].image"
                  [alt]="'home.president.imageAlt' | i18n"
                />
                <div class="pres-img-overlay"></div>
                <div class="pres-img-grid"></div>
              </div>
              <div class="pres-img-shadow"></div>
              <div class="pres-badge">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Verified</span>
              </div>
            </div>
            <div class="pres-content">
              <h2 class="pres-title">{{ presSlides[currentPresSlide()].titleKey | i18n }}</h2>
              @for(p of presSlides[currentPresSlide()].paragraphKeys; track p){
              <p class="pres-para">{{ p | i18n }}</p>
              }
              <button
                class="pres-btn mag-btn"
                (mousemove)="mag($event)"
                (mouseleave)="magOut($event)"
                (click)="ripple($event)"
              >
                <span>{{ 'home.president.cta' | i18n }}</span>
                <div class="pres-btn-aura"></div>
              </button>
              <div class="pres-dots">
                @for(s of presSlides; track s.id; let i=$index){
                <button
                  class="pres-dot"
                  [class.on]="i === currentPresSlide()"
                  (click)="gotoPresSlide(i)"
                >
                  <span class="pdot-inner"></span>
                  <span class="pdot-wave"></span>
                </button>
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══ NEWSLETTER ═══ -->
      <section class="nl-section">
        <div class="nl-scanlines"></div>
        <div class="container">
          <div class="nl-head">
            <div class="nl-line anim-line-c"></div>
            <h2 class="anim-up">{{ 'home.newsletter.title' | i18n }}</h2>
            <div class="nl-line anim-line-c"></div>
          </div>
          <div class="nl-grid">
            @for(n of nlItems; track n.key; let i=$index){
            <div
              class="nl-card tilt-card"
              style="--i:{{ i }}"
              (mousemove)="tilt($event)"
              (mouseleave)="tiltReset($event)"
            >
              <div class="tilt-shine"></div>
              <div class="nl-img-wrap img-zoom">
                <img [src]="n.img" [alt]="n.alt | i18n" />
                <div class="img-sheen"></div>
                <div class="nl-img-badge">{{ n.date | i18n }}</div>
                <div class="nl-img-scan"></div>
              </div>
              <div class="nl-body">
                <h3>{{ n.title | i18n }}</h3>
                <a href="#" class="nl-link">
                  {{ 'home.newsletter.readMore' | i18n }}
                  <span class="nl-arr">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                  <span class="nl-underline"></span>
                </a>
              </div>
              <div class="nl-card-glow"></div>
            </div>
            }
          </div>
          <div class="nl-action">
            <button
              class="nl-btn mag-btn"
              (mousemove)="mag($event)"
              (mouseleave)="magOut($event)"
              (click)="ripple($event)"
            >
              <span>{{ 'home.newsletter.cta' | i18n }}</span>
            </button>
          </div>
        </div>
      </section>

      <app-footer></app-footer>
    </div>
  `,
  styles: [
    `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }

      /* ━━━━━━━━━━━━━━ KEYFRAMES ━━━━━━━━━━━━━━ */
      @keyframes sphereSpin {
        to {
          transform: rotateX(-20deg) rotateY(360deg);
        }
      }
      @keyframes rOrbit1 {
        from {
          transform: rotateX(65deg) rotateZ(0);
        }
        to {
          transform: rotateX(65deg) rotateZ(360deg);
        }
      }
      @keyframes rOrbit2 {
        from {
          transform: rotateX(65deg) rotateZ(120deg);
        }
        to {
          transform: rotateX(65deg) rotateZ(480deg);
        }
      }
      @keyframes rOrbit3 {
        from {
          transform: rotateX(65deg) rotateZ(240deg);
        }
        to {
          transform: rotateX(65deg) rotateZ(600deg);
        }
      }
      @keyframes fillBar {
        0% {
          width: 0;
          background-position: 0;
        }
        60% {
          width: 70%;
        }
        100% {
          width: 100%;
          background-position: 200%;
        }
      }
      @keyframes labelPulse {
        0%,
        100% {
          opacity: 0.4;
          letter-spacing: 2px;
        }
        50% {
          opacity: 1;
          letter-spacing: 5px;
        }
      }
      @keyframes loaderOut {
        to {
          opacity: 0;
          visibility: hidden;
          transform: scale(1.05);
        }
      }
      @keyframes heroTagIn {
        from {
          opacity: 0;
          transform: translateY(20px) rotateX(40deg);
        }
        to {
          opacity: 1;
          transform: translateY(0) rotateX(0);
        }
      }
      @keyframes heroH1In {
        from {
          opacity: 0;
          transform: translateY(30px) rotateX(30deg) scale(0.96);
        }
        to {
          opacity: 1;
          transform: translateY(0) rotateX(0) scale(1);
        }
      }
      @keyframes heroBtnsIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes float {
        0%,
        100% {
          transform: translateY(0) rotateZ(0);
        }
        50% {
          transform: translateY(-8px) rotateZ(2deg);
        }
      }
      @keyframes float2 {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-5px);
        }
      }
      @keyframes particleDrift {
        0% {
          opacity: 0;
          transform: translateY(0) scale(0);
        }
        20% {
          opacity: 0.8;
        }
        100% {
          opacity: 0;
          transform: translateY(-160px) scale(1.5);
        }
      }
      @keyframes shimmerSweep {
        from {
          transform: translateX(-120%) skewX(-20deg);
        }
        to {
          transform: translateX(220%) skewX(-20deg);
        }
      }
      @keyframes cardIn {
        from {
          opacity: 0;
          transform: translateY(40px) rotateX(20deg) scale(0.94);
        }
        to {
          opacity: 1;
          transform: translateY(0) rotateX(0) scale(1);
        }
      }
      @keyframes lineExpand {
        from {
          width: 0;
          opacity: 0;
        }
        to {
          width: 60px;
          opacity: 1;
        }
      }
      @keyframes lineCExpand {
        from {
          width: 0;
          opacity: 0;
        }
        to {
          width: 160px;
          opacity: 1;
        }
      }
      @keyframes upFade {
        from {
          opacity: 0;
          transform: translateY(28px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes orbitDot {
        from {
          transform: rotate(0deg) translateX(26px) rotate(0deg);
        }
        to {
          transform: rotate(360deg) translateX(26px) rotate(-360deg);
        }
      }
      @keyframes beamRise {
        0% {
          height: 0;
          opacity: 0;
        }
        100% {
          height: 60%;
          opacity: 0.4;
        }
      }
      @keyframes pulseRing {
        0% {
          transform: scale(1);
          opacity: 0.7;
        }
        100% {
          transform: scale(2.2);
          opacity: 0;
        }
      }
      @keyframes flipIn {
        from {
          opacity: 0;
          transform: rotateY(-90deg);
        }
        to {
          opacity: 1;
          transform: rotateY(0);
        }
      }
      @keyframes iconIconBob {
        0%,
        100% {
          transform: translateY(0) rotateY(0);
        }
        50% {
          transform: translateY(-6px) rotateY(12deg);
        }
      }
      @keyframes auroraShift {
        0%,
        100% {
          transform: translate(0, 0) scale(1);
        }
        50% {
          transform: translate(40px, -30px) scale(1.1);
        }
      }
      @keyframes presImgIn {
        from {
          opacity: 0;
          transform: translateX(-60px) rotateY(20deg);
        }
        to {
          opacity: 1;
          transform: translateX(0) rotateY(0);
        }
      }
      @keyframes presContentIn {
        from {
          opacity: 0;
          transform: translateX(60px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      @keyframes dotWave {
        from {
          transform: scale(1);
          opacity: 0.8;
        }
        to {
          transform: scale(3);
          opacity: 0;
        }
      }
      @keyframes scanline {
        from {
          background-position: 0 0;
        }
        to {
          background-position: 0 40px;
        }
      }
      @keyframes gridMove {
        from {
          background-position: 0 0;
        }
        to {
          background-position: 60px 60px;
        }
      }
      @keyframes glowPulse {
        0%,
        100% {
          opacity: 0.6;
        }
        50% {
          opacity: 1;
        }
      }
      @keyframes arrPress {
        0% {
          transform: translateZ(0) rotateX(0);
        }
        50% {
          transform: translateZ(-4px) rotateX(8deg);
        }
        100% {
          transform: translateZ(0) rotateX(0);
        }
      }
      @keyframes badgeBob {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-4px);
        }
      }
      @keyframes imgScanMove {
        from {
          top: -100%;
        }
        to {
          top: 200%;
        }
      }
      @keyframes ctIconSpin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      @keyframes neonFlicker {
        0%,
        100% {
          opacity: 1;
        }
        92% {
          opacity: 1;
        }
        93% {
          opacity: 0.4;
        }
        94% {
          opacity: 1;
        }
        96% {
          opacity: 0.6;
        }
        97% {
          opacity: 1;
        }
      }
      @keyframes cursorPulse {
        0%,
        100% {
          transform: translate(-50%, -50%) scale(1);
        }
        50% {
          transform: translate(-50%, -50%) scale(1.4);
        }
      }

      /* ━━━━━━━━━━━━━━ CURSOR ━━━━━━━━━━━━━━ */
      .cur-dot {
        position: fixed;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #bf9874;
        pointer-events: none;
        z-index: 99999;
        transform: translate(-50%, -50%);
        transition: transform 0.06s ease;
      }
      .cur-ring {
        position: fixed;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        border: 2px solid rgba(191, 152, 116, 0.55);
        pointer-events: none;
        z-index: 99998;
        transform: translate(-50%, -50%);
        transition: width 0.25s ease, height 0.25s ease, border-color 0.25s ease;
      }
      .cur-trail {
        position: fixed;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 1px solid rgba(191, 152, 116, 0.15);
        pointer-events: none;
        z-index: 99997;
        transform: translate(-50%, -50%);
        transition: width 0.4s ease, height 0.4s ease;
      }
      body:has(button:hover) .cur-ring {
        width: 58px;
        height: 58px;
        border-color: #bf9874;
      }

      /* ━━━━━━━━━━━━━━ LOADER ━━━━━━━━━━━━━━ */
      .loader {
        position: fixed;
        inset: 0;
        background: linear-gradient(135deg, #080e1a, #1a2942);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 32px;
        z-index: 9999;
        transition: opacity 0.7s ease, visibility 0.7s ease, transform 0.7s ease;
      }
      .loader.out {
        opacity: 0;
        visibility: hidden;
        transform: scale(1.06);
        pointer-events: none;
      }
      .loader-sphere {
        width: 120px;
        height: 120px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .sphere-ring {
        position: absolute;
        inset: 0;
        border-radius: 50%;
        border: 1px solid rgba(191, 152, 116, 0.35);
      }
      .r1 {
        inset: 10px;
        animation: rOrbit1 2.5s linear infinite;
      }
      .r2 {
        inset: 0;
        animation: rOrbit2 3.5s linear infinite;
      }
      .r3 {
        inset: -12px;
        animation: rOrbit3 5s linear infinite;
      }
      .sphere-core {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(191, 152, 116, 0.25), rgba(191, 152, 116, 0.05));
        border: 1px solid rgba(191, 152, 116, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #bf9874;
        box-shadow: 0 0 30px rgba(191, 152, 116, 0.3), inset 0 0 20px rgba(191, 152, 116, 0.1);
        animation: float 3s ease-in-out infinite;
      }
      .sphere-core svg {
        width: 30px;
        height: 30px;
      }
      .loader-track {
        width: 220px;
        height: 3px;
        background: rgba(255, 255, 255, 0.08);
        border-radius: 99px;
        overflow: hidden;
      }
      .loader-fill {
        height: 100%;
        background: linear-gradient(90deg, #bf9874, #e0b98a, #bf9874);
        background-size: 200%;
        animation: fillBar 2s ease-in-out infinite;
        border-radius: 99px;
      }
      .loader-label {
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 2px;
        color: #bf9874;
        text-transform: uppercase;
        animation: labelPulse 2s ease-in-out infinite;
      }

      /* ━━━━━━━━━━━━━━ HERO ━━━━━━━━━━━━━━ */
      .hero {
        position: relative;
        height: 600px;
        overflow: hidden;
        perspective: 800px;
      }
      .hero-bg {
        position: absolute;
        inset: -5%;
        background-size: cover;
        background-position: center;
        transition: background-image 0.8s ease;
        transform: translateZ(-40px) scale(1.1);
      }
      .hero-fog {
        position: absolute;
        inset: 0;
        background: linear-gradient(
          90deg,
          rgba(0, 18, 45, 0.93) 0%,
          rgba(0, 18, 45, 0.72) 55%,
          rgba(0, 18, 45, 0.4) 100%
        );
      }
      .hero-canvas {
        position: absolute;
        inset: 0;
        pointer-events: none;
        z-index: 1;
      }
      .hero-body {
        position: relative;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
      }
      .hero-text {
        max-width: 660px;
        color: #fff;
        perspective: 600px;
      }
      .hero-tag {
        font-size: 0.72rem;
        font-weight: 800;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: #bf9874;
        margin-bottom: 18px;
        animation: heroTagIn 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.2s both;
      }
      .hero-h1 {
        font-size: 2.9rem;
        font-weight: 900;
        line-height: 1.12;
        margin-bottom: 28px;
        text-transform: uppercase;
        color: #fff;
        animation: heroH1In 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.4s both;
        text-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
      }
      .hero-btns {
        display: flex;
        gap: 14px;
        flex-wrap: wrap;
        animation: heroBtnsIn 0.7s ease 0.65s both;
      }
      .hbtn {
        position: relative;
        padding: 17px 44px;
        font-size: 0.95rem;
        font-weight: 700;
        cursor: pointer;
        overflow: hidden;
        transform-style: preserve-3d;
        transition: transform 0.25s cubic-bezier(0.23, 1, 0.32, 1);
      }
      .hbtn span {
        position: relative;
        z-index: 2;
      }
      .hbtn-side {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 5px;
        transform: translateY(100%) translateZ(-5px);
        transition: opacity 0.3s ease;
      }
      .hbtn.primary {
        background: #c82333;
        color: #fff;
        border: none;
        box-shadow: 0 6px 0 #8b1020, 0 12px 30px rgba(200, 35, 51, 0.4);
      }
      .hbtn.primary .hbtn-side {
        background: #8b1020;
      }
      .hbtn.primary:hover {
        transform: translateY(-4px) rotateX(8deg);
        box-shadow: 0 10px 0 #8b1020, 0 20px 40px rgba(200, 35, 51, 0.5);
      }
      .hbtn.primary:active {
        transform: translateY(2px) rotateX(-4deg);
        box-shadow: 0 3px 0 #8b1020, 0 6px 15px rgba(200, 35, 51, 0.3);
      }
      .hbtn.ghost {
        background: transparent;
        color: #fff;
        border: 1.5px solid rgba(255, 255, 255, 0.5);
        box-shadow: 0 6px 0 rgba(255, 255, 255, 0.1), 0 12px 30px rgba(0, 0, 0, 0.2);
      }
      .hbtn.ghost:hover {
        transform: translateY(-4px) rotateX(8deg);
        background: rgba(255, 255, 255, 0.1);
        border-color: #fff;
      }
      .hbtn.ghost:active {
        transform: translateY(2px) rotateX(-4deg);
      }
      .hbtn::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
          105deg,
          transparent 40%,
          rgba(255, 255, 255, 0.2) 50%,
          transparent 60%
        );
        transform: translateX(-120%) skewX(-20deg);
        pointer-events: none;
      }
      .hbtn:hover::before {
        animation: shimmerSweep 0.6s ease forwards;
      }
      .mag-btn {
        transition: transform 0.25s cubic-bezier(0.23, 1, 0.32, 1);
      }

      .hero-nav {
        position: absolute;
        bottom: 32px;
        left: 0;
        right: 0;
        z-index: 3;
      }
      .hero-controls {
        display: flex;
        align-items: center;
        gap: 30px;
        justify-content: flex-start;
      }
      .h-arr {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.12);
        border: 1px solid rgba(255, 255, 255, 0.5);
        color: #fff;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transform-style: preserve-3d;
        position: relative;
        overflow: hidden;
        transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s ease,
          background 0.3s ease;
      }
      .arr-face {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .arr-front {
        inset: 0;
        z-index: 1;
        transition: transform 0.3s ease;
      }
      .arr-front svg {
        width: 24px;
        height: 24px;
      }
      .arr-top {
        top: 0;
        left: 0;
        right: 0;
        height: 6px;
        background: rgba(191, 152, 116, 0.5);
        transform: rotateX(90deg) translateZ(3px);
        transform-origin: top;
      }
      .arr-bottom {
        bottom: 0;
        left: 0;
        right: 0;
        height: 6px;
        background: rgba(0, 0, 0, 0.3);
        transform: rotateX(-90deg) translateZ(3px);
        transform-origin: bottom;
      }
      .h-arr:hover {
        transform: translateZ(6px) scale(1.1);
        background: rgba(191, 152, 116, 0.25);
        border-color: #bf9874;
        box-shadow: 0 0 20px rgba(191, 152, 116, 0.4);
      }
      .h-arr:active {
        transform: translateZ(-2px) scale(0.96);
        animation: arrPress 0.2s ease;
      }

      .h-dots {
        display: flex;
        gap: 16px;
      }
      .h-dot {
        position: relative;
        width: 52px;
        height: 5px;
        background: rgba(255, 255, 255, 0.3);
        border: none;
        cursor: pointer;
        border-radius: 3px;
        overflow: visible;
        transition: transform 0.3s ease;
      }
      .h-dot.on {
        transform: scaleY(1.5);
      }
      .hdot-bar {
        position: absolute;
        inset: 0;
        border-radius: 3px;
        transition: background 0.4s ease;
      }
      .h-dot.on .hdot-bar {
        background: #bf9874;
      }
      .hdot-glow {
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 8px;
        border-radius: 50%;
        background: #bf9874;
        filter: blur(5px);
        opacity: 0;
        transition: all 0.4s ease;
      }
      .h-dot.on .hdot-glow {
        width: 36px;
        opacity: 0.9;
      }
      .h-dot.on .hdot-bar::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
        animation: shimmerSweep 2s ease infinite;
      }

      /* ━━━━━━━━━━━━━━ SHARED TILT CARD ━━━━━━━━━━━━━━ */
      .tilt-card {
        transform-style: preserve-3d;
        will-change: transform;
        transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s ease;
        opacity: 0;
        animation: cardIn 0.7s cubic-bezier(0.23, 1, 0.32, 1) calc(var(--i, 0) * 0.1s) forwards;
        position: relative;
        overflow: hidden;
      }
      .tilt-shine {
        position: absolute;
        inset: 0;
        border-radius: inherit;
        pointer-events: none;
        z-index: 10;
        background: linear-gradient(
          105deg,
          transparent 0%,
          rgba(255, 255, 255, 0) 45%,
          rgba(255, 255, 255, 0.18) 50%,
          rgba(255, 255, 255, 0) 55%,
          transparent 100%
        );
        transform: translateX(-120%) skewX(-20deg);
      }
      .tilt-shadow {
        position: absolute;
        inset: 0;
        border-radius: inherit;
        pointer-events: none;
        z-index: -1;
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0);
        transition: box-shadow 0.5s ease;
      }

      /* ━━━━━━━━━━━━━━ KEY FACTS ━━━━━━━━━━━━━━ */
      .kf-section {
        background: linear-gradient(180deg, #f8f6f2, #fff);
        padding: 64px 0 48px;
        border-bottom: 1px solid rgba(26, 41, 66, 0.08);
        position: relative;
        overflow: hidden;
      }
      .kf-bg-aura {
        position: absolute;
        top: -100px;
        left: -100px;
        width: 500px;
        height: 500px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(191, 152, 116, 0.12), transparent 70%);
        pointer-events: none;
        animation: auroraShift 8s ease-in-out infinite;
      }
      .kf-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }
      .kf-card {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.5));
        border-radius: 18px;
        padding: 20px 20px 14px;
        backdrop-filter: blur(14px) saturate(130%);
        box-shadow: 0 12px 40px rgba(26, 41, 66, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.7);
      }
      .kf-meta {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 12px;
      }
      .kf-meta h3 {
        font-size: 1rem;
        font-weight: 700;
        color: #1a1a1a;
      }
      .kf-tag {
        font-size: 0.72rem;
        color: #8b7355;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 700;
        white-space: nowrap;
        animation: labelPulse 3s ease-in-out infinite;
      }
      .kf-chart {
        width: 100%;
        height: 250px;
        overflow: visible;
      }
      .card-edge-r {
        position: absolute;
        top: 0;
        right: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(to bottom, transparent, rgba(191, 152, 116, 0.5), transparent);
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      .card-edge-b {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        width: 100%;
        background: linear-gradient(to right, transparent, rgba(191, 152, 116, 0.5), transparent);
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      .tilt-card:hover .card-edge-r,
      .tilt-card:hover .card-edge-b {
        opacity: 1;
      }

      /* ━━━━━━━━━━━━━━ SEC HEADERS ━━━━━━━━━━━━━━ */
      .sec-head {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 10px;
      }
      .sec-head.center {
        justify-content: center;
      }
      .sec-line {
        width: 60px;
        height: 3px;
        background: linear-gradient(90deg, #bf9874, #d4a06a);
      }
      .anim-line {
        animation: lineExpand 0.8s ease-out both;
      }
      .sec-line-c {
        width: 160px;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(191, 152, 116, 0.7), transparent);
      }
      .anim-line-c {
        animation: lineCExpand 0.8s ease-out both;
      }
      .sec-title {
        font-size: 2.3rem;
        font-weight: 800;
        color: #1a1a1a;
        margin: 0;
      }
      .sec-sub {
        font-size: 0.9rem;
        color: #bf9874;
        line-height: 1.6;
        margin-bottom: 38px;
        max-width: 720px;
      }
      .sec-sub.center {
        text-align: center;
        margin: 0 auto 38px;
      }
      .anim-up {
        animation: upFade 0.7s cubic-bezier(0.23, 1, 0.32, 1) both;
        opacity: 0;
      }
      .a-d1 {
        animation-delay: 0.15s;
      }

      /* ━━━━━━━━━━━━━━ QUICK LINKS ━━━━━━━━━━━━━━ */
      .ql-section {
        background: #ececf1;
        padding: 28px 0;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      }
      .ql-row {
        display: flex;
        align-items: stretch;
        gap: 8px;
      }
      .ql-divider {
        width: 1px;
        background: linear-gradient(to bottom, transparent, rgba(191, 152, 116, 0.4), transparent);
        flex-shrink: 0;
      }
      .ql-card {
        flex: 1;
        border-radius: 14px;
        overflow: hidden;
        cursor: pointer;
        perspective: 600px;
      }
      .flip-card {
        transition: none;
      }
      .flip-inner {
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transition: transform 0.65s cubic-bezier(0.23, 1, 0.32, 1);
        position: relative;
        min-height: 110px;
      }
      .ql-card.flipped .flip-inner {
        transform: rotateY(180deg);
      }
      .flip-front,
      .flip-back {
        position: absolute;
        inset: 0;
        backface-visibility: hidden;
        display: flex;
        align-items: stretch;
        gap: 12px;
        padding: 12px;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.2));
        backdrop-filter: blur(12px);
        border-radius: 14px;
      }
      .flip-back {
        transform: rotateY(180deg);
        background: linear-gradient(135deg, #1a2942, #2c3e50);
      }
      .flip-back-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 12px;
        color: #fff;
        text-align: center;
        width: 100%;
      }
      .flip-back-icon {
        width: 40px;
        height: 40px;
        color: #bf9874;
      }
      .flip-back-icon svg {
        width: 100%;
        height: 100%;
      }
      .flip-back p {
        font-size: 0.78rem;
        line-height: 1.5;
        color: rgba(255, 255, 255, 0.8);
      }
      .flip-back-btn {
        padding: 8px 20px;
        background: #bf9874;
        color: #fff;
        border: none;
        border-radius: 99px;
        font-size: 0.78rem;
        font-weight: 700;
        cursor: pointer;
        transition: background 0.3s ease;
      }
      .flip-back-btn:hover {
        background: #d4a06a;
      }
      .ql-img {
        width: 64px;
        flex-shrink: 0;
        border-radius: 10px;
        overflow: hidden;
        position: relative;
      }
      .ql-img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .img-zoom img {
        transition: transform 0.5s ease;
      }
      .img-zoom:hover img {
        transform: scale(1.1);
      }
      .img-sheen {
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, transparent 50%);
        pointer-events: none;
      }
      .ql-info {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      .ql-info h3 {
        font-size: 0.72rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.7px;
        color: #1a1a1a;
        margin-bottom: 6px;
      }
      .ql-info p {
        font-size: 0.75rem;
        color: #4b5563;
        line-height: 1.5;
        flex: 1;
      }
      .ql-cta {
        font-size: 0.72rem;
        font-weight: 700;
        color: #1a2942;
        display: inline-flex;
        align-items: center;
        gap: 4px;
        margin-top: 6px;
        transition: gap 0.3s ease;
      }
      .ql-cta:hover {
        gap: 8px;
      }
      .ql-card:hover {
        box-shadow: 0 16px 40px rgba(9, 16, 40, 0.22);
      }

      /* ━━━━━━━━━━━━━━ OFFER ━━━━━━━━━━━━━━ */
      .offer-section {
        padding: 64px 0;
        background: #fff;
        border-bottom: 1px solid rgba(26, 41, 66, 0.08);
      }
      .offer-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 28px;
      }
      .o-card {
        background: #fff;
        padding: 28px 22px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
        border-radius: 4px;
        text-align: left;
      }
      .o-card-floor {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, #bf9874, #d4a06a);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
      }
      .tilt-card:hover .o-card-floor {
        transform: scaleX(1);
      }
      .o-icon-wrap {
        position: relative;
        width: 56px;
        height: 56px;
        margin-bottom: 18px;
      }
      .o-icon-sphere {
        width: 52px;
        height: 52px;
        border-radius: 14px;
        background: linear-gradient(135deg, rgba(30, 46, 69, 0.12), rgba(30, 46, 69, 0.04));
        color: #1e2e45;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s ease;
      }
      .o-icon-sphere svg {
        width: 34px;
        height: 34px;
        transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
      }
      .tilt-card:hover .o-icon-sphere {
        transform: rotateY(360deg);
        box-shadow: 0 8px 25px rgba(30, 46, 69, 0.2);
      }
      .o-icon-orbit {
        position: absolute;
        inset: -6px;
        border-radius: 50%;
        border: 1px dashed rgba(191, 152, 116, 0.4);
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      .orbit-dot {
        position: absolute;
        top: 50%;
        left: 0;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #bf9874;
        margin-top: -3px;
        margin-left: -3px;
        animation: orbitDot 2s linear infinite;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      .tilt-card:hover .o-icon-orbit {
        opacity: 1;
      }
      .tilt-card:hover .orbit-dot {
        opacity: 1;
      }
      .o-card h3 {
        font-size: 0.95rem;
        font-weight: 700;
        color: #1a1a1a;
        margin-bottom: 10px;
        line-height: 1.2;
      }
      .o-card p {
        font-size: 0.84rem;
        color: #666;
        line-height: 1.7;
      }
      .o-card-beam {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 2px;
        height: 0;
        background: linear-gradient(to top, #bf9874, transparent);
        opacity: 0;
        transition: height 0.5s ease, opacity 0.5s ease;
      }
      .tilt-card:hover .o-card-beam {
        height: 60%;
        opacity: 0.5;
        animation: beamRise 0.5s ease forwards;
      }

      /* ━━━━━━━━━━━━━━ EXPERTISE ━━━━━━━━━━━━━━ */
      .exp-section {
        position: relative;
        padding: 90px 0;
        overflow: hidden;
        background: transparent;
      }
      .exp-grid-bg {
        position: absolute;
        inset: 0;
        background-image: linear-gradient(rgba(191, 152, 116, 0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(191, 152, 116, 0.07) 1px, transparent 1px);
        background-size: 55px 55px;
        animation: gridMove 5s linear infinite;
        pointer-events: none;
      }
      .exp-glow-orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(80px);
        pointer-events: none;
      }
      .exp-orb1 {
        width: 500px;
        height: 500px;
        top: -150px;
        right: -150px;
        background: radial-gradient(circle, rgba(191, 152, 116, 0.18), transparent 70%);
        animation: auroraShift 9s ease-in-out infinite;
      }
      .exp-orb2 {
        width: 350px;
        height: 350px;
        bottom: -100px;
        left: -80px;
        background: radial-gradient(circle, rgba(44, 62, 80, 0.12), transparent 70%);
        animation: auroraShift 12s ease-in-out infinite reverse;
      }
      .exp-section .sec-title {
        text-align: center;
        letter-spacing: 3px;
        font-size: clamp(1.8rem, 2.2vw, 2.6rem);
      }
      .exp-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
      }
      .exp-card {
        --accent: #bf9874;
        position: relative;
        padding: 32px 28px;
        background: #fff;
        border-radius: 14px;
        border-top: 3px solid var(--accent);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        text-decoration: none;
        color: inherit;
        min-height: 220px;
        display: flex;
        flex-direction: column;
      }
      .exp-card-accent-bar {
        position: absolute;
        left: 0;
        top: 3px;
        bottom: 0;
        width: 3px;
        background: linear-gradient(to bottom, var(--accent), transparent);
        transform: scaleY(0);
        transform-origin: top;
        transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
        border-radius: 0 0 0 14px;
      }
      .exp-card:hover .exp-card-accent-bar {
        transform: scaleY(1);
      }
      .exp-card-depth {
        position: absolute;
        bottom: -4px;
        left: 4px;
        right: -4px;
        top: 4px;
        background: linear-gradient(135deg, var(--accent), transparent);
        border-radius: 14px;
        z-index: -1;
        opacity: 0;
        transition: opacity 0.4s ease, transform 0.4s ease;
      }
      .exp-card:hover .exp-card-depth {
        opacity: 0.12;
        transform: translate(2px, 2px);
      }
      .exp-icon-wrap {
        display: flex;
        align-items: center;
        gap: 14px;
        margin-bottom: 12px;
      }
      .exp-icon {
        width: 52px;
        height: 52px;
        border-radius: 12px;
        background: linear-gradient(135deg, rgba(191, 152, 116, 0.2), rgba(191, 152, 116, 0.04));
        color: var(--accent);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        flex-shrink: 0;
      }
      .float-icon {
        animation: iconIconBob 3.5s ease-in-out infinite;
      }
      .float-icon:nth-child(odd) {
        animation-delay: 0.5s;
      }
      .exp-icon svg {
        width: 30px;
        height: 30px;
      }
      .exp-icon-pulse {
        position: absolute;
        inset: -6px;
        border-radius: inherit;
        border: 2px solid var(--accent);
        opacity: 0;
      }
      .exp-card:hover .exp-icon-pulse {
        animation: pulseRing 0.7s ease-out forwards;
      }
      .exp-icon-wrap h3 {
        font-size: 1rem;
        font-weight: 800;
        color: #1a1a1a;
        line-height: 1.2;
      }
      .exp-desc {
        font-size: 0.86rem;
        color: #6a6a6a;
        line-height: 1.6;
        margin-bottom: 12px;
      }
      .exp-list {
        list-style: none;
        padding: 0;
        flex: 1;
      }
      .exp-list li {
        display: flex;
        align-items: baseline;
        gap: 8px;
        padding: 5px 0;
        color: #5b5b5b;
        font-size: 0.87rem;
        line-height: 1.5;
      }
      .exp-list li::before {
        content: '•';
        color: var(--accent);
        font-weight: 700;
        flex-shrink: 0;
      }
      .exp-cta {
        margin-top: auto;
        padding-top: 14px;
        font-size: 0.78rem;
        font-weight: 800;
        color: var(--accent);
        text-transform: uppercase;
        letter-spacing: 1px;
        display: flex;
        align-items: center;
        gap: 6px;
        transition: gap 0.3s ease;
      }
      .cta-arr {
        display: inline-block;
        transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
      }
      .exp-card:hover .exp-cta {
        gap: 10px;
      }
      .exp-card:hover .cta-arr {
        transform: translateX(5px);
      }
      .accent-civil {
        --accent: #bf9874;
      }
      .accent-family {
        --accent: #b8754d;
      }
      .accent-public {
        --accent: #4e6a8a;
      }
      .accent-labor {
        --accent: #a45858;
      }
      .accent-criminal {
        --accent: #7a4d66;
      }
      .accent-property {
        --accent: #7f6b4a;
      }

      /* ━━━━━━━━━━━━━━ CONTACT ━━━━━━━━━━━━━━ */
      .ct-section {
        background: #fff;
      }
      .ct-bar {
        display: flex;
        align-items: stretch;
      }
      .ct-item {
        flex: 1;
        padding: 32px 20px;
        display: flex;
        align-items: center;
        gap: 16px;
        animation: upFade 0.7s ease calc(var(--i, 0) * 0.1s) both;
        cursor: default;
        transition: background 0.3s ease;
      }
      .ct-item:hover {
        background: rgba(191, 152, 116, 0.05);
      }
      .ct-icon-box {
        width: 52px;
        height: 52px;
        flex-shrink: 0;
        border-radius: 14px;
        background: linear-gradient(135deg, rgba(191, 152, 116, 0.18), rgba(191, 152, 116, 0.05));
        display: flex;
        align-items: center;
        justify-content: center;
        color: #bf9874;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s ease;
      }
      .ct-item:hover .ct-icon-box {
        transform: translateY(-6px) rotateY(15deg) rotateX(10deg);
        box-shadow: 0 12px 28px rgba(191, 152, 116, 0.25);
      }
      .ct-icon-ring {
        position: absolute;
        inset: -5px;
        border-radius: inherit;
        border: 2px solid rgba(191, 152, 116, 0.3);
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      .ct-item:hover .ct-icon-ring {
        animation: pulseRing 0.8s ease-out forwards;
      }
      .ct-text h3 {
        font-size: 0.88rem;
        font-weight: 700;
        color: #1a1a1a;
        margin-bottom: 5px;
      }
      .ct-text p {
        font-size: 0.83rem;
        color: #4b5563;
        line-height: 1.5;
      }
      .ct-sep {
        width: 1px;
        background: linear-gradient(to bottom, transparent, rgba(191, 152, 116, 0.6), transparent);
      }

      /* ━━━━━━━━━━━━━━ PRESIDENT ━━━━━━━━━━━━━━ */
      .pres-section {
        padding: 90px 0;
        background: #ececf1;
        position: relative;
        overflow: hidden;
      }
      .pres-aurora {
        position: absolute;
        border-radius: 50%;
        filter: blur(90px);
        pointer-events: none;
      }
      .pres-a1 {
        width: 600px;
        height: 600px;
        top: -200px;
        right: -150px;
        background: radial-gradient(circle, rgba(191, 152, 116, 0.22), transparent 70%);
        animation: auroraShift 10s ease-in-out infinite;
      }
      .pres-a2 {
        width: 400px;
        height: 400px;
        bottom: -100px;
        left: -100px;
        background: radial-gradient(circle, rgba(44, 62, 80, 0.12), transparent 70%);
        animation: auroraShift 14s ease-in-out infinite reverse;
      }
      .pres-a3 {
        width: 250px;
        height: 250px;
        top: 40%;
        left: 40%;
        background: radial-gradient(circle, rgba(191, 152, 116, 0.08), transparent 70%);
        animation: auroraShift 7s ease-in-out infinite;
      }
      .pres-layout {
        display: grid;
        grid-template-columns: 420px 1fr;
        gap: 70px;
        align-items: center;
        position: relative;
        z-index: 1;
      }
      .pres-img-stage {
        position: relative;
        height: 520px;
        border-radius: 20px;
        overflow: hidden;
        animation: presImgIn 0.9s cubic-bezier(0.23, 1, 0.32, 1) 0.2s both;
        transform-style: preserve-3d;
      }
      .pres-img-frame {
        position: absolute;
        inset: 0;
      }
      .pres-img-frame img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s ease;
      }
      .tilt-card:hover .pres-img-frame img {
        transform: scale(1.05);
      }
      .pres-img-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, transparent 40%, rgba(0, 18, 45, 0.5) 100%);
        pointer-events: none;
      }
      .pres-img-grid {
        position: absolute;
        inset: 0;
        background-image: linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
        background-size: 30px 30px;
        opacity: 0;
        transition: opacity 0.4s ease;
        pointer-events: none;
      }
      .tilt-card:hover .pres-img-grid {
        opacity: 1;
      }
      .pres-img-shadow {
        position: absolute;
        bottom: -20px;
        left: 10%;
        right: 10%;
        height: 40px;
        background: radial-gradient(ellipse, rgba(0, 0, 0, 0.3), transparent 70%);
        filter: blur(10px);
        pointer-events: none;
        transition: transform 0.5s ease, opacity 0.5s ease;
      }
      .tilt-card:hover .pres-img-shadow {
        transform: translateY(8px) scaleX(0.9);
        opacity: 0.6;
      }
      .pres-badge {
        position: absolute;
        bottom: 20px;
        left: 20px;
        background: rgba(191, 152, 116, 0.9);
        backdrop-filter: blur(8px);
        color: #fff;
        font-size: 0.7rem;
        font-weight: 800;
        letter-spacing: 1px;
        text-transform: uppercase;
        padding: 6px 14px;
        border-radius: 99px;
        display: flex;
        align-items: center;
        gap: 5px;
        animation: badgeBob 3s ease-in-out infinite;
      }
      .pres-content {
        animation: presContentIn 0.9s cubic-bezier(0.23, 1, 0.32, 1) 0.4s both;
      }
      .pres-title {
        font-size: 2rem;
        font-weight: 900;
        color: #2c3e50;
        margin-bottom: 24px;
        text-transform: uppercase;
        line-height: 1.2;
        letter-spacing: 1px;
        position: relative;
        padding-bottom: 14px;
      }
      .pres-title::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 70px;
        height: 3px;
        background: linear-gradient(90deg, #bf9874, transparent);
      }
      .pres-para {
        font-size: 0.93rem;
        line-height: 1.8;
        color: #4b5563;
        margin-bottom: 14px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .pres-btn {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 14px 36px;
        background: transparent;
        color: #bf9874;
        border: 1.5px solid #bf9874;
        font-size: 0.88rem;
        font-weight: 800;
        cursor: pointer;
        margin-top: 18px;
        text-transform: capitalize;
        border-radius: 999px;
        align-self: flex-start;
        position: relative;
        overflow: hidden;
        transition: color 0.3s ease, background 0.3s ease, transform 0.25s ease;
      }
      .pres-btn:hover {
        background: #bf9874;
        color: #fff;
      }
      .pres-btn-aura {
        position: absolute;
        inset: -2px;
        border-radius: inherit;
        background: radial-gradient(circle, rgba(191, 152, 116, 0.4), transparent 70%);
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
      }
      .pres-btn:hover .pres-btn-aura {
        opacity: 1;
      }
      .pres-dots {
        display: flex;
        gap: 12px;
        margin-top: 24px;
      }
      .pres-dot {
        position: relative;
        width: 13px;
        height: 13px;
        background: #d0d0d0;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        padding: 0;
        transition: all 0.3s ease;
        overflow: visible;
      }
      .pres-dot:hover {
        transform: scale(1.3);
      }
      .pres-dot.on {
        background: #bf9874;
        transform: scale(1.2);
      }
      .pdot-inner {
        position: absolute;
        inset: 3px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      .pres-dot.on .pdot-inner {
        opacity: 1;
      }
      .pdot-wave {
        position: absolute;
        inset: -5px;
        border: 2px solid #bf9874;
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
      }
      .pres-dot.on .pdot-wave {
        animation: dotWave 1.2s ease-out infinite;
      }

      /* ━━━━━━━━━━━━━━ NEWSLETTER ━━━━━━━━━━━━━━ */
      .nl-section {
        padding: 80px 0;
        background: #fff;
        position: relative;
        overflow: hidden;
      }
      .nl-scanlines {
        position: absolute;
        inset: 0;
        pointer-events: none;
        background: repeating-linear-gradient(
          0deg,
          rgba(191, 152, 116, 0.03) 0,
          rgba(191, 152, 116, 0.03) 1px,
          transparent 1px,
          transparent 40px
        );
        animation: scanline 3s linear infinite;
      }
      .nl-section .container {
        position: relative;
        z-index: 1;
      }
      .nl-head {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 36px;
        margin-bottom: 0;
      }
      .nl-head h2 {
        font-size: 2.3rem;
        font-weight: 900;
        color: #1a1a1a;
        margin: 0;
        letter-spacing: 4px;
        text-align: center;
        animation: upFade 0.7s ease both;
        animation: neonFlicker 4s ease-in-out 1s infinite;
      }
      .nl-line {
        flex: 1;
        max-width: 180px;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(191, 152, 116, 0.8), transparent);
      }
      .nl-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 24px;
        margin: 55px 0 44px;
      }
      .nl-card {
        background: transparent;
        border-radius: 18px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }
      .nl-img-wrap {
        position: relative;
        width: 100%;
        height: 195px;
        overflow: hidden;
      }
      .nl-img-wrap img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
      }
      .nl-card:hover .nl-img-wrap img {
        transform: scale(1.1);
      }
      .nl-img-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, transparent 50%, rgba(0, 18, 45, 0.55));
        opacity: 0;
        transition: opacity 0.35s ease;
        pointer-events: none;
      }
      .nl-card:hover .nl-img-overlay {
        opacity: 1;
      }
      .nl-img-badge {
        position: absolute;
        top: 12px;
        left: 12px;
        background: rgba(191, 152, 116, 0.9);
        color: #fff;
        font-size: 0.62rem;
        font-weight: 800;
        letter-spacing: 1px;
        text-transform: uppercase;
        padding: 4px 10px;
        border-radius: 99px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .nl-card:hover .nl-img-badge {
        transform: translateY(-3px);
        box-shadow: 0 6px 18px rgba(191, 152, 116, 0.5);
      }
      .nl-img-scan {
        position: absolute;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, rgba(191, 152, 116, 0.6), transparent);
        top: 0;
        opacity: 0;
        pointer-events: none;
      }
      .nl-card:hover .nl-img-scan {
        opacity: 1;
        animation: imgScanMove 1.5s linear infinite;
      }
      .nl-body {
        padding: 20px 16px 22px;
        flex: 1;
        display: flex;
        flex-direction: column;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.75));
        border-top: 1px solid rgba(255, 255, 255, 0.4);
      }
      .nl-body h3 {
        font-size: 0.93rem;
        font-weight: 700;
        line-height: 1.5;
        color: #1f2937;
        margin: 0 0 12px;
      }
      .nl-link {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        color: #bf9874;
        font-size: 0.8rem;
        font-weight: 800;
        text-decoration: none;
        text-transform: capitalize;
        margin-top: auto;
        padding-top: 8px;
        align-self: flex-start;
        position: relative;
        overflow: hidden;
      }
      .nl-arr {
        display: inline-flex;
        transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
      }
      .nl-link:hover .nl-arr {
        transform: translateX(6px) scale(1.2);
      }
      .nl-underline {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1.5px;
        width: 0;
        background: linear-gradient(90deg, #bf9874, #d4a06a);
        transition: width 0.35s ease;
        border-radius: 99px;
      }
      .nl-link:hover .nl-underline {
        width: 100%;
      }
      .nl-card-glow {
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background: radial-gradient(circle at 50% 100%, rgba(191, 152, 116, 0.1), transparent 70%);
        opacity: 0;
        transition: opacity 0.4s ease;
        pointer-events: none;
      }
      .nl-card:hover .nl-card-glow {
        opacity: 1;
      }
      .nl-action {
        text-align: center;
      }
      .nl-btn {
        padding: 15px 48px;
        background: transparent;
        color: #bf9874;
        border: 1.5px solid #bf9874;
        font-size: 0.92rem;
        font-weight: 800;
        cursor: pointer;
        text-transform: capitalize;
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
      }
      .nl-btn:hover {
        background: #bf9874;
        color: #fff;
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(191, 152, 116, 0.35);
      }
      .nl-btn::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
          105deg,
          transparent 40%,
          rgba(255, 255, 255, 0.2) 50%,
          transparent 60%
        );
        transform: translateX(-120%) skewX(-20deg);
        pointer-events: none;
      }
      .nl-btn:hover::before {
        animation: shimmerSweep 0.6s ease forwards;
      }

      /* ━━━━━━━━━━━━━━ RESPONSIVE ━━━━━━━━━━━━━━ */
      @media (max-width: 1199px) {
        .container {
          padding: 0 28px;
        }
        .hero-h1 {
          font-size: 2.4rem;
        }
        .sec-title {
          font-size: 2rem;
        }
        .kf-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        .offer-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        .exp-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        .nl-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        .pres-layout {
          grid-template-columns: 360px 1fr;
          gap: 50px;
        }
      }
      @media (max-width: 1023px) {
        .hero {
          height: 500px;
        }
        .hero-h1 {
          font-size: 2rem;
        }
        .ql-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .ql-divider {
          display: none;
        }
        .flip-inner {
          min-height: 120px;
        }
        .offer-section,
        .exp-section,
        .pres-section,
        .nl-section {
          padding: 56px 0;
        }
        .sec-title {
          font-size: 1.8rem;
        }
        .kf-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        .ct-bar {
          flex-direction: column;
        }
        .ct-sep {
          width: 100%;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(191, 152, 116, 0.5), transparent);
        }
        .ct-item {
          padding: 22px 20px;
        }
        .pres-layout {
          grid-template-columns: 1fr;
          gap: 40px;
        }
        .pres-img-stage {
          max-width: 400px;
          margin: 0 auto;
          height: 400px;
        }
      }
      @media (max-width: 767px) {
        .container {
          padding: 0 20px;
        }
        .hero {
          height: 460px;
        }
        .hero-h1 {
          font-size: 1.7rem;
        }
        .hero-tag {
          font-size: 0.65rem;
        }
        .hbtn {
          padding: 14px 30px;
          font-size: 0.85rem;
        }
        .hero-btns {
          gap: 10px;
        }
        .hero-nav {
          bottom: 20px;
        }
        .hero-controls {
          gap: 16px;
        }
        .h-arr {
          width: 40px;
          height: 40px;
        }
        .h-arr svg {
          width: 22px;
          height: 22px;
        }
        .h-dot {
          width: 38px;
        }
        .kf-grid {
          grid-template-columns: 1fr;
        }
        .ql-row {
          grid-template-columns: 1fr;
          gap: 12px;
        }
        .offer-grid {
          grid-template-columns: 1fr;
          gap: 20px;
        }
        .offer-section,
        .exp-section,
        .pres-section,
        .nl-section {
          padding: 46px 0;
        }
        .sec-title {
          font-size: 1.5rem;
        }
        .exp-section .sec-title {
          letter-spacing: 1.5px;
        }
        .exp-grid {
          grid-template-columns: 1fr;
          gap: 14px;
        }
        .nl-head {
          gap: 16px;
        }
        .nl-head h2 {
          font-size: 1.6rem;
          letter-spacing: 2px;
        }
        .nl-line {
          display: none;
        }
        .nl-grid {
          grid-template-columns: 1fr;
          gap: 20px;
          margin: 40px 0 36px;
        }
        .pres-title {
          font-size: 1.7rem;
        }
        .pres-layout {
          gap: 32px;
        }
        .cur-dot,
        .cur-ring,
        .cur-trail {
          display: none;
        }
      }
      @media (max-width: 575px) {
        .container {
          padding: 0 15px;
        }
        .hero {
          height: 410px;
        }
        .hero-h1 {
          font-size: 1.4rem;
        }
        .hbtn {
          padding: 12px 24px;
          font-size: 0.8rem;
        }
        .h-dot {
          width: 32px;
          height: 4px;
        }
        .offer-section,
        .exp-section,
        .pres-section,
        .nl-section {
          padding: 36px 0;
        }
        .sec-title {
          font-size: 1.3rem;
        }
        .nl-head h2 {
          font-size: 1.4rem;
        }
      }
      @media (max-width: 374px) {
        .hero {
          height: 360px;
        }
        .hero-h1 {
          font-size: 1.2rem;
        }
        .sec-title {
          font-size: 1.2rem;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `,
  ],
})
export class HomeComponent implements OnInit, AfterViewInit {
  private heroIntervalId?: number;
  private presIntervalId?: number;
  private resizeObserver?: ResizeObserver;
  private charts: Highcharts.Chart[] = [];
  private rafId?: number;
  private curRx = 0;
  private curRy = 0;
  private trailRx = 0;
  private trailRy = 0;
  private readonly onVisibility = () => {
    if (!document.hidden) this.charts.forEach((c) => c.reflow());
  };

  private readonly i18n = inject(I18nService);
  private readonly destroyRef = inject(DestroyRef);

  @ViewChild('caseVolumeChart', { static: true }) chartA!: ElementRef<HTMLDivElement>;
  @ViewChild('processingTimeChart', { static: true }) chartB!: ElementRef<HTMLDivElement>;
  @ViewChild('decisionsTypeChart', { static: true }) chartC!: ElementRef<HTMLDivElement>;
  @ViewChild('heroCanvas') heroCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('curDot') curDot!: ElementRef<HTMLDivElement>;
  @ViewChild('curRing') curRing!: ElementRef<HTMLDivElement>;
  @ViewChild('curTrail') curTrail!: ElementRef<HTMLDivElement>;

  currentSlide = signal(0);
  currentPresSlide = signal(0);
  isPageLoaded = signal(false);

  ql = [
    {
      key: 'news',
      img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=120&h=120&fit=crop',
      title: 'home.quickLinks.items.news.title',
      body: 'home.quickLinks.items.news.body',
      action: 'home.quickLinks.items.news.action',
    },
    {
      key: 'excerpts',
      img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=120&h=120&fit=crop',
      title: 'home.quickLinks.items.excerpts.title',
      body: 'home.quickLinks.items.excerpts.body',
      action: 'home.quickLinks.items.excerpts.action',
    },
    {
      key: 'report',
      img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=120&h=120&fit=crop',
      title: 'home.quickLinks.items.report.title',
      body: 'home.quickLinks.items.report.body',
      action: 'home.quickLinks.items.report.action',
    },
    {
      key: 'appt',
      img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=120&h=120&fit=crop',
      title: 'home.quickLinks.items.appointment.title',
      body: 'home.quickLinks.items.appointment.body',
      action: 'home.quickLinks.items.appointment.action',
    },
  ];

  nlItems = [
    {
      key: '1',
      img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop',
      alt: 'home.newsletter.items.1.alt',
      date: 'home.newsletter.items.1.date',
      title: 'home.newsletter.items.1.title',
    },
    {
      key: '2',
      img: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&h=600&fit=crop',
      alt: 'home.newsletter.items.2.alt',
      date: 'home.newsletter.items.2.date',
      title: 'home.newsletter.items.2.title',
    },
    {
      key: '3',
      img: 'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=800&h=600&fit=crop',
      alt: 'home.newsletter.items.3.alt',
      date: 'home.newsletter.items.3.date',
      title: 'home.newsletter.items.3.title',
    },
    {
      key: '4',
      img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=600&fit=crop',
      alt: 'home.newsletter.items.4.alt',
      date: 'home.newsletter.items.4.date',
      title: 'home.newsletter.items.4.title',
    },
  ];

  heroSlides: HeroSlide[] = [
    {
      id: 1,
      titleKey: 'home.hero.slides.1.title',
      subtitleKey: 'home.hero.slides.1.subtitle',
      descriptionKey: 'home.hero.slides.1.body',
      buttonKey: 'home.hero.slides.1.cta',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop',
    },
    {
      id: 2,
      titleKey: 'home.hero.slides.2.title',
      subtitleKey: 'home.hero.slides.2.subtitle',
      descriptionKey: 'home.hero.slides.2.body',
      buttonKey: 'home.hero.slides.2.cta',
      image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1920&h=1080&fit=crop',
    },
    {
      id: 3,
      titleKey: 'home.hero.slides.3.title',
      subtitleKey: 'home.hero.slides.3.subtitle',
      descriptionKey: 'home.hero.slides.3.body',
      buttonKey: 'home.hero.slides.3.cta',
      image: 'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=1920&h=1080&fit=crop',
    },
  ];

  presSlides: PresidentSlide[] = [
    {
      id: 1,
      titleKey: 'home.president.slides.1.title',
      image:
        'https://scontent.fpry2-1.fna.fbcdn.net/v/t39.30808-6/481977439_661094752968468_3580912692254417664_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=781MphyOZxYQ7kNvwFA72Pl&_nc_oc=AdlS3efGmR2NwVl7AluKnrYklBBqsJYuTlJ2j9PkHSisG9RQ-4n7jDHjPIDmj6En6_w&_nc_zt=23&_nc_ht=scontent.fpry2-1.fna&_nc_gid=ECXY9r39JHQUTs-eZefdrQ&oh=00_AfsTzaj3KdpgLrEjgftG5I3y5wMeOJriKEBVHzCL_mVnRA&oe=69939BC0',
      paragraphKeys: [
        'home.president.slides.1.paragraphs.1',
        'home.president.slides.1.paragraphs.2',
        'home.president.slides.1.paragraphs.3',
      ],
    },
    {
      id: 2,
      titleKey: 'home.president.slides.2.title',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop',
      paragraphKeys: [
        'home.president.slides.2.paragraphs.1',
        'home.president.slides.2.paragraphs.2',
        'home.president.slides.2.paragraphs.3',
      ],
    },
    {
      id: 3,
      titleKey: 'home.president.slides.3.title',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=1000&fit=crop',
      paragraphKeys: [
        'home.president.slides.3.paragraphs.1',
        'home.president.slides.3.paragraphs.2',
        'home.president.slides.3.paragraphs.3',
      ],
    },
  ];

  ngOnInit() {
    setTimeout(() => this.isPageLoaded.set(true), 1800);
    this.heroIntervalId = window.setInterval(() => this.nextSlide(), 7000);
    this.presIntervalId = window.setInterval(() => this.nextPresSlide(), 8000);
    this.destroyRef.onDestroy(() => {
      if (this.heroIntervalId) window.clearInterval(this.heroIntervalId);
      if (this.presIntervalId) window.clearInterval(this.presIntervalId);
      if (this.rafId) cancelAnimationFrame(this.rafId);
    });
  }

  ngAfterViewInit() {
    this.renderCharts();
    this.setupObservers();
    this.initCursor();
    this.initHeroCanvas();
    this.destroyRef.onDestroy(() => {
      this.charts.forEach((c) => c.destroy());
      this.charts = [];
      document.removeEventListener('visibilitychange', this.onVisibility);
      this.resizeObserver?.disconnect();
    });
  }

  private initCursor() {
    const dot = this.curDot?.nativeElement;
    const ring = this.curRing?.nativeElement;
    const trail = this.curTrail?.nativeElement;
    if (!dot || !ring || !trail) return;
    let mx = 0,
      my = 0;
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
    document.querySelectorAll('button,a').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        ring.style.width = '56px';
        ring.style.height = '56px';
        ring.style.borderColor = 'rgba(191,152,116,.9)';
        trail.style.width = '90px';
        trail.style.height = '90px';
      });
      el.addEventListener('mouseleave', () => {
        ring.style.width = '38px';
        ring.style.height = '38px';
        ring.style.borderColor = 'rgba(191,152,116,.55)';
        trail.style.width = '80px';
        trail.style.height = '80px';
      });
    });
  }

  private initHeroCanvas() {
    const canvas = this.heroCanvas?.nativeElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let W = (canvas.width = canvas.offsetWidth);
    let H = (canvas.height = canvas.offsetHeight);
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      decay: number;
    }[] = [];
    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.5 - 0.1,
        size: Math.random() * 2.5 + 0.5,
        alpha: Math.random() * 0.6 + 0.2,
        decay: Math.random() * 0.003 + 0.001,
      });
    }
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        if (p.alpha <= 0) {
          p.alpha = Math.random() * 0.6 + 0.2;
          p.x = Math.random() * W;
          p.y = H + 10;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(191,152,116,${p.alpha})`;
        ctx.fill();
      });
      requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener('resize', () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    });
  }

  tilt(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
    const dy = (e.clientY - r.top - r.height / 2) / (r.height / 2);
    const tx = -dy * 14;
    const ty = dx * 14;
    el.style.transform = `perspective(900px) rotateX(${tx}deg) rotateY(${ty}deg) translateZ(14px)`;
    el.style.boxShadow = `${-ty * 1.5}px ${
      tx * 1.5
    }px 50px rgba(0,0,0,.18), 0 25px 60px rgba(191,152,116,.12)`;
    const shine = el.querySelector<HTMLElement>('.tilt-shine');
    if (shine) {
      shine.style.transform = `translateX(${dx * 60}%) translateY(${dy * 40}%) skewX(-20deg)`;
      shine.style.opacity = '.7';
    }
  }

  tiltReset(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    el.style.transform = '';
    el.style.boxShadow = '';
    const shine = el.querySelector<HTMLElement>('.tilt-shine');
    if (shine) {
      shine.style.transform = 'translateX(-120%) skewX(-20deg)';
      shine.style.opacity = '0';
    }
  }

  mag(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width / 2) * 0.4;
    const dy = (e.clientY - r.top - r.height / 2) * 0.4;
    el.style.transform = `translate(${dx}px,${dy}px)`;
  }

  magOut(e: MouseEvent) {
    (e.currentTarget as HTMLElement).style.transform = '';
  }

  ripple(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    const r = el.getBoundingClientRect();
    const rip = document.createElement('span');
    const size = Math.max(r.width, r.height) * 2;
    rip.style.cssText = `position:absolute;width:${size}px;height:${size}px;border-radius:50%;background:rgba(255,255,255,.35);transform:scale(0);left:${
      e.clientX - r.left - size / 2
    }px;top:${
      e.clientY - r.top - size / 2
    }px;animation:rippleAnim .6s ease-out forwards;pointer-events:none;z-index:10;`;
    const style = document.createElement('style');
    style.textContent = '@keyframes rippleAnim{to{transform:scale(1);opacity:0;}}';
    document.head.appendChild(style);
    el.style.position = 'relative';
    el.style.overflow = 'hidden';
    el.appendChild(rip);
    setTimeout(() => {
      rip.remove();
      style.remove();
    }, 700);
  }

  flipToggle(e: MouseEvent) {
    const card = e.currentTarget as HTMLElement;
    card.classList.toggle('flipped');
  }

  arrHover(e: MouseEvent, enter: boolean) {
    const el = e.currentTarget as HTMLElement;
    if (enter) {
      el.style.transform = 'translateZ(8px) scale(1.12)';
    } else {
      el.style.transform = '';
    }
  }

  ctPop(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    const box = el.querySelector<HTMLElement>('.ct-icon-box');
    if (box) box.style.transform = 'translateY(-7px) rotateY(18deg) rotateX(12deg)';
  }

  ctUnpop(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    const box = el.querySelector<HTMLElement>('.ct-icon-box');
    if (box) box.style.transform = '';
  }

  nextSlide() {
    this.currentSlide.update((c) => (c === this.heroSlides.length - 1 ? 0 : c + 1));
  }
  prevSlide() {
    this.currentSlide.update((c) => (c === 0 ? this.heroSlides.length - 1 : c - 1));
  }
  gotoSlide(i: number) {
    this.currentSlide.set(i);
  }

  nextPresSlide() {
    this.currentPresSlide.update((c) => (c === this.presSlides.length - 1 ? 0 : c + 1));
  }
  gotoPresSlide(i: number) {
    this.currentPresSlide.set(i);
  }

  private setupObservers() {
    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => this.charts.forEach((c) => c.reflow()));
      [this.chartA, this.chartB, this.chartC].forEach((r) =>
        this.resizeObserver?.observe(r.nativeElement)
      );
    }
    document.addEventListener('visibilitychange', this.onVisibility);
  }

  private renderCharts() {
    const s = { color: '#4b5563', fontSize: '12px', fontWeight: '600' };
    this.charts = [
      Highcharts.chart(this.chartA.nativeElement, {
        chart: {
          type: 'column',
          backgroundColor: 'transparent',
          height: 220,
          spacing: [10, 10, 0, 10],
        },
        title: { text: undefined },
        credits: { enabled: false },
        legend: { enabled: false },
        xAxis: {
          categories: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
          labels: { style: s },
          lineColor: 'rgba(26,41,66,.2)',
          tickColor: 'rgba(26,41,66,.2)',
        },
        yAxis: {
          title: { text: undefined },
          labels: { style: s },
          gridLineColor: 'rgba(26,41,66,.12)',
        },
        tooltip: { backgroundColor: '#1a2942', style: { color: '#fff' }, borderColor: '#1a2942' },
        series: [
          {
            type: 'column',
            name: 'Cases',
            data: [420, 460, 510, 470, 530, 590],
            color: '#BF9874',
            borderRadius: 4,
          },
        ],
      }),
      Highcharts.chart(this.chartB.nativeElement, {
        chart: {
          type: 'line',
          backgroundColor: 'transparent',
          height: 220,
          spacing: [10, 10, 0, 10],
        },
        title: { text: undefined },
        credits: { enabled: false },
        legend: { enabled: false },
        xAxis: {
          categories: ['Q1', 'Q2', 'Q3', 'Q4'],
          labels: { style: s },
          lineColor: 'rgba(26,41,66,.2)',
          tickColor: 'rgba(26,41,66,.2)',
        },
        yAxis: {
          title: { text: undefined },
          labels: { style: s },
          gridLineColor: 'rgba(26,41,66,.12)',
        },
        tooltip: {
          backgroundColor: '#1a2942',
          style: { color: '#fff' },
          borderColor: '#1a2942',
          valueSuffix: ' days',
        },
        series: [
          {
            type: 'line',
            name: 'Processing',
            data: [92, 84, 76, 68],
            color: '#b8754d',
            marker: { radius: 4 },
          },
        ],
      }),
      Highcharts.chart(this.chartC.nativeElement, {
        chart: {
          type: 'pie',
          backgroundColor: 'transparent',
          height: 220,
          spacing: [10, 10, 10, 10],
        },
        title: { text: undefined },
        credits: { enabled: false },
        legend: {
          align: 'center',
          verticalAlign: 'bottom',
          itemStyle: { color: '#1f2937', fontWeight: '600', fontSize: '12px' },
        },
        tooltip: {
          backgroundColor: '#1a2942',
          style: { color: '#fff' },
          borderColor: '#1a2942',
          pointFormat: '<b>{point.percentage:.0f}%</b>',
        },
        plotOptions: { pie: { innerSize: '55%', dataLabels: { enabled: false } } },
        responsive: {
          rules: [
            {
              condition: { maxWidth: 600 },
              chartOptions: {
                chart: { height: 240 },
                plotOptions: { pie: { center: ['50%', '45%'], size: '90%' } },
              },
            },
          ],
        },
        series: [
          {
            type: 'pie',
            name: 'Decisions',
            data: [
              { name: 'Civil', y: 38, color: '#BF9874' },
              { name: 'Public', y: 27, color: '#4e6a8a' },
              { name: 'Labor', y: 18, color: '#a45858' },
              { name: 'Other', y: 17, color: '#7f6b4a' },
            ],
          },
        ],
      }),
    ];
  }
}
