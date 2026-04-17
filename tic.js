// let cells = document.querySelectorAll(".togloh");
// let currentPlayer = "X";
// let gameActive = true;
// // score
// let scoreX = 0;
// let scoreO = 0;
// let drawScore = 0;

// let playerXScore = document.querySelector("#playerx .score");
// let playerOScore = document.querySelector("#playero .score");
// let drawText = document.querySelector("#draw .score");
// const winConditions = [
//   [0,1,2],
//   [3,4,5],
//   [6,7,8],
//   [0,3,6],
//   [1,4,7],
//   [2,5,8],
//   [0,4,8],
//   [2,4,6]
// ];
// cells.forEach((cell, index) => {
//   cell.addEventListener("click", () => handleClick(cell, index));
// });
// function handleClick(cell, index) {
//   if (cell.innerHTML !== "" || !gameActive) return;
//   cell.innerHTML = currentPlayer;
//   if (checkWinner()) {
//     if (currentPlayer === "X") {
//       scoreX++;
//       playerXScore.innerHTML = scoreX;
//     } else {
//       scoreO++;
//       playerOScore.innerHTML = scoreO;
//     }
//     gameActive = false;
//     setTimeout(resetGame, 1000);
//     return;
//   }
//   if (checkDraw()) {
//     drawScore++;
//     drawText.innerHTML = drawScore;
//     gameActive = false;
//     setTimeout(resetGame, 1000);
//     return;
//   }
//   currentPlayer = currentPlayer === "X" ? "O" : "X";
// }
// function checkWinner() {
//   for (let i = 0; i < winConditions.length; i++) {
//     let [a, b, c] = winConditions[i];
//     if (
//       cells[a].innerHTML !== "" &&
//       cells[a].innerHTML === cells[b].innerHTML &&
//       cells[a].innerHTML === cells[c].innerHTML
//     ) {
//       return true;
//     }
//   }
//   return false;
// }

// function checkDraw() {
//   return [...cells].every(cell => cell.innerHTML !== "");
// }

// function resetGame() {
//   cells.forEach(cell => (cell.innerHTML = ""));
//   currentPlayer = "X";
//   gameActive = true;
// }

// let songoh = document.querySelectorAll(".togloh");
// let toglogch = "X";
// songoh.forEach((button) => {
//   button.addEventListener("click", () => {
//     if (button.innerHTML !== "") return;
//     button.innerHTML = toglogch;
//     if (hojih()) {
//       alert(toglogch + " Hojloo");
//       tseverleh();
//       return;
//     }
//     if (toglogch === "X") {
//       toglogch = "O";
//     } else {
//       toglogch = "X";
//     }
//   });
// });

// const hojil = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];

// let hojilshalgah = document.querySelectorAll(".togloh");
// function hojih() {
//   for (let i = 0; i < hojil.length; i++) {
//     let [a, b, c] = hojil[i];
//     if (
//       hojilshalgah[a].innerHTML !== "" &&
//       hojilshalgah[a].innerHTML === hojilshalgah[b].innerHTML &&
//       hojilshalgah[a].innerHTML === hojilshalgah[c].innerHTML
//     ) {
//       return true;
//     }
//   }
//   return false;
// }

// function tseverleh() {
//   songoh.forEach((button) => {
//     button.innerHTML = "";
//   });
// }

let cells = document.getElementsByClassName("togloh");
let start = document.querySelector(".ehluuleh");
let count = 1;
let gameOver = false;

let xScore = document.querySelector("#playerx .score");
let oScore = document.querySelector("#playero .score");
let drawScore = document.querySelector("#draw .score");

let x = 0;
let o = 0;
let draw = 0;

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function () {
    addXandO(i);
  });
}
let wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function addXandO(index) {
  let cell = cells[index];
  if (gameOver) {
    return;
  }
  if (cell.textContent !== "") {
    return;
  }
  if (count % 2 === 0) {
    cell.textContent = "O";
    cell.classList.remove("blue");
    cell.classList.add("yellow");
  } else {
    cell.textContent = "X";
    cell.classList.remove("yellow");
    cell.classList.add("blue");
  }
  for (let i = 0; i < wins.length; i++) {
    let [a, b, c] = wins[i];

    if (
      cells[a].textContent !== "" &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      cells[a].style.color = "red";
      cells[b].style.color = "red";
      cells[c].style.color = "red";
      if (cells[a].textContent === "X") {
        x++;
        xScore.textContent = x;
      } else {
        o++;
        oScore.textContent = o;
      }
      alert(cells[a].textContent + " Hojloo");
      gameOver = true;
      return;
    }
  }
  let isDraw = true;

  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === "") {
      isDraw = false;
      break;
    }
  }

  if (isDraw && !gameOver) {
    draw++;
    drawScore.textContent = draw;
    alert("Draw!");
    gameOver = true;
  }
  count++;
}

start.addEventListener("click", function () {
  resetGame();
});
function resetGame() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
    cells[i].style.color = "";
    cells[i].classList.remove("blue");
    cells[i].classList.remove("yellow");
  }

  count = 1;
  gameOver = false;
}
