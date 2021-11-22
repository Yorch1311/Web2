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
      id: 1,
      nombre: "Tomate",
      descripcion: "De temporada",
      cantidad: 40,
      unidad: "kg",
      precio: 500.20,
      img: "https://placekitten.com/100/100"
    },
    {
      id: 2,
      nombre: "Tomate",
      descripcion: "De temporada",
      cantidad: 40,
      unidad: "kg",
      precio: 500.20,
      img: "https://placekitten.com/100/100"
    },
    {
      id: 3,
      nombre: "Tomate",
      descripcion: "De temporada",
      cantidad: 40,
      unidad: "kg",
      precio: 500.20,
      img: "https://placekitten.com/100/100"
    },
    {
      id: 4,
      nombre: "Tomate",
      descripcion: "De temporada",
      cantidad: 40,
      unidad: "kg",
      precio: 500.20,
      img: "https://placekitten.com/100/100"
    },
    {
      id: 5,
      nombre: "Tomate",
      descripcion: "De temporada",
      cantidad: 40,
      unidad: "kg",
      precio: 500.20,
      img: "https://placekitten.com/100/100"
    },
    {
      id: 6,
      nombre: "Tomate",
      descripcion: "De temporada",
      cantidad: 40,
      unidad: "kg",
      precio: 500.20,
      img: "https://placekitten.com/100/100"
    }
  ];

  ngOnInit(): void {
  }

}
