import { Component, OnInit } from '@angular/core';
import { ProdCarrito } from '../prod-carrito';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  constructor() { }

  carrito : ProdCarrito[] = [
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

  ngOnInit(): void {
  }

}
