import { TmplAstBoundAttribute } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor() { }

  productos : Producto[] = [
    {
      nombre: "Tomate",
      precio: 500.20,
      unidad: "kilo",
      img: "https://placekitten.com/100/100"
    },
    {
      nombre: "Escoba",
      precio: 100.00,
      unidad: "pz",
      img: "https://placekitten.com/100/100"
    },
    {
      nombre: "Tomate",
      precio: 500.20,
      unidad: "kilo",
      img: "https://placekitten.com/100/100"
    },
    {
      nombre: "Escoba",
      precio: 100.00,
      unidad: "pz",
      img: "https://placekitten.com/100/100"
    },
    {
      nombre: "Tomate",
      precio: 500.20,
      unidad: "kilo",
      img: "https://placekitten.com/100/100"
    },
    {
      nombre: "Escoba",
      precio: 100.00,
      unidad: "pz",
      img: "https://placekitten.com/100/100"
    }
  ];

  ngOnInit(): void {
  }

}
