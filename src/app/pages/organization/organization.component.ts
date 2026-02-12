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
  signal
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SkeletonLoaderComponent } from '../../components/skeleton-loader/skeleton-loader.component';
import { MemberService } from '../../services/members.service';
import type { Member, MemberRole, RoleFilter } from '../../services/members.service';
import { I18nPipe } from '../../i18n/i18n.pipe';
import { I18nService } from '../../i18n/i18n.service';
import type { Chart, Options, SeriesOptionsType } from 'highcharts';

type HighchartsStatic = typeof import('highcharts');

@Component({
  selector: 'app-organization',
  imports: [CommonModule, RouterLink, SkeletonLoaderComponent, NgOptimizedImage, I18nPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <h1 class="hero-title" [innerHTML]="'organization.hero.title' | i18n"></h1>
        </div>
      </section>

      <!-- First President Section -->
      <section class="first-president-section">
        <div class="container">
          <div class="president-card-large glass-card">
            <div class="president-image-large">
              <img
                ngSrc="https://scontent.fpry2-1.fna.fbcdn.net/v/t39.30808-6/481977439_661094752968468_3580912692254417664_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=781MphyOZxYQ7kNvwFA72Pl&_nc_oc=AdlS3efGmR2NwVl7AluKnrYklBBqsJYuTlJ2j9PkHSisG9RQ-4n7jDHjPIDmj6En6_w&_nc_zt=23&_nc_ht=scontent.fpry2-1.fna&_nc_gid=ECXY9r39JHQUTs-eZefdrQ&oh=00_AfsTzaj3KdpgLrEjgftG5I3y5wMeOJriKEBVHzCL_mVnRA&oe=69939BC0"
                [attr.alt]="'organization.firstPresident.alt' | i18n"
                width="400"
                height="500">
            </div>
            <div class="president-info-large">
              <h2 class="president-title-underlined">{{ 'organization.firstPresident.title' | i18n }}</h2>
              <p class="president-description" [innerHTML]="'organization.firstPresident.body' | i18n"></p>
            </div>
          </div>
        </div>
      </section>

      <!-- Organization Chart Section -->
      <section class="org-chart-section" aria-labelledby="org-chart-title">
        <div class="container">
          <div class="org-chart-header">
            <div class="org-chart-line"></div>
            <h2 id="org-chart-title" class="section-title">{{ 'organization.chart.title' | i18n }}</h2>
          </div>
          <p class="org-chart-subtitle">{{ 'organization.chart.subtitle' | i18n }}</p>

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
            <div class="org-chart-line"></div>
            <h2 id="org-chart-names-title" class="section-title">{{ 'organization.chart.peopleTitle' | i18n }}</h2>
          </div>
          <p class="org-chart-subtitle">{{ 'organization.chart.peopleSubtitle' | i18n }}</p>

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
                        advisors: filteredAdvisors().length
                      }
              }}
            </div>
          </div>
        </div>
      </section>

      <!-- The Presidents Section -->
      <section class="members-section presidents-section">
        <div class="container">
          <h2 class="section-title">{{ 'organization.presidents.title' | i18n }}</h2>
          <div class="members-grid">
            @if (isLoading()) {
              @for (item of [1, 2, 3, 4, 5, 6, 7, 8]; track item) {
                <app-skeleton-loader type="profile-card"></app-skeleton-loader>
              }
            } @else {
              @if (filteredPresidents().length === 0) {
                <div class="no-results">{{ 'organization.presidents.empty' | i18n }}</div>
              } @else {
                @for (president of filteredPresidents(); track president.email) {
                  <div class="member-card glass-card">
                    <div class="member-image">
                      <img [ngSrc]="president.image" [alt]="president.name" width="300" height="350">
                    </div>
                    <div class="member-info">
                      <h3>{{ president.name }}</h3>
                      <p class="member-title">{{ president.title }}</p>
                      <p class="member-email">{{ president.email }}</p>
                      <a [routerLink]="['/organization/member', president.slug]" class="learn-more">
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
          <h2 class="section-title">{{ 'organization.advisors.title' | i18n }}</h2>
          <div class="members-grid">
            @if (isLoading()) {
              @for (item of [1, 2, 3, 4, 5, 6, 7, 8]; track item) {
                <app-skeleton-loader type="profile-card"></app-skeleton-loader>
              }
            } @else {
              @if (filteredAdvisors().length === 0) {
                <div class="no-results">{{ 'organization.advisors.empty' | i18n }}</div>
              } @else {
                @for (advisor of filteredAdvisors(); track advisor.email) {
                  <div class="member-card glass-card">
                    <div class="member-image">
                      <img [ngSrc]="advisor.image" [alt]="advisor.name" width="300" height="350">
                    </div>
                    <div class="member-info">
                      <h3>{{ advisor.name }}</h3>
                      <p class="member-title">{{ advisor.title }}</p>
                      <p class="member-email">{{ advisor.email }}</p>
                      <a [routerLink]="['/organization/member', advisor.slug]" class="learn-more">
                        {{ 'organization.members.learnMore' | i18n }}
                      </a>
                    </div>
                  </div>
                }
              }
            }
          </div>
          <div class="load-more-container">
            <button class="load-more-btn">{{ 'organization.members.loadMore' | i18n }}</button>
          </div>
        </div>
      </section>

      <!-- Services Info Section -->
      <section class="services-info-section">
        <div class="container">
          <h2 class="section-title-white">{{ 'organization.services.overviewTitle' | i18n }}</h2>
          <div class="services-grid">
            <div class="service-box reveal-on-scroll">
              <h3>{{ 'organization.services.registry.title' | i18n }}</h3>
              <p>{{ 'organization.services.registry.body' | i18n }}</p>
              <a href="#" class="service-link">{{ 'organization.services.learnMore' | i18n }}</a>
            </div>
            <div class="service-box reveal-on-scroll">
              <h3>{{ 'organization.services.docs.title' | i18n }}</h3>
              <p>{{ 'organization.services.docs.body' | i18n }}</p>
              <a href="#" class="service-link">{{ 'organization.services.learnMore' | i18n }}</a>
            </div>
            <div class="service-box reveal-on-scroll">
              <h3>{{ 'organization.services.tv.title' | i18n }}</h3>
              <p>{{ 'organization.services.tv.body' | i18n }}</p>
              <a href="#" class="service-link">{{ 'organization.services.learnMore' | i18n }}</a>
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
                  <div class="service-item reveal-on-scroll"
                   [class.active]="selectedService() === 'divisions'"
                   (click)="selectService('divisions')">
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

                  <div class="service-item reveal-on-scroll"
                   [class.active]="selectedService() === 'rooms'"
                   (click)="selectService('rooms')">
                <span class="service-icon">🏛️</span>
                <div class="service-text">
                  <h4>{{ 'organization.services.rooms.title' | i18n }}</h4>
                  <p>{{ 'organization.services.rooms.body' | i18n }}</p>
                </div>
              </div>

                  <div class="service-item reveal-on-scroll"
                   [class.active]="selectedService() === 'council'"
                   (click)="selectService('council')">
                <span class="service-icon">⚖️</span>
                <div class="service-text">
                  <h4>{{ 'organization.services.council.title' | i18n }}</h4>
                  <p>{{ 'organization.services.council.body' | i18n }}</p>
                </div>
              </div>

                  <div class="service-item reveal-on-scroll"
                   [class.active]="selectedService() === 'registers'"
                   (click)="selectService('registers')">
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
  <!-- Footer Section -->
    <footer class="footer-section">
      <div class="footer-main">
        <div class="footer-logo-wrapper">
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
            <path d="M50 15L35 25V50L50 60L65 50V25L50 15Z" fill="#BF9874"/>
            <path d="M50 30L42 35V50L50 55L58 50V35L50 30Z" fill="white"/>
            <rect x="48" y="10" width="4" height="8" fill="#BF9874"/>
            <rect x="46" y="5" width="8" height="4" fill="#BF9874"/>
          </svg>
        </div>
        <div class="container">
          <div class="footer-grid">
            <div class="footer-column">
              <h3>{{ 'footer.mainOffice.title' | i18n }}</h3>
              <p>{{ 'footer.mainOffice.address1' | i18n }}</p>
              <p>{{ 'footer.mainOffice.address2' | i18n }}</p>
              <p>{{ 'footer.mainOffice.address3' | i18n }}</p>
              <p class="footer-contact">{{ 'footer.mainOffice.phone' | i18n }}</p>
              <p class="footer-contact">{{ 'footer.mainOffice.email' | i18n }}</p>
            </div>

            <div class="footer-column">
              <h3>{{ 'footer.quickLinks.title' | i18n }}</h3>
              <ul>
                <li><a href="#">{{ 'footer.quickLinks.about' | i18n }}</a></li>
                <li><a href="#">{{ 'footer.quickLinks.jurisprudence' | i18n }}</a></li>
                <li><a href="#">{{ 'footer.quickLinks.filing' | i18n }}</a></li>
                <li><a href="#">{{ 'footer.quickLinks.contact' | i18n }}</a></li>
              </ul>
            </div>

            <div class="footer-column">
              <h3>{{ 'footer.resources.title' | i18n }}</h3>
              <ul>
                <li><a href="#">{{ 'footer.resources.legalDocs' | i18n }}</a></li>
                <li><a href="#">{{ 'footer.resources.decisions' | i18n }}</a></li>
                <li><a href="#">{{ 'footer.resources.reports' | i18n }}</a></li>
                <li><a href="#">{{ 'footer.resources.faqs' | i18n }}</a></li>
              </ul>
            </div>

            <div class="footer-column">
              <h3>{{ 'footer.connect.title' | i18n }}</h3>
              <ul>
                <li><a href="#">{{ 'footer.connect.facebook' | i18n }}</a></li>
                <li><a href="#">{{ 'footer.connect.twitter' | i18n }}</a></li>
                <li><a href="#">{{ 'footer.connect.instagram' | i18n }}</a></li>
                <li><a href="#">{{ 'footer.connect.linkedin' | i18n }}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <div class="footer-bottom-content">
            <a href="#" class="privacy-link">{{ 'footer.privacy' | i18n }}</a>
            <p class="copyright">{{ 'footer.copyright' | i18n }}</p>
            <div class="social-icons">
              <a href="#" class="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                </svg>
              </a>
              <a href="#" class="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.82 2.16-4.82 4.82 0 .38.04.75.13 1.1-4-.2-7.54-2.12-9.91-5.04-.42.72-.66 1.55-.66 2.44 0 1.67.85 3.15 2.14 4.01-.79-.03-1.53-.24-2.18-.6v.06c0 2.34 1.66 4.29 3.87 4.73-.4.11-.83.17-1.27.17-.31 0-.62-.03-.92-.08.63 1.96 2.44 3.38 4.6 3.42-1.68 1.32-3.8 2.1-6.11 2.1-.4 0-.79-.02-1.17-.07 2.18 1.4 4.77 2.21 7.55 2.21 9.06 0 14-7.5 14-14 0-.21 0-.42-.02-.63.96-.69 1.8-1.56 2.46-2.55z"/>
                </svg>
              </a>
              <a href="#" class="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  `,
  styles: [`
    .page-container {
      min-height: 100vh;
      background: #0a1929;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    /* Hero Section */
    .hero-section {
      position: relative;
      min-height: 350px;
      background: linear-gradient(rgba(10, 25, 41, 0.7), rgba(10, 25, 41, 0.8)),
                  url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=400&fit=crop') center/cover;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 60px 20px;
    }

    .hero-title {
      font-size: 3rem;
      font-weight: 300;
      color: white;
      text-align: center;
      line-height: 1.3;
      letter-spacing: 2px;
      margin: 0;
      text-transform: uppercase;
    }

    /* First President Section */
    .first-president-section {
      background: #ffffff;
      padding: 0;
    }

    .president-card-large {
      display: grid;
      grid-template-columns: 300px 1fr;
      gap: 0;
      align-items: start;
      background: #ffffff;
      border-radius: 0;
    }

    .president-image-large,
    .president-info-large {
      border-radius: 0;
    }

    .president-image-large {
      width: 100%;
      height: 100%;
      min-height: 400px;
      overflow: hidden;
    }

    .president-image-large img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin-top: 0;
    }

    .president-info-large {
      padding: 50px 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 400px;
    }

    .president-title-underlined {
      font-size: 2.5rem;
      font-weight: 300;
      color: #1a1a1a;
      margin: 0 0 25px 0;
      letter-spacing: 1px;
      padding-bottom: 15px;
      border-bottom: 2px solid #8b7355;
      display: inline-block;
    }

    .president-description {
      font-size: 0.95rem;
      line-height: 1.8;
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
      background: #ECECF1;
      padding: 40px 0 0 0;
    }

    .senior-label {
      font-size: 0.75rem;
      font-weight: 600;
      color: #8b7355;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    /* Members Section (Presidents & Advisors) */
    .members-section {
      background: #ECECF1;
      padding: 20px 0 60px 0;
    }

    .members-filter-section {
      background: #ECECF1;
      padding: 20px 0 10px 0;
    }

    .members-filter {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr 1fr;
      gap: 20px;
      align-items: end;
    }

    .filter-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .filter-group label {
      font-size: 0.75rem;
      font-weight: 600;
      color: #4b5563;
    }

    /* Organization Chart */
    .org-chart-section {
      padding: 60px 0 50px;
      background: linear-gradient(180deg, #f5f7fb 0%, #eef2f7 100%);
      border-bottom: 1px solid rgba(26, 41, 66, 0.06);
    }

    .org-chart-section.org-chart-names {
      background: #ffffff;
    }

    .org-chart-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      margin-bottom: 14px;
    }

    .org-chart-section .section-title {
      color: #1a1a1a;
    }

    .org-chart-line {
      width: 52px;
      height: 2px;
      background: #BF9874;
    }

    .org-chart-subtitle {
      font-size: 0.95rem;
      color: #6b5a41;
      margin: 0 auto 28px;
      max-width: 680px;
      line-height: 1.7;
      text-align: center;
    }

    .org-chart {
      display: flex;
      flex-direction: column;
      gap: 18px;
      align-items: center;
    }

    .org-chart-tier {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 14px 18px;
    }

    .org-node {
      background: #ffffff;
      border: 1px solid rgba(26, 41, 66, 0.1);
      padding: 12px 22px;
      border-radius: 14px;
      font-weight: 600;
      color: #1a1a1a;
      text-transform: uppercase;
      letter-spacing: 1.2px;
      font-size: 0.72rem;
      box-shadow: 0 10px 22px rgba(26, 41, 66, 0.1);
    }

    .org-node.primary {
      background: #16243b;
      color: #ffffff;
      border-color: #16243b;
      box-shadow: 0 12px 26px rgba(22, 36, 59, 0.2);
    }

    .org-node.muted {
      background: #f6efe7;
      border-color: #e1c7b2;
      color: #5a4634;
    }

    .org-chart-connector {
      height: 18px;
      width: 2px;
      background: rgba(26, 41, 66, 0.18);
      margin: 0 auto;
    }

    .org-chart-names .org-chart {
      gap: 16px;
    }

    .org-chart-names .org-chart-tier {
      gap: 12px 14px;
    }

    .org-chart-names .org-node {
      padding: 10px 16px;
      font-size: 0.68rem;
      letter-spacing: 1px;
      max-width: 220px;
      text-align: center;
      line-height: 1.2;
      word-break: break-word;
    }

    .org-chart-names .org-node.primary {
      font-size: 0.7rem;
    }
    .filter-group input,
    .filter-group select {
      background: #ffffff;
      color: #1a1a1a;
      border: 1px solid rgba(26, 41, 66, 0.18);
      padding: 12px 14px;
      font-size: 0.9rem;
      outline: none;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }

    .filter-group input:focus,
    .filter-group select:focus {
      border-color: #4e6a8a;
      box-shadow: 0 0 0 3px rgba(78, 106, 138, 0.18);
    }

    .filter-summary {
      font-size: 0.85rem;
      color: #4b5563;
      padding-bottom: 12px;
    }

    .advisors-section {
      padding-top: 40px;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 300;
      color: #1a1a1a;
      text-align: left;
      margin: 0 0 40px 0;
      letter-spacing: 2px;
    }

    .members-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }

    .no-results {
      grid-column: 1 / -1;
      background: #1a2942;
      padding: 20px;
      color: rgba(255, 255, 255, 0.75);
      font-size: 0.9rem;
      border-left: 3px solid #8b7355;
    }

    .member-card {
      background: #1a2942;
      border-radius: 0;
      overflow: hidden;
      transition: transform 0.3s ease;
    }

    .member-card:hover {
      transform: translateY(-5px);
    }

    .member-image {
      width: 100%;
      height: 280px;
      overflow: hidden;
      background: #2c3e50;
      position: relative;
    }

    .member-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .member-info {
      padding: 25px 20px;
      background: #1a2942;
      border-top: 3px solid #8b7355;
    }

    .member-info h3 {
      font-size: 0.95rem;
      font-weight: 600;
      color: white;
      margin: 0 0 8px 0;
      line-height: 1.4;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .member-title {
      font-size: 0.8rem;
      color: rgba(255, 255, 255, 0.6);
      margin: 0 0 5px 0;
      line-height: 1.4;
    }

    .member-email {
      font-size: 0.75rem;
      color: rgba(255, 255, 255, 0.5);
      margin: 0 0 15px 0;
      line-height: 1.4;
    }

    .learn-more {
      font-size: 0.75rem;
      color: #8b7355;
      text-decoration: none;
      font-weight: 600;
      letter-spacing: 1px;
      display: inline-block;
      transition: color 0.3s ease;
    }

    .learn-more:hover {
      color: #a89070;
    }

    .load-more-container {
      text-align: center;
      margin-top: 40px;
    }

    .load-more-btn {
      background: transparent;
      border: 2px solid #8b7355;
      color: #8b7355;
      padding: 12px 40px;
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 1.5px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-transform: uppercase;
    }

    .load-more-btn:hover {
      background: #8b7355;
      color: white;
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
      font-family: var(--services-heading-font);
      font-size: 2.7rem;
      font-weight: 600;
      color: #1a1a1a;
      text-align: center;
      margin: 0 0 40px 0;
      letter-spacing: 2px;
      text-transform: uppercase;
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
      transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
      overflow: hidden;
    }

    .service-box::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #8b7355, #4e6a8a);
    }

    .service-box:hover {
      transform: translateY(-8px);
      border-color: rgba(78, 106, 138, 0.2);
      box-shadow: 0 22px 46px rgba(20, 28, 40, 0.18);
    }

    .service-box h3 {
      font-family: var(--services-heading-font);
      font-size: 1.15rem;
      font-weight: 600;
      color: #1a1a1a;
      margin: 0 0 10px 0;
      line-height: 1.4;
    }

    .service-box p {
      font-family: var(--services-body-font);
      font-size: 0.9rem;
      line-height: 1.6;
      color: #4b5563;
      margin: 0 0 18px 0;
    }

    .service-link {
      font-family: var(--services-body-font);
      font-size: 0.7rem;
      color: #1a1a1a;
      text-decoration: none;
      font-weight: 600;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: color 0.3s ease, transform 0.3s ease;
    }

    .service-link:hover {
      color: #8b7355;
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
        radial-gradient(circle at 10% 20%, rgba(191, 152, 116, 0.15), transparent 50%),
        radial-gradient(circle at 90% 10%, rgba(78, 106, 138, 0.12), transparent 45%);
      pointer-events: none;
    }

    .section-heading {
      font-family: var(--services-heading-font);
      font-size: 2.6rem;
      font-weight: 600;
      color: #1a1a1a;
      text-align: center;
      margin: 0 0 12px 0;
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    .section-subheading {
      font-family: var(--services-body-font);
      font-size: 0.95rem;
      color: #6b5a41;
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
      background: linear-gradient(135deg, #ffffff 0%, #f7f1e8 100%);
      border-radius: 20px;
      border: 1px solid rgba(26, 41, 66, 0.08);
      box-shadow: 0 16px 32px rgba(20, 28, 40, 0.1);
      cursor: pointer;
      transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
    }

    .service-item:hover {
      border-color: rgba(139, 115, 85, 0.35);
      transform: translateY(-6px);
      box-shadow: 0 20px 36px rgba(20, 28, 40, 0.14);
    }

    .service-item.active {
      border-color: rgba(139, 115, 85, 0.6);
      background: linear-gradient(135deg, #fff8ef 0%, #f3e7d7 100%);
      box-shadow: 0 22px 40px rgba(139, 115, 85, 0.22);
    }

    .service-icon {
      flex-shrink: 0;
      width: 42px;
      height: 42px;
      background: radial-gradient(circle at 30% 30%, #d9c2a7, #8b7355);
      color: white;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      box-shadow: 0 10px 18px rgba(139, 115, 85, 0.35);
    }

    .service-item.active .service-icon {
      background: radial-gradient(circle at 30% 30%, #b59b7a, #6d5a43);
    }

    .service-text h4 {
      font-family: var(--services-heading-font);
      font-size: 1.05rem;
      font-weight: 600;
      color: #1a1a1a;
      line-height: 1.5;
      margin: 0 0 12px 0;
    }

    .service-text p {
      font-family: var(--services-body-font);
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
      font-family: var(--services-body-font);
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
      background: linear-gradient(140deg, #ffffff 0%, #f8f4ee 100%);
      border-radius: 22px;
      border: 1px solid rgba(26, 41, 66, 0.08);
      box-shadow: 0 18px 36px rgba(20, 28, 40, 0.12);
    }

    .detail-icon {
      flex-shrink: 0;
      width: 42px;
      height: 42px;
      background: radial-gradient(circle at 30% 30%, #d9c2a7, #8b7355);
      color: white;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      box-shadow: 0 10px 18px rgba(139, 115, 85, 0.35);
    }

    .detail-content h4 {
      font-family: var(--services-heading-font);
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
      font-family: var(--services-body-font);
      font-size: 0.9rem;
      line-height: 1.8;
      margin-bottom: 10px;
    }

    .detail-content p {
      font-family: var(--services-body-font);
      font-size: 0.9rem;
      line-height: 1.8;
      color: #333;
      margin: 0 0 15px 0;
      text-align: justify;
    }

    .reveal-on-scroll {
      opacity: 0;
      transform: translateY(16px);
      transition: opacity 0.7s ease, transform 0.7s ease;
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

    /* Footer */
    .footer-section {
      background-color: #ffffff;
    }

    .footer-main {
      background-color: #ffffff;
      color: #b0b0b0;
      padding: 60px 0 40px;
      position: relative;
    }

    .footer-logo-wrapper {
      position: absolute;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
      background-color: white;
      width: 120px;
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
    }

    .footer-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 50px;
      padding-top: 40px;
    }

    .footer-column h3 {
      color: white;
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .footer-column p {
      font-size: 0.9rem;
      line-height: 1.8;
      margin: 5px 0;
      color: #b0b0b0;
    }

    .footer-column ul {
      list-style: none;
      padding: 0;
    }

    .footer-column ul li {
      margin-bottom: 12px;
    }

    .footer-column ul li a {
      color: #b0b0b0;
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s ease;
    }

    .footer-column ul li a:hover {
      color: #BF9874;
    }

    .footer-bottom {
      background-color: #ffffff;
      padding: 25px 0;
    }

    .footer-bottom-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }

    .social-icons {
      display: flex;
      gap: 15px;
    }

    .social-icon {
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #5A7184;
      border-radius: 50%;
      color: white;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .social-icon:hover {
      background-color: #BF9874;
    }

    .social-icon svg {
      width: 16px;
      height: 16px;
    }

    .copyright {
      font-size: 0.85rem;
      color: #555;
      margin: 0;
    }

    .privacy-link {
      color: #555;
      text-decoration: none;
      font-size: 0.85rem;
      transition: color 0.3s ease;
    }

    .privacy-link:hover {
      color: #BF9874;
    }

    /* ==================== RESPONSIVE MEDIA QUERIES ==================== */

    /* Large Desktop (1440px and above) */
    @media (min-width: 1440px) {
      .container {
        max-width: 1400px;
      }

      .hero-title {
        font-size: 3.5rem;
      }

      .section-title,
      .section-title-white,
      .section-heading {
        font-size: 3rem;
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
        grid-template-columns: 280px 1fr;
      }

      .president-info-large {
        padding: 40px 50px;
      }

      .members-grid {
        grid-template-columns: repeat(3, 1fr);
      }

      .services-grid {
        grid-template-columns: repeat(3, 1fr);
      }

      .footer-grid {
        gap: 40px;
      }
    }

    /* Tablet Landscape (900px - 1024px) */
    @media (max-width: 1024px) {
      .hero-section {
        min-height: 300px;
        padding: 50px 20px;
      }

      .hero-title {
        font-size: 2.5rem;
      }

      .president-card-large {
        grid-template-columns: 250px 1fr;
      }

      .president-info-large {
        padding: 35px 40px;
        min-height: 350px;
      }

      .president-title-underlined {
        font-size: 2rem;
      }

      .section-title,
      .section-title-white,
      .section-heading {
        font-size: 2rem;
      }

      .members-filter {
        grid-template-columns: 1fr 1fr;
        gap: 15px;
      }

      .filter-summary {
        grid-column: 1 / -1;
        padding-bottom: 0;
        padding-top: 10px;
      }

      .members-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
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
        padding: 25px;
      }

      .footer-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
      }
    }

    /* Tablet Portrait (768px - 900px) */
    @media (max-width: 900px) {
      .hero-title {
        font-size: 2.2rem;
        letter-spacing: 1px;
      }

      .president-card-large {
        grid-template-columns: 1fr;
      }

      .president-image-large {
        min-height: 350px;
      }

      .president-info-large {
        padding: 40px 30px;
        min-height: auto;
      }

      .president-title-underlined {
        font-size: 1.8rem;
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

      .service-details {
        order: -1;
      }

      .services-section {
        padding: 60px 0;
      }

      .footer-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 35px;
      }
    }

    /* Mobile Landscape / Small Tablet (600px - 768px) */
    @media (max-width: 768px) {
      .container {
        padding: 0 15px;
      }

      .hero-section {
        min-height: 250px;
        padding: 40px 15px;
      }

      .hero-title {
        font-size: 1.8rem;
      }

      .president-image-large {
        min-height: 300px;
      }

      .president-info-large {
        padding: 30px 25px;
      }

      .president-title-underlined {
        font-size: 1.6rem;
      }

      .president-description {
        font-size: 0.9rem;
      }

      .senior-label-section {
        padding: 30px 0 0 0;
      }

      .members-filter-section {
        padding: 15px 0 10px 0;
      }

      .members-filter {
        grid-template-columns: 1fr;
        gap: 12px;
      }

      .filter-summary {
        grid-column: 1;
        font-size: 0.8rem;
      }

      .section-title,
      .section-title-white,
      .section-heading {
        font-size: 1.8rem;
        margin-bottom: 30px;
      }

      .members-section {
        padding: 15px 0 50px 0;
      }

      .advisors-section {
        padding-top: 30px;
      }

      .members-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
      }

      .member-image {
        height: 220px;
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
      }

      .services-info-section {
        padding: 50px 0 60px 0;
      }

      .service-item,
      .detail-box {
        padding: 20px;
        gap: 15px;
      }

      .service-icon,
      .detail-icon {
        width: 35px;
        height: 35px;
        font-size: 1rem;
      }

      .service-text h4,
      .detail-content h4 {
        font-size: 0.95rem;
      }

      .service-text p,
      .service-text li,
      .detail-content p,
      .detail-content li {
        font-size: 0.85rem;
      }

      .footer-main {
        padding: 50px 0 30px;
      }

      .footer-logo-wrapper {
        width: 100px;
        height: 100px;
        top: -35px;
      }

      .footer-logo-wrapper svg {
        width: 65px;
        height: 65px;
      }

      .footer-grid {
        grid-template-columns: 1fr;
        gap: 30px;
        padding-top: 30px;
      }

      .footer-column h3 {
        font-size: 1rem;
        margin-bottom: 15px;
      }

      .footer-column p,
      .footer-column ul li a {
        font-size: 0.85rem;
      }

      .footer-bottom-content {
        flex-direction: column;
        gap: 15px;
        text-align: center;
      }

      .social-icons {
        order: -1;
      }

    }

    /* Mobile Portrait (480px - 600px) */
    @media (max-width: 600px) {
      .hero-section {
        min-height: 220px;
        padding: 35px 15px;
      }

      .hero-title {
        font-size: 1.6rem;
      }

      .president-image-large {
        min-height: 280px;
      }

      .president-info-large {
        padding: 25px 20px;
      }

      .president-title-underlined {
        font-size: 1.5rem;
      }

      .section-title,
      .section-title-white,
      .section-heading {
        font-size: 1.6rem;
      }

      .members-grid {
        grid-template-columns: 1fr;
      }

      .member-image {
        height: 260px;
      }

      .load-more-btn {
        padding: 10px 30px;
        font-size: 0.8rem;
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
        min-height: 200px;
        padding: 30px 12px;
      }

      .hero-title {
        font-size: 1.4rem;
        letter-spacing: 0.5px;
      }

      .president-image-large {
        min-height: 250px;
      }

      .president-info-large {
        padding: 20px 15px;
      }

      .president-title-underlined {
        font-size: 1.3rem;
        margin-bottom: 15px;
        padding-bottom: 10px;
      }

      .president-description {
        font-size: 0.85rem;
        line-height: 1.6;
      }

      .senior-label {
        font-size: 0.7rem;
      }

      .filter-group label {
        font-size: 0.7rem;
      }

      .filter-group input,
      .filter-group select {
        padding: 10px 12px;
        font-size: 0.85rem;
      }

      .section-title,
      .section-title-white,
      .section-heading {
        font-size: 1.4rem;
        margin-bottom: 25px;
      }

      .section-subheading {
        font-size: 0.85rem;
        margin-bottom: 30px;
      }

      .member-image {
        height: 240px;
      }

      .member-info {
        padding: 18px 12px;
      }

      .member-info h3 {
        font-size: 0.8rem;
      }

      .member-title {
        font-size: 0.7rem;
      }

      .member-email {
        font-size: 0.65rem;
        margin-bottom: 12px;
      }

      .learn-more {
        font-size: 0.7rem;
      }

      .load-more-container {
        margin-top: 30px;
      }

      .load-more-btn {
        padding: 10px 25px;
        font-size: 0.75rem;
      }

      .services-info-section {
        padding: 40px 0 50px 0;
      }

      .service-box h3 {
        font-size: 1rem;
      }

      .service-box p {
        font-size: 0.85rem;
      }

      .service-link {
        font-size: 0.7rem;
      }

      .services-section {
        padding: 50px 0;
      }

      .service-item,
      .detail-box {
        padding: 18px 15px;
        gap: 12px;
      }

      .service-icon,
      .detail-icon {
        width: 32px;
        height: 32px;
        font-size: 0.95rem;
      }

      .service-text h4,
      .detail-content h4 {
        font-size: 0.9rem;
        margin-bottom: 12px;
      }

      .service-text p,
      .service-text li,
      .detail-content p,
      .detail-content li {
        font-size: 0.8rem;
        line-height: 1.6;
      }

      .footer-main {
        padding: 45px 0 25px;
      }

      .footer-logo-wrapper {
        width: 90px;
        height: 90px;
        top: -30px;
      }

      .footer-logo-wrapper svg {
        width: 55px;
        height: 55px;
      }

      .footer-grid {
        gap: 25px;
        padding-top: 25px;
      }

      .footer-column h3 {
        font-size: 0.95rem;
        margin-bottom: 12px;
      }

      .footer-column p,
      .footer-column ul li a {
        font-size: 0.8rem;
        line-height: 1.6;
      }

      .footer-column ul li {
        margin-bottom: 10px;
      }

      .footer-bottom {
        padding: 20px 0;
      }

      .copyright,
      .privacy-link {
        font-size: 0.75rem;
      }

      .social-icon {
        width: 32px;
        height: 32px;
      }

      .social-icon svg {
        width: 14px;
        height: 14px;
      }
    }

    /* Extra Small Mobile (below 375px) */
    @media (max-width: 375px) {
      .hero-title {
        font-size: 1.2rem;
      }

      .president-title-underlined {
        font-size: 1.2rem;
      }

      .section-title,
      .section-title-white,
      .section-heading {
        font-size: 1.3rem;
      }

      .member-image {
        height: 220px;
      }
    }

    /* Landscape Orientation for Mobile Devices */
    @media (max-height: 500px) and (orientation: landscape) {
      .hero-section {
        min-height: 180px;
        padding: 25px 15px;
      }

      .hero-title {
        font-size: 1.5rem;
      }

      .president-image-large {
        min-height: 250px;
      }
    }
  `]
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
    // Simulate loading data
    setTimeout(() => {
      this.isLoading.set(false);
    }, 1500);
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
        { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
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

  private async initHighchartsModules(): Promise<HighchartsStatic | null> {
    if (this.highchartsRoot) {
      return this.highchartsRoot;
    }

    const [highchartsModule, sankeyModule, organizationModule] = await Promise.all([
      import('highcharts'),
      import('highcharts/modules/sankey'),
      import('highcharts/modules/organization')
    ]);

    const Highcharts: HighchartsStatic =
      (highchartsModule as unknown as { default?: HighchartsStatic }).default ??
      (highchartsModule as unknown as HighchartsStatic);

    const applyModule = (module: unknown) => {
      const moduleFn =
        typeof module === 'function'
          ? (module as (h: HighchartsStatic) => void)
          : typeof (module as { default?: unknown }).default === 'function'
            ? ((module as { default: (h: HighchartsStatic) => void }).default)
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
      color: '#4e6a8a'
    }));

    const advisorNodes = this.memberService.advisors.map((member) => ({
      id: `advisor-${member.slug}`,
      name: member.name,
      color: '#BF9874'
    }));

    const presidentLinks = presidentNodes.map(
      (node) => ['firstPresident', node.id] as [string, string]
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
      color: '#1a2942',
      borderColor: '#1a2942',
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
          textAlign: 'center'
        }
      },
      linkColor: 'rgba(26, 41, 66, 0.2)',
      nodes: [
        {
          id: 'firstPresident',
          name: t('organization.chart.nodes.firstPresident'),
          color: '#1a2942',
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
              textAlign: 'center'
            }
          }
        },
        ...presidentNodes,
        ...advisorNodes
      ]
    } as unknown as SeriesOptionsType;

    const options: Options = {
      chart: {
        type: 'organization',
        backgroundColor: 'transparent',
        height: 640,
        spacing: [10, 10, 10, 10]
      },
      title: { text: undefined },
      credits: { enabled: false },
      tooltip: { enabled: false },
      accessibility: {
        enabled: true,
        description: t('organization.chart.aria')
      },
      series: [organizationSeries]
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

  readonly filteredPresidents = computed(() => this.filterMembers(this.memberService.presidents, 'president'));
  readonly filteredAdvisors = computed(() => this.filterMembers(this.memberService.advisors, 'advisor'));
}
