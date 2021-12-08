import { Component, OnInit } from '@angular/core';
import { ApiMercadoService } from '../api-mercado.service';
import { Inicio } from '../inicio';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  producto: Inicio[] = [];
  email: string | null;

  constructor(private api: ApiMercadoService) {
    this.email = sessionStorage.getItem('email');
    if(this.email == null){
      location.href = "/";
    }
    console.log("Funciona el constructor");
    this.getProducto();
  }

  getProducto(){
    this.api.getProductos().subscribe(productos => {
      this.producto = productos;
      console.log(this.producto);
      this.producto = this.producto.filter((prod) => prod.estado == "S");
      console.log(this.producto);
    });
  }

  agregarCarrito(nombre: string, img: string ,id: number, cantidad: string, precio: number, medida: string){

    window.alert("id:"+id);

    this.api.addItem(nombre, img , id.toString(), parseFloat(cantidad), precio, medida).subscribe(data => {
      //alert(data.message);// solo ver si funciona
    });

  }

  ngOnInit(): void {
  }

}
