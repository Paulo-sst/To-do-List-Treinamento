function adicionarTarefa() {
    let valorDoInput = document.querySelector('#tarefa').value;  // Captura o valor do input
    if (valorDoInput.trim() !== "") {  // Verifica se o campo não está vazio
        let li = document.createElement('li');  // Cria um novo item de lista
        li.innerHTML = valorDoInput + ' <span onclick="deletarTarefa(this)">❌</span>';  // Adiciona o ícone de exclusão
        document.querySelector('#lista-tarefas').appendChild(li);  // Adiciona o item à lista
        document.querySelector('#tarefa').value = '';  // Limpa o campo de entrada
    } else {
        console.log("O campo de tarefa está vazio.");
    }
}

function deletarTarefa(elemento) {
    console.log("deletar tarefa");
    elemento.parentElement.remove();  // Remove o item de lista associado ao ícone de exclusão
}
