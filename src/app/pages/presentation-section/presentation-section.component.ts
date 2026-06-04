import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { Location, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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
    bodyKey: 'organization.consultativeSectionBody',
  },
  'section-contentieux': {
    titleKey: 'organization.chart.nodes.litigationSection',
    bodyKey: 'organization.litigationSectionBody',
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
              {{ backLabelKey() | i18n }}
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
              {{ backLabelKey() | i18n }}
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
              <div class="fp-intro-body">
                <p [innerHTML]="'organization.firstPresident.page.inauguration' | i18n"></p>
              </div>
            </div>
          </div>
        </section>

        <section class="fp-biography">
          <div class="container">
            <div class="fp-bio-layout">
              <div class="fp-bio-photo">
                <img
                  ngSrc="https://res.cloudinary.com/dhqvb8wbn/image/upload/v1772555485/Brigitte_NSENSELE_wa_NSENSELE_OK.jpg_ndsjzg.jpg"
                  alt="Brigitte Nsensele wa Nsensele"
                  width="280"
                  height="330"
                />
              </div>
              <div class="fp-bio-text">
                <h2>{{ 'organization.firstPresident.page.biographyTitle' | i18n }}</h2>
                <p>{{ 'organization.firstPresident.page.biography' | i18n }}</p>
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
            <div class="fp-honorary-list">
              <article class="fp-honorary-item">
                <a [routerLink]="['/organization/member', 'felix-vunduawe-te-pemako']" class="fp-honorary-link-card">
                  <div class="fp-honorary-info">
                    <h3 class="fp-honorary-link">
                      {{ 'organization.firstPresident.page.honorary.felix.name' | i18n }}
                    </h3>
                    <p class="fp-honorary-years">{{ 'organization.firstPresident.page.honorary.felix.years' | i18n }}</p>
                  </div>
                </a>
              </article>
              <article class="fp-honorary-item">
                <a [routerLink]="['/organization/member', 'marthe-odio-nonde']" class="fp-honorary-link-card">
                  <div class="fp-honorary-info">
                    <h3 class="fp-honorary-link">
                      {{ 'organization.firstPresident.page.honorary.marthe.name' | i18n }}
                    </h3>
                    <p class="fp-honorary-years">{{ 'organization.firstPresident.page.honorary.marthe.years' | i18n }}</p>
                  </div>
                </a>
              </article>
            </div>
          </div>
        </section>
      } @else if (isOrganisation()) {
        <section class="org-hero presentation-hero" style="background: linear-gradient(90deg, rgba(16,27,43,0.55) 0%, rgba(16,27,43,0.35) 55%, rgba(16,27,43,0.25) 100%), url('assets/hero-group-photo.png') center/cover no-repeat; image-rendering: auto;">
          <div class="container">
            <button class="back-link" type="button" (click)="goBack()">
              {{ backLabelKey() | i18n }}
            </button>
          </div>
        </section>

        <section class="org-hero-summary">
          <div class="container">
            <div class="org-detail-card">
              <p [innerHTML]="('about.legal.detail.paragraph3' | i18n).replace(/\\n/g, '<br>')"></p>
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
                  [routerLink]="tile.route || ['/presentation', tile.section]"
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
              {{ backLabelKey() | i18n }}
            </button>
            <div class="hero-split">
              <div class="hero-left">
                <h1 class="hero-title">{{ 'organization.greffe.title' | i18n }}</h1>
              </div>
              <span class="hero-divider" aria-hidden="true"></span>
              <p class="hero-body-text" [innerHTML]="'organization.greffeSectionBody' | i18n"></p>
            </div>
          </div>
        </section>

        <section class="greffe-coming-soon">
          <div class="container">
            <div class="coming-soon-content">
              <div class="coming-soon-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h2 class="coming-soon-title">{{ 'comingSoon.subtitle' | i18n }}</h2>
              <p class="coming-soon-description">{{ 'comingSoon.description' | i18n }}</p>
              <a routerLink="/" class="coming-soon-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                {{ 'comingSoon.backHome' | i18n }}
              </a>
            </div>
          </div>
        </section>
      } @else {
        <section class="section-hero presentation-hero">
          <div class="container">
            <button class="back-link" type="button" (click)="goBack()">
              {{ backLabelKey() | i18n }}
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
              </div>
            } @else if (isFondements()) {
              <div class="section-card">
                <p>{{ 'about.intro.body' | i18n }}</p>
              </div>
            } @else if (isProcedures()) {
              <div class="section-card procedures-content">
                <h2 class="procedures-main-title">Procédures devant le Conseil d'Etat</h2>
                <p>Le Conseil d'Etat est composé de deux grandes sections aux missions bien distinctes, à savoir : la section consultative et la section du contentieux. Chacune suit ses propres procédures.</p>

                <h3 class="procedures-section-title">I. Règles générales de procédure en matière consultative</h3>

                <h4 class="procedures-sub-title">➤ Dépôt de la requête</h4>
                <p>Les requêtes en matière de demande d'avis motivés ainsi que celles sur les difficultés d'interprétation des textes juridiques sont déposées au greffe du Conseil d'Etat.</p>
                <p>Dès sa réception, la requête est enrôlée par le greffier et communiquée sans délai au Premier Président du Conseil d'Etat aux fins de désignation d'un rapporteur à qui le greffier remettra ensuite le dossier.</p>

                <h4 class="procedures-sub-title">➤ Affectation à un rapporteur</h4>
                <p>Le rapporteur est désigné par le chef de la juridiction parmi les magistrats de la section consultative.</p>
                <p>Le rapporteur procède, dans un délai maximum de dix jours, aux devoirs prescrits à l'article 124 de la loi organique, sous la supervision directe du Président de section.</p>
                <p>A l'issue de sa mission, le rapporteur dépose son dossier, composé du rapport proprement dit et, éventuellement, du projet de texte supplétif, au Premier Président du Conseil d'Etat qui fixe la date à laquelle l'affaire sera examinée.</p>
                <p>Cette date est notifiée par les soins du greffier au Ministère public et à l'autorité requérante.</p>

                <h4 class="procedures-sub-title">➤ Examen du dossier</h4>
                <p>Le dossier est examiné par les magistrats de la section consultative et du Parquet près la juridiction saisie, réunis en assemblée mixte. L'avis motivé est donné à la majorité des magistrats présents à la séance.</p>
                <p>Les débats en assemblée mixte se déroulent de la manière suivante :</p>
                <ol class="procedures-list">
                  <li>à l'appel de la cause, le Président de la section donne lecture de la requête ;</li>
                  <li>il passe la parole au rapporteur. Celui-ci donne lecture du rapport et du texte supplétif du projet ou de la proposition à examiner ;</li>
                  <li>la parole est ensuite donnée d'abord à la partie requérante et, enfin, aux autres membres de l'assemblée ;</li>
                  <li>le greffier dresse le procès-verbal de la séance.</li>
                </ol>

                <h4 class="procedures-sub-title">➤ L'avis</h4>
                <p>La teneur de l'avis motivé de la section consultative est constituée par le résultat final obtenu à l'issue des débats et consigné dans le procès-verbal visé à l'article 127 alinéa 2, point 4 de la présente loi organique.</p>
                <p>Il est rédigé et signé par le chef de la juridiction, le Président de la section consultative, le chef de l'office et par le greffier de la séance.</p>

                <h3 class="procedures-section-title">II. Règles générales de procédure en matière contentieuses</h3>

                <h4 class="procedures-sub-title">➤ Dépôt de la requête ou du réquisitoire</h4>
                <p>Les requêtes des parties ou les réquisitions du ministère public, tant en matière d'annulation des actes administratifs qu'en celle de pourvois en cassation ainsi que, dans certains cas, en matière d'appel et de révision, sont déposés au greffe du Conseil d'Etat, accompagnés de leurs pièces, conformément aux articles 143 à 149 de la loi organique du 15 octobre 2016.</p>
                <p>Le requérant est tenu de déposer ainsi sa requête dans le strict respect du délai fixé par la loi pour la saisine de la juridiction.</p>
                <p>Toutefois, les délais de traitement du recours contentieux ne courent, en tout état de cause, qu'à dater de la réception du dossier au greffe.</p>
                <p>Le greffier procède à l'enrôlement du dossier et à la signification de la requête conformément aux articles 143 à 149 de la loi organique n° 16/027 du 15 octobre 2016.</p>

                <h4 class="procedures-sub-title">➤ L'examen préliminaire</h4>
                <p>Dès le dépôt de la requête, le greffier transmet le dossier au chef de la juridiction. Si le recours est manifestement irrecevable, ou si la cause ne relève pas, de façon évidente, de la compétence de la juridiction, le chef de la juridiction communique le dossier à la chambre pour examen avant de fixer la date à laquelle l'affaire sera appelée. Notification de cette date est faite au demandeur et au Ministère public. Dans le cas contraire, le recours suit son cours normal conformément aux dispositions de la présente loi organique.</p>

                <h4 class="procedures-sub-title">➤ Instruction de l'affaire</h4>
                <p>En procédure ordinaire, le rapporteur déféré aux devoirs lui prescrits avec célérité, tous les délais prescrits pour l'instruction de la cause étant saufs.</p>
                <p>Il exerce ses prérogatives sous la direction et l'autorité du Premier Président du Conseil d'Etat. Les actes qu'il pose ainsi que les relations qu'il développe avec les parties ou les tiers, en ce compris les correspondances, sont posés, entretenues ou adressées sous couvert du Premier Président du Conseil d'Etat.</p>
                <p>En cas de référé, le Président de la section du contentieux ou le magistrat qu'il désigne procède directement et sans désemparer à l'examen du référé conformément aux articles 278 et suivants de la loi organique des juridictions de l'ordre administratif.</p>
                <p>Le Président de la section du contentieux répartit les dossiers lui confiés par le Premier Président entre les chambres, et même, en matière de référé, au juge. Il soumet à la signature du Premier Président les propositions de compositions de chaque chambre, le rapporteur du dossier faisant obligatoirement partie de ladite proposition de composition. Il apprête le roulement, portant la programmation des audiences.</p>
                <p>Conformément aux alinéas 2 et 3 de l'article 279 de la loi organique du 15 octobre 2016, il peut, en ce qui concerne les litiges soumis au Conseil d'Etat, être désigné par ordonnance du Premier Président, juge de référé.</p>
                <p>Il peut lui-même aussi désigner juge de référé, par son ordonnance, le Premier Président du Conseil d'Etat entendu, les Présidents et même les Conseillers de sa section.</p>
                <p>Toutefois, nul ne peut être désigné, sur délégation, juge de référés, en application de l'alinéa 2 de l'article 279 de la loi organique du 15 octobre 2016, s'il n'a pas le grade de président ou, en cas d'absence ou d'empêchement de celui-ci, de conseiller ayant au moins trois ans d'ancienneté dans le grade.</p>
                <p>Au vu du roulement, le Premier Président du Conseil d'Etat fixe, par son ordonnance, la date et l'heure auxquelles le dossier sera appelé en audience.</p>

                <h4 class="procedures-sub-title">➤ L'audience</h4>
                <p>Les audiences de la section du contentieux sont publiques, à moins que cette publicité ne soit jugée dangereuse pour l'ordre public ou les bonnes mœurs.</p>
                <p>Dans ce cas, la composition ordonne le huis clos par une décision motivée.</p>
                <p>Les débats se déroulent de la manière suivante :</p>
                <ol class="procedures-list">
                  <li>Le requérant expose ses moyens ;</li>
                  <li>La partie adverse présente ses observations ;</li>
                  <li>Le Ministère public donne son avis ;</li>
                  <li>La juridiction clôt les débats et prend l'affaire en délibéré ;</li>
                </ol>
                <p>Le greffier du siège dresse le procès-verbal de l'audience.</p>

                <h4 class="procedures-sub-title">➤ L'arrêt ou l'ordonnance</h4>
                <p>Avant le prononcé, la composition ayant pris la cause en délibéré soumet le dossier au Premier Président du Conseil d'Etat, pour proposition d'éventuelles corrections.</p>
                <p>Le Premier Président du Conseil d'Etat peut, pour des raisons évidentes, inviter le Président de la section et même directement celui de la chambre ou le juge auteur dudit projet de décision en consultation, et cela, même en matière de référé.</p>
                <p>En cas de désaccord, le dossier peut être soumis par le Premier Président à la conférence des Présidents. En cas de persistance de désaccord, le Premier Président peut soumettre le dossier à la plénière.</p>
                <p>La décision ne sera rendue qu'après obtention de proposition d'éventuelles corrections du Premier Président du Conseil d'Etat. La minute de l'arrêt ou de l'ordonnance est signée de tous les membres de la composition. L'ordonnance rendue en matière de référé est signée par le seul juge du siège unique.</p>
                <p>Après le prononcé, l'original de la décision est remis au greffier pour être versé au dossier.</p>
                <p>Avant toute notification, l'arrêt ou l'ordonnance rendu (e) est revêtu (e) de la formule exécutoire visée à l'article 250 alinéa 2 de la loi organique.</p>
                <p>La formule exécutoire porte le sceau et la signature du greffier en chef.</p>
                <p>Dans certains cas et pour certaines matières préalablement déterminées par voies de note de service, le Greffier en chef obtient préalablement l'avis de non-objection du Premier Président du Conseil d'Etat avant toute notification.</p>

                <div class="procedures-footnotes">
                  <p><sup>1</sup> Voir la loi organique n°16/027 du 15 octobre 2016, article 129.</p>
                  <p><sup>2</sup> Voir la loi organique n°16/027 du 15 octobre 2016, article 177.</p>
                  <p><sup>3</sup> Voir l'ordonnance n°19/001 du 10 janvier 2019, articles 46 et 47.</p>
                  <p><sup>4</sup> Voir la loi organique n°16/027 du 15 octobre 2016, articles 232 et 233.</p>
                  <p><sup>5</sup> Voir l'ordonnance n°19/001 du 10 janvier 2019, articles 50 à 53.</p>
                </div>
              </div>
            } @else if (isConsultative()) {
              <div class="section-card">
                <p [innerHTML]="bodyKey() | i18n"></p>
                <div class="section-photo-bio">
                  <div class="section-photo-frame">
                    <img
                      ngSrc="https://res.cloudinary.com/dhqvb8wbn/image/upload/v1772556921/Eug%C3%A8ne_KIBWE_MUTER.jpg_bacl4e.jpg"
                      [alt]="'organization.chart.peopleConsultativePresidentName' | i18n"
                      width="200"
                      height="240"
                    />
                  </div>
                  <p [innerHTML]="'organization.consultativeSectionBio' | i18n"></p>
                </div>
              </div>
            } @else if (isContentieux()) {
              <div class="section-card">
                <p [innerHTML]="bodyKey() | i18n"></p>
                <div class="section-photo-bio">
                  <div class="section-photo-frame">
                    <img
                      ngSrc="https://res.cloudinary.com/dhqvb8wbn/image/upload/v1772556705/PRES_MASANI_40x50.jpg_ast5mq.jpg"
                      [alt]="'organization.chart.peopleLitigationPresidentName' | i18n"
                      width="200"
                      height="240"
                    />
                  </div>
                  <p [innerHTML]="'organization.litigationSectionBio' | i18n"></p>
                </div>
              </div>
            } @else {
              <div class="section-card">
                <p [innerHTML]="bodyKey() | i18n"></p>
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
          url('https://images.unsplash.com/photo-1444628838545-ac100e7d4ecf?auto=format&fit=crop&w=1920&h=400&q=80') center/cover no-repeat;
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

      /* Procedures content styles */
      .procedures-main-title {
        font-size: 1.6rem;
        font-weight: 700;
        color: #1a1a1a;
        margin: 0 0 16px;
      }

      .procedures-section-title {
        font-size: 1.3rem;
        font-weight: 700;
        color: #1a1a1a;
        margin: 36px 0 18px;
      }

      .procedures-sub-title {
        font-size: 1.05rem;
        font-weight: 700;
        color: #2c3e50;
        margin: 24px 0 10px;
      }

      .procedures-list {
        margin: 10px 0 18px 20px;
        padding-left: 10px;
        color: #4b5563;
        line-height: 1.8;
      }

      .procedures-list li {
        margin-bottom: 6px;
      }

      .procedures-footnotes {
        margin-top: 40px;
        padding-top: 18px;
        border-top: 1px solid #e0e0e0;
      }

      .procedures-footnotes p {
        font-size: 0.82rem;
        color: #6b7280;
        margin: 0 0 5px;
      }

      .procedures-footnotes sup {
        color: #2c3e50;
        font-weight: 600;
      }

      .section-photo-bio {
        display: flex;
        gap: 32px;
        align-items: flex-start;
        margin-top: 48px;
      }

      .section-photo-frame {
        flex-shrink: 0;
      }

      .section-photo-frame img {
        border-radius: 8px;
        border: 2px solid #e5e7eb;
        object-fit: cover;
      }

      @media (max-width: 768px) {
        .section-photo-bio {
          flex-direction: column;
          align-items: center;
        }
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
        white-space: pre-line;
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
        padding: 92px 0 56px;
      }

      .org-hero .container {
        display: flex;
        flex-direction: column;
        min-height: 430px;
      }

      .org-hero .back-link {
        align-self: flex-start;
      }

      .org-hero .hero-split {
        margin-top: auto;
      }

      .org-hero .hero-title {
        text-shadow: 0 10px 28px rgba(6, 12, 24, 0.45);
        letter-spacing: 1.5px;
      }

      .org-hero-summary {
        background: transparent;
        margin-top: 8px;
        padding: 6px 0 22px;
        border-bottom: none;
      }

      .org-hero-summary .container {
        position: relative;
      }

      .org-hero-body {
        background: #f8f9fb;
        padding: 0 0 60px;
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
        margin-top: 18px;
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

      .fp-honorary-list {
        display: flex;
        flex-direction: column;
        gap: 28px;
      }

      .fp-honorary-item {
        display: block;
        background: #f8f9fb;
        border-radius: 12px;
        padding: 0;
        overflow: hidden;
        border: 1px solid transparent;
        transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
      }

      .fp-honorary-link-card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        padding: 22px 24px;
        color: inherit;
        text-decoration: none;
        cursor: pointer;
      }

      .fp-honorary-item:hover,
      .fp-honorary-item:focus-within {
        transform: translateY(-2px);
        box-shadow: 0 12px 28px rgba(26, 41, 66, 0.1);
        border-color: rgba(31, 155, 217, 0.3);
      }

      .fp-honorary-info h3 {
        font-size: 1rem;
        font-weight: 700;
        color: #1a2942;
        margin: 0 0 8px;
      }

      .fp-honorary-link {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        color: inherit;
        text-decoration: underline;
        text-decoration-color: rgba(0, 95, 184, 0.25);
        text-underline-offset: 0.18em;
        transition: color 0.2s ease, text-decoration-color 0.2s ease, transform 0.2s ease;
      }

      .fp-honorary-link::after {
        content: '→';
        font-size: 0.95rem;
        color: #005fb8;
        transition: transform 0.2s ease;
      }

      .fp-honorary-item:hover .fp-honorary-link,
      .fp-honorary-link-card:focus-visible .fp-honorary-link {
        color: #005fb8;
        text-decoration-color: rgba(0, 95, 184, 0.55);
      }

      .fp-honorary-item:hover .fp-honorary-link::after,
      .fp-honorary-link-card:focus-visible .fp-honorary-link::after {
        transform: translateX(3px);
      }

      .fp-honorary-link-card:focus-visible {
        outline: 3px solid #1F9BD9;
        outline-offset: -3px;
        border-radius: 12px;
      }

      .fp-honorary-years {
        font-size: 0.95rem;
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

        .fp-bio-text {
          margin-top: 0;
        }

        .fp-bio-photo {
          width: 160px;
          align-self: center;
        }

        .fp-honorary-item {
          text-align: left;
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
        margin-top: 10px;
        width: 100%;
        max-width: 1120px;
        background: linear-gradient(135deg, #ffffff 0%, #f8fbff 100%);
        border-radius: 20px;
        padding: 40px 44px 40px;
        border: 1px solid rgba(31, 155, 217, 0.12);
        box-shadow:
          0 20px 50px rgba(15, 35, 70, 0.08),
          0 4px 12px rgba(31, 155, 217, 0.06),
          inset 0 1px 0 rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        position: relative;
        z-index: 2;
        overflow: hidden;
      }

      .org-detail-card::after {
        content: '';
        position: absolute;
        top: -60px;
        right: -60px;
        width: 200px;
        height: 200px;
        background: radial-gradient(circle, rgba(31, 155, 217, 0.1), transparent 70%);
        pointer-events: none;
      }

      .org-detail-card h2 {
        margin: 0 0 12px;
        font-size: 1.4rem;
        font-weight: 700;
        color: #f8fbff;
        letter-spacing: 0.4px;
        position: relative;
        z-index: 1;
      }

      .org-detail-card p {
        margin: 0 0 14px;
        color: #374151;
        line-height: 1.9;
        font-size: clamp(1rem, 1.2vw, 1.14rem);
        text-wrap: pretty;
        position: relative;
        z-index: 1;
      }

      .org-detail-card p strong {
        display: block;
        color: #0f172a;
        font-weight: 700;
        font-size: 1.25rem;
        margin: 28px 0 16px;
        padding-left: 16px;
        border-left: 3px solid #1F9BD9;
        letter-spacing: 0.2px;
      }

      .org-detail-card p br + br + strong,
      .org-detail-card p br + strong {
        margin-top: 24px;
      }

      .org-detail-card ul {
        margin: 12px 0;
        padding-left: 20px;
        color: #1f2937;
        position: relative;
        z-index: 1;
      }

      .org-detail-card li {
        margin-bottom: 8px;
        line-height: 1.72;
        font-size: 1.07rem;
        color: #1f2937;
      }

      .org-tiles {
        position: relative;
        background: radial-gradient(circle at 15% 20%, rgba(31, 155, 217, 0.12), transparent 45%),
          radial-gradient(circle at 85% 10%, rgba(250, 204, 84, 0.16), transparent 50%),
          linear-gradient(180deg, #f7f9fb 0%, #edf2f7 100%);
        padding: 24px 0 90px;
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

      .greffe-coming-soon {
        background: #f8f9fb;
        padding: 60px 0 80px;
      }

      .greffe-coming-soon .coming-soon-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 40px 20px;
      }

      .greffe-coming-soon .coming-soon-icon {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background: #3bb4e5;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 28px;
      }

      .greffe-coming-soon .coming-soon-icon svg {
        width: 56px;
        height: 56px;
        color: #fff;
      }

      .greffe-coming-soon .coming-soon-title {
        font-size: 2rem;
        font-weight: 700;
        color: #3bb4e5;
        margin-bottom: 16px;
      }

      .greffe-coming-soon .coming-soon-description {
        font-size: 1.1rem;
        color: #6b7280;
        max-width: 560px;
        line-height: 1.7;
        margin-bottom: 32px;
      }

      .greffe-coming-soon .coming-soon-btn {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        background: #3bb4e5;
        color: #fff;
        padding: 14px 32px;
        border-radius: 10px;
        font-size: 1.05rem;
        font-weight: 600;
        text-decoration: none;
        transition: background 0.2s ease, transform 0.2s ease;
      }

      .greffe-coming-soon .coming-soon-btn:hover {
        background: #2a9fd4;
        transform: translateY(-1px);
      }

      .greffe-coming-soon .coming-soon-btn svg {
        width: 20px;
        height: 20px;
      }

      .coming-soon {
        text-align: center;
        font-size: 1.3rem;
        font-weight: 600;
        color: #64748b;
        padding: 60px 20px;
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
        object-fit: cover;
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
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }

      .org-tile:nth-child(1) .org-tile-media.has-image {
        background-size: 115%;
        background-position: center center;
      }

      .org-tile:nth-child(5) .org-tile-media.has-image {
        background-size: 115%;
        background-position: center center;
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
        background: linear-gradient(180deg, rgba(15, 23, 42, 0.02), rgba(15, 23, 42, 0.25));
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
        .org-hero {
          padding: 74px 0 40px;
        }

        .org-hero .container {
          min-height: 320px;
        }

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

        .org-detail-card {
          margin-top: 0;
          max-width: 100%;
          padding: 24px 20px;
          border-radius: 18px;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
        }

        .org-detail-card p {
          font-size: 1rem;
          line-height: 1.78;
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

      /* ── Dark Mode ── */
      :host-context([data-theme="dark"]) .section-page { background: #1a2332; }
      :host-context([data-theme="dark"]) .back-link { color: #e4eaf0; background: #243447; border-color: #2d4156; box-shadow: 0 10px 22px rgba(0,0,0,0.3); }
      :host-context([data-theme="dark"]) .back-link:hover { border-color: #4fc3f7; box-shadow: 0 14px 28px rgba(0,0,0,0.4); }

      /* Generic section body */
      :host-context([data-theme="dark"]) .section-card { background: #243447; box-shadow: 0 14px 30px rgba(0,0,0,0.35); }
      :host-context([data-theme="dark"]) .section-card h2 { color: #e4eaf0; }
      :host-context([data-theme="dark"]) .section-card p { color: #8899aa; }
      :host-context([data-theme="dark"]) .section-card li { color: #8899aa; }
      :host-context([data-theme="dark"]) .procedures-section-title { color: #e4eaf0; }
      :host-context([data-theme="dark"]) .procedures-sub-title { color: #81d4fa; }
      :host-context([data-theme="dark"]) .procedures-list { color: #8899aa; }
      :host-context([data-theme="dark"]) .procedures-footnotes { border-top-color: #2d4156; }
      :host-context([data-theme="dark"]) .procedures-footnotes p { color: #6b7f8f; }
      :host-context([data-theme="dark"]) .procedures-footnotes sup { color: #4fc3f7; }
      :host-context([data-theme="dark"]) .section-photo-frame img { border-color: #2d4156; }

      /* Org chart page */
      :host-context([data-theme="dark"]) .chart-body { background: #1a2332; }
      :host-context([data-theme="dark"]) .chart-card { background: #243447; box-shadow: 0 14px 30px rgba(0,0,0,0.35); }
      :host-context([data-theme="dark"]) .chart-card p { color: #8899aa; }
      :host-context([data-theme="dark"]) .chart-structure { background: #243447; box-shadow: 0 10px 26px rgba(0,0,0,0.3); }
      :host-context([data-theme="dark"]) .org-node { background: #2a3d52; border-color: #2d4156; color: #e4eaf0; box-shadow: 0 8px 20px rgba(0,0,0,0.3); }
      :host-context([data-theme="dark"]) .org-node.primary { background: linear-gradient(135deg, #1ea2dd 0%, #0d7ab8 100%); color: #fff; border-color: #1ea2dd; }
      :host-context([data-theme="dark"]) .org-node.muted { background: linear-gradient(135deg, rgba(31,155,217,0.15) 0%, rgba(31,155,217,0.1) 100%); border-color: rgba(31,155,217,0.3); color: #e4eaf0; }
      :host-context([data-theme="dark"]) .org-chart-connector { background: linear-gradient(to bottom, rgba(136,153,170,0.3), rgba(136,153,170,0.1)); }
      :host-context([data-theme="dark"]) .chart-section-title { color: #e4eaf0; }
      :host-context([data-theme="dark"]) .chart-names h3 { color: #e4eaf0; }
      :host-context([data-theme="dark"]) .leadership-photo-card { background: #243447; border-color: #2d4156; box-shadow: 0 10px 28px rgba(0,0,0,0.3); }
      :host-context([data-theme="dark"]) .leadership-photo-name { color: #e4eaf0; }
      :host-context([data-theme="dark"]) .leadership-photo-role { color: #e4eaf0; }
      :host-context([data-theme="dark"]) .leadership-photo-detail { color: #8899aa; }
      :host-context([data-theme="dark"]) .role-block h3 { color: #e4eaf0; }
      :host-context([data-theme="dark"]) .role-block p { color: #8899aa; }
      :host-context([data-theme="dark"]) .roles-descriptions { border-top-color: #2d4156; }

      /* First President page */
      :host-context([data-theme="dark"]) .fp-intro { background: #1a2332; }
      :host-context([data-theme="dark"]) .fp-intro-card { background: #243447; }
      :host-context([data-theme="dark"]) .fp-intro-body h2 { color: #e4eaf0; }
      :host-context([data-theme="dark"]) .fp-intro-body p { color: #8899aa; }
      :host-context([data-theme="dark"]) .fp-biography { background: #1a2332; }
      :host-context([data-theme="dark"]) .fp-bio-text h2 { color: #e4eaf0; }
      :host-context([data-theme="dark"]) .fp-bio-text p { color: #8899aa; }
      :host-context([data-theme="dark"]) .fp-career { background: #243447; }
      :host-context([data-theme="dark"]) .fp-career h2 { color: #e4eaf0; }
      :host-context([data-theme="dark"]) .fp-career-list li { color: #8899aa; border-bottom-color: #2d4156; }
      :host-context([data-theme="dark"]) .fp-career-list li::before { background: #4fc3f7; }
      :host-context([data-theme="dark"]) .fp-honorary { background: #1a2332; }
      :host-context([data-theme="dark"]) .fp-honorary h2 { color: #e4eaf0; }
      :host-context([data-theme="dark"]) .fp-honorary-item { background: #243447; }
      :host-context([data-theme="dark"]) .fp-honorary-item:hover,
      :host-context([data-theme="dark"]) .fp-honorary-item:focus-within { box-shadow: 0 12px 28px rgba(0,0,0,0.4); border-color: rgba(79,195,247,0.3); }
      :host-context([data-theme="dark"]) .fp-honorary-info h3 { color: #e4eaf0; }
      :host-context([data-theme="dark"]) .fp-honorary-years { color: #8899aa; }
      :host-context([data-theme="dark"]) .fp-honorary-link::after { color: #4fc3f7; }
      :host-context([data-theme="dark"]) .fp-honorary-item:hover .fp-honorary-link { color: #4fc3f7; text-decoration-color: rgba(79,195,247,0.55); }

      /* Organisation tiles page */
      :host-context([data-theme="dark"]) .org-hero-summary { background: transparent; }
      :host-context([data-theme="dark"]) .org-detail-card { background: linear-gradient(135deg, #243447 0%, #2a3d52 100%); border-color: #2d4156; box-shadow: 0 20px 50px rgba(0,0,0,0.35); }
      :host-context([data-theme="dark"]) .org-detail-card p { color: #8899aa; }
      :host-context([data-theme="dark"]) .org-detail-card p strong { color: #e4eaf0; border-left-color: #4fc3f7; }
      :host-context([data-theme="dark"]) .org-detail-card li { color: #8899aa; }
      :host-context([data-theme="dark"]) .org-detail-card ul { color: #8899aa; }
      :host-context([data-theme="dark"]) .org-tiles { background: radial-gradient(circle at 15% 20%, rgba(79,195,247,0.06), transparent 45%), radial-gradient(circle at 85% 10%, rgba(250,204,84,0.06), transparent 50%), linear-gradient(180deg, #1a2332 0%, #243447 100%); }
      :host-context([data-theme="dark"]) .org-tile { background: linear-gradient(180deg, #243447 0%, #2a3d52 100%); border-color: #2d4156; box-shadow: 0 12px 30px rgba(0,0,0,0.3); }
      :host-context([data-theme="dark"]) .org-tile:hover { box-shadow: 0 18px 36px rgba(0,0,0,0.45); border-color: rgba(79,195,247,0.35); }
      :host-context([data-theme="dark"]) .org-tile h3 { color: #e4eaf0; }
      :host-context([data-theme="dark"]) .org-tile-media { background: linear-gradient(140deg, rgba(79,195,247,0.1), rgba(136,153,170,0.05)); border-bottom-color: #2d4156; color: #8899aa; }
      :host-context([data-theme="dark"]) .org-tile-media.has-image { background-color: #1a2332; background-size: contain; background-position: center; background-repeat: no-repeat; }
      :host-context([data-theme="dark"]) .org-tile:nth-child(1) .org-tile-media.has-image,
      :host-context([data-theme="dark"]) .org-tile:nth-child(5) .org-tile-media.has-image { background-size: 115%; }
      :host-context([data-theme="dark"]) .org-tile-media.has-image::after { background: linear-gradient(180deg, transparent 60%, rgba(26,35,50,0.6) 100%); }

      /* Greffe page */
      :host-context([data-theme="dark"]) .greffe-list { background: #1a2332; }
      :host-context([data-theme="dark"]) .greffe-coming-soon { background: #1a2332; }
      :host-context([data-theme="dark"]) .greffe-coming-soon .coming-soon-description { color: #8899aa; }
      :host-context([data-theme="dark"]) .greffe-section-title { color: #e4eaf0; }
      :host-context([data-theme="dark"]) .greffe-placeholder { background: #243447; color: #8899aa; box-shadow: 0 10px 24px rgba(0,0,0,0.3); }
      :host-context([data-theme="dark"]) .greffe-item { background: #243447; box-shadow: 0 10px 24px rgba(0,0,0,0.3); }
      :host-context([data-theme="dark"]) .greffe-text p { color: #8899aa; }
      :host-context([data-theme="dark"]) .greffe-photo { background: #2a3d52; }
      :host-context([data-theme="dark"]) .greffe-card { background: #243447; box-shadow: 0 14px 30px rgba(0,0,0,0.35); }
      :host-context([data-theme="dark"]) .greffe-card-image { background: linear-gradient(135deg, rgba(79,195,247,0.08), rgba(136,153,170,0.05)); color: #8899aa; }
      :host-context([data-theme="dark"]) .greffe-card-body p { color: #8899aa; }
      :host-context([data-theme="dark"]) .greffe-tab { color: #8899aa; }
      :host-context([data-theme="dark"]) .greffe-tab.active { color: #e4eaf0; }
      :host-context([data-theme="dark"]) .coming-soon { color: #8899aa; }
      :host-context([data-theme="dark"]) .org-list p { color: #8899aa; }
      :host-context([data-theme="dark"]) .chart-media { background: linear-gradient(135deg, rgba(79,195,247,0.08), rgba(136,153,170,0.05)); color: #8899aa; }
      :host-context([data-theme="dark"]) .org-hero-body { background: #1a2332; }
      :host-context([data-theme="dark"]) .org-hero-card { background: #243447; box-shadow: 0 16px 34px rgba(0,0,0,0.35); }
      :host-context([data-theme="dark"]) .org-hero-title { color: #e4eaf0; }
      :host-context([data-theme="dark"]) .org-hero-body p { color: #8899aa; }
    `,
  ],
})
export class PresentationSectionComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
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
  readonly isConsultative = computed(() => this.sectionKey() === 'section-consultative');
  readonly isContentieux = computed(() => this.sectionKey() === 'section-contentieux');
  readonly showHeroBody = computed(
    () =>
      !this.isMission() &&
      !this.isFondements() &&
      !this.isProcedures() &&
      !this.isHistorique() &&
      !this.isCompetences() &&
      !this.isConsultative() &&
      !this.isContentieux()
  );
  readonly isOrganizationChild = computed(() => {
    const key = this.sectionKey();
    return key === 'organigramme' || key === 'premiere-presidente' || key === 'section-consultative' || key === 'section-contentieux' || key === 'greffe-secretariat-general';
  });
  readonly backLabelKey = computed(() =>
    this.isOrganizationChild() ? 'memberDetail.backToOrganization' : 'memberDetail.back'
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
      years: '2025 - à ce jour',
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
    {
      titleKey: 'organization.orgPage.tiles.juges',
      section: 'judges',
      route: ['/judges'],
      imageUrl:
        'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1775726305/Presidence_du_conseil_detat_oddnb9.jpg',
    },
  ];

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const section = params.get('section') as SectionKey | null;
      if (section && SECTION_MAP[section]) {
        this.sectionKey.set(section);
        window.scrollTo(0, 0);
      }
    });
  }

  goBack() {
    if (this.isOrganizationChild()) {
      this.router.navigate(['/presentation', 'organisations']);
    } else {
      this.router.navigate(['/presentation']);
    }
  }

  setGreffeSection(section: GreffeSection) {
    this.greffeSection.set(section);
  }
}
