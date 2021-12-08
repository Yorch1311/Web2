import { Component, OnInit } from '@angular/core';
import { ProdCarrito } from '../prod-carrito';
import { ApiMercadoService } from '../api-mercado.service';
import { Carrito } from '../carrito';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  email: string | null;
  carrito: Carrito[] = [];

  constructor(private api: ApiMercadoService) {
    this.email = sessionStorage.getItem('email');
    if(this.email == null){
      location.href = "/";
    }
    this.getItems();
  }

  getItems(){
    this.api.getItems().subscribe(data => this.carrito = data);
  }

  borrarItem( id: number){
    //alert("id"+id)
    var newCar: Carrito[] = [];
    this.carrito.forEach((datos) => {
      if(datos.id != id.toString()){
        newCar.push(datos);
      }
    });
    this.carrito = newCar;
  }

  guardar(){
    console.log(this.carrito);
    this.api.saveCart(this.carrito).subscribe(data => {
      console.log(data);
    });
    alert("Se guardaron los cambios");
  }

  comprar(){

    if(this.carrito.length == 0){
      alert("No esta comprando nada.");
    }else{
      this.api.buy().subscribe(data => {
        console.log(data);
      });
      this.getItems();
      alert("Compra realizada");
    }
  }

  ngOnInit(): void {
  }

}
