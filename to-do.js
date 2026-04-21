// let ongo = document.querySelector("#All");
// let ongo1 = document.querySelector("#Active");
// let ongo2 = document.querySelector("#Complete");

// function allBtn() {
//   ongo1.style.backgroundColor = "white";
//   ongo2.style.backgroundColor = "white";
//   ongo.style.backgroundColor = "#3c82f6";
// }
// function active() {
//   ongo.style.backgroundColor = "white";
//   ongo2.style.backgroundColor = "white";
//   ongo1.style.backgroundColor = "#3c82f6";
// }
// function complete() {
//   ongo.style.backgroundColor = "white";
//   ongo1.style.backgroundColor = "white";
//   ongo2.style.backgroundColor = "#3c82f6";
// }

// let bichwer = document.getElementById("tasks");
// let input = document.getElementById("input");

// function addtext() {
//   let text = input.value;
//   bichwer.appendChild(document.createElement("div"));
//   bichwer.textContent = text;
// }

let input = document.getElementById("input");
let tasks = document.getElementById("tasks");

function addtext() {
  let checkbox = document.createElement("input");
  let li = document.createElement("li");

  checkbox.type = "checkbox";
  li.textContent = input.value;

  tasks.appendChild(li);
  li.appendChild(checkbox);
}

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
