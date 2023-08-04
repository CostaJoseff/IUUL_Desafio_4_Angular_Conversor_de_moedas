export class Repositorio {
    private consultas: any;

    constructor() {
        this.consultas = [];
        this.getConsultas();
    }

    public getConsultas() {
        let len = localStorage.length;
        if (len == 0) {
            return [];
        }
        this.consultas = [];
        for (let i = 1; i <= len; i++) {
            let consulta = localStorage.getItem(""+i);
            if (consulta == null) {
                consulta = "{}";
            }
            this.consultas.push(JSON.parse(consulta));
        }
        
        return this.consultas;
    }

    public setConsulta(data: Date, respostaAPI: any) {
        const novaConsulta = {
            data: respostaAPI.date,
            hora: this.formatarHora(data),
            valor: respostaAPI.query.amount,
            moedaSelecionada: respostaAPI.query.from,
            moedaConvertida: respostaAPI.query.to,
            resultado: respostaAPI.result.toFixed(2),
            taxa: respostaAPI.info.rate
        };

        this.consultas.push(novaConsulta);
        
        localStorage.setItem(`${this.consultas.length}`, JSON.stringify(novaConsulta));
    }

    public removerConsulta(consultaAlvo: any){
        let novoArray: any = [];
        localStorage.clear();
        this.consultas.forEach((consulta: any) => {
            if (consulta !== consultaAlvo) {
                novoArray.push(consulta);
                localStorage.setItem(`${novoArray.length}`, JSON.stringify(consulta));
            }
        });
        this.consultas = novoArray;
    }

    private formatarHora(data: Date) {
        return `${data.getHours().toString().padStart(2, '0')}:${data.getMinutes().toString().padStart(2, '0')}`
    }
}