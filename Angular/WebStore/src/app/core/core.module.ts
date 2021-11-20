import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLoginComponent } from './header-login/header-login.component';

@NgModule({
  declarations: [
    HeaderLoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderLoginComponent
  ]
})
export class CoreModule { }
