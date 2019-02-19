/*
Destructuring
 */
const pessoa = {
    nome: 'João',
    sobrenome: 'Silva',
    endereco: {
        rua: 'A',
        numero: 123
    }
}

const {nome,sobrenome} = pessoa
console.log(nome,sobrenome)

const {rua:logradouro, numero} = pessoa.endereco
console.log(logradouro,numero)

/*
Swap
 */

let a = 5;
let b = 10;

[a,b] = [b,a]

console.log(a,b)

/*
Spread
 */
let fws = ['vue','react','angular']
console.log(...fws)