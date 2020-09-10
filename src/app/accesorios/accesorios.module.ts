import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccesoriosRoutingModule } from './accesorios-routing.module';
import { AccesoriosComponent } from './components/accesorios.component';
import { AccesoriosHijoComponent } from './components/accesorios-hijo/accesorios-hijo.component';
import { MaterialModule } from '../material/material.module';
import { AccesoriosDetailComponent } from './accesorios-detail/accesorios-detail.component';


@NgModule({
  declarations: [AccesoriosComponent, AccesoriosHijoComponent, AccesoriosDetailComponent],
  imports: [
    CommonModule,
    AccesoriosRoutingModule,
    MaterialModule
  ]
})
export class AccesoriosModule { }
