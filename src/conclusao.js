
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        const ataques = {
            'mago': 'usou magia',
            'guerreiro': 'usou espada',
            'monge': 'usou artes marciais',
            'ninja': 'usou shuriken'
        };
        const ataque = ataques[this.tipo] || 'ataque desconhecido';
        alert(`o ${this.tipo} atacou usando ${ataque}`);
    }
}
// Coletando inputs do usuário
const nome = prompt("Digite o nome do herói: ");
const idade = prompt("Digite a idade do herói: ");
const tipo = prompt("Digite o tipo do herói (mago, guerreiro, monge, ninja): ");
// Criando e usando um objeto Heroi
const heroi = new Heroi(nome, idade, tipo);
heroi.atacar();