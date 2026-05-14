import { gameData } from "./core/gameState";
import { setTwo } from "./core/logic";
import { renderBoard } from "./ui/render";
import { keyEvents } from "./utils/keyEvent";

window.onload=function(){
  renderBoard(gameData.board);
  setTwo();
  setTwo();
  keyEvents();
}