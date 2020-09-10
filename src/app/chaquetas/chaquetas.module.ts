import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaquetasRoutingModule } from './chaquetas-routing.module';
import { ChaquetasComponent } from './components/chaquetas.component';
import { ChaquetaHijoComponent } from './chaqueta-hijo/chaqueta-hijo.component';
import { MaterialModule } from '../material/material.module';
import { ChaquetaDetailsComponent } from './chaqueta-details/chaqueta-details.component';


@NgModule({
  declarations: [ChaquetasComponent, ChaquetaHijoComponent, ChaquetaDetailsComponent],
  imports: [
    CommonModule,
    ChaquetasRoutingModule,
    MaterialModule
  ]
})
export class ChaquetasModule { }
