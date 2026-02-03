import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skeleton-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (type === 'card') {
      <div class="skeleton-card">
        <div class="skeleton skeleton-image"></div>
        <div class="skeleton-content">
          <div class="skeleton skeleton-title"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text short"></div>
        </div>
      </div>
    }

    @if (type === 'news-card') {
      <div class="skeleton-news-card">
        <div class="skeleton skeleton-news-image"></div>
        <div class="skeleton-news-content">
          <div class="skeleton skeleton-meta"></div>
          <div class="skeleton skeleton-news-title"></div>
          <div class="skeleton skeleton-news-text"></div>
          <div class="skeleton skeleton-news-text"></div>
          <div class="skeleton skeleton-link"></div>
        </div>
      </div>
    }

    @if (type === 'profile-card') {
      <div class="skeleton-profile-card">
        <div class="skeleton skeleton-profile-image"></div>
        <div class="skeleton skeleton-profile-name"></div>
        <div class="skeleton skeleton-profile-title"></div>
      </div>
    }

    @if (type === 'text-block') {
      <div class="skeleton-text-block">
        <div class="skeleton skeleton-heading"></div>
        <div class="skeleton skeleton-paragraph"></div>
        <div class="skeleton skeleton-paragraph"></div>
        <div class="skeleton skeleton-paragraph short"></div>
      </div>
    }
  `,
  styles: [`
    /* Base skeleton animation */
    @keyframes shimmer {
      0% {
        background-position: -1000px 0;
      }
      100% {
        background-position: 1000px 0;
      }
    }

    .skeleton {
      background: linear-gradient(
        90deg,
        #f0f0f0 0%,
        #e0e0e0 20%,
        #f0f0f0 40%,
        #f0f0f0 100%
      );
      background-size: 2000px 100%;
      animation: shimmer 2s infinite linear;
      border-radius: 4px;
    }

    /* Card Skeleton */
    .skeleton-card {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    }

    .skeleton-image {
      width: 100%;
      height: 200px;
    }

    .skeleton-content {
      padding: 20px;
    }

    .skeleton-title {
      height: 24px;
      margin-bottom: 12px;
      width: 80%;
    }

    .skeleton-text {
      height: 16px;
      margin-bottom: 8px;
      width: 100%;
    }

    .skeleton-text.short {
      width: 60%;
    }

    /* News Card Skeleton */
    .skeleton-news-card {
      background: white;
      border-radius: 0;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    }

    .skeleton-news-image {
      width: 100%;
      height: 250px;
    }

    .skeleton-news-content {
      padding: 25px;
    }

    .skeleton-meta {
      height: 14px;
      width: 40%;
      margin-bottom: 15px;
    }

    .skeleton-news-title {
      height: 20px;
      width: 90%;
      margin-bottom: 15px;
    }

    .skeleton-news-text {
      height: 14px;
      width: 100%;
      margin-bottom: 8px;
    }

    .skeleton-link {
      height: 14px;
      width: 80px;
      margin-top: 15px;
    }

    /* Profile Card Skeleton */
    .skeleton-profile-card {
      text-align: center;
      padding: 20px;
    }

    .skeleton-profile-image {
      width: 100%;
      aspect-ratio: 3/4;
      margin-bottom: 15px;
    }

    .skeleton-profile-name {
      height: 16px;
      width: 80%;
      margin: 0 auto 8px;
    }

    .skeleton-profile-title {
      height: 14px;
      width: 60%;
      margin: 0 auto;
    }

    /* Text Block Skeleton */
    .skeleton-text-block {
      padding: 20px 0;
    }

    .skeleton-heading {
      height: 32px;
      width: 50%;
      margin-bottom: 20px;
    }

    .skeleton-paragraph {
      height: 16px;
      width: 100%;
      margin-bottom: 12px;
    }

    .skeleton-paragraph.short {
      width: 70%;
    }
  `]
})
export class SkeletonLoaderComponent {
  @Input() type: 'card' | 'news-card' | 'profile-card' | 'text-block' = 'card';
}
