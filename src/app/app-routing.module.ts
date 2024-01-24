import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./feature/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'alojamientos',
    loadChildren: () => import('./feature/alojamientos/alojamientos.module').then((m) => m.AlojamientosModule),
  },
  {
    path: 'cruceros',
    loadChildren: () => import('./feature/cruceros/cruceros.module').then((m) => m.CrucerosModule),
  },
  {
    path: 'luxury',
    loadChildren: () => import('./feature/luxury/luxury.module').then((m) => m.LuxuryModule),
  },
  {
    path: 'parques',
    loadChildren: () => import('./feature/parques/parques.module').then((m) => m.ParquesModule),
  },
  {
    path: 'rent-a-car',
    loadChildren: () => import('./feature/rent-a-car/rent-a-car.module').then((m) => m.RentACarModule),
  },
  {
    path: 'vuelos',
    loadChildren: () => import('./feature/vuelos/vuelos.module').then((m) => m.VuelosModule),
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./feature/nosotros/nosotros.module').then((m) => m.NosotrosModule),
  },

  {
    path: 'experience',
    loadChildren: () => import('./feature/experience/experience.module').then((m) => m.ExperienceModule),
  },
  {
    path: 'servicios',
    loadChildren: () => import('./feature/servicios/servicios.module').then((m) => m.ServiciosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
