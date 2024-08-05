//Declarando um Array
let frutas = ["Zimbro", "Kiwi", "Yamamomo", "Banana", "Wampe"];

//console.log(frutas);
//console.log(frutas[4]);
//console.table(frutas);

for(let x = 0; x < frutas.length; x++){
    console.log(frutas[x]);
}

console.log("=== For Of ===");

//Realizando a leitura de um array com o FOR OF. Pega uma item do frutas e coloca em fruta.
for (let fruta of frutas){
    console.log(fruta);
}

console.log("=== For In ===");

//Realizando a leitura de um array com FOR IN. Pega o valor do indice da fruta de frutas.
for (let fruta in frutas) {
    console.log(frutas[fruta]);
}

console.log("=== forEach ===");

frutas.forEach(function(fruta, indice, lista) {
    console.log(fruta, indice, lista);
});

console.log("=== Push e Unshift ===");

//Iserindo novos dados com PUSH(FIM) e UNSHIFT(INÍCIO).
frutas.unshift("Melancia");
frutas.push("Melão");
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("=== Pop e Shift ===");

//Removendo novos dados com POP(FIM) e SHIFT(INÍCIO).
frutas.shift();
frutas.pop();
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("=== Sort ===");

//Alterando a ordem dos dados com SORT(ORDEM ALFABÉTICA).
frutas.sort()
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("=== Reverse ===");

//Alterando a ordem dos dados com REVERSE(ALTERANDO A ORDEM ATUAL).
frutas.reverse()
for (let fruta of frutas) {
    console.log(fruta);
}






