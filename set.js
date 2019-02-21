/*
Gera um iterator com o valores repassados
 */
let set = new Set(['Paulo','Ana','Gabi'])

for(pessoa of set){
    console.log(pessoa)
}

console.log(set.has('Ana'))
set.delete('Paulo')

console.log(set)