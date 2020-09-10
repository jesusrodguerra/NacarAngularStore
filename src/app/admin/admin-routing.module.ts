import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { ProductListComponent } from './components/accesorios/product-list/product-list.component';
import { CreateAccesorioComponent } from './components/accesorios/create-accesorio/create-accesorio.component';
import { EditAccesorioComponent } from './components/accesorios/edit-accesorio/edit-accesorio.component';
import { ModaListComponent } from './components/moda/moda-list/moda-list.component';
import { ModaCreateComponent } from './components/moda/moda-create/moda-create.component';
import { ModaEditComponent } from './components/moda/moda-edit/moda-edit.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: '',
        redirectTo: 'productA',
        pathMatch: 'full'
      },
      {
        path: 'productA',
        component: ProductListComponent
      },
      {
        path: 'createA',
        component: CreateAccesorioComponent
      },
      {
        path: 'productA/editA',
        component: EditAccesorioComponent
      },
      {
        path: 'productM',
        component: ModaListComponent
      },
      {
        path: 'createM',
        component: ModaCreateComponent
      },
      {
        path: 'productM/editM',
        component: ModaEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
