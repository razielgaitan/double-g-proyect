import { Component, ViewChild, AfterViewInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-video-experiencie',
  templateUrl: './video-experiencie.component.html',
  styleUrls: ['./video-experiencie.component.scss'],
})
export class VideoExperiencieComponent implements AfterViewInit {
  @ViewChild('videoPlayer') videoPlayer: ElementRef | undefined;
  videoId = '9vfNDed835A';
  href: string = 'https://api.whatsapp.com/send/?phone=19546218999&text=Hola%21+Me+gustaría+conocer+las+posibilidades+de+alquiler+de+DOUBLE+G&type=phone_number&app_absent=0';

  private videoContainerElement: Element | null = null;
  private animatedElements: NodeListOf<Element> | undefined;
  private videoAnimationActive = false;

  redirectToPage() {
    window.location.href = this.href;
  }
  ngAfterViewInit() {
    const video = this.videoPlayer?.nativeElement as HTMLIFrameElement;
    video.src = `https://www.youtube.com/embed/${this.videoId}?autoplay=1`;

    this.videoContainerElement = document.querySelector('.video-container');
    this.animatedElements = document.querySelectorAll('.title-video, .video');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    if (!this.videoAnimationActive && this.videoContainerElement && this.animatedElements) {
      const containerOffset = this.videoContainerElement.getBoundingClientRect().top;
      const threshold = window.innerHeight * 0.7;

      if (containerOffset <= threshold) {
        this.animatedElements.forEach(element => {
          element.classList.add('visible', 'fade-up');
        });

        this.videoAnimationActive = true;
      }
    }
  }
}
