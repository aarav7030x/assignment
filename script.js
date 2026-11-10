function addTask() {
  const newTask = document.createElement("li");
  const taskList = document.getElementById("taskList");
  taskList.appendChild(newTask);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newTask.appendChild(checkbox);

  const taskText = document.createElement("span");
  taskText.textContent = document.getElementById("inputTask").value;
  newTask.appendChild(taskText);

  document.getElementById("inputTask").value = "";

  checkbox.onclick = function () {
    if (checkbox.checked) {
      taskText.style.textDecoration = "line-through";
    } else {
      taskText.style.textDecoration = "none";
    }
  };

  deleteTask(newTask);
}

function deleteTask(newTask) {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  newTask.appendChild(deleteBtn);
  deleteBtn.onclick = function () {
    newTask.remove();
  };
}
