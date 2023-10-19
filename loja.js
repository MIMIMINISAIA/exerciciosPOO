"use strict";
class ProdutoLoja {
    constructor(nomeDoProduto, precoDoProduto) {
        this.nome = nomeDoProduto;
        this.preco = precoDoProduto;
    }
}
class CarrinhoDeCompra {
    constructor() {
        this.produtosDoCarrinho = [];
    }
    adicionar(produto) {
        this.produtosDoCarrinho.push(produto);
    }
    excluirProduto(nomeDoProduto) {
        this.produtosDoCarrinho.filter((item) => item.nome !== nomeDoProduto);
    }
    excluirProduto2(produto) {
        this.produtosDoCarrinho.filter((item) => item.nome !== produto.nome);
    }
    calcularValorTotal() {
        let soma = 0;
        for (let i = 0; i < this.produtosDoCarrinho.length; i++) {
            soma = soma + this.produtosDoCarrinho[i].preco;
        }
        return soma.toFixed(2);
    }
    exibirProduto() {
        console.log("produto do Carrinho");
        for (let i = 0; i < this.produtosDoCarrinho.length; i++) {
            console.log("Produto: " + this.produtosDoCarrinho[i].nome
                + " R$ " + this.produtosDoCarrinho[i].preco.toFixed(2));
        }
    }
}
class Loja {
    constructor() {
        this.produtosDoEstoque = [];
        this.carrinhoDeCompra = new CarrinhoDeCompra();
    }
    adicionarProdutoAoEstoque(produto) {
        this.produtosDoEstoque.push(produto);
    }
    removerProdutoDoEstoque(produto) {
        this.produtosDoEstoque = this.produtosDoEstoque.filter(item => item.nome !== produto.nome);
    }
    adicionarProdutoAoCarrinho(produto) {
        const produtoEncontrado = this.produtosDoEstoque.find(item => item.nome === produto.nome);
        if (produtoEncontrado) {
            this.carrinhoDeCompra.adicionar(produtoEncontrado);
            return "produto adicionado ao carrinho de compra";
        }
        else {
            return "produto nao encontrado ao estoque da loja";
        }
    }
    removerProdutosCarrinhoDeCompra(produto) {
        //this.carrinhoDeCompra.excluirProduto(produto.nome);
        this.carrinhoDeCompra.excluirProduto2(produto);
    }
    exibirProdutoCarrinho() {
        this.carrinhoDeCompra.exibirProduto();
    }
}
//adicionar produtos
const ProdutoLoja1 = new ProdutoLoja("camiseta", 29.99);
const ProdutoLoja2 = new ProdutoLoja("calça", 49.99);
const ProdutoLoja3 = new ProdutoLoja("sapato", 79.99);
const ProdutoLoja4 = new ProdutoLoja("meia", 20.00);
//criando loja
const minhaLoja = new Loja();
// adicionar produtos ao estoque
minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja1);
minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja2);
minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja3);
minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja4);
//adicionar produtos ao carrinho
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja1);
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja2);
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja3);
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja4);
//remover produto carrinho
minhaLoja.removerProdutosCarrinhoDeCompra(ProdutoLoja4);
//remover produto estoque
minhaLoja.removerProdutoDoEstoque(ProdutoLoja4);
//exibir produtos carinho
minhaLoja.exibirProdutoCarrinho();
//exibindo valor total carrinho
console.log("total do carrinho de compras: R$ "
    + minhaLoja.carrinhoDeCompra.calcularValorTotal());
