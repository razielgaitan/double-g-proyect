import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent-a-car',
  templateUrl: './rent-a-car.component.html',
  styleUrls: ['./rent-a-car.component.scss']
})
export class RentACarComponent implements OnInit {
  /*
  mosaicoImages: string[] = ['https://cdn.24net.cz/5/obrazek/ikonka-37505',
  'https://hips.hearstapps.com/hmg-prod/images/2022-mercedes-benz-s500-4matic-109-1642184016.jpg?crop=0.591xw:0.665xh;0.137xw,0.274xh&resize=768:*',
  'https://www.forbes.com/wheels/wp-content/uploads/2022/11/Best_Midsize_SUVs_2023_SEO.630.jpg',
  'https://hips.hearstapps.com/hmg-prod/images/lipman-jl96651-64797ddda108f.jpg',
  'https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/performance/performance-subcontent/02-images/2018-segmento-deportivos-masthead.jpg?imwidth=960',
  'https://moneyinc.com/wp-content/uploads/2022/01/2022-Jeep-Wagoneer-750x422.jpg'
  ];
  mosaicoTexts: string[] = ['MID-SIZE', 'FULL-SIZE', 'SUV-MID-SIZE', 'MINIVAN', 'DEPORTIVOS', 'SUV-FULL-SIZE'];
*/


  
  // Variables del slider
  carData = [
    {
      imageSrc: 'https://cdn.24net.cz/5/obrazek/ikonka-37505',
      name: 'MID-SIZE',
      price: 'FULL ECONOMIC',
      persons: '5'
    },
    {
      imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2022-mercedes-benz-s500-4matic-109-1642184016.jpg?crop=0.591xw:0.665xh;0.137xw,0.274xh&resize=768:*',
      name: 'FULL-SIZE',
      price: 'FULL ECONOMIC',
      persons: '5'
    },
    {
      imageSrc: 'https://www.forbes.com/wheels/wp-content/uploads/2022/11/Best_Midsize_SUVs_2023_SEO.630.jpg',
      name: 'SUV-MID-SIZE',
      price: 'ECONOMIC',
      persons: '5'
    },
    {
      imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/lipman-jl96651-64797ddda108f.jpg',
      name: 'MINIVAN',
      price: 'ECONOMIC',
      persons: '5'
    },
    {
      imageSrc: 'https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/performance/performance-subcontent/02-images/2018-segmento-deportivos-masthead.jpg?imwidth=960',
      name: 'DEPORTIVO',
      price: 'EXPENSIVE',
      persons: '5'
    },
    {
      imageSrc: 'https://moneyinc.com/wp-content/uploads/2022/01/2022-Jeep-Wagoneer-750x422.jpg',
      name: 'SUV-FULL-SIZE',
      price: 'EXPENSIVE',
      persons: '5'
    }
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
      text: 'Experimenta un servicio personalizado que se adapta a tus necesidades, asegurando una experiencia de conducción sin complicaciones.'
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