function addNewTask() {
    let list = document.getElementById("list");
    let text = document.getElementById("task-name").value;
    let listItem = document.createElement("li");
    listItem.className = "list-item";

    const textElement = document.createTextNode(text);
    listItem.appendChild(textElement);
    listItem.appendChild(list);
}