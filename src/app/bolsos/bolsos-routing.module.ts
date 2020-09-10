import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BolsosComponent } from './components/bolsos.component';
import { BolsosDetailComponent } from './bolsos-detail/bolsos-detail.component';


const routes: Routes = [
  {
    path: '',
    component: BolsosComponent
  },
  {
    path: ':id',
    component: BolsosDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BolsosRoutingModule { }
