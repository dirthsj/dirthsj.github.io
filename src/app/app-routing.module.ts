import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { CsmComponent } from './csm/csm.component';
import { ResumeComponent } from './resume/resume.component';
import {ProjectsComponent} from './projects/projects.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'work', component: WorkComponent },
  { path: 'csm', component: CsmComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '*', redirectTo: 'home', pathMatch: 'prefix' },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
