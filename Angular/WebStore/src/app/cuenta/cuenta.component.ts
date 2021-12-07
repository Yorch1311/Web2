import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.scss']
})
export class CuentaComponent implements OnInit {

  email: string | null;
  constructor() {
    this.email = sessionStorage.getItem('email');
    if(this.email == null){
      location.href = "/";
    }
  }

  ngOnInit(): void {
  }

}
