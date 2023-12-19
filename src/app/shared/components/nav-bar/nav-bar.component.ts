import { Component, OnInit } from '@angular/core';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faShip } from '@fortawesome/free-solid-svg-icons';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

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
    this.isMobile = window.innerWidth < 768; // Cambiar el valor según tu necesidad de tamaño de pantalla
    if (!this.isMobile) {
      this.isMenuOpen = false; // Cierra el menú en pantallas más grandes
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
