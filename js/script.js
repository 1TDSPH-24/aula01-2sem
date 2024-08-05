let frutas = ["zimbro", "kiwi", "yamamomo", "banana", "wampe"];

console.log(frutas);
console.log(frutas[4]);
console.table(frutas);

for (let x = 0; x < frutas.length; x++) {
    console.log(frutas[x]);
}

for (let fruta of frutas) {
    console.log(fruta);
}

for (let indice in frutas) {
    console.log(frutas[indice]);
}

frutas.forEach(function (fruta, indice, frutasArray) {
    console.log("COM FOR-EACH", fruta, frutasArray[indice]);
});

frutas.unshift("melancia");
frutas.push("mexerica");
for (let fruta of frutas) {
    console.log(fruta);
}

frutas.shift();
frutas.pop();
for (let fruta of frutas) {
    console.log(fruta);
}

frutas.sort();
for (let fruta of frutas) {
    console.log(fruta);
}
frutas.reverse();
for (let fruta of frutas) {
    console.log(fruta);
}




