/*
Assina que a função vai ser assincrona
async funciona apenas com promises
 */
async function getPosts() {
    try{
        /*
    Espera o resultado da requisição ser devolvido para dar sequência ao tratamento dos dados
    await depende do async
     */
        const response = await fetch('https://willianjusten.co.br/search.json')
        console.log(response)
        const data = await response.json()

        return data.map(post => console.log(post.title))
    }catch (err) {
        console.log(err)
    }
}

getPosts()