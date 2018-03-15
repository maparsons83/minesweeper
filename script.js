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
            let cellText = document.createTextNode ("Test");
            cell.appendChild(cellText);
            row.appendChild(cell);

        }
        tblBody.appendChild(row);
    }
    let cells = tblBody.querySelectorAll("td");
   
    while (bombsToPlace) {

        var cellIndex = Math.floor(Math.random() * cells.length);
        
        var cell = cells[cellIndex];
        if (cell.className === "bomb") {
            continue;
        }
        cell.className = "bomb";
        bombsToPlace--;
 
    }
    tbl.appendChild(tblBody);
    container.appendChild(tbl);
    tbl.setAttribute("border", "2")
}
