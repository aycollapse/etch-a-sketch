const gridSize=prompt("Insert wanted grid size");

const gridContainer = document.querySelector("#gridContainer");

for (let i=0;i<(gridSize**2);i++)
{
    let gridElement=document.createElement("div");
    gridElement.classList.add("gridElement");
    gridElement.style.flexBasis=`${((1/(+gridSize))*100)}%`; //dictate how many items per row
    gridContainer.appendChild(gridElement);
}
  
const gridElements = document.querySelectorAll(".gridElement");
gridElements.forEach(gridElement => gridElement.addEventListener("mouseover",()=>{
    gridElement.classList.add("hovered");
}));