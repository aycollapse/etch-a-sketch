const gridSize=prompt("Insert wanted grid size");

const gridContainer = document.querySelector("#gridContainer");

gridContainer.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;
gridContainer.style.gridTemplateRows = `repeat(${gridSize},1fr)`;

for (let i=0;i<(gridSize*gridSize);i++)
{
    let gridElement=document.createElement("div");
    gridElement.classList.add("gridElement");
    gridContainer.appendChild(gridElement);
}

//event delegation
function hover(evnt)
{
    let target = evnt.target;
    if(target.tagName != "DIV") return;
    console.log("hovered!!");
    target.style.backgroundColor = "#000";
    //target.classList.add("hovered");
}
gridContainer.addEventListener("mouseover", hover); 