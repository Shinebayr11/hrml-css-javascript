// function nemeh(a, b) {
//   console.log(a + b);
// }
// function hasah(a, b) {
//   console.log(a - b);
// }
// function urjih(a, b) {
//   console.log(a * b);
// }
// function huwaah(a, b) {
//   console.log(a / b);
// }
// nemeh(5, 6);
// hasah(10, 3);
// urjih(4, 6);
// huwaah(29, 1);

// let name = prompt("Ta neree oruulna uu");
// console.log(name);
// let nas = prompt(`${name} Ta nasaa oruulna uu`);
// console.log(nas);
// let uildelsongoh = prompt(
//   "Ta ymar uildel hiimer baina we. \na.+ \nb.- \nc.* \nd./",
// );
// let a = prompt("Ta a too oruulna uu ");
// let b = prompt("Ta b too oruulna uu");

// if (uildelsongoh === "a") {
//   nemeh(a, b);
// } else if (uildelsongoh === "b") {
//   hasah(a, b);
// } else if (uildelsongoh === "c") {
//   urjih(a, b);
// } else if (uildelsongoh === "d") {
//   huwaah(a, b);
// }
// function nemeh(a, b) {
//   console.log(Number(a) + Number(b));
// }
// function hasah(a, b) {
//   console.log(Number(a) - Number(b));
// }
// function urjih(a, b) {
//   console.log(Number(a) * Number(b));
// }
// function huwaah(a, b) {
//   console.log(Number(a) / Number(b));
// }
// 4/14

// let greet = sayhello("Shinee");
// function sayhello(name) {
//   return "Hello " + name;
// }
// console.log(greet);

// function usegsolih(useghaih, usegsolih, ug) {
//   let string = "";
//   let usegorson = false;
//   for (let i = 0; i < ug.length; i++) {
//     if (ug[i] === useghaih && !usegsolih) {
//       string += usegsolih;
//       usegorson = true;
//     } else {
//       string += ug[i];
//     }
//   }
//   console.log(string);
// }
// usegsolih("e", "a", "Shinee");
// // ("e", "a", "Hello")

// let hairtsag = document.getElementById("box");
// hairtsag.innerHTML = "<h4>Hello world</h4>";

// let message = document.getElementById("greeting");
// message.textContent += " Sain sain uu";
// let order = document.getElementById("zahialga");
let order = document.querySelector("#zahialga");

function chiher() {
  ongo1.style.backgroundColor = "rgb(243, 175, 238)";
  ongo2.style.backgroundColor = "rgb(243, 175, 238)";
  order.innerHTML = "<p>🍬Таны чихэрний захиалгыг хүлээж авлаа!</p>";
  ongo.style.backgroundColor = "white";
}
function byluu() {
  ongo.style.backgroundColor = "rgb(243, 175, 238)";
  ongo2.style.backgroundColor = "rgb(243, 175, 238)";
  order.innerHTML = "<p>🎂Таны бялууны захиалгыг хүлээж авлаа!</p>";
  ongo1.style.backgroundColor = "white";
}
function zairmag() {
  ongo.style.backgroundColor = "rgb(243, 175, 238)";
  ongo1.style.backgroundColor = "rgb(243, 175, 238)";
  order.innerHTML = "<p>🍦Зайрмаг удахгүй ирнэ </p>";
  ongo2.style.backgroundColor = "white";
}
let ongo = document.getElementById("button");
let ongo1 = document.getElementById("button1");
let ongo2 = document.getElementById("button2");
