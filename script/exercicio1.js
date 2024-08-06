let form = document.getElementById("formId")
let input = document.getElementById("idName")
let btnSubmit = document.getElementById("idBtnSubmit")
let ul = document.getElementById("ulId")
let names = []
let btnOA = document.getElementById("btnOA")
let btnR = document.getElementById("btnRL")


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

function mostrar(lista){
    ul.innerHTML = "";
    if(lista.length > 0){
        for(let x = 0; x < lista.length; x++){
            let nome = lista[x]
            let li = document.createElement("li")
            li.appendChild(document.createTextNode(nome))
            ul.appendChild(li)
            }

        }
    }  

btnOA.addEventListener("click",()=>{
    names.sort();
    mostrar(names);
})

btnR.addEventListener("click",()=>{
    names.reverse()
    mostrar(names)
})
