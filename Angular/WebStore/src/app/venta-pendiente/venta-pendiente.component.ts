import { Component, OnInit } from '@angular/core';
import { Venta } from '../venta';
import { ProdCarrito } from '../prod-carrito';
import { ApiMercadoService } from '../api-mercado.service';

@Component({
  selector: 'app-venta-pendiente',
  templateUrl: './venta-pendiente.component.html',
  styleUrls: ['./venta-pendiente.component.scss']
})
export class VentaPendienteComponent implements OnInit {

  email: string | null;
  ventas: Venta[] = [];
  detalles: Venta | undefined;
  productos: [] = [];
  tabla: string = "";

  constructor(private api: ApiMercadoService) {

    this.email = sessionStorage.getItem('email');
    if(this.email == null){
      location.href = "/";
    }
    this.getVenta();
  }

  getVenta(){
    this.api.ventaPendiente().subscribe(venta => this.ventas = venta);
  }

  completar(id: string){
    var body = { "id_venta": id };
    this.api.completarVenta( body ).subscribe();
    //alert("Venta #"+id+" completada");
    location.reload();
  }

  info(id: string){
    this.ventas.forEach(venta => {
      if(venta.id_venta == id){
        this.detalles = venta;
        this.productos = this.detalles.productos;
        this.tabla = "show";
      }
    });
  }
/*
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
*/
  ngOnInit(): void {
  }

}
