class Cachorro{
    nome: string;
    raca: string;
    idade: number;

    constructor(nome: string, raca: string, idade: number,)
    {
        this.nome=nome;
        this.raca=raca;
        this.idade=idade;
    }

    
    apresentar(){
        return "Oi, eu sou " + this.nome + " um " + this.raca + " de " + this.idade + " anos ";
    }

    

    apresentarpara(humano: string){
        return "Ola " + humano + " eu sou " + this.nome + " um " + this.raca + " de " + this.idade + " anos ";
    }


}

let rex = new Cachorro("Rex", "labrador", 3);
let Renan = new Cachorro("Renan", "viralata", 16);

console.log(rex.nome);
console.log(Renan.nome);
console.log(rex.apresentar());
console.log(Renan.apresentar());
console.log(Renan.apresentarpara("Emy"));