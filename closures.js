const pessoa = {
    nome: 'Paulo',
    idade: 25,
    senha: 123,
    verificaSenha(senha){
        return senha === this.senha
    }
}

console.log(pessoa)
pessoa.senha = '123789'

class Pessoa {
    constructor(nome,idade = 1,senha){
        this.nome = nome
        this.idade = idade
        this.senha = senha
        /*
        A valor inicial de senha só existirá no escopo do construtor, ou seja, ele estará enclausurado nesse conexto, e somente o contrutor tem acesso ao valor passado inicalmente
         */
        this.verificaSenha = function(valor){
            console.log(valor === senha)
        }
    }
}

const joao = new Pessoa('João',30,'asdf')

joao.senha = '12345'

console.log(joao.senha)
joao.verificaSenha('asdf')
joao.verificaSenha('123456')
console.log(joao)

function add(a,b) {
   console.log(a + b)
}

function bindAdd(a) {
    return function (b) {
        return add(a,b)
    }
}

bindAdd(25)(25)