import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GhiLoginComponent } from './components/ghi-login/ghi-login.component';
import { DashboardNavbarComponent } from './components/dashboard-navbar/dashboard-navbar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { JournalSubmissionComponent } from './components/journal-handling/journal-submission/journal-submission.component';
import { PublishedJournalsComponent } from './components/journal-handling/published-journals/published-journals.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'login',
    component: GhiLoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardNavbarComponent,
    children: [
      { path: 'journal-submission', component: JournalSubmissionComponent },
      { path: 'published-journals', component: PublishedJournalsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
