let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset-btn")
let newgamebtn = document.querySelector("#new-btn")
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO = true;      //player O, player X turn will show their symbol

// In terms of Tic Tac Toe's Table the winning patterns will have index as = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]] 
// we will use 2D array

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame = () => {                                         //function to reset game
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide")                           //the Winner box will hide again
}


boxes.forEach((box) => {        //makes sure the box is clicked
    box.addEventListener("click", () => {
        // console.log("Box was Clicked.");                     //done in console
        if(turnO){             //player O's turn?
           box.innerText = "O" 
           turnO = false
        } else{                //player X's turn.
            box.innerText = "X"
            turnO = true
        } 
        box.disabled = true 
        
        checkWinner();         //disable button after use so that the value can't be changed again
    })
});

const disableboxes = () => {   //function to make sure game ends after one winner is found.
    for (let box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () => {   //function to make sure game starts next round.
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {                                   //function to show winner
    msg.innerText = `Congratulations, Player ${winner} won!`       // showing winner
    msgcontainer.classList.remove("hide")                          //removing hide from class list, means the class will show now
    disableboxes()
}


const checkWinner = () => {                                       //function to check winner
    for(let pattern of winPatterns) {
        // console.log(pattern[0],pattern[1],pattern[2]); 
        // console.log(
        //     boxes[pattern[0].innerText],
        //     boxes[pattern[1].innerText],
        //     boxes[pattern[2].innerText]
        // );     
        let pos1Val = boxes[pattern[0]].innerText;     
        let pos2Val = boxes[pattern[1]].innerText;     
        let pos3Val = boxes[pattern[2]].innerText;     

        if(pos1Val != "" && pos2Val !="" && pos3Val !="") {        //Winning condition
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                // console.log("Winner",pos1Val);                  //done in console
                showWinner(pos1Val);               
            }
        }
    }
};

newgamebtn.addEventListener("click", resetgame)
resetbtn.addEventListener("click", resetgame)
