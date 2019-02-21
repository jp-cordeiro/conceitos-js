let obj = {
    nome: 'Paulo',
    idade: 30
}
/*
O proxy acessará os dados do objeto repassado como alvo podendo assim manipular através de leitura e consulta, além de outra funcionalidades tbm
 */
let proxy = new Proxy(obj,{
    get(target, p, receiver) {
        console.log(target)
        console.log(p)
        console.log(receiver)
        return target[p]
    },
    set(target, p, value, receiver) {
        target[p] = value
    }
})