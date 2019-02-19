const cidade = 'Fortaleza'
const texto1 = 'Ponte metálica'
const texto2 = 'Dragão do Mar'

function handleText(template, ...values) {
    return template.reduce((accumulator,part,i) => {
        console.log(accumulator)
        console.log(part)
        console.log('-')
        return `
        ${accumulator}
        <span class="green">${values[i -1].toUpperCase()}</span>
        ${part}
        `
    })
}
/*
Permite utilizar um função de manipulação antes da template string
 */
const fortaleza = handleText`E moro em ${cidade}, a terra da ${texto1} e do ${texto2}`

document.body.innerHTML = fortaleza
