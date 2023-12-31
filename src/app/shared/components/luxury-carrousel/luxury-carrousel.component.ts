import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-luxury-carrousel',
  templateUrl: './luxury-carrousel.component.html',
  styleUrls: ['./luxury-carrousel.component.scss']
})
export class LuxuryCarrouselComponent {
  @Input() cardData: any[] = [];
  cardCount: number = 0;

  ngOnInit() {
    this.cardCount = this.cardData.length;
  }
}