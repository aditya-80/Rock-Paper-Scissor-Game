let userscore = 0;
let compscore = 0;

const us = document.querySelector("#user-score");
const cs = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randidx = Math.floor(Math.random() * 3)
    return  options[randidx]
};

const drawgame = () => {
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "#081b31";
}

const showuser = (userwin, userchoice, compchoice) => {
    if(userwin){
        userscore++;
        
        us.innerText = userscore;
        
        msg.innerText = `You Won! Your choice: ${userchoice} beats Computer Choice: ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compscore++;

        cs.innerText = compscore;
        
        msg.innerText = `You Lose! Computer choice: ${compchoice} beats Your Choice: ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) => {
    const compchoice = gencompchoice();

    if(userchoice === compchoice){
        drawgame();
    }
    else {
        let userwin = true;
        if(userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        }else if (userchoice === "paper"){
            userwin = compchoice === "scissor" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showuser(userwin, userchoice, compchoice);
    }
    
        
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        playgame(userchoice);
    })
})

