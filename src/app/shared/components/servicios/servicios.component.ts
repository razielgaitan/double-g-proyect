import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements AfterViewInit, OnDestroy {
  private intersectionObserver: IntersectionObserver | undefined;

  ngAfterViewInit() {
    this.intersectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.applyAnimations(entry.target as HTMLElement);
          this.intersectionObserver?.unobserve(entry.target);
        }
      });
    });

    const sectionElement = document.getElementById('secondSection');

    if (sectionElement) {
      this.intersectionObserver?.observe(sectionElement);
    }
  }

  ngOnDestroy() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  private applyAnimations(element: HTMLElement) {
    element.classList.add('fade-in');
  }
}
