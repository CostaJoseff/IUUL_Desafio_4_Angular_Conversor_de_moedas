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

  constructor() {
    this.ApiConsumer = new APIConsumer();
    this.moedas = [];
  }

  ngOnInit() {
    setTimeout(() => {
      this.moedas = this.ApiConsumer.getMoedas();
    }, 1000);
  }
}
