import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  OnInit,
  ViewChild,
  computed,
  inject,
  signal,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SkeletonLoaderComponent } from '../../components/skeleton-loader/skeleton-loader.component';
import { MemberService } from '../../services/members.service';
import type { Member, MemberRole, RoleFilter } from '../../services/members.service';
import { I18nPipe } from '../../i18n/i18n.pipe';
import { I18nService } from '../../i18n/i18n.service';
import type { Chart, Options, SeriesOptionsType } from 'highcharts';
import { FooterComponent } from '../../components/footer/footer.component';

type HighchartsStatic = typeof import('highcharts');

@Component({
  selector: 'app-organization',
  imports: [
    CommonModule,
    RouterLink,
    SkeletonLoaderComponent,
    NgOptimizedImage,
    I18nPipe,
    FooterComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page-wrap page-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <h1 class="hero-content-left" [innerHTML]="'organization.hero.title' | i18n"></h1>
        </div>
      </section>

      <!-- First President Section -->
      <section class="first-president-section">
        <div class="container">
          <div
            class="president-card-large tilt-card"
            style="--i:0"
            (mousemove)="tilt($event)"
            (mouseleave)="tiltReset($event)"
          >
            <div class="tilt-shine"></div>
            <div class="president-image-large img-zoom">
              <img
                ngSrc="https://res.cloudinary.com/dhqvb8wbn/image/upload/v1772020345/Brigitte_NSENSELE_wa_NSENSELE.jpg_2_vgiv72.jpg"
                [attr.alt]="'organization.firstPresident.alt' | i18n"
                width="400"
                height="500"
              />
              <div class="img-sheen"></div>
            </div>
            <div class="president-info-large">
              <h2 class="president-title-underlined">
                {{ 'organization.firstPresident.title' | i18n }}
              </h2>
              <p
                class="president-description"
                [innerHTML]="'organization.firstPresident.body' | i18n"
              ></p>
            </div>
          </div>
        </div>
      </section>

      <!-- Organization Chart Section -->
      <section class="org-chart-section" aria-labelledby="org-chart-title">
        <div class="container">
          <div class="org-chart-header">
            <div class="org-header-line anim-line"></div>
            <h2 id="org-chart-title" class="section-title anim-up">
              {{ 'organization.chart.title' | i18n }}
            </h2>
          </div>
          <p class="org-chart-subtitle anim-up a-d1">{{ 'organization.chart.subtitle' | i18n }}</p>

          <div class="org-chart" role="list">
            <div class="org-chart-tier" role="listitem">
              <div class="org-node primary">
                {{ 'organization.chart.nodes.firstPresident' | i18n }}
              </div>
            </div>

            <div class="org-chart-connector" aria-hidden="true"></div>

            <div class="org-chart-tier" role="listitem">
              <div class="org-node">
                {{ 'organization.chart.nodes.plenary' | i18n }}
              </div>
              <div class="org-node">
                {{ 'organization.chart.nodes.councilOffice' | i18n }}
              </div>
              <div class="org-node">
                {{ 'organization.chart.nodes.registry' | i18n }}
              </div>
            </div>

            <div class="org-chart-connector" aria-hidden="true"></div>

            <div class="org-chart-tier" role="listitem">
              <div class="org-node muted">
                {{ 'organization.chart.nodes.civilChamber' | i18n }}
              </div>
              <div class="org-node muted">
                {{ 'organization.chart.nodes.criminalChamber' | i18n }}
              </div>
              <div class="org-node muted">
                {{ 'organization.chart.nodes.commercialChamber' | i18n }}
              </div>
              <div class="org-node muted">
                {{ 'organization.chart.nodes.socialChamber' | i18n }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Organization Chart (Names) Section -->
      <section class="org-chart-section org-chart-names" aria-labelledby="org-chart-names-title">
        <div class="container">
          <div class="org-chart-header">
            <div class="org-header-line anim-line"></div>
            <h2 id="org-chart-names-title" class="section-title anim-up">
              {{ 'organization.chart.peopleTitle' | i18n }}
            </h2>
          </div>
          <p class="org-chart-subtitle anim-up a-d1">
            {{ 'organization.chart.peopleSubtitle' | i18n }}
          </p>

          <div class="org-chart" role="list">
            <div class="org-chart-tier" role="listitem">
              <div class="org-node primary">
                {{ 'organization.chart.peopleFirstPresidentName' | i18n }}
              </div>
            </div>

            <div class="org-chart-connector" aria-hidden="true"></div>

            <div class="org-chart-tier" role="listitem">
              @for (president of presidents; track president.slug) {
                <div class="org-node">
                  {{ president.name }}
                </div>
              }
            </div>

            <div class="org-chart-connector" aria-hidden="true"></div>

            <div class="org-chart-tier" role="listitem">
              @for (advisor of advisors; track advisor.slug) {
                <div class="org-node muted">
                  {{ advisor.name }}
                </div>
              }
            </div>
          </div>
        </div>
      </section>

      <!-- Senior Magistrates Label -->
      <section class="senior-label-section">
        <div class="container">
          <div class="senior-label">{{ 'organization.seniorLabel' | i18n }}</div>
        </div>
      </section>

      <!-- Members Filter Section -->
      <section class="members-filter-section">
        <div class="container">
          <div class="members-filter">
            <div class="filter-group">
              <label for="member-search">{{ 'organization.filters.searchLabel' | i18n }}</label>
              <input
                id="member-search"
                type="search"
                [placeholder]="'organization.filters.searchPlaceholder' | i18n"
                [value]="searchTerm()"
                (input)="onSearch($event)"
              />
            </div>
            <div class="filter-group">
              <label for="member-role">{{ 'organization.filters.roleLabel' | i18n }}</label>
              <select id="member-role" [value]="roleFilter()" (change)="onRoleFilterChange($event)">
                <option value="all">{{ 'organization.filters.all' | i18n }}</option>
                <option value="president">{{ 'organization.filters.presidents' | i18n }}</option>
                <option value="advisor">{{ 'organization.filters.advisors' | i18n }}</option>
              </select>
            </div>
            <div class="filter-summary" aria-live="polite">
              {{
                'organization.filters.summary'
                  | i18n
                    : {
                        presidents: filteredPresidents().length,
                        advisors: filteredAdvisors().length,
                      }
              }}
            </div>
          </div>
        </div>
      </section>

      <!-- The Presidents Section -->
      <section class="members-section presidents-section">
        <div class="container">
          <div class="section-head-wrap">
            <div class="org-header-line anim-line"></div>
            <h2 class="section-title anim-up">{{ 'organization.presidents.title' | i18n }}</h2>
          </div>
          <div class="members-grid">
            @if (isLoading()) {
              @for (item of [1, 2, 3, 4, 5, 6, 7, 8]; track item) {
                <app-skeleton-loader type="profile-card"></app-skeleton-loader>
              }
            } @else {
              @if (filteredPresidents().length === 0) {
                <div class="no-results">{{ 'organization.presidents.empty' | i18n }}</div>
              } @else {
                @for (president of filteredPresidents(); track president.email; let i = $index) {
                  <div
                    class="member-card glass-card tilt-card"
                    [style.--i]="i"
                    (mousemove)="tilt($event)"
                    (mouseleave)="tiltReset($event)"
                  >
                    <div class="tilt-shine"></div>
                    <div class="member-image img-zoom">
                      <img
                        [ngSrc]="president.image"
                        [alt]="president.name"
                        width="300"
                        height="350"
                      />
                      <div class="img-sheen"></div>
                    </div>
                    <div class="member-info">
                      <h3>{{ president.name }}</h3>
                      <p class="member-title">{{ president.title }}</p>
                      <p class="member-email">{{ president.email }}</p>
                      <a
                        [routerLink]="['/organization/member', president.slug]"
                        class="learn-more mag-btn"
                        (mousemove)="mag($event)"
                        (mouseleave)="magOut($event)"
                        (click)="ripple($event)"
                      >
                        {{ 'organization.members.learnMore' | i18n }}
                      </a>
                    </div>
                  </div>
                }
              }
            }
          </div>
        </div>
      </section>

      <!-- The Advisors Section -->
      <section class="members-section advisors-section">
        <div class="container">
          <div class="section-head-wrap">
            <div class="org-header-line anim-line"></div>
            <h2 class="section-title anim-up">{{ 'organization.advisors.title' | i18n }}</h2>
          </div>
          <div class="members-grid">
            @if (isLoading()) {
              @for (item of [1, 2, 3, 4, 5, 6, 7, 8]; track item) {
                <app-skeleton-loader type="profile-card"></app-skeleton-loader>
              }
            } @else {
              @if (filteredAdvisors().length === 0) {
                <div class="no-results">{{ 'organization.advisors.empty' | i18n }}</div>
              } @else {
                @for (advisor of filteredAdvisors(); track advisor.email; let i = $index) {
                  <div
                    class="member-card glass-card tilt-card"
                    [style.--i]="i"
                    (mousemove)="tilt($event)"
                    (mouseleave)="tiltReset($event)"
                  >
                    <div class="tilt-shine"></div>
                    <div class="member-image img-zoom">
                      <img [ngSrc]="advisor.image" [alt]="advisor.name" width="300" height="350" />
                      <div class="img-sheen"></div>
                    </div>
                    <div class="member-info">
                      <h3>{{ advisor.name }}</h3>
                      <p class="member-title">{{ advisor.title }}</p>
                      <p class="member-email">{{ advisor.email }}</p>
                      <a
                        [routerLink]="['/organization/member', advisor.slug]"
                        class="learn-more mag-btn"
                        (mousemove)="mag($event)"
                        (mouseleave)="magOut($event)"
                        (click)="ripple($event)"
                      >
                        {{ 'organization.members.learnMore' | i18n }}
                      </a>
                    </div>
                  </div>
                }
              }
            }
          </div>
          <div class="load-more-container">
            <button
              class="load-more-btn mag-btn"
              (mousemove)="mag($event)"
              (mouseleave)="magOut($event)"
              (click)="ripple($event)"
            >
              <span>{{ 'organization.members.loadMore' | i18n }}</span>
            </button>
          </div>
        </div>
      </section>

      <!-- Services Info Section -->
      <section class="services-info-section">
        <div class="container">
          <h2 class="section-title-white anim-up">
            {{ 'organization.services.overviewTitle' | i18n }}
          </h2>
          <div class="services-grid">
            <div
              class="service-box reveal-on-scroll tilt-card"
              style="--i:0"
              (mousemove)="tilt($event)"
              (mouseleave)="tiltReset($event)"
            >
              <div class="tilt-shine"></div>
              <h3>{{ 'organization.services.registry.title' | i18n }}</h3>
              <p>{{ 'organization.services.registry.body' | i18n }}</p>
              <a
                href="#"
                class="service-link mag-btn"
                (mousemove)="mag($event)"
                (mouseleave)="magOut($event)"
                (click)="ripple($event)"
                >{{ 'organization.services.learnMore' | i18n }}</a
              >
            </div>
            <div
              class="service-box reveal-on-scroll tilt-card"
              style="--i:1"
              (mousemove)="tilt($event)"
              (mouseleave)="tiltReset($event)"
            >
              <div class="tilt-shine"></div>
              <h3>{{ 'organization.services.docs.title' | i18n }}</h3>
              <p>{{ 'organization.services.docs.body' | i18n }}</p>
              <a
                href="#"
                class="service-link mag-btn"
                (mousemove)="mag($event)"
                (mouseleave)="magOut($event)"
                (click)="ripple($event)"
                >{{ 'organization.services.learnMore' | i18n }}</a
              >
            </div>
            <div
              class="service-box reveal-on-scroll tilt-card"
              style="--i:2"
              (mousemove)="tilt($event)"
              (mouseleave)="tiltReset($event)"
            >
              <div class="tilt-shine"></div>
              <h3>{{ 'organization.services.tv.title' | i18n }}</h3>
              <p>{{ 'organization.services.tv.body' | i18n }}</p>
              <a
                href="#"
                class="service-link mag-btn"
                (mousemove)="mag($event)"
                (mouseleave)="magOut($event)"
                (click)="ripple($event)"
                >{{ 'organization.services.learnMore' | i18n }}</a
              >
            </div>
          </div>
        </div>
      </section>

      <!-- Services Detail Section -->
      <section class="services-section">
        <div class="container">
          <h2 class="section-heading">{{ 'organization.services.title' | i18n }}</h2>
          <p class="section-subheading">{{ 'organization.services.subtitle' | i18n }}</p>

          <div class="services-content">
            <!-- Left Column - Service Links -->
            <div class="service-links">
              <div
                class="service-item reveal-on-scroll"
                [class.active]="selectedService() === 'divisions'"
                (click)="selectService('divisions')"
              >
                <span class="service-icon">📋</span>
                <div class="service-text">
                  <h4>{{ 'organization.services.divisions.title' | i18n }}</h4>
                  <ol>
                    <li>{{ 'organization.services.divisions.rooms' | i18n }}</li>
                    <li>{{ 'organization.services.divisions.council' | i18n }}</li>
                    <li>{{ 'organization.services.divisions.registers' | i18n }}</li>
                  </ol>
                </div>
              </div>

              <div
                class="service-item reveal-on-scroll"
                [class.active]="selectedService() === 'rooms'"
                (click)="selectService('rooms')"
              >
                <span class="service-icon">🏛️</span>
                <div class="service-text">
                  <h4>{{ 'organization.services.rooms.title' | i18n }}</h4>
                  <p>{{ 'organization.services.rooms.body' | i18n }}</p>
                </div>
              </div>

              <div
                class="service-item reveal-on-scroll"
                [class.active]="selectedService() === 'council'"
                (click)="selectService('council')"
              >
                <span class="service-icon">⚖️</span>
                <div class="service-text">
                  <h4>{{ 'organization.services.council.title' | i18n }}</h4>
                  <p>{{ 'organization.services.council.body' | i18n }}</p>
                </div>
              </div>

              <div
                class="service-item reveal-on-scroll"
                [class.active]="selectedService() === 'registers'"
                (click)="selectService('registers')"
              >
                <span class="service-icon">📚</span>
                <div class="service-text">
                  <h4>{{ 'organization.services.registers.title' | i18n }}</h4>
                  <p>{{ 'organization.services.registers.body' | i18n }}</p>
                </div>
              </div>
            </div>

            <!-- Right Column - Detailed Text -->
            <div class="service-details">
              @if (selectedService() === 'divisions') {
                <div class="detail-box active reveal-on-scroll">
                  <span class="detail-icon">📋</span>
                  <div class="detail-content">
                    <h4>{{ 'organization.services.details.chambers.title' | i18n }}</h4>
                    <ol>
                      <li>{{ 'organization.services.details.chambers.item1' | i18n }}</li>
                      <li>{{ 'organization.services.details.chambers.item2' | i18n }}</li>
                      <li>{{ 'organization.services.details.chambers.item3' | i18n }}</li>
                      <li>{{ 'organization.services.details.chambers.item4' | i18n }}</li>
                    </ol>
                    <p>{{ 'organization.services.details.chambers.body1' | i18n }}</p>
                    <p>{{ 'organization.services.details.chambers.body2' | i18n }}</p>
                  </div>
                </div>
              }

              @if (selectedService() === 'rooms') {
                <div class="detail-box active reveal-on-scroll">
                  <span class="detail-icon">🏛️</span>
                  <div class="detail-content">
                    <h4>{{ 'organization.services.details.rooms.title' | i18n }}</h4>
                    <p>{{ 'organization.services.details.rooms.body1' | i18n }}</p>
                    <p>{{ 'organization.services.details.rooms.body2' | i18n }}</p>
                    <p>{{ 'organization.services.details.rooms.body3' | i18n }}</p>
                    <p>{{ 'organization.services.details.rooms.body4' | i18n }}</p>
                  </div>
                </div>
              }

              @if (selectedService() === 'council') {
                <div class="detail-box active reveal-on-scroll">
                  <span class="detail-icon">⚖️</span>
                  <div class="detail-content">
                    <h4>{{ 'organization.services.details.council.title' | i18n }}</h4>
                    <p>{{ 'organization.services.details.council.body1' | i18n }}</p>
                    <p>{{ 'organization.services.details.council.body2' | i18n }}</p>
                    <p>{{ 'organization.services.details.council.body3' | i18n }}</p>
                    <p>{{ 'organization.services.details.council.body4' | i18n }}</p>
                  </div>
                </div>
              }

              @if (selectedService() === 'registers') {
                <div class="detail-box active reveal-on-scroll">
                  <span class="detail-icon">📚</span>
                  <div class="detail-content">
                    <h4>{{ 'organization.services.details.registers.title' | i18n }}</h4>
                    <p>{{ 'organization.services.details.registers.body1' | i18n }}</p>
                    <p>{{ 'organization.services.details.registers.body2' | i18n }}</p>
                    <p>{{ 'organization.services.details.registers.body3' | i18n }}</p>
                    <p>{{ 'organization.services.details.registers.body4' | i18n }}</p>
                    <p>{{ 'organization.services.details.registers.body5' | i18n }}</p>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </section>
      <app-footer></app-footer>
    </div>
  `,
  styles: [
    `
      .page-container {
        min-height: 100vh;
        background: #0a1929;
        overflow-x: hidden;
      }
      .hero-content-left {
        font-size: 3.5rem;
        font-weight: 700 !important;
        line-height: 1.2;
        margin: 0;
        letter-spacing: 2px;
        color: #ffffff !important;
        text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
        max-width: 100%;
        word-wrap: break-word;
      }
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }

      /* Hero Section */
      .hero-section {
        position: relative;
        min-height: 400px;
        background:
          linear-gradient(135deg, rgba(10, 25, 41, 0.95) 0%, rgba(26, 41, 66, 0.9) 100%),
          url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=600&fit=crop&q=80')
            center/cover;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 80px 20px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
      }
      .hero-section .container {
        width: 100%;
      }

      .hero-title {
        font-size: 3.5rem;
        font-weight: 300;
        color: white;
        text-align: center;
        line-height: 1.3;
        letter-spacing: 3px;
        margin: 0;
        text-transform: uppercase;
        text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.4);
      }

      /* First President Section */
      .first-president-section {
        background: #ffffff;
        padding: 0;
        border: none !important;
        box-shadow: none !important;
        outline: none !important;
      }

      .first-president-section .container {
        border: none !important;
        box-shadow: none !important;
        outline: none !important;
      }

      .president-card-large {
        display: grid;
        grid-template-columns: 350px 1fr;
        gap: 0;
        align-items: stretch;
        background: #ffffff;
        overflow: hidden;
        border: none !important;
        box-shadow: none !important;
        outline: none !important;
        border-radius: 0 !important;
      }

      .president-image-large,
      .president-info-large {
        border: none !important;
        box-shadow: none !important;
        outline: none !important;
        border-radius: 0 !important;
      }

      .president-image-large {
        width: 100%;
        height: 100%;
        min-height: 450px;
        overflow: hidden;
        position: relative;
      }

      .president-image-large::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.1) 100%);
        pointer-events: none;
      }

      .president-image-large img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin-top: 0;
        transition: transform 0.6s ease;
        border: none !important;
        box-shadow: none !important;
        outline: none !important;
        border-radius: 0 !important;
      }

      .president-card-large:hover .president-image-large img {
        transform: scale(1.05);
      }

      .president-info-large {
        padding: 60px 70px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 450px;
        background: #ffffff;
      }

      .president-title-underlined {
        font-size: 2.8rem;
        font-weight: 400;
        color: #1a1a1a;
        margin: 0 0 30px 0;
        letter-spacing: 1.5px;
        padding-bottom: 20px;
        border-bottom: 3px solid #1f9bd9;
        display: inline-block;
        position: relative;
        max-width: 100%;
        word-wrap: break-word;
      }

      .president-title-underlined::after {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 60%;
        height: 3px;
        background: linear-gradient(to right, #1f9bd9, transparent);
      }

      .president-description {
        font-size: 1rem;
        line-height: 1.9;
        color: #4b5563;
        margin: 0;
        text-align: left;
      }

      .president-description strong {
        color: #1a1a1a;
        font-weight: 600;
      }

      /* Senior Label Section */
      .senior-label-section {
        background: #f5f7fa;
        padding: 50px 0 0 0;
        border-top: 1px solid rgba(31, 155, 217, 0.2);
      }

      .senior-label {
        font-size: 0.8rem;
        font-weight: 700;
        color: #1f9bd9;
        letter-spacing: 3px;
        text-transform: uppercase;
        margin-bottom: 0;
        padding-bottom: 20px;
      }

      /* Members Section (Presidents & Advisors) */
      .members-section {
        background: #f5f7fa;
        padding: 30px 0 70px 0;
      }

      .members-filter-section {
        background: #f5f7fa;
        padding: 0 0 30px 0;
        border-bottom: 2px solid rgba(31, 155, 217, 0.15);
      }

      .members-filter {
        display: grid;
        grid-template-columns: 1.2fr 0.8fr 1fr;
        gap: 25px;
        align-items: end;
        background: white;
        padding: 30px;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      }

      .filter-group {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .filter-group label {
        font-size: 0.8rem;
        font-weight: 700;
        color: #374151;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      /* Organization Chart */
      .org-chart-section {
        padding: 70px 0 60px;
        background: linear-gradient(180deg, #f8f9fb 0%, #eef3f8 100%);
        border-bottom: 1px solid rgba(26, 41, 66, 0.08);
        box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.03);
      }

      .org-chart-section.org-chart-names {
        background: linear-gradient(180deg, #ffffff 0%, #f8f9fb 100%);
      }

      .org-chart-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        margin-bottom: 20px;
      }

      .org-chart-section .section-title {
        color: #1a1a1a;
        font-weight: 400;
      }

      .org-chart-line {
        width: 60px;
        height: 3px;
        background: linear-gradient(to right, #1f9bd9, #d4af8e);
        box-shadow: 0 2px 8px rgba(31, 155, 217, 0.3);
      }

      .org-chart-subtitle {
        font-size: 1rem;
        color: #6b7280;
        margin: 0 auto 35px;
        max-width: 700px;
        line-height: 1.8;
        text-align: center;
        font-style: italic;
      }

      .org-chart {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
      }

      .org-chart-tier {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 16px 20px;
      }

      .org-node {
        background: #ffffff;
        border: 1px solid rgba(26, 41, 66, 0.12);
        padding: 14px 26px;
        border-radius: 16px;
        font-weight: 600;
        color: #1a1a1a;
        text-transform: uppercase;
        letter-spacing: 1.3px;
        font-size: 0.75rem;
        box-shadow: 0 8px 20px rgba(26, 41, 66, 0.1);
        transition: all 0.3s ease;
      }

      .org-node:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 28px rgba(26, 41, 66, 0.15);
      }

      .org-node.primary {
        background: linear-gradient(135deg, #1ea2dd 0%, #82bcdc 100%);
        color: #ffffff;
        border-color: #1ea2dd;
        box-shadow: 0 12px 30px rgba(22, 36, 59, 0.25);
      }

      .org-node.muted {
        background: linear-gradient(135deg, #d7eefd 0%, #d7eefd 100%);
        border-color: #d7eefd;
        color: #000000;
      }

      .org-chart-connector {
        height: 20px;
        width: 2px;
        background: linear-gradient(to bottom, rgba(26, 41, 66, 0.3), rgba(26, 41, 66, 0.1));
        margin: 0 auto;
      }

      .org-chart-names .org-chart {
        gap: 18px;
      }

      .org-chart-names .org-chart-tier {
        gap: 14px 16px;
      }

      .org-chart-names .org-node {
        padding: 12px 18px;
        font-size: 0.7rem;
        letter-spacing: 1.1px;
        max-width: 230px;
        text-align: center;
        line-height: 1.3;
        word-break: break-word;
      }

      .org-chart-names .org-node.primary {
        font-size: 0.72rem;
      }

      .filter-group input,
      .filter-group select {
        background: #fafbfc;
        color: #1a1a1a;
        border: 2px solid rgba(26, 41, 66, 0.15);
        padding: 14px 16px;
        font-size: 0.95rem;
        outline: none;
        border-radius: 8px;
        transition: all 0.3s ease;
      }

      .filter-group input:focus,
      .filter-group select:focus {
        border-color: #1f9bd9;
        box-shadow: 0 0 0 4px rgba(31, 155, 217, 0.15);
        background: #ffffff;
      }

      .filter-summary {
        font-size: 0.9rem;
        color: #6b7280;
        padding-bottom: 12px;
        font-weight: 500;
      }

      .advisors-section {
        padding-top: 50px;
      }

      .section-title {
        font-size: 2.8rem;
        font-weight: 400;
        color: #1a1a1a;
        text-align: left;
        margin: 0 0 50px 0;
        letter-spacing: 2.5px;
        position: relative;
        padding-bottom: 20px;
        max-width: 100%;
        word-wrap: break-word;
      }

      .section-title::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 80px;
        height: 3px;
        background: linear-gradient(to right, #1f9bd9, transparent);
      }

      .members-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 25px;
      }

      .no-results {
        grid-column: 1 / -1;
        background: linear-gradient(135deg, #82bcdc 0%, #1ea2dd 100%);
        padding: 30px;
        color: rgba(255, 255, 255, 0.85);
        font-size: 1rem;
        border-left: 4px solid #1f9bd9;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      }

      .member-card {
        background: #ffffff;
        border-radius: 12px;
        overflow: hidden;
        transition: all 0.4s ease;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(31, 155, 217, 0.15);
        min-width: 0;
      }

      .member-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 35px rgba(0, 0, 0, 0.18);
        border-color: rgba(31, 155, 217, 0.4);
      }

      .member-image {
        width: 100%;
        height: 300px;
        overflow: hidden;
        background: linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%);
        position: relative;
      }

      .member-image::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 50%;
        background: linear-gradient(to top, rgba(26, 41, 66, 0.4), transparent);
        opacity: 0;
        transition: opacity 0.4s ease;
      }

      .member-card:hover .member-image::after {
        opacity: 1;
      }

      .member-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s ease;
      }

      .member-card:hover .member-image img {
        transform: scale(1.08);
      }

      .member-info {
        padding: 28px 24px;
        background: #ffffff;
        border-top: 3px solid #1f9bd9;
      }

      .member-info h3 {
        font-size: 1rem;
        font-weight: 600;
        color: #1a1a1a;
        margin: 0 0 10px 0;
        line-height: 1.4;
        text-transform: uppercase;
        letter-spacing: 0.8px;
        word-wrap: break-word;
        overflow-wrap: break-word;
      }

      .member-title {
        font-size: 0.85rem;
        color: #6b7280;
        margin: 0 0 6px 0;
        line-height: 1.5;
        font-weight: 500;
      }

      .member-email {
        font-size: 0.8rem;
        color: #9ca3af;
        margin: 0 0 18px 0;
        line-height: 1.4;
        word-break: break-word;
        overflow-wrap: break-word;
      }

      .learn-more {
        font-size: 0.78rem;
        color: #1f9bd9;
        text-decoration: none;
        font-weight: 700;
        letter-spacing: 1.5px;
        display: inline-flex;
        align-items: center;
        transition: all 0.3s ease;
        text-transform: uppercase;
        position: relative;
        padding: 8px 0;
        min-height: 44px;
        line-height: 1.4;
      }

      .learn-more::after {
        content: '→';
        margin-left: 8px;
        transition: margin-left 0.3s ease;
      }

      .learn-more:hover {
        color: #1f9bd9;
      }

      .learn-more:hover::after {
        margin-left: 12px;
      }

      .load-more-container {
        text-align: center;
        margin-top: 50px;
      }

      .load-more-btn {
        background: linear-gradient(135deg, #1f9bd9 0%, #1f9bd9 100%);
        border: none;
        color: white;
        padding: 14px 50px;
        font-size: 0.9rem;
        font-weight: 700;
        border-radius: 8px;
        letter-spacing: 2px;
        cursor: pointer;
        transition: all 0.3s ease;
        text-transform: uppercase;
        box-shadow: 0 4px 15px rgba(31, 155, 217, 0.3);
      }

      .load-more-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(31, 155, 217, 0.4);
        background: linear-gradient(135deg, #1f9bd9 0%, #82BCDC 100%);
      }

      /* Services Info Section */
      .services-info-section {
        --services-heading-font: 'Georgia', 'Times New Roman', serif;
        --services-body-font: 'Trebuchet MS', 'Segoe UI', sans-serif;
        background: #ffffff;
        padding: 80px 0 90px 0;
        position: relative;
        overflow: hidden;
      }

      .services-info-section::before {
        content: none;
      }

      .services-info-section .container {
        position: relative;
        z-index: 1;
      }

      .section-title-white {
        font-size: 2.7rem;
        font-weight: 600;
        color: #1a1a1a;
        text-align: center;
        margin: 0 0 40px 0;
        letter-spacing: 2px;
        text-transform: uppercase;
        max-width: 100%;
        word-wrap: break-word;
      }

      .services-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 28px;
      }

      .service-box {
        position: relative;
        background: linear-gradient(145deg, rgba(255, 255, 255, 0.96), rgba(252, 250, 246, 0.9));
        padding: 28px 26px 26px;
        text-align: left;
        border-radius: 18px;
        border: 1px solid rgba(26, 41, 66, 0.08);
        box-shadow: 0 18px 40px rgba(20, 28, 40, 0.12);
        transition:
          transform 0.25s ease,
          box-shadow 0.25s ease,
          border-color 0.25s ease;
        overflow: hidden;
      }

      .service-box::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, #1f9bd9, #4e6a8a);
      }

      .service-box:hover {
        transform: translateY(-8px);
        border-color: rgba(78, 106, 138, 0.2);
        box-shadow: 0 22px 46px rgba(20, 28, 40, 0.18);
      }

      .service-box h3 {
        font-size: 1.15rem;
        font-weight: 600;
        color: #1a1a1a;
        margin: 0 0 10px 0;
        line-height: 1.4;
      }

      .service-box p {
        font-size: 0.9rem;
        line-height: 1.6;
        color: #4b5563;
        margin: 0 0 18px 0;
      }

      .service-link {
        font-size: 0.7rem;
        color: #1a1a1a;
        text-decoration: none;
        font-weight: 600;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        transition:
          color 0.3s ease,
          transform 0.3s ease;
      }

      .service-link:hover {
        color: #1f9bd9;
        transform: translateX(3px);
      }

      /* Services Section */
      .services-section {
        --services-heading-font: 'Georgia', 'Times New Roman', serif;
        --services-body-font: 'Trebuchet MS', 'Segoe UI', sans-serif;
        background: linear-gradient(180deg, #f2f3f7 0%, #ffffff 100%);
        padding: 90px 0 100px;
        position: relative;
        overflow: hidden;
      }

      .services-section::before {
        content: '';
        position: absolute;
        inset: 0;
        background:
          radial-gradient(circle at 10% 20%, rgba(31, 155, 217, 0.15), transparent 50%),
          radial-gradient(circle at 90% 10%, rgba(78, 106, 138, 0.12), transparent 45%);
        pointer-events: none;
      }

      .section-heading {
        font-size: 2.6rem;
        font-weight: 600;
        color: #1a1a1a;
        text-align: center;
        margin: 0 0 12px 0;
        letter-spacing: 2px;
        text-transform: uppercase;
        max-width: 100%;
        word-wrap: break-word;
      }

      .section-subheading {
        font-size: 0.95rem;
        color: #1f9bd9;
        text-align: center;
        margin: 0 0 60px 0;
        font-style: italic;
      }

      .services-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 36px;
        position: relative;
        z-index: 1;
      }

      /* Service Links */
      .service-links {
        display: flex;
        flex-direction: column;
        gap: 18px;
      }

      .service-item {
        display: flex;
        gap: 20px;
        align-items: flex-start;
        padding: 26px 28px;
        min-width: 0;
        background: linear-gradient(135deg, #ffffff 0%, #e8f1f7 100%);
        border-radius: 20px;
        border: 1px solid rgba(26, 41, 66, 0.08);
        box-shadow: 0 16px 32px rgba(20, 28, 40, 0.1);
        cursor: pointer;
        transition:
          transform 0.25s ease,
          box-shadow 0.25s ease,
          border-color 0.25s ease;
      }

      .service-item:hover {
        border-color: rgba(139, 115, 85, 0.35);
        transform: translateY(-6px);
        box-shadow: 0 20px 36px rgba(20, 28, 40, 0.14);
      }

      .service-item.active {
        border-color: #1f9bd9;
        /* background: linear-gradient(135deg, #fff8ef 0%, #D7EEFD 100%); */
        box-shadow: 0 22px 40px rgba(139, 115, 85, 0.22);
      }

      .service-icon {
        flex-shrink: 0;
        width: 42px;
        height: 42px;
        background: radial-gradient(circle at 30% 30%, #1f9bd9, #1f9bd9);
        color: white;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;
        box-shadow: 0 10px 18px rgba(139, 115, 85, 0.35);
      }

      .service-item.active .service-icon {
        /* background: radial-gradient(circle at 30% 30%, #b59b7a, #6d5a43); */
      }

      .service-text h4 {
        font-size: 1.05rem;
        font-weight: 600;
        color: #1a1a1a;
        line-height: 1.5;
        margin: 0 0 12px 0;
      }

      .service-text p {
        font-size: 0.9rem;
        line-height: 1.6;
        color: #5b5f66;
        margin: 0;
      }

      .service-text ol {
        margin: 0;
        padding-left: 20px;
        color: #333;
      }

      .service-text li {
        font-size: 0.9rem;
        line-height: 1.8;
        margin-bottom: 8px;
      }

      /* Service Details */
      .service-details {
        display: flex;
        flex-direction: column;
        gap: 18px;
      }

      .detail-box {
        display: flex;
        gap: 20px;
        align-items: flex-start;
        padding: 28px 30px;
        min-width: 0;
        background: linear-gradient(140deg, #ffffff 0%, #f8f4ee 100%);
        border-radius: 22px;
        border: 1px solid rgba(26, 41, 66, 0.08);
        box-shadow: 0 18px 36px rgba(20, 28, 40, 0.12);
      }

      .detail-icon {
        flex-shrink: 0;
        width: 42px;
        height: 42px;
        background: radial-gradient(circle at 30% 30%, #1f9bd9, #1f9bd9);
        color: white;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;
        box-shadow: 0 10px 18px rgba(139, 115, 85, 0.35);
      }

      .detail-content h4 {
        font-size: 1rem;
        font-weight: 600;
        color: #1a1a1a;
        margin: 0 0 15px 0;
        line-height: 1.6;
      }

      .detail-content ol {
        margin: 0 0 20px 0;
        padding-left: 20px;
        color: #333;
      }

      .detail-content li {
        font-size: 0.9rem;
        line-height: 1.8;
        margin-bottom: 10px;
      }

      .detail-content p {
        font-size: 0.9rem;
        line-height: 1.8;
        color: #333;
        margin: 0 0 15px 0;
        text-align: justify;
      }
      .service-text,
      .detail-content {
        min-width: 0;
        overflow-wrap: break-word;
      }

      .reveal-on-scroll {
        opacity: 0;
        transform: translateY(16px);
        transition:
          opacity 0.7s ease,
          transform 0.7s ease;
        transition-delay: var(--reveal-delay, 0ms);
        will-change: opacity, transform;
      }

      .reveal-on-scroll.is-visible {
        opacity: 1;
        transform: translateY(0);
      }

      .services-grid .service-box:nth-child(1) {
        --reveal-delay: 0ms;
      }

      .services-grid .service-box:nth-child(2) {
        --reveal-delay: 90ms;
      }

      .services-grid .service-box:nth-child(3) {
        --reveal-delay: 180ms;
      }

      .service-links .service-item:nth-child(1) {
        --reveal-delay: 40ms;
      }

      .service-links .service-item:nth-child(2) {
        --reveal-delay: 120ms;
      }

      .service-links .service-item:nth-child(3) {
        --reveal-delay: 200ms;
      }

      .service-links .service-item:nth-child(4) {
        --reveal-delay: 280ms;
      }

      .service-details .detail-box {
        --reveal-delay: 140ms;
      }

      @media (prefers-reduced-motion: reduce) {
        .reveal-on-scroll {
          opacity: 1;
          transform: none;
          transition: none;
        }
      }

      /* ==================== RESPONSIVE MEDIA QUERIES ==================== */

      /* Large Desktop (1440px and above) */
      @media (min-width: 1440px) {
        .container {
          max-width: 1400px;
        }

        .hero-title,
        .hero-content-left {
          font-size: 4rem;
        }

        .section-title,
        .section-title-white,
        .section-heading {
          font-size: 3.2rem;
        }
      }

      /* Desktop and Laptop (1024px - 1439px) */
      @media (max-width: 1439px) {
        .container {
          max-width: 1100px;
        }
      }

      /* Medium Desktop / Small Laptop (1024px - 1280px) */
      @media (max-width: 1280px) {
        .president-card-large {
          grid-template-columns: 320px 1fr;
        }

        .president-info-large {
          padding: 50px 60px;
        }

        .members-grid {
          grid-template-columns: repeat(3, 1fr);
        }

        .services-grid {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      /* Tablet Landscape (900px - 1024px) */
      @media (max-width: 1024px) {
        .hero-section {
          min-height: 350px;
          padding: 60px 20px;
        }

        .hero-title,
        .hero-content-left {
          font-size: 3rem;
        }

        .president-card-large {
          grid-template-columns: 280px 1fr;
        }

        .president-info-large {
          padding: 40px 50px;
          min-height: 400px;
        }

        .president-title-underlined {
          font-size: 2.4rem;
        }

        .section-title,
        .section-title-white,
        .section-heading {
          font-size: 2.4rem;
        }

        .members-filter {
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          padding: 25px;
        }

        .filter-summary {
          grid-column: 1 / -1;
          padding-bottom: 0;
          padding-top: 10px;
        }

        .members-grid {
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .services-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
        }

        .services-content {
          gap: 30px;
        }

        .service-item,
        .detail-box {
          padding: 24px;
        }
      }

      /* Tablet Portrait (768px - 900px) */
      @media (max-width: 900px) {
        .hero-title,
        .hero-content-left {
          font-size: 2.5rem;
          letter-spacing: 2px;
        }

        .president-card-large {
          grid-template-columns: 1fr;
        }

        .president-image-large {
          min-height: 400px;
        }

        .president-info-large {
          padding: 50px 40px;
          min-height: auto;
        }

        .president-title-underlined {
          font-size: 2.2rem;
        }

        .members-grid {
          grid-template-columns: repeat(2, 1fr);
        }

        .services-grid {
          grid-template-columns: 1fr;
          gap: 30px;
        }

        .services-content {
          grid-template-columns: 1fr;
        }

        .service-links {
          order: 0;
        }

        .service-details {
          order: 1;
        }

        .services-section {
          padding: 70px 0;
        }
      }

      /* Mobile Landscape / Small Tablet (600px - 768px) */
      @media (max-width: 768px) {
        .container {
          padding: 0 15px;
        }

        .section-title {
          text-align: left;
        }

        .section-title-white,
        .section-heading {
          text-align: center;
        }

        .hero-section {
          min-height: 280px;
          padding: 50px 15px;
        }

        .hero-title,
        .hero-content-left {
          font-size: 2rem;
        }

        .president-image-large {
          min-height: 350px;
        }

        .president-info-large {
          padding: 35px 30px;
        }

        .president-title-underlined {
          font-size: 1.9rem;
        }

        .president-description {
          font-size: 0.95rem;
        }

        .senior-label-section {
          padding: 40px 0 0 0;
        }

        .members-filter-section {
          padding: 0 0 25px 0;
        }

        .members-filter {
          grid-template-columns: 1fr;
          gap: 15px;
          padding: 20px;
        }

        .filter-summary {
          grid-column: 1;
          font-size: 0.85rem;
        }

        .section-title,
        .section-title-white,
        .section-heading {
          font-size: 2rem;
          margin-bottom: 35px;
        }

        .members-section {
          padding: 25px 0 60px 0;
        }

        .advisors-section {
          padding-top: 40px;
        }

        .members-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }

        .member-image {
          height: 240px;
        }

        .member-info {
          padding: 22px 18px;
        }

        .member-info h3 {
          font-size: 0.9rem;
        }

        .member-title {
          font-size: 0.8rem;
        }

        .member-email {
          font-size: 0.75rem;
        }

        .services-info-section {
          padding: 60px 0 70px 0;
        }

        .service-item,
        .detail-box {
          padding: 20px;
          gap: 15px;
        }

        .service-icon,
        .detail-icon {
          width: 36px;
          height: 36px;
          font-size: 1rem;
        }

        .service-text h4,
        .detail-content h4 {
          font-size: 0.98rem;
        }

        .service-text p,
        .service-text li,
        .detail-content p,
        .detail-content li {
          font-size: 0.88rem;
        }
      }

      /* Org chart mobile adjustments */
      @media (max-width: 768px) {
        .org-chart-section {
          padding: 50px 0 40px;
        }
        .org-chart-header,
        .section-head-wrap {
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
        }
        .org-chart-subtitle {
          font-size: 0.95rem;
          margin-bottom: 28px;
        }
        .org-chart-tier {
          gap: 12px 14px;
        }
        .org-node {
          padding: 12px 18px;
          font-size: 0.7rem;
          letter-spacing: 1px;
        }
        .org-chart-names .org-node {
          padding: 10px 14px;
          font-size: 0.65rem;
          max-width: 100%;
        }
      }

      @media (max-width: 600px) {
        .org-chart-section {
          padding: 40px 0 35px;
        }
        .org-chart-tier {
          gap: 10px 12px;
        }
        .org-node {
          padding: 10px 14px;
          font-size: 0.65rem;
        }
        .org-chart-names .org-node {
          padding: 8px 12px;
          font-size: 0.6rem;
        }
      }

      @media (max-width: 480px) {
        .org-chart-section {
          padding: 35px 0 30px;
        }
        .org-chart-header {
          margin-bottom: 15px;
        }
        .org-chart-subtitle {
          font-size: 0.9rem;
          margin-bottom: 22px;
        }
        .org-chart-tier {
          gap: 8px 10px;
        }
        .org-node {
          padding: 8px 12px;
          font-size: 0.6rem;
          letter-spacing: 0.8px;
        }
        .org-chart-names .org-node {
          padding: 6px 10px;
          font-size: 0.55rem;
        }
      }

      /* Mobile Portrait (480px - 600px) */
      @media (max-width: 600px) {
        .hero-section {
          min-height: 240px;
          padding: 40px 15px;
        }

        .hero-title,
        .hero-content-left {
          font-size: 1.7rem;
        }

        .president-image-large {
          min-height: 320px;
        }

        .president-info-large {
          padding: 30px 25px;
        }

        .president-title-underlined {
          font-size: 1.7rem;
        }

        .section-title,
        .section-title-white,
        .section-heading {
          font-size: 1.8rem;
        }

        .members-grid {
          grid-template-columns: 1fr;
        }

        .member-image {
          height: 280px;
        }

        .load-more-btn {
          padding: 12px 35px;
          font-size: 0.85rem;
        }

        .services-grid {
          gap: 25px;
        }
      }

      /* Small Mobile (320px - 480px) */
      @media (max-width: 480px) {
        .container {
          padding: 0 12px;
        }

        .hero-section {
          min-height: 220px;
          padding: 35px 12px;
        }

        .hero-title,
        .hero-content-left {
          font-size: 1.5rem;
          letter-spacing: 1px;
        }

        .president-image-large {
          min-height: 280px;
        }

        .president-info-large {
          padding: 25px 20px;
        }

        .president-title-underlined {
          font-size: 1.5rem;
          margin-bottom: 20px;
          padding-bottom: 15px;
        }

        .president-description {
          font-size: 0.88rem;
          line-height: 1.7;
        }

        .senior-label {
          font-size: 0.75rem;
        }

        .filter-group label {
          font-size: 0.75rem;
        }

        .filter-group input,
        .filter-group select {
          padding: 12px 14px;
          font-size: 0.88rem;
        }

        .section-title,
        .section-title-white,
        .section-heading {
          font-size: 1.6rem;
          margin-bottom: 30px;
        }

        .section-subheading {
          font-size: 0.88rem;
          margin-bottom: 35px;
        }

        .member-image {
          height: 260px;
        }

        .member-info {
          padding: 20px 15px;
        }

        .member-info h3 {
          font-size: 0.85rem;
        }

        .member-title {
          font-size: 0.75rem;
        }

        .member-email {
          font-size: 0.7rem;
          margin-bottom: 15px;
        }

        .learn-more {
          font-size: 0.75rem;
        }

        .load-more-container {
          margin-top: 35px;
        }

        .load-more-btn {
          padding: 11px 30px;
          font-size: 0.8rem;
        }

        .services-info-section {
          padding: 50px 0 60px 0;
        }

        .service-box h3 {
          font-size: 1.05rem;
        }

        .service-box p {
          font-size: 0.88rem;
        }

        .service-link {
          font-size: 0.72rem;
        }

        .services-section {
          padding: 60px 0;
        }

        .service-item,
        .detail-box {
          padding: 18px 15px;
          gap: 12px;
        }

        .service-icon,
        .detail-icon {
          width: 34px;
          height: 34px;
          font-size: 0.98rem;
        }

        .service-text h4,
        .detail-content h4 {
          font-size: 0.92rem;
          margin-bottom: 12px;
        }

        .service-text p,
        .service-text li,
        .detail-content p,
        .detail-content li {
          font-size: 0.82rem;
          line-height: 1.7;
        }
      }

      /* Extra Small Mobile (below 375px) */
      @media (max-width: 375px) {
        .hero-title,
        .hero-content-left {
          font-size: 1.3rem;
        }

        .president-title-underlined {
          font-size: 1.3rem;
        }

        .section-title,
        .section-title-white,
        .section-heading {
          font-size: 1.4rem;
        }

        .member-image {
          height: 240px;
        }
      }

      /* Landscape Orientation for Mobile Devices */
      @media (max-height: 500px) and (orientation: landscape) {
        .hero-section {
          min-height: 200px;
          padding: 30px 15px;
        }

        .hero-title,
        .hero-content-left {
          font-size: 1.6rem;
        }

        .president-image-large {
          min-height: 280px;
        }
      }

      /* Home-style: loader, cursor, tilt, mag, ripple */
      @keyframes fillBar {
        0% {
          width: 0;
        }
        60% {
          width: 70%;
        }
        100% {
          width: 100%;
        }
      }
      @keyframes labelPulse {
        0%,
        100% {
          opacity: 0.4;
        }
        50% {
          opacity: 1;
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
      @keyframes float {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-8px);
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
      @keyframes rippleAnim {
        to {
          transform: scale(1);
          opacity: 0;
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
      .loader {
        position: fixed;
        inset: 0;
        background: linear-gradient(135deg, #080e1a, #82bcdc);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 32px;
        z-index: 9999;
        transition:
          opacity 0.7s ease,
          visibility 0.7s ease,
          transform 0.7s ease;
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
        border: 1px solid rgba(31, 155, 217, 0.35);
      }
      .loader .r1 {
        inset: 10px;
        animation: rOrbit1 2.5s linear infinite;
      }
      .loader .r2 {
        inset: 0;
        animation: rOrbit2 3.5s linear infinite;
      }
      .loader .r3 {
        inset: -12px;
        animation: rOrbit3 5s linear infinite;
      }
      .sphere-core {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(31, 155, 217, 0.25), rgba(31, 155, 217, 0.05));
        border: 1px solid rgba(31, 155, 217, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #1f9bd9;
        box-shadow: 0 0 30px rgba(31, 155, 217, 0.3);
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
        background: linear-gradient(90deg, #1f9bd9, #e0b98a);
        border-radius: 99px;
        animation: fillBar 2s ease-in-out infinite;
      }
      .loader-label {
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 2px;
        color: #1f9bd9;
        text-transform: uppercase;
        animation: labelPulse 2s ease-in-out infinite;
      }
      .org-header-line,
      /* .section-head-wrap .org-header-line {
        width: 60px;
        height: 3px;
        background: linear-gradient(90deg, #1f9bd9, #d4a06a);
      } */
      .section-head-wrap {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 24px;
        flex-wrap: wrap;
      }
      .org-chart-header {
        display: flex;
        align-items: center;
        gap: 16px;
      }
      .anim-line {
        animation: lineExpand 0.8s ease-out both;
      }
      .anim-up {
        animation: upFade 0.7s cubic-bezier(0.23, 1, 0.32, 1) both;
        opacity: 0;
      }
      .a-d1 {
        animation-delay: 0.15s;
      }
      .tilt-card {
        transform-style: preserve-3d;
        position: relative;
        overflow: hidden;
        transition:
          transform 0.5s cubic-bezier(0.23, 1, 0.32, 1),
          box-shadow 0.5s ease;
        opacity: 0;
        animation: cardIn 0.7s cubic-bezier(0.23, 1, 0.32, 1) calc(var(--i, 0) * 0.1s) forwards;
      }
      .tilt-shine {
        position: absolute;
        inset: 0;
        border-radius: inherit;
        pointer-events: none;
        z-index: 10;
        background: linear-gradient(
          105deg,
          transparent 45%,
          rgba(255, 255, 255, 0.18) 50%,
          transparent 55%
        );
        transform: translateX(-120%) skewX(-20deg);
      }
      .img-zoom {
        overflow: hidden;
        position: relative;
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
      .mag-btn {
        position: relative;
        overflow: hidden;
        transition: transform 0.25s ease;
      }
      .mag-btn::before {
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
      .mag-btn:hover::before {
        animation: shimmerSweep 0.6s ease forwards;
      }
    `,
  ],
})
export class OrganizationComponent implements OnInit, AfterViewInit {
  @ViewChild('orgChartContainer', { static: true })
  orgChartContainer!: ElementRef<HTMLDivElement>;

  private readonly destroyRef = inject(DestroyRef);
  private readonly memberService = inject(MemberService);
  private readonly i18n = inject(I18nService);
  private chartInstance?: Chart;
  private highchartsRoot?: HighchartsStatic;
  private resizeObserver?: ResizeObserver;
  private scrollObserver?: IntersectionObserver;
  private readonly handleVisibilityChange = () => {
    if (!document.hidden) {
      this.chartInstance?.reflow();
    }
  };

  readonly presidents = this.memberService.presidents;
  readonly advisors = this.memberService.advisors;

  readonly isLoading = signal(true);
  readonly selectedService = signal<string>('divisions');
  readonly searchTerm = signal('');
  readonly roleFilter = signal<RoleFilter>('all');
  readonly normalizedSearchTerm = computed(() => this.searchTerm().trim().toLowerCase());

  ngOnInit() {
    setTimeout(() => this.isLoading.set(false), 1500);
  }

  ngAfterViewInit() {
    this.initScrollReveal();
    this.destroyRef.onDestroy(() => {
      this.scrollObserver?.disconnect();
      this.scrollObserver = undefined;
    });

    this.initHighchartsModules().then((Highcharts) => {
      if (!Highcharts) {
        return;
      }

      this.renderOrganizationChart(Highcharts);
      this.setupChartObservers(this.orgChartContainer);
      this.destroyRef.onDestroy(() => {
        this.chartInstance?.destroy();
        this.chartInstance = undefined;
        document.removeEventListener('visibilitychange', this.handleVisibilityChange);
        this.resizeObserver?.disconnect();
        this.resizeObserver = undefined;
      });
    });
  }

  private setupChartObservers(container: ElementRef<HTMLDivElement>) {
    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => this.chartInstance?.reflow());
      this.resizeObserver.observe(container.nativeElement);
    }

    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  }

  private initScrollReveal() {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal-on-scroll'));
    if (elements.length === 0) {
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      this.revealAll(elements);
      return;
    }

    if (!this.scrollObserver) {
      this.scrollObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            const target = entry.target as HTMLElement;
            target.classList.add('is-visible');
            observer.unobserve(target);
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
      );
    }

    elements.forEach((element) => {
      if (!element.classList.contains('is-visible')) {
        this.scrollObserver?.observe(element);
      }
    });
  }

  private revealAll(elements: HTMLElement[]) {
    elements.forEach((element) => element.classList.add('is-visible'));
  }

  tilt(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
    const dy = (e.clientY - r.top - r.height / 2) / (r.height / 2);
    const tx = -dy * 14;
    const ty = dx * 14;
    el.style.transform = `perspective(900px) rotateX(${tx}deg) rotateY(${ty}deg) translateZ(14px)`;
    el.style.boxShadow = `${-ty * 1.5}px ${tx * 1.5}px 50px rgba(0,0,0,.18)`;
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
    rip.style.cssText = `position:absolute;width:${size}px;height:${size}px;border-radius:50%;background:rgba(255,255,255,.35);transform:scale(0);left:${e.clientX - r.left - size / 2}px;top:${e.clientY - r.top - size / 2}px;animation:rippleAnim .6s ease-out forwards;pointer-events:none;z-index:10;`;
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

  private async initHighchartsModules(): Promise<HighchartsStatic | null> {
    if (this.highchartsRoot) {
      return this.highchartsRoot;
    }

    const [highchartsModule, sankeyModule, organizationModule] = await Promise.all([
      import('highcharts'),
      import('highcharts/modules/sankey'),
      import('highcharts/modules/organization'),
    ]);

    const Highcharts: HighchartsStatic =
      (highchartsModule as unknown as { default?: HighchartsStatic }).default ??
      (highchartsModule as unknown as HighchartsStatic);

    const applyModule = (module: unknown) => {
      const moduleFn =
        typeof module === 'function'
          ? (module as (h: HighchartsStatic) => void)
          : typeof (module as { default?: unknown }).default === 'function'
            ? (module as { default: (h: HighchartsStatic) => void }).default
            : null;

      if (moduleFn) {
        moduleFn(Highcharts);
      }
    };

    applyModule(sankeyModule);
    applyModule(organizationModule);
    this.highchartsRoot = Highcharts;
    return Highcharts;
  }

  private renderOrganizationChart(Highcharts: HighchartsStatic) {
    const t = (key: string) => this.i18n.translate(key);

    const nodeFormat = '<div class="org-node-label">{point.name}</div>';

    const presidentNodes = this.memberService.presidents.map((member) => ({
      id: `president-${member.slug}`,
      name: member.name,
      color: '#4e6a8a',
    }));

    const advisorNodes = this.memberService.advisors.map((member) => ({
      id: `advisor-${member.slug}`,
      name: member.name,
      color: '#1F9BD9',
    }));

    const presidentLinks = presidentNodes.map(
      (node) => ['firstPresident', node.id] as [string, string],
    );

    const advisorLinks = advisorNodes.map((node, index) => {
      const presidentNode = presidentNodes[index % Math.max(presidentNodes.length, 1)];
      const parentId = presidentNode ? presidentNode.id : 'firstPresident';
      return [parentId, node.id] as [string, string];
    });

    const organizationSeries = {
      type: 'organization',
      keys: ['from', 'to'],
      data: [...presidentLinks, ...advisorLinks],
      nodeWidth: 220,
      nodePadding: 18,
      color: '#82BCDC',
      borderColor: '#82BCDC',
      dataLabels: {
        useHTML: true,
        align: 'center',
        verticalAlign: 'middle',
        color: '#1a1a1a',
        nodeFormat,
        style: {
          textOutline: 'none',
          fontWeight: '600',
          fontSize: '11px',
          textAlign: 'center',
        },
      },
      linkColor: 'rgba(26, 41, 66, 0.2)',
      nodes: [
        {
          id: 'firstPresident',
          name: t('organization.chart.nodes.firstPresident'),
          color: '#82BCDC',
          dataLabels: {
            useHTML: true,
            align: 'center',
            verticalAlign: 'middle',
            color: '#ffffff',
            nodeFormat,
            style: {
              textOutline: 'none',
              fontWeight: '600',
              fontSize: '11px',
              textAlign: 'center',
            },
          },
        },
        ...presidentNodes,
        ...advisorNodes,
      ],
    } as unknown as SeriesOptionsType;

    const options: Options = {
      chart: {
        type: 'organization',
        backgroundColor: 'transparent',
        height: 640,
        spacing: [10, 10, 10, 10],
      },
      title: { text: undefined },
      credits: { enabled: false },
      tooltip: { enabled: false },
      accessibility: {
        enabled: true,
        description: t('organization.chart.aria'),
      },
      series: [organizationSeries],
    };

    this.chartInstance = Highcharts.chart(this.orgChartContainer.nativeElement, options);
  }

  selectService(service: string) {
    this.selectedService.set(service);
    setTimeout(() => this.initScrollReveal(), 0);
  }

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement | null)?.value ?? '';
    this.searchTerm.set(value);
  }

  onRoleFilterChange(event: Event) {
    const value = (event.target as HTMLSelectElement | null)?.value ?? 'all';
    if (this.isRoleFilter(value)) {
      this.roleFilter.set(value);
    }
  }

  private isRoleFilter(value: string): value is RoleFilter {
    return value === 'all' || value === 'president' || value === 'advisor';
  }

  private filterMembers(members: Member[], role: MemberRole): Member[] {
    const roleFilter = this.roleFilter();
    if (roleFilter !== 'all' && roleFilter !== role) {
      return [];
    }

    const term = this.normalizedSearchTerm();
    if (!term) {
      return members;
    }

    return members.filter((member) => this.matchesSearch(member, term));
  }

  private matchesSearch(member: Member, term: string): boolean {
    return (
      member.name.toLowerCase().includes(term) ||
      member.title.toLowerCase().includes(term) ||
      member.email.toLowerCase().includes(term)
    );
  }

  readonly filteredPresidents = computed(() =>
    this.filterMembers(this.memberService.presidents, 'president'),
  );
  readonly filteredAdvisors = computed(() =>
    this.filterMembers(this.memberService.advisors, 'advisor'),
  );
}
