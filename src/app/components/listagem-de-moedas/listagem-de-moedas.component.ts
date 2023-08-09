import { Component } from '@angular/core';
import { APIConsumer } from '../../../assets/APIConsumer';

@Component({
  selector: 'app-listagem-de-moedas',
  templateUrl: './listagem-de-moedas.component.html',
  styleUrls: ['./listagem-de-moedas.component.css']
})
export class ListagemDeMoedasComponent {
  private ApiConsumer: APIConsumer;
  public moedas: any[];
  private moedasBCKP: any[];
  public filtro: string;
  private resultadosAnteriores: any[];
  private indiceNovoResultado: number;

  constructor() {
    this.ApiConsumer = new APIConsumer();
    this.moedas = [];
    this.moedasBCKP = [];
    this.filtro = "";
    this.resultadosAnteriores = [];
    this.indiceNovoResultado = 0;
  }

  ngOnInit() {
    setTimeout(() => {
      this.moedas = this.ApiConsumer.getMoedas();
      this.moedasBCKP = [...this.moedas];
    }, 1000);
    
  }

  public filtrar(evento: KeyboardEvent) {
    if (this.filtro.trim() === "") {
      this.moedas = [...this.moedasBCKP];
      this.resultadosAnteriores = [];
      this.indiceNovoResultado = 0;

    } else if ((evento.key == "Backspace" || evento.key == "Delete") && this.filtro.trim() != "") {
      this.indiceNovoResultado--;
      this.moedas = this.resultadosAnteriores[this.indiceNovoResultado];
      this.resultadosAnteriores.splice(this.indiceNovoResultado, 1)
    } else {
      let cache: any = [];
      this.moedas.forEach((moeda) => {
        let temp = `${moeda.description} ${moeda.code}`;
        if (temp.toUpperCase().includes(this.filtro.toUpperCase())) {
          cache.push(moeda);
        }
      });
      this.resultadosAnteriores.push(this.moedas);
      this.indiceNovoResultado++;
      this.moedas = cache;

    }

    console.log(this.resultadosAnteriores, [this.moedas]);
    console.log(this.indiceNovoResultado);
  }
}
