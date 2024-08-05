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