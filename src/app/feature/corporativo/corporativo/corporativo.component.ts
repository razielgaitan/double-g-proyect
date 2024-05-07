import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporativo',
  templateUrl: './corporativo.component.html',
  styleUrls: ['./corporativo.component.scss']
})
export class CorporativoComponent  implements OnInit {
  isScreenSmall = false;
  isPhoneScreen = false;

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    const screenWidth = window.innerWidth;

    this.isPhoneScreen = screenWidth <= 768;
    this.isScreenSmall = screenWidth <= 600;
  }
}
