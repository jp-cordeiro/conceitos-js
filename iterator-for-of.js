let txt = 'Fortaleza' //Iterable
let it = txt[Symbol.iterator](); //Iterator

do{
    console.log(it.next())
}
while (!it.next().done)