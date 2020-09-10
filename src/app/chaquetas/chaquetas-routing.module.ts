import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChaquetasComponent } from './components/chaquetas.component';
import { ChaquetaDetailsComponent } from './chaqueta-details/chaqueta-details.component';


const routes: Routes = [
  {
    path: '',
    component: ChaquetasComponent
  },
  {
    path: ':id',
    component: ChaquetaDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChaquetasRoutingModule { }
