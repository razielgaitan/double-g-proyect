import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParquesRoutingModule } from './parques-routing.module';
import { ParquesComponent } from './parques/parques.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ParquesComponent],
  imports: [
    CommonModule,
    ParquesRoutingModule,
    SharedModule
  ]
})
export class ParquesModule { }
