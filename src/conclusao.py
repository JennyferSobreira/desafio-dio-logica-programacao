
class Heroi:
    def __init__(self, nome, idade, tipo):
        self.nome = nome
        self.idade = idade
        self.tipo = tipo

    def atacar(self):
        ataques = {
            'mago': 'usou magia',
            'guerreiro': 'usou espada',
            'monge': 'usou artes marciais',
            'ninja': 'usou shuriken'
        }
        ataque = ataques.get(self.tipo, 'ataque desconhecido')
        print(f"O {self.tipo} atacou usando {ataque}")

# Coletando inputs do usuário
nome = input("Digite o nome do herói: ")
idade = input("Digite a idade do herói: ")
tipo = input("Digite o tipo do herói (mago, guerreiro, monge, ninja): ")

# Criando e usando um objeto Heroi
heroi = Heroi(nome, int(idade), tipo)
heroi.atacar()
