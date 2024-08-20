export default function addInputHandler() {
  const userNameInput = document.getElementById("username");
  const startButton = document.getElementById("start-button");

  userNameInput.addEventListener("input", () => {
    if(userNameInput.value.length >= 1) {
      startButton.removeAttribute("disabled");
    } else {
      startButton.setAttribute("disabled", true);
    }
  });
}