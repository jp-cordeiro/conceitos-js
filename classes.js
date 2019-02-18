class Pessoa {
    constructor(nome,idade = 1){
        this.nome = nome
        this.idade = idade
    }

    falar(palavras){
        console.log(`${this.nome} diz: ${palavras}`)
    }

    envelhecer = function (valor) {
        this.idade += valor
    }
}

class Funcionario extends Pessoa{
    constructor(nome,idade = 1){
        super(nome,idade)
        this.cpf
    }
}

const paulo = new Pessoa('Paulo',30)
const joao = new Funcionario('João',30)

joao.cpf = 12345678911

paulo.falar('oi')
paulo.envelhecer(2)

console.log(paulo)
delete  joao.idade
console.log(joao.idade)
console.log(joao)