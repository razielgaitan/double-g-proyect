import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlojamientosRoutingModule } from './alojamientos-routing.module';
import { AlojamientosComponent } from './alojamientos/alojamientos.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AlojamientosComponent],
  imports: [
    CommonModule,
    AlojamientosRoutingModule,
    SharedModule,
  ]
})
  
export class AlojamientosModule { }
