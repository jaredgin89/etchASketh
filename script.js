let size = 64;
let changeSize = document.querySelector('.changeSize');
let clearGrid = document.querySelector('.clearGrid');
changeSize.addEventListener('click', changeGrid);
clearGrid.addEventListener('click', resetGrid);


//createGrid is called passing size by default when page loads.
createGrid(size);


function createGrid(size) {
  let col = size;
  let row = size;
  let cellSize = 600/size;
  let e = document.querySelector('#container');
  for(let row=0; row<size; row++){
    let r = document.createElement('div');
    r.className = 'row';
    for(let col=0; col<size; col++){
      let cell = document.createElement('div');
      cell.className = 'cell';
      cell.style.display = 'inline-block';
      cell.style.width = cellSize-2 + 'px';
      cell.style.height = cellSize-2 + 'px';
      cell.style.border = '1px solid black';
      cell.style.margin = '0';
      cell.style.float = 'left';
      r.appendChild(cell);
      cell.onmouseover = changeColor;
    }
    e.appendChild(r);
  }
}

//resetGrid deletes all children from container div and creates a grid of
//the same deault size.
function resetGrid() {
  while(container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  createGrid(size);
}

//Change grid delets all children from container and creates a new Grid
//of a size input by user.
function changeGrid() {
  while(container.hasChildNodes()){
    container.removeChild(container.lastChild);
  }
  size = prompt("What size grid would you like?");
  createGrid(size);
}


function changeColor() {
  this.style.background = 'black';
}
