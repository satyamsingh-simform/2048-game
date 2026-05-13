import { board } from "../core/board";
import { slide } from "../core/logic";
import { getElement } from "../ui/dom";
import { updateCell } from "../ui/render";
import { COL, ROW } from "./constant";

export function slideLeft(){
  for(let r=0;r<ROW;r++){
    board[r]=slide(board[r]);
    for (let c = 0; c < COL; c++){
      let cell = getElement(`${r}-${c}`);
      if(!(cell instanceof HTMLDivElement)) return;
      let num = board[r][c];
      updateCell(cell, num);
    }
  }
}
export function slideRight(){
    for (let r = 0; r < ROW; r++) {
        let row = board[r];         //[0, 2, 2, 2]
        row.reverse();              //[2, 2, 2, 0]
        row = slide(row)            //[4, 2, 0, 0]
        board[r] = row.reverse();   //[0, 0, 2, 4];
        for (let c = 0; c < COL; c++){
          let cell = getElement(`${r}-${c}`);
          if(!(cell instanceof HTMLDivElement)) return;
          let num = board[r][c];
          updateCell(cell, num);
        }
    }
}
export function slideUp(){
    for (let c = 0; c < COL; c++){
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
        row = slide(row);
        for (let r = 0; r < ROW; r++){
            board[r][c] = row[r];
            let cell = getElement(`${r}-${c}`);
            if(!(cell instanceof HTMLDivElement)) return;
            let num = board[r][c];
            updateCell(cell, num);
        }
    }
}
export function slideDown(){
    for (let c = 0; c < COL; c++){
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
        row.reverse();
        row = slide(row);
        row.reverse();

        for (let r = 0; r < ROW; r++){
            board[r][c] = row[r];
            let cell = getElement(`${r}-${c}`);
            if(!(cell instanceof HTMLDivElement)) return;
            let num = board[r][c];
            updateCell(cell, num);
        }
    }
}
