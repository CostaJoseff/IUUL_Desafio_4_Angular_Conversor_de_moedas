import { Component } from '@angular/core';
import { Repositorio } from '../../../assets/Repositorio';

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

  public deletar(linha: any) {
    const indice = this.consultas.indexOf(linha);
    this.deletarConsulta(indice);
    this.repositorio.removerConsulta(linha);
  }

  private deletarConsulta(indice: number) {
    let novoArray: any = [];
    this.consultas.forEach((consulta: any) => {
      if (consulta !== this.consultas[indice]) {
        novoArray.push(consulta);
      }
    });
    this.consultas = novoArray;
  }
}
