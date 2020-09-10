import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BolsosRoutingModule } from './bolsos-routing.module';
import { BolsosComponent } from './components/bolsos.component';
import { BolsoHijoComponent } from './bolso-hijo/bolso-hijo.component';
import { MaterialModule } from '../material/material.module';
import { BolsosDetailComponent } from './bolsos-detail/bolsos-detail.component';


@NgModule({
  declarations: [BolsosComponent, BolsoHijoComponent, BolsosDetailComponent],
  imports: [
    CommonModule,
    BolsosRoutingModule,
    MaterialModule
  ]
})
export class BolsosModule { }
