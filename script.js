const board = document.getElementById("container");

function drawBoard () {
    var container = document.getElementById("container");
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var numRow = document.getElementById("input1").value;
    var numCol = document.getElementById("input2").value;
    var bombsToPlace = document.getElementById("input3").value;

    for (let xRow = 0; xRow < numRow; xRow++) {
        let row = document.createElement("tr");
        
        for (let yCol = 0; yCol < numCol; yCol++) {
            let cell = document.createElement("td");
            cell.dataset.nearby_bombs = 0;
            cell.classList.add("unclicked");
            row.appendChild(cell);

        }
        tblBody.appendChild(row);
    }
    let cells = tblBody.querySelectorAll("td");
   
    while (bombsToPlace) {

        var cellIndex = Math.floor(Math.random() * cells.length);
        
        var cell = cells[cellIndex];
        if (cell.className.includes("bomb")) {
            continue;
        }
        cell.classList.add("bomb");
        bombsToPlace--;
 
    }
    tbl.appendChild(tblBody);
    container.appendChild(tbl);
    tbl.setAttribute("border", "2");
    
}

var mineBoard = {

    handleEvent: function(eventTarget) {
        if (eventTarget) {
            let cell = event.target;
            cell.classList.remove("unclicked");
            cell.classList.add("clicked");
        }
    }
}
board.addEventListener("click", mineBoard, false)