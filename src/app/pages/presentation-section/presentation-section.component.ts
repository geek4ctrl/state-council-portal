import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { Location, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { I18nPipe } from '../../i18n/i18n.pipe';
import { FooterComponent } from '../../components/footer/footer.component';
import { MemberService, type Member } from '../../services/members.service';

const SECTION_MAP = {
  missions: {
    titleKey: 'about.rubrics.mission',
    bodyKey: 'about.legal.detail.paragraph1',
  },
  organisations: {
    titleKey: 'about.rubrics.organization',
    bodyKey: 'about.legal.detail.paragraph3',
  },
  fondements: {
    titleKey: 'about.rubrics.legalBasis',
    bodyKey: 'about.intro.body',
  },
  competences: {
    titleKey: 'about.rubrics.competences',
    bodyKey: 'about.legal.detail.paragraph5',
  },
  procedures: {
    titleKey: 'about.rubrics.procedureBeforeCouncil',
    bodyKey: 'about.legal.detail.paragraph6',
  },
  historique: {
    titleKey: 'history.title',
    bodyKey: 'history.body',
  },
  organigramme: {
    titleKey: 'organization.chart.title',
    bodyKey: 'organization.chart.subtitle',
  },
  'premiere-presidente': {
    titleKey: 'organization.firstPresident.title',
    bodyKey: 'organization.firstPresident.body',
  },
  'section-consultative': {
    titleKey: 'organization.chart.nodes.consultativeSection',
    bodyKey: 'organization.chart.subtitle',
  },
  'section-contentieux': {
    titleKey: 'organization.chart.nodes.litigationSection',
    bodyKey: 'organization.chart.subtitle',
  },
  'greffe-secretariat-general': {
    titleKey: 'organization.chart.nodes.registry',
    bodyKey: 'organization.chart.subtitle',
  },
} as const;

type SectionKey = keyof typeof SECTION_MAP;
type GreffeSection = 'presidents' | 'judges';
type GreffeFirstPresident = {
  name: string;
  years: string;
  image: string;
};

@Component({
  selector: 'app-presentation-section',
  standalone: true,
  imports: [I18nPipe, RouterLink, FooterComponent, NgOptimizedImage],
  template: `
    <div class="page-wrap section-page">
      @if (isOrganigramme()) {
        <section class="chart-hero presentation-hero">
          <div class="container">
            <button class="back-link" type="button" (click)="goBack()">
              {{ 'memberDetail.back' | i18n }}
            </button>
            <div class="hero-split">
              <div class="hero-left">
                <h1 class="hero-title">{{ 'organization.chart.title' | i18n }}</h1>
              </div>
              <span class="hero-divider" aria-hidden="true"></span>
              <p class="hero-body-text">{{ 'organization.chart.subtitle' | i18n }}</p>
            </div>
          </div>
        </section>

        <section class="chart-body">
          <div class="container">
            <div class="chart-structure" aria-label="{{ 'organization.chart.title' | i18n }}">
              <div class="org-chart">
                <div class="org-chart-tier">
                  <div class="org-node primary">
                    {{ 'organization.chart.nodes.firstPresident' | i18n }}
                  </div>
                </div>

                <div class="org-chart-connector" aria-hidden="true"></div>

                <div class="org-chart-tier">
                  <div class="org-node muted">
                    {{ 'organization.chart.nodes.consultativeSection' | i18n }}
                  </div>
                  <div class="org-node muted">
                    {{ 'organization.chart.nodes.litigationSection' | i18n }}
                  </div>
                </div>
              </div>
            </div>

            <div class="chart-names" aria-label="{{ 'organization.chart.peopleTitle' | i18n }}">
              <h3>{{ 'organization.chart.peopleTitle' | i18n }}</h3>
              <div class="leadership-photo-layout" role="list">
                <article class="leadership-photo-card top" role="listitem">
                  <div class="leadership-photo-frame">
                    <img
                      ngSrc="https://res.cloudinary.com/dhqvb8wbn/image/upload/v1772555485/Brigitte_NSENSELE_wa_NSENSELE_OK.jpg_ndsjzg.jpg"
                      [alt]="'organization.chart.namedPhotoRoles.firstPresident' | i18n"
                      width="320"
                      height="380"
                    />
                  </div>
                  <p class="leadership-photo-name">{{ 'organization.chart.peopleFirstPresidentName' | i18n }}</p>
                  <p class="leadership-photo-role">
                    {{ 'organization.chart.namedPhotoRoles.firstPresident' | i18n }}
                  </p>
                  <p class="leadership-photo-detail">{{ 'organization.orgPage.tiles.firstPresident' | i18n }}</p>
                </article>

                <div class="leadership-photo-row" role="listitem">
                  <article class="leadership-photo-card top">
                    <div class="leadership-photo-frame">
                      <img
                        ngSrc="https://res.cloudinary.com/dhqvb8wbn/image/upload/v1772556921/Eug%C3%A8ne_KIBWE_MUTER.jpg_bacl4e.jpg"
                        [alt]="'organization.chart.namedPhotoRoles.consultative' | i18n"
                        width="320"
                        height="380"
                      />
                    </div>
                    <p class="leadership-photo-name">{{ 'organization.chart.peopleConsultativePresidentName' | i18n }}</p>
                    <p class="leadership-photo-role">
                      {{ 'organization.chart.namedPhotoRoles.consultative' | i18n }}
                    </p>
                    <p class="leadership-photo-detail">{{ 'organization.orgPage.tiles.consultative' | i18n }}</p>
                  </article>

                  <article class="leadership-photo-card top">
                    <div class="leadership-photo-frame">
                      <img
                        ngSrc="https://res.cloudinary.com/dhqvb8wbn/image/upload/v1772556705/PRES_MASANI_40x50.jpg_ast5mq.jpg"
                        [alt]="'organization.chart.namedPhotoRoles.contentieux' | i18n"
                        width="320"
                        height="380"
                      />
                    </div>
                    <p class="leadership-photo-name">{{ 'organization.chart.peopleLitigationPresidentName' | i18n }}</p>
                    <p class="leadership-photo-role">
                      {{ 'organization.chart.namedPhotoRoles.contentieux' | i18n }}
                    </p>
                    <p class="leadership-photo-detail">{{ 'organization.orgPage.tiles.contentieux' | i18n }}</p>
                  </article>
                </div>
              </div>
            </div>

            <div class="roles-descriptions">
              <div class="role-block">
                <h3>{{ 'organization.orgPage.roles.firstPresident.title' | i18n }}</h3>
                <p>{{ 'organization.orgPage.roles.firstPresident.body' | i18n }}</p>
              </div>
              <div class="role-block">
                <h3>{{ 'organization.orgPage.roles.sectionPresidents.title' | i18n }}</h3>
                <p>{{ 'organization.orgPage.roles.sectionPresidents.body' | i18n }}</p>
              </div>
              <div class="role-block">
                <h3>{{ 'organization.orgPage.roles.chamberPresidents.title' | i18n }}</h3>
                <p>{{ 'organization.orgPage.roles.chamberPresidents.body' | i18n }}</p>
              </div>
              <div class="role-block">
                <h3>{{ 'organization.orgPage.roles.advisors.title' | i18n }}</h3>
                <p>{{ 'organization.orgPage.roles.advisors.body' | i18n }}</p>
              </div>
              <div class="role-block">
                <h3>{{ 'organization.orgPage.roles.registry.title' | i18n }}</h3>
                <p>{{ 'organization.orgPage.roles.registry.body' | i18n }}</p>
              </div>
            </div>

          </div>
        </section>
      } @else if (isPremierePresidente()) {
        <section class="fp-hero presentation-hero">
          <div class="container">
            <button class="back-link" type="button" (click)="goBack()">
              {{ 'memberDetail.back' | i18n }}
            </button>
            <div class="hero-split single">
              <div class="hero-left">
                <h1 class="hero-title">{{ 'organization.firstPresident.page.heroTitle' | i18n }}</h1>
              </div>
            </div>
          </div>
        </section>

        <section class="fp-intro">
          <div class="container">
            <div class="fp-intro-card">
              <div class="fp-intro-photo">
                <img
                  ngSrc="https://res.cloudinary.com/dhqvb8wbn/image/upload/v1772555485/Brigitte_NSENSELE_wa_NSENSELE_OK.jpg_ndsjzg.jpg"
                  alt="Brigitte Nsensele wa Nsensele"
                  width="320"
                  height="380"
                />
              </div>
              <div class="fp-intro-body">
                <h2>{{ 'organization.chart.namedPhotoRoles.firstPresident' | i18n }}</h2>
                <p>{{ 'organization.firstPresident.page.inauguration' | i18n }}</p>
              </div>
            </div>
          </div>
        </section>

        <section class="fp-biography">
          <div class="container">
            <div class="fp-bio-layout">
              <div class="fp-bio-text">
                <h2>{{ 'organization.firstPresident.page.biographyTitle' | i18n }}</h2>
                <p>{{ 'organization.firstPresident.page.biography' | i18n }}</p>
              </div>
              <div class="fp-bio-photo">
                <img
                  ngSrc="https://res.cloudinary.com/dhqvb8wbn/image/upload/v1772555485/Brigitte_NSENSELE_wa_NSENSELE_OK.jpg_ndsjzg.jpg"
                  alt="Brigitte Nsensele wa Nsensele"
                  width="280"
                  height="330"
                />
              </div>
            </div>
          </div>
        </section>

        <section class="fp-career">
          <div class="container">
            <h2>{{ 'organization.firstPresident.page.careerTitle' | i18n }}</h2>
            <ul class="fp-career-list">
              <li>{{ 'organization.firstPresident.page.career.1' | i18n }}</li>
              <li>{{ 'organization.firstPresident.page.career.2' | i18n }}</li>
              <li>{{ 'organization.firstPresident.page.career.3' | i18n }}</li>
              <li>{{ 'organization.firstPresident.page.career.4' | i18n }}</li>
              <li>{{ 'organization.firstPresident.page.career.5' | i18n }}</li>
            </ul>
          </div>
        </section>

        <section class="fp-honorary">
          <div class="container">
            <h2>{{ 'organization.firstPresident.page.honoraryTitle' | i18n }}</h2>
            <div class="fp-honorary-grid">
              <article class="fp-honorary-card">
                <div class="fp-honorary-photo">
                  <img
                    ngSrc="https://res.cloudinary.com/dhqvb8wbn/image/upload/v1772552204/F%C3%A9lix_VUNDUAWE_te_PEMAKO..jpg_1_usgopn.jpg"
                    alt="Félix Vunduawe te Pemako"
                    width="280"
                    height="330"
                  />
                </div>
                <h3>{{ 'organization.firstPresident.page.honorary.felix.name' | i18n }}</h3>
                <p class="fp-honorary-role">{{ 'organization.firstPresident.page.honorary.felix.role' | i18n }}</p>
                <p class="fp-honorary-years">{{ 'organization.firstPresident.page.honorary.felix.years' | i18n }}</p>
              </article>
              <article class="fp-honorary-card">
                <div class="fp-honorary-photo">
                  <img
                    ngSrc="https://res.cloudinary.com/dhqvb8wbn/image/upload/v1772554526/Marthe_ODIO_NONDE.jpg_1_pzymzp.jpg"
                    alt="Marthe Odio Nonde"
                    width="280"
                    height="330"
                  />
                </div>
                <h3>{{ 'organization.firstPresident.page.honorary.marthe.name' | i18n }}</h3>
                <p class="fp-honorary-role">{{ 'organization.firstPresident.page.honorary.marthe.role' | i18n }}</p>
                <p class="fp-honorary-years">{{ 'organization.firstPresident.page.honorary.marthe.years' | i18n }}</p>
              </article>
            </div>
          </div>
        </section>
      } @else if (isOrganisation()) {
        <section class="org-hero presentation-hero">
          <div class="container">
            <button class="back-link" type="button" (click)="goBack()">
              {{ 'memberDetail.back' | i18n }}
            </button>
            <div class="hero-split single">
              <div class="hero-left">
                <h1 class="hero-title">{{ 'organization.orgPage.hero.title' | i18n }}</h1>
              </div>
            </div>
          </div>
        </section>

        <section class="org-hero-body">
          <div class="container">
            <div class="org-hero-card">
              <div class="org-hero-grid">
                <div class="org-hero-media" aria-hidden="true">
                  <img src="assets/hero-group-photo.png" alt="" />
                </div>
                <div class="org-hero-copy">
                  <div class="org-detail-card">
                    <h2>{{ 'about.rubrics.organization' | i18n }}</h2>
                    <p>{{ 'about.legal.detail.paragraph3' | i18n }}</p>
                    <ul>
                      <li>{{ 'about.legal.detail.list2.1' | i18n }}</li>
                      <li>{{ 'about.legal.detail.list2.2' | i18n }}</li>
                      <li>{{ 'about.legal.detail.list2.3' | i18n }}</li>
                    </ul>
                    <p>{{ 'about.legal.detail.paragraph4' | i18n }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="org-tiles">
          <div class="container">
            <div class="org-grid">
              @for (tile of organisationTiles; track tile.section) {
                <a
                  class="org-tile"
                  [class.has-image]="!!tile.imageUrl"
                  [routerLink]="['/presentation', tile.section]"
                >
                  <div
                    class="org-tile-media"
                    [class.has-image]="!!tile.imageUrl"
                    [style.backgroundImage]="tile.imageUrl ? 'url(' + tile.imageUrl + ')' : null"
                    aria-hidden="true"
                  >
                    <span>{{ 'organization.about.imageLabel' | i18n }}</span>
                  </div>
                  <h3>{{ tile.titleKey | i18n }}</h3>
                </a>
              }
            </div>
          </div>
        </section>
      } @else if (isGreffe()) {
        <section class="greffe-hero presentation-hero">
          <div class="container">
            <button class="back-link" type="button" (click)="goBack()">
              {{ 'memberDetail.back' | i18n }}
            </button>
            <div class="hero-split">
              <div class="hero-left">
                <h1 class="hero-title">{{ 'organization.greffe.title' | i18n }}</h1>
              </div>
              <span class="hero-divider" aria-hidden="true"></span>
              <p class="hero-body-text">{{ 'organization.greffe.ariaLabel' | i18n }}</p>
            </div>
            <div
              class="greffe-tabs"
              role="tablist"
              [attr.aria-label]="'organization.greffe.ariaLabel' | i18n"
            >
              <button
                type="button"
                class="greffe-tab"
                [class.active]="isGreffePresidents()"
                (click)="setGreffeSection('presidents')"
              >
                {{ 'organization.greffe.tabs.presidents' | i18n }}
              </button>
              <button
                type="button"
                class="greffe-tab"
                [class.active]="isGreffeJudges()"
                (click)="setGreffeSection('judges')"
              >
                {{ 'organization.greffe.tabs.judges' | i18n }}
              </button>
            </div>

            @if (isGreffePresidents()) {
              <div class="greffe-card">
                <div class="greffe-card-image" aria-hidden="true">
                  {{ 'organization.about.imageLabel' | i18n }}
                </div>
                <div class="greffe-card-body">
                  <h2>{{ 'organization.greffe.cards.presidentsTitle' | i18n }}</h2>
                  <p>{{ 'organization.greffe.bodyPlaceholder' | i18n }}</p>
                </div>
              </div>
            } @else {
              <div class="greffe-card">
                <div class="greffe-card-image" aria-hidden="true">
                  {{ 'organization.about.imageLabel' | i18n }}
                </div>
                <div class="greffe-card-body">
                  <h2>{{ 'organization.greffe.cards.judgesTitle' | i18n }}</h2>
                  <p>{{ 'organization.greffe.bodyPlaceholder' | i18n }}</p>
                </div>
              </div>
            }
          </div>
        </section>

        <section class="greffe-list">
          <div class="container">
            @if (isGreffePresidents()) {
              <article class="greffe-item">
                <div class="greffe-photo">
                  <img
                    ngSrc="https://res.cloudinary.com/dhqvb8wbn/image/upload/v1772555485/Brigitte_NSENSELE_wa_NSENSELE_OK.jpg_ndsjzg.jpg"
                    alt="Brigitte Nsensele wa Nsensele"
                    width="120"
                    height="140"
                  />
                </div>
                <div class="greffe-text">
                  <h3>Brigitte Nsensele wa Nsensele</h3>
                  <p>2025 - a ce jour</p>
                </div>
              </article>

              <article class="greffe-item">
                <div class="greffe-photo">
                  <img
                    ngSrc="https://res.cloudinary.com/dhqvb8wbn/image/upload/v1772554526/Marthe_ODIO_NONDE.jpg_1_pzymzp.jpg"
                    alt="Marthe Odio Nonde"
                    width="120"
                    height="140"
                  />
                </div>
                <div class="greffe-text">
                  <h3>Marthe Odio Nonde</h3>
                  <p>2022 - 2025</p>
                </div>
              </article>

              <article class="greffe-item">
                <div class="greffe-photo">
                  <img
                    ngSrc="https://res.cloudinary.com/dhqvb8wbn/image/upload/v1772552204/F%C3%A9lix_VUNDUAWE_te_PEMAKO..jpg_1_usgopn.jpg"
                    alt="Felix Vunduawe te Pemako"
                    width="120"
                    height="140"
                  />
                </div>
                <div class="greffe-text">
                  <h3>Felix Vunduawe te Pemako</h3>
                  <p>2018 - 2022</p>
                </div>
              </article>
            } @else {
              <div class="greffe-judges">
                <h3 class="greffe-section-title">Les premiers presidents du Conseil d'Etat</h3>
                <div class="greffe-people">
                  @for (president of greffeFirstPresidents; track president.name) {
                    <article class="greffe-item">
                      <div class="greffe-photo">
                        <img
                          [ngSrc]="president.image"
                          [alt]="president.name"
                          width="120"
                          height="140"
                        />
                      </div>
                      <div class="greffe-text">
                        <h3>{{ president.name }}</h3>
                        <p>{{ president.years }}</p>
                      </div>
                    </article>
                  }
                </div>

                <h3 class="greffe-section-title">Les presidents du Conseil d'Etat</h3>
                <div class="greffe-people">
                  @for (president of greffePresidents(); track president.email) {
                    <article class="greffe-item">
                      <div class="greffe-photo">
                        <img
                          [ngSrc]="president.image"
                          [alt]="president.name"
                          width="120"
                          height="140"
                        />
                      </div>
                      <div class="greffe-text">
                        <h3>{{ president.name }}</h3>
                        <p>{{ president.title }}</p>
                      </div>
                    </article>
                  }
                </div>

                <h3 class="greffe-section-title">Les conseillers du Conseil d'Etat</h3>
                <div class="greffe-people">
                  @for (advisor of greffeAdvisors(); track advisor.email) {
                    <article class="greffe-item">
                      <div class="greffe-photo">
                        <img
                          [ngSrc]="advisor.image"
                          [alt]="advisor.name"
                          width="120"
                          height="140"
                        />
                      </div>
                      <div class="greffe-text">
                        <h3>{{ advisor.name }}</h3>
                        <p>{{ advisor.title }}</p>
                      </div>
                    </article>
                  }
                </div>
              </div>
            }
          </div>
        </section>
      } @else {
        <section class="section-hero presentation-hero">
          <div class="container">
            <button class="back-link" type="button" (click)="goBack()">
              {{ 'memberDetail.back' | i18n }}
            </button>
            <div class="hero-split" [class.single]="!showHeroBody()">
              <div class="hero-left">
                <h1 class="hero-title">{{ titleKey() | i18n }}</h1>
              </div>
              @if (showHeroBody()) {
                <span class="hero-divider" aria-hidden="true"></span>
                <p class="hero-body-text">{{ bodyKey() | i18n }}</p>
              }
            </div>
          </div>
        </section>

        <section class="section-body">
          <div class="container">
            @if (isMission()) {
              <div class="section-card">
                <p>{{ 'about.legal.detail.paragraph1' | i18n }}</p>
                <p>{{ 'about.legal.detail.paragraph2' | i18n }}</p>
                <ul>
                  <li>{{ 'about.legal.detail.list1.1' | i18n }}</li>
                  <li>{{ 'about.legal.detail.list1.2' | i18n }}</li>
                  <li>{{ 'about.legal.detail.list1.3' | i18n }}</li>
                  <li>{{ 'about.legal.detail.list1.4' | i18n }}</li>
                  <li>{{ 'about.legal.detail.list1.5' | i18n }}</li>
                </ul>
              </div>
            } @else if (isFondements()) {
              <div class="section-card">
                <p>{{ 'about.intro.body' | i18n }}</p>
                <ul>
                  <li>{{ 'about.legal.docs.1' | i18n }}</li>
                  <li>{{ 'about.legal.docs.2' | i18n }}</li>
                  <li>{{ 'about.legal.docs.3' | i18n }}</li>
                </ul>
              </div>
            } @else if (isProcedures()) {
              <div class="section-card">
                <p>{{ 'about.legal.detail.paragraph6' | i18n }}</p>
                <p>{{ 'about.legal.detail.paragraph7' | i18n }}</p>
                <p>{{ 'about.legal.detail.paragraph8' | i18n }}</p>
                <p>{{ 'about.legal.detail.paragraph9' | i18n }}</p>
              </div>
            } @else {
              <div class="section-card">
                <p>{{ bodyKey() | i18n }}</p>
              </div>
            }
          </div>
        </section>
      }

      <app-footer></app-footer>
    </div>
  `,
  styles: [
    `
      .section-page {
        min-height: 100vh;
        background: #f8f9fb;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
          Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
      }

      .container {
        max-width: 1100px;
        margin: 0 auto;
        padding: 0 20px;
      }

      .presentation-hero {
        position: relative;
        color: #ffffff;
        padding: 90px 0 70px;
        background:
          linear-gradient(90deg, rgba(16, 27, 43, 0.88) 0%, rgba(16, 27, 43, 0.64) 55%, rgba(16, 27, 43, 0.42) 100%),
          url('https://placehold.co/1920x400/82BCDC/ffffff?text=') center/cover;
        overflow: hidden;
      }

      .presentation-hero::after {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at 20% 20%, rgba(31, 155, 217, 0.2), transparent 55%);
        pointer-events: none;
      }

      .presentation-hero .container {
        position: relative;
        z-index: 1;
      }

      .presentation-hero .back-link {
        color: #f8fbff;
        background: rgba(255, 255, 255, 0.14);
        border-color: rgba(255, 255, 255, 0.45);
        box-shadow: 0 12px 26px rgba(15, 23, 42, 0.35);
      }

      .hero-split {
        display: grid;
        grid-template-columns: minmax(0, 1.1fr) 1px minmax(0, 1fr);
        gap: 34px;
        align-items: center;
      }

      .hero-left {
        text-align: center;
      }

      .hero-split.single {
        grid-template-columns: 1fr;
      }

      .hero-split.single .hero-divider {
        display: none;
      }

      .hero-divider {
        width: 1px;
        height: 110px;
        background: rgba(255, 255, 255, 0.6);
      }

      .hero-kicker {
        margin: 0 0 10px;
        font-size: 0.9rem;
        letter-spacing: 3px;
        color: rgba(148, 210, 240, 0.95);
        font-weight: 600;
      }

      .hero-title {
        margin: 0;
        font-size: clamp(2.2rem, 4.8vw, 3.1rem);
        letter-spacing: 2px;
        color: #ffffff;
      }

      .hero-body-text {
        margin: 0;
        font-size: 1rem;
        line-height: 1.7;
        color: rgba(255, 255, 255, 0.85);
      }

      .back-link {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: #1a2942;
        text-decoration: none;
        font-weight: 600;
        letter-spacing: 0.6px;
        margin-bottom: 20px;
        background: #f4f9ff;
        border: 1px solid rgba(31, 155, 217, 0.35);
        padding: 8px 16px;
        border-radius: 999px;
        box-shadow: 0 10px 22px rgba(31, 155, 217, 0.12);
        cursor: pointer;
        transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
      }

      .back-link:hover {
        border-color: rgba(31, 155, 217, 0.6);
        box-shadow: 0 14px 28px rgba(31, 155, 217, 0.18);
        transform: translateY(-1px);
      }

      .back-link:focus-visible {
        outline: 2px solid rgba(31, 155, 217, 0.6);
        outline-offset: 3px;
      }

      .section-title {
        font-size: 2.4rem;
        font-weight: 700;
        margin: 0 0 16px;
        letter-spacing: 1px;
      }

      .section-body {
        padding: 60px 0 80px;
      }

      .section-card {
        background: #ffffff;
        padding: 40px 45px;
        border-radius: 16px;
        box-shadow: 0 14px 30px rgba(26, 41, 66, 0.12);
      }

      .section-card h2 {
        margin: 0 0 16px;
        font-size: 1.6rem;
        color: #1a1a1a;
      }

      .section-card p {
        margin: 0;
        color: #374151;
        line-height: 1.8;
        font-size: 0.98rem;
        text-align: left;
      }

      .section-card ul {
        margin: 16px 0;
        padding-left: 22px;
      }

      .section-card li {
        margin-bottom: 14px;
        line-height: 1.7;
      }

      .section-card li:last-child {
        margin-bottom: 0;
      }


      .org-hero {
        padding: 90px 0 70px;
      }

      .org-hero-body {
        background: #f8f9fb;
        padding: 40px 0 60px;
      }

      .org-hero-body .container {
        max-width: 1100px;
      }

      .org-hero-card {
        background: #ffffff;
        border-radius: 20px;
        padding: 32px 34px;
        box-shadow: 0 16px 34px rgba(26, 41, 66, 0.12);
      }

      .chart-hero {
        padding: 90px 0 70px;
      }

      .chart-hero .back-link {
        width: fit-content;
      }

      .chart-body {
        background: #f8f9fb;
        padding: 20px 0 80px;
      }

      .chart-card {
        background: #ffffff;
        border-radius: 18px;
        padding: 26px 30px;
        box-shadow: 0 14px 30px rgba(26, 41, 66, 0.12);
        margin-top: -70px;
      }

      .chart-card h2 {
        margin: 0 0 8px;
        font-size: 1.35rem;
      }

      .chart-card p {
        margin: 0;
        color: #4b5563;
      }

      .chart-media {
        margin: 30px 0 24px;
        background: linear-gradient(135deg, rgba(31, 155, 217, 0.12), rgba(26, 41, 66, 0.08));
        border-radius: 20px;
        min-height: 240px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        letter-spacing: 2px;
        color: #1a2942;
      }


      .chart-section-title {
        margin: 0 0 18px;
        font-size: 1.2rem;
        letter-spacing: 1.2px;
        color: #1a1a1a;
        text-align: center;
      }

      .chart-names h3 {
        margin: 0 0 12px;
        font-size: 1.2rem;
        letter-spacing: 1px;
        color: #1a1a1a;
        text-align: center;
      }

      .org-list {
        margin: 18px 0 0;
      }

      .org-list p {
        margin: 0 0 10px;
        font-size: 1rem;
        color: #1a1a1a;
      }

      .chart-structure {
        margin: 0 0 32px;
        background: #ffffff;
        border-radius: 20px;
        padding: 28px 20px;
        box-shadow: 0 10px 26px rgba(26, 41, 66, 0.1);
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
        letter-spacing: 1.3px;
        font-size: 0.75rem;
        box-shadow: 0 8px 20px rgba(26, 41, 66, 0.1);
      }

      .org-node.primary {
        background: linear-gradient(135deg, #1ea2dd 0%, #82bcdc 100%);
        color: #ffffff;
        border-color: #1ea2dd;
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

      .chart-names {
        margin-bottom: 28px;
      }

      .leadership-photo-layout {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
      }

      .leadership-photo-row {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        justify-items: center;
        gap: 24px;
        max-width: 900px;
      }

      .leadership-photo-card {
        background: #ffffff;
        border: 1px solid rgba(26, 41, 66, 0.12);
        border-radius: 16px;
        box-shadow: 0 10px 28px rgba(26, 41, 66, 0.12);
        padding: 12px;
      }

      .leadership-photo-card.top {
        max-width: 430px;
        width: 100%;
      }

      .leadership-photo-frame {
        border-radius: 12px;
        overflow: hidden;
        background: transparent;
        aspect-ratio: 4 / 5;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .leadership-photo-frame img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        display: block;
      }

      .leadership-photo-name {
        margin: 10px 0 2px;
        text-align: center;
        font-size: 0.85rem;
        font-weight: 700;
        color: #1a2942;
        line-height: 1.4;
      }

      .leadership-photo-role {
        margin: 2px 0 4px;
        text-align: center;
        font-size: 0.82rem;
        font-weight: 700;
        letter-spacing: 1px;
        color: #1a2942;
        line-height: 1.45;
      }

      .leadership-photo-detail {
        margin: 8px 0 0;
        text-align: center;
        font-size: 0.78rem;
        color: #555;
        line-height: 1.6;
      }

      .roles-descriptions {
        margin-top: 60px;
      }

      /* First President Page */
      .fp-intro {
        padding: 60px 0 40px;
        background: #fff;
      }

      .fp-intro-card {
        display: flex;
        gap: 40px;
        align-items: flex-start;
        background: #f8f9fb;
        border-radius: 16px;
        padding: 32px;
      }

      .fp-intro-photo {
        flex-shrink: 0;
        width: 220px;
        border-radius: 12px;
        overflow: hidden;
      }

      .fp-intro-photo img {
        width: 100%;
        height: auto;
        display: block;
        object-fit: cover;
      }

      .fp-intro-body {
        flex: 1;
      }

      .fp-intro-body h2 {
        font-size: 1.4rem;
        font-weight: 700;
        color: #1a2942;
        margin: 0 0 16px;
      }

      .fp-intro-body p {
        font-size: 0.95rem;
        color: #333;
        line-height: 1.8;
        margin: 0;
        text-align: justify;
      }

      .fp-biography {
        padding: 50px 0;
        background: #fff;
      }

      .fp-bio-layout {
        display: flex;
        gap: 40px;
        align-items: flex-start;
      }

      .fp-bio-text {
        flex: 1;
      }

      .fp-bio-text h2 {
        font-size: 1.3rem;
        font-weight: 700;
        color: #1a2942;
        margin: 0 0 16px;
      }

      .fp-bio-text p {
        font-size: 0.95rem;
        color: #333;
        line-height: 1.8;
        text-align: justify;
        margin: 0;
      }

      .fp-bio-photo {
        flex-shrink: 0;
        width: 200px;
        border-radius: 12px;
        overflow: hidden;
        border: 3px solid #e8e8e8;
      }

      .fp-bio-photo img {
        width: 100%;
        height: auto;
        display: block;
        object-fit: cover;
      }

      .fp-career {
        padding: 50px 0;
        background: #f8f9fb;
      }

      .fp-career h2 {
        font-size: 1.3rem;
        font-weight: 700;
        color: #1a2942;
        margin: 0 0 24px;
      }

      .fp-career-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .fp-career-list li {
        position: relative;
        padding: 12px 0 12px 24px;
        font-size: 0.95rem;
        color: #333;
        line-height: 1.6;
        border-bottom: 1px solid #e5e5e5;
      }

      .fp-career-list li::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #1a2942;
      }

      .fp-honorary {
        padding: 60px 0;
        background: #fff;
      }

      .fp-honorary h2 {
        font-size: 1.3rem;
        font-weight: 700;
        color: #1a2942;
        margin: 0 0 32px;
      }

      .fp-honorary-grid {
        display: flex;
        gap: 40px;
        flex-wrap: wrap;
      }

      .fp-honorary-card {
        flex: 0 0 auto;
        width: 240px;
        text-align: center;
      }

      .fp-honorary-photo {
        width: 100%;
        border-radius: 12px;
        overflow: hidden;
        margin-bottom: 12px;
        border: 3px solid #e8e8e8;
      }

      .fp-honorary-photo img {
        width: 100%;
        height: auto;
        display: block;
        object-fit: cover;
      }

      .fp-honorary-card h3 {
        font-size: 0.95rem;
        font-weight: 700;
        color: #1a2942;
        margin: 0 0 4px;
      }

      .fp-honorary-role {
        font-size: 0.85rem;
        color: #555;
        margin: 0 0 2px;
      }

      .fp-honorary-years {
        font-size: 0.82rem;
        color: #888;
        margin: 0;
      }

      @media (max-width: 768px) {
        .fp-intro-card {
          flex-direction: column;
          align-items: center;
        }

        .fp-intro-photo {
          width: 180px;
        }

        .fp-bio-layout {
          flex-direction: column;
        }

        .fp-bio-photo {
          width: 160px;
          align-self: center;
        }

        .fp-honorary-grid {
          justify-content: center;
        }

        .fp-honorary-card {
          width: 200px;
        }
      }

      .role-block {
        margin-bottom: 24px;
      }

      .role-block h3 {
        font-size: 1rem;
        font-weight: 700;
        color: #1a2942;
        margin: 0 0 6px;
      }

      .role-block p {
        font-size: 0.92rem;
        color: #333;
        line-height: 1.7;
        margin: 0;
        text-align: justify;
      }


      .org-hero-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 40px;
        align-items: stretch;
      }

      .org-hero-media {
        // background: linear-gradient(135deg, rgba(31, 155, 217, 0.12), rgba(26, 41, 66, 0.08));
        border-radius: 18px;
        min-height: 220px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        letter-spacing: 2px;
        color: #1a2942;
        overflow: hidden;
      }

      .org-hero-copy {
        min-height: 220px;
      }

      .org-hero-media img {
        width: 100%;
        height: 70%;
        object-fit: cover;
        display: block;
      }

      .org-hero-title {
        margin: 0 0 12px;
        font-size: 2.2rem;
        color: #1a1a1a;
        letter-spacing: 1px;
      }

      .org-hero-subtitle {
        margin: 0 0 16px;
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: 2px;
        color: #1f9bd9;
      }

      .org-hero-body {
        margin: 0;
        color: #4b5563;
        line-height: 1.8;
      }

      .org-detail-card {
        margin-top: 28px;
        background: #ffffff;
        border-radius: 14px;
        padding: 24px 26px;
        border-left: 4px solid #82bcdc;
        box-shadow: 0 12px 24px rgba(26, 41, 66, 0.1);
      }

      .org-detail-card h2 {
        margin: 0 0 12px;
        font-size: 1.1rem;
        font-weight: 700;
        color: #1a1a1a;
      }

      .org-detail-card p {
        margin: 0 0 12px;
        color: #374151;
        line-height: 1.7;
        font-size: 0.95rem;
      }

      .org-detail-card ul {
        margin: 12px 0;
        padding-left: 20px;
        color: #374151;
      }

      .org-detail-card li {
        margin-bottom: 8px;
        line-height: 1.6;
        font-size: 0.95rem;
      }

      .org-tiles {
        position: relative;
        background: radial-gradient(circle at 15% 20%, rgba(31, 155, 217, 0.12), transparent 45%),
          radial-gradient(circle at 85% 10%, rgba(250, 204, 84, 0.16), transparent 50%),
          linear-gradient(180deg, #f7f9fb 0%, #edf2f7 100%);
        padding: 20px 0 90px;
        overflow: hidden;
      }

      .org-tiles::before,
      .org-tiles::after {
        content: '';
        position: absolute;
        width: 260px;
        height: 260px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(31, 155, 217, 0.18), transparent 70%);
        pointer-events: none;
      }

      .org-tiles::before {
        top: -80px;
        left: -60px;
      }

      .org-tiles::after {
        bottom: -120px;
        right: -40px;
        background: radial-gradient(circle, rgba(26, 41, 66, 0.14), transparent 70%);
      }

      .greffe-hero {
        padding: 90px 0 50px;
      }

      .greffe-hero .hero-split {
        gap: 48px;
      }

      .greffe-hero .hero-title {
        line-height: 1.05;
      }

      .greffe-hero .back-link {
        color: #ffffff;
      }

      .greffe-title {
        margin: 12px 0 28px;
        font-size: 2rem;
        letter-spacing: 1px;
        color: #1a1a1a;
      }

      .greffe-bullets {
        list-style: none;
        padding: 0;
        margin: 0 0 24px;
      }

      .greffe-tabs {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        margin: 0 0 24px;
      }

      .greffe-hero .greffe-tabs {
        gap: 12px;
        margin-top: 28px;
      }

      .greffe-tab {
        background: transparent;
        border: none;
        padding: 6px 2px;
        font-size: 1.05rem;
        color: #374151;
        cursor: pointer;
        text-align: left;
        position: relative;
        transition: color 0.2s ease, transform 0.2s ease;
      }

      .greffe-hero .greffe-tab {
        color: rgba(248, 251, 255, 0.82);
        background: rgba(255, 255, 255, 0.14);
        border: 1px solid rgba(255, 255, 255, 0.28);
        padding: 8px 16px;
        border-radius: 999px;
        letter-spacing: 0.4px;
      }

      .greffe-tab.active {
        color: #0f172a;
        font-weight: 700;
        transform: translateY(-1px);
      }

      .greffe-hero .greffe-tab.active {
        color: #ffffff;
        background: rgba(255, 255, 255, 0.28);
        border-color: rgba(255, 255, 255, 0.6);
        box-shadow: 0 10px 22px rgba(15, 23, 42, 0.28);
      }

      .greffe-tab.active::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -8px;
        height: 3px;
        border-radius: 999px;
        background: linear-gradient(90deg, #1f9bd9, #1a2942);
        box-shadow: 0 6px 16px rgba(31, 155, 217, 0.35);
      }

      .greffe-hero .greffe-tab.active::after {
        opacity: 0;
      }

      .greffe-card {
        display: grid;
        grid-template-columns: minmax(220px, 1fr) 1.4fr;
        gap: 24px;
        background: #ffffff;
        border-radius: 18px;
        padding: 24px;
        box-shadow: 0 14px 30px rgba(26, 41, 66, 0.12);
      }

      .greffe-card-image {
        background: linear-gradient(135deg, rgba(31, 155, 217, 0.12), rgba(26, 41, 66, 0.08));
        border-radius: 16px;
        min-height: 160px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        letter-spacing: 2px;
        color: #1a2942;
      }

      .greffe-card-body h2 {
        margin: 0 0 10px;
        font-size: 1.2rem;
        letter-spacing: 1px;
      }

      .greffe-card-body p {
        margin: 0;
        color: #4b5563;
      }

      .greffe-list {
        background: #f8f9fb;
        padding: 30px 0 80px;
      }

      .greffe-placeholder {
        background: #ffffff;
        border-radius: 16px;
        padding: 24px;
        color: #4b5563;
        box-shadow: 0 10px 24px rgba(26, 41, 66, 0.1);
      }

      .greffe-judges {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }

      .greffe-section-title {
        margin: 8px 0 8px;
        font-size: 1.1rem;
        letter-spacing: 1px;
        color: #1a1a1a;
      }

      .greffe-people {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;
      }

      .greffe-item {
        display: grid;
        grid-template-columns: 120px 1fr;
        gap: 20px;
        align-items: center;
        background: #ffffff;
        padding: 18px 20px;
        border-radius: 16px;
        box-shadow: 0 10px 24px rgba(26, 41, 66, 0.1);
        margin-bottom: 16px;
      }

      .greffe-photo {
        width: 120px;
        height: 140px;
        border-radius: 12px;
        overflow: hidden;
        background: #f1f5f9;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .greffe-photo img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .greffe-text h3 {
        margin: 0 0 6px;
        font-size: 1.05rem;
        letter-spacing: 1px;
      }

      .greffe-text p {
        margin: 0;
        color: #4b5563;
      }

      .org-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 28px;
        position: relative;
        z-index: 1;
      }

      .org-tile {
        display: block;
        background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
        border-radius: 18px;
        border: 1px solid rgba(26, 41, 66, 0.12);
        box-shadow: 0 12px 30px rgba(26, 41, 66, 0.14);
        overflow: hidden;
        text-align: center;
        color: inherit;
        text-decoration: none;
        position: relative;
        transform: translateY(0);
        transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        animation: tileFloat 0.7s ease both;
      }

      .org-tile.has-image {
        color: #f8fafc;
        min-height: 240px;
        display: flex;
        align-items: flex-end;
      }

      .org-tile::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background: linear-gradient(120deg, rgba(31, 155, 217, 0.12), transparent 50%);
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
      }

      .org-tile:hover {
        transform: translateY(-6px);
        box-shadow: 0 18px 36px rgba(26, 41, 66, 0.2);
        border-color: rgba(31, 155, 217, 0.35);
      }

      .org-tile:hover::after {
        opacity: 1;
      }

      .org-tile:focus-visible {
        outline: 2px solid rgba(31, 155, 217, 0.7);
        outline-offset: 3px;
      }

      .org-tile-media {
        height: 165px;
        background: linear-gradient(140deg, rgba(31, 155, 217, 0.18), rgba(26, 41, 66, 0.08)),
          repeating-linear-gradient(135deg, rgba(31, 155, 217, 0.08) 0 10px, transparent 10px 20px);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        letter-spacing: 3px;
        color: #1a2942;
        border-bottom: 1px solid rgba(26, 41, 66, 0.08);
        position: relative;
      }

      .org-tile-media span {
        position: relative;
        z-index: 1;
      }

      .org-tile-media.has-image {
        background-size: cover;
        background-position: top center;
        background-repeat: no-repeat;
      }

      .org-tile.has-image .org-tile-media {
        position: absolute;
        inset: 0;
        height: 100%;
        border-bottom: none;
      }

      .org-tile-media.has-image::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(15, 23, 42, 0.05), rgba(15, 23, 42, 0.6));
      }

      .org-tile-media.has-image span {
        opacity: 0;
      }

      .org-tile h3 {
        margin: 16px 20px 22px;
        font-size: 0.95rem;
        letter-spacing: 1.6px;
        color: #0f172a;
        line-height: 1.4;
      }

      .org-tile.has-image h3 {
        margin: 0;
        padding: 18px 20px 22px;
        position: relative;
        z-index: 1;
        color: #f8fafc;
        background: linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, rgba(15, 23, 42, 0.72) 100%);
        width: 100%;
      }

      .org-tile:nth-child(1) {
        animation-delay: 0.05s;
      }

      .org-tile:nth-child(2) {
        animation-delay: 0.1s;
      }

      .org-tile:nth-child(3) {
        animation-delay: 0.15s;
      }

      .org-tile:nth-child(4) {
        animation-delay: 0.2s;
      }

      .org-tile:nth-child(5) {
        animation-delay: 0.25s;
      }

      .org-tile:nth-child(6) {
        animation-delay: 0.3s;
      }

      @keyframes tileFloat {
        from {
          opacity: 0;
          transform: translateY(12px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @media (max-width: 768px) {
        .hero-split {
          grid-template-columns: 1fr;
          gap: 18px;
        }

        .hero-divider {
          display: none;
        }

        .section-hero {
          padding: 60px 0 50px;
        }

        .section-title {
          font-size: 2rem;
        }

        .section-card {
          padding: 30px 26px;
        }

        .org-hero-grid {
          grid-template-columns: 1fr;
        }

        .org-hero-title {
          font-size: 1.8rem;
        }

        .org-grid {
          grid-template-columns: 1fr;
        }

        .greffe-card {
          grid-template-columns: 1fr;
        }

        .greffe-item {
          grid-template-columns: 1fr;
          text-align: left;
        }

        .greffe-people {
          grid-template-columns: 1fr;
        }

        .chart-title {
          font-size: 2rem;
        }

        .chart-card {
          margin-top: -50px;
        }

        .chart-structure {
          padding: 22px 16px;
        }

        .leadership-photo-row {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 480px) {
        .section-title {
          font-size: 1.7rem;
        }

        .section-card {
          padding: 26px 20px;
        }
      }
    `,
  ],
})
export class PresentationSectionComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private location = inject(Location);
  private memberService = inject(MemberService);
  private sectionKey = signal<SectionKey>('missions');
  private greffeSection = signal<GreffeSection>('presidents');

  readonly titleKey = computed(() => SECTION_MAP[this.sectionKey()].titleKey);
  readonly bodyKey = computed(() => SECTION_MAP[this.sectionKey()].bodyKey);
  readonly isOrganigramme = computed(() => this.sectionKey() === 'organigramme');
  readonly isPremierePresidente = computed(() => this.sectionKey() === 'premiere-presidente');
  readonly isOrganisation = computed(() => this.sectionKey() === 'organisations');
  readonly isMission = computed(() => this.sectionKey() === 'missions');
  readonly isFondements = computed(() => this.sectionKey() === 'fondements');
  readonly isProcedures = computed(() => this.sectionKey() === 'procedures');
  readonly isHistorique = computed(() => this.sectionKey() === 'historique');
  readonly isCompetences = computed(() => this.sectionKey() === 'competences');
  readonly isGreffe = computed(() => this.sectionKey() === 'greffe-secretariat-general');
  readonly isGreffePresidents = computed(() => this.greffeSection() === 'presidents');
  readonly isGreffeJudges = computed(() => this.greffeSection() === 'judges');
  readonly showHeroBody = computed(
    () =>
      !this.isMission() &&
      !this.isFondements() &&
      !this.isProcedures() &&
      !this.isHistorique() &&
      !this.isCompetences()
  );
  readonly greffePresidents = computed(() =>
    this.memberService.members.filter((member) => member.role === 'president')
  );
  readonly greffeAdvisors = computed(() =>
    this.memberService.members.filter((member) => member.role === 'advisor')
  );
  readonly greffeFirstPresidents: GreffeFirstPresident[] = [
    {
      name: 'Brigitte Nsensele wa Nsensele',
      years: '2025 - a ce jour',
      image:
        'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1772555485/Brigitte_NSENSELE_wa_NSENSELE_OK.jpg_ndsjzg.jpg',
    },
    {
      name: 'Marthe Odio Nonde',
      years: '2022 - 2025',
      image:
        'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1772554526/Marthe_ODIO_NONDE.jpg_1_pzymzp.jpg',
    },
    {
      name: 'Felix Vunduawe te Pemako',
      years: '2018 - 2022',
      image:
        'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1772552204/F%C3%A9lix_VUNDUAWE_te_PEMAKO..jpg_1_usgopn.jpg',
    },
  ];
  readonly organisationTiles = [
    {
      titleKey: 'organization.orgPage.tiles.organigramme',
      section: 'organigramme',
      imageUrl:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    },
    {
      titleKey: 'organization.orgPage.tiles.firstPresident',
      section: 'premiere-presidente',
      imageUrl:
        'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1772555485/Brigitte_NSENSELE_wa_NSENSELE_OK.jpg_ndsjzg.jpg',
    },
    {
      titleKey: 'organization.orgPage.tiles.consultative',
      section: 'section-consultative',
      imageUrl:
        'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1772556921/Eug%C3%A8ne_KIBWE_MUTER.jpg_bacl4e.jpg',
    },
    {
      titleKey: 'organization.orgPage.tiles.contentieux',
      section: 'section-contentieux',
      imageUrl:
        'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1772556705/PRES_MASANI_40x50.jpg_ast5mq.jpg',
    },
    {
      titleKey: 'organization.orgPage.tiles.registry',
      section: 'greffe-secretariat-general',
      imageUrl:
        'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const section = params.get('section') as SectionKey | null;
      if (section && SECTION_MAP[section]) {
        this.sectionKey.set(section);
      }
    });
  }

  goBack() {
    this.location.back();
  }

  setGreffeSection(section: GreffeSection) {
    this.greffeSection.set(section);
  }
}
