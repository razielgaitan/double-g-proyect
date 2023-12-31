import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LuxuryComponent } from './luxury/luxury.component';

const routes: Routes = [
  { path: '', component: LuxuryComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
  
export class LuxuryRoutingModule { }
