import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-luxury-carrousel',
  templateUrl: './luxury-carrousel.component.html',
  styleUrls: ['./luxury-carrousel.component.scss']
})
export class LuxuryCarrouselComponent {
  @Input() cardData: any[] = [];
  @Input() title: string = "";
  @Input() text: string = "";
  @Input() text2Flag: boolean = false;
  @Input() text2: string = "";
  
  selectFunction(){
    window.open('https://api.whatsapp.com/send/?phone=19546218999&text=Hola%21+Me+gustaría+conocer+las+posibilidades+de+alquiler+de+DOUBLE+G&type=phone_number&app_absent=0', '_blank')
  }
}