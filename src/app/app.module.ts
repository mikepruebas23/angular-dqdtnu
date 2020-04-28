import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RetoComponent } from '../reto/reto.component';
import { AhorroComponent } from './ahorro/ahorro.component';

@NgModule({
  imports:      [ BrowserModule ,FormsModule ,AppRoutingModule,ReactiveFormsModule],
  declarations: [ AppComponent, HelloComponent,RetoComponent, AhorroComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
