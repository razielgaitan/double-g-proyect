import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ImgCardComponent } from './components/cards/img-card/img-card.component';
import { OpinionCardComponent } from './components/cards/opinion-card/opinion-card.component';
import { NewsletterComponent } from './components/forms/newsletter/newsletter.component';

@NgModule({
  declarations: [
    NavBarComponent,
    CarouselComponent,
    ImgCardComponent,
    OpinionCardComponent,
    NewsletterComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatIconModule,
    MatTooltipModule,
  ],
  exports: [
    NavBarComponent,
    CarouselComponent,
    ImgCardComponent,
    OpinionCardComponent,
    NewsletterComponent,
  ]
})
export class SharedModule { }
