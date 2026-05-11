import { renderBoard } from "../ui/render";
import { board } from "./board";

export function setGame(){
    console.log('call renderBoard');
    renderBoard(board);
}