export default function addStartGame() {
  const startButton = document.getElementById("start-button");
  const avaiblableInputs =document.querySelectorAll(".available-box-input");

  startButton.addEventListener("click", () => {
    startButton.setAttribute("disabled", true);
    
    avaiblableInputs.forEach(input => {
      input.removeAttribute("disabled")
    })
  })
}