import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlojamientosRoutingModule } from './alojamientos-routing.module';
import { AlojamientosComponent } from './alojamientos/alojamientos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgIconsModule } from '@ng-icons/core'
import { ionBusinessOutline, ionPeopleOutline, ionColorWandOutline } from '@ng-icons/ionicons';

@NgModule({
  declarations: [AlojamientosComponent],
  imports: [
    CommonModule,
    AlojamientosRoutingModule,
    SharedModule,
    NgIconsModule.withIcons({ ionBusinessOutline, ionPeopleOutline, ionColorWandOutline }),
  ]
})
  
export class AlojamientosModule { }
