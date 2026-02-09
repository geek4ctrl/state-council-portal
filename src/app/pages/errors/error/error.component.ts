import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <main class="error-page">
      <section class="error-card">
        <p class="error-code">Error</p>
        <h1 class="error-title">Something Went Wrong</h1>
        <p class="error-message">
          We are having trouble completing your request. Please try again or return to the
          State Council homepage.
        </p>
        <div class="error-actions">
          <a routerLink="/" class="primary-btn">Return Home</a>
          <a routerLink="/news" class="secondary-btn">View Updates</a>
        </div>
      </section>
    </main>
  `,
  styles: [
    `
      .error-page {
        min-height: calc(100vh - 120px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 60px 20px;
        background: radial-gradient(circle at top, rgba(191, 152, 116, 0.15), transparent 60%),
          #0f1a2b;
        color: #f5f5f5;
      }

      .error-card {
        max-width: 520px;
        width: 100%;
        text-align: center;
        padding: 40px 32px;
        background: #1a2942;
        border: 1px solid rgba(191, 152, 116, 0.3);
        box-shadow: 0 18px 30px rgba(0, 0, 0, 0.35);
      }

      .error-code {
        font-size: 1.2rem;
        text-transform: uppercase;
        letter-spacing: 4px;
        color: rgba(191, 152, 116, 0.9);
        margin: 0 0 12px 0;
      }

      .error-title {
        font-size: 1.8rem;
        margin: 0 0 16px 0;
        font-weight: 600;
      }

      .error-message {
        font-size: 0.95rem;
        line-height: 1.7;
        color: rgba(255, 255, 255, 0.75);
        margin: 0 0 28px 0;
      }

      .error-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        justify-content: center;
      }

      .primary-btn,
      .secondary-btn {
        text-decoration: none;
        font-weight: 600;
        padding: 12px 22px;
        border-radius: 4px;
        font-size: 0.9rem;
      }

      .primary-btn {
        background: #bf9874;
        color: #1a2942;
      }

      .secondary-btn {
        border: 1px solid rgba(191, 152, 116, 0.6);
        color: #bf9874;
      }

      .secondary-btn:hover {
        background: rgba(191, 152, 116, 0.15);
      }

      @media (max-width: 600px) {
        .error-card {
          padding: 32px 24px;
        }
      }
    `
  ]
})
export class ErrorPageComponent {}
