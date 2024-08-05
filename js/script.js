//Declarando um array
let frutas = ["zimbro", "kiwi", "yamamomo", "banana", "wampe"]
//Visualisando o conteúdo do array
console.log(frutas);
console.log(frutas[0]);
console.table(frutas);

//Realizando a leitura de array com o FOR TRADICIONAL
for (let x = 0; x < frutas.length; x++) {
    console.log(frutas[x]);
}

console.log("================================================");


//Realizando a leitura de um array com o FOR OF
for (let fruta of frutas) {
    console.log(fruta);

}

//Realizando a leitura de um array com o FOR IN
for (let indice in frutas) {
    console.log(frutas[indice]);

}
