import { Component, OnInit } from '@angular/core';
import { Hero }   from './hero';

@Component({
  selector: 'app-ahorro',
  templateUrl: './ahorro.component.html',
  styleUrls: ['./ahorro.component.css']
})
export class AhorroComponent implements OnInit {

  powers = ['Monto a Ahorrar al año', 'Ahorro Fijo semanal',
            'Ahorro Mensual', 'Ahorro incremental semanal'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  constructor() { }

  ngOnInit() {
  }
}