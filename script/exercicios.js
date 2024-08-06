let input = document.getElementById("idName")
let inputRemove = document.getElementById("idRemoveName")
let ul = document.getElementById("ulId")
let btnOA = document.getElementById("btnOA")
let btnR = document.getElementById("btnRL")
let btnOR = document.getElementById("btnOR")
let btnRemove = document.getElementById("idBtnRemove")
let names = []


function salvar(event){
    event.preventDefault();
    if(input.value != ""){
        names.push(input.value);
        mostrar(names);
        input.value = ""
        return;
    }
    return;
}

function RemoveName(event){
    event.preventDefault();
    if(inputRemove.value != ""){
        let index = names.indexOf(inputRemove.value);
        if(index != -1){
            names.splice(index,1)
            mostrar(names)
            inputRemove.value = ""
            return;
        } 
    }
    window.alert("Nenhum nome encontrado na lista")
    return;
}

function clone(array){
    let clonedArray = []
    for(let x = 0; x < array.length; x++){
        clonedArray.push(array[x])
    }
    return clonedArray
}
function mostrar(array){
    ul.innerHTML = "";
    if(array.length > 0){
        for(let x = 0; x < array.length; x++){
            let nome = array[x]
            let li = document.createElement("li")
            li.classList.add("lista")
            li.appendChild(document.createTextNode(nome))
            ul.appendChild(li)
            }

        }
    }  

btnOA.addEventListener("click",()=>{
    let namesOA = clone(names)
    namesOA.sort();
    mostrar(namesOA);
})

btnR.addEventListener("click",()=>{
    let namesR = clone(names)
    namesR.reverse()
    mostrar(namesR)
})

btnOR.addEventListener("click", ()=>{
    mostrar(names)
})

