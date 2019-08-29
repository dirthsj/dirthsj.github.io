import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MobileMenuComponent implements OnInit {
  public navLinks = [
    { path: '/home', label: 'Home' },
    { path: '/csm', label: "Cardinal Space Mining" },
    { path: '/work', label: 'Work Experience' },
    { path: '/resume', label: 'Resume' }
  ];
  constructor(public bottomSheetRef: MatBottomSheetRef<MobileMenuComponent>) { }

  ngOnInit() {
  }

}
/*

@Component({
  selector: 'mobile',
  templateUrl: 'mobile.html'
})
export class MobileMenuComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<MobileMenuComponent>) {}

}
*/