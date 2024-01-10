import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RentACarComponent } from './rent-a-car/rent-a-car.component';

const routes: Routes = [
  { path: '', component: RentACarComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class RentACarRoutingModule { }
