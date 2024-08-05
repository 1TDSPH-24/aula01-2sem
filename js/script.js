//Declarando um array
let frutas = ["Zimbro", "Kiwi", "Yamamomo", "Banana", "Wampe"];
//Visualizando o conteúdo do Array
console.log(frutas);
console.log(frutas[4]);
console.table(frutas);

//Realizando a leitura de um array com o FOR TRADICIONAL
for (let x = 0; x < frutas.length; x++) {
    console.log(frutas[x]);
}

console.log("=========================================================");

//Realizando a leitura de um array com o FOR OF - retorna valor
for (let fruta of frutas) {
    console.log(fruta);
}


console.log("=========================================================");

//Realizando a leitura de um array com o FOR IN - retorna índice
for (let indice in frutas) {
    console.log(frutas[indice]);
}


console.log("=========================================================");

//Realizando a leitura de um array com o FOREACH 
frutas.forEach(function(fruta, indice, frutasArray) { //indice e array são opcionais
    console.log(fruta, indice, frutasArray[indice]);    
});


console.log("=========================================================");

//Inserindo novos dados com PUSH(FIM) E UNSHIFT(INICIO)
frutas.unshift("Melancia");
frutas.push("Melão");
for (let fruta of frutas) {
    console.log(fruta);
}


console.log("=========================================================");

//Removendo dados com POP(FIM) E SHIFT(INICIO)
frutas.shift();
frutas.pop();
for (let fruta of frutas) {
    console.log(fruta);
}

// //Alterando a ordem dos dados com SORT(ordem alfabética) e REVERSE(alterando a ordem atual)
// console.log("=========================================================");
// frutas.sort();
// for (let fruta of frutas) {
//     console.log(fruta);
// }

// console.log("=========================================================");
// frutas.reverse();
// for (let fruta of frutas) {
//     console.log(fruta);
// }

console.log("=========================================================");
//Removendo itens do Array com Splice
frutas.splice(2,1);
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("=========================================================");
//Removendo itens do Array com indexOf
let indicePesquisa = frutas.indexOf("Banana");
console.log("INDICE ENCONTRADO: ", indicePesquisa);
frutas.splice(indicePesquisa, 1);
for (let fruta of frutas) {
    console.log(fruta);
}
