enum StatusPedido{
    AguardandoPreparo = "Aguardando preparo",
    EmPreparo = "Em Preparo",
    SaiuParaEntrega = "Saiu para entrega",
    Entregue = "entrega"

}

class ProdutoPedido{
    nomeProduto: string;
     valorProduto: number;

    


    constructor(nomeProduto: string, valorProduto: number){
        this.nomeProduto = nomeProduto;
        this.valorProduto = valorProduto;
       

    }}

class pedido{
        private produtos:ProdutoPedido[];
        private status : StatusPedido;

        constructor(){
            this.produtos = [];
            this.status = StatusPedido.AguardandoPreparo;
        }


    adicionarPedido(produto :ProdutoPedido){
        this.produtos.push(produto);
        
    }

    atualizarStatus(statu: StatusPedido){
        this.status = statu;


    }

    exibirStatus(){
        return  this.status;

    }

    exibirProdutosPedido(){
        console.log("Produtos do pedidos " )
        for (let i=0; i< this.produtos.length; i ++){
           console.log( this.produtos[i].nomeProduto + " tem o valor de " + this.produtos[i].valorProduto.toFixed(2)); 
           }
 
   
}}

const produtoPedido1 = new ProdutoPedido("Camisa", 80);
const produtoPedido2 = new ProdutoPedido("Notbook", 6000);
const produtoPedido3 = new ProdutoPedido("Capinha", 10);

const PPedido = new pedido()
PPedido.adicionarPedido(produtoPedido1);
PPedido.adicionarPedido(produtoPedido2);
PPedido.adicionarPedido(produtoPedido3);

const novoPedido = new pedido();
console.log("Statudo atual do pedido: "+novoPedido.exibirStatus());
novoPedido.atualizarStatus(StatusPedido.EmPreparo);
console.log("statudo atual do pedido: "+novoPedido.exibirStatus());



 PPedido.exibirProdutosPedido();


