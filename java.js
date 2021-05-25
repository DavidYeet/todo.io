var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);

function addToDoItem() {
  alert("Add button clicked!");
}

var clearButton = document.getElementById("clear-completed-button");
addButton.addEventListener("click", clearCompletedToDoItems);

function addToDoItem() {
  alert("Clear button clicked!");
}

var emptyButton = document.getElementById("empty-button");
addButton.addEventListener("click", emptyList);

function addToDoItem() {
  alert("Empty button clicked!");
}

var saveButton = document.getElementById("save-button");
addButton.addEventListener("click", saveList);

function addToDoItem() {
  alert("Save button clicked!");
}

var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");

function newToDoItem(itemText, completed) {
  var toDoItem = document.createElement("li");
  var toDoText = document.createTextNode(itemText);
  toDoItem.appendChild(toDoText);

  if (completed) {
    toDoItem.classList.add("completed");
  }

  toDoList.appendChild(toDoItem);
  toDoItem.addEventListener("dblclick", toggleToDoItemState);
}

function addToDoItem() {
  var itemText = toDoEntryBox.value;
  newToDoItem(itemText, false);
}

function toggleToDoItemState() {
  if (this.classList.contains("completed")) {
    this.classList.remove("completed");
  } else {
    this.classList.add("completed");
  }
}
