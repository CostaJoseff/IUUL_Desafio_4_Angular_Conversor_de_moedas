import { Component } from '@angular/core';

@Component({
  selector: 'app-area-de-conversao',
  templateUrl: './area-de-conversao.component.html',
  styleUrls: ['./area-de-conversao.component.css']
})
export class AreaDeConversaoComponent {
  private moedas: any[] = [];
  private moedasSTR: String[] = [];
  public moedaSelecionada1: any;
  public moedaSelecionada2: any;
  private moeda1FoiEscolhida: boolean;
  private moeda2FoiEscolhida: boolean;
  private valorFoiEscolhido: boolean;
  public inputNumero: number;
  public resultado: number;

  constructor() {
    this.moeda1FoiEscolhida = false;
    this.moeda2FoiEscolhida = false;
    this.valorFoiEscolhido = false;
    this.inputNumero = 0;
    this.resultado = 0;
  }

  ngOnInit() {
    this.solicitarMoedas()
      .then((resposta: any) => {
        this.moedas = Object.values(resposta);
      });

      setTimeout(() => {
        for (let elemento of this.moedas) {
          this.moedasSTR.push(`${elemento.code} - ${elemento.description}`);
        }
      }, 500);
  }

  private solicitarMoedas() {
    const url = 'https://api.exchangerate.host/symbols';
    const solicitador = new XMLHttpRequest();
    solicitador.open('GET', url);
    solicitador.responseType = 'json';
    solicitador.send();

    return new Promise((resolve) => {
      solicitador.onload = function() {
        var response = solicitador.response; 
        resolve(response.symbols);
      }
    });
  }

  public inputCheck() {
    this.valorFoiEscolhido = this.inputNumero !== null && this.inputNumero != 0;
  }

  public botaoDisponivel() {
    setTimeout(() => {}, 500)
    return this.valorFoiEscolhido && this.moeda1FoiEscolhida && this.moeda2FoiEscolhida;
  }

  public codigoMoedaSelecionada1() {
    if (this.moedaSelecionada1 === undefined) {
      return "-";
    }

    this.moeda1FoiEscolhida = true;
    return this.moedaSelecionada1.split(" ")[0];
  }

  public codigoMoedaSelecionada2() {
    if (this.moedaSelecionada2 === undefined) {
      return "-";
    }

    this.moeda2FoiEscolhida = true;
    return this.moedaSelecionada2.split(" ")[0];
  }

  public debug() {
    //console.log(this.moedaSelecionada.split());
  }

  public getMoedas() {
    return this.moedasSTR;
  }

  public converter() {
    this.solicitarConversao()
      .then((resposta: any) => {
        this.resultado = resposta.toFixed(2);
      });
  }

  private solicitarConversao() {
    return new Promise((resolve) => {
      var requestURL = `https://api.exchangerate.host/convert?from=${this.moedaSelecionada1.split(" ")[0]}&to=${this.moedaSelecionada2.split(" ")[0]}&amount=${this.inputNumero}`; 
      var request = new XMLHttpRequest(); 
      request.open('GET', requestURL);
      request.responseType = 'json';
      request.send();

      request.onload = function() {
        var response = request.response;
        resolve(response.result);
      }
    });
  }
}
