

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

let songoh = document.querySelectorAll(".togloh");
let toglogch = "X"
songoh.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.innerHTML !== "") return
      button.innerHTML = toglogch;
      if (toglogch ==="X") {
        toglogch = "O"
      }else {
        toglogch = "X"
      }
    });
  });


