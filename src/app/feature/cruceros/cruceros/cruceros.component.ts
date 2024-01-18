import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cruceros',
  templateUrl: './cruceros.component.html',
  styleUrls: ['./cruceros.component.scss']
})
export class CrucerosComponent implements AfterViewInit, OnDestroy {
  beneficios = [
    {
      icon: 'ionBedOutline',
      title: 'Alojamientos',
      text: 'Sumérgete en la comodidad y la hospitalidad excepcional con nuestro servicio de alojamientos.'
    },
    {
      icon: 'ionAirplaneOutline',
      title: 'Alojamientos',
      text: 'Sumérgete en la comodidad y la hospitalidad excepcional con nuestro servicio de alojamientos.'
    },
    {
      icon: 'ionBedOutline',
      title: 'Alojamientos',
      text: 'Sumérgete en la comodidad y la hospitalidad excepcional con nuestro servicio de alojamientos.'
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
