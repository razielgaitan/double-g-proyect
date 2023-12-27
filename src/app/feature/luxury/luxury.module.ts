import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuxuryRoutingModule } from './luxury-routing.module';
import { LuxuryComponent } from './luxury/luxury.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [LuxuryComponent],
  imports: [
    CommonModule,
    LuxuryRoutingModule,
    SharedModule
  ]
})
export class LuxuryModule { }
