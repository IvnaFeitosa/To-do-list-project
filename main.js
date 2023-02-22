
// Adiciona tarefa ao apertar Enter
document.addEventListener('keyup', (event) => {
    const addTaskButton = document.querySelector("#add-task")
    if (event.keyCode === 13) {
        addTaskButton.click()
    }
})

const list = document.querySelector("#list")
const cleanListButton = document.querySelector("#clear-list")
cleanListButton.addEventListener('click', clearList)

function addNewTask() {
    // Pega texto e valida se está preenchido
    let text = document.getElementById("task-name").value;   
    if (text.length === 0) {
        alert("Insira uma descrição para a tarefa")
        return
    } 

    // Cria elemento li e adiciona atributos necessários
    let listItem = document.createElement("li");
    listItem.className = "list-item";
    listItem.id = listLength() + 1
    listItem.innerHTML = text

    // Adiciona botão para apagar tarega junto com li recém criado.
    listItem.appendChild(createDeleteButton())

    // Adiciona li recém criado à lista.
    list.appendChild(listItem);
    clearInputField()
}

function clearInputField() {
    let input = document.querySelector("#task-name")
    input.value = ''
}

function listLength() {
    return list.children.length
}

function createDeleteButton() {
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'Apagar tarefa'
    deleteButton.className = 'delete-task-button'
    deleteButton.addEventListener('click', deleteItem)
    
    return deleteButton
}

function deleteItem(event) {
    list.removeChild(event.srcElement.parentNode)
}

function clearList() {
    list.innerHTML = ''
}