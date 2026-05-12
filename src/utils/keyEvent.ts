import { gameWon, setTwo } from "../core/logic";
import { slideDown, slideLeft, slideRight, slideUp } from "./slide";

export function keyEvents(){
    document.addEventListener('keyup',(e:KeyboardEvent)=>{
        if(gameWon) return;
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
