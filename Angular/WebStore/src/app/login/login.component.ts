import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Iniciar Sesion'},
      { label: 'Registrarse' }
    ];
  }

}
