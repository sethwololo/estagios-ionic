import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OporListPage } from './opor-list.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: OporListPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OporListPage]
})
export class OporListPageModule {}
