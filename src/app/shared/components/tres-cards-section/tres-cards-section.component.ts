import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tres-cards-section',
  templateUrl: './tres-cards-section.component.html',
  styleUrls: ['./tres-cards-section.component.scss']
})
export class TresCardsSectionComponent implements OnInit {
  // @Input() mainTitle: string = '';
  // @Input() cardTitle: string[] = [];
  // @Input() cardDesc: string[] = [];
  // @Input() cardIcons: string[] = [];
  @Input() mainTitle: string = 'Beneficios';
  @Input() mainText: string = '';
  @Input() cardData: any[] = [];

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

