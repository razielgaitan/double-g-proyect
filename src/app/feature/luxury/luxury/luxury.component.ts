import { Component } from '@angular/core';

@Component({
  selector: 'app-luxury',
  templateUrl: './luxury.component.html',
  styleUrls: ['./luxury.component.scss']
})
export class LuxuryComponent {
  globalTexts: string[] = ['Diversos Destinos', 'Flexibilidad', 'Hermosos Lugares'];
  globalDescs: string[] = ['Te ayudamos a buscar el auto que necesitas para tu viaje', 'Nos adaptamos a tus planes y tus decisiones!', 'Te brindamos un servicio constante solo para vos'];
  globalIcons: string[] = ['ionCarSportOutline', 'ionCalendarOutline', 'ionOptionsOutline'];
}
