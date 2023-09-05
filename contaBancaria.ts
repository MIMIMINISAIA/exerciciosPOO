class Contabancaria{
    titular: string;
    private saldo: number;
   

    constructor(titular: string, saldo: number){
        this.titular = titular;
        this.saldo = saldo;
        
        
    }

    depositar(deposito: number){
        this.saldo = this.saldo + deposito;
        return  this.titular + " depositou um valor de R$"+ deposito + ", seu novo saldo é de R$"+ this.saldo;

    }

    sacar(saque: number){
       
        if(this.saldo > saque)
        {
            this.saldo = this.saldo - saque;
            return "Saque de R$"+ saque + " realizado, seu novo saldo é R$"+ this.saldo;
        }
        else{
            return "Saque  não realizado, Saldo insuficiente";
        }
    }

    Consultar(){
       return "O saldo atual de " + this.titular + " tem o valor de R$" + this.saldo
    }
}

let titular1 = new Contabancaria( "jubiscreuda", 1000);
console.log(titular1.depositar(500));
console.log(titular1.sacar(2000));
console.log(titular1.Consultar());

let titular2 = new Contabancaria( "Emilly", 10000);
console.log(titular2.depositar(5));
console.log(titular2.sacar(5));
console.log(titular2.Consultar());

let titular3 = new Contabancaria( "Bia", 100 );
console.log(titular3.depositar(1));
console.log(titular3.sacar(50));
console.log(titular3.Consultar());

let titular4 = new Contabancaria( "Renan", 0);
console.log(titular4.depositar(1));
console.log(titular4.sacar(0));
console.log(titular4.Consultar());