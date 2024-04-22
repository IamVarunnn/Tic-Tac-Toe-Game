let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let btn = document.querySelector("button");


let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();

    });
});
const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();

};


const checkWinner = () =>{
    let isDraw = true;
    for(pattern of winPatterns){
      
        let pos1 =  boxes[pattern[0]].innerText;
        let pos2 =  boxes[pattern[1]].innerText;
        let pos3 =  boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("Winner",pos1);
                showWinner(pos1);

            }
        }
    }
    for (let box of boxes) {
        if (box.innerText === "") {
            isDraw = false; // If any box is empty, it's not a draw
            break;
        }
    }

    // If all boxes are filled and no winner, it's a draw
    if (isDraw) {
        msg.innerText = "It's a draw!";
        msgContainer.classList.remove("hide");
        disabledBoxes();
    }
};



newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);


let body = document.querySelector("body");

 