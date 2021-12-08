import { Component, OnInit } from '@angular/core';
import { ApiMercadoService } from '../api-mercado.service';
import { Inicio } from '../inicio';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  producto: Inicio[] = [];
  found: Inicio[] = [];
  email: string | null;
  item: string = '';
  valor = 0;

  constructor(private api: ApiMercadoService) {
    this.email = sessionStorage.getItem('email');
    if (this.email == null) {
      location.href = '/';
    }
    console.log('Funciona el constructor');
    this.getProducto();
  }

  getProducto() {
    this.api.getProductos().subscribe((productos) => {
      this.producto = productos;
      console.log(this.producto);
      this.producto = this.producto.filter((prod) => prod.estado == 'S');
      console.log(this.producto);

      var busca = sessionStorage.getItem('buscar');
      //alert(busca);
      if (busca != null) {
        //si no existe
        var f = busca;

        if (f.length > 2) {
          //si es menor a 3
          this.found = this.producto.filter(
            (dato) => dato.name.toLowerCase().indexOf(f.toLowerCase()) != -1
          );

          console.log(this.found);
          if (this.found.length == 0) {
            //si no encuentra productos
            alert('No se encontraron productos.');
          }
        } else {
          this.found = this.producto;
        }
      } else {
        this.found = this.producto;
      }
      sessionStorage.setItem('buscar', '');
    });
  }

  agregarCarrito(
    nombre: string,
    img: string,
    id: number,
    cantidad: string,
    precio: number,
    medida: string
  ) {
    this.api
      .addItem(nombre, img, id.toString(), parseFloat(cantidad), precio, medida)
      .subscribe((data) => {
        //alert(data.message);// solo ver si funciona
        //alert(nombre+" agregado exitosamente.");
        //location.reload();
      });
  }

  ngOnInit(): void {}
}
