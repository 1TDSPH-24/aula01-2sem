
//Declarando um array
let frutas = ["zimbro", "kiwi", "yamamomo", "Wampe"];
//Visualizando o conteúdo do ARRAY
console.log(frutas);

console.table(frutas);

//Realizando a leitura de um array com o for tradicional
for (let x = 0; x < frutas.length; x++) {
    console.log(frutas[x]);
}

console.log("=============================================");


//Realizando a leitura de um array com FOR OF
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("=============================================");

//Realizando a leitura de um array com FOR IN
for (let indice in frutas) {
    console.log(frutas[indice]);
}

console.log("=============================================");
//Realizando a leitura de um array com FOR EACH
frutas.forEach(function (fruta, indice, frutasArray) {
    console.log("COM FOR-EACH", fruta, indice, FrutasArray[indice]);
});

//Inserindo novos dados com PUSH(FIM) e UNSHIFT(COMEÇO)
frutas.unshift("melancia")
frutas.push("melão")
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("=============================================");
//Removendo dados com POP(FIM) e SHIFT(COMEÇO)
frutas.shift()
frutas.pop()
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("=============================================");
//Alterando a ordem dos dados com SORT(ordem alfabetica) e REVERSE(alterando a ordem atual)
frutas.sort()
for (let fruta of frutas) {
    console.log(fruta);
}
frutas.reverse()
for (let fruta of frutas) {
    console.log(fruta);
}
