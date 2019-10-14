import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'create',
        loadChildren: './pages/opor-save/opor-save.module#OporSavePageModule'
      },
      {
        path: 'edit/:id',
        loadChildren: './pages/opor-save/opor-save.module#OporSavePageModule'
      },
      {
        path: '',
        loadChildren: './pages/opor-list/opor-list.module#OporListPageModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OporRoutingModule {}
