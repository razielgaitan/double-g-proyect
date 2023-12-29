import { Component } from '@angular/core';

@Component({
  selector: 'app-rent-a-car',
  templateUrl: './rent-a-car.component.html',
  styleUrls: ['./rent-a-car.component.scss']
})
export class RentACarComponent {
  mosaicoImages: string[] = ['https://cdn.24net.cz/5/obrazek/ikonka-37505',
  'https://hips.hearstapps.com/hmg-prod/images/2022-mercedes-benz-s500-4matic-109-1642184016.jpg?crop=0.591xw:0.665xh;0.137xw,0.274xh&resize=768:*',
  'https://www.forbes.com/wheels/wp-content/uploads/2022/11/Best_Midsize_SUVs_2023_SEO.630.jpg',
  'https://hips.hearstapps.com/hmg-prod/images/lipman-jl96651-64797ddda108f.jpg',
  'https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/performance/performance-subcontent/02-images/2018-segmento-deportivos-masthead.jpg?imwidth=960',
  'https://moneyinc.com/wp-content/uploads/2022/01/2022-Jeep-Wagoneer-750x422.jpg'
];
mosaicoTexts: string[] = ['MID-SIZE', 'FULL-SIZE', 'SUV-MID-SIZE', 'MINIVAN', 'DEPORTIVOS', 'SUV-FULL-SIZE'];

globalTexts: string[] = ['Reservas', 'Flexibilidad', 'Servicio'];
globalDescs: string[] = ['Te ayudamos a buscar el auto que necesitas para tu viaje', 'Nos adaptamos a tus planes y tus decisiones!', 'Te brindamos un servicio constante solo para vos'];
globalIcons: string[] = ['ionCarSportOutline', 'ionCalendarOutline', 'ionOptionsOutline'];
}