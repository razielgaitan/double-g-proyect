import { Component, Input, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss']
})
export class PortadaComponent {
  @Input() backImg: string = '';
  @Input() secTitle: string = '';
  @Input() mainTitle: string = '';
  @Input() desc: string = '';
}
