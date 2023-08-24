"use strict";
class produto {
    constructor(nomeproduto, preco) {
        this.nomeProduto = nomeproduto;
        this.preco = preco;
    }
    Apresentar() {
        return "O produto " + this.nomeProduto + " do valor de " + this.preco + " Reais";
    }
    aplicarDesconto(desconto) {
        return "Com o desconto de " + desconto + "% " + " vai ficar " + (this.preco - (desconto * this.preco) / 100);
    }
}
let produto1 = new produto("Livro", 80);
console.log(produto1.Apresentar());
console.log(produto1.aplicarDesconto(5));
let produto2 = new produto("Moletom", 200);
console.log(produto2.Apresentar());
console.log(produto2.aplicarDesconto(30));
let produto3 = new produto("Computador", 2000);
console.log(produto3.Apresentar());
console.log(produto3.aplicarDesconto(60));
