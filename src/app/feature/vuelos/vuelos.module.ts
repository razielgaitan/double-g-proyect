import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VuelosRoutingModule } from './vuelos-routing.module';
import { VuelosComponent } from './vuelos/vuelos.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [VuelosComponent],
  imports: [
    CommonModule,
    VuelosRoutingModule,
    SharedModule
  ]
})
  
export class VuelosModule { }
