import { getElement, scorVal } from "../ui/dom";
import { COL, ROW } from "../utils/constant";
import { board } from "./board";

let score=0;

export function removeZero(row:number[]){
    return row.filter((val)=>val!==0);
}
export function addZero(row:number[]){
    while(row.length<ROW){
        row.push(0);  
    }
}

export function slide(row:number[]){
    row=removeZero(row);//[2, 2, 0, 4]-->[2, 2, 4]
        
    for(let r=0;r<row.length-1;r++){
        if(row[r]===row[r+1]){
            row[r]*=2;
            score=score+row[r];
            scorVal.innerText=`${score}`;
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
                let tile = getElement(`${r}-${c}`);
                tile.innerText = "2";
                tile.classList.add("x2");
                found = true;
            }
        }
    }
}