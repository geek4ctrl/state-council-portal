import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="page-container">
      <section class="hero-section">
        <div class="hero-content">
          <h1>Presentation of the Court of Cassation</h1>
          <p class="subtitle">The Supreme Court of the Ordinary Judicial System</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <div class="intro">
            <h2>About the Court</h2>
            <p>
              The Court of Cassation of the Democratic Republic of Congo stands as the highest court in the ordinary judicial system.
              It ensures the uniform interpretation and application of law throughout the nation, serving as the final authority on legal matters.
            </p>
          </div>

          <div class="mission-vision">
            <div class="card">
              <h3>Our Mission</h3>
              <p>
                To uphold justice by ensuring the correct application of law, maintaining legal certainty,
                and protecting the rights of citizens through impartial and consistent judicial review.
              </p>
            </div>
            <div class="card">
              <h3>Our Vision</h3>
              <p>
                To be a beacon of justice, recognized nationally and internationally for excellence in jurisprudence,
                integrity in decision-making, and commitment to the rule of law.
              </p>
            </div>
          </div>

          <div class="role-section">
            <h2>Role and Jurisdiction</h2>
            <p>
              As the supreme court of the ordinary judicial system, the Court of Cassation exercises jurisdiction over:
            </p>
            <ul>
              <li>Appeals in cassation from decisions of Courts of Appeal</li>
              <li>Jurisdictional privilege cases involving high-ranking officials</li>
              <li>Review of procedural errors and application of law</li>
              <li>Ensuring consistency in legal interpretation across the judicial system</li>
            </ul>
          </div>

          <div class="composition">
            <h2>Composition</h2>
            <p>
              The Court is composed of highly qualified magistrates and counselors selected for their exceptional legal expertise,
              integrity, and commitment to justice. Led by the First President, the Court operates through specialized chambers
              addressing different areas of law.
            </p>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .page-container {
      min-height: 100vh;
    }

    .hero-section {
      background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
      color: white;
      padding: 100px 20px 80px;
      text-align: center;
    }

    .hero-content h1 {
      font-size: 2.8rem;
      font-weight: 700;
      margin-bottom: 20px;
      color: white;
    }

    .subtitle {
      font-size: 1.3rem;
      color: #ecf0f1;
      font-weight: 300;
    }

    .content-section {
      padding: 80px 20px;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .intro {
      margin-bottom: 60px;
      text-align: center;
    }

    .intro h2 {
      font-size: 2.2rem;
      color: #2c3e50;
      margin-bottom: 20px;
    }

    .intro p {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #555;
      max-width: 900px;
      margin: 0 auto;
    }

    .mission-vision {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 40px;
      margin-bottom: 60px;
    }

    .card {
      background: white;
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }

    .card h3 {
      font-size: 1.6rem;
      color: #c41e3a;
      margin-bottom: 15px;
    }

    .card p {
      line-height: 1.8;
      color: #555;
    }

    .role-section, .composition {
      margin-bottom: 60px;
    }

    .role-section h2, .composition h2 {
      font-size: 2rem;
      color: #2c3e50;
      margin-bottom: 20px;
    }

    .role-section p, .composition p {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #555;
      margin-bottom: 20px;
    }

    .role-section ul {
      list-style: none;
      padding: 0;
    }

    .role-section ul li {
      padding: 12px 0 12px 30px;
      position: relative;
      font-size: 1.05rem;
      line-height: 1.6;
      color: #555;
    }

    .role-section ul li::before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #c41e3a;
      font-weight: bold;
      font-size: 1.2rem;
    }

    @media (max-width: 768px) {
      .hero-content h1 {
        font-size: 2rem;
      }

      .subtitle {
        font-size: 1.1rem;
      }

      .intro h2, .role-section h2, .composition h2 {
        font-size: 1.6rem;
      }

      .content-section {
        padding: 50px 20px;
      }
    }
  `]
})
export class AboutComponent {}
