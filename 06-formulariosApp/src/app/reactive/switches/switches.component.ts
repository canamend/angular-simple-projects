import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: [ 'M', Validators.required ],
    notificaciones: [ true, Validators.required ],
    condiciones: [ false, [Validators.required, Validators.requiredTrue] ]
  });

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      condiciones: false
    });

    /*this.miFormulario.get('condiciones')?.valueChanges.subscribe( newValue => {
      console.log(newValue);
    }); */
                                              //al desestructurar, se extraen las condiciones
                                              //y lo demás se asigna en rest
    this.miFormulario.valueChanges.subscribe( ({ condiciones, ...restantes }) => {
      //delete form.condiciones;
      this.persona = restantes;
    });

  }

  guardar() {

    const formValue = { ...this.miFormulario.value }
    delete formValue.condiciones;
    this.persona = formValue;
  }

}
