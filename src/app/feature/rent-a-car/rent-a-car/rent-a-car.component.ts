import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent-a-car',
  templateUrl: './rent-a-car.component.html',
  styleUrls: ['./rent-a-car.component.scss']
})
export class RentACarComponent implements OnInit {
  
  // Variables del slider
  carData = [
    {
      imageSrc: '../../../../assets/images/COROLLA.jpeg',
      name: 'MID-SIZE',
      price: '2 grandes y 2 medianas',
      persons: '5'
    },
    {
      imageSrc: '../../../../assets/images/camry.jpeg',
      name: 'FULL-SIZE',
      price: '2 grandes y 2 medianas',
      persons: '5'
    },
    {
      imageSrc: '../../../../assets/images/NISSANROGUE.jpg',
      name: 'SUV-MID-SIZE',
      price: '3 grandes y 2 medianas',
      persons: '5'
    },
    {
      imageSrc: '../../../../assets/images/HIGHLANDER.jpg',
      name: 'SUV-FULL-SIZE',
      price: '3 grandes y 3 medianas',
      persons: '7-8'
    },
    {
      imageSrc: '../../../../assets/images/Sienna.png',
      name: 'MINIVAN',
      price: '4 grandes y 2 medianas',
      persons: '7-8'
    },
    {
      imageSrc: '../../../../assets/images/2023-VICTORY.jpg',
      name: 'PREMIUM',
      price: '2 medianas',
      persons: '2-3'
    },
  ];
  
  beneficios = [
    {
      icon: 'ionCarSportOutline',
      title: 'Variedad de vehículos',
      text: ' Contamos con una amplia flota de autos, desde compactos hasta SUVs de lujo, adaptados a todos los estilos de viaje.'
    },
    {
      icon: 'ionLockClosedOutline',
      title: 'Transparencia y seguridad',
      text: ' Disfruta de un proceso de renta claro y seguro, con tarifas transparentes y medidas que garantizan tu tranquilidad.'
    },
    {
      icon: 'ionPersonOutline',
      title: 'Atención personalizada',
      text: 'Experimenta un servicio personalizado que se adapte a tus necesidades. Disfruta de nuestro servicio de búsqueda en el aeropuerto para tu máxima comodidad.'
    },
  ] 

  // Detectar tamoaño de pantalla
  isPhoneScreen = false;


  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    const screenWidth = window.innerWidth;

    this.isPhoneScreen = screenWidth <= 768;
  }
}