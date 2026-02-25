function createGrid(rows, columns, parent)
{
    parent.replaceChildren();
    for (let i = 0; i < columns; i++) {
	let columnDiv = document.createElement("div");
	columnDiv.className = "col";
	columnDiv.style.flex = "1";
	for (let i = 0; i < rows; i++) {
	    let rowDiv = document.createElement("div");
	    rowDiv.className = "row";
	    rowDiv.style.flex = "1";
	    rowDiv.style.height = "30px"
	    rowDiv.style.backgroundColor = "white";
	    rowDiv.style.textAlign = "center";
	    rowDiv.style.border = "1px lightgray dotted";
	    columnDiv.appendChild(rowDiv);
	}
	parent.appendChild(columnDiv);
    }
}

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function increaseOpacity(target) {
    let opacity = Number(target.style.opacity);
    if (opacity < 1) {
	let newOpacity = opacity + 0.1;
	target.style.opacity = `${newOpacity}`;
    }
}

let container = document.getElementById('container');
let rowInput = document.getElementById('row-input');
let columnInput = document.getElementById('column-input');
let goButton = document.getElementById('go-button');
let reset = document.getElementById('reset');
createGrid(10, 50, container);    // Default grid (when page refreshes)


// Change background color of target element when mouse hovers over container:
container.addEventListener('mouseover', (e) => {
    let target = e.target;
    if (target.className == "row") {
	rndColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
	target.style.opacity = "10%";
	target.style.backgroundColor = rndColor;
	target.className = "row modified";
    }
    else if (target.className == "row modified") {
	increaseOpacity(target);
    }
});


// Custom grid (set by user)
let rowNum, columnNum;
goButton.addEventListener('click', () => {
    rowNum = Math.abs(rowInput.value);
    columnNum = Math.abs(columnInput.value);
    createGrid(rowNum, columnNum, container);
});

// Erase grid content
reset.addEventListener('click', () => {
    if (rowNum && columnNum)
	createGrid(rowNum, columnNum, container);
    else
	createGrid(10, 50, container);
});
