import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {CsmComponent} from './csm/csm.component';
import {EducationComponent} from './education/education.component';
import {ProjectsComponent} from './projects/projects.component';
import {ResumeComponent} from './resume/resume.component';
import {WorkComponent} from './work/work.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'csm', component: CsmComponent },
  { path: 'education', component: EducationComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'work', component: WorkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
