import { gameData } from "../core/gameState";
import { setTwo } from "../core/logic";
import { slideDown, slideLeft, slideRight, slideUp } from "./slide";

export function keyEvents(){
    document.addEventListener('keyup',(e:KeyboardEvent)=>{
        if(gameData.gameWon) return;
        if(e.code==='ArrowLeft'){
          slideLeft();
          setTwo();
        }
        else if(e.code==='ArrowRight'){
          slideRight();
          setTwo();
        }
        else if(e.code==='ArrowUp'){
          slideUp();
          setTwo();
        }
        else{
          slideDown();
          setTwo();
        }
    })
}
