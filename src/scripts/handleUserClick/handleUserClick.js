let availableChoices = ['', '', '', '', '', '', '', '', ''];
const availableBoxes = document.querySelectorAll(".hidden-input-label");

export default function addUserClick() {
  availableBoxes.forEach(availableBox => {
    availableBox.addEventListener("click",event =>  handleUserClick(event))
  })
}

function handleUserClick(event) {
  const labelTrigged = event.target;
  const inputFromLabel = document.getElementById(`box-${+labelTrigged.htmlFor.match(/\d/g)}`);

  if(inputFromLabel) {
    const arrayPositionToFill = +inputFromLabel.id.match(/\d/g);

    inputFromLabel.setAttribute("disabled", true);
    availableChoices[arrayPositionToFill] = "X";
    labelTrigged.innerText = "X";
  }
}

export function addResetGame() {
  const resetButton = document.getElementById("reset-button");

  resetButton.addEventListener("click", () => {
    availableChoices = ['', '', '', '', '', '', '', '','']

    availableBoxes.forEach(box => box.innerText = "")
  })
}