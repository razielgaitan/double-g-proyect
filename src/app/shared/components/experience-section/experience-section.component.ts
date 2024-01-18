import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss'],
})
export class ExperienceSectionComponent implements AfterViewInit, OnDestroy {
  private intersectionObserver: IntersectionObserver | undefined;

  ngAfterViewInit() {
    this.intersectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.applyAnimations();
        }
      });
    });

    const infoElement = document.querySelector('.info');
    const photosElement = document.querySelector('.photos');

    if (infoElement) {
      this.intersectionObserver.observe(infoElement);
    }

    if (photosElement) {
      this.intersectionObserver.observe(photosElement);
    }
  }

  ngOnDestroy() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  private applyAnimations() {
    const infoElement = document.querySelector('.info');
    const photosElement = document.querySelector('.photos');

    if (infoElement) {
      infoElement.classList.add('fade-up');
    }

    if (photosElement) {
      photosElement.classList.add('fade-down');
    }
  }
}
