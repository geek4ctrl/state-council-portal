import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { I18nPipe } from '../../../i18n/i18n.pipe';

@Component({
  selector: 'app-not-found',
  imports: [CommonModule, RouterLink, I18nPipe],
  template: `
    <main class="error-page">
      <section class="error-card glass-card">
        <p class="error-code">{{ 'errors.notFound.code' | i18n }}</p>
        <h1 class="error-title">{{ 'errors.notFound.title' | i18n }}</h1>
        <p class="error-message">{{ 'errors.notFound.message' | i18n }}</p>
        <div class="error-actions">
          <a routerLink="/" class="primary-btn">{{ 'errors.generic.primary' | i18n }}</a>
          <a routerLink="/news" class="secondary-btn">{{ 'errors.generic.secondary' | i18n }}</a>
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
        font-size: 4.5rem;
        font-weight: 700;
        color: #bf9874;
        margin: 0 0 10px 0;
        letter-spacing: 3px;
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

        .error-code {
          font-size: 3.5rem;
        }
      }
    `
  ]
})
export class NotFoundComponent {}
