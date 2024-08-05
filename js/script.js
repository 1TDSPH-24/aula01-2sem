
//declarando um array
let frutas = ["zimbro", "kiwi", "yamamomo", "banana", "wampe"];
//visualizando o conteúdo do ARRAY:
console.log(frutas);
console.log(frutas[4]);
console.table(frutas);

//realizando a leitura de um array com for tradicional 
for (let x = 0; x < frutas.length; x++) {
    console.log(frutas[x]);
}

console.log("====================================================");

//realizando a leitura de um array com o FOR OF
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("====================================================");

//realizando a leitura de um array com o FOR IN
for (let indice in frutas) {
    console.log(indice);
}

console.log("====================================================");

//realizando a leitura de um array com o FOR EACH
frutas.forEach(function (fruta, indice, frutasArray) {
    console.log("COM FOR-EACH", fruta, frutasArray[indice]);
});

console.log("====================================================");

//Inserindo novos dados com PUSH e UNSHIFT
frutas.unshift("melancia");
frutas.push("melão");
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("====================================================");

//Removendo dados com POP(FIM) e SHIFT(INÍCIO)
frutas.shift();
frutas.pop();
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("====================================================");

//Alterando a ordem dos dados com SORT(ordem alfábetica) e REVERSE(alterando a ordem atual).
frutas.sort();
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("====================================================");

frutas.reverve();
for (let fruta of frutas) {
    console.log(fruta);
}