import { Component, ViewChild, OnInit, ElementRef, AfterViewInit, ChangeDetectorRef, OnDestroy, HostListener, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss'],
  animations: [
    trigger('fadeInFromLeft', [
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
    trigger('fadeInFromTop', [
      state('initial', style({
        opacity: 0,
        transform: 'translateY(-100%)'
      })),
      state('final', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('initial => final', animate('800ms')),
    ]),
    trigger('fadeInFromBottom', [
      state('initial', style({
        opacity: 0,
        transform: 'translateY(100%)'
      })),
      state('final', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('initial => final', animate('800ms')),
    ]),
    trigger('fadeInFromRight', [
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
  ]
})
export class ExperienceSectionComponent implements AfterViewInit, OnDestroy {
  @ViewChild('videoPlayer') videoPlayer: ElementRef | undefined;
  videoId = '9vfNDed835A';

  fadeInFromLeftState = 'initial';
  fadeInFromTopState = 'initial';
  fadeInFromBottomState = 'initial';
  fadeInFromRightState = 'initial';

  firstPartVisible = false;
  secondPartVisible = false;

  private intersectionObserver: IntersectionObserver | undefined;

  ngAfterViewInit() {
    const video = this.videoPlayer?.nativeElement as HTMLIFrameElement;
    video.src = `https://www.youtube.com/embed/${this.videoId}?autoplay=1`;

    this.initializeIntersectionObserver();
  }

  ngOnDestroy() {
    this.disconnectIntersectionObserver();
  }

  private initializeIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('first-part')) {
              this.firstPartVisible = true;
            } else if (entry.target.classList.contains('second-part')) {
              this.secondPartVisible = true;
            }
            this.startAnimations();
          }
        });
      },
      options
    );

    // Observa las partes del componente
    const firstPart = document.querySelector('.first-part');
    const secondPart = document.querySelector('.second-part');

    if (firstPart) {
      this.intersectionObserver.observe(firstPart);
    }

    if (secondPart) {
      this.intersectionObserver.observe(secondPart);
    }
  }

  private disconnectIntersectionObserver() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  private startAnimations() {
    if (this.firstPartVisible) {
      this.fadeInFromLeftState = 'final';
      this.fadeInFromTopState = 'final';
    }

    if (this.secondPartVisible) {
      this.fadeInFromBottomState = 'final';
      this.fadeInFromRightState = 'final';
    }
  }
}