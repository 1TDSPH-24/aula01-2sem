console.log("Bem vindo novamente!");

let frutas = ['zimbro', 'kiwi', 'yamamomo', 'banana', 'wampe'];
//Visualizando o conteúdo do array:

console.log(frutas);
// console.table(frutas);
let frutasRemovidas = frutas.shift()
frutas.sort()
console.log(frutas)
frutas.reverse()
console.log(frutas)
console.log(frutasRemovidas)
console.log('==========================')
let indicePesquisa = frutas.indexOf('banana');
console.log('ÍNDICE ENCONTRADO: ', indicePesquisa)
frutas.splice(indicePesquisa, 1);
for (let fruta of frutas) {
    console.log(fruta)
}