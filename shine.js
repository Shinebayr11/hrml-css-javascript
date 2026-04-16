// let currentCountred = 50;
// let currentCountblue = 50;

// let red = document.querySelector("#box1");
// let blue = document.querySelector("#box2");

// function ulaan() {
//   currentCountblue--;
//   currentCountred++;
//   red.textContent = `${currentCountred}%`;
//   red.style.width = `${currentCountred}%`;
//   blue.textContent = `${currentCountblue}%`;
//   blue.style.width = `${currentCountblue}%`;
// }

// function tsenher() {
//   currentCountblue++;
//   currentCountred--;
//   red.textContent = `${currentCountred}%`;
//   red.style.width = `${currentCountred}%`;
//   blue.textContent = `${currentCountblue}%`;
//   blue.style.width = `${currentCountblue}%`;
// }
// document.addEventListener("keydown", function (event) {
//   if (event.key === "ArrowRight") {
//     ulaan();
//   }

//   if (event.key === "ArrowLeft") {
//     tsenher();
//   }
// });

// let asaah = false;
// function towchluur() {
//   let gerelasah = document.querySelector("#gerel");
//   if (asaah) {
//     gerelasah.innerHTML = <img src="./light-on.gif" alt=""></img>;
//     asaah = false;
//   } else {
//     gerelasah.innerHTML = <img src="./light-on.gif" alt=""></img>;
//   }
// }
let lightOff = document.querySelector("#lightOff");
let lightOn = document.querySelector("#lightOn");

function onOff() {
  if (lightOff.style.display != "none") {
    lightOff.style.display = "none";
    lightOn.style.display = "block";
  } else {
    lightOn.style.display = "none";
    lightOff.style.display = "block";
  }
}
