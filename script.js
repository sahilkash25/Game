const main = document.querySelector("main");

const startBtn = document.querySelector("#startBtn");
const nextBtn = document.querySelector("#nextBtn");

const timer = document.querySelector("#timer");
const scoree = document.querySelector("#score");
const playerText = document.querySelector("#player");

const overlay = document.querySelector("#overlay");
const result = document.querySelector("#result");

const box = document.createElement("div");
box.classList.add("box");

let points = 0;
let time = 0;

let interval;
let gameTimeout;

let player1Score = 0;
let player2Score = 0;

let currentPlayer = 1;


// Random color
function color() {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}


// Random box
function random() {

    box.style.backgroundColor = color();

    main.append(box);

    let mainH = main.clientHeight - box.offsetHeight;
    let mainW = main.clientWidth - box.offsetWidth;

    let randomY = Math.random() * mainH;
    let randomX = Math.random() * mainW;

    box.style.top = `${randomY}px`;
    box.style.left = `${randomX}px`;
}



// Player 1 start


startBtn.addEventListener("click", () => {

    overlay.style.display = "none";

    points = 0;
    time = 0;

    player1Score = 0;
    player2Score = 0;

    playerText.textContent = "1";
    timer.textContent = "0";
    scoree.textContent = "0";

    startBtn.textContent = "Player 1 Playing";

    random();


    clearInterval(interval);
    clearTimeout(gameTimeout);


    interval = setInterval(() => {

        time++;

        timer.textContent = time;

        random();

    }, 1000);


    gameTimeout = setTimeout(() => {

        clearInterval(interval);

        player1Score = points;

        box.remove();

        result.textContent =
            `Player 1 Finished! Score: ${player1Score}`;

        nextBtn.textContent = "Player 2 Start";

        

        overlay.style.display = "flex";

    }, 30000);

});



// Player 2 start


nextBtn.addEventListener("click", () => {
    startBtn.textContent = "player 2 is playing"

  
    if (nextBtn.textContent === "Play Again") {

    overlay.style.display = "none";

    points = 0;
    time = 0;

    player1Score = 0;
    player2Score = 0;

    playerText.textContent = "1";
    timer.textContent = "0";
    scoree.textContent = "0";

    startBtn.click();

    return;
}
    overlay.style.display = "none";

    points = 0;
    time = 0;

    playerText.textContent = "2";
    timer.textContent = "0";
    scoree.textContent = "0";

    random();

    clearInterval(interval);
    clearTimeout(gameTimeout);


    interval = setInterval(() => {

        time++;

        timer.textContent = time;

        random();

    }, 1000);


    gameTimeout = setTimeout(() => {

        clearInterval(interval);

        player2Score = points;

        box.remove();


        // winner
        if (player1Score > player2Score) {

            result.textContent =
                `🏆 Player 1 Wins! ${player1Score} - ${player2Score}`;

        }
        else if (player2Score > player1Score) {

            result.textContent =
                `🏆 Player 2 Wins! ${player2Score} - ${player1Score}`;

        }
        else {

            result.textContent =
                `🤝 Draw! ${player1Score} - ${player2Score}`;

        }


        overlay.style.display = "flex";

        nextBtn.textContent = "Play Again";

    }, 30000);

});


// box click


box.addEventListener("click", () => {

    points++;

    scoree.textContent = points;

});