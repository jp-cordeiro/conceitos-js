//Genrators são funções iteradoras, para declarar basta acrescentra um '*' na palavra 'function'
function* getNomes() {
    yield 'Luffy'
    yield 'Zoro'
    yield 'Usopp'
}

const nomes = getNomes()

console.log(nomes.next())
console.log(nomes.next())
console.log(nomes.next())

/*
Utilização com ajax
 */

function ajax(url) {
    fetch(url)
        .then(data => data.json())
        /*
        Realiza a chamada seguinte do generator automaticamente
         */
        .then(data => dados.next(data))
}

function* ajaxGen() {
   console.log('primeira busca')
    /*
    Recebe os dados da primeira chamada do generator
     */
   const posts = yield ajax('https://willianjusten.com.br/search.json')
    console.log(posts)

    /*
    Recebe os dados da segunda chamada do generator
     */
   console.log('segunda busca')
   const posts2 = yield ajax('https://willianjusten.com.br/search.json')
    console.log(posts2)

    /*
    Recebe os dados da segunda chamada do generator
     */
   console.log('terceira busca')
   const posts3 = yield ajax('https://willianjusten.com.br/search.json')
    console.log(posts3)
}

const dados = ajaxGen()
dados.next()