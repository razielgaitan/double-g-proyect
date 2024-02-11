import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-opinion-card',
  templateUrl: './opinion-card.component.html',
  styleUrls: ['./opinion-card.component.scss']
})
export class OpinionCardComponent implements OnInit, AfterViewInit {
  @ViewChild('slideTrack') slideTrack: ElementRef | undefined | any;
  blogPosts: any[] = [
    {
      title: 'El mejor viaje...',
      date: '28 de Noviembre 2023',
      content: 'Gracias a Double G pude vivir una experiencia llena de emociones y conocer lugares mágicos.',
      imageUrl: '../../../../../assets/images/opinion-cards/persona1.jpg'
    },
    {
      title: 'Experiencia única.',
      date: '15 de Octubre 2023',
      content: '¡Experiencia de viaje increíble con Double G! Gracias por hacer que mi viaje fuera inolvidable. ¡Altamente recomendado!',
      imageUrl: '../../../../../assets/images/opinion-cards/persona2.jpg'
    },
    {
      title: 'Increible',
      date: '2 de Marzo 2022',
      content: '¡Increíble servicio de Double G! Gracias por una experiencia de viaje excepcional.',
      imageUrl: '../../../../../assets/images/opinion-cards/persona3.jpg' 
    },
    {
      title: 'El mejor viaje...',
      date: '28 de Noviembre 2023',
      content: 'Gracias a Double G pude vivir una experiencia llena de emociones y conocer lugares mágicos.',
      imageUrl: '../../../../../assets/images/opinion-cards/persona1.jpg'
    },
    {
      title: 'Experiencia única.',
      date: '15 de Octubre 2023',
      content: '¡Experiencia de viaje increíble con Double G! Gracias por hacer que mi viaje fuera inolvidable. ¡Altamente recomendado!',
      imageUrl: '../../../../../assets/images/opinion-cards/persona2.jpg'
    },
    {
      title: 'Increible',
      date: '2 de Marzo 2022',
      content: '¡Increíble servicio de Double G! Gracias por una experiencia de viaje excepcional.',
      imageUrl: '../../../../../assets/images/opinion-cards/persona3.jpg' 
    }
  ];

  private intersectionObserver: IntersectionObserver | undefined;
  maxCardsToShow: number = 6; 

  constructor() { }

  ngOnInit(): void {   
  }

  ngAfterViewInit(): void {
    
    const slideTrackElement = this.slideTrack.nativeElement;

    slideTrackElement.addEventListener('mouseover', () => {
      slideTrackElement.style.animationPlayState = 'paused';
    });

    slideTrackElement.addEventListener('mouseout', () => {
      slideTrackElement.style.animationPlayState = 'running';
    });


  }

  

}
