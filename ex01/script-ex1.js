document.addEventListener('DOMContentLoaded', function () {

    const formulario = document.querySelector('#form-names');
    const inputNome = document.querySelector('#idNome');
    const btnAdd = document.querySelector('#btnAdd');
    const btnOrdenar = document.querySelector('#btnOrdenar');
    const btnReverter = document.querySelector('#btnReverter');
    const lista = document.querySelector('#lista');

    let arrayNomes = [];

    // função para adicionar um nome na lista
    function addNome(nome) {

        if (nome !== undefined && nome !== "") {
            arrayNomes.push(nome);
            inputNome.value = "";
            renderizarLista();
            console.log("Nome inserido com sucesso na lista!");
        } else {
            console.log("Por favor, insira um nome!");
        }
    }

    function renderizarLista() {
        lista.innerHTML = "";
        for (let x = 0; x < arrayNomes.length; x++) {
            const liElement = document.createElement('li');
            liElement.textContent = arrayNomes[x];
            lista.appendChild(liElement);
        }
    }

    function ordenarLista() {
        arrayNomes.sort();
        renderizarLista();
    }

    function reverterLista() {
        arrayNomes.reverse();
        renderizarLista();
    }


    btnAdd.addEventListener('click', function (e){
        e.preventDefault();
        addNome(inputNome.value);
    });

    btnOrdenar.addEventListener('click', function (e) {
        ordenarLista();
    })

    btnReverter.addEventListener('click', function (e) {
        reverterLista();
    })

});