import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 4080ti'),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(5),
  // })
  // Es lo mismo con un formGroup o un FormBuilder, la ventaja 
  // del formBuilder es que el formulario lo manda como un objeto.
  miFormulario: FormGroup = this.fb.group({
    nombre: [, [ Validators.required, Validators.minLength(3) ] ],
    precio: [ , [ Validators.required, Validators.min(0) ] ],
    existencias: [ , [ Validators.required, Validators.min(0) ] ],
  })

  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.miFormulario.reset({
      nombre: 'RTX 4080ti',
      precio: 0
    })
  }

  campoEsValido( campo: string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  guardar(){

    if ( this.miFormulario.invalid ){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log( this.miFormulario.value );
    this.miFormulario.reset();
  }

}
