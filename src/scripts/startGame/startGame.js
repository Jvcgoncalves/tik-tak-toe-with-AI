export default function addStartGame() {
  const startButton = document.getElementById("start-button");
  const avaiblableInputs =document.querySelectorAll(".available-box-input");

  startButton.addEventListener("click", () => {
    console.log("trigged")
    console.log(avaiblableInputs)
    avaiblableInputs.forEach(input => {
      input.removeAttribute("disabled")
    })
  })
}