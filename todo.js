const taskList = [
    {
        todo: "First Task",
    }
];

function showCurrentTask() {
    const list = document.getElementById("todoList");
    list.innerHTML = '';

    taskList.forEach((element, index) => {
        const listItem = document.createElement("li");
        listItem.className = "listItemIdLi"
        listItem.textContent = element.todo;

        const buttonItem = document.createElement("button");
        buttonItem.id = "buttonItemdDelete"
        buttonItem.textContent = "Delete";
        buttonItem.onclick = () => updateTodoList('delete', index);

        listItem.appendChild(buttonItem);
        list.appendChild(listItem);
    });
}

function addTaskToData(newTask) {
    taskList.push({ todo: newTask });
    showCurrentTask();
}

function updateTodoList(action, index) {
    if (action === 'delete') {
        taskList.splice(index, 1);
        showCurrentTask();
    }
}

document.getElementById("addTaskButton").addEventListener("click", () => {
    const input = document.getElementById("taskInput").value;
    if (input.trim() !== "") {
        addTaskToData(input);
        document.getElementById("taskInput").value = ''; 
    }
});

showCurrentTask();
