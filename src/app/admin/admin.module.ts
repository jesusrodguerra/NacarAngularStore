import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { ProductListComponent } from './components/accesorios/product-list/product-list.component';
import { MaterialModule } from '../material/material.module';
import { CreateAccesorioComponent } from './components/accesorios/create-accesorio/create-accesorio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditAccesorioComponent } from './components/accesorios/edit-accesorio/edit-accesorio.component';
import { ModaListComponent } from './components/moda/moda-list/moda-list.component';
import { ModaEditComponent } from './components/moda/moda-edit/moda-edit.component';
import { ModaCreateComponent } from './components/moda/moda-create/moda-create.component';


@NgModule({
  declarations: [
    NavComponent,
    ProductListComponent,
    CreateAccesorioComponent,
    EditAccesorioComponent,
    ModaListComponent,
    ModaEditComponent,
    ModaCreateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
