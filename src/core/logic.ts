import { getElement, resetBtn, scorVal } from "../ui/dom";
import { renderBoard } from "../ui/render";
import { movementAnimation } from "../utils/animation";
import { celebrate } from "../utils/celebrate";
import { COL, ROW } from "../utils/constant";
import { gameData } from "./gameState";



export function removeZero(row:number[]){
    return row.filter((val)=>val!==0);
}
export function addZero(row:number[]){
    while(row.length<ROW){
        row.push(0);  
    }
}

function checkWin(score:number){
    if(score>gameData.winScore){
        gameData.gameWon=true;
        celebrate();
        setTimeout(()=>{
            alert('you win');
        },100)
    }
}
function loose(){
    gameData.gameWon=true;
    setTimeout(()=>{
        alert('you loose');
    },100)
}

export function slide(row:number[]){
    row=removeZero(row);//[2, 2, 0, 4]-->[2, 2, 4]

    for(let r=0;r<row.length-1;r++){
        if(row[r]===row[r+1]){
            row[r]*=2;
            gameData.score+=row[r];
            if(scorVal instanceof HTMLElement){
                scorVal.innerText=`${gameData.score}`;
                checkWin(gameData.score);
            };
            row[r+1]=0;
        }
    }
    row=removeZero(row);//[4, 0, 4]-->[4, 4]
    addZero(row);//[4, 4, 0, 0]
    return row;
}

export function emptyCell(){
    for(let r=0;r<ROW;r++){
        for(let c=0;c<COL;c++){
            if(gameData.board[r][c]===0){
                return true;
            }
        }
    }
    loose()
    return false;
}

export function setTwo(){    
    let found=false;
    if(emptyCell()){
        while(!found){
            let r=Math.floor(Math.random()*ROW);
            let c=Math.floor(Math.random()*COL);
            if(gameData.board[r][c]===0){
                gameData.board[r][c]=2;
                console.log(gameData.board);
                let cell = getElement(`${r}-${c}`);
                if(!(cell instanceof HTMLDivElement)) return;
                movementAnimation(cell,'pop')
                cell.innerText = "2";
                cell.classList.add("x2");
                found = true;
            }
        }
    }
}

resetBtn?.addEventListener('click',()=>{
    console.log('reset works');
    gameData.winScore=Number(prompt('score you want to achieve'));
    gameData.score=0;
    gameData.gameWon=false;
    gameData.board=[
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
    ]
    if(scorVal instanceof HTMLElement){
        scorVal.textContent=`${gameData.score}`
    }
    renderBoard(gameData.board);
    setTwo();
    setTwo();
})