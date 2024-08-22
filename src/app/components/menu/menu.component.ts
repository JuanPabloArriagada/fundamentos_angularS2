import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  rutas=[
    {
      nombre:'home',
      destino:'/home'
    },
    {
      nombre:'contacto',
      destino:'/contacto'
    },
    {
      nombre:'ayuda',
      destino:'/ayuda'
    },
    {
      nombre:'quienes',
      destino:'/quienes'
    },
  ]
}
