let availableChoices = ['', '', '', '', '', '', '', '', ''];

export default function addUserClick() {
  const availableBoxes = document.querySelectorAll(".hidden-input-label");

  availableBoxes.forEach(availableBox => {
    availableBox.addEventListener("click",event =>  handleUserClick(event))
  })
}

function handleUserClick(event) {
  const inputTrigged = event.target;
  
  if(inputTrigged.id) {
    const arrayPositionToFill = +inputTrigged.id.match(/\d/g);

    availableChoices[arrayPositionToFill] = "X"
  }
}
