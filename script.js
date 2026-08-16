const main = document.querySelector("main");
const btn = document.querySelector("button");

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

let currentPlayer = 1;

let player1Score = 0;
let player2Score = 0;


// Random color
const color = () => {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
};


// Random box position
const random = () => {

    box.style.backgroundColor = color();

    main.append(box);

    let mainH = main.clientHeight - box.offsetHeight;
    let mainW = main.clientWidth - box.offsetWidth;

    const randomY = Math.random() * mainH;
    const randomX = Math.random() * mainW;

    box.style.top = `${randomY}px`;
    box.style.left = `${randomX}px`;
};


// Start game
btn.addEventListener("click", () => {

    clearInterval(interval);
    clearTimeout(gameTimeout);

    overlay.style.display = "none";

    currentPlayer = 1;

    player1Score = 0;
    player2Score = 0;

    points = 0;
    time = 0;

    playerText.textContent = currentPlayer;
    timer.textContent = time;
    scoree.textContent = points;

    random();


    // Player 1 timer
    interval = setInterval(() => {

        time++;

        timer.textContent = time;

        random();

    }, 1000);


    // After 30 seconds
    gameTimeout = setTimeout(() => {

        clearInterval(interval);

        player1Score = points;

        box.remove();

        // Player 2 start
        currentPlayer = 2;

        playerText.textContent = currentPlayer;

        points = 0;
        time = 0;

        timer.textContent = 0;
        scoree.textContent = 0;

        random();


        // Player 2 timer
        interval = setInterval(() => {

            time++;

            timer.textContent = time;

            random();

        }, 1000);


        // Player 2 game over
        gameTimeout = setTimeout(() => {

            clearInterval(interval);

            player2Score = points;

            box.remove();

            // Find winner

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


            // Reset after 5 seconds
            setTimeout(() => {

                overlay.style.display = "none";

                time = 0;
                points = 0;

                timer.textContent = 0;
                scoree.textContent = 0;

            }, 5000);

        }, 30000);

    }, 30000);

});


// Box click
box.addEventListener("click", () => {

    points++;

    scoree.textContent = points;

});

