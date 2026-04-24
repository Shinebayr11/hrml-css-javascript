let lists = [];
let input = document.getElementById("input");
let tasks = document.getElementById("tasks");
// let checked = document.getElementById("checked");

function addtext() {
  let text = input.value;
  if (text === "") return;

  lists.push({ tasklist: input.value, isCompleted: false });
  renderList();
  input.value = "";
  console.log(lists);
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

function setActiveButton(clickedBtn) {
  let buttons = document.getElementsByClassName("filterbutton");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  clickedBtn.classList.add("active");
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
