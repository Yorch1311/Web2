import { Component, OnInit } from '@angular/core';
import { Venta } from '../venta';
import { ProdCarrito } from '../prod-carrito';
import { ApiMercadoService } from '../api-mercado.service';
import { id, sleep } from '@cds/core/internal';
import { Inicio } from '../inicio';

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
  total = [];

  constructor(private api: ApiMercadoService) {

    this.email = sessionStorage.getItem('email');
    if(this.email == null){
      location.href = "/";
    }
    this.getVenta();
  }

  getVenta(){
    this.api.ventaPendiente().subscribe(venta => this.ventas = venta );
  }

  completar(id: string){
    var body = { "id_venta": id };
    this.api.completarVenta( body ).subscribe();

    alert("Venta #"+id+" completada");
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

  ngOnInit(): void {
  }

}
