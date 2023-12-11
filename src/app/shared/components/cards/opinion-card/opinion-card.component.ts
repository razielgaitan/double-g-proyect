import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-opinion-card',
  templateUrl: './opinion-card.component.html',
  styleUrls: ['./opinion-card.component.scss']
})
export class OpinionCardComponent implements OnInit,AfterViewInit {
  @ViewChild('slideTrack') slideTrack: ElementRef | undefined | any;
  blogPosts: any[] = [
    {
      title: 'El mejor viaje...',
      date: '28 de Noviembre 2023',
      content: 'Gracias a Double G pude vivir una experiencia llena de emociones y conocer lugares mágicos.',
      imageUrl: 'https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg'
    },
    {
      title: 'Experiencia única.',
      date: '15 de Octubre 2023',
      content: '¡Experiencia de viaje increíble con Double G! Gracias por hacer que mi viaje fuera inolvidable. ¡Altamente recomendado!',
      imageUrl: 'https://pbs.twimg.com/profile_images/1645189316954529792/VqI0rH9N_400x400.jpg'
    },
    {
      title: 'Increible',
      date: '2 de Marzo 2022',
      content: '¡Increíble servicio de Double G! Gracias por una experiencia de viaje excepcional.',
      imageUrl: 'https://pbs.twimg.com/profile_images/1710773376698949632/_zuv7yws_400x400.jpg' 
    },
    {
      title: 'El mejor viaje...',
      date: '28 de Noviembre 2023',
      content: 'Gracias a Double G pude vivir una experiencia llena de emociones y conocer lugares mágicos.',
      imageUrl: 'https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg'
    },
    {
      title: 'Experiencia única.',
      date: '15 de Octubre 2023',
      content: '¡Experiencia de viaje increíble con Double G! Gracias por hacer que mi viaje fuera inolvidable. ¡Altamente recomendado!',
      imageUrl: 'https://pbs.twimg.com/profile_images/1645189316954529792/VqI0rH9N_400x400.jpg'
    },
    {
      title: 'Increible',
      date: '2 de Marzo 2022',
      content: '¡Increíble servicio de Double G! Gracias por una experiencia de viaje excepcional.',
      imageUrl: 'https://pbs.twimg.com/profile_images/1710773376698949632/_zuv7yws_400x400.jpg' 
    }
  ];

  constructor() { }

  ngOnInit(): void { }

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
