import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
  { path: '', component: ServiciosComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
  
export class ServiciosRoutingModule { }
