const map = [
    "█████████████████████",
    "█   █     █     █ █ █",
    "█ █ █ ███ █████ █ █ █",
    "█ █ █   █     █ █   █",
    "█ ███████ █ ███ █ █ █",
    "█         █     █ █ █",
    "█ ███ █████ █████ █ █",
    "█ █   █   █ █     █ █",
    "█ █████ █ █ █ ███ █ F",
    "S     █ █ █ █ █ █ ███",
    "█████ █ █ █ █ █ █ █ █",
    "█     █ █ █   █ █ █ █",
    "█ ███████ █████ █ █ █",
    "█       █       █   █",
    "█████████████████████"
];


const wall = "█";
const space = " ";
let currentPlayer = "O"


// let boxTop = 200;
// let boxLeft = 200;
// event handler for moving keys based on arrow press:
// document.addEventListener('keydown', (event) => {
//     let keyName = event.key;
//     // console.log(event.key)
//     if (keyName === "ArrowDown") {
//         boxTop = boxTop + 10;
//     }
//     if (keyName === "ArrowUp") {
//         boxTop = boxTop - 10;
//     }
//     if (keyName === "ArrowLeft") {
//         boxLeft = boxLeft - 10;
//     }
//     if (keyName === "ArrowRight") {
//         boxLeft = boxLeft + 10;
//     }

//     document.getElementById("box").style.top = boxTop + "px";
// //     document.getElementById("box").style.left = boxLeft + "px";

function showGameBoard() {
    const board = document.createTextNode(map[0]);
    const newP = document.createElement("div");
    const destination = document.getElementById("row1");
    newP.appendChild(board);
    destination.appendChild(newP);
}
showGameBoard()

function showGameBoard2() {
    const board = document.createTextNode(map[1]);
    const newP = document.createElement("div");
    const destination = document.getElementById("row2");
    newP.appendChild(board);
    destination.appendChild(newP);
}
showGameBoard2()