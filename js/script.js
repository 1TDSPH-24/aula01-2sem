//Declarando um array
let frutas = ["zimbro", "kiwi", "yamamomo", "banana", "wampe"];
//Visualizando o conteudo ARRAY:
console.log(frutas);
console.log(frutas[4]);
console.table(frutas);

//realizando a leitura de um array com o FOR TRADICIONAL
for (let x = 0; x < frutas.length; x++) {
    console.log(frutas[x]);
}

//realizando a leitura de um array com for of
for (let fruta of frutas) {
    console.log(fruta)
}

console.log("======================================")
//realizando a leitura de um array com for in
for (let indice in frutas) {
    console.log(frutas[indice]);
}

console.log("======================================")
//realizando a leitura de um array com for each
frutas.forEach(function (fruta, indice, frutasArray) {
    console.log("COM FOR-EACH", fruta, indice, frutasArray[indice]);
});

console.log("======================================")
//inserindo novos dados com PUSH(fim) e UNSHIFT(INICIO)
frutas.unshift("melancia");
frutas.push("melão");
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("======================================")
//removendo dados com POP(fim) e SHIFT(INICIO)
frutas.shift();
frutas.pop();
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("======================================")
//alternando a ordem dos dados com SORT(ordem alfabetica) e REVERSE(alterando a ordem atual)
frutas.sort()
for (let fruta of frutas) {
    console.log(fruta);
}
frutas.reverse();
for (let fruta of frutas) {
    console.log(fruta);
}

