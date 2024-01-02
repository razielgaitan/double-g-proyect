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
}
