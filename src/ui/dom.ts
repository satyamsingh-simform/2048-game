export const boardEl=document.querySelector<HTMLDivElement>('#board');
export const scorVal=document.getElementById('score')

export function getElement(id: string){
  return document.getElementById(id);
}