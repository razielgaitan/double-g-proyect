import { Component } from '@angular/core';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.scss']
})
export class VuelosComponent {
  globalTexts: string[] = ['Diversos Destinos', 'Flexibilidad', 'Hermosos Lugares'];
  globalDescs: string[] = ['Te ayudamos a buscar el auto que necesitas para tu viaje', 'Nos adaptamos a tus planes y tus decisiones!', 'Te brindamos un servicio constante solo para vos'];
  globalIcons: string[] = ['ionCarSportOutline', 'ionCalendarOutline', 'ionOptionsOutline'];
}
