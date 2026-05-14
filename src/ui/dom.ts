export const boardEl=document.querySelector<HTMLDivElement>('#board');
export const scorVal=document.getElementById('score')
export const resetBtn=document.getElementById('reset')

export function getElement(id: string){
  return document.getElementById(id);
}