let arr = [1,3,7,8]
/*
Verifica se um valor existe em um array
 */

/*
forma antiga
 */
console.log(arr.indexOf(3) > -1)
console.log(arr.indexOf(6) > -1)

/*
forma nova
 */
console.log(arr.includes(7))
console.log(arr.includes(15))