import { Component, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('fadeInFromBottom', [
      state('initial', style({
        opacity: 0,
        transform: 'translateY(100%)'
      })),
      state('final', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('initial => final', animate('800ms ease-in-out')),
    ]),
  ]
})
export class CarouselComponent implements AfterViewInit {
  carouselItems = [
    { image: '../../../../assets/images/coast-miami.jpg', title: 'Somos Double G' },
    { image: '../../../../assets/images/hotel-room.jpg', title: 'Alojamientos' },
    { image: '../../../../assets/images/ren-a-car-2.jpg', title: 'Rent a car' },
    { image: '../../../../assets/images/aeropuerto.jpg', title: 'Vuelos' },
    { image: '../../../../assets/images/disney.jpg', title: 'Parques Temáticos' },
    { image: '../../../../assets/images/luxury.2.jpg', title: 'Luxury' },
    { image: '../../../../assets/images/yate2.jpg', title: 'Cruceros' },
  ];

  animationState = 'initial';
  animationExecuted = false;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.checkIfElementInView();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkIfElementInView();
  }

  checkIfElementInView() {
    
      this.animationState = 'final';
      this.animationExecuted = true;
    }
  
}