import { Component, Input, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-mosaico-card',
  templateUrl: './mosaico-card.component.html',
  styleUrls: ['./mosaico-card.component.scss']
})
export class MosaicoCardComponent {
  @Input() backImg: string = '';
  @Input() title: string = '';
  @Input() alter: string = '';
}
