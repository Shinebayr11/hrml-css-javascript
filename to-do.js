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
// let input = document.getElementById("input");
// let tasks = document.getElementById("tasks");

// function addtask() {
//   let text = input.value;
//   if(text === "") return;
//   let p = document.createElement("p");
//   tasks.appendChild(p);
//   input.value = "";

// }


// let addtext = document.getElementById("Add");
// addtext.addEventListener("click", addtext)



let input = document.getElementById("input");
let tasks = document.getElementById("tasks");
let btn = document.getElementById("Add");

btn.addEventListener("click", addtext);

function addtext() {
  let text = input.value;

  if (text === "") return;

  let p = document.createElement("p");
  p.textContent = text;

  tasks.appendChild(p); // 

  input.value = "";
}


