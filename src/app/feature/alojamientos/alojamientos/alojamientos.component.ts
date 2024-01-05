import { Component } from '@angular/core';

@Component({
  selector: 'app-alojamientos',
  templateUrl: './alojamientos.component.html',
  styleUrls: ['./alojamientos.component.scss']
})
export class AlojamientosComponent {
  mosaicoImages: string[] = ['../../../../../assets/images/coast-miami.jpg',
    '../../../../../assets/images/costa-palemras.jpg',
    '../../../../../assets/images/miami-aereo.jpg',
    '../../../../../assets/images/crucero.webp',
    '../../../../../assets/images/disney.jpg',
    '../../../../../assets/images/paisaje-costa-brava.jpg'
  ];
  mosaicoTexts: string[] = ['Miami', 'Orlando', 'New York', 'Mundial', 'Parques Tematicos', 'Kissimmee'];

}
