import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModaRoutingModule } from './moda-routing.module';
import { ModaComponent } from './components/moda.component';
import { ModaHijoComponent } from './moda-hijo/moda-hijo.component';
import { MaterialModule } from '../material/material.module';
import { ModaDetailComponent } from './moda-detail/moda-detail.component';


@NgModule({
  declarations: [ModaComponent, ModaHijoComponent, ModaDetailComponent],
  imports: [
    CommonModule,
    ModaRoutingModule,
    MaterialModule
  ]
})
export class ModaModule { }
