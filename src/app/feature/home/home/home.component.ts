import { Dialog } from '@angular/cdk/dialog';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { PopUpComponent } from 'src/app/shared/components/pop-up/pop-up.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  faChevronDown = faChevronDown;

  @ViewChild('firstSection') contentElement: ElementRef | undefined;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.openDialog('100ms', '10ms');
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(PopUpComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  selectFunction(){
    window.open('https://g.page/r/CeGo9_1DwiXREB0/review', '_blank')
  }

  scrollDown() {
    if (this.contentElement) {
      this.contentElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
