
//Declarando array
let frutas = ["zimbro", "kiwi", "yamamomo", "banana", "wampe"];
//Visualizando o conteúdo do array:
console.log(frutas);
console.log(frutas[4]);
console.table(frutas);


//Realizando a leitura de um array com um FOR TRADICIONAL
for (let x = 0; x < frutas.length; x++) {
    console.log(frutas[x]);
}

console.log("==================================")

//Realizando a leitura de um array com um FOR OF
for (let fruta of frutas) {
    console.log(fruta);
}
console.log("==================================")

//Realizando a leitura de um array com um FOR IN
for (let indice in frutas) {
    console.log(frutas[indice]);
}

console.log("==================================")

//Realizando a leitura de um array com um FOR EACH
frutas.forEach(function (fruta) {
    console.log("Com FOR EACH", fruta);
});

console.log("==================================")

//Inserindo novos dados com PUSH(FIM) e UNSHIFT(INÍCIO)
frutas.unshift("melancia");
frutas.push("melão");
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("==================================")

//Removendo dados com POP(FIM) e SHIFT(INÍCIO)
frutas.shift();
frutas.pop();
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("==================================")
//Alterando a ordem dos dados com SORT(ordem alfabetica) e REVERSE(alterando ordem atual).
frutas.sort();
for (let fruta of frutas) {
    console.log(fruta);
}
frutas.reverse();
for (let fruta of frutas) {
    console.log(fruta);
}