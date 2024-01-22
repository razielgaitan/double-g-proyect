import { Component } from '@angular/core';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.scss']
})
export class VuelosComponent {
  //globalTexts: string[] = ['Diversos Destinos', 'Flexibilidad', 'Hermosos Lugares'];
  //globalDescs: string[] = ['Te ayudamos a buscar el auto que necesitas para tu viaje', 'Nos adaptamos a tus planes y tus decisiones!', 'Te brindamos un servicio constante solo //para vos'];
  //globalIcons: string[] = ['ionCarSportOutline', 'ionCalendarOutline', 'ionOptionsOutline'];
  beneficios = [
    {
      icon: 'ionEarthOutline',
      title: 'Diversos Destinos',
      text: 'Te ayudamos a encontrar el destino perfecto para tu nueva aventura'
    },
    {
      icon: 'ionOptionsOutline',
      title: 'Flexibilidad',
      text: 'Nos adaptamos a tus planes y tus decisiones!'
    },
    {
      icon: 'ionStarOutline',
      title: 'Hermosos Lugares',
      text: 'Te brindamos vuelos y guias para que puedas disfrutar tu viaje al 100%'
    },
  ] 
}
