import { NgModule } from '@angular/core';
import { HomeItemComponent } from './home-item/home-item.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    HomeItemComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    HomeItemComponent
  ]
})
export class ComponentsModule { }
