class ghosts {

    constructor(location, deadNum) {
        this.location = location;
        this.deadNum = deadNum;
    }

    get location() {
        return this.location;
    }

    get deadNum() {
        return this.deadNum;
    }

    location(position) {
        this.location = position;
    }

    deadNum(num) {
        this.deadNum = num;
    }

    addDeadGhost(ghost) {
        ghostArray.push(ghost);
    }
}

const startBtn = document.createElement('div');
let ghostArray = [];
let runEvent;
let newGhostArray = [];


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min + 0.5;
}

function drawGhosts() {

    const ghost = document.createElement('div');
    ghost.className = "ghost-ct";

    let currentLeftVal = getRandomInt(1, 700);
    ghost.location = currentLeftVal;

    let newDeadGhost = new ghosts(currentLeftVal, 0);
    newDeadGhost.addDeadGhost(newDeadGhost);

    ghost.style.left = `${currentLeftVal}px`;
    bg.appendChild(ghost);

    let currentTop = 0;

    setInterval(() => {

        currentTop += 30;
        ghost.style.top = `${currentTop}px`;

        if (currentTop >= 484 && currentTop <= 550) {

            ghostArray.forEach(ghosts => {

                if (ghosts.location > currentP - 10 && ghosts.location < currentP + 10) {

                    if (currentTop >= 480) {
                        ghost.style.backgroundPosition = "-48px";
                        setTimeout(() => {
                            ghosts.deadNum = 1;
                            ghost.remove()
                        }, 300);
                    }
                }
            });


        } else if (currentTop > 560 && currentTop <= 570) {

            ghost.remove();

        } else {
            return;
        }

    }, 300);

    newGhostArray = ghostArray.filter(item => item.deadNum === 1);

    if (newGhostArray.length === 4) {
        newGhostArray.length = 0;
        checkDeadGhosts();
        return;
    }

}

function checkDeadGhosts() {
    clearInterval(runEvent);
    const modalBg = document.createElement('div');
    modalBg.className = "game-over-modal";
    bg.replaceWith(modalBg);

    const text = document.createElement('span');
    text.innerHTML = "GAME OVER!!";
    modalBg.appendChild(text);

    const retryBtn = document.createElement('img');
    retryBtn.src = "http://pixelartmaker.com/art/e1a8bbd5d3ca5da.png";
    modalBg.appendChild(retryBtn);
    retryBtn.className = "retry-btn";

    retryBtn.addEventListener('click', () => {
        retryHandler(modalBg);
    });
}

function initialize() {
    ghostArray.length = 0;
    newGhostArray.length = 0;
}

function retryHandler(modal) {
    initialize();
    modal.replaceWith(bg);
    setInterval(drawGhosts, 3000);
}


function init() {

    const imageStart = document.createElement('img');
    imageStart.src = "https://opengameart.org/sites/default/files/PlayButtonHighlight.png";
    startBtn.appendChild(imageStart);
    startBtn.className = "start-btn";
    imageStart.style.width = "inherit";
    bg.appendChild(startBtn);

    startBtn.addEventListener('click', () => {
        startBtn.remove();
        runEvent = setInterval(drawGhosts, 3000);
    });

}

init();