class Paciente {
    public nome: string;
    public idade: number;
    public plano: string;
    public emRisco: boolean;

    constructor (nome:string, idade:number, plano:string, emRisco:boolean) {
        this.nome = nome
        this. idade = idade
        this. plano = plano
        this.emRisco = emRisco
    }

    public mudarNome (novoNome: string) {
        this.nome = novoNome
    }

    public mudarIdade (novaIdade: number) {
        this.idade = novaIdade
    }

    public mudarPlano (novoPlano: string) {
        this.plano = novoPlano
    }

    public mudarRisco (novoRisco: boolean) {
        this.emRisco = novoRisco
    }
}

const paciente = new Paciente ('Ana', 21, 'Unimed', false);

console.table (paciente);

paciente.mudarNome ('Manoel');
paciente.mudarIdade (78);
paciente.mudarPlano('Golden Cross');
paciente.mudarRisco(true);

console.table (paciente);
