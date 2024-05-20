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

  yateData = [
    {
      imageSrc: '../../../../assets/images/yate6.jpeg',
      name: 'Yate 1',
      loremText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
      imageSrc: '../../../../assets/images/crucero-5.jpg',
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

  images = [
    {
      imageSrc: '../../../../assets/images/crucero-1.jpg'
    },
    {
      imageSrc: '../../../../assets/images/crucero-5.jpg'
    },
    {
      imageSrc: '../../../../assets/images/crucero-4.jpg'
    },
    {
      imageSrc: '../../../../assets/images/crucero-3.jpg'
    },
    {
      imageSrc: '../../../../assets/images/crucero-7.avif'
    },
  ];

  empresasData = [
    {
      empTitle: 'Carnival',
      empLogo: '../../../../assets/logo/cruceros/carnival-logo.svg',
    },
    {
      empTitle: 'Celebrity Cruises',
      empLogo: '../../../../assets/logo/cruceros/celebrity-cruises.svg',
    },
    {
      empTitle: 'Disney Cruceros',
      empLogo: '../../../../assets/logo/cruceros/disney-cruceros.svg',
    },
    {
      empTitle: 'NCL',
      empLogo: '../../../../assets/logo/cruceros/logo-ncl-white.svg',
    },
    {
      empTitle: 'Oceania Cruises',
      empLogo: '../../../../assets/logo/cruceros/logo-oceania-cruises.svg',
    },
    {
      empTitle: 'SBN',
      empLogo: '../../../../assets/logo/cruceros/logo-sbn.svg',
    },
    {
      empTitle: 'MSC Cruceros',
      empLogo: '../../../../assets/logo/cruceros/msc-cruceros-logo.svg',
    },
    {
      empTitle: 'Royal Caribbean',
      empLogo: '../../../../assets/logo/cruceros/royal-caribbean-logo-white.svg',
    },
    {
      empTitle: 'Voyages Cruceros',
      empLogo: '../../../../assets/logo/cruceros/voyages-cruceros.svg',
    },
  ];



  
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
