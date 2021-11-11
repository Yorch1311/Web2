import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { AbcProductosComponent } from './abc-productos/abc-productos.component';
import { GananciasComponent } from './ganancias/ganancias.component';
import { ProductosComponent } from './productos/productos.component';
import { VentaPendienteComponent } from './venta-pendiente/venta-pendiente.component';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';

import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    CarritoComponent,
    CuentaComponent,
    AdministradorComponent,
    AbcProductosComponent,
    GananciasComponent,
    ProductosComponent,
    VentaPendienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
