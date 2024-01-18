import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent {
  @Input() text: string = '';
  @Input() href: string = '';

  redirectToPage() {
    window.location.href = this.href;
  }
}
