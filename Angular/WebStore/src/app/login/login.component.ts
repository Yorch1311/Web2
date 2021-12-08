import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiMercadoService } from '../api-mercado.service';
import { LoginRes } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private api_mercado: ApiMercadoService) { }

  datos: LoginRes | undefined;
  email : string = "";//es el email del usuario
  rol : string = "";

  ngOnInit(): void {
  }

  ingresar(email: string, password: string) {
    //
    if(this.validacion(email, password)){
      this.api_mercado.checkUser(email,password).subscribe( (data) => {
        this.datos = data;

        if(this.datos.status != 200){
          alert(this.datos.message);
        }else{
          window.sessionStorage;
          sessionStorage.setItem('email',this.datos.email);
          sessionStorage.setItem('rol',this.datos.rol);
          sessionStorage.setItem('address',this.datos.address);
          //this.api_mercado.setUser(this.datos.email, this.datos.rol);
          location.href = "/inicio";
        }
      });
    }
  }

  validacion(email:string, password:string): boolean{
    if(email == "" || password == ""){
      alert("No deje valores en blanco.");
      return false;
    }else if(email.includes("@") == false || email.includes('.') == false){
      alert("Ingrese un email valido.");
      return false;
    }else{
      return true;
    }
  }
}
