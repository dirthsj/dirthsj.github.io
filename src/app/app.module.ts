import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDoubleRight, faAngleDoubleLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import { PdfViewerModule } from 'ng2-pdf-viewer';

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
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { ProjectsComponent } from './projects/projects.component';

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
    MobileMenuComponent,
    ProjectsComponent,
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    HttpClientModule,
    MatTabsModule,
    MatBottomSheetModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    PdfViewerModule,
    AppRoutingModule
  ],
  entryComponents: [MobileMenuComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faAngleDoubleRight);
    library.add(faAngleDoubleLeft);
    library.add(faBars);
  }

}
