import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RetoComponent } from '../reto/reto.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,AppRoutingModule],
  declarations: [ AppComponent, HelloComponent,RetoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
