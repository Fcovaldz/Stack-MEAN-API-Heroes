import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: [
  ]
})
export class PipesComponent implements OnInit {
  bandera = true;
  Nombre: string = 'Francisco Bañuelos Valadez';
  NombreA: string= 'FrAnCiScO BaÑuElOs VaLaDeZ';
  videoURL = 'https://www.youtube-nocookie.com/embed/pQf_yumdCqg';
  ArrayPrueba = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
  PI = Math.PI;
  Fecha = new Date();
  Precio = 199.99;

  constructor() { }

  ngOnInit(): void {
  }

 

}