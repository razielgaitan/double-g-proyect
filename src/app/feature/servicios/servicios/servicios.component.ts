import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent {

constructor(private router: Router){}

  alojamientos(){
    this.router.navigate(['/alojamientos'])
  }
  rent(){
    this.router.navigate(['/rent-a-car'])
  }
  vuelos(){
    this.router.navigate(['/vuelos'])
  }
  parques(){
    this.router.navigate(['/parques'])
  }
  luxury(){
    this.router.navigate(['/luxury'])
  }
  cruceros(){
    this.router.navigate(['/cruceros'])
  }

}
