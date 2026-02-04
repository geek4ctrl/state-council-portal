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
          <h1 class="hero-title">ORGANIZATION AND FUNCTIONING OF<br>THE STATE COUNCIL</h1>
        </div>
      </section>

      <!-- First President Section -->
      <section class="first-president-section">
        <div class="container">
          <div class="president-card-large">
            <div class="president-image-large">
              <img src="https://placehold.co/400x500/8B6914/ffffff?text=First+President" alt="The First President" loading="lazy">
            </div>
            <div class="president-info-large">
              <h2>The First President</h2>
              <p class="president-name">NGOMBA KABEYYA ELIE LEON</p>
              <p class="president-description">
                NGOMBA KABEYYA ELIE LEON, First President, elected through a vote on Thursday, February 29th, 2024, is the
                third-ranking member of the DRC's High Council of the Judiciary. He is in charge of coordinating the entire
                High Court College and Clerk's office. As the head of the State Council, he oversees all judicial
                operations and ensures the proper administration of justice at the highest level of the administrative judicial system.
              </p>
              <p class="president-description">
                His mandate includes supervising the various chambers, presiding over plenary sessions, and maintaining the
                integrity and independence of the judicial system.
              </p>
            </div>
          </div>
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
                  <p>{{ president.title }}</p>
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
                  <p>{{ advisor.title }}</p>
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Services Info Section -->
      <section class="services-info-section">
        <div class="container">
          <h2 class="section-title-white">THE SERVICES OF THE STATE COUNCIL</h2>
          <div class="services-intro">
            <h3>THE SERVICES OF THE STATE COUNCIL</h3>
            <p>
              The organization of the State Council in its various departments ensures the smooth functioning of
              judicial services. Each service plays a crucial role in supporting the magistrates and ensuring the proper
              administration of justice.
            </p>
          </div>
        </div>
      </section>

      <!-- Services Detail Section -->
      <section class="services-section">
        <div class="container">
          <h2 class="section-heading">SERVICES OF THE STATE COUNCIL</h2>

          <div class="services-content">
            <!-- Left Column - Service Links -->
            <div class="service-links">
              <div class="service-item">
                <span class="service-number">1</span>
                <div class="service-text">
                  <h3>The Office of Judicial Documentation Service</h3>
                </div>
              </div>

              <div class="service-item">
                <span class="service-number">2</span>
                <div class="service-text">
                  <h3>The role of Report compilation (report registers)</h3>
                </div>
              </div>
            </div>

            <!-- Right Column - Detailed Text -->
            <div class="service-details">
              <div class="detail-block">
                <h4>The role of Report compilation (report registers)</h4>
                <p>
                  It is well-known that in an administrative court like the State Council, the documentation service is of particular
                  importance for the conduct of judicial activities, because it is responsible for the collection, classification,
                  and conservation of all legal documents necessary for the administration of justice.
                </p>
                <p>
                  This department, in collaboration with several other services, maintains the archives of all court proceedings,
                  decisions, and legal opinions rendered by the Court. It serves as the institutional memory of the Court and ensures
                  that precedents are properly documented and accessible for future reference.
                </p>
                <p>
                  Furthermore, the documentation service supports the research activities of magistrates by providing them with
                  relevant legal materials, jurisprudence, and comparative law studies. This service is essential for maintaining
                  the quality and consistency of judicial decisions at the highest level of the judicial system.
                </p>
                <p>
                  The service also plays a vital role in compiling annual reports that document the Court's activities, statistical
                  data on cases handled, and analyses of judicial trends. These reports contribute to transparency and accountability
                  in the judicial process and serve as valuable resources for legal scholars, practitioners, and the public.
                </p>
                <p>
                  In the digital age, the documentation service has evolved to include electronic archiving systems and digital
                  databases that facilitate quick access to judicial information while ensuring the security and integrity of
                  sensitive legal documents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .page-container {
      min-height: 100vh;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    /* Hero Section */
    .hero-section {
      position: relative;
      height: 300px;
      background: linear-gradient(rgba(10, 25, 41, 0.85), rgba(26, 41, 66, 0.9)),
                  url('https://placehold.co/1920x300/1a2942/ffffff?text=Court+Building') center/cover;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hero-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: white;
      text-align: center;
      line-height: 1.3;
      letter-spacing: 1px;
      margin: 0;
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
    }

    /* First President Section */
    .first-president-section {
      background: white;
      padding: 80px 0;
    }

    .president-card-large {
      display: grid;
      grid-template-columns: 400px 1fr;
      gap: 60px;
      align-items: start;
    }

    .president-image-large {
      width: 100%;
      height: 500px;
      overflow: hidden;
      border-radius: 8px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }

    .president-image-large img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .president-info-large h2 {
      font-size: 2rem;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0 0 15px 0;
    }

    .president-name {
      font-size: 1.25rem;
      font-weight: 600;
      color: #c41e3a;
      margin: 0 0 25px 0;
    }

    .president-description {
      font-size: 1rem;
      line-height: 1.8;
      color: #333;
      margin: 0 0 20px 0;
      text-align: justify;
    }

    /* Members Section (Presidents & Advisors) */
    .members-section {
      background: #1a2942;
      padding: 80px 0;
    }

    .advisors-section {
      padding-top: 0;
    }

    .section-title {
      font-size: 2rem;
      font-weight: 700;
      color: white;
      text-align: center;
      margin: 0 0 50px 0;
      letter-spacing: 1px;
    }

    .members-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
    }

    .member-card {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .member-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    }

    .member-image {
      width: 100%;
      height: 280px;
      overflow: hidden;
      background: #e0e0e0;
    }

    .member-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .member-info {
      padding: 20px;
      text-align: center;
      background: #2c3e50;
    }

    .member-info h3 {
      font-size: 1rem;
      font-weight: 600;
      color: white;
      margin: 0 0 8px 0;
      line-height: 1.4;
    }

    .member-info p {
      font-size: 0.85rem;
      color: rgba(255, 255, 255, 0.8);
      margin: 0;
      line-height: 1.4;
    }

    /* Services Info Section */
    .services-info-section {
      background: #1a2942;
      padding: 60px 0;
    }

    .section-title-white {
      font-size: 2rem;
      font-weight: 700;
      color: white;
      text-align: center;
      margin: 0 0 40px 0;
      letter-spacing: 1px;
    }

    .services-intro {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }

    .services-intro h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: white;
      margin: 0 0 20px 0;
    }

    .services-intro p {
      font-size: 1rem;
      line-height: 1.8;
      color: rgba(255, 255, 255, 0.85);
      margin: 0;
    }

    /* Services Section */
    .services-section {
      background: white;
      padding: 80px 0;
    }

    .section-heading {
      font-size: 2rem;
      font-weight: 700;
      color: #1a1a1a;
      text-align: center;
      margin: 0 0 50px 0;
      letter-spacing: 0.5px;
    }

    .services-content {
      display: grid;
      grid-template-columns: 350px 1fr;
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
      gap: 15px;
      align-items: flex-start;
      padding: 25px;
      background: #f8f9fa;
      border-radius: 8px;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .service-item:hover {
      background: #e8eef7;
      transform: translateX(5px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .service-number {
      flex-shrink: 0;
      width: 35px;
      height: 35px;
      background: #c41e3a;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 1rem;
    }

    .service-text h3 {
      font-size: 0.95rem;
      font-weight: 600;
      color: #1a1a1a;
      line-height: 1.5;
      margin: 0;
    }

    /* Service Details */
    .service-details {
      background: #f8f9fa;
      padding: 35px;
      border-radius: 8px;
      border-left: 4px solid #c8956b;
    }

    .detail-block h4 {
      font-size: 1.1rem;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0 0 20px 0;
      line-height: 1.6;
    }

    .detail-block p {
      font-size: 0.95rem;
      line-height: 1.8;
      color: #333;
      margin: 0 0 15px 0;
      text-align: justify;
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
      .hero-title {
        font-size: 2rem;
      }

      .president-card-large {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .president-image-large {
        height: 400px;
        margin: 0 auto;
        max-width: 400px;
      }

      .members-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 25px;
      }

      .services-content {
        grid-template-columns: 1fr;
        gap: 30px;
      }

      .service-links {
        flex-direction: row;
        overflow-x: auto;
        gap: 15px;
      }

      .service-item {
        min-width: 280px;
      }
    }

    @media (max-width: 768px) {
      .hero-section {
        height: 250px;
      }

      .hero-title {
        font-size: 1.6rem;
      }

      .first-president-section,
      .members-section,
      .services-section {
        padding: 50px 0;
      }

      .section-title,
      .section-title-white,
      .section-heading {
        font-size: 1.5rem;
      }

      .members-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }

      .member-image {
        height: 220px;
      }

      .service-links {
        flex-direction: column;
      }

      .service-item {
        min-width: auto;
      }
    }

    @media (max-width: 480px) {
      .hero-section {
        height: 200px;
      }

      .hero-title {
        font-size: 1.3rem;
      }

      .first-president-section,
      .members-section,
      .services-section {
        padding: 40px 0;
      }

      .president-image-large {
        height: 350px;
      }

      .president-info-large h2 {
        font-size: 1.5rem;
      }

      .president-name {
        font-size: 1.1rem;
      }

      .members-grid {
        grid-template-columns: 1fr;
      }

      .member-image {
        height: 280px;
      }

      .section-title,
      .section-title-white,
      .section-heading {
        font-size: 1.25rem;
      }
    }
  `]
})
export class OrganizationComponent implements OnInit {
  isLoading = signal(true);

  ngOnInit() {
    // Simulate loading data
    setTimeout(() => {
      this.isLoading.set(false);
    }, 1500);
  }

  presidents = [
    { name: 'LUBOYA ILUNGA JOSEPH', title: 'President of the Criminal Chamber', image: 'https://placehold.co/300x300/c41e3a/ffffff?text=LUBOYA' },
    { name: 'KAMANDA KAZADI', title: 'President of the Civil Chamber', image: 'https://placehold.co/300x300/6c757d/ffffff?text=Placeholder' },
    { name: 'MULENGA WA MULENGA JACQUES', title: 'President of the Social Chamber', image: 'https://placehold.co/300x300/c41e3a/ffffff?text=MULENGA' },
    { name: 'KIBONGE MBAYA', title: 'President of the Commercial Chamber', image: 'https://placehold.co/300x300/c41e3a/ffffff?text=KIBONGE' },
    { name: 'KABEYA NTAMBWE', title: 'Vice President', image: 'https://placehold.co/300x300/c41e3a/ffffff?text=KABEYA' },
    { name: 'MUTOMBO KYAMAKOSA', title: 'Vice President', image: 'https://placehold.co/300x300/6c757d/ffffff?text=Placeholder' },
    { name: 'NGALULA MPANYA', title: 'Vice President', image: 'https://placehold.co/300x300/c41e3a/ffffff?text=NGALULA' },
    { name: 'BOLOKO LOONDO', title: 'Vice President', image: 'https://placehold.co/300x300/c41e3a/ffffff?text=BOLOKO' }
  ];

  advisors = [
    { name: 'MUKENDI KALALA', title: 'Legal Advisor', image: 'https://placehold.co/300x300/6c757d/ffffff?text=Placeholder' },
    { name: 'TSHIMANGA MUKUNA', title: 'Legal Advisor', image: 'https://placehold.co/300x300/c41e3a/ffffff?text=TSHIMANGA' },
    { name: 'KASONGO MWEMA', title: 'Legal Advisor', image: 'https://placehold.co/300x300/6c757d/ffffff?text=Placeholder' },
    { name: 'NKONGOLO KABAMBA', title: 'Legal Advisor', image: 'https://placehold.co/300x300/c41e3a/ffffff?text=NKONGOLO' },
    { name: 'ILUNGA KABONGO', title: 'Legal Advisor', image: 'https://placehold.co/300x300/c41e3a/ffffff?text=ILUNGA' },
    { name: 'MWAMBA TSHIBANGU', title: 'Legal Advisor', image: 'https://placehold.co/300x300/c41e3a/ffffff?text=MWAMBA' },
    { name: 'KALALA MWENZE', title: 'Legal Advisor', image: 'https://placehold.co/300x300/c41e3a/ffffff?text=KALALA' },
    { name: 'KABILA MUTOMBO', title: 'Legal Advisor', image: 'https://placehold.co/300x300/c41e3a/ffffff?text=KABILA' }
  ];
}
