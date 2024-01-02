import { Component } from '@angular/core';

@Component({
  selector: 'app-luxury',
  templateUrl: './luxury.component.html',
  styleUrls: ['./luxury.component.scss']
})
export class LuxuryComponent {
  globalTexts: string[] = ['Diversos Destinos', 'Flexibilidad', 'Hermosos Lugares'];
  globalDescs: string[] = ['Te ayudamos a buscar el auto que necesitas para tu viaje', 'Nos adaptamos a tus planes y tus decisiones!', 'Te brindamos un servicio constante solo para vos'];
  globalIcons: string[] = ['ionCarSportOutline', 'ionCalendarOutline', 'ionOptionsOutline'];

  carData = [
    {
      imageSrc: 'https://cdn.24net.cz/5/obrazek/ikonka-37505',
      name: 'Auto 1',
      loremText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
      imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2022-mercedes-benz-s500-4matic-109-1642184016.jpg?crop=0.591xw:0.665xh;0.137xw,0.274xh&resize=768:*',
      name: 'Auto 2',
      loremText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
      imageSrc: 'https://www.forbes.com/wheels/wp-content/uploads/2022/11/Best_Midsize_SUVs_2023_SEO.630.jpg',
      name: 'Auto 3',
      loremText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
      imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/lipman-jl96651-64797ddda108f.jpg',
      name: 'Auto 4',
      loremText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
      imageSrc: 'https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/performance/performance-subcontent/02-images/2018-segmento-deportivos-masthead.jpg?imwidth=960',
      name: 'Auto 5',
      loremText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    }
  ];

  yateData = [
    {
      imageSrc: 'https://content.boats.com/files/Tipos-de-yates.jpg',
      name: 'Yate 1',
      loremText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
      imageSrc: 'https://content.boats.com/files/Tipo-de-yates_yate-crucero-a-motor.jpg',
      name: 'Yate 2',
      loremText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
      imageSrc: 'https://content.boats.com/files/Tipos-de-yates_Motovelero.jpg',
      name: 'Yate 3',
      loremText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
      imageSrc: 'https://content.boats.com/files/Tipos-de-yates_resistencia.jpg',
      name: 'Yate 4',
      loremText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
      imageSrc: 'https://content.boats.com/files/Tipos-de-yates_yate-multicasco.jpg',
      name: 'Yate 5',
      loremText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    }
  ];
}
