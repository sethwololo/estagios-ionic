import { NgModule } from '@angular/core';

import { OporItemComponent } from './opor-item/opor-item.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    OporItemComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    OporItemComponent
  ]
})
export class ComponentsModule { }
