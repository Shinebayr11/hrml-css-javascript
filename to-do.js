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

function addtask() {}
