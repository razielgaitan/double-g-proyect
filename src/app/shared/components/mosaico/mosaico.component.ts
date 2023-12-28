import { Component, Input, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-mosaico',
  templateUrl: './mosaico.component.html',
  styleUrls: ['./mosaico.component.scss']
})
export class MosaicoComponent {
  @Input() mainTitle: string = '';
  @Input() desc: string = '';
  @Input() images: string[] = [];  
  @Input() texts: string[] = [];
}
