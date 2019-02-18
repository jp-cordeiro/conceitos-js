const pessoa = {
    falar(palavras){
        console.log(`${this.nome} diz: ${palavras}`)
    }
}

const funcionario = {
    trabalhar(){
        console.log('Ganhando dinheiro para os mangás!')
    }
}


const paulo = Object.create(pessoa,{
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

const joao = Object.assign({
    nome:{
        value: 'João',
        writable: true
    },
    idade:{
        value: 30
    }
},pessoa,funcionario)

joao.trabalhar()

console.log(joao)