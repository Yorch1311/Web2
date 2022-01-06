import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../comunicacion.service';
import { ApiMercadoService } from '../api-mercado.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-store-menubar',
  templateUrl: './store-menubar.component.html',
  styleUrls: ['./store-menubar.component.scss']
})
export class StoreMenubarComponent implements OnInit {

  rol : string | null;
  lugar: string = "";

  constructor(private comunicacion: ComunicacionService, private api: ApiMercadoService) {
    this.rol = sessionStorage.getItem('rol');
    this.lugar = <string>sessionStorage.getItem('lugar');

    //alert(this.lugar);
  }

  permiso = this.comunicacion.getPermiso;
  ngOnInit(): void {
    //sessionStorage.setItem('lugar', 'inicio');
  }

  salir(){
    sessionStorage.clear();
    location.href ="/login";
  }

  serch(buscar: string){
    //var b = sessionStorage.getItem('buscar');
    if(buscar.length >= 3){
      sessionStorage.setItem('buscar', buscar);
      //alert(buscar);
      location.reload();
    }
  }

  posicion(lugar: string){
    sessionStorage.setItem('lugar', lugar);

  }
}
