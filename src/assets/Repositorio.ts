export class Repositorio {
    private idConsultas: number;

    constructor() {
        this.idConsultas = Number(localStorage.getItem("idConsultas"));
        if (this.idConsultas == 0) {
            localStorage.setItem("idConsultas", "0");
        }
    }

    public getConsultas() {
        let consultas = [];
        for (let i = 1; i < this.idConsultas; i++) {
            let consultaSTR = localStorage.getItem(""+i);
            
            if (consultaSTR === null) {
                consultaSTR = "{}";
            }
            consultas.push(JSON.parse(consultaSTR));
        }
        return consultas;
    }

    public setConsulta(data: Date, respostaAPI: any) {
        localStorage.setItem(`${++this.idConsultas}`, JSON.stringify({
            ID: this.idConsultas,
            data: respostaAPI.date,
            hora: this.formatarHora(data),
            valor: respostaAPI.query.amount,
            moedaSelecionada: respostaAPI.query.from,
            moedaConvertida: respostaAPI.query.to,
            resultado: respostaAPI.result.toFixed(2),
            taxa: respostaAPI.info.rate
        }));
        localStorage.setItem("idConsultas", `${this.idConsultas}`);
    }

    private formatarHora(data: Date) {
        return `${data.getHours().toString().padStart(2, '0')}:${data.getHours().toString().padStart(2, '0')}`
    }
}