import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cruceros',
  templateUrl: './cruceros.component.html',
  styleUrls: ['./cruceros.component.scss']
})
export class CrucerosComponent implements AfterViewInit, OnDestroy {
  beneficios = [
    {
      icon: 'ionBoatOutline',
      title: 'Eleccion tuya',
      text: 'Conocé y elegí en donde queres navegar.'
    },
    {
      icon: 'ionEarthOutline',
      title: 'Conocé lugares',
      text: 'Podés viajar por donde quieras con Double G.'
    },
    {
      icon: 'ionPeopleOutline',
      title: 'Disfruta con amigos',
      text: 'Elegí con quien viajar para disfrutar una aventura única.'
    },
  ]
  private intersectionObserver: IntersectionObserver | undefined;
  ngAfterViewInit() {
    this.intersectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.applyAnimations();
        }
      });
    });

    const infoElement = document.querySelector('.info');
    const photosElement = document.querySelector('.photos');

    if (infoElement) {
      this.intersectionObserver.observe(infoElement);
    }

    if (photosElement) {
      this.intersectionObserver.observe(photosElement);
    }
  }

  ngOnDestroy() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  private applyAnimations() {
    const infoElement = document.querySelector('.info');
    const photosElement = document.querySelector('.photos');

    if (infoElement) {
      infoElement.classList.add('fade-up');
    }

    if (photosElement) {
      photosElement.classList.add('fade-down');
    }
  }
}
