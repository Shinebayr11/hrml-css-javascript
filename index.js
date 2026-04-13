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

let name = prompt("Ta neree oruulna uu");
console.log(name);
let nas = prompt(`${name} Ta nasaa oruulna uu`);
console.log(nas);
let a = prompt("Ta a too oruulna uu ");
let b = prompt("Ta b too oruulna uu");
let uildelsongoh = prompt(
  "Ta ymar uildel hiimer baina we. \na.+ \nb.- \nc.* \nd./",
);
if (uildelsongoh === "a") {
  nemeh(a, b);
} else if (uildelsongoh === "b") {
  hasah(a, b);
} else if (uildelsongoh === "c") {
  urjih(a, b);
} else if (uildelsongoh === "d") {
  huwaah(a, b);
}
function nemeh(a, b) {
  console.log(Number(a) + Number(b));
}
function hasah(a, b) {
  console.log(Number(a) - Number(b));
}
function urjih(a, b) {
  console.log(Number(a) * Number(b));
}
function huwaah(a, b) {
  console.log(Number(a) / Number(b));
}
