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

  constructor(private comunicacion: ComunicacionService, private api: ApiMercadoService) {
    this.rol = sessionStorage.getItem('rol');
  }

  permiso = this.comunicacion.getPermiso;
  ngOnInit(): void {

  }

  salir(){
    sessionStorage.clear();
    location.href ="/login";
  }

}
