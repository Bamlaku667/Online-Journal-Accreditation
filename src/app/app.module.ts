import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TooltipModule} from 'node_modules/ngx-bootstrap/tooltip';
import { GhiLoginComponent } from './components/ghi-login/ghi-login.component';
import { JournalSubmissionComponent } from './components/journal-handling/journal-submission/journal-submission.component';
import { PublishedJournalsComponent } from './components/journal-handling/published-journals/published-journals.component';
import { TabsComponent } from './components/journal-handling/tabs/tabs.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InstitutesComponent } from './components/institutes/institutes.component';
import { DashboardNavbarComponent } from './components/dashboard-navbar/dashboard-navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CarouselConfig, CarouselModule } from 'ngx-bootstrap/carousel';
import { JournalsListComponent } from './components/journal-handling/published-journals/journals-list/journals-list.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    GhiLoginComponent,
    JournalSubmissionComponent,
    PublishedJournalsComponent,
    TabsComponent,
    LandingPageComponent,
    InstitutesComponent,
    DashboardNavbarComponent,
    JournalsListComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    TabsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    CarouselModule.forRoot(), 
    HttpClientModule
    
  ],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
