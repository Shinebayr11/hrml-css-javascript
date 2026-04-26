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

// let bichwer = document.getElementById("tasks");
// let input = document.getElementById("input");

// function addtext() {
//   let text = input.value;
//   bichwer.appendChild(document.createElement("div"));
//   bichwer.textContent = text;
// }

// let input = document.getElementById("input");
// let tasks = document.getElementById("tasks");

// function addtext() {
//   let text = input.value;
//   if(value=== "") return;

//   let li = document.createElement("li");
//   let checkbox = document.createElement("input");
//   checkbox.type = "checkbox";

//   li.appendChild(checkbox) ; 
//   li.append(" " + text);

//   tasks.appendChild(li);
//   input.value = "";

// }



// let input = document.getElementById("input");
// let tasks = document.getElementById("tasks");

// function addtext() {
//   let text = input.value;
//   if (text === "") return;

//   let li = document.createElement("li");
//   let checkbox = document.createElement("input");

//   checkbox.type = "checkbox";

//   li.appendChild(checkbox);   // 👈 эхлээд checkbox
//   li.append(" " + text);      // 👈 дараа нь текст

//   tasks.appendChild(li);

//   input.value = "";           // 👈 цэвэрлэнэ
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
