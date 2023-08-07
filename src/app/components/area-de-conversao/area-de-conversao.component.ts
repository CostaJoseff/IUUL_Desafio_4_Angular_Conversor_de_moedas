import { Component } from '@angular/core';
import { APIConsumer } from '../../../assets/APIConsumer';
import { Repositorio } from '../../../assets/Repositorio';

@Component({
  selector: 'app-area-de-conversao',
  templateUrl: './area-de-conversao.component.html',
  styleUrls: ['./area-de-conversao.component.css']
})
export class AreaDeConversaoComponent {
  private moedas: any[] = [];
  private moedasSTR: String[] = [];
  private apiConsumer: APIConsumer;

  private repositorio: Repositorio;

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
    this.apiConsumer = new APIConsumer();
    this.repositorio = new Repositorio();
  }

  ngOnInit() {
    setTimeout(() => {
      this.moedas = this.apiConsumer.getMoedas();
      this.moedasSTR = this.apiConsumer.getMoedasSTR();
    }, 1000);
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
    this.apiConsumer.solicitarConversao(this.moedaSelecionada1, this.moedaSelecionada2, this.inputNumero)
      .then((resposta: any) => {
        const date = new Date();
        this.resultado = resposta.result.toFixed(2);
        this.repositorio.setConsulta(date, resposta);
      });
  }
}
