import { Component, Input, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.scss']
})
export class ImgCardComponent {
  @Input() cardTitle: string = '';
  @Input() cardImg: string = '';
  @Input() cardDesc: string = '';

  private CardFlipped = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  flipCard(): void {
    this.CardFlipped = true;

    this.renderer.listen('document', 'mouseup', () => {
      this.CardFlipped = false;
    });
  }

  isCardFlipped(): boolean {
    return this.CardFlipped;
  }

}
