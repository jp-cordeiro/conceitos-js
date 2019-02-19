/*
Array.from()
 */

/*
NodeList de li
 */
const list = document.querySelectorAll('#nakamas li')
console.log(list)
/*
Array de li
 */
const listArray = Array.from(list)
console.log(listArray)
/*
Array do texto em cada li
 */
const nakamas = listArray.map(nome => nome.textContent)
console.log(nakamas)

/*
Array.of()
 */

const array = Array.of(1,2,'Texto',{nome:'Paulo'})
console.log(array)

/*
Array.find() e findIndex()
 */
const dados = [
    {
        nome: 'Paulo',
        idade: 25,
        cidade: 'Caucaia'
    },
    {
        nome: 'João',
        idade: 30,
        cidade: 'Fortaleza'
    }
]

const arrayNumeros = [4,-5,6,-10]

/*
Retorna o primeiro resultado que responde a essa condição
 */
const menorQueZero = arrayNumeros.find(x => x < 0)

console.log(menorQueZero)

const buscaPessoa = dados.find(pessoa => pessoa.nome === 'Paulo')
const buscaIndicePessoa = dados.findIndex(pessoa => pessoa.nome === 'Paulo')

console.log(buscaPessoa)
console.log(buscaIndicePessoa)


/*
Array.fill()
 */
const arrayFill = new Array(50)

arrayFill.fill('Nakama',3,10)

console.log(arrayFill)