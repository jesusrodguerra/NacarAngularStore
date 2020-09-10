import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModaComponent } from './components/moda.component';
import { ModaDetailComponent } from './moda-detail/moda-detail.component';


const routes: Routes = [
  {
    path: '',
    component: ModaComponent
  },
  {
    path: ':id',
    component: ModaDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModaRoutingModule { }
