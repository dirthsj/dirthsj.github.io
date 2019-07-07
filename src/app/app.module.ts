import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';


import { TopnavComponent } from './topnav/topnav.component';
import { LinkedinComponent } from './linkedin/linkedin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GithubComponent } from './github/github.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { CsmComponent } from './csm/csm.component';
import { ResumeComponent } from './resume/resume.component';
import { library } from '@fortawesome/fontawesome-svg-core';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TopnavComponent,
    LinkedinComponent,
    SidebarComponent,
    GithubComponent,
    HomeComponent,
    WorkComponent,
    CsmComponent,
    ResumeComponent,
  ],
  imports: [
    NgbModule,
    FontAwesomeModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faAngleDoubleRight);
    library.add(faAngleDoubleLeft);
  }

}
