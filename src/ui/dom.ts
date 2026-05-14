export const boardEl=document.querySelector<HTMLDivElement>('#board');
export const scorVal=document.getElementById('score')
export const targetScore=document.getElementById('target')
export const resetBtn=document.getElementById('reset')

export function getElement(id: string){
  return document.getElementById(id);
}