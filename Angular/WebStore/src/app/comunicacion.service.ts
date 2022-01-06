import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  permiso = true;
  constructor() { }

  get getPermiso(){
    return this.permiso;
  }
}
