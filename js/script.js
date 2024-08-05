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