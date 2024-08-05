//Declarando um array
let frutas = ["zimbro", "kiwi", "yamamomo", "banana", "wampi"];

//|Visualizando o conteúdo do ARRAY
console.log(frutas);
console.log(frutas[5]);
console.table(frutas);

//Realizando a leitura de um array com o FOR TRADICIONAL
for (let x = 0; x < frutas.length; x++) {
    console.log(frutas[x]);
}

//Realizando a leitura de um array com o FOR OF (retorna o valor em fruta)
for (let fruta of frutas) {
    console.log(fruta);
}

//Realizando a leitura de um array com o FOR IN (retorna o indice em indice)
for (let indice in frutas) {
    console.log(frutas[indice]);
}

//Realizando a leitura de um array com o FOR EACH
frutas.forEach(function (fruta, indice, frutasArray) {
    console.log("COM FOR-EACH", fruta, indice, frutasArray[indice]);
});

//Inserindo novos dados com UNSHIFT(INÍCIO) e PUSH(FIM) 
frutas.unshift("melancia");
frutas.push("melão");
for (let fruta of frutas) {
    console.log(fruta);
}

//Removendo dados com SHIFT(INÍCIO) e POP(FIM)
frutas.shift();
frutas.pop();
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("=============================================");
//Alterando a ordem dos dados com SORT(ordem alfábetica) e REVERSE(alterando a ordem atual).
frutas.sort();
for (let fruta of frutas) {
    console.log(fruta);
}
console.log("=============================================");
frutas.reverse();
for (let fruta of frutas) {
    console.log(fruta);
}