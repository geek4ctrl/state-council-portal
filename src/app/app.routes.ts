import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { JudgesComponent } from './pages/judges/judges.component';
import { OrganizationComponent } from './pages/organization/organization.component';
import { HistoryComponent } from './pages/history/history.component';
import { AudiencesComponent } from './pages/audiences/audiences.component';
import { FilingComponent } from './pages/filing/filing.component';
import { ProcessComponent } from './pages/process/process.component';
import { ProceduresComponent } from './pages/procedures/procedures.component';
import { NewsComponent } from './pages/news/news.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'judges', component: JudgesComponent },
  { path: 'organization', component: OrganizationComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'audiences', component: AudiencesComponent },
  { path: 'filing', component: FilingComponent },
  { path: 'process', component: ProcessComponent },
  { path: 'procedures', component: ProceduresComponent },
  { path: 'news', component: NewsComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: '**', redirectTo: '' }
];
