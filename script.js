function createGrid(m, n, parent)
{
    for (let i = 0; i < m; i++) {
	let columnDiv = document.createElement("div");
	columnDiv.className = "col";
	columnDiv.style.flex = "1";
	for (let i = 0; i < n; i++) {
	    let rowDiv = document.createElement("div");
	    rowDiv.className = "row";
	    rowDiv.style.flex = "1";
	    rowDiv.style.height = "30px"
	    rowDiv.style.backgroundColor = "white";
	    rowDiv.style.textAlign = "center";
	    rowDiv.style.border = "1px black solid";
	    columnDiv.appendChild(rowDiv);
	}
	parent.appendChild(columnDiv);
    }
}

let container = document.getElementById('container');
createGrid(16, 16, container);
