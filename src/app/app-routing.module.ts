import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

import { AdminGuard } from './admin.guard';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'accesorios',
        loadChildren: () => import('./accesorios/accesorios.module').then(m => m.AccesoriosModule)
      },
      {
        path: 'chaquetas',
        loadChildren: () => import('./chaquetas/chaquetas.module').then(m => m.ChaquetasModule)
      },
      {
        path: 'moda',
        loadChildren: () => import('./moda/moda.module').then(m => m.ModaModule)
      },
      {
        path: 'bolsos',
        loadChildren: () => import('./bolsos/bolsos.module').then(m => m.BolsosModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
      }
    ]
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
