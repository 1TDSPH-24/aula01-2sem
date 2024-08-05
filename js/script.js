//Dcelarando um array
let frutas = ("zimbro", "kiwi", "yamamomo", "banana", "wampe")
//visualizando o conteúdo do array
console.log(frutas);
console.log(frutas[4]);
console.table(frutas);
x = 0;
//realizando a leitura de um array com FOR tradicional
for (let x = 0; x < frutas.length; x++); {
    console.log(frutas[x]);
}
console.log("======================================================")

for (let indice in frutas); {
    console.log(frutas[indice]);
}
console.log("======================================================")

frutas.forEachfunction(fruta, indice); {
    console.log("COM FOR-EACH", fruta, frutasArray[indice]);
}

//array com unshift e push
frutas.unshift("melancia");
frutas.push("melão");
for (let fruta of frutas) {
    console.log(fruta);
}



console.log("======================================================")
frutas.shift();
frutas.pop();
for (let fruta of frutas); {
    console.log(fruta);
}

//retirando dados com POP e SHIFT

console.log("======================================================")
frutas.splice(2, 1);
for (let fruta of frutas) {
    console.log(fruta);
}

//removendo itens do array com indexOF

console.log("======================================================")
let indicePesquisa = frutas.indexOf("banana");
console.log("INDICE ENCONTRADO: ", indicePesquisa);
frutas.splice(indicePesquisa, 1);
for (let fruta of frutas) {
    console.log(fruta);
}