"use strict";
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
}
class gerente extends Funcionario {
    constructor() {
        super("Alex", 2000);
    }
    calcularSalarioMensal() {
        //console.log("o salario do " + this.nome + " é de " + (this.salario += (10*this.salario)/100)+ " reais")
        return (this.salario += (10 * this.salario) / 100);
    }
}
class Desenvolvedor extends Funcionario {
    constructor() {
        super("Claudio", 1000);
    }
    calcularSalarioMensal() {
        //console.log("o salario do " + this.nome + "é de " + this.salario + " reais");
        return (this.salario);
    }
}
const Alex = new gerente();
console.log("o salario do " + Alex.nome + " é de " + Alex.calcularSalarioMensal() + " reais");
const Claudio = new Desenvolvedor();
console.log("o salario do " + Claudio.nome + "é de " + Claudio.calcularSalarioMensal() + " reais");
