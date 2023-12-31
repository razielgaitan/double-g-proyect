import { Component, OnInit, HostListener  } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit{
  isMenuOpen: boolean = false;
  isMobile: boolean = false;

  ngOnInit() {
    this.checkScreenWidth();
    window.addEventListener('resize', () => {
      this.checkScreenWidth();
    });
  }

  checkScreenWidth() {
    this.isMobile = window.innerWidth < 990;
    if (!this.isMobile) {
      this.isMenuOpen = false; 
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const toggleButton = document.querySelector('.navbar-toggler');

    if (window.innerWidth > 980) { 
      navbarCollapse?.classList.remove('show');
    } 
    
  }
}
