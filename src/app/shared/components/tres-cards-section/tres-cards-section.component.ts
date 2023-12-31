import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tres-cards-section',
  templateUrl: './tres-cards-section.component.html',
  styleUrls: ['./tres-cards-section.component.scss']
})
export class TresCardsSectionComponent {
  @Input() mainTitle: string = '';
  @Input() cardTitle: string[] = [];
  @Input() cardDesc: string[] = [];
  @Input() cardIcons: string[] = [];
}
