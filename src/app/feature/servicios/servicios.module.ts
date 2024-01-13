import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosComponent } from './servicios/servicios.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ServiciosComponent],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    SharedModule
  ]
})
export class ServiciosModule { }
