import { Component, OnInit } from '@angular/core';
import { Venta } from '../venta';
import { ProdCarrito } from '../prod-carrito';

@Component({
  selector: 'app-venta-pendiente',
  templateUrl: './venta-pendiente.component.html',
  styleUrls: ['./venta-pendiente.component.scss']
})
export class VentaPendienteComponent implements OnInit {

  email: string | null;
  constructor() {
    this.email = sessionStorage.getItem('email');
    if(this.email == null){
      location.href = "/";
    }
  }

  ventas: Venta[] = [
    {
    nombre: "Claudia",
    pedido: 1,
    total: 10000,
    fecha: "17/10/2021",
    domicilio: "Su casita verde"
    },
    {
      nombre: "Paco Parra",
      pedido: 2,
      total: 522.50,
      fecha: "22/10/2021",
      domicilio: "Su casita roja"
      },
      {
        nombre: "Chisma Nelo",
        pedido: 3,
        total: 152.20,
        fecha: "23/10/2021",
        domicilio: "Su casita amarilla"
        }
  ];

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

  ngOnInit(): void {
  }

}
