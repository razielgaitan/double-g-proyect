import { Component } from '@angular/core';

@Component({
  selector: 'app-parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.scss']
})
export class ParquesComponent {
  globalTexts: string[] = ['Diversos Destinos', 'Flexibilidad', 'Hermosos Lugares'];
  globalDescs: string[] = ['Te ayudamos a buscar el auto que necesitas para tu viaje', 'Nos adaptamos a tus planes y tus decisiones!', 'Te brindamos un servicio constante solo para vos'];
  globalIcons: string[] = ['ionCarSportOutline', 'ionCalendarOutline', 'ionOptionsOutline'];
  introParque = [
    {
      icon: 'ionBedOutline',
      title: 'Disney World',
      text: 'Vive la magia de Disney en su máxima expresión con nuestras opciones exclusivas. '
    },
    {
      icon: 'ionStarOutline',
      title: 'Universal Studios',
      text: 'Disfruta la aventura, descubre experiencias emocionantes y crea recuerdos inolvidables'
    },
    {
      icon: 'ionCalendarOutline',
      title: ' Otros parques temáticos',
      text: 'Tenemos otros parques increíbles para ti. Descúbrelos!'
    },
  ]
  beneficios = [
    {
      icon: 'ionBusinessOutline',
      title: 'Hospedaje',
      text: 'Nosotros te ayudaremos a encontrar el mejor hospedaje.'
    },
    {
      icon: 'ionReaderOutline',
      title: 'Planes perfectos',
      text: 'Podrás disfrutar de cualquier parque.'
    },
    {
      icon: 'ionStarOutline',
      title: 'Comodidad',
      text: 'Con Double G te llevamos y traemos a cada uno de los parques.'
    },
  ]
  selectFunction(){
    window.open('https://api.whatsapp.com/send/?phone=19546218999&text=Hola%21+Me+gustaría+conocer+las+posibilidades+de+alquiler+de+DOUBLE+G&type=phone_number&app_absent=0', '_blank')
  }
}
