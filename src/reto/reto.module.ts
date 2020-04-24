import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RetoComponent } from './reto.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [RetoComponent ,  ],
  bootstrap:    [RetoComponent ]
})
export class RetoModule { }
