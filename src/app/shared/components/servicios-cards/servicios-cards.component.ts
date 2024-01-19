import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-servicios-cards',
  templateUrl: './servicios-cards.component.html',
  styleUrls: ['./servicios-cards.component.scss']
})
export class ServiciosCardsComponent {
  private animationActivated = false;

  constructor(private el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.checkAndAnimate();
  }

  private checkAndAnimate() {
    const sectionElement = this.el.nativeElement.querySelector('#secondSection');

    if (sectionElement && !this.animationActivated) {
      const scrollPosition = window.scrollY || window.pageYOffset;
      const threshold = sectionElement.offsetTop - window.innerHeight * 0.8;

      if (scrollPosition > threshold) {
        this.applyAnimations(sectionElement);
      }
    }
  }

  private applyAnimations(element: HTMLElement) {
    element.classList.add('fade-in',);
    element.style.opacity = '1';
    this.animationActivated = true;
  }
}
