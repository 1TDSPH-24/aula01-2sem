console.log("Bem-vindo novamente");

//declarando um array
let frutas = ["zimbro", "kiwi", "yamamomo", "banana", "wampi"];

//visualizando o conteudo do ARRAY
console.log(frutas);
console.log(frutas[4]);
console.table(frutas);

//realizando a leitura de um array com o for tradicional 
for (let x = 0; x < frutas.length; x++) {
    console.log(frutas[x]);
}

console.log("===========================");
//realizando a leitura de um array com o for of
for (let fruta of frutas) {
    console.log(fruta);
}

//realizando a leitura de um array com o for in
for (let indice in frutas) {
    console.log(frutas[indice]);
}