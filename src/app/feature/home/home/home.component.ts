import { Component, ElementRef, ViewChild } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  faChevronDown = faChevronDown;

  @ViewChild('firstSection') contentElement: ElementRef | undefined;

  scrollDown() {
    if (this.contentElement) {
      this.contentElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
