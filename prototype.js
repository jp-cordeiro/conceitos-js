function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade || 1
}

Pessoa.prototype.falar = function (palavras) {
    console.log(`${this.nome} diz: ${palavras}`)
}

Pessoa.prototype.envelhecer = function (valor) {
    this.idade += valor
}

function Funcionario(nome, idade) {
    /**
     * Semelhante ao comportameno de super aplicando os argumentos para o construtor do pai
     */
    //Pessoa.call(this,nome,idade)
    Pessoa.apply(this,arguments)

    this.cpf;
}

Funcionario.prototype = new Pessoa()
herdar(Funcionario,Pessoa)

Funcionario.prototype.cpf = function (valor) {
    this.cpf = valor
}

const paulo = new Pessoa('Paulo',30)
const joao = new Funcionario('João',30)

joao.cpf(12345678911)

paulo.falar('oi')
paulo.envelhecer(2)

/**
 * Delega o domínio das própriedades herdadas para a filha
 * @param filha
 * @param mae
 */
function herdar(filha, mae){
    function p() {}
    p.prototype = mae.prototype
    /*
    Recebe um novo objeto com protótipo de Pessoa em seu protótipo
     */
    filha.prototype = new p()
}

console.log(paulo)
/**
 * Irá apresentar o valor 1 por conta da cadeia de protótipos onde o objeto filho busca o valor no protótipo declaro em sua cadeia e vai buscando em todos os nível até encontrar, caso não encontre, exibe 'undefined'
 */
// delete joao.idade;
// console.log(joao.idade)
console.log(joao)