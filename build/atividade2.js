var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(nome, conta, saldo, pix) {
        this.nome = nome;
        this.conta = conta;
        this.saldo = saldo;
        this.pix = pix;
    }
    ContaBancaria.prototype.mudarNome = function (novoNome) {
        this.nome = novoNome;
    };
    ContaBancaria.prototype.mudarConta = function (novaConta) {
        this.conta = novaConta;
    };
    ContaBancaria.prototype.mudarSaldo = function (novoSaldo) {
        this.saldo = novoSaldo;
    };
    ContaBancaria.prototype.mudarPix = function (novoPix) {
        this.pix = novoPix;
    };
    return ContaBancaria;
}());
var conta = new ContaBancaria('Erika', 4387700, 125, 14081511705);
console.table(conta);
conta.mudarNome('Theo');
conta.mudarConta(1234567);
conta.mudarSaldo(25000);
conta.mudarPix(973786052);
console.table(conta);
