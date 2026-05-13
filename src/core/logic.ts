import { getElement, scorVal } from "../ui/dom";
import { celebrate } from "../utils/celebrate";
import { COL, ROW, WIN_SCORE } from "../utils/constant";
import { board } from "./board";

let score=0;
export let gameWon=false;

export function removeZero(row:number[]){
    return row.filter((val)=>val!==0);
}
export function addZero(row:number[]){
    while(row.length<ROW){
        row.push(0);  
    }
}

function checkWin(score:number){
    if(score>WIN_SCORE){
        gameWon=true;
        celebrate();
        setTimeout(()=>{
            alert('you win');
        },100)
    }
}
function loose(){
    gameWon=true;
    setTimeout(()=>{
        alert('you loose');
    },100)
}

export function slide(row:number[]){
    row=removeZero(row);//[2, 2, 0, 4]-->[2, 2, 4]

    for(let r=0;r<row.length-1;r++){
        if(row[r]===row[r+1]){
            row[r]*=2;
            score=score+row[r];
            if(scorVal instanceof HTMLElement){
                scorVal.innerText=`${score}`;
                checkWin(score);
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
            if(board[r][c]===0){
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
            if(board[r][c]===0){
                board[r][c]=2;
                console.log(board);
                let cell = getElement(`${r}-${c}`);
                if(!(cell instanceof HTMLDivElement)) return;
                cell.classList.add('pop')
                setTimeout(()=>{
                    cell.classList.remove('pop');
                },500)
                cell.innerText = "2";
                cell.classList.add("x2");
                found = true;
            }
        }
    }
}