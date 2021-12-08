import { Component, OnInit } from '@angular/core';
import { ApiMercadoService } from '../api-mercado.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(private api: ApiMercadoService) { }

  ngOnInit(): void {

  }

  registro(nombre: string,apellido: string, domicilio: string, email: string, password1: string, password2: string){
    var resp = this.validar(nombre, apellido, domicilio, email, password1, password2);

    if(resp == true){
      this.api.createUser(nombre,apellido,domicilio,email,password1).subscribe((data) =>{

        alert(data.message);
        location.href = "/login";
      });
    }

  }

  validar(nombre: string,apellido: string, domicilio: string, email: string, password1: string, password2: string): boolean{
    var datos = [ nombre, apellido, domicilio, email, password1, password2];
    for(let i = 0; i < datos.length; i++){
      if(datos[i] == ""){
        alert("No deje campos vacios");
        return false;
      }
    }
    if(email.includes("@") == false || email.includes('.') == false){
      alert('El email no cumple con los requisitos.');
      return false;
    }else if(password2 != password1){
      alert('Las contraseñas no son iguales.');
      return false;
    }else{
      return true;
    }
  }

}
