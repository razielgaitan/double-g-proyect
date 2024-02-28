import { Component, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  carouselItems = [
    { 
      image: '../../../../assets/images/coast-miami.jpg', 
      title: 'Disfruta de una Experiencia Única', 
      secTitle: ' Disfruta de una experiencia única', 
      desc:'Somos Double G, tu agencia oficial en la Florida, dedicada a crear momentos únicos y personalizados para tu viaje. Cada detalle está pensado para que vivas la ciudad de una manera única. Descubre la diferencia de viajar con nosotros.', 
      link: '/home' 
    },
    { 
      image: '../../../../assets/images/hotel-room.jpg', 
      title: 'Alojamientos', 
      secTitle: 'Hospedajes únicos, experiencias inolvidables', 
      desc:'Contamos con una increíble oferta de alojamientos, desde hoteles hasta apartamentos frente a la playa. Tu comodidad y bienestar son nuestra prioridad.', 
      link: '/alojamientos' 
    },
    { 
      image: '../../../../assets/images/ren-a-car-2.jpg', 
      title: 'Rent a car', 
      secTitle: 'Explora a tu ritmo', 
      desc:'Listo para recorrer Miami? Ofrecemos una amplia flota de autos para todo tipo de viajes. Con recogida conveniente en el aeropuerto, un proceso de reserva fácil y la posibilidad de explorar la Florida sin restricciones, hacemos que cada recorrido sea una experiencia única.', 
      link: '/rent-a-car' 
    },
    { 
      image: '../../../../assets/images/aeropuerto.jpg', 
      title: 'Vuelos', 
      secTitle: 'Despega junto a Double G', 
      desc:'Planificar tu próximo viaje es fácil. Conectamos tus sueños con destinos fascinantes y experiencias inolvidables. Desde vuelos directos a conexiones estratégicas, te ofrecemos opciones que se adaptan a tus necesidades y preferencias.', 
      link: '/vuelos' },
    { 
      image: '../../../../assets/images/disney.jpg', 
      title: 'Parques Temáticos', 
      secTitle: 'Vive la aventura', 
      desc:'Consigue tus Tickets a los Mejores Parques Temáticos. Ofrecemos acceso a los destinos más emocionantes y entretenidos. Asegura tu entrada y prepárate para vivir experiencias inolvidables. ¡Descubre la magia que tenemos para ti!', 
      link: '/parques' 
    },
    { 
      image: '../../../../assets/images/luxury.2.jpg', 
      title: 'Luxury', 
      secTitle: 'Estilo 100% Miami', 
      desc:'Disfruta la elegancia y el confort con nuestro exclusivo servicio de renta de autos lujosos y yates. Reserva ahora y haz de tu viaje una experiencia de alto nivel con Double G.', 
      link: '/luxury' 
    },
    { 
      image: '../../../../assets/images/yate2.jpg', 
      title: 'Cruceros', 
      secTitle: 'Navega con Nosotros', 
      desc:'Embárcate en una experiencia inolvidable con nuestros servicios de cruceros. Ofrecemos una selección de cruceros que se adaptan a todos los gustos. Con comodidades de primera clase, entretenimiento de calidad y una atención excepcional, cada travesía se convierte en una escapada única.', 
      link: '/cruceros' 
    },
  ];

  constructor(private el: ElementRef, private router: Router, private route: ActivatedRoute) { }

  navigateToPage(page: string): void {
    this.router.navigate([page], { relativeTo: this.route });
  }
}
