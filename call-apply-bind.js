const cachorro = {
    nome: 'Luffy',
    idade: 5,
    idadeCanina(){
        return this.idade * 7
    },
    latir(){
        console.log(`${this.nome} diz: au au`)
    }
}

const pessoa = {
    nome: 'Paulo',
    idade: 30,
    falar(palavras){
        console.log(`${this.nome} diz: ${palavras}`)
    },
    latir(){
        /*
        Polimorfismo Js
        Call modifica o valor do contexto e chama a proprieda de outro objeto, porém os argumentos devem ser passados um a um
         */
        cachorro.latir.call(this)
        /*
        Tem a mesma funcionalidade de call, porém os argumentos são passados em array pois muitas vezes não temos o controle da quantidade de argumentos
         */
        cachorro.latir.apply(this)
    }
}

/*
Pega função em questão e devolve uma nova função com o contexto modificado, ele não chama, no caso ele cria uma nova função com um novo contexto, permitindo também passar argumentos
 */
pessoa.latir = cachorro.latir.bind(pessoa,'olá')

pessoa.latir()