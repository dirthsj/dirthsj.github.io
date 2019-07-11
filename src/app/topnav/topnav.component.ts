import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  public navLinks = [
    { path: '/home', label: 'Home' },
    { path: '/csm', label: "Cardinal Space Mining" },
    { path: '/work', label: 'Work Experience' },
    { path: '/resume', label: 'Resume' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
