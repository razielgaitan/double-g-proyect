import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss'],
  animations: [
    trigger('fadeInLeft', [
      state('initial', style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      state('final', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('initial => final', animate('800ms')),
    ]),
    trigger('fadeInRight', [
      state('initial', style({
        opacity: 0,
        transform: 'translateX(100%)'
      })),
      state('final', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('initial => final', animate('800ms')),
    ]),
  ],
})
export class ExperienceSectionComponent implements AfterViewInit, OnDestroy {
  fadeInLeftState = 'initial';
  fadeInRightState = 'initial';

  private intersectionObserver: IntersectionObserver | undefined;

  ngAfterViewInit() {
    this.initializeIntersectionObserver();
  }

  ngOnDestroy() {
    this.disconnectIntersectionObserver();
  }

  private initializeIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('info')) {
              this.fadeInLeftState = 'final';
            } else if (entry.target.classList.contains('photos')) {
              this.fadeInRightState = 'final';
            }
          }
        }
      },
      options
    );

    const infoElement = document.querySelector('.info');
    const photosElement = document.querySelector('.photos');

    if (infoElement && this.intersectionObserver) {
      this.intersectionObserver.observe(infoElement);
    }

    if (photosElement && this.intersectionObserver) {
      this.intersectionObserver.observe(photosElement);
    }
  }

  private disconnectIntersectionObserver() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }
}




/*
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss'],
  animations: [
    trigger('fadeInFromRight', [
      state('initial', style({
        opacity: 0,
        transform: 'translateX(100%)'
      })),
      state('final', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('initial => final', [
        animate('800ms')
      ]),
    ]),
    trigger('fadeInLeft', [
      state('initial', style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      state('final', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('initial => final', animate('800ms')),
    ]),
  ],
})
export class ExperienceSectionComponent implements AfterViewInit, OnDestroy {
  fadeInFromRightStates = ['initial', 'initial', 'initial', 'initial'];
  fadeInLeftState = 'initial';

  private intersectionObserver: IntersectionObserver | undefined;

  async ngAfterViewInit() {
    await this.initializeIntersectionObserver();
  }

  ngOnDestroy() {
    this.disconnectIntersectionObserver();
  }

  private async initializeIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    this.intersectionObserver = new IntersectionObserver(
      async (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.target.classList.contains('photos')) {
            await this.startImageAnimations();
          }
          if (entry.isIntersecting && entry.target.classList.contains('info')) {
            await this.startInfoAnimations();
          }
        }
      },
      options
    );

    const photosContainer = document.querySelector('.photos');
    const infoContainer = document.querySelector('.info');

    if (photosContainer && this.intersectionObserver) {
      this.intersectionObserver.observe(photosContainer);
    }

    if (infoContainer && this.intersectionObserver) {
      this.intersectionObserver.observe(infoContainer);
    }
  }

  private disconnectIntersectionObserver() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  private async startImageAnimations() {
    const delays = [0, 300, 400, 500];
    await Promise.all(
      this.fadeInFromRightStates.map(async (_, index) => {
        await this.delay(delays[index]);
        this.fadeInFromRightStates[index] = 'final';
      })
    );
  }

  private async startInfoAnimations() {
    await this.delay(0);
    this.fadeInLeftState = 'final';
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
*/