class estudante
{
    nome: string;
    idade: number;
    notas: number[];
   

    constructor(nome: string, idade: number, notas: number[]){
        this.nome = nome;
        this.idade = idade;
        this.notas = notas;
        
        
    }

    calcular(){
        let totaldenotas = 0;
        let media = 0;
        for(let i=0; i< this.notas.length; i++){
            totaldenotas=totaldenotas + this.notas[i]  
        
        }

    media= totaldenotas/this.notas.length;

    if(media >= 7)
    {
    return "Parabéns," + this.nome + " Sua média é " + media + " e você está aprovado(a).";
    }
    else{
        return this.nome + ", sua média é " + media + " e você precisa estudar mais para melhorar seu desempenho.";
    }
}
}

let estudante1 = new estudante("joão", 16, [6,7,9]);
console.log(estudante1.calcular());

let estudante2 = new estudante("Milly", 16, [10,7,9]);
console.log(estudante2.calcular());

let estudante3 = new estudante("jubiscreuda", 16, [5,2,3]);
console.log(estudante3.calcular());
