import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CrucerosComponent } from './cruceros/cruceros.component';

const routes: Routes = [
  { path: '', component: CrucerosComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
  
export class CrucerosRoutingModule { }
