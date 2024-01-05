import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-experience-cards',
  templateUrl: './experience-cards.component.html',
  styleUrls: ['./experience-cards.component.scss']
})
export class ExperienceCardsComponent {
  @Input() mainTitle: string = "Vive un experiencia completa";
  @Input() skipIndex: number = -1;
  //@Input() cardData: any[] = [];
  cardData = [
    {
      icon: 'ionBedOutline',
      title: 'Alojamientos',
      text: 'Sumérgete en la comodidad y la hospitalidad excepcional con nuestro servicio de alojamientos.',
      link: '/alojamientos'
    },
    {
      icon: 'ionCarSportOutline',
      title: 'Rent a car',
      text: ' Descubre la libertad de explorar a tu propio ritmo con nuestro servicio de alquiler de vehículos. ',
      link: '/rent-a-car'
    },
    {
      icon: 'ionAirplaneOutline',
      title: 'Vuelos',
      text: 'Eleva tus expectativas con nuestro servicio de vuelos y una experiencia de viaje inigualable.',
      link: '/vuelos'
    },
    {
      icon: 'ionStarOutline', 
      title: 'Parque Tematicos',
      text: '¡Sumérgete en la magia y la diversión con nuestro servicio de visita a parques temáticos!',
      link: '/parques'
    },
    {
      icon: 'ionDiamondOutline', 
      title: 'Luxury',
      text: 'Descubre la definición del lujo con nuestro exclusivo servicio de categoría Luxury.',
      link: '/luxury'
    },
    {
      icon: 'ionBoatOutline',
      title: 'Cruceros',
      text: '¡Descubre el placer de navegar con nuestro servicio de cruceros excepcional!',
      link: '/cruceros'
    },
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  navigateToPage(page: string): void {
    this.router.navigate([page], { relativeTo: this.route });
  }
}


// 'ionCarSportOutline', 'ionCalendarOutline', 'ionOptionsOutline'