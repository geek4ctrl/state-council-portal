import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'presentation',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'judges',
    loadComponent: () => import('./pages/judges/judges.component').then(m => m.JudgesComponent)
  },
  {
    path: 'organization/member/:slug',
    loadComponent: () => import('./pages/member-detail/member-detail.component').then(m => m.MemberDetailComponent)
  },
  {
    path: 'organization',
    loadComponent: () => import('./pages/organization/organization.component').then(m => m.OrganizationComponent)
  },
  {
    path: 'history',
    loadComponent: () => import('./pages/history/history.component').then(m => m.HistoryComponent)
  },
  {
    path: 'reforms',
    loadComponent: () => import('./pages/reforms/reforms.component').then(m => m.ReformsComponent)
  },
  {
    path: 'international-relations',
    loadComponent: () => import('./pages/international-relations/international-relations.component').then(m => m.InternationalRelationsComponent)
  },
  {
    path: 'audiences',
    loadComponent: () => import('./pages/audiences/audiences.component').then(m => m.AudiencesComponent)
  },
  {
    path: 'steps',
    loadComponent: () => import('./pages/steps/steps.component').then(m => m.StepsComponent)
  },
  { path: 'filing', redirectTo: 'steps', pathMatch: 'full' },
  { path: 'appointment', redirectTo: 'steps', pathMatch: 'full' },
  { path: 'procedures', redirectTo: 'steps', pathMatch: 'full' },
  {
    path: 'process',
    loadComponent: () => import('./pages/process/process.component').then(m => m.ProcessComponent)
  },
  {
    path: 'news',
    loadComponent: () => import('./pages/news/news.component').then(m => m.NewsComponent)
  },
  { path: '**', redirectTo: '' }
];
