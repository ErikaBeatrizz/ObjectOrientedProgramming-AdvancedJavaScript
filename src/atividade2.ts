class ContaBancaria {
    public nome: string;
    public conta: number;
    private saldo: number;
    private pix: number;

    constructor (nome:string, conta:number, saldo:number, pix:number) {
        this.nome = nome
        this.conta = conta
        this.saldo = saldo
        this.pix= pix        
    }

    public mudarNome (novoNome: string) {
        this.nome = novoNome
    }

    public mudarConta (novaConta: number) {
        this.conta = novaConta
    }

    public mudarSaldo (novoSaldo: number) {
        this.saldo = novoSaldo
    }

    public mudarPix (novoPix: number) {
        this.pix = novoPix
    }
}

const conta = new ContaBancaria ('Erika', 4387700 , 125, 14081511705);

console.table(conta);

conta.mudarNome ('Theo');
conta. mudarConta ( 1234567 );
conta.mudarSaldo ( 25000);
conta.mudarPix ( 973786052 );

console.table(conta);

