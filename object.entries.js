const pessoas = [
    {
        nome: 'Paulo',
        idade: 25,
        id:1
    },
    {
        nome: 'Ana',
        idade: 30,
        id:2
    },
    {
        nome: 'Bia',
        idade: 22,
        id:3
    },
    {
        nome: 'Gabi',
        idade: 26,
        id:4
    },
]

const pessoasMap = pessoas.map(
    /*
    Transforma o objeto em um array de chave e valor
     */
    pessoa => new Map(Object.entries(pessoa))
)

pessoasMap.forEach( pessoa => {
    console.log(pessoa.get('id'))
})