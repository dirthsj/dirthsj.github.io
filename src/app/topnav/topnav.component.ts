import { Component, OnInit, HostListener } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';

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
  public desktop: boolean = true;
  constructor(
    private mobileMenuRef: MatBottomSheet
  ) { }

  ngOnInit() {
    this.desktop = window.screen.width > window.screen.height;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.desktop = window.screen.width > window.screen.height;
  }

  openMobileMenu() {
    this.mobileMenuRef.open(MobileMenuComponent);
  }
}
