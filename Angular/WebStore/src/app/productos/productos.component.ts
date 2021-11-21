import { Component, OnInit } from '@angular/core';
import { ProdCarrito } from '../prod-carrito';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  constructor() { }

  currentDate = new Date();
  opcion = "";
  valor = "";
  mostrar = false;

  tipoGrafica( tipo: string){
    this.opcion = tipo;
    this.mostrar = false;
    this.valor = "";
  }

  mes( mes: string){
    this.valor = mes;
    this.mostrar = false;
  }

  anio( anio: string){
    this.valor = anio;
    this.mostrar = false;
  }

  productos : ProdCarrito[] = [
    {
      nombre: "Tomate",
      precio: 500.20,
      cantidad: 2,
      unidad: "kilo",
      img: "https://placekitten.com/100/100"
    },
    {
      nombre: "Escoba",
      precio: 100.00,
      cantidad: 5,
      unidad: "pz",
      img: "https://placekitten.com/100/100"
    },
    {
      nombre: "Aguacate",
      precio: 240.20,
      cantidad: 0.800,
      unidad: "kilo",
      img: "https://placekitten.com/100/100"
    },
    {
      nombre: "Calcetas",
      precio: 20.00,
      cantidad: 6,
      unidad: "pz",
      img: "https://placekitten.com/100/100"
    },

  ];

  generar(){
    this.mostrar = true;
  }

  ngOnInit(): void {
  }

}
