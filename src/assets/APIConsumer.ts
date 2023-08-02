export class APIConsumer {
    private moedas: any[];
    private moedasSTR: String[];

    constructor() {

        this.moedas = [];
        this.solicitarMoedas()
            .then((resposta: any) => {
                this.moedas = Object.values(resposta);
            });

        this.moedasSTR = [];
        setTimeout(() => {
            for (let elemento of this.moedas) {
              this.moedasSTR.push(`${elemento.code} - ${elemento.description}`);
            }
          }, 500);
    }

    public getMoedas() {
        return this.moedas;
    }

    public getMoedasSTR() {
        return this.moedasSTR;
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

    public solicitarConversao(moedaSelecionada1: any, moedaSelecionada2: any, inputNumero: any) {
        return new Promise((resolve) => {
            var requestURL = `https://api.exchangerate.host/convert?from=${moedaSelecionada1.split(" ")[0]}&to=${moedaSelecionada2.split(" ")[0]}&amount=${inputNumero}`; 
            var request = new XMLHttpRequest(); 
            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();

            request.onload = function() {
            var response = request.response;
            
            resolve(response);
            }
        });
    }
}