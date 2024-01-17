import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
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
