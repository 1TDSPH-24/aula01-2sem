//declarando um array
let frutas = ["zimbro", "kiwi", "yamamomo", "banana", "wampe"];

//visualizando o conteúdo do array
console.log(frutas);
console.log(frutas[4]);
console.table(frutas);

//realizando a leitura de um array com o for tradicional 
for (let x = 0; x < frutas.length; x++) {
    console.log(frutas[x]);
}

console.log("============================================================");


//realizando a leitura de um array com um FOR OF
for (let fruta of frutas) {
    console.log(frutas);
}

console.log("============================================================");

//realizando a leitura de um array com um FOR IN
for (let indice in frutas) {
    console.log(frutas[indice]);
}

console.log("============================================================");

//realizando a leitura de um array com um FOR EACH
frutas.forEach(function (fruta, indice) {
    console.log("COM FOR-EACH", fruta, indice);

});

console.log("============================================================");


//inserindo novos dados com PUSH e UNSHIFT
frutas.unshift("melancia");
frutas.push("melão");
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("============================================================");

//removendo dados com POP(FIM) e SHIFT(INICIO)
frutas.shift();
frutas.pop();
for (let fruta of frutas) {
    console.log(fruta);
}


console.log("============================================================");

// //alterando a ordem dos dados com SORT (ordem alfabetica) e REVERSE(alternando a ordem atual)
// frutas.sort();
// for (let fruta of frutas) {
//     console.log(fruta);
// }

// console.log("============================================================");

// frutas.reverse();
// for (let fruta of frutas) {
//     console.log(fruta);
// }

console.log("============================================================");
//["zimbro", "kiwi", "yamamomo", "banana", "wampe"]
//removendo intens da array com idexOF e splice
frutas.splice(2, 1);
console.log(frutas)

console.log("============================================================");

//removendo itrens do array com indexOF
let indicePesquisa = frutas.indexOf("banana");
console.log("indice encontrado : ", indicePesquisa);
frutas.splice(indicePesquisa, 1);
for (let fruta of frutas) {
    console.log(fruta);
}