const board = document.getElementById("board")
const tiles = Array.from(document.querySelectorAll(".tile"))
const playerDetail = document.getElementById("playerDetail")
const resetBtn = document.getElementById("resetBtn")


const playerX = "x";
const playerO = "o";

let currentPlayer = "x";

// playerDetail.innerHTML = `Player ${currentPlayer}'s turn`

let playerOTurn = false

var boardPlacements = ["", "", "", "", "", "", "", "", ""]

let gameOver = false

let drawGame = false

const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
    // [2,4,6]
]

startGame()


// tiles.forEach(tile => {
//     tile.addEventListener('click', clickedTile, {once : true})
// })

resetBtn.addEventListener('click', startGame)

function startGame(){

    playerOTurn = false

    boardPlacements = ["", "", "", "", "", "", "", "", ""]

    gameOver = false

    currentPlayer = "x"

    boardColorReset()

    playerDetail.innerHTML = `Player ${currentPlayer}'s turn`

    tiles.forEach(tile => {
        tile.classList.remove(playerX)
        tile.classList.remove(playerO)
    })
    
    tiles.forEach(tile => {
        tile.addEventListener('click', clickedTile, {once : true})
    })

}

function clickedTile(e) {
    if(!gameOver){
        const tile = e.target

        

        currentPlayer = playerOTurn ? playerO : playerX
        
        // console.log(currentPlayer)
        

        selecetedTilePlacement(tile, currentPlayer)

        const index = parseInt(tile.getAttribute('id'))
        console.log("index: " + index)
        playerPlacements(index)

        checkWinConditions(currentPlayer)

        
        // console.log(tiles)
        // console.log("after checkwinCon")
        // console.log(gameOver)
    }
    
}

function selecetedTilePlacement(tile, currentPlayer){
    tile.classList.add(currentPlayer)
    
    console.log(gameOver)
    if(gameOver){
        playerDetail.innerHTML = `Player ${currentPlayer}'s win`
    }else if(currentPlayer != playerO){
        playerDetail.innerHTML = `Player ${playerO}'s turn`
        playerOTurn = true;
    }else{
        playerDetail.innerHTML = `Player ${playerX}'s turn`
        playerOTurn = false;
    }

    

}

function playerPlacements(index){

    boardPlacements[index] = currentPlayer
}

function checkWinConditions(currentPlayer){

    // console.log("checking winning conditions outside 4loop")

    
    
    for(let i = 0; i < winningCombinations.length; i++){
        // console.log("checking in for loop: "+ boardPlacements.length)

        let first = boardPlacements || []
        let second = boardPlacements || []
        let third = boardPlacements || []

        let winingIndexOne, winingIndexTwo, winingIndexThree

        const winningCondition = winningCombinations[i]
        // console.log("winning: " + winningCombinations[0])
        

        first = boardPlacements[winningCondition[0]]
        second = boardPlacements[winningCondition[1]]
        // console.log("second: " + second);
        third = boardPlacements[winningCondition[2]]
        // console.log("third: " + third);

        // winingIndexOne = boardPlacements[winningCondition[0]].indexOf(first)
        // winingIndexTwo = boardPlacements[winningCondition[1]].indexOf(second)
        // winingIndexThree = boardPlacements[winningCondition[2]].indexOf(third)

        // console.log("wining cond = " + winningCombinations[i])


        if(first === '' || second === '' || third === ''){
            continue;
        }
        

        console.log(first)
        console.log(second)
        console.log(third)



        if(first == second && first == third){
            playerDetail.innerHTML = `Player ${currentPlayer} wins!!!`

            

            console.log("wining cond = " + winningCombinations[i])

            winingIndexOne = winningCombinations[i][0]
            winingIndexTwo = winningCombinations[i][1]
            winingIndexThree = winningCombinations[i][2]


            document.getElementById(winingIndexOne).style.backgroundColor = "lightgreen"
            document.getElementById(winingIndexTwo).style.backgroundColor = "lightgreen"
            document.getElementById(winingIndexThree).style.backgroundColor = "lightgreen"



            console.log("winingIndex " + winingIndexOne + " "+ winingIndexTwo + " "+ winingIndexThree)
            
            console.log("Game Over")
            gameOver = true
            break
        }        
        
    }    

    if(!gameOver && !boardPlacements.includes("")){
        playerDetail.innerHTML = `Game Draw`
        console.log("its a draw")
    }
    
}

function boardColorReset(){
    document.getElementById("0").style.backgroundColor = "white"
    document.getElementById("1").style.backgroundColor = "white"
    document.getElementById("2").style.backgroundColor = "white"
    document.getElementById("3").style.backgroundColor = "white"
    document.getElementById("4").style.backgroundColor = "white"
    document.getElementById("5").style.backgroundColor = "white"
    document.getElementById("6").style.backgroundColor = "white"
    document.getElementById("7").style.backgroundColor = "white"
    document.getElementById("8").style.backgroundColor = "white"
}

// function resetGame(){
//     currentPlayer = "x"

//     // playerDetail.innerHTML = `Player ${currentPlayer}'s turn`

//     playerOTurn = false

//     boardPlacements = ["", "", "", "", "", "", "", "", ""]

//     gameOver = false

//     tiles.forEach(tile => {
//         tile.classList.remove(playerX)
//         tile.classList.remove(playerO)
//     })
// }


console.log(tiles)

