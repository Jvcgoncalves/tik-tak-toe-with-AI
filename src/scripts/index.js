import addInputHandler from "./handleInput/handleInputFunction.js";
import addUserClick, { addResetGame } from "./handleUserClick/handleUserClick.js";
import addStartGame from "./startGame/startGame.js";

function initFunctions() {
  addInputHandler();
  addUserClick();
  addStartGame();
  addResetGame();
}

initFunctions();