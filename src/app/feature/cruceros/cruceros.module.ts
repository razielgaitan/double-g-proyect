import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrucerosRoutingModule } from './cruceros-routing.module';
import { CrucerosComponent } from './cruceros/cruceros.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CrucerosComponent],
  imports: [
    CommonModule,
    CrucerosRoutingModule,
    SharedModule
  ],
})
export class CrucerosModule { }
