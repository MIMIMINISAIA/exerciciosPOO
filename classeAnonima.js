"use strict";
const pessoa = new class {
    constructor() {
        this.primeiroNome = "josé";
        this.ultimoNome = "Silva";
    }
    getNomeCompleto() {
        return this.primeiroNome + " " + this.ultimoNome;
    }
};
console.log(pessoa.getNomeCompleto());
const treinadorPessoal = new class {
    constructor() {
        this.rotina = [];
    }
    adicionarExercicios(nome, duracao) {
        this.rotina.push({ nome, duracao });
    }
    calcularTempoTotal() {
        let soma = 0;
        this.rotina.forEach(item => soma += item.duracao);
        return soma;
    }
};
treinadorPessoal.adicionarExercicios("corrida", 30);
treinadorPessoal.adicionarExercicios("abdominal", 15);
treinadorPessoal.adicionarExercicios("agachamento", 20);
console.log("Tempo total necessario para a rotina: " + treinadorPessoal.calcularTempoTotal() + " em minutos");
