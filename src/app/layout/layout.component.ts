import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']

})
export class LayoutComponent implements OnInit {
  show: boolean = true;
  sidebarWidth: number = 250;
  width: number = 0;
  height: number = 0;
  constructor() { }

  ngOnInit() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    if (this.width < this.height) { // if in portrait mode
      this.show = false;
    }
  }
}
