import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ApiMercadoService } from '../api-mercado.service';
import { Inicio } from '../inicio';

@Component({
  selector: 'app-abc-productos',
  templateUrl: './abc-productos.component.html',
  styleUrls: ['./abc-productos.component.scss']
})
export class AbcProductosComponent implements OnInit {

  email: string | null;
  productos: Inicio[] = [];
  detalles!: Inicio;

  constructor(private api: ApiMercadoService) {
    this.email = sessionStorage.getItem('email');
    if(this.email == null){
      location.href = "/";
    }
    this.getProducto();
   }

  getProducto(){
    this.api.getProductos().subscribe(productos => this.productos = productos);
  }

  info(id: number){
    for(let i = 0; i < this.productos.length; i++){

      if(this.productos[i].id == id){
        this.detalles = this.productos[i];
      }
    }

  }

  update(id: string, name: string, desc: string, img: string, cant:string, medida: string, prize: string, estado: string){

    var body = {
      "id":id,
      "name":name,
      "description":desc,
      "img":img,
      "quantity":cant,
      "medida":medida,
      "prize":prize,
      "estado":estado
    };

    this.api.updateProduct(body).subscribe(data => {
      console.log(data);
    });
    alert(body.name+" actualizado correctamente.");
    location.reload();
  }

  add( name: string, desc: string, img: string, cant:string, medida: string, prize: string){

    var body = {
      "name":name,
      "description":desc,
      "img":img,
      "quantity":cant,
      "medida":medida,
      "prize":prize
    };

    this.api.addProduct(body).subscribe(data => {
      console.log(data);
    });
    alert(body.name+" agregado correctamente.");
    location.reload();
  }

  limpiar(){
    location.reload();
  }

/*
  borrar(id:string){
    this.api.deleteProduct(id).subscribe(data => {
      console.log(data.message);
    });
  }
*/
  ngOnInit(): void {
  }

}
