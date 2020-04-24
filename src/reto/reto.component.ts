import { Component } from '@angular/core';
import {  FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'reto',
  templateUrl: './reto.component.html',
  styleUrls: [ './reto.component.css' ]
})
export class RetoComponent  {
 profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
}
