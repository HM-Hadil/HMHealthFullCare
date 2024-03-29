import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isSticky: boolean = false;
  isMenuOpen: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset > 0;
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
