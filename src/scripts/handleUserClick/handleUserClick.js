import checkWinner from "../handleWinner/handleWinner.js";

let availableChoices = [
  [0,0,0],
  [0,0,0],
  [0,0,0],
];

const availableBoxes = document.querySelectorAll(".hidden-input-label");

let currentPlayer = 1;

export default function addUserClick() {
  availableBoxes.forEach(availableBox => {
    availableBox.addEventListener("click", handleUserClick)
  })
}

function handleUserClick(event) {
  const labelTrigged = event.target;
  const inputFromLabel = document.getElementById(`box-${+labelTrigged.htmlFor.match(/\d/g)}`);
  
  if(inputFromLabel && !inputFromLabel.hasAttribute("disabled")) {
    const arrayPositionToFill = inputFromLabel.dataset.boardPosition.split(".");
    const [line, column] = arrayPositionToFill;

    inputFromLabel.setAttribute("disabled", true);
    
    availableChoices[line][column] = currentPlayer === 1 ? 1 : 2;
    labelTrigged.innerText = currentPlayer === 1 ? "X" : "O";
    labelTrigged.removeEventListener("click", handleUserClick);

    if(checkWinner(availableChoices, currentPlayer)) {
      return;
    }

    currentPlayer = currentPlayer === 1 ? 2 : 1;
  }
}

export function addResetGame() {
  const winnerMessage = document.getElementById("winner");
  const startButton = document.getElementById("start-button");
  const resetButton = document.getElementById("reset-button");

  currentPlayer = 1;

  resetButton.addEventListener("click", () => {
    availableChoices = [
      [0,0,0],
      [0,0,0],
      [0,0,0],
    ];

    if(!winnerMessage.classList.contains("d-none")) {
      winnerMessage.classList.add("d-none")
    }

    availableBoxes.forEach(box => box.innerText = "")

    availableBoxes.forEach(availableBox => {
      availableBox.addEventListener("click", handleUserClick);
      availableBox.classList.remove("win")
    })

    startButton.removeAttribute("disabled");
  })
}