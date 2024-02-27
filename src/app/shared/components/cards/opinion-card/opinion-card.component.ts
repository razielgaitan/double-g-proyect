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
      date: '2 de Marzo 2023',
      content: '¡Increíble servicio de Double G! Gracias por una experiencia de viaje excepcional.',
      imageUrl: '../../../../../assets/images/opinion-cards/persona3.jpg' 
    },
    {
      title: 'Mariquel Obregón',
      date: '8 de Febrero 2024',
      content: 'Excelente atención y acompañamiento en todas las reservas! Fue una gran ayuda en la planificación de nuestro viaje. Valeria muy atenta y con muy buena disposición siempre. Gracias!!',
      imageUrl: '../../../../../assets/images/opinion-cards/persona1.jpg'
    },
    {
      title: 'Veronica Almonacid',
      date: '6 de Febrero 2024',
      content: 'Muchas gracias por todo lo que hicieron para que nuestro viaje sea maravilloso. Estuvieron en cada detalle e hicieron realidad nuestros sueños. Fueron unas vacaciones únicas gracias a ustedes que cumplieron con todo lo que nosotros pedíamos. Estamos muy contentos y esperamos pronto volver.',
      imageUrl: '../../../../../assets/images/opinion-cards/persona1.jpg'
    },
    {
      title: 'Noemi Merenlender',
      date: '',
      content: 'Excelente atención desde el momento que recogimos el auto hasta la devolución. El auto impecable. Muy recomendables !',
      imageUrl: '../../../../../assets/images/opinion-cards/persona1.jpg'
    },
    {
      title: 'Alejandra Sabbatella',
      date: '25 enero 2024',
      content: 'Excelente todo! Desde el trato inicial de Guadalupe y su paciencia. Nosotros abonamos la totalidad del alquiler. Cumplieron con todo y son súper amables, todo. El muchacho que nos fue a buscar al puerto y también el que nos recibió en la camioneta en el aeropuerto. Siempre en contacto todo excelente y súper recomendable. Ojalá podamos viajar nuevamente para contactarnos con ellos!! Gracias x todo',
      imageUrl: '../../../../../assets/images/opinion-cards/persona1.jpg'
    },
    {
      title: 'Mario Cura',
      date: '',
      content: 'Los chicos son muy serviciales y ante cualquier problema te lo solucionan',
      imageUrl: '../../../../../assets/images/opinion-cards/persona1.jpg'
    },
    {
      title: 'Jaime Andres Pérez Cervantes',
      date: '',
      content: 'Excelente servicio de principio a fin, llenó totalmente mis expectativas, sin duda alguna volveré a tomar sus servicios. Gracias!!!',
      imageUrl: '../../../../../assets/images/opinion-cards/persona1.jpg'
    },
  ];

  private intersectionObserver: IntersectionObserver | undefined;
  maxCardsToShow: number = 12; 

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
