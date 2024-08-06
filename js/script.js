document.addEventListener('DOMContentLoaded', () => {
    let formulario = document.getElementById('formulario');
    let listaNomes = document.getElementById('listaNomes');
    let ordenarBtn = document.getElementById('ordenar');
    let reverterBtn = document.getElementById('reverter');
    let nomes = [];

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();
        let nome = document.getElementById('nome').value;
        if (nome) {
            nomes.push(nome);
            document.getElementById('nome').value = '';
            atualizarLista();
        }
    });

    ordenarBtn.addEventListener('click', () => {
        nomes.sort();
        atualizarLista();
    });

    reverterBtn.addEventListener('click', () => {
        nomes.reverse();
        atualizarLista();
    });

    function atualizarLista() {
        listaNomes.innerHTML = '';
        for (let nome of nomes) {
            let li = document.createElement('li');
            li.textContent = nome;
            listaNomes.appendChild(li);
        }
    }
});

function irproexum() {
    window.location.href = "../exercicio-01-arrays.html";
}