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
        <section class="chart-hero">
          <div class="container">
            <button class="back-link" type="button" (click)="goBack()">
              {{ 'memberDetail.back' | i18n }}
            </button>
            <h1 class="chart-title">{{ 'organization.chart.title' | i18n }}</h1>
            <p class="chart-subtitle">{{ 'organization.chart.subtitle' | i18n }}</p>
          </div>
        </section>

        <section class="chart-body">
          <div class="container">
            <h2 class="chart-section-title">{{ 'organization.orgPage.organigramme.title' | i18n }}</h2>
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
                  <p class="leadership-photo-role">
                    {{ 'organization.chart.namedPhotoRoles.firstPresident' | i18n }}
                  </p>
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
                    <p class="leadership-photo-role">
                      {{ 'organization.chart.namedPhotoRoles.consultative' | i18n }}
                    </p>
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
                    <p class="leadership-photo-role">
                      {{ 'organization.chart.namedPhotoRoles.contentieux' | i18n }}
                    </p>
                  </article>
                </div>
              </div>
            </div>

            <div class="org-list" aria-label="{{ 'organization.orgPage.organigramme.title' | i18n }}">
              <p>{{ 'organization.orgPage.tiles.firstPresident' | i18n }}</p>
              <p>{{ 'organization.orgPage.tiles.consultative' | i18n }}</p>
              <p>{{ 'organization.orgPage.tiles.contentieux' | i18n }}</p>
            </div>

          </div>
        </section>
      } @else if (isOrganisation()) {
        <section class="org-hero">
          <div class="container">
            <button class="back-link" type="button" (click)="goBack()">
              {{ 'memberDetail.back' | i18n }}
            </button>
            <div class="org-hero-grid">
              <div class="org-hero-media" aria-hidden="true">
                {{ 'organization.orgPage.photoLabel' | i18n }}
              </div>
              <div class="org-hero-copy">
                <h1 class="org-hero-title">{{ 'organization.orgPage.hero.title' | i18n }}</h1>
                <p class="org-hero-subtitle">{{ 'organization.orgPage.hero.subtitle' | i18n }}</p>
                <p class="org-hero-body">
                  {{ 'organization.orgPage.hero.body' | i18n }}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="org-tiles">
          <div class="container">
            <div class="org-grid">
              @for (tile of organisationTiles; track tile.section) {
                <a class="org-tile" [routerLink]="['/presentation', tile.section]">
                  <div class="org-tile-media" aria-hidden="true">
                    {{ 'organization.about.imageLabel' | i18n }}
                  </div>
                  <h3>{{ tile.titleKey | i18n }}</h3>
                </a>
              }
            </div>
          </div>
        </section>
      } @else if (isGreffe()) {
        <section class="greffe-hero">
          <div class="container">
            <button class="back-link" type="button" (click)="goBack()">
              {{ 'memberDetail.back' | i18n }}
            </button>
            <h1 class="greffe-title">Greffe et archives (secretariat general)</h1>
            <div class="greffe-tabs" role="tablist" aria-label="Greffe sections">
              <button
                type="button"
                class="greffe-tab"
                [class.active]="isGreffePresidents()"
                (click)="setGreffeSection('presidents')"
              >
                Les premiers presidents
              </button>
              <button
                type="button"
                class="greffe-tab"
                [class.active]="isGreffeJudges()"
                (click)="setGreffeSection('judges')"
              >
                Les juges du Conseil d'Etat
              </button>
            </div>

            @if (isGreffePresidents()) {
              <div class="greffe-card">
                <div class="greffe-card-image" aria-hidden="true">Image</div>
                <div class="greffe-card-body">
                  <h2>Les premiers presidents du Conseil d'Etat</h2>
                  <p>Texte</p>
                </div>
              </div>
            } @else {
              <div class="greffe-card">
                <div class="greffe-card-image" aria-hidden="true">Image</div>
                <div class="greffe-card-body">
                  <h2>Les juges du Conseil d'Etat</h2>
                  <p>Texte</p>
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
        <section class="section-hero">
          <div class="container">
            <button class="back-link" type="button" (click)="goBack()">
              {{ 'memberDetail.back' | i18n }}
            </button>
            <h1 class="section-title">{{ titleKey() | i18n }}</h1>
            @if (!isMission() && !isFondements() && !isProcedures() && !isHistorique() && !isCompetences()) {
              <p class="section-subtitle">{{ bodyKey() | i18n }}</p>
            }
          </div>
        </section>

        <section class="section-body">
          <div class="container">
            @if (isMission()) {
              <div class="section-card">
                <h2>{{ titleKey() | i18n }}</h2>
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
                <h2>{{ titleKey() | i18n }}</h2>
                <p>{{ 'about.intro.body' | i18n }}</p>
                <ul>
                  <li>{{ 'about.legal.docs.1' | i18n }}</li>
                  <li>{{ 'about.legal.docs.2' | i18n }}</li>
                  <li>{{ 'about.legal.docs.3' | i18n }}</li>
                </ul>
              </div>
            } @else if (isProcedures()) {
              <div class="section-card">
                <h2>{{ titleKey() | i18n }}</h2>
                <p>{{ 'about.legal.detail.paragraph6' | i18n }}</p>
                <p>{{ 'about.legal.detail.paragraph7' | i18n }}</p>
                <p>{{ 'about.legal.detail.paragraph8' | i18n }}</p>
                <p>{{ 'about.legal.detail.paragraph9' | i18n }}</p>
              </div>
            } @else {
              <div class="section-card">
                <h2>{{ titleKey() | i18n }}</h2>
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
      @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600&display=swap');

      .section-page {
        min-height: 100vh;
        background: #f8f9fb;
      }

      .container {
        max-width: 1100px;
        margin: 0 auto;
        padding: 0 20px;
      }

      .section-hero {
        background: #ffffff;
        color: #1a1a1a;
        padding: 80px 0 70px;
      }

      .section-hero .back-link {
        color: #1a2942;
      }

      .back-link {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: #cfe7f7;
        text-decoration: none;
        font-weight: 600;
        letter-spacing: 0.8px;
        margin-bottom: 20px;
        background: transparent;
        border: none;
        padding: 0;
        border-radius: 0;
        box-shadow: none;
        cursor: pointer;
      }

      .section-title {
        font-size: 2.4rem;
        font-weight: 700;
        margin: 0 0 16px;
        letter-spacing: 1px;
      }

      .section-subtitle {
        font-size: 1rem;
        line-height: 1.7;
        color: rgba(255, 255, 255, 0.85);
        margin: 0;
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


      .org-hero {
        background: #ffffff;
        padding: 70px 0 40px;
      }

      .org-hero .back-link {
        color: #1a2942;
      }

      .chart-hero {
        background: #ffffff;
        color: #1a1a1a;
        padding: 70px 0 80px;
        text-align: center;
      }

      .chart-hero .back-link {
        color: #1a2942;
        width: 100%;
        justify-content: flex-start;
      }

      .chart-title {
        margin: 30px 0 10px;
        font-size: 2.6rem;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #1a1a1a;
      }

      .chart-subtitle {
        margin: 0;
        color: #4b5563;
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
        text-transform: uppercase;
        color: #1a2942;
      }


      .chart-section-title {
        margin: 0 0 18px;
        font-size: 1.2rem;
        text-transform: uppercase;
        letter-spacing: 1.2px;
        color: #1a1a1a;
        text-align: center;
      }

      .chart-names h3 {
        margin: 0 0 12px;
        font-size: 1.2rem;
        text-transform: uppercase;
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
        text-transform: uppercase;
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

      .leadership-photo-role {
        margin: 10px 0 4px;
        text-align: center;
        font-size: 0.82rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #1a2942;
        line-height: 1.45;
      }


      .org-hero-grid {
        display: grid;
        grid-template-columns: minmax(240px, 320px) 1fr;
        gap: 40px;
        align-items: center;
      }

      .org-hero-media {
        background: linear-gradient(135deg, rgba(31, 155, 217, 0.12), rgba(26, 41, 66, 0.08));
        border-radius: 18px;
        min-height: 260px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #1a2942;
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
        text-transform: uppercase;
        letter-spacing: 2px;
        color: #1f9bd9;
      }

      .org-hero-body {
        margin: 0;
        color: #4b5563;
        line-height: 1.8;
      }

      .org-tiles {
        background: #f8f9fb;
        padding: 10px 0 80px;
      }

      .greffe-hero {
        background: #ffffff;
        padding: 70px 0 40px;
      }

      .greffe-title {
        margin: 12px 0 16px;
        font-size: 2rem;
        letter-spacing: 1px;
        text-transform: uppercase;
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

      .greffe-tab {
        background: transparent;
        border: none;
        padding: 0;
        font-size: 1.05rem;
        color: #374151;
        cursor: pointer;
        text-align: left;
      }

      .greffe-tab.active {
        color: #1a1a1a;
        font-weight: 700;
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
        text-transform: uppercase;
        color: #1a2942;
      }

      .greffe-card-body h2 {
        margin: 0 0 10px;
        font-size: 1.2rem;
        text-transform: uppercase;
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
        text-transform: uppercase;
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
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .greffe-text p {
        margin: 0;
        color: #4b5563;
      }

      .org-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 24px;
      }

      .org-tile {
        display: block;
        background: #ffffff;
        border-radius: 16px;
        border: 1px solid rgba(26, 41, 66, 0.1);
        box-shadow: 0 10px 24px rgba(26, 41, 66, 0.12);
        overflow: hidden;
        text-align: center;
        color: inherit;
        text-decoration: none;
        transition: transform 0.25s ease, box-shadow 0.25s ease;
      }

      .org-tile:hover {
        transform: translateY(-4px);
        box-shadow: 0 16px 32px rgba(26, 41, 66, 0.16);
      }

      .org-tile-media {
        height: 150px;
        background: linear-gradient(135deg, rgba(31, 155, 217, 0.12), rgba(26, 41, 66, 0.08));
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #1a2942;
      }

      .org-tile h3 {
        margin: 16px 18px 20px;
        font-size: 0.95rem;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #1a1a1a;
        line-height: 1.4;
      }

      @media (max-width: 768px) {
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
  readonly isOrganisation = computed(() => this.sectionKey() === 'organisations');
  readonly isMission = computed(() => this.sectionKey() === 'missions');
  readonly isFondements = computed(() => this.sectionKey() === 'fondements');
  readonly isProcedures = computed(() => this.sectionKey() === 'procedures');
  readonly isHistorique = computed(() => this.sectionKey() === 'historique');
  readonly isCompetences = computed(() => this.sectionKey() === 'competences');
  readonly isGreffe = computed(() => this.sectionKey() === 'greffe-secretariat-general');
  readonly isGreffePresidents = computed(() => this.greffeSection() === 'presidents');
  readonly isGreffeJudges = computed(() => this.greffeSection() === 'judges');
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
    { titleKey: 'organization.orgPage.tiles.organigramme', section: 'organigramme' },
    { titleKey: 'organization.orgPage.tiles.firstPresident', section: 'premiere-presidente' },
    { titleKey: 'organization.orgPage.tiles.consultative', section: 'section-consultative' },
    { titleKey: 'organization.orgPage.tiles.contentieux', section: 'section-contentieux' },
    { titleKey: 'organization.orgPage.tiles.registry', section: 'greffe-secretariat-general' },
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
