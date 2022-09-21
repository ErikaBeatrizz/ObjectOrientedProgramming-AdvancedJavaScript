var Patinete = /** @class */ (function () {
    function Patinete(tamanho, qntdRodas, modelo, cor) {
        this.tamanho = tamanho;
        this.qntdRodas = qntdRodas;
        this.modelo = modelo;
        this.cor = cor;
    }
    Patinete.prototype.mudarqntdRodas = function (novasRodas) {
        this.qntdRodas = novasRodas;
    };
    Patinete.prototype.mudarModelo = function (novoModelo) {
        this.modelo = novoModelo;
    };
    return Patinete;
}());
var patinete = new Patinete('Grande', 3, 'Eletrico', 'Cinza');
console.table(patinete);
patinete.mudarqntdRodas(2);
patinete.mudarModelo('Manual');
console.table(patinete);
