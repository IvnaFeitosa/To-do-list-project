
const cleanListButton = document.querySelector("#clear-list")
cleanListButton.addEventListener('click', clearList)

function addNewTask() {
    let list = document.getElementById("list");
    let text = document.getElementById("task-name").value;
    if (text.length === 0) {
        alert("Não há nada para adicionar. Insira uma tarefa");
        return
    } 
    let listItem = document.createElement("li");
    listItem.className= "list-item";
    //listItem.classList.add('list-item');

    //const textElement = document.createTextNode(text);
    
    listItem.innerHTML = text
    

    //Adiciona o elemento ao documento
    //document.querySelector('#list').appendChild(listItem);
    list.appendChild(listItem);
    listItem.appendChild(createDeleteButton());
    //listItem.appendChild(textElement);
    clearInputField();

}

function createDeleteButton(){
    const deleteButton = document.createElement("button")
    deleteButton.innerHTML = "Apagar tarefa"
    deleteButton.className = "delete-task-button"
    deleteButton.addEventListener('click', deleteItem)
    return deleteButton;
    
}
function deleteItem(event) {
    list.removeChild(event.srcElement.parentNode)
}

function clearInputField(){
    let input = document.querySelector("#task-name")
    input.value =''
}

function clearList() {
    list.innerHTML = ''
}