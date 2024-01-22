import { Component, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  carouselItems = [
    { image: '../../../../assets/images/coast-miami.jpg', title: 'Somos Double G', link: '/home' },
    { image: '../../../../assets/images/hotel-room.jpg', title: 'Alojamientos', link: '/alojamientos' },
    { image: '../../../../assets/images/ren-a-car-2.jpg', title: 'Rent a car', link: '/rent-a-car' },
    { image: '../../../../assets/images/aeropuerto.jpg', title: 'Vuelos', link: '/vuelos' },
    { image: '../../../../assets/images/disney.jpg', title: 'Parques Temáticos', link: '/parques' },
    { image: '../../../../assets/images/luxury.2.jpg', title: 'Luxury', link: '/luxury' },
    { image: '../../../../assets/images/yate2.jpg', title: 'Cruceros', link: '/cruceros' },
  ];

  constructor(private el: ElementRef, private router: Router, private route: ActivatedRoute) { }

  navigateToPage(page: string): void {
    this.router.navigate([page], { relativeTo: this.route });
  }
}
