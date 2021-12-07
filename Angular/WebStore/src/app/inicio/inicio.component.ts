import { TmplAstBoundAttribute } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ApiMercadoService } from '../api-mercado.service';
import { Inicio } from '../inicio';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  producto: Inicio[] = [];
  email: string | null;

  constructor(private api_service: ApiMercadoService) {
    this.email = sessionStorage.getItem('email');
    if(this.email == null){
      location.href = "/";
    }
    console.log("Funciona el constructor");
    this.getProducto();
  }

  getProducto(){
    this.api_service.getProductos().subscribe(productos => this.producto = productos);
  }

  agregarCarrito(id: number){
    window.alert("id:"+id);
  }

  /*productos : Producto[] = [
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
  ];*/

  ngOnInit(): void {
  }

}
