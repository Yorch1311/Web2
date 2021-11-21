import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../comunicacion.service';

@Component({
  selector: 'app-store-menubar',
  templateUrl: './store-menubar.component.html',
  styleUrls: ['./store-menubar.component.scss']
})
export class StoreMenubarComponent implements OnInit {

  constructor(private comunicacion: ComunicacionService) { }

  permiso = this.comunicacion.getPermiso;
  ngOnInit(): void {
  }

}
