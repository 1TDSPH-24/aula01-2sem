
//Declarando um array
let frutas = ["zimbro", "kiwi", "yamamomo", "banana", "wampe"];
//Visualizando conteúdo do Array
console.log(frutas);
console.log(frutas[4]);
console.table(frutas);

//Realizando a leitura de um array com o FOR tradicional
for (let x = 0; x < frutas.length; x++) {
    console.log(frutas[x]);

}

console.log("================================================");


//Realizando a leitura de um array com o FOR OF (+para leitura)
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("================================================");


//Realizando a leitura de um array com o FOR IN (+para retornar índice)
for (let indice in frutas) {
    console.log(frutas[indice]);
}


