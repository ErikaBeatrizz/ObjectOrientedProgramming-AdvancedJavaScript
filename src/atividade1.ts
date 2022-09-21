    class Patinete {
        public tamanho: string;
        public qntdRodas: number;
        public modelo: string;
        public cor: string;

    constructor(tamanho:string, qntdRodas:number, modelo:string, cor:string) {
            this.tamanho = tamanho
            this.qntdRodas = qntdRodas
            this.modelo = modelo
            this.cor = cor
            
    }

    public mudarqntdRodas (novasRodas: number) {
        this.qntdRodas = novasRodas
    }
    public mudarModelo (novoModelo: string) {
        this.modelo = novoModelo
    }
    }

    const patinete = new Patinete ('Grande', 3, 'Eletrico', 'Cinza');

    console.table(patinete)

    patinete.mudarqntdRodas (2)
    patinete.mudarModelo ('Manual')

    console.table(patinete)
   
