import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { AdministradorComponent } from './administrador/administrador.component';

const routes: Routes = [
  { path: '', component : LoginComponent},
  { path: 'login', component : LoginComponent},
  { path: 'registro', component : RegistroComponent},
  { path: 'inicio', component : InicioComponent},
  { path: 'carrito', component : CarritoComponent},
  { path: 'cuenta', component : CuentaComponent},
  { path: 'administrar', component : AdministradorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
