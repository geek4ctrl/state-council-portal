import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-procedures',
  standalone: true,
  imports: [RouterLink, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-grid">
            <div class="hero-left">
              <h1>APPEAL TO THE<br>STATE<br>COUNCIL</h1>
            </div>
            <div class="hero-right">
              <p>
                An appeal to the State Council is an extraordinary legal remedy allowing a party to challenge administrative decisions and acts. The State Council verifies whether administrative law was correctly applied and whether the proper administrative procedures were followed.
              </p>
              <p>
                The State Council is seized by a request from the parties or by a declaration filed with the administrative registry. An appeal to the State Council may also be lodged by an oral or written declaration to the secretary of the registry. In this case, the appeal must be confirmed, within three months, by a petition.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="procedure-detail">
        <div class="container">
          <h2>Procédures devant le Conseil d'Etat</h2>
          <p>Le Conseil d'Etat est composé de deux grandes sections aux missions bien distinctes, à savoir : la section consultative et la section du contentieux. Chacune suit ses propres procédures.</p>

          <h3 class="section-title">I. Règles générales de procédure en matière consultative</h3>

          <h4 class="sub-title">&#10148; Dépôt de la requête</h4>
          <p>Les requêtes en matière de demande d'avis motivés ainsi que celles sur les difficultés d'interprétation des textes juridiques sont déposées au greffe du Conseil d'Etat.</p>
          <p>Dès sa réception, la requête est enrôlée par le greffier et communiquée sans délai au Premier Président du Conseil d'Etat aux fins de désignation d'un rapporteur à qui le greffier remettra ensuite le dossier.</p>

          <h4 class="sub-title">&#10148; Affectation à un rapporteur</h4>
          <p>Le rapporteur est désigné par le chef de la juridiction parmi les magistrats de la section consultative.</p>
          <p>Le rapporteur procède, dans un délai maximum de dix jours, aux devoirs prescrits à l'article 124 de la loi organique, sous la supervision directe du Président de section.</p>
          <p>A l'issue de sa mission, le rapporteur dépose son dossier, composé du rapport proprement dit et, éventuellement, du projet de texte supplétif, au Premier Président du Conseil d'Etat qui fixe la date à laquelle l'affaire sera examinée.</p>
          <p>Cette date est notifiée par les soins du greffier au Ministère public et à l'autorité requérante.</p>

          <h4 class="sub-title">&#10148; Examen du dossier</h4>
          <p>Le dossier est examiné par les magistrats de la section consultative et du Parquet près la juridiction saisie, réunis en assemblée mixte. L'avis motivé est donné à la majorité des magistrats présents à la séance.</p>
          <p>Les débats en assemblée mixte se déroulent de la manière suivante :</p>
          <ol class="procedure-list">
            <li>à l'appel de la cause, le Président de la section donne lecture de la requête ;</li>
            <li>il passe la parole au rapporteur. Celui-ci donne lecture du rapport et du texte supplétif du projet ou de la proposition à examiner ;</li>
            <li>la parole est ensuite donnée d'abord à la partie requérante et, enfin, aux autres membres de l'assemblée ;</li>
            <li>le greffier dresse le procès-verbal de la séance.</li>
          </ol>

          <h4 class="sub-title">&#10148; L'avis</h4>
          <p>La teneur de l'avis motivé de la section consultative est constituée par le résultat final obtenu à l'issue des débats et consigné dans le procès-verbal visé à l'article 127 alinéa 2, point 4 de la présente loi organique.</p>
          <p>Il est rédigé et signé par le chef de la juridiction, le Président de la section consultative, le chef de l'office et par le greffier de la séance.</p>

          <h3 class="section-title">II. Règles générales de procédure en matière contentieuses</h3>

          <h4 class="sub-title">&#10148; Dépôt de la requête ou du réquisitoire</h4>
          <p>Les requêtes des parties ou les réquisitions du ministère public, tant en matière d'annulation des actes administratifs qu'en celle de pourvois en cassation ainsi que, dans certains cas, en matière d'appel et de révision, sont déposés au greffe du Conseil d'Etat, accompagnés de leurs pièces, conformément aux articles 143 à 149 de la loi organique du 15 octobre 2016.</p>
          <p>Le requérant est tenu de déposer ainsi sa requête dans le strict respect du délai fixé par la loi pour la saisine de la juridiction.</p>
          <p>Toutefois, les délais de traitement du recours contentieux ne courent, en tout état de cause, qu'à dater de la réception du dossier au greffe.</p>
          <p>Le greffier procède à l'enrôlement du dossier et à la signification de la requête conformément aux articles 143 à 149 de la loi organique n° 16/027 du 15 octobre 2016.</p>

          <h4 class="sub-title">&#10148; L'examen préliminaire</h4>
          <p>Dès le dépôt de la requête, le greffier transmet le dossier au chef de la juridiction. Si le recours est manifestement irrecevable, ou si la cause ne relève pas, de façon évidente, de la compétence de la juridiction, le chef de la juridiction communique le dossier à la chambre pour examen avant de fixer la date à laquelle l'affaire sera appelée. Notification de cette date est faite au demandeur et au Ministère public. Dans le cas contraire, le recours suit son cours normal conformément aux dispositions de la présente loi organique.</p>

          <h4 class="sub-title">&#10148; Instruction de l'affaire</h4>
          <p>En procédure ordinaire, le rapporteur déféré aux devoirs lui prescrits avec célérité, tous les délais prescrits pour l'instruction de la cause étant saufs.</p>
          <p>Il exerce ses prérogatives sous la direction et l'autorité du Premier Président du Conseil d'Etat. Les actes qu'il pose ainsi que les relations qu'il développe avec les parties ou les tiers, en ce compris les correspondances, sont posés, entretenues ou adressées sous couvert du Premier Président du Conseil d'Etat.</p>
          <p>En cas de référé, le Président de la section du contentieux ou le magistrat qu'il désigne procède directement et sans désemparer à l'examen du référé conformément aux articles 278 et suivants de la loi organique des juridictions de l'ordre administratif.</p>
          <p>Le Président de la section du contentieux répartit les dossiers lui confiés par le Premier Président entre les chambres, et même, en matière de référé, au juge. Il soumet à la signature du Premier Président les propositions de compositions de chaque chambre, le rapporteur du dossier faisant obligatoirement partie de ladite proposition de composition. Il apprête le roulement, portant la programmation des audiences.</p>
          <p>Conformément aux alinéas 2 et 3 de l'article 279 de la loi organique du 15 octobre 2016, il peut, en ce qui concerne les litiges soumis au Conseil d'Etat, être désigné par ordonnance du Premier Président, juge de référé.</p>
          <p>Il peut lui-même aussi désigner juge de référé, par son ordonnance, le Premier Président du Conseil d'Etat entendu, les Présidents et même les Conseillers de sa section.</p>
          <p>Toutefois, nul ne peut être désigné, sur délégation, juge de référés, en application de l'alinéa 2 de l'article 279 de la loi organique du 15 octobre 2016, s'il n'a pas le grade de président ou, en cas d'absence ou d'empêchement de celui-ci, de conseiller ayant au moins trois ans d'ancienneté dans le grade.</p>
          <p>Au vu du roulement, le Premier Président du Conseil d'Etat fixe, par son ordonnance, la date et l'heure auxquelles le dossier sera appelé en audience.</p>

          <h4 class="sub-title">&#10148; L'audience</h4>
          <p>Les audiences de la section du contentieux sont publiques, à moins que cette publicité ne soit jugée dangereuse pour l'ordre public ou les bonnes mœurs.</p>
          <p>Dans ce cas, la composition ordonne le huis clos par une décision motivée.</p>
          <p>Les débats se déroulent de la manière suivante :</p>
          <ol class="procedure-list">
            <li>Le requérant expose ses moyens ;</li>
            <li>La partie adverse présente ses observations ;</li>
            <li>Le Ministère public donne son avis ;</li>
            <li>La juridiction clôt les débats et prend l'affaire en délibéré ;</li>
          </ol>
          <p>Le greffier du siège dresse le procès-verbal de l'audience.</p>

          <h4 class="sub-title">&#10148; L'arrêt ou l'ordonnance</h4>
          <p>Avant le prononcé, la composition ayant pris la cause en délibéré soumet le dossier au Premier Président du Conseil d'Etat, pour proposition d'éventuelles corrections.</p>
          <p>Le Premier Président du Conseil d'Etat peut, pour des raisons évidentes, inviter le Président de la section et même directement celui de la chambre ou le juge auteur dudit projet de décision en consultation, et cela, même en matière de référé.</p>
          <p>En cas de désaccord, le dossier peut être soumis par le Premier Président à la conférence des Présidents. En cas de persistance de désaccord, le Premier Président peut soumettre le dossier à la plénière.</p>
          <p>La décision ne sera rendue qu'après obtention de proposition d'éventuelles corrections du Premier Président du Conseil d'Etat. La minute de l'arrêt ou de l'ordonnance est signée de tous les membres de la composition. L'ordonnance rendue en matière de référé est signée par le seul juge du siège unique.</p>
          <p>Après le prononcé, l'original de la décision est remis au greffier pour être versé au dossier.</p>
          <p>Avant toute notification, l'arrêt ou l'ordonnance rendu (e) est revêtu (e) de la formule exécutoire visée à l'article 250 alinéa 2 de la loi organique.</p>
          <p>La formule exécutoire porte le sceau et la signature du greffier en chef.</p>
          <p>Dans certains cas et pour certaines matières préalablement déterminées par voies de note de service, le Greffier en chef obtient préalablement l'avis de non-objection du Premier Président du Conseil d'Etat avant toute notification.</p>

          <div class="footnotes">
            <p><sup>1</sup> Voir la loi organique n°16/027 du 15 octobre 2016, article 129.</p>
            <p><sup>2</sup> Voir la loi organique n°16/027 du 15 octobre 2016, article 177.</p>
            <p><sup>3</sup> Voir l'ordonnance n°19/001 du 10 janvier 2019, articles 46 et 47.</p>
            <p><sup>4</sup> Voir la loi organique n°16/027 du 15 octobre 2016, articles 232 et 233.</p>
            <p><sup>5</sup> Voir l'ordonnance n°19/001 du 10 janvier 2019, articles 50 à 53.</p>
          </div>
        </div>
      </section>

      <!-- Tab Navigation -->
      <section class="tabs-section">
        <div class="container">
          <nav class="tabs" role="tablist" aria-label="Form selection">
            <a routerLink="/filing" routerLinkActive="active" class="tab" role="tab" aria-selected="false" aria-controls="filing-panel">Report</a>
            <a routerLink="/appointment" routerLinkActive="active" class="tab" role="tab" aria-selected="false" aria-controls="appointment-panel">Book An Appointment</a>
            <a routerLink="/procedures" routerLinkActive="active" class="tab active" role="tab" aria-selected="true" aria-controls="procedures-panel">File An Appeal</a>
          </nav>
        </div>
      </section>

      <!-- Appeal Form Section -->
      <section class="form-section" id="procedures-panel" role="tabpanel" aria-labelledby="procedures-tab">
        <div class="container">
          <div class="form-header">
            <h2>APPEAL FORM</h2>
            <p class="form-subtitle">WE WOULD LOVE TO HEAR YOUR ISSUES</p>
          </div>

          <form class="appeal-form" aria-label="Appeal submission form">
            <div class="form-row">
              <div class="form-group">
                <label for="appeal-name" class="visually-hidden">Full Name (required)</label>
                <input type="text" id="appeal-name" name="name" placeholder="Full Name *" required aria-required="true">
              </div>
              <div class="form-group">
                <label for="appeal-email" class="visually-hidden">Email address (required)</label>
                <input type="email" id="appeal-email" name="email" placeholder="E-mail *" required aria-required="true">
              </div>
            </div>

            <div class="form-group">
              <label for="appeal-department" class="visually-hidden">Department</label>
              <select id="appeal-department" name="department" required aria-required="true">
                <option value="">Department</option>
                <option value="criminal">Criminal Chamber</option>
                <option value="civil">Civil Chamber</option>
                <option value="social">Social Chamber</option>
                <option value="commercial">Commercial Chamber</option>
              </select>
            </div>

            <div class="form-group">
              <label for="appeal-message" class="visually-hidden">Message (required)</label>
              <textarea id="appeal-message" name="message" placeholder="Message *" rows="6" required aria-required="true"></textarea>
            </div>

            <div class="form-submit">
              <button type="submit">SEND MESSAGE</button>
            </div>
          </form>
        </div>
      </section>

      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .page-container {
      padding-top: 80px;
      background: white;
      min-height: 100vh;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    /* Hero Section */
    .hero-section {
      background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
      color: white;
      padding: 100px 0;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 60px;
      align-items: center;
    }

    .hero-left h1 {
      font-size: 3.5rem;
      font-weight: 700;
      margin: 0;
      letter-spacing: 3px;
      line-height: 1.1;
    }

    .hero-right p {
      font-size: 1rem;
      line-height: 1.8;
      margin: 0 0 20px 0;
      opacity: 0.95;
    }

    .hero-right p:last-child {
      margin-bottom: 0;
    }

    /* Tabs Section */
    .tabs-section {
      background: white;
      border-bottom: 1px solid #e0e0e0;
    }

    .procedure-detail {
      background: #ffffff;
      padding: 40px 0 30px;
    }

    .procedure-detail h2 {
      margin: 0 0 16px;
      font-size: 1.6rem;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #1a1a1a;
    }

    .procedure-detail p {
      margin: 0 0 16px;
      color: #4b5563;
      line-height: 1.8;
      font-size: 1rem;
    }

    .procedure-detail p:last-child {
      margin-bottom: 0;
    }

    .section-title {
      margin: 40px 0 20px;
      font-size: 1.35rem;
      font-weight: 700;
      color: #1a1a1a;
    }

    .sub-title {
      margin: 28px 0 12px;
      font-size: 1.1rem;
      font-weight: 700;
      color: #2c3e50;
    }

    .procedure-list {
      margin: 12px 0 20px 20px;
      padding-left: 10px;
      color: #4b5563;
      line-height: 1.8;
      font-size: 1rem;
    }

    .procedure-list li {
      margin-bottom: 8px;
    }

    .footnotes {
      margin-top: 50px;
      padding-top: 20px;
      border-top: 1px solid #e0e0e0;
    }

    .footnotes p {
      font-size: 0.85rem;
      color: #6b7280;
      margin: 0 0 6px;
    }

    .footnotes sup {
      color: #2c3e50;
      font-weight: 600;
    }

    .tabs {
      display: flex;
      gap: 0;
    }

    .tab {
      flex: 1;
      text-align: center;
      padding: 20px 30px;
      font-size: 0.95rem;
      font-weight: 500;
      color: #666;
      text-decoration: none;
      border-bottom: 3px solid transparent;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .tab:hover {
      color: #2c3e50;
      background: #f8f8f8;
    }

    .tab.active {
      color: #2c3e50;
      border-bottom-color: #007FFF;
      font-weight: 600;
    }

    /* Form Section */
    .form-section {
      padding: 80px 0 120px;
      background: white;
    }

    .form-header {
      text-align: center;
      margin-bottom: 60px;
    }

    .form-header h2 {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0 0 15px 0;
      letter-spacing: 2px;
    }

    .form-subtitle {
      font-size: 0.9rem;
      color: #c9a961;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin: 0;
    }

    .appeal-form {
      max-width: 800px;
      margin: 0 auto;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 20px;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      padding: 15px 20px;
      border: 1px solid #ddd;
      border-radius: 0;
      font-size: 0.95rem;
      font-family: inherit;
      transition: border-color 0.3s ease;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #007FFF;
    }

    .form-group input::placeholder,
    .form-group textarea::placeholder {
      color: #999;
    }

    .form-group select {
      color: #999;
      cursor: pointer;
    }

    .form-group textarea {
      resize: vertical;
      min-height: 150px;
    }

    .form-submit {
      text-align: center;
      margin-top: 30px;
    }

    .form-submit button {
      background: white;
      color: #1a1a1a;
      border: 1px solid #1a1a1a;
      padding: 15px 50px;
      font-size: 0.9rem;
      font-weight: 600;
      letter-spacing: 1px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .form-submit button:hover {
      background: #1a1a1a;
      color: white;
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
      .hero-grid {
        grid-template-columns: 1fr;
        gap: 30px;
        text-align: center;
      }

      .hero-left h1 {
        font-size: 3rem;
      }
    }

    @media (max-width: 768px) {
      .hero-section {
        padding: 80px 0;
      }

      .hero-left h1 {
        font-size: 2.5rem;
      }

      .hero-right p {
        font-size: 0.95rem;
      }

      .tabs {
        flex-direction: column;
      }

      .tab {
        border-bottom: 1px solid #e0e0e0;
        border-right: none;
      }

      .tab.active {
        border-bottom-color: #007FFF;
      }

      .form-row {
        grid-template-columns: 1fr;
        gap: 0;
      }

      .form-header h2 {
        font-size: 2rem;
      }

      .form-section {
        padding: 60px 0 80px;
      }
    }

    @media (max-width: 480px) {
      .hero-section {
        padding: 60px 0;
      }

      .hero-left h1 {
        font-size: 2rem;
        letter-spacing: 2px;
      }

      .hero-right p {
        font-size: 0.9rem;
      }

      .form-header h2 {
        font-size: 1.6rem;
      }

      .form-subtitle {
        font-size: 0.8rem;
      }

      .form-submit button {
        padding: 12px 40px;
        font-size: 0.85rem;
      }
    }

    /* Dark Mode */
    :host-context([data-theme="dark"]) .page-container { background: #1a2332; }
    :host-context([data-theme="dark"]) .procedure-detail { background: #1a2332; }
    :host-context([data-theme="dark"]) .procedure-detail h2 { color: #e4eaf0; }
    :host-context([data-theme="dark"]) .procedure-detail p { color: #8899aa; }
    :host-context([data-theme="dark"]) .section-title { color: #e4eaf0; }
    :host-context([data-theme="dark"]) .sub-title { color: #81d4fa; }
    :host-context([data-theme="dark"]) .procedure-list { color: #8899aa; }
    :host-context([data-theme="dark"]) .footnotes { border-top-color: #2d4156; }
    :host-context([data-theme="dark"]) .footnotes p { color: #6b7f8f; }
    :host-context([data-theme="dark"]) .footnotes sup { color: #4fc3f7; }
    :host-context([data-theme="dark"]) .tabs-section { background: #243447; border-bottom-color: #2d4156; }
    :host-context([data-theme="dark"]) .tab { color: #8899aa; }
    :host-context([data-theme="dark"]) .tab:hover { color: #e4eaf0; background: #2a3d52; }
    :host-context([data-theme="dark"]) .tab.active { color: #e4eaf0; }
    :host-context([data-theme="dark"]) .form-section { background: #1a2332; }
    :host-context([data-theme="dark"]) .form-header h2 { color: #e4eaf0; }
    :host-context([data-theme="dark"]) .form-group input,
    :host-context([data-theme="dark"]) .form-group select,
    :host-context([data-theme="dark"]) .form-group textarea { background: #243447; border-color: #2d4156; color: #e4eaf0; }
    :host-context([data-theme="dark"]) .form-group input::placeholder,
    :host-context([data-theme="dark"]) .form-group textarea::placeholder { color: #a0b0c0; }
    :host-context([data-theme="dark"]) .form-group select { color: #a0b0c0; }
    :host-context([data-theme="dark"]) .form-submit button { background: #243447; color: #e4eaf0; border-color: #2d4156; }
    :host-context([data-theme="dark"]) .form-submit button:hover { background: #4fc3f7; color: #1a2332; border-color: #4fc3f7; }
  `]
})
export class ProceduresComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit() {
    this.seoService.updateMetadata({
      title: 'Interjeter un Recours',
      description: 'Procédures et modalités pour interjeter un recours administratif devant le Conseil d\'État de la RDC. Formulaire de demande de recours en ligne.',
      keywords: 'recours administratif, appel, procédure, formulaire, Conseil d\'État',
      ogUrl: '/procedures'
    });
  }
}
