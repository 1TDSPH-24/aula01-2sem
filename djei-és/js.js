
//declaracao de arrei

let futas = ["zatanas", "kiwi", "yamamomo", "banana", "wampe"];
// vizualizando o conteudo do array
console.log(futas);
console.log(futas[0]);
console.table(futas);

console.log("satanas morra agora ")

// realizando a leitada de um for of 
for (let futa of futas) {
    console.log(futa);
}

console.log("satanas morra agora ")

for (let indice in futas) {
    console.log(futas[indice]);
}
console.log("satanas morra agora ")

for (let indice in futas) {
    console.log(futas[indice]);
}

futas.forEach(function (futa, indice, futasarray) {
    console.log("com foriti", futa, futasarray[indice])
});

//inseridno novos dados com push e unshigigigigi

futas.unshift("melancia");
futas.push("melãp");
for (let futa of futas) {
    console.log(futa);
}


// rempvemdp dadpsa com pop(final) e shift(iniquio)
futas.shift()
futas.pop()
for (let futa of futas) {
    console.log(futa);
}

// alterando ordem dos ngcs com sort(alfabetic) e reverse(ao contrario)
futas.sort()
for (let futa of futas) {
    console.log(futa);
}
futas.reverse()
for (let futa of futas) {
    console.log(futa);
}
