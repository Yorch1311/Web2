import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { AbcProductosComponent } from './abc-productos/abc-productos.component';
import { VentaPendienteComponent } from './venta-pendiente/venta-pendiente.component';
import { ProductosComponent } from './productos/productos.component';
import { GananciasComponent } from './ganancias/ganancias.component';

const routes: Routes = [
  { path: 'login', component : LoginComponent},
  { path: 'registro', component : RegistroComponent},
  { path: 'inicio', component : InicioComponent},
  { path: 'carrito', component : CarritoComponent},
  { path: 'cuenta', component : CuentaComponent},
  { path: 'abc-productos', component : AbcProductosComponent},
  { path: 'ganancia', component : GananciasComponent},
  { path: 'producto', component : ProductosComponent},
  { path: 'venta', component : VentaPendienteComponent},
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
