// experience-section.component.ts
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
    trigger('fadeInFromRightSequence', [
      transition('* => *', [
        animate('0ms', style({ opacity: 0, transform: 'translateX(100%)' })),
        animate('300ms', style({ opacity: 1, transform: 'translateX(0)' })),
        animate('300ms', style({ opacity: 1, transform: 'translateX(0)' })),
        animate('100ms', style({ opacity: 1, transform: 'translateX(0)' })),
        animate('100ms', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
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
          if (entry.isIntersecting && entry.target.classList.contains('images-container')) {
            await this.startImageAnimations();
          }
          if (entry.isIntersecting && entry.target.classList.contains('info')) {
            await this.startInfoAnimations();
          }
        }
      },
      options
    );

    const imagesContainer = document.querySelector('.images-container');
    const infoContainer = document.querySelector('.info');

    if (imagesContainer && this.intersectionObserver) {
      this.intersectionObserver.observe(imagesContainer);
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
    await this.delay(0);
    this.fadeInFromRightStates[0] = 'final';

    await this.delay(100); // Retraso ajustado para #image-2
    this.fadeInFromRightStates[1] = 'final';

    await this.delay(200); // Retraso ajustado para #image-3
    this.fadeInFromRightStates[2] = 'final';

    await this.delay(300); // Retraso ajustado para #image-4
    this.fadeInFromRightStates[3] = 'final';
  }

  private async startInfoAnimations() {
    // Lógica para las animaciones de info (fadeInLeft, por ejemplo)
    // Ajusta según tus necesidades
    await this.delay(0);
    this.fadeInLeftState = 'final';
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
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