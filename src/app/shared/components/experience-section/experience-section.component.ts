import { Component, AfterViewInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss'],
})
export class ExperienceSectionComponent implements AfterViewInit {
  private containerElement: Element | null = null;
  private animatedElements: NodeListOf<Element> | undefined;
  private animationActivated = false;
  imageData = [
    {
      imageSrc: '../../../../../assets/images/Luxury.jpg'
    },
    {
      imageSrc: '../../../../../assets/images/crucero.webp'
    },
    {
      imageSrc: '../../../../assets/images/yate2.jpg'
    },
    {
      imageSrc: '../../../../../assets/images/alojamiento.jpg'
    }
  ];
  ngAfterViewInit() {
    this.containerElement = document.querySelector('.container');
    this.animatedElements = document.querySelectorAll('.info, .photos');
  }

  constructor( private router: Router){}
  selectFunction() {
    // Redirige a la ruta /servicios
    this.router.navigate(['/servicios']).then(() => {
      // Desplázate al principio de la página después de que la navegación haya tenido lugar
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    if (!this.animationActivated && this.containerElement && this.animatedElements) {
      const containerOffset = this.containerElement.getBoundingClientRect().top;
      const threshold = window.innerHeight * 0.7;

      if (containerOffset <= threshold) {
        this.animatedElements.forEach(element => {
          element.classList.add('visible', 'fade-up');
        });

        this.animationActivated = true;
      }
    }
  }
}
