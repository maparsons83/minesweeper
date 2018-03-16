const board = document.getElementById("container");

function drawBoard () {
    var container = document.getElementById("container");
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var numRow = document.getElementById("input1").value;
    var numCol = document.getElementById("input2").value;
    var bombsToPlace = document.getElementById("input3").value;

    const timer = {
        element: document.querySelector("h1"),
        seconds: 0, 
        minutes: 0, 
        timeout: null,
        gameTime: () => {
            timer.timeout = setInterval(timer.add, 1000);
        },
        add: () => {
            timer.seconds++;
            if (timer.seconds >= 60) {
                timer.seconds = 0;
                timer.minutes++;
            }
            timer.element.textContent = 
                (timer.minutes 
                    ? (timer.minutes > 9 
                        ? timer.minutes 
                        : "0" + timer.minutes) 
                    : "00") + ":" + (timer.seconds > 9 
                                        ? timer.seconds 
                                        : "0" + timer.seconds);
        },
    }

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

    timer.gameTime();
    
    tbl.appendChild(tblBody);
    container.appendChild(tbl);
    tbl.setAttribute("border", "2");
    
}

var mineBoard = {

    handleEvent: function(eventTarget) {
        if (eventTarget) {
            let exploded = false;
            let unclicked = board.getElementsByClassName("unclicked");
            let cell = event.target;
            cell.classList.remove("unclicked");
            cell.classList.add("clicked");
            if (cell.className.includes("bomb")) {
                alert ("You ded");
                exploded = true;    
            }
            if (exploded === true) {
                    for (var i = 0; i < unclicked.length; i++) {
                        unclicked[i].classList.remove("unclicked");
                    }
                }
        }
    }

}
board.addEventListener("click", mineBoard, false)