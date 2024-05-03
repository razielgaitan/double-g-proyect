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
      imageSrc: '../../../../assets/images/luxury-car-1.jpg',
      name: 'Auto 1',
      loremText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
      imageSrc: '../../../../assets/images/luxury-car-2.jpg',
      name: 'Auto 2',
      loremText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
      imageSrc: '../../../../assets/images/luxury-car-3.jpg',
      name: 'Auto 3',
      loremText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
      imageSrc: '../../../../assets/images/luxury-car-4.jpg',
      name: 'Auto 4',
      loremText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
      imageSrc: '../../../../assets/images/luxury-car-6.jpg',
      name: 'Auto 5',
      loremText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
      imageSrc: '../../../../assets/images/luxury-car-5.jpg',
      name: 'Auto 5',
      loremText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    }
  ];

  yateData = [
    {
      imageSrc: '../../../../assets/images/yate6.jpeg',
      name: 'Yate 1',
      loremText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
      imageSrc: '../../../../assets/images/yate2.jpeg',
      name: 'Yate 2',
      loremText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
      imageSrc: '../../../../assets/images/yate3.JPG',
      name: 'Yate 3',
      loremText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
      imageSrc: '../../../../assets/images/yate4.jpeg',
      name: 'Yate 4',
      loremText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
      imageSrc: '../../../../assets/images/yate5.jpeg',
      name: 'Yate 5',
      loremText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    }
  ];

  beneficios = [
    {
      icon: 'ionCarSportOutline',
      title: 'Coches lujosos',
      text: 'Luxury te permitirá viajar con los mejores coches.'
    },
    {
      icon: 'ionBoatOutline',
      title: 'Botes increibles',
      text: 'Double G te permite navegar por donde sea.'
    },
    {
      icon: 'ionStarOutline',
      title: 'Viaje único',
      text: 'Podrás disfrutar de una experiencia única.'
    },
  ]
}
