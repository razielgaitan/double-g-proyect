import { Component, Input } from '@angular/core';

interface imgData {
  imageSrc: string;
}

@Component({
  selector: 'app-mini-slider',
  templateUrl: './mini-slider.component.html',
  styleUrls: ['./mini-slider.component.scss']
})

export class MiniSliderComponent {
  @Input({ required: true }) images: imgData[] = []; 
}
