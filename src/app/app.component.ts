import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(protected router: Router) {
  }
  items = [
    { label: 'Home', icon: 'pi pi-home', routerLink: ['/home'] },
    { label: 'Work Experience', icon: 'pi pi-briefcase', routerLink: ['/work'] },
    { label: 'Projects', icon: 'pi pi-palette', routerLink: ['/projects'] },
    { label: 'Cardinal Space Mining', icon: 'pi pi-cog', routerLink: ['/csm'] },
    { label: 'Education', icon: 'pi pi-bookmark', routerLink: ['/education'] },
    { label: 'Resume', icon: 'pi pi-file-o', routerLink: ['/resume'] }
  ];

}
