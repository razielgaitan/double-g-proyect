import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-alojamientos',
  templateUrl: './alojamientos.component.html',
  styleUrls: ['./alojamientos.component.scss']
})
export class AlojamientosComponent {

  tiposAlojamientos = [
    {
      icon: 'ionBedOutline',
      title: 'Hoteles',
      text: 'Disfruta el confort de la mejor hotelería en todo el mundo.'
    },
    {
      icon: 'ionStarOutline',
      title: 'Departamentos y casas',
      text: 'Elige la comodidad y libertad de nuestras unidades que esperan por ti.'
    },
    {
      icon: 'ionCalendarOutline',
      title: 'Temáticos y parques',
      text: 'Tenemos hospedajes en los increíbles parques de Orlando. Disfruta de una increíble experiencia!'
    },
  ]

  mosaicoImages: string[] = ['https://static01.nyt.com/images/2021/11/06/multimedia/06sp-waterfront-hallandale-inyt2/06sp-waterfront-hallandale-inyt2-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
    'https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_640,q_75,w_1000/https://assets.simpleviewcms.com/simpleview/image/upload/v1/clients/ftlauderdale/AJR_FTL_Beach_0364_1__02d4d0a7-c538-42dc-ae3d-89f575ba4bf8.png',
    'https://static01.nyt.com/images/2021/11/06/multimedia/06sp-waterfront-hallandale-inyt2/06sp-waterfront-hallandale-inyt2-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
    'https://secretescapes-web.imgix.net/hotels/4683/a96e3ca9_8c20_461c_8dee_6f4bebd84b06.jpg?w=640&h=459&fit=crop&crop=entropy&auto=format,compress',
    'https://www.miamiandbeaches.com/getmedia/695d7afd-b742-4e22-87fd-f44da6fedec4/Sunny_Isles_Beach_aerial_pier_1440x900.jpg?width=1000&resizemode=force',
    '../../../../assets/images/TAMPA.jpg',
    '../../../../assets/images/KISSIMEE.JPG',
    '../../../../assets/images/Naples.jpg',
    '../../../../assets/images/SARASOTA.jpg',
    '../../../../assets/images/KEYWEST.jpg',
  ];
  
  mosaicoTexts: string[] = ['Miami Beach' ,'Fort Lauderdale', 'Hallandale', 'Hollywood Beach', 'Sunny Isles', 'Tampa', 'Kissimee', 'Naples', 'Sarasota', 'Key West'];


  beneficios = [
    {
      icon: 'ionBedOutline',
      title: 'Hoteles',
      text: 'Disfruta el confort de la mejor hotelería en todo el mundo.'
    },
    {
      icon: 'ionHomeOutline',
      title: 'Departamentos y casas',
      text: 'Elige la comodidad y libertad de nuestras unidades que esperan por tí.'
    },
    {
      icon: 'ionCalendarOutline',
      title: 'Parques temáticos',
      text: 'Tenemos hospedajes en los increíbles parques de Orlando. ¡Disfruta de una increíble experiencia!'
    },
  ]

  isScreenSmall = false;
  isPhoneScreen = false;

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    const screenWidth = window.innerWidth;

    this.isPhoneScreen = screenWidth <= 768;
    this.isScreenSmall = screenWidth <= 600;
  }

  selectFunction(){
    window.open('https://api.whatsapp.com/send/?phone=19546218999&text=Hola%21+Me+gustaría+conocer+las+ofertas+de+hoteles+de+los+parques+de+Orlando&type=phone_number&app_absent=0', '_blank')
  }

}
