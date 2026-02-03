import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type IconName =
  | 'phone' | 'clock' | 'mail' | 'map-pin' | 'calendar' | 'user'
  | 'users' | 'building' | 'scale' | 'shield' | 'gavel' | 'file-text'
  | 'briefcase' | 'globe' | 'book-open' | 'award' | 'check-circle'
  | 'arrow-right' | 'chevron-right' | 'chevron-down' | 'menu' | 'x'
  | 'facebook' | 'twitter' | 'instagram' | 'linkedin'
  | 'search' | 'send' | 'external-link';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size"
      [attr.viewBox]="viewBox"
      [attr.fill]="fill"
      [attr.stroke]="stroke"
      [attr.stroke-width]="strokeWidth"
      [attr.stroke-linecap]="strokeLinecap"
      [attr.stroke-linejoin]="strokeLinejoin"
      [class]="'icon icon-' + name + ' ' + customClass"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ng-container [ngSwitch]="name">
        <!-- Communication Icons -->
        <g *ngSwitchCase="'phone'">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </g>

        <g *ngSwitchCase="'clock'">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </g>

        <g *ngSwitchCase="'mail'">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </g>

        <g *ngSwitchCase="'map-pin'">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </g>

        <g *ngSwitchCase="'calendar'">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </g>

        <!-- User Icons -->
        <g *ngSwitchCase="'user'">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </g>

        <g *ngSwitchCase="'users'">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </g>

        <!-- Legal/Justice Icons -->
        <g *ngSwitchCase="'scale'">
          <line x1="12" y1="3" x2="12" y2="21"></line>
          <path d="M5 9l-3 6h6l-3-6z"></path>
          <path d="M19 9l-3 6h6l-3-6z"></path>
          <line x1="1" y1="21" x2="23" y2="21"></line>
        </g>

        <g *ngSwitchCase="'shield'">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </g>

        <g *ngSwitchCase="'gavel'">
          <path d="M14 3L6 11l3 3 8-8-3-3zM2 19l2 2 4-4-2-2-4 4zM18 9l3-3-2-2-3 3 2 2z"></path>
          <path d="M3 21h18"></path>
        </g>

        <g *ngSwitchCase="'building'">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
          <path d="M9 22v-4h6v4"></path>
          <path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"></path>
        </g>

        <!-- Document Icons -->
        <g *ngSwitchCase="'file-text'">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14,2 14,8 20,8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10,9 9,9 8,9"></polyline>
        </g>

        <g *ngSwitchCase="'book-open'">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </g>

        <g *ngSwitchCase="'briefcase'">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </g>

        <!-- Global/International Icons -->
        <g *ngSwitchCase="'globe'">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </g>

        <g *ngSwitchCase="'award'">
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </g>

        <!-- Action Icons -->
        <g *ngSwitchCase="'check-circle'">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </g>

        <g *ngSwitchCase="'arrow-right'">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </g>

        <g *ngSwitchCase="'chevron-right'">
          <polyline points="9 18 15 12 9 6"></polyline>
        </g>

        <g *ngSwitchCase="'chevron-down'">
          <polyline points="6 9 12 15 18 9"></polyline>
        </g>

        <g *ngSwitchCase="'search'">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </g>

        <g *ngSwitchCase="'send'">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </g>

        <g *ngSwitchCase="'external-link'">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </g>

        <!-- Navigation Icons -->
        <g *ngSwitchCase="'menu'">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </g>

        <g *ngSwitchCase="'x'">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </g>

        <!-- Social Media Icons -->
        <g *ngSwitchCase="'facebook'">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" [attr.fill]="fill !== 'none' ? fill : null" [attr.stroke]="fill !== 'none' ? 'none' : stroke"></path>
        </g>

        <g *ngSwitchCase="'twitter'">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" [attr.fill]="fill !== 'none' ? fill : null" [attr.stroke]="fill !== 'none' ? 'none' : stroke"></path>
        </g>

        <g *ngSwitchCase="'instagram'">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" [attr.fill]="fill !== 'none' ? fill : null" [attr.stroke]="fill !== 'none' ? 'none' : stroke"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" [attr.fill]="fill !== 'none' ? 'white' : 'none'" [attr.stroke]="fill !== 'none' ? 'none' : stroke"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" [attr.stroke]="fill !== 'none' ? 'white' : stroke" stroke-width="2"></line>
        </g>

        <g *ngSwitchCase="'linkedin'">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" [attr.fill]="fill !== 'none' ? fill : null" [attr.stroke]="fill !== 'none' ? 'none' : stroke"></path>
          <rect x="2" y="9" width="4" height="12" [attr.fill]="fill !== 'none' ? fill : null" [attr.stroke]="fill !== 'none' ? 'none' : stroke"></rect>
          <circle cx="4" cy="4" r="2" [attr.fill]="fill !== 'none' ? fill : null" [attr.stroke]="fill !== 'none' ? 'none' : stroke"></circle>
        </g>
      </ng-container>
    </svg>
  `,
  styles: [`
    .icon {
      display: inline-block;
      vertical-align: middle;
      flex-shrink: 0;
    }
  `]
})
export class IconComponent {
  @Input() name: IconName = 'user';
  @Input() size: number | string = 24;
  @Input() fill: string = 'none';
  @Input() stroke: string = 'currentColor';
  @Input() strokeWidth: number | string = 2;
  @Input() strokeLinecap: 'butt' | 'round' | 'square' = 'round';
  @Input() strokeLinejoin: 'miter' | 'round' | 'bevel' = 'round';
  @Input() customClass: string = '';
  @Input() viewBox: string = '0 0 24 24';
}
