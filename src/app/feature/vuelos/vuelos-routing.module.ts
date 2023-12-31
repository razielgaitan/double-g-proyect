import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VuelosComponent } from './vuelos/vuelos.component';

const routes: Routes = [
  { path: '', component: VuelosComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
  
export class VuelosRoutingModule { }
