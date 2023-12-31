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

  fadeInFromLeftState = 'initial';

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
            this.startAnimations();
          }
        });
      },
      options
    );

    // Observa las partes del componente
    const videoSection = document.querySelector('.video');

    if (videoSection) {
      this.intersectionObserver.observe(videoSection);
    }
  }

  private disconnectIntersectionObserver() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  private startAnimations() {
    this.fadeInFromLeftState = 'final';
  }
}
