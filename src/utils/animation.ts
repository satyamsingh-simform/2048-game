export function movementAnimation(cell:HTMLDivElement,className:string):void{
    cell.classList.add(className);
    setTimeout(()=>{
        cell.classList.remove(className);
    },500)
}