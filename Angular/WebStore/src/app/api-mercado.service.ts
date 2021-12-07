import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Inicio } from './inicio';
import { Login, LoginRes } from './login';
import { Mensaje } from './mensaje';

@Injectable({
  providedIn: 'root'
})
export class ApiMercadoService {

  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get<Inicio[]>(environment.apiUrl+"inicio");
  }

  checkUser(email: string, password: string){
    var body = { "email": email, "password": password};
    return this.http.post<LoginRes>(environment.apiUrl+"login", body);
  }

  createUser(nombre: string,apellido: string, domicilio: string, email: string, password: string){
    var body = {
      name: nombre,
      surname: apellido,
      address: domicilio,
      email: email,
      password: password
    };
    return this.http.post<Mensaje>(environment.apiUrl+"registro", body);
  }

}
