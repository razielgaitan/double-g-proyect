import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-marcas',
  templateUrl: './carousel-marcas.component.html',
  styleUrls: ['./carousel-marcas.component.scss']
})
export class CarouselMarcasComponent {
  @Input() empresasInfo: any[] = [];
}
