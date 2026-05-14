import { gameData } from "../core/gameState";
import { slide } from "../core/logic";
import { getElement } from "../ui/dom";
import { updateCell } from "../ui/render";
import { movementAnimation } from "./animation";
import { COL, ROW } from "./constant";

export function slideLeft(){
  for(let r=0;r<ROW;r++){
    gameData.board[r]=slide(gameData.board[r]);
    for (let c = 0; c < COL; c++){
      let cell = getElement(`${r}-${c}`);
      if(!(cell instanceof HTMLDivElement)) return;
      let num = gameData.board[r][c];
      updateCell(cell, num);
      movementAnimation(cell,'move-left')
    }
  }
}
export function slideRight(){
    for (let r = 0; r < ROW; r++) {
        let row = gameData.board[r];         //[0, 2, 2, 2]
        row.reverse();              //[2, 2, 2, 0]
        row = slide(row)            //[4, 2, 0, 0]
        gameData.board[r] = row.reverse();   //[0, 0, 2, 4];
        for (let c = 0; c < COL; c++){
          let cell = getElement(`${r}-${c}`);
          if(!(cell instanceof HTMLDivElement)) return;
          let num = gameData.board[r][c];
          updateCell(cell, num);
          movementAnimation(cell,'move-right')
        }
    }
}
export function slideUp(){
    for (let c = 0; c < COL; c++){
        let row = [gameData.board[0][c], gameData.board[1][c], gameData.board[2][c], gameData.board[3][c]];
        row = slide(row);
        for (let r = 0; r < ROW; r++){
            gameData.board[r][c] = row[r];
            let cell = getElement(`${r}-${c}`);
            if(!(cell instanceof HTMLDivElement)) return;
            let num = gameData.board[r][c];
            updateCell(cell, num);
            movementAnimation(cell,'move-up')
        }
    }
}
export function slideDown(){
    for (let c = 0; c < COL; c++){
        let row = [gameData.board[0][c], gameData.board[1][c], gameData.board[2][c], gameData.board[3][c]];
        row.reverse();
        row = slide(row);
        row.reverse();

        for (let r = 0; r < ROW; r++){
            gameData.board[r][c] = row[r];
            let cell = getElement(`${r}-${c}`);
            if(!(cell instanceof HTMLDivElement)) return;
            let num = gameData.board[r][c];
            updateCell(cell, num);
            movementAnimation(cell,'move-down')
        }
    }
}
