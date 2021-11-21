import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-ganancias',
  templateUrl: './ganancias.component.html',
  styleUrls: ['./ganancias.component.scss'],
})
export class GananciasComponent implements OnInit {

  constructor() {}
//Datos de prueba para la grafica
  public lineChartData: ChartDataSets[] = [
    { data: [1065, 590, 800, 810, 560, 550, 400], label: 'VENTAS' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
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
  opcion = "";
  valor = "";
  mostrar = false;

  tipoGrafica( tipo: string){
    this.opcion = tipo;
    this.mostrar = false;
    this.valor = "";
  }

  mes( mes: string){
    this.valor = mes;
    this.mostrar = false;
  }

  anio( anio: string){
    this.valor = anio;
    this.mostrar = false;
  }

  generar(){
    this.mostrar = true;
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  ngOnInit(): void {}
}
