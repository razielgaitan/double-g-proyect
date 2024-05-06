import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporativoRoutingModule } from './corporativo-routing.module';
import { CorporativoComponent } from './corporativo/corporativo.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CorporativoComponent],
  imports: [
    CommonModule,
    CorporativoRoutingModule,
    SharedModule
  ]
})
export class CorporativoModule { }
