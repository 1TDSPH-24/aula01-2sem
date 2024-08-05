//Declarando um Array
let frutas = ["Zimbro", "Kiwi", "Yamamomo", "Banana", "Wampe"];

//console.log(frutas);
//console.log(frutas[4]);
//console.table(frutas);

for(let x = 0; x < frutas.length; x++){
    console.log(frutas[x]);
}

console.log("=================================================================================");

//Realizando a leitura de um array com o FOR OF. Pega uma item do frutas e coloca em fruta.
for (let fruta of frutas){
    console.log(fruta);
}

console.log("=================================================================================");

//Realizando a leitura de um array com FOR IN. Pega o valor do indice da fruta de frutas.
for (let fruta in frutas) {
    console.log(frutas[fruta]);
}

console.log("=================================================================================");

frutas.forEach(function(fruta, indice, lista) {
    console.log(fruta, indice, lista);
});

console.log("=================================================================================");

//Iserindo novos dados com PUSH(FIM) e UNSHIFT(INÍCIO).
frutas.unshift("Melancia");
frutas.push("Melão");
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("=================================================================================");

//Removendo novos dados com POP(FIM) e SHIFT(INÍCIO).
frutas.shift();
frutas.pop();
for (let fruta of frutas) {
    console.log(fruta);
}




