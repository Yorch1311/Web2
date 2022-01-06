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
  total = 0;

  constructor(private api: ApiMercadoService) {
    this.email = sessionStorage.getItem('email');
    if(this.email == null){
      location.href = "/";
    }
    this.getItems();
  }

  getItems(){
    this.api.getItems().subscribe(data => {
      this.carrito = data
      this.calcTotal(this.carrito);
    });
  }

  borrarItem( id: number){

    var newCar: Carrito[] = [];

    for(let i = 0; i < this.carrito.length; i++){
      //alert("id a elminiar: "+id+", id en carrito: "+this.carrito[i].id);
      if(this.carrito[i].id != id.toString()){
        newCar.push(this.carrito[i]);
      }
    }
    this.carrito = newCar;
    this.calcTotal(this.carrito);
  }

  calcTotal(cart: Carrito[]){
    this.total = 0;
    this.carrito.forEach(prod => {
      this.total = this.total + prod.quantity * prod.prize;
    })
  }

  guardar(){
    console.log("Carrito al darle guardar"+this.carrito);
    this.api.saveCart(this.carrito).subscribe(data => {

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
      location.reload();
    }
  }

  ngOnInit(): void {
  }

}
