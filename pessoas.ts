class Pessoa{
    nome: string;
    idade: number;
    comidas: string[];

    constructor(nome: string, idade: number, comidas: string[]){
        this.nome = nome;
        this.idade = idade;
        this.comidas = comidas;
    }

    cumprimentar(){
        let msgHabilitacao = "ja posso tirar minha CNH";
        if(this.idade < 18)
        {
            msgHabilitacao = "Não posso tirar minha CNH";
        }
        return "ola meu nome é " + this.nome + " eu tenho " + this.idade + "  anos " + msgHabilitacao + "." 
    }

    comidasFavoritas(){
        console.log("Minha(s) comida(s) favorita(s)");
        for(let i=0; i< this.comidas.length; i++){
        console.log(this.comidas[i]);}
    }

}

let pessoa1 = new Pessoa("joão", 16, ["doguinho","macarrão"]);
console.log(pessoa1.cumprimentar());
console.log(pessoa1.comidasFavoritas());
let pessoa2 = new Pessoa("Emilly Beatriz ", 16, ["macarrão","carolina"]);
console.log(pessoa2.cumprimentar());
console.log(pessoa2.comidasFavoritas());