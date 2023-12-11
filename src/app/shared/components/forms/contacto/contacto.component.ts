import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
  // Variable para controlar la visibilidad de los diferentes elementos
  mostrarHablanosAhora = true;
  mostrarTipoContacto = false;
  mostrarEmailContainer = false;

  // Funciones para cambiar la visibilidad de los elementos
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
    this.mostrarHablanosAhora = true;
    this.mostrarTipoContacto = false;
    this.mostrarEmailContainer = false;
  }
}
