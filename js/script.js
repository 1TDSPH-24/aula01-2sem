//declarando um array

let frutas = ["zimbro", "kiwi", "yamamomo", "banana", "wampe"];

//Declarando o conteúdo do ARRAY
console.log(frutas);
console.log(frutas[4]);
console.table(frutas);

//Realizando a leitura de um ARRAY com o FOR TRADICIONAL
for (let x = 0; x < frutas.length; x++) {
    console.log(frutas[x]);
}

console.log("=============================================");


//Realizando a leitura de um array com o FOR OF
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("=============================================");

//Realizando a leitura de um array com o FOR IN
for (let indice in frutas) {
    console.log(indice);
}
