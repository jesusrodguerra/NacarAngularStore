import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccesoriosComponent } from './components/accesorios.component';
import { AccesoriosDetailComponent } from './accesorios-detail/accesorios-detail.component';


const routes: Routes = [
  {
    path: '',
    component: AccesoriosComponent
  },
  {
    path: ':id',
    component: AccesoriosDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccesoriosRoutingModule { }
