class Pessoa {
    constructor(nome,idade = 1){
        this.nome = nome
        this.idade = idade
    }

    falar(palavras){
        console.log(`${this.nome} diz: ${palavras}`)
    }
}

/*
Função que fabrica o objeto pessoa
 */
function makePessoa(nome,idade) {
    return new Pessoa(nome,idade)
}

/*
Apesar de fabricar um obejo semelhante a pessoa, retorna um objeto puro enão do tipo de pessoa
 */
function makePessoa(nome, idade){
    const estado ={nome,idade,falar,envelhecer}

    function falar(palavras){
        console.log(`${estado.nome} diz: ${palavras}`)
    }

    function envelhecer(valor) {
        console.log(estado.idade += valor)
    }

    return estado
}

Pessoa.factory = function(nome,idade) {
    return new Pessoa(nome,idade)
}

const paulo = Pessoa.factory('Pessoa',30)
const joao = makePessoa('Pessoa',30)
console.log(paulo)
console.log(joao)
paulo.falar('teste')