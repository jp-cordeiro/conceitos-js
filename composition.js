class Pessoa {
    constructor(nome,idade = 1){
        this.nome = nome
        this.idade = idade
    }

    falar(palavras){
        console.log(`${this.nome} diz: ${palavras}`)
    }
}

const paulo = Object.create(Pessoa,{
    nome:{
        value: 'Paulo',
        /*
        Permite que a propriedade seja disponível para alteração
         */
        writable: true
    },
    idade:{
        value: 25
    }
})

paulo.nome = 'João'

console.log(paulo)