let frutas = ["zimbro", "kiwi", "yamamomo", "banana", "wampe"]

console.log(frutas);
console.log("for tradicional")
console.log("")
for (let x = 0; x < frutas.length; x++) {
    console.log(frutas[x])
}

console.log("")
console.log("for each")
console.log("")
frutas.forEach(f => console.log(f));

console.log("")
console.log("for of")
console.log("")
for (let f of frutas) {
    console.log(f)
}

console.log("")
console.log("for in")
// devolve o indice.
console.log("")
for (let indice in frutas) {
    console.log(indice)
}
console.log("")
console.log("Removendo itens do array com indexOf e splice")
console.log("")

console.log("Splice")
frutas.splice(2, 1)
console.log(frutas)

console.log("")
console.log("index Of")
console.log("")
let indicePesquisa = frutas.indexOf("banana");
frutas.splice(indicePesquisa, 1)
console.log(frutas)


