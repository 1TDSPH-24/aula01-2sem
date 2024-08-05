//Declarando um array
let frutas = ["zimbro", "kiwi", "yamamomo", "banana", "wampee"];
//Visualizando o conteúdo do array
console.log(frutas);
console.log(frutas[4]);
console.table(frutas);
//Realizando a leitura de um array com um FOR tradicional
for (let x = 0; x < frutas.length; x++) {
    console.log(frutas[x]);
}
console.log("============================");

//Realizando a leitura de um array com um FOR OF (retorna o valor)
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("============================")

//Realizando a leitura de um array com um FOR IN (retorna o índice)
for (let indice in frutas) {
    console.log(indice);
}

console.log("=============================")
//Realizando a leitura de um array com FOR EACH
frutas.forEach(function (fruta, indice, frutasArray) {
    console.log("COM FOR-EACH", fruta, frutasArray[indice]);
});

console.log("==============================")
//Removendo dados com PUSH(FIM) e UNSHIFT(INICIO)
frutas.unshift("melancia");
frutas.push("melão");
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("==============================")
//Inserindo novos dados com POP(FIM) e SHIFT(INICIO)
frutas.shift();
frutas.pop();
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("==============================")
//Alterando a ordem dos dados com SORT(ordem alfabética) e REVERSE(alterando a ordem atual)
frutas.sort();
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("==============================")
frutas.reverse();
for (let fruta of frutas) {
    console.log(fruta);
}
