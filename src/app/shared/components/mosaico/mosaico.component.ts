import { Component, Input, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-mosaico',
  templateUrl: './mosaico.component.html',
  styleUrls: ['./mosaico.component.scss']
})
export class MosaicoComponent {
  @Input() backImg: string = '';
  @Input() secTitle: string = '';
  @Input() mainTitle: string = '';
  @Input() desc: string = '';
}
