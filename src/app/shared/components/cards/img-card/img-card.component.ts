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
  @Input() href: string = '';

  redirectToPage() {
    window.location.href = this.href;
  }

  private cardFlipped = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  flipCard(isFlipped: boolean): void {
    this.cardFlipped = isFlipped;
  }

  isCardFlipped(): boolean {
    return this.cardFlipped;
  }

}