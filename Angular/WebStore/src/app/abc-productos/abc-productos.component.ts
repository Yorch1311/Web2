import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-abc-productos',
  templateUrl: './abc-productos.component.html',
  styleUrls: ['./abc-productos.component.scss']
})
export class AbcProductosComponent implements OnInit {

  constructor() { }

  productos: Producto[] = [
    {
      id: 1,
      nombre: "Carrito de juguete",
      descripcion: "Color rojo",
      cantidad: 10,
      unidad: "pz",
      precio: 55.00,
      img: "https://placekitten.com/100/100"
    }
  ];

  ngOnInit(): void {
  }

}
