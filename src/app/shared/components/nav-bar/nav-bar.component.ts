import { Component } from '@angular/core';
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
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  faBed = faBed;
  faCar = faCar;
  faPlaneDeparture = faPlaneDeparture;
  faWandMagicSparkles = faWandMagicSparkles;
  faStar = faStar;
  faShip = faShip;
  faArrowsRotate = faArrowsRotate;
}
