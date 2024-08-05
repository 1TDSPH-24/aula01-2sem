
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