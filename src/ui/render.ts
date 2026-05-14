import { gameData } from "../core/gameState";
import { COL, LIMIT, ROW } from "../utils/constant";
import { boardEl, targetScore} from "./dom";

export function renderBoard(board:number[][]){
  if(!boardEl) return;
  boardEl.textContent='';
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
  if (value>0){
    cell.innerHTML=`<span class="tile-text">${value}</span>`;
  } 
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

if(targetScore instanceof HTMLElement){
        targetScore.textContent=`${gameData.winScore}`
}