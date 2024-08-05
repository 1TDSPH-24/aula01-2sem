//Declarando um array
let frutas = ["zimbro", "kiwi", "yamamomo", "banana", "wampeem"];

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