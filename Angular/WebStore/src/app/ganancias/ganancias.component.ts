import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ApiMercadoService } from '../api-mercado.service';
import { Grafica } from '../grafica';
import { Inicio } from '../inicio';

@Component({
  selector: 'app-ganancias',
  templateUrl: './ganancias.component.html',
  styleUrls: ['./ganancias.component.scss'],
})
export class GananciasComponent implements OnInit {
  email: string | null;
  ventas: Grafica[] = [];

  data: number[] = [];

  constructor(private api: ApiMercadoService) {
    this.email = sessionStorage.getItem('email');
    if (this.email == null) {
      location.href = '/';
    }
  }
  tipo = '';
  valor = '';

  //Datos de prueba para la grafica
  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];

  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  /*
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };*/
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(0,255,125,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  currentDate = new Date();
  mostrar = false;

  tipoGrafica(tipo: string) {
    this.tipo = tipo;
    this.mostrar = false;
    this.valor = '';
  }

  mes(mes: string) {
    this.valor = mes;
    this.mostrar = false;
  }

  anio(anio: string) {
    this.valor = anio;
    this.mostrar = false;
  }

  generar() {
    this.mostrar = true;
  }

  venta() {
    //this.titulo(this.tipo, this.valor);

    var body = { tipo: this.tipo, valor: this.valor };
    this.api.getVentaC(body).subscribe((datos) => {
      this.ventas = datos;
      console.log(this.ventas);
      var datosA = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var datosM = [0, 0, 0, 0];

      if (this.tipo == 'year') {
        this.ventas.forEach((data) => {
          var i = data.month;
          datosA[i - 1] = datosA[i - 1] + data.total;
          //console.log(datosA[i - 1]);
        });
        console.log(datosA);
        this.data = datosA;
        console.log(this.data);
        this.lineChartLabels = [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Octubre',
          'Noviembre',
          'Diciembre',
        ];
      } else if (this.tipo == 'month') {
        this.ventas.forEach((data) => {
          var i = data.day;
          if (i < 31) {
            datosM[3] = datosM[3] + data.total;
          } else if (i < 22) {
            datosM[2] = datosM[2] + data.total;
          } else if (i < 15) {
            datosM[1] = datosM[1] + data.total;
          } else if (i < 8) {
            datosM[0] = datosM[0] + data.total;
          }
        });
        console.log(datosM);
        this.data = datosM;
        this.lineChartLabels = ['Semana 1', 'Semana ', 'Semana 3', 'Semana 4'];
      }

      this.lineChartData = [{ data: this.data, label: 'VENTAS' }]

      this.mostrar = true;
    });
  }

  ngOnInit(): void {}
}
