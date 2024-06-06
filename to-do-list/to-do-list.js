let tasks = [];

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.map((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    li.className = "taskItem";
    li.addEventListener("click", () => toggleTask(index));
    taskList.appendChild(li);
  });
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    tasks.push(taskText);
    taskInput.value = "";
    renderTasks();
  }
}

function toggleTask(index) {
  tasks[index] = tasks[index].startsWith("✓ ") ? tasks[index].substring(2) : "✓ " + tasks[index];
  renderTasks();
}

renderTasks();
