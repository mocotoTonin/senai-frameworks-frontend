const cells = document.querySelectorAll(".cell");
const restart = document.getElementById("restart");
const toastContainer = document.getElementById("toastContainer");
const xScore = document.getElementById("xScore");
const oScore = document.getElementById("oScore");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

let player1Score = 0;
let player2Score = 0;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

cells.forEach((cell) => {
  cell.addEventListener("click", handleClick);
});

restart.addEventListener("click", resetBoard);

function handleClick() {
  const index = this.dataset.index;

  if (!gameActive || board[index] !== "") return;

  board[index] = currentPlayer;

  this.textContent = currentPlayer;

  this.style.color = currentPlayer === "X" ? "#5B86C5" : "#FFFFFF";

  checkWinner();
}

function checkWinner() {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      gameActive = false;

      highlightWinner(combination);

      if (currentPlayer === "X") {
        player1Score++;

        xScore.textContent = player1Score;

        showToast("🏆 Jogador Nº1 venceu!");
      } else {
        player2Score++;

        oScore.textContent = player2Score;

        showToast("🏆 Jogador Nº2 venceu!");
      }

      return;
    }
  }

  if (!board.includes("")) {
    gameActive = false;

    showToast("🤝 Empate!");

    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function highlightWinner(combination) {
  combination.forEach((index) => {
    cells[index].classList.add("winner");
  });

  if (
    JSON.stringify(combination) === "[0,1,2]" ||
    JSON.stringify(combination) === "[3,4,5]" ||
    JSON.stringify(combination) === "[6,7,8]"
  ) {
    combination.forEach((i) => cells[i].classList.add("win-horizontal"));
  }

  if (
    JSON.stringify(combination) === "[0,3,6]" ||
    JSON.stringify(combination) === "[1,4,7]" ||
    JSON.stringify(combination) === "[2,5,8]"
  ) {
    combination.forEach((i) => cells[i].classList.add("win-vertical"));
  }
}

function resetBoard() {
  board = ["", "", "", "", "", "", "", "", ""];

  currentPlayer = "X";

  gameActive = true;

  cells.forEach((cell) => {
    cell.textContent = "";

    cell.removeAttribute("style");
  });

  showToast("🔄 Novo jogo iniciado");
}

function showToast(message) {
  const toast = document.createElement("div");

  toast.className = "toast";

  toast.innerHTML = message;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";

    toast.style.transform = "translateX(80px)";
  }, 2500);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
