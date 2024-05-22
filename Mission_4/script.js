document.addEventListener("DOMContentLoaded", function () {
  updateTime();
  setInterval(updateTime, 60000); 
});

let tasks = [];

function updateTime() {
  const now = new Date();
  const formattedTime = now.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  document.getElementById("current-time").textContent = formattedTime;
}

function addTask() {
  const description = document.getElementById("task-desc").value;
  const priority = document.getElementById("task-priority").value;

  if (description.trim() === "") {
    alert("Task description cannot be empty");
    return;
  }

  const newTask = {
    id: Date.now(),
    description: description,
    priority: priority,
    date: new Date(),
    completed: false,
  };

  tasks.push(newTask);
  renderTasks();
  document.getElementById("task-desc").value = "";
  document.getElementById("task-priority").value = "Low";
}

function renderTasks() {
  const todoListElement = document.getElementById("todo-list");
  const doneListElement = document.getElementById("done-list");
  todoListElement.innerHTML = "";
  doneListElement.innerHTML = "";

  tasks.forEach((task) => {
    const taskElement = createTaskElement(task);
    if (task.completed) {
      doneListElement.appendChild(taskElement);
    } else {
      todoListElement.appendChild(taskElement);
    }
  });
}

function createTaskElement(task) {
  const taskElement = document.createElement("div");
  taskElement.className = "task";
  if (task.completed) taskElement.classList.add("completed");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  checkbox.onclick = () => toggleTaskCompletion(task.id);
  taskElement.appendChild(checkbox);

  const description = document.createElement("span");
  description.textContent = ` ${task.date.toLocaleString()} ${
    task.description
  }  [${task.priority}]`;
  taskElement.appendChild(description);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = () => deleteTask(task.id);
  taskElement.appendChild(deleteButton);

  return taskElement;
}

function toggleTaskCompletion(taskId) {
  const task = tasks.find((t) => t.id === taskId);
  task.completed = !task.completed;
  renderTasks();
}

function deleteTask(taskId) {
  tasks = tasks.filter((t) => t.id !== taskId);
  renderTasks();
}

function deleteAllTasks() {
  tasks = [];
  renderTasks();
}
