import { Component, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss'],
})
export class ExperienceSectionComponent implements AfterViewInit {
  private animatedElements: NodeListOf<Element> | undefined;
  private animationActivated = false;

  ngAfterViewInit() {
    this.animatedElements = document.querySelectorAll('.info, .photos');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    console.log('onWindowScroll triggered');
    if (!this.animationActivated && this.animatedElements) {
      const threshold = window.innerHeight * 0.8;

      this.animatedElements.forEach(element => {
        const elementOffset = element.getBoundingClientRect().top;

        if (elementOffset < threshold) {
          console.log('Adding classes to element:', element);
          element.classList.add('fade-up', 'visible');
          this.animationActivated = true;
        }
      });
    }
  }
}
