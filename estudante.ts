class estudo{
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