import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i28nSelect
  nombre: string = 'Isaac';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria','Pepe','Juan','Jhon'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando'
  }

  cambiarPersona() {
    if(this.nombre==='Isaac'){
      this.nombre='Andrea';
      this.genero='femenino';
    }else{
      this.nombre='Isaac';
      this.genero='masculino';
    }
  }

  borrarCliente() {
      this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre:'Isaac',
    edad: 22,
    direccion: 'Oaxaca, Oaxaca'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve, reject) =>{
    
    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
    }, 3500 );
  });

}
