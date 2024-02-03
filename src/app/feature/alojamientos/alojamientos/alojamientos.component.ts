import { Component } from '@angular/core';

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
      text: 'Disfruta el confort de la mejor hotelería de Miami y La Florida.'
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
    'https://www.jetsetter.com//uploads/sites/7/2018/07/GettyImages-866059648-1380x690.jpg',
    'https://alwaysontheshore.com/wp-content/uploads/2021/01/002-1-1080x675.jpg',
    'https://static.cozycozy.com/images/catalog/bg2/horizontal-surfside-beach-sc.jpg',
    'https://imageio.forbes.com/blogs-images/thumbnails/blog_946/pt_946_6348_o.jpg?format=jpg&height=600&width=1200&fit=bounds',

  ];
  mosaicoTexts: string[] = ['Miami Beach' ,'Fort Lauderdale', 'Hallandale', 'Hollywood Beach', 'Sunny Isles', 'Florida Beach', 'Kissimmee', 'Surfside', 'Indian Greek'];


  beneficios = [
    {
      icon: 'ionBedOutline',
      title: 'Comodidad',
      text: 'Sumérgete en la comodidad y la hospitalidad excepcional con nuestro servicio de alojamientos.'
    },
    {
      icon: 'ionStarOutline',
      title: 'Mejores lugares',
      text: 'Reservamos los mejores lugares para tu comodidad.'
    },
    {
      icon: 'ionCalendarOutline',
      title: 'Flexibilidad',
      text: 'Elejimos las mejores temporadas para que puedas disfrutar un viaje inolvidable'
    },
  ]
}
