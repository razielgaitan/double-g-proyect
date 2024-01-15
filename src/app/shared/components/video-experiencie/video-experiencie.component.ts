import { Component, ViewChild, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-video-experiencie',
  templateUrl: './video-experiencie.component.html',
  styleUrls: ['./video-experiencie.component.scss']
})
export class VideoExperiencieComponent implements AfterViewInit, OnDestroy {
  @ViewChild('videoPlayer') videoPlayer: ElementRef | undefined;
  videoId = '9vfNDed835A';


  private intersectionObserver: IntersectionObserver | undefined;

  ngAfterViewInit() {
    const video = this.videoPlayer?.nativeElement as HTMLIFrameElement;
    video.src = `https://www.youtube.com/embed/${this.videoId}?autoplay=1`;

    this.initializeIntersectionObserver();
  }

  

  private initializeIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8,
    };

    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.startAnimations();
          }
        });
      },
    );

    const titleElement = document.querySelector('.title-video');
    const videoElement = document.querySelector('.video');

    if (titleElement) {
      this.intersectionObserver.observe(titleElement);
    }

    if (videoElement) {
      this.intersectionObserver.observe(videoElement);
    }
  }

  ngOnDestroy() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  private startAnimations() {
    const titleElement = document.querySelector('.title-video');
    const videoElement = document.querySelector('.video');

    if (titleElement) {
      titleElement.classList.add('slide-left');
    }

    if (videoElement) {
      videoElement.classList.add('slide-right');
    }
  }
}
