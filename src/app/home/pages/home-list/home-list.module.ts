import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeListPage } from './home-list.page';
import { ComponentsModule } from 'src/app/home/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: HomeListPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeListPage]
})
export class HomeListPageModule {}
