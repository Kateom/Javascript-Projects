let boxes = document.querySelectorAll('.box'); 
let resetbtn = document.querySelector( '.reset-btn' );
let msgcontainer = document.querySelector('.msg-container'); 
let msg = document.querySelector('.msg');
let newbtn = document.querySelector('.new-btn');

let turn0 = true;
let count = 0;  

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [6, 4, 2],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turn0){
            box.innerText = "O";
            turn0 = false; 
        }else{
            box.innerText = "X";
            turn0 = true; 
        }
        box.disabled=true;
        count++

       let isWinner = checkWinner(); 
        
        if(count===9 && !isWinner) {
            gamedraw();
        }

    })
});

const gamedraw  = () => {
    msg.innerText = 'Game was a Draw'; 
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const checkWinner = () =>{
    for(let patterns of winPattern){
        let pos1val = boxes[patterns[0]].innerText; 
        let pos2val = boxes[patterns[1]].innerText; 
        let pos3val = boxes[patterns[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "") {
            if(pos1val === pos2val && pos2val === pos3val) {
            showWinner(pos1val);
            }
        }

    }
}

const showWinner = (winner) => {
    
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
  
    disableboxes();
}

const disableboxes = () => {
    for(let box of boxes) {
        box.disabled =true; 
    }
}

const enableboxes = () =>{
    for(let box of boxes) {
        box.disabled = false; 
       box.innerText="";
    }
}
const resetgame = () => {
    turn0 = true; 
    enableboxes();
    msgcontainer.classList.add("hide");
}

newbtn.addEventListener('click', resetgame);
resetbtn.addEventListener('click',resetgame);
