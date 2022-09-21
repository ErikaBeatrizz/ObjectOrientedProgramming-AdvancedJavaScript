var Paciente = /** @class */ (function () {
    function Paciente(nome, idade, plano, emRisco) {
        this.nome = nome;
        this.idade = idade;
        this.plano = plano;
        this.emRisco = emRisco;
    }
    Paciente.prototype.mudarNome = function (novoNome) {
        this.nome = novoNome;
    };
    Paciente.prototype.mudarIdade = function (novaIdade) {
        this.idade = novaIdade;
    };
    Paciente.prototype.mudarPlano = function (novoPlano) {
        this.plano = novoPlano;
    };
    Paciente.prototype.mudarRisco = function (novoRisco) {
        this.emRisco = novoRisco;
    };
    return Paciente;
}());
var paciente = new Paciente('Ana', 21, 'Unimed', false);
console.table(paciente);
paciente.mudarNome('Manoel');
paciente.mudarIdade(78);
paciente.mudarPlano('Golden Cross');
paciente.mudarRisco(true);
console.table(paciente);
