let ongo = document.querySelector("#All");
let ongo1 = document.querySelector("#Active");
let ongo2 = document.querySelector("#Complete");

function allBtn() {
  ongo1.style.backgroundColor = "white";
  ongo2.style.backgroundColor = "white";
  ongo.style.backgroundColor = "#3c82f6";
}
function active() {
  ongo.style.backgroundColor = "white";
  ongo2.style.backgroundColor = "white";
  ongo1.style.backgroundColor = "#3c82f6";
}
function complete() {
  ongo.style.backgroundColor = "white";
  ongo1.style.backgroundColor = "white";
  ongo2.style.backgroundColor = "#3c82f6";
}

let input = document.getElementById("input");
let tasks = document.getElementById("tasks");
function addtext() {
  let text = input.value;
  if (text === "") return;

  let yet = document.getElementById("yet");
  if (yet) {
    yet.remove();
  }

  let li = document.createElement("div");
  li.className = "a";
  let checkbox = document.createElement("input");
  let delButton = document.createElement("button");
  delButton.className = "delButton";
  let task = document.createElement("p");
  task.className = "task";
  task.textContent = text;

  // li.textContent = input.value;
  checkbox.type = "checkbox";
  li.appendChild(delButton);
  li.appendChild(task);
  li.appendChild(checkbox);
  tasks.appendChild(li);

  input.value = "";
}

// function addtext() {
//   let text = input.value;
//   if (text === "") return;

// let emptyText = tasks.querySelector("p");
// if (emptyText) {
//   emptyText.remove();
// }

//   let li = document.createElement("li");
//   let checkbox = document.createElement("input");

//   checkbox.type = "checkbox";

//   li.appendChild(checkbox);
//   li.append(" " + text);

//   tasks.appendChild(li);

//   input.value = "";
// }

// const todos = [
//   {
//     taskname: "hicheelee hiih",
//     isCompeleted: false,
//   },
//   {
//     taskname: "hooloo ideh",
//     isCompeleted: true,
//   },
//   {
//     taskname: "untah",
//     isCompeleted: true,
//   },
// ];
// let box = document.getElementById("tasks");
// for (let i = 0; i < todos.length; i++) {
//   let todo = todos[i];
//   let todoHtml = `<div class="todox">
//   <input type = "checkbox"/>
//   <div>${todo.taskname}</div>
//   </div>
//    `;
//   box.innerHTML += todoHtml;
// }
