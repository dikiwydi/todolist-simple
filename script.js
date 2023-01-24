// Get references to the form elements
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-button");
const taskList = document.getElementById("task-list");

// Add a new task to the list when the add task button is clicked
addTaskButton.addEventListener("click", function() {
  const taskText = taskInput.value;
  if (taskText === "") {
    return;
  }
  const task = createTaskElement(taskText);
  taskList.appendChild(task);
  taskInput.value = "";
});

// Create a new task element
function createTaskElement(taskText) {
  const task = document.createElement("li");
  task.classList.add("task");

  const taskContent = document.createElement("span");
  taskContent.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.addEventListener("click", function() {
    taskList.removeChild(task);
  });

  task.appendChild(taskContent);
  task.appendChild(deleteButton);
  return task;
}
