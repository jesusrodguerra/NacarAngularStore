import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home.component';
import { MaterialModule } from '../material/material.module';
import { HomeHijoComponent } from './components/home-hijo/home-hijo.component';


@NgModule({
  declarations: [HomeComponent, HomeHijoComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
