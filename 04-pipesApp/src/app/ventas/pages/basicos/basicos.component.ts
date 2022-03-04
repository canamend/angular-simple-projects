import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'isaac';
  nombreUpper: string = 'ISAAC';
  nombreCompleto: string = 'IsAac aNdRe CaNAlIzO MENdOzA' 
  fecha: Date = new Date();
}
