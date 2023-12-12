import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
  
  mostrarHablanosAhora = true;
  mostrarTipoContacto = false;
  mostrarEmailContainer = false;

  
  mostrarTipoContactoClick() {
    this.mostrarHablanosAhora = false;
    this.mostrarTipoContacto = true;
    this.mostrarEmailContainer = false;
  }

  mostrarEmailContainerClick() {
    this.mostrarHablanosAhora = false;
    this.mostrarTipoContacto = false;
    this.mostrarEmailContainer = true;
  }

  volverClick() {
    this.mostrarHablanosAhora = false;
    this.mostrarTipoContacto = true;
    this.mostrarEmailContainer = false;
  }
}
