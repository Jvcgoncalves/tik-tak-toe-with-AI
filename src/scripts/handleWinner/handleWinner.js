export default function checkWinner(boardArray, currentPlayer) {
  const line1 = boardArray[0];
  const line2 = boardArray[1];
  const line3 = boardArray[2];

  console.log({line1, line2, line3})
  
  if(line1[1] !== 0 && line1[0] === line1[1] && line1[1] === line1[2]) {
    showWinner(currentPlayer, [0,1,2]);
    return true;
  } else if(line1[0] !== 0 && line1[0] === line2[0] && line2[0] === line3[0]) {
    showWinner(currentPlayer, [0,3,6]);
    return true;
  } else if(line1[1] !== 0 && line1[1] === line2[1] && line2[1] === line3[1]) {
    showWinner(currentPlayer, [1,4,7]);
    return true;
  } else if(line2[2] !== 0 &&  line1[2] === line2[2] && line2[2] === line3[2]) {
    showWinner(currentPlayer, [2,5,8]);
    return true;
  } else if(line2[1] !== 0 && line1[0] === line2[1] && line2[1] === line3[2]) {
    showWinner(currentPlayer, [0,4,8]);
    return true;
  } else if(line2[1] !== 0 && line1[2] === line2[1] && line2[1] === line3[0]) {
    showWinner(currentPlayer, [2,4,6]);
    return true;
  } else if(line2[1] !== 0 && line2[0] === line2[1] && line2[1] === line2[2]) {
    showWinner(currentPlayer, [3,4,5]);
    return true;
  } else if(line3[1] !== 0 && line3[0] === line3[1] && line3[1] === line3[2]) {
    showWinner(currentPlayer, [6,7,8]);
    return true;
  }
}

function showWinner(currentPlayer, positionToFill) {
  const availableBoxes = document.querySelectorAll(".hidden-input-label");

  const winnerDiv = document.getElementById("winner");
  
  positionToFill.forEach(position => {
    availableBoxes[position].classList.add("win")
  })

  winnerDiv.classList.remove("d-none");
  winnerDiv.firstChild.textContent = currentPlayer === 1 ? "Venceu o robozão :)" : "Perdeu para o robozão :("
}