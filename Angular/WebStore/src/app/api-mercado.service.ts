import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Inicio } from './inicio';
import { Login, LoginRes } from './login';
import { Mensaje } from './mensaje';
import { Producto } from './producto';
import { Usuario } from './usuario';
import { Carrito } from './carrito';
import { Venta } from './venta';
import { Grafica } from './grafica';

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

  getUser(){
    var email = sessionStorage.getItem('email');
    var body = { "email": email };
    return this.http.post<Usuario>(environment.apiUrl+"cuenta", body);
  }

  setUser(nombre: string,apellido: string, domicilio: string, email: string, password: string){
    var body = {
      name: nombre,
      surname: apellido,
      address: domicilio,
      email: email,
      password: password
    };
    return this.http.put<any>(environment.apiUrl+"cuenta", body);
  }

  addItem(name: string, img: string ,id: string, cantidad: number, prize: number, medida: string){
    var email = sessionStorage.getItem('email');
    var body = { "name": name, "img":img, "email": email, "id": id, "quantity": cantidad, "prize": prize, "medida": medida};

    return this.http.post<any>(environment.apiUrl+"inicio", body);
  }

  getItems(){
    var email = sessionStorage.getItem('email');
    var body = { "email": email};
    return this.http.post<Carrito[]>(environment.apiUrl+"carrito", body);
  }

  saveCart( carrito: Carrito[] ){
    var email = sessionStorage.getItem('email');
    var body = { "email": email, "productos": carrito};
    console.log(body);
    return this.http.put<any>(environment.apiUrl+"carrito", body);
  }

  buy(){
    var email = sessionStorage.getItem('email');
    var body = { "email": email };
    console.log(body);
    return this.http.post<any>(environment.apiUrl+"carrito/buy", body);
  }

  addProduct(body: {}){
    return this.http.post<any>(environment.apiUrl+'abc-productos', body);
  }

  updateProduct(body: {}){
    //console.log(body);
    return this.http.put<any>(environment.apiUrl+'abc-productos', body);
  }
/*
  deleteProduct(id: string){
    return this.http.post<any>(environment.apiUrl+'abc-productos/delete', id);
  }
*/

  ventaPendiente(){
    return this.http.get<Venta[]>(environment.apiUrl+"venta");
  }

  completarVenta(body: {}){
    return this.http.put<any>(environment.apiUrl+"venta", body);
  }

  getVentaP( body: {}){
    return this.http.post<Inicio[]>(environment.apiUrl+"producto", body);
  }

  getVentaC( body: {}){
    return this.http.post<Grafica[]>(environment.apiUrl+"ganancia", body);
  }
}
