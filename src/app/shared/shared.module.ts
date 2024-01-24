import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { NgIconsModule } from '@ng-icons/core'
import { ionCarSportOutline, ionCalendarOutline , ionOptionsOutline ,ionStarOutline, ionBedOutline, ionAirplaneOutline, ionColorWandOutline,ionCashOutline, ionBoatOutline, ionEarthOutline, ionIdCardOutline, ionReaderOutline, ionPeopleOutline, ionBusinessOutline, ionDiamondOutline } from '@ng-icons/ionicons';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ImgCardComponent } from './components/cards/img-card/img-card.component';
import { OpinionCardComponent } from './components/cards/opinion-card/opinion-card.component';
import { NewsletterComponent } from './components/forms/newsletter/newsletter.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoNewsletterComponent } from './components/contacto-newsletter/contacto-newsletter.component';
import { ContactoComponent } from './components/forms/contacto/contacto.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { PrimaryButtonComponent } from './components/buttons/primary-button/primary-button.component';
import { FloatingWhatsappComponent } from './components/floating-whatsapp/floating-whatsapp.component';
import { VideoExperiencieComponent } from './components/video-experiencie/video-experiencie.component';
import { PortadaComponent } from './components/portada/portada.component';
import { MosaicoComponent } from './components/mosaico/mosaico.component';
import { TresCardsSectionComponent } from './components/tres-cards-section/tres-cards-section.component';
import { GaleriaAutosComponent } from './components/galeria-autos/galeria-autos.component';
import { LuxuryCarrouselComponent } from './components/luxury-carrousel/luxury-carrousel.component';
import { ExperienceCardsComponent } from './components/experience-cards/experience-cards.component';
import { ServiciosCardsComponent } from './components/servicios-cards/servicios-cards.component';



//import { YouTubePlayerModule } from '@angular/youtube-player';
@NgModule({
  declarations: [
    NavBarComponent,
    CarouselComponent,
    ImgCardComponent,
    OpinionCardComponent,
    NewsletterComponent,
    FooterComponent,
    ContactoNewsletterComponent,
    ContactoComponent,
    ExperienceSectionComponent,
    PrimaryButtonComponent,
    FloatingWhatsappComponent,
    VideoExperiencieComponent,
    PortadaComponent,
    MosaicoComponent,
    TresCardsSectionComponent,
    GaleriaAutosComponent,
    LuxuryCarrouselComponent,
    ExperienceCardsComponent,
    ServiciosCardsComponent,

  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatIconModule,
    MatTooltipModule,
    NgIconsModule.withIcons({ ionCarSportOutline, ionCalendarOutline, ionOptionsOutline, ionStarOutline, ionBedOutline, ionAirplaneOutline, ionColorWandOutline, ionBoatOutline, ionEarthOutline, ionIdCardOutline,ionCashOutline, ionReaderOutline, ionPeopleOutline, ionBusinessOutline, ionDiamondOutline }),
  ],
  exports: [
    NavBarComponent,
    CarouselComponent,
    ImgCardComponent,
    OpinionCardComponent,
    NewsletterComponent,
    FooterComponent,
    ContactoNewsletterComponent,
    ContactoComponent,
    ExperienceSectionComponent,
    PrimaryButtonComponent,
    FloatingWhatsappComponent,
    VideoExperiencieComponent,
    PortadaComponent,
    MosaicoComponent,
    TresCardsSectionComponent,
    GaleriaAutosComponent,
    LuxuryCarrouselComponent,
    ExperienceCardsComponent,
    ServiciosCardsComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA  ]
})
export class SharedModule { }
