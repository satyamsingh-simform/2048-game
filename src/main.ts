import { setGame } from "./core/game"
import { setTwo } from "./core/logic";
import { keyEvents } from "./utils/keyEvent";

window.onload=function(){
  setGame();
  setTwo();
  setTwo();
  keyEvents();
}