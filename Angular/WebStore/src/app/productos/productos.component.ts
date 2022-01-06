import { Component, OnInit } from '@angular/core';
import { ProdCarrito } from '../prod-carrito';
import { ApiMercadoService } from '../api-mercado.service';
import { Inicio } from '../inicio';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  email : string | null;
  ventas: Inicio[] = [];

  constructor(private api: ApiMercadoService) {
    this.email = sessionStorage.getItem('email');
    if(this.email == null){
      location.href = "/";
    }
  }

  currentDate = new Date();
  tipo = "";
  valor = "";
  opcion = "";
  x = "";

  mostrar = false;

  tipoGrafica( tipo: string){
    this.tipo = tipo;
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

  venta(){

    this.titulo(this.tipo, this.valor);

    var body = { "tipo": this.tipo, "valor": this.valor};
    this.api.getVentaP(body).subscribe(datos => {
      this.ventas = datos;
    });
    this.mostrar = true;
  }

  titulo( tipo: string, valor: string){
    if(tipo == "month"){
      var mes = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
      this.x = mes[parseInt(valor)-1];
      this.opcion = "mes";
    }else if(tipo == "year"){
      this.opcion = "año";
      this.x = valor;
    }
  }

  ngOnInit(): void {
  }

}
