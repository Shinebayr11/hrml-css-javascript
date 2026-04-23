let ongo = document.querySelector("#All");
let ongo1 = document.querySelector("#Active");
let ongo2 = document.querySelector("#Complete");

function filterList() {
  ongo1.style.backgroundColor = "white";
  ongo2.style.backgroundColor = "white";
  ongo.style.backgroundColor = "#3c82f6";
}
function filterList(active) {
  ongo.style.backgroundColor = "white";
  ongo2.style.backgroundColor = "white";
  ongo1.style.backgroundColor = "#3c82f6";
}
function filterList(completed) {
  ongo.style.backgroundColor = "white";
  ongo1.style.backgroundColor = "white";
  ongo2.style.backgroundColor = "#3c82f6";
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

let lists = [];
let input = document.getElementById("input");
let tasks = document.getElementById("tasks");

function addtext() {
  let text = input.value;
  if (text === "") return;

  lists.push({ tasklist: input.value, isCompleted: false });
  renderList();
  input.value = "";
}

function renderList() {
  tasks.innerHTML = "";
  for (let i = 0; i < lists.length; i++) {
    let list = lists[i];

    let checkbox = document.createElement("input");
    let tasksDiv = document.createElement("div");
    tasksDiv.className = "tasksdiv";
    let p = document.createElement("p");
    p.className = "ptext";
    p.textContent = list.tasklist;

    let delButton = document.createElement("button");
    delButton.className = "delButton";
    delButton.textContent = "delete";

    checkbox.type = "checkbox";
    checkbox.checked = list.isCompleted;
    checkbox.addEventListener("click", function () {
      list.isCompleted = !list.isCompleted;
    });
    tasks.appendChild(tasksDiv);
    tasksDiv.appendChild(checkbox);
    tasksDiv.appendChild(p);
    tasksDiv.appendChild(delButton);
  }
}

function filterList(btnvalue) {
  tasks.innerHTML = "";

  for (let i = 0; i < lists.length; i++) {
    let list = lists[i];

    if (
      btnvalue === "all" ||
      (btnvalue === "active" && !list.isCompleted) ||
      (btnvalue === "completed" && list.isCompleted)
    ) {
      let checkbox = document.createElement("input");
      let tasksDiv = document.createElement("div");
      tasksDiv.className = "tasksdiv";

      let p = document.createElement("p");
      p.className = "ptext";
      p.textContent = list.tasklist;

      let delButton = document.createElement("button");
      delButton.className = "delButton";
      delButton.textContent = "delete";

      checkbox.type = "checkbox";
      checkbox.checked = list.isCompleted;

      checkbox.addEventListener("click", function () {
        list.isCompleted = checkbox.checked;
      });
      delButton.addEventListener("click", function () {
        lists.splice(i, 1);
        renderList();
      });

      tasks.appendChild(tasksDiv);
      tasksDiv.appendChild(checkbox);
      tasksDiv.appendChild(p);
      tasksDiv.appendChild(delButton);
    }
  }
}
