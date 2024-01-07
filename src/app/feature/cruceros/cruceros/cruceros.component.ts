import { Component } from '@angular/core';

@Component({
  selector: 'app-cruceros',
  templateUrl: './cruceros.component.html',
  styleUrls: ['./cruceros.component.scss']
})
export class CrucerosComponent {
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
}
