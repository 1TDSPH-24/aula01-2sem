
//Declarando um array
let frutas = ["zimbro", "kiwi", "yamamomo", "banana", "wampe"];
//Visualizando conteúdo do Array
console.log(frutas);
console.log(frutas[4]);
console.table(frutas);

//Realizando a leitura de um array com o FOR tradicional (bom para comparar)
for (let x = 0; x < frutas.length; x++) {
    console.log(frutas[x]);

}

console.log("================================================");


//Realizando a leitura de um array com o FOR OF (+para leitura) (bom para comparar)
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("================================================");


//Realizando a leitura de um array com o FOR IN (+para retornar índice) (bom para comparar)
for (let indice in frutas) {
    console.log(frutas[indice]);
}

console.log("================================================");


//Realizando a leitura de um array com o FOR EACH (NÃO É BOM PARA COMPARAR)
frutas.forEach(function (fruta, indice, futasArray) {
    console.log("COM FOR-EACH", fruta, indice, futasArray[indice]);
});

console.log("================================================");

//Inserindo novos dados com PUSH e UNSHIFT
frutas.unshift("melancia");
frutas.shift("melão");;
for (let fruta of frutas) {
    console.log(fruta);

}

console.log("================================================");

//Inserindo novos dados com POP(FIM) e SHIFT(INÍCIO)
frutas.shift();
frutas.pop();
for (let fruta of frutas) {
    console.log(fruta);

}

console.log("================================================");

//Alterando a ordem dos dados com SORT(ordem alfabética) e REVERSE(alterando a ordem atual).
frutas.sort();
for (let fruta of frutas) {
    console.log(fruta);

}
console.log("================================================");
frutas.reverse();
for (let fruta of frutas) {
    console.log(fruta);

}