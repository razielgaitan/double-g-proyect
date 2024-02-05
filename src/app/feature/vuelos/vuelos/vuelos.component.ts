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
      title: 'Atención Personalizada',
      text: 'Recibe un servicio personalizado en cada paso, desde la reserva hasta tu llegada, garantizando una experiencia de vuelo única.'
    },
    {
      icon: 'ionStarOutline',
      title: 'Tarifas Transparentes',
      text: 'Experimenta tarifas claras y competitivas, sin sorpresas, para que puedas planificar tu viaje con confianza.'
    },
  ] 

  selectFunction(){
    window.open('https://api.whatsapp.com/send/?phone=19546218999&text=Hola%21+Me+gustaría+conocer+las+posibilidades+de+alquiler+de+DOUBLE+G&type=phone_number&app_absent=0', '_blank')
  }
}
