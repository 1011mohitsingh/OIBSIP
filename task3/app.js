let addTaskButton = document.getElementById("addTaskButton");
let taskInput = document.getElementById("taskInput");
let pendingTasksUl = document.getElementById("pendingTasks");
let completedTasksUl = document.getElementById("completedTasks");

addTaskButton.addEventListener("click", function() {
    let taskText = taskInput.value;
    if (taskText) {
        addTask(taskText, new Date().toLocaleString(), false);
        taskInput.value = "";
    }
});

function addTask(taskText, timestamp, isCompleted) {
    let taskItem = document.createElement("li");

    let taskDetails = document.createElement("div");
    taskDetails.classList.add("task-details");
    taskDetails.innerHTML = `<strong>${taskText}</strong><br>Added on ${timestamp}`;

    let buttonContainer = document.createElement("div");

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete");

    if (!isCompleted) {
        let editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.classList.add("edit");

        let completeButton = document.createElement("button");
        completeButton.innerText = "Complete";
        completeButton.classList.add("complete");

        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(completeButton);
    }

    buttonContainer.appendChild(deleteButton);

    taskItem.appendChild(taskDetails);
    taskItem.appendChild(buttonContainer);

    if (isCompleted) {
        completedTasksUl.appendChild(taskItem);
    } else {
        pendingTasksUl.appendChild(taskItem);
    }
}

pendingTasksUl.addEventListener("click", function(event) {
    if (event.target.classList.contains("complete")) {
        let taskItem = event.target.parentElement.parentElement;
        let taskText = taskItem.querySelector("strong").innerText;
        taskItem.remove();
        addTask(taskText, new Date().toLocaleString(), true);
    } else if (event.target.classList.contains("delete")) {
        event.target.parentElement.parentElement.remove();
    } else if (event.target.classList.contains("edit")) {
        let taskItem = event.target.parentElement.parentElement;
        let taskText = taskItem.querySelector("strong").innerText;
        taskInput.value = taskText;
        taskItem.remove();
    }
});

completedTasksUl.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.parentElement.remove();
    }
});
