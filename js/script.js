//Criando um array de alunos
let alunos = ["Leticia", "Mariana","Eduarda", "Pedro","Felipe","Vitor","Enrico", "Israel", "Gustavo"];

//Recuperando a lista ul que está no HTML de id 'lista'
let lista = document.getElementById('lista');

//Preenchendo a lista com forEach
alunos.forEach((aluno)=>{
    //Criar um elemento li para ser adicionando a lista
    let elementoLi = document.createElement("li");
     //Adicionando texto ao elemento li
    elementoLi.textContent = aluno;
    lista.appendChild(elementoLi);
});
