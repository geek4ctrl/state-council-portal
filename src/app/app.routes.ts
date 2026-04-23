import { Routes } from '@angular/router';
import { PresentationComponent } from './pages/presentation/presentation.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    data: { titleKey: 'header.nav.home' }
  },
  {
    path: 'presentation/:section',
    loadComponent: () =>
      import('./pages/presentation-section/presentation-section.component').then(
        (m) => m.PresentationSectionComponent,
      ),
    data: { titleKey: 'header.nav.presentation' }
  },
  {
    path: 'presentation',
    component: PresentationComponent,
    pathMatch: 'full',
    data: { titleKey: 'header.nav.presentation' }
  },
  {
    path: 'judges',
    loadComponent: () => import('./pages/judges/judges.component').then(m => m.JudgesComponent),
    data: { titleKey: 'judges.title' }
  },
  {
    path: 'organization/member/:slug',
    loadComponent: () => import('./pages/member-detail/member-detail.component').then(m => m.MemberDetailComponent),
    data: { titleKey: 'memberDetail.title' }
  },
  { path: 'organization', redirectTo: 'presentation', pathMatch: 'full' },
  {
    path: 'administrative-courts',
    loadComponent: () => import('./pages/administrative-courts/administrative-courts.component').then(m => m.AdministrativeCourtsComponent),
    data: { titleKey: 'header.nav.administrativeCourts' }
  },
  {
    path: 'administrative-tribunals',
    loadComponent: () => import('./pages/administrative-tribunals/administrative-tribunals.component').then(m => m.AdministrativeTribunalsComponent),
    data: { titleKey: 'header.nav.administrativeTribunals' }
  },
  {
    path: 'history',
    loadComponent: () => import('./pages/history/history.component').then(m => m.HistoryComponent),
    data: { titleKey: 'history.title' }
  },
  {
    path: 'reforms',
    loadComponent: () => import('./pages/reforms/reforms.component').then(m => m.ReformsComponent),
    data: { titleKey: 'header.nav.reforms' }
  },
  {
    path: 'international-relations',
    loadComponent: () => import('./pages/international-relations/international-relations.component').then(m => m.InternationalRelationsComponent),
    data: { titleKey: 'header.nav.international' }
  },
  {
    path: 'audiences',
    loadComponent: () => import('./pages/audiences/audiences.component').then(m => m.AudiencesComponent),
    data: { titleKey: 'header.nav.audiences' }
  },
  {
    path: 'steps',
    loadComponent: () => import('./pages/steps/steps.component').then(m => m.StepsComponent),
    data: { titleKey: 'header.nav.steps' }
  },
  { path: 'filing', redirectTo: 'steps', pathMatch: 'full' },
  { path: 'appointment', redirectTo: 'steps', pathMatch: 'full' },
  { path: 'procedures', redirectTo: 'steps', pathMatch: 'full' },
  {
    path: 'process',
    loadComponent: () => import('./pages/process/process.component').then(m => m.ProcessComponent),
    data: { titleKey: 'process.title' }
  },
  {
    path: 'news/:id',
    loadComponent: () => import('./pages/news-detail/news-detail.component').then(m => m.NewsDetailComponent),
    data: { titleKey: 'news.detail.title' }
  },
  {
    path: 'news',
    loadComponent: () => import('./pages/news/news.component').then(m => m.NewsComponent),
    data: { titleKey: 'news.hero.title' }
  },
  {
    path: 'error',
    loadComponent: () => import('./pages/errors/error/error.component').then(m => m.ErrorPageComponent),
    data: { titleKey: 'errors.generic.title' }
  },
  {
    path: '404',
    loadComponent: () => import('./pages/errors/not-found/not-found.component').then(m => m.NotFoundComponent),
    data: { titleKey: 'errors.notFound.title' }
  },
  { path: '**', redirectTo: '404' }
];
