const map = [
    "█████████████████████",
    "█░░░█░░░░░█░░░░░█░█░█",
    "█░█░█░███░█████░█░█░█",
    "█░█░█░░░█░░░░░█░█░░░█",
    "█░███████░█░███░█░█░█",
    "█░░░░░░░░░█░░░░░█░█░█",
    "█░███░█████░█████░█░█",
    "█░█░░░█░░░█░█░░░░░█░█",
    "█░█████░█░█░█░███░█░F",
    "S░░░░░█░█░█░█░█░█░███",
    "█████░█░█░█░█░█░█░█░█",
    "█░░░░░█░█░█░░░█░█░█░█",
    "█░███████░█████░█░█░█",
    "█░░░░░░░█░░░░░░░█░░░█",
    "█████████████████████"
];
const gameboard = document.getElementById("gameboard");
const playerElement = createPlayer();
const playerPosition = {row: 9, column: 0}

for (let rowIndex = 0; rowIndex < map.length; rowIndex++) {
    const rowString = map[rowIndex];
    const rowDiv = createRow();
    gameboard.appendChild(rowDiv);

    for (let cellIndex = 0; cellIndex < rowString.length; cellIndex++) {
        const cellCharacter = rowString[cellIndex];
        let cellElement = createCellElement(cellCharacter, rowIndex, cellIndex)

        if (cellElement.dataset.type === "start") {
            movePlayerToCellElement(cellElement)
        }
        rowDiv.appendChild(cellElement)
    }
}

function createRow() {
    const rowDiv = document.createElement("div")
    rowDiv.classList.add("row")
    return rowDiv
}

function createPlayer() {
    const playerDiv = document.createElement("div")
    playerDiv.classList.add("player", "cell")
    return playerDiv

}

function createCellElement(cellCharacter, rowIndex, cellIndex) {
    const cellElement = document.createElement("div")
    switch (cellCharacter) {
        case "█":
            cellElement.dataset.type = "wall"
            break
        case "░":
            cellElement.dataset.type = "hall"
            break
        case "S":
            cellElement.dataset.type = "start"
            break
        case "F":
            cellElement.dataset.type = "finish"
            break
    }
    cellElement.classList.add(cellElement.dataset.type, "cell")
    cellElement.dataset.rowIndex = rowIndex;
    cellElement.dataset.cellIndex = cellIndex;
    return cellElement
}
// switch case is basically a big if else statement

function movePlayerToCellElement(cellElement) {
    cellElement.appendChild(playerElement)
}


function findCellByCoordinates(rowIndex, cellIndex) {
    const rowIndexSelector = "[data-row-index='" + rowIndex + "']"
    const cellIndexSelector = "[data-cell-index='" + cellIndex + "']"
    const cellSelector = "#gameboard .row " + rowIndexSelector + cellIndexSelector
    return document.querySelector(cellSelector)
// this function will search the DOM for a cell that meets both the row and cell types
// findCellByCoordinates(rowIndex, cellIndex + 1)-this is how you would check the cell to the right
}


// event handler for moving keys based on arrow press:
document.addEventListener('keydown', (event) => {
    let keyName = event.key;
    let rowIndex = playerPosition.row
    let cellIndex = playerPosition.column
    if (keyName === "ArrowDown") {
        console.log("hello")
        let newCellNode = findCellByCoordinates(rowIndex + 1, cellIndex)
        movePlayerToCellElement(newCellNode)
        playerPosition.row +=1
    }
    if (keyName === "ArrowUp") {
        let newCellNode = findCellByCoordinates(rowIndex - 1, cellIndex)
        movePlayerToCellElement(newCellNode)
        playerPosition.row -=1
    }
    if (keyName === "ArrowLeft") {
        let newCellNode = findCellByCoordinates(rowIndex, cellIndex - 1)
        movePlayerToCellElement(newCellNode)
        playerPosition.column -=1
    }
    if (keyName === "ArrowRight") {
        let newCellNode = findCellByCoordinates(rowIndex, cellIndex + 1)
        movePlayerToCellElement(newCellNode)
        playerPosition.column +=1
    }
    
    
})

// function wallGuard(){
//     if (cellElement.dataset.type === "wall") {
//         alert("YOU SHALL NOT PASS!")
//     }
// } 
// wallGuard()
// code win message once player reaches position ___
// can remove event listener once you reach finish so you can't move anymore