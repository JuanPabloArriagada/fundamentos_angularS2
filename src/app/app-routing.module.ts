import { NgModule, Component } from '@angular/core';
import { RouterModule/* raiz del sitio */, Routes/* rutas */ } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
