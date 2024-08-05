//Declarando um array
let frutas = ["Zimbro", "Kiwi", "Yamamomo", "Banana", "Wampe"];
//Visualizando o conteúdo do Array
console.log(frutas);
console.log(frutas[4]);
console.table(frutas);

//Realizando a leitura de um array com o FOR TRADICIONAL
for (let x = 0; x < frutas.length; x++) {
    console.log(frutas[x]);
}

console.log("=========================================================");

//Realizando a leitura de um array com o FOR OF - retorna valor
for (let fruta of frutas) {
    console.log(fruta)
}


console.log("=========================================================");

//Realizando a leitura de um array com o FOR IN - retorna índice
for (let indice in frutas) {
    console.log(frutas[indice])
}