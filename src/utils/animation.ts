export function movementAnimation(cell:HTMLDivElement,className:string):void{
    cell.classList.add(className);
    cell.addEventListener('animationend',()=>{
        cell.classList.remove(className)
    })
}