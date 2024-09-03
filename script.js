let currentPlayer = "X";
let gameActive = false;
let player1Name = "";
let player2Name = "";
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

document.getElementById("startGameButton").addEventListener("click", () => {
    player1Name = document.getElementById("player1").value;
    player2Name = document.getElementById("player2").value;

    if (player1Name && player2Name) {
        gameActive = true;
        document.getElementById("playerForm").style.display = "none";
        alert(`${player1Name} contro ${player2Name} - Inizio del gioco! ${player1Name} è il tuo turno, il tuo simbolo è la X`);
    } else {
        alert("Per favore inserisci i nomi dei giocatori");
    }
});

document.querySelectorAll(".cell").forEach(cell => {
    cell.addEventListener("click", () => {
        const index = cell.getAttribute("data-index");

        if (gameActive && gameState[index] === "") {
            gameState[index] = currentPlayer;
            cell.textContent = currentPlayer;

            if (checkWinner()) {
                gameActive = false;
                alert(`${currentPlayer === "X" ? player1Name : player2Name} wins!`);
            } else if (!gameState.includes("")) {
                gameActive = false;
                alert("It's a draw!");
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
                alert(`${currentPlayer === "X" ? player1Name : player2Name}'s turn (${currentPlayer})`);
            }
        }
    });
});

function checkWinner() {
    return winningConditions.some(condition => {
        return condition.every(index => {
            return gameState[index] === currentPlayer;
        });
    });
}