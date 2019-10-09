import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OporSavePage } from './opor-save.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: OporSavePage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OporSavePage]
})
export class OporSavePageModule {}
