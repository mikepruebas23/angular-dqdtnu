import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { RetoComponent } from './reto.component';

@NgModule({
  imports:[ BrowserModule,AppRoutingModule,ReactiveFormsModule],
  declarations: [RetoComponent ,  ],
  bootstrap:    [RetoComponent ]
})
export class RetoModule { }
