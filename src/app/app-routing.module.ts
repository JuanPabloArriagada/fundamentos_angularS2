import { NgModule, Component } from '@angular/core';
import { RouterModule/* raiz del sitio */, Routes/* rutas */ } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { QuienesComponent } from './pages/quienes/quienes.component';

const routes: Routes = [
  {
    path:'', /* Si no pone nada por defecto llega al home */
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'contacto',
    component:ContactoComponent
  },
  {
    path:'ayuda',
    component:AyudaComponent
  },
  {
    path:'quienes',
    component:QuienesComponent
  },
  {
    path:'**',/* sirve para cualquier cosa, por ejemplo cuando no encutrar la pagina o SI la encuentra, debe ir abajo */ /* la app va de 1 en 1 buscando hacia abajo */
    component:NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
