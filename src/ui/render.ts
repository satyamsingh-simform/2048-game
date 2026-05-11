import { COL, ROW } from "../utils/constant";

export function renderBoard(board:number[][]){    
  const boardEl = document.getElementById("board");
  if (!boardEl) return;
  boardEl.innerHTML = "";

  for(let r=0; r<ROW; r++){
    for(let c=0; c<COL; c++){
      const cell = document.createElement("div");
      cell.id = `${r}-${c}`;
      console.log('board',board[r][c]);
      
      updateTile(cell, board[r][c]);
      boardEl.append(cell);
    }
  }
}

export function updateTile( cell:HTMLDivElement, num:number){
  cell.innerText = "";
  cell.className = "cell";

  if(num > 0){
    cell.innerText = String(num);
    if(num <= 512){
      cell.classList.add(`x${num}`);
    }
    else{
      cell.classList.add("x1024");
    }
  }
}