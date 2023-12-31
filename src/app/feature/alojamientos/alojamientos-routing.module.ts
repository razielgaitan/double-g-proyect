import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlojamientosComponent } from './alojamientos/alojamientos.component';

const routes: Routes = [
  { path: '', component: AlojamientosComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
   
  ],
  exports: [RouterModule],

})
  
export class AlojamientosRoutingModule { }
