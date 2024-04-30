import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
  standalone: true,
  imports: [SharedModule, MatIconModule],
})
export class PopUpComponent {
  constructor(public dialogRef: MatDialogRef<PopUpComponent>) {}

  navigate() {
    window.open(
      'https://api.whatsapp.com/send/?phone=19546218999&text=Hola%21+Me+gustaría+conocer+las+posibilidades+de+alquiler+de+DOUBLE+G&type=phone_number&app_absent=0',
      '_blank'
    );
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
