import { AuthGuardService } from './services/auth-guard.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, Headers } from '@angular/http';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { DashboardWrapperComponent } from './dashboard/dashboard-wrapper/dashboard-wrapper.component';
import { WelcomeComponent } from './dashboard/dashboard-wrapper/pages/welcome/welcome.component';
import { IntroductionComponent } from './dashboard/dashboard-wrapper/pages/introduction/introduction.component';
import { PageNotFoundComponent } from './dashboard/dashboard-wrapper/pages/page-not-found/page-not-found.component';
import { OutPageNotFoundComponent } from './out-page-not-found/out-page-not-found.component';
import { CityComponent } from './dashboard/dashboard-wrapper/masters/city/city.component';

import { UserComponent } from './dashboard/dashboard-wrapper/masters/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    DashboardWrapperComponent,
    WelcomeComponent,
    IntroductionComponent,
    PageNotFoundComponent,
    OutPageNotFoundComponent,
    CityComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTablesModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardWrapperComponent , canActivate: [AuthGuardService],
    children: [
      { path: '', component: IntroductionComponent },
      { path: 'city', component: CityComponent  },
      { path: 'user', component: UserComponent  },
      { path: '**', component: PageNotFoundComponent }
    ]},
    { path: '**', component: OutPageNotFoundComponent }
    ])
  ],
  providers: [
    AuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
