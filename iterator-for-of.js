let txt = 'Fortaleza' //Iterable
let it = txt[Symbol.iterator](); //Iterator

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

for (letra of txt){
    console.log(letra)
    //Com for of é possível realizar um ponto de parada
    if(letra === 'a') break
}
