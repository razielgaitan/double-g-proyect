import { Component, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss'],
})
export class ExperienceSectionComponent implements AfterViewInit {
  private containerElement: Element | null = null;
  private animatedElements: NodeListOf<Element> | undefined;
  private animationActivated = false;

  ngAfterViewInit() {
    this.containerElement = document.querySelector('.container');
    this.animatedElements = document.querySelectorAll('.info, .photos');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    if (!this.animationActivated && this.containerElement && this.animatedElements) {
      const containerOffset = this.containerElement.getBoundingClientRect().top;
      const threshold = window.innerHeight * 0.7;

      if (containerOffset <= threshold) {
        this.animatedElements.forEach(element => {
          element.classList.add('visible', 'fade-up');
        });

        this.animationActivated = true;
      }
    }
  }
}
