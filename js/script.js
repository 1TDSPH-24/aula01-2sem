//Declarando um array
let frutas = ["zimbro", "kiwi", "yamamomo", "banana", "wampee"];
//visualizando o conteudo do ARRAY:
console.log(frutas);
console.log(frutas[4]);
console.table(frutas); 
//Realizando a leitura de um array com FOR TRADICONAL 
for (let x = 0; x < frutas.length; x++) {
    console.log(frutas[x]);
}

console.log("=============================================");


//Realizando a leitura de um array com o FOR OF
for (let fruta of frutas) {
    console.log(fruta[indice]);
}

console.log("=============================================");


//Realizando a leitura de um array com o FOR IN
for (let indice in frutas) {
    console.log(fruta[indice]);
}
