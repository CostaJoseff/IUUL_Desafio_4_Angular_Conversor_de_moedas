import { Component } from '@angular/core';

@Component({
  selector: 'app-area-de-conversao',
  templateUrl: './area-de-conversao.component.html',
  styleUrls: ['./area-de-conversao.component.css']
})
export class AreaDeConversaoComponent {
  private moedas: any[] = [];

  ngOnInit() {
    this.solicitarMoedas()
      .then((resposta: any) => {
        this.moedas = Object.values(resposta);
      })
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

  public getMoedas() {
    return this.moedas;
  }
}
