import { Component, ViewChild, OnInit, ElementRef, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss'],
})
export class ExperienceSectionComponent {
  @ViewChild('videoPlayer') videoPlayer: ElementRef | undefined;
  videoId = '9vfNDed835A';

  ngAfterViewInit() {
    const video = this.videoPlayer?.nativeElement as HTMLIFrameElement;
    video.src = `https://www.youtube.com/embed/${this.videoId}?autoplay=1`;
  }
}
