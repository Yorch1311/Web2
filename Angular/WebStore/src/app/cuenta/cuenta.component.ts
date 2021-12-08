import { isEmptyExpression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiMercadoService } from '../api-mercado.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.scss']
})
export class CuentaComponent implements OnInit {

  usuario: Usuario | undefined;
  email: string | null;
  constructor(private api: ApiMercadoService) {

    this.email = sessionStorage.getItem('email');
    if(this.email == null){
      location.href = "/";
    }
    this.user();
  }

  user(){
    this.api.getUser().subscribe(data => this.usuario = data);
  }

  saveUser(name: string, surname: string, address: string, email: string, pass1: string, pass2: string){
    var datos = [name, surname, address, pass1, pass2];

    if(this.isEmpy(datos)){
      alert("No deje campos en blanco");
    }else if(pass1 == pass2){
      var body = {
        "name":name,
        "surname": surname,
        "address": address,
        "email": email,
        "password": pass1
      };
      this.api.setUser(name, surname, address, email, pass1).subscribe((data) => {
        alert(data.message);
      });
    }else{
      alert("Las contraseñas no coinciden");
    }
  }

  isEmpy(datos: string[]){
    var i = 0;
    datos.forEach(dato => {
      if(dato == ""){
        i++;
      }
    });

    if(i > 0){
      return true;
    }else{
      return false;
    }
  }

  back(){
    location.href = "/inicio";
  }

  ngOnInit(): void {
  }
}
