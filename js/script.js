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