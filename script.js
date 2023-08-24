const gridSize=prompt("Insert wanted grid size");

const gridContainer = document.querySelector("#gridContainer");

for (let i=0;i<(gridSize**2);i++)
{
    let gridElement=document.createElement("div");
    gridElement.classList.add("gridElement");
    gridElement.style.flexBasis=`${((1/(+gridSize))*100)}%`; //dictate how many items per row
    gridContainer.appendChild(gridElement);
}

//event delegation
function hover(evnt)
{
    let target = evnt.target;
    if(target.tagName != "DIV") return;
    console.log("hovered!!");
    target.classList.add("hovered");
}
gridContainer.addEventListener("mouseover", hover); 