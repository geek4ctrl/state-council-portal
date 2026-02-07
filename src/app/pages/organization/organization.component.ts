import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonLoaderComponent } from '../../components/skeleton-loader/skeleton-loader.component';
import { LazyLoadDirective } from '../../directives/lazy-load.directive';

@Component({
  selector: 'app-organization',
  standalone: true,
  imports: [CommonModule, SkeletonLoaderComponent, LazyLoadDirective],
  template: `
    <div class="page-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <h1 class="hero-title">ORGANIZATION AND FUNCTIONING OF<br>THE COURT OF CASSATION</h1>
        </div>
      </section>

      <!-- First President Section -->
      <section class="first-president-section">
        <div class="container">
          <div class="president-card-large">
            <div class="president-image-large">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop" alt="The First President" loading="lazy">
            </div>
            <div class="president-info-large">
              <h2 class="president-title-underlined">The First President</h2>
              <p class="president-description">
                <strong>NDOMBA KABEYA Elie-Léon</strong> First President premier-president-ndomba@cassation.cd
                Designated by decree under number 23/169 of August 15, 2023, Elie-Léon
                NDOMBA KABEYA was installed in his capacity as First President of the Court of Cassation, officially took
                his oath on Thursday, September 14, 2023 in the presence of the President of the
                Republic, Félix Antoine Tshisekedi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Senior Magistrates Label -->
      <section class="senior-label-section">
        <div class="container">
          <div class="senior-label">SENIOR MAGISTRATES</div>
        </div>
      </section>

      <!-- The Presidents Section -->
      <section class="members-section presidents-section">
        <div class="container">
          <h2 class="section-title">THE PRESIDENTS</h2>
          <div class="members-grid">
            @if (isLoading()) {
              @for (item of [1, 2, 3, 4, 5, 6, 7, 8]; track item) {
                <app-skeleton-loader type="profile-card"></app-skeleton-loader>
              }
            } @else {
              <div class="member-card" *ngFor="let president of presidents">
                <div class="member-image">
                  <img [src]="president.image" [alt]="president.name" loading="lazy">
                </div>
                <div class="member-info">
                  <h3>{{ president.name }}</h3>
                  <p class="member-title">{{ president.title }}</p>
                  <p class="member-email">{{ president.email }}</p>
                  <a href="#" class="learn-more">LEARN MORE →</a>
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- The Advisors Section -->
      <section class="members-section advisors-section">
        <div class="container">
          <h2 class="section-title">THE ADVISORS</h2>
          <div class="members-grid">
            @if (isLoading()) {
              @for (item of [1, 2, 3, 4, 5, 6, 7, 8]; track item) {
                <app-skeleton-loader type="profile-card"></app-skeleton-loader>
              }
            } @else {
              <div class="member-card" *ngFor="let advisor of advisors">
                <div class="member-image">
                  <img [src]="advisor.image" [alt]="advisor.name" loading="lazy">
                </div>
                <div class="member-info">
                  <h3>{{ advisor.name }}</h3>
                  <p class="member-title">{{ advisor.title }}</p>
                  <p class="member-email">{{ advisor.email }}</p>
                  <a href="#" class="learn-more">LEARN MORE →</a>
                </div>
              </div>
            }
          </div>
          <div class="load-more-container">
            <button class="load-more-btn">LOAD MORE</button>
          </div>
        </div>
      </section>

      <!-- Services Info Section -->
      <section class="services-info-section">
        <div class="container">
          <h2 class="section-title-white">THE SERVICES OF THE COURT OF CASSATION</h2>
          <div class="services-grid">
            <div class="service-box">
              <h3>The Registry</h3>
              <p>The registry ensures record-keeping</p>
              <a href="#" class="service-link">LEARN MORE →</a>
            </div>
            <div class="service-box">
              <h3>The Documentation, Studies and Publication Unit</h3>
              <p>The documentation service</p>
              <a href="#" class="service-link">LEARN MORE →</a>
            </div>
            <div class="service-box">
              <h3>The Television Agency</h3>
              <p>The television agency supports justice</p>
              <a href="#" class="service-link">LEARN MORE →</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Detail Section -->
      <section class="services-section">
        <div class="container">
          <h2 class="section-heading">SERVICES OF THE COURT OF CASSATION</h2>
          <p class="section-subheading">Primary sessions and training</p>

          <div class="services-content">
            <!-- Left Column - Service Links -->
            <div class="service-links">
              <div class="service-item" 
                   [class.active]="selectedService() === 'divisions'"
                   (click)="selectService('divisions')">
                <span class="service-icon">📋</span>
                <div class="service-text">
                  <h4>The Court of Cassation comprises three divisions:</h4>
                  <ol>
                    <li>The rooms</li>
                    <li>A council of justice</li>
                    <li>The minister's oversight registers</li>
                  </ol>
                </div>
              </div>

              <div class="service-item" 
                   [class.active]="selectedService() === 'rooms'"
                   (click)="selectService('rooms')">
                <span class="service-icon">🏛️</span>
                <div class="service-text">
                  <h4>1. The Rooms</h4>
                  <p>Restricted rooms and chambers of the Court</p>
                </div>
              </div>

              <div class="service-item" 
                   [class.active]="selectedService() === 'council'"
                   (click)="selectService('council')">
                <span class="service-icon">⚖️</span>
                <div class="service-text">
                  <h4>2. A Council of Justice</h4>
                  <p>Judicial council and oversight body</p>
                </div>
              </div>

              <div class="service-item" 
                   [class.active]="selectedService() === 'registers'"
                   (click)="selectService('registers')">
                <span class="service-icon">📚</span>
                <div class="service-text">
                  <h4>3. The Minister's Oversight Registers</h4>
                  <p>Official documentation and registry system</p>
                </div>
              </div>
            </div>

            <!-- Right Column - Detailed Text -->
            <div class="service-details">
              @if (selectedService() === 'divisions') {
                <div class="detail-box active">
                  <span class="detail-icon">📋</span>
                  <div class="detail-content">
                    <h4>The Court of Cassation comprises four chambers</h4>
                    <ol>
                      <li>The chamber of appeal in criminal as well court cases.</li>
                      <li>The chamber of appeal in correction for minor incidents as well as special procedures stipulated under exceptional laws</li>
                      <li>The chamber of appeal in judicial failures civil all appeals against judgments rendered at first instance by the courts of peace of cassation before courts</li>
                      <li>The chamber of appeal in commercial failures of law all cassations against decisions rendered in commercial matters before the commercial Court of justice and Arbitration, CCJA territory.</li>
                    </ol>
                    <p>
                      In addition to these four chambers, there exists a chamber on extraordinary instance of all the judges of the Court of Cassation, competent to handle cases referred to it by the President as public cassation, it can be referred before all the proceedings or when contradictory decisions have been rendered by the various chambers of the Court of Cassation.
                    </p>
                    <p>
                      Executive orders will determine all by the Prime Minister on the jurisdiction of all the chambers of the Court of Cassation.
                    </p>
                  </div>
                </div>
              }

              @if (selectedService() === 'rooms') {
                <div class="detail-box active">
                  <span class="detail-icon">🏛️</span>
                  <div class="detail-content">
                    <h4>The Rooms - Restricted Chambers</h4>
                    <p>
                      The rooms of the Court of Cassation are specialized chambers where judicial proceedings are conducted with strict adherence to procedural rules and regulations. These restricted chambers are designed to ensure the proper administration of justice at the highest level of the judicial system.
                    </p>
                    <p>
                      Each room is equipped with modern facilities to facilitate hearings, deliberations, and the rendering of judgments. The chambers maintain strict security protocols to protect the integrity of judicial proceedings and ensure confidentiality where required by law.
                    </p>
                    <p>
                      The architectural design of these rooms reflects the dignity and solemnity of the judicial process, featuring traditional judicial furnishings including the bench for magistrates, areas for legal counsel, and public galleries where appropriate.
                    </p>
                    <p>
                      Access to these restricted rooms is carefully controlled and limited to authorized personnel including magistrates, court officers, legal practitioners with matters before the court, and members of the public attending open proceedings.
                    </p>
                  </div>
                </div>
              }

              @if (selectedService() === 'council') {
                <div class="detail-box active">
                  <span class="detail-icon">⚖️</span>
                  <div class="detail-content">
                    <h4>A Council of Justice</h4>
                    <p>
                      The Council of Justice serves as an essential oversight body within the Court of Cassation, responsible for ensuring the proper administration of justice and maintaining the highest standards of judicial conduct and performance.
                    </p>
                    <p>
                      This council is composed of senior magistrates who bring extensive experience and expertise to their supervisory role. They meet regularly to review judicial operations, address procedural concerns, and ensure consistency in the application of law across all chambers.
                    </p>
                    <p>
                      The Council of Justice plays a crucial role in judicial appointments, promotions, and disciplinary matters affecting members of the court. It ensures that all magistrates maintain the independence, integrity, and competence required for their positions.
                    </p>
                    <p>
                      Additionally, the council provides guidance on complex legal matters, reviews proposed reforms to judicial procedures, and serves as a liaison between the Court of Cassation and other branches of government on matters affecting the administration of justice.
                    </p>
                  </div>
                </div>
              }

              @if (selectedService() === 'registers') {
                <div class="detail-box active">
                  <span class="detail-icon">📚</span>
                  <div class="detail-content">
                    <h4>The Minister's Oversight Registers</h4>
                    <p>
                      The Minister's Oversight Registers constitute a comprehensive documentation system that maintains detailed records of all judicial activities, decisions, and administrative actions undertaken by the Court of Cassation.
                    </p>
                    <p>
                      These registers serve multiple critical functions: they provide a permanent record of court proceedings, ensure transparency and accountability in judicial operations, and facilitate oversight by appropriate governmental authorities while respecting judicial independence.
                    </p>
                    <p>
                      The registry system maintains various categories of records including case files, judgment registers, appointment records, administrative decisions, and statistical data on court activities. All entries are made according to strict protocols to ensure accuracy and completeness.
                    </p>
                    <p>
                      Modern digital systems have been integrated with traditional paper-based registers to enhance accessibility, security, and preservation of these vital judicial records. The registry staff undergoes specialized training to maintain these important documents according to international archival standards.
                    </p>
                    <p>
                      Regular audits and reviews ensure that the oversight registers remain current, accurate, and properly maintained, serving as an indispensable resource for judicial administration and legal research.
                    </p>
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
              <h3>Main Office</h3>
              <p>No. 3 Avenue de la Justice</p>
              <p>Central District of Kinshasa</p>
              <p>Democratic Republic of Congo</p>
              <p class="footer-contact">Tel: +243 (21) 0000000</p>
              <p class="footer-contact">Email: info@conseildetat.cd</p>
            </div>

            <div class="footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#">About the Court</a></li>
                <li><a href="#">Jurisprudence</a></li>
                <li><a href="#">Filing Procedures</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>

            <div class="footer-column">
              <h3>Resources</h3>
              <ul>
                <li><a href="#">Legal Documents</a></li>
                <li><a href="#">Court Decisions</a></li>
                <li><a href="#">Annual Reports</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>

            <div class="footer-column">
              <h3>Connect</h3>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <div class="footer-bottom-content">
            <a href="#" class="privacy-link">Privacy</a>
            <p class="copyright">Copyright State Council. All Rights Reserved</p>
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
      font-family: 'Playfair Display', serif;
    }

    /* First President Section */
    .first-president-section {
      background: #0a1929;
      padding: 0;
    }

    .president-card-large {
      display: grid;
      grid-template-columns: 300px 1fr;
      gap: 0;
      align-items: start;
      background: #1a2942;
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
      color: white;
      margin: 0 0 25px 0;
      font-family: 'Playfair Display', serif;
      letter-spacing: 1px;
      padding-bottom: 15px;
      border-bottom: 2px solid #8b7355;
      display: inline-block;
    }

    .president-description {
      font-size: 0.95rem;
      line-height: 1.8;
      color: rgba(255, 255, 255, 0.85);
      margin: 0;
      text-align: left;
    }

    .president-description strong {
      color: white;
      font-weight: 600;
    }

    /* Senior Label Section */
    .senior-label-section {
      background: #0a1929;
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
      background: #0a1929;
      padding: 20px 0 60px 0;
    }

    .advisors-section {
      padding-top: 40px;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 300;
      color: white;
      text-align: left;
      margin: 0 0 40px 0;
      letter-spacing: 2px;
      font-family: 'Playfair Display', serif;
    }

    .members-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
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
      background: #0a1929;
      padding: 60px 0 80px 0;
    }

    .section-title-white {
      font-size: 2.5rem;
      font-weight: 300;
      color: white;
      text-align: center;
      margin: 0 0 50px 0;
      letter-spacing: 2px;
      font-family: 'Playfair Display', serif;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }

    .service-box {
      background: transparent;
      padding: 0;
      text-align: left;
    }

    .service-box h3 {
      font-size: 1.1rem;
      font-weight: 600;
      color: white;
      margin: 0 0 10px 0;
      line-height: 1.4;
    }

    .service-box p {
      font-size: 0.9rem;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.6);
      margin: 0 0 15px 0;
    }

    .service-link {
      font-size: 0.75rem;
      color: #8b7355;
      text-decoration: none;
      font-weight: 600;
      letter-spacing: 1px;
      display: inline-block;
      transition: color 0.3s ease;
    }

    .service-link:hover {
      color: #a89070;
    }

    /* Services Section */
    .services-section {
      background: white;
      padding: 80px 0;
    }

    .section-heading {
      font-size: 2.5rem;
      font-weight: 300;
      color: #1a1a1a;
      text-align: center;
      margin: 0 0 10px 0;
      letter-spacing: 1px;
      font-family: 'Playfair Display', serif;
    }

    .section-subheading {
      font-size: 0.9rem;
      color: #8b7355;
      text-align: center;
      margin: 0 0 50px 0;
      font-style: italic;
    }

    .services-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }

    /* Service Links */
    .service-links {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .service-item {
      display: flex;
      gap: 20px;
      align-items: flex-start;
      padding: 30px;
      background: #fff9f0;
      border-left: 4px solid #e0e0e0;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .service-item:hover {
      border-left-color: #8b7355;
      background: #fff5e6;
    }

    .service-item.active {
      border-left-color: #8b7355;
      background: #fff5e6;
      box-shadow: 0 4px 12px rgba(139, 115, 85, 0.2);
    }

    .service-icon {
      flex-shrink: 0;
      width: 40px;
      height: 40px;
      background: #8b7355;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
    }

    .service-item.active .service-icon {
      background: #6d5a43;
    }

    .service-text h4 {
      font-size: 1rem;
      font-weight: 600;
      color: #1a1a1a;
      line-height: 1.5;
      margin: 0 0 15px 0;
    }

    .service-text p {
      font-size: 0.9rem;
      line-height: 1.6;
      color: #666;
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
      gap: 20px;
    }

    .detail-box {
      display: flex;
      gap: 20px;
      align-items: flex-start;
      padding: 30px;
      background: #fff9f0;
      border-left: 4px solid #8b7355;
      opacity: 0;
      animation: fadeIn 0.5s ease forwards;
    }

    .detail-box.active {
      opacity: 1;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .detail-icon {
      flex-shrink: 0;
      width: 40px;
      height: 40px;
      background: #8b7355;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
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

    /* Footer */
    .footer-section {
      background-color: transparent;
    }

    .footer-main {
      background-color: #2C3E50;
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
      background-color: #EAF1FA;
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

    @media (max-width: 1024px) {
      .offer-grid,
      .practice-grid,
      .newsletter-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .quick-links-container {
        flex-wrap: wrap;
      }

      .president-content {
        grid-template-columns: 380px 1fr;
      }

      .info-left {
        gap: 20px;
      }

      .info-item span {
        font-size: 0.75rem;
      }
    }

    @media (max-width: 768px) {
      .quick-links-container,
      .offer-grid,
      .practice-grid,
      .newsletter-grid {
        grid-template-columns: 1fr;
      }

      .president-content {
        grid-template-columns: 1fr;
      }

      .contact-bar {
        flex-direction: column;
      }

      .footer-grid {
        grid-template-columns: 1fr;
      }
      .footer-bottom-content {
        flex-direction: column;
        gap: 15px;
        text-align: center;
      }
    }

    @media (max-width: 480px) {
      .hero-title {
        font-size: 1.4rem;
      }

      .president-info-large {
        padding: 30px 20px;
      }

      .president-title-underlined {
        font-size: 1.8rem;
      }

      .members-grid {
        grid-template-columns: 1fr;
      }

      .section-title,
      .section-title-white,
      .section-heading {
        font-size: 1.5rem;
      }
    }
  `]
})
export class OrganizationComponent implements OnInit {
  isLoading = signal(true);
  selectedService = signal<string>('divisions');

  ngOnInit() {
    // Simulate loading data
    setTimeout(() => {
      this.isLoading.set(false);
    }, 1500);
  }

  selectService(service: string) {
    this.selectedService.set(service);
  }

  presidents = [
    { 
      name: 'KAZADI WALUMBILE', 
      title: 'President',
      email: 'kazadi@cassation.cd',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=350&fit=crop' 
    },
    { 
      name: 'MUKENGELI MUKENGELI', 
      title: 'President',
      email: 'mukengeli@cassation.cd',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=350&fit=crop' 
    },
    { 
      name: 'MWANGALWA MUSALI', 
      title: 'President',
      email: 'mwangalwa@cassation.cd',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=350&fit=crop' 
    },
    { 
      name: 'UBULU MPINGU', 
      title: 'President',
      email: 'ubulu@cassation.cd',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=350&fit=crop' 
    },
    { 
      name: 'KABEYELE NZEMBELE', 
      title: 'President',
      email: 'kabeyele@cassation.cd',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=350&fit=crop' 
    },
    { 
      name: 'MATHE KYALIRE', 
      title: 'President',
      email: 'mathe@cassation.cd',
      image: 'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=300&h=350&fit=crop' 
    },
    { 
      name: 'KOLOMUNA JITSA PASCAL', 
      title: 'President',
      email: 'kolomuna@cassation.cd',
      image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=350&fit=crop' 
    },
    { 
      name: 'BAKINENGAYI BOLOKO', 
      title: 'President',
      email: 'bakinengayi@cassation.cd',
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&h=350&fit=crop' 
    }
  ];

  advisors = [
    { 
      name: 'MASHCI MIPIA TORIISIA', 
      title: 'Advisor',
      email: 'mashci@cassation.cd',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=350&fit=crop' 
    },
    { 
      name: 'IBONIKA NGAMOLO', 
      title: 'Advisor',
      email: 'ibonika@cassation.cd',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=350&fit=crop' 
    },
    { 
      name: 'ILUNG TAMIN', 
      title: 'Advisor',
      email: 'ilung@cassation.cd',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=350&fit=crop' 
    },
    { 
      name: 'ZAISNE ZINALIBWA', 
      title: 'Advisor',
      email: 'zaisne@cassation.cd',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=350&fit=crop' 
    },
    { 
      name: 'OTHUNGU WONGOZI OGYTA', 
      title: 'Advisor',
      email: 'othungu@cassation.cd',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=350&fit=crop' 
    },
    { 
      name: 'LOHOTA IITUMBA', 
      title: 'Advisor',
      email: 'lohota@cassation.cd',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=350&fit=crop' 
    },
    { 
      name: 'KALUMBA KAMPATA', 
      title: 'Advisor',
      email: 'kalumba@cassation.cd',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=350&fit=crop' 
    },
    { 
      name: 'BAKUNGA NGIMBE', 
      title: 'Advisor',
      email: 'bakunga@cassation.cd',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=350&fit=crop' 
    }
  ];
}