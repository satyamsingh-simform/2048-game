import { board } from "../core/board";
import { setTwo, slide } from "../core/logic";
import { COL, LIMIT, ROW } from "../utils/constant";
import { boardEl, getElement } from "./dom";

export function renderBoard(board:number[][]){
  if(!boardEl) return;
  for(let r=0;r<ROW;r++){
    for(let c=0;c<COL;c++){
      const cell=document.createElement('div');
      cell.id=`${r}-${c}`;
      updateCell(cell,board[r][c]);
      boardEl.append(cell);
    }
  }
}

export function updateCell(cell:HTMLDivElement,value:number){
  cell.textContent='';
  cell.classList.value='';
  cell.textContent=String(value);
  cell.classList.add('cell');

  if(value>0){
    if(value<LIMIT){
      cell.classList.add(`x${value}`);
    }
    else{
      cell.classList.add(`x1024`);
    }
  }
}

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
function slideRight(){
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
function slideUp(){
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
function slideDown(){
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


document.addEventListener('keyup',(e:KeyboardEvent)=>{
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