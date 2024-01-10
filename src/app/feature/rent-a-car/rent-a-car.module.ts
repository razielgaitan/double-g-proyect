import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentACarRoutingModule } from './rent-a-car-routing.module';
import { RentACarComponent } from './rent-a-car/rent-a-car.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RentACarComponent],
  imports: [
    CommonModule,
    RentACarRoutingModule,
    SharedModule
  ]
})
export class RentACarModule { }
