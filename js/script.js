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

//for each
frutas.forEach(function (fruta, indice, frutasArray) {
    console.log("COM FOR-EACH", fruta, frutasArray[indice]);
});

//Inserindo novos dados com PUSH(FIM) e UNSHIFT(INÍCIO)
frutas.unshift("melancia");
frutas.push("melão");
for (let fruta of frutas) {
    console.log(fruta);
}


//Removendo dados com POP(FIM) e SHIFT(INÍCIO)
frutas.shift();
frutas.pop();
for (let fruta of frutas) {
    console.log(fruta);
}

//Alterando a ordem dos dados com SORT(ordem alfábetica) e REVERSE(alterando a ordem atual).
//frutas.sort();
//for (let fruta of frutas) {
//    console.log(fruta);
//}


//frutas.reverse();
//for (let fruta of frutas) {
//    console.log(fruta);
//}

//let frutas = ["zimbro", "kiwi", "yamamomo", "banana", "wampe"];

//Removendo itens do Array com indexOf e Splice
frutas.splice(2, 1);
for (let fruta of frutas) {
    console.log(fruta);
}

//Removendo itens do Array com indexOf e Splice
let indicePesquisa = frutas.indexOf("banana");
console.log("INDICE ENCONTRADO : ", indicePesquisa);
frutas.splice(indicePesquisa, 1);
for (let fruta of frutas) {
    console.log(fruta);
}