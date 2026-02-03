import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { JudgesComponent } from './pages/judges/judges.component';
import { OrganizationComponent } from './pages/organization/organization.component';
import { HistoryComponent } from './pages/history/history.component';
import { AudiencesComponent } from './pages/audiences/audiences.component';
import { ProcessComponent } from './pages/process/process.component';
import { NewsComponent } from './pages/news/news.component';
import { ReformsComponent } from './pages/reforms/reforms.component';
import { InternationalRelationsComponent } from './pages/international-relations/international-relations.component';
import { StepsComponent } from './pages/steps/steps.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'presentation', component: AboutComponent },
  { path: 'judges', component: JudgesComponent },
  { path: 'organization', component: OrganizationComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'reforms', component: ReformsComponent },
  { path: 'international-relations', component: InternationalRelationsComponent },
  { path: 'audiences', component: AudiencesComponent },
  { path: 'steps', component: StepsComponent },
  { path: 'filing', redirectTo: 'steps', pathMatch: 'full' },
  { path: 'appointment', redirectTo: 'steps', pathMatch: 'full' },
  { path: 'procedures', redirectTo: 'steps', pathMatch: 'full' },
  { path: 'process', component: ProcessComponent },
  { path: 'news', component: NewsComponent },
  { path: '**', redirectTo: '' }
];
