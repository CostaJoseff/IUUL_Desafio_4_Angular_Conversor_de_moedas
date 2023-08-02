import { Component } from '@angular/core';
import { Repositorio } from 'src/assets/Repositorio';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent {
  private repositorio: Repositorio;
  public consultas: any;

  constructor() {
    this.repositorio = new Repositorio();
    this.consultas = this.repositorio.getConsultas();
  }
}
