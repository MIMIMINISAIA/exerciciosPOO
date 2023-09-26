abstract class ContaBancaria2{
    protected numeroConta: string;
    protected saldo: number;
    protected titular: string;

    constructor(numeroConta: string, saldo: number, titular:string ){
        this.numeroConta= numeroConta;
        this.saldo=saldo;
        this.titular = titular;
    }

    abstract depositar(valor: number): void;

    abstract sacar(saque: number): void;
    
    abstract consultarSaldo(): number;
}

class ContaCorrente extends ContaBancaria2{
    protected limiteChequeEspecial: number=0;

    constructor(numeroConta: string, saldo: number, titular:string, limiteChequeEspecial: number){
        super(numeroConta, saldo, titular);

        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    depositar(valor: number): void {
        this.saldo += valor;
        console.log(this.titular + " depositou um valor de R$"+ valor + ", seu novo saldo é de R$"+ this.saldo);
        
    }

    sacar(saque: number): void {
        if((this.saldo+this.limiteChequeEspecial) > saque)
        {
            this.saldo -= saque;
            console.log("Saque de R$"+ saque + " realizado, seu novo saldo é R$"+ this.saldo)
        }
        else{
            console.log("Saque  não realizado, Saldo insuficiente")
        }
        
    }

    consultarSaldo(): number {
        return this.saldo+this.limiteChequeEspecial
    }
}

class contaPoupanca extends ContaBancaria2{

    constructor(numeroConta: string, saldo: number, titular:string){
        super(numeroConta, saldo, titular);
    }

    depositar(valor: number): void {
        this.saldo += valor;
        console.log(this.titular + " depositou um valor de R$"+ valor + ", seu novo saldo é de R$"+ this.saldo);
        
    }

    sacar(saque: number): void {
        if(this.saldo > saque)
        {
            this.saldo -= saque;
            console.log("Saque de R$"+ saque + " realizado, seu novo saldo é R$"+ this.saldo)
        }
        else{
            console.log("Saque  não realizado, Saldo insuficiente")
        }
        
    }

    consultarSaldo(): number {
        return this.saldo
    }

    calcularRendimentoAnual(taxa: number): number{
        return this.saldo + ((taxa*this.saldo)/100);
    }

}

class contaInvestimento extends ContaBancaria2{
   
    constructor(numeroConta: string, saldo: number, titular:string){
        super(numeroConta, saldo, titular);
    }

    depositar(valor: number): void {
        this.saldo += valor;
        console.log(this.titular + " depositou um valor de R$"+ valor + ", seu novo saldo é de R$"+ this.saldo);
        
    }

    sacar(saque: number): void {
        if(this.saldo > saque)
        {
            this.saldo -= saque;
            console.log("Saque de R$"+ saque + " realizado, seu novo saldo é R$"+ this.saldo)
        }
        else{
            console.log("Saque  não realizado, Saldo insuficiente")
        }
        
    }

    consultarSaldo(): number {
        return this.saldo
    }

    investir(valor: number, prazoMeses: number, taxaJuros: number): void{
       console.log (this.saldo += valor*prazoMeses*taxaJuros)
    }

}




let titular = new ContaCorrente("123", 300, "heitor", 25);
console.log(titular.depositar(50));
console.log(titular.sacar(20));
console.log(titular.consultarSaldo());

let titularr= new contaPoupanca("567", 1000, "bia");
console.log(titularr.depositar(100));
console.log(titularr.sacar(40));
console.log(titularr.consultarSaldo());
console.log(titularr.calcularRendimentoAnual(20));

let titularrr = new contaInvestimento("8910", 2000, "eric");
console.log(titularrr.depositar(80));
console.log(titularrr.sacar(50));
console.log(titularrr.consultarSaldo());
console.log(titularrr.investir(50, 2, 40));




//const cachorro = new Dog();
//cachorro.apresentar();
//cachorro.fazerBarulho();

//let titular1 = new Contabancaria( "jubiscreuda", 1000);
//console.log(titular1.depositar(500));
//console.log(titular1.sacar(2000));
//console.log(titular1.Consultar());



//depositar(valor: number): void - Um método que permite ao titular da conta 
//depositar uma quantia no saldo.
//• sacar(valor: number): void - Um método que permite ao titular da conta sacar 
//uma quantia do saldo, desde que haja saldo suficiente.
//• consultarSaldo(): number - Um método que retorna o saldo atual da conta