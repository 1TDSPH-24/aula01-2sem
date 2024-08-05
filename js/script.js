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
    console.log(fruta);
}

console.log("=============================================");


//Realizando a leitura de um array com o FOR IN
for (let indice in frutas) {
    console.log(frutas[indice]);
}

console.log("=============================================");


//Realizando a leitura de um array com o FOR EACH

frutas.forEach(function(fruta, indice, lista) {
    console.log("COM FOR-EACH" , fruta, indice, lista);
});

console.log("=============================================");

//Removendo dados com POP(FIM) e SHIFT(INÍCIO)
frutas.unshift("melancia");
frutas.push("melão");
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("=============================================");
//Removendo dados com POP(FIM) e SHIFT(INÍCIO)
frutas.shift();
frutas.pop();
for (let fruta of frutas) {
    console.log(fruta);
}

//console.log("=============================================");
//Alterando a ordem dos dados com SORT (ordem alfabética) e REVERSE (alterando a ordem atual) 
//frutas.sort();   
//for (let fruta of frutas) {
//    console.log(fruta)
//}

//console.log("=============================================");
//frutas.reverse();
//for (let fruta of frutas) {
//    console.log(fruta);
//}

// let frutas = ["zimbro", "kiwi", "yamamomo",  "banana", "wampe"];

console.log("=============================================");
//Removendo itens do Array com indexOf e Splice
frutas.splice(2, 1,);
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("=============================================");
//Removendo itens do Array com indexOf e Splice
let indicePesquisa = frutas.indexOf("banana");
console.log("INDICE ENCONTRADO : ", indicePesquisa);
frutas.splice(indicePesquisa, 1);
for (let fruta of frutas) {
    console.log(fruta);
}