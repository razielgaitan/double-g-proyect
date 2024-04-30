import { Component, Input, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-universal-slider',
  templateUrl: './universal-slider.component.html',
  styleUrls: ['./universal-slider.component.scss']
})
export class UniversalSliderComponent {

  @ViewChild('carousel') carousel!: ElementRef;
  @ViewChild('firstImg') firstImg!: ElementRef;
  @ViewChild('arrowIcon1') arrowIcon1!: ElementRef;
  @ViewChild('arrowIcon2') arrowIcon2!: ElementRef;

  isDragStart: boolean = false;
  isDragging: boolean = false;
  prevPageX: number = 0;
  prevScrollLeft: number = 0;
  positionDiff: number = 0;


  constructor() { }

  ngAfterViewInit() {
    this.showHideIcons();
  }

  showHideIcons() {
    const carousel = this.carousel.nativeElement;
    const arrowIcon1 = this.arrowIcon1.nativeElement;
    const arrowIcon2 = this.arrowIcon2.nativeElement;
    const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcon1.style.display = (carousel.scrollLeft == 0 || window.matchMedia('(hover: none)').matches) ? "none" : "block";
    arrowIcon2.style.display = (carousel.scrollLeft == scrollWidth || window.matchMedia('(hover: none)').matches) ? "none" : "block";
  }

  onClickIcon(id: string) {
    const carousel = this.carousel.nativeElement;
    const firstImgWidth = this.firstImg.nativeElement.clientWidth + 26;
    carousel.scrollLeft += id == "left" ? - firstImgWidth : firstImgWidth;
    setTimeout(() => this.showHideIcons(), 60);
  }
  
  selectFunction(){
    window.open('https://api.whatsapp.com/send/?phone=19546218999&text=Hola%21+Me+gustaría+conocer+más+sobre+los+parques+de+Universal&type=phone_number&app_absent=0', '_blank')
  }
}
