let bg = document.querySelector('#bg');
const charCt = document.querySelector('.char-ct');

let currentP = (800 / 2) - (35 / 2);

function moveCharFunc(e) {
    e.preventDefault();

    switch (e.code) {

        case "KeyA":
        case "ArrowLeft":

            if (currentP >= 2.5) {

                // 오른쪽
                charCt.style.backgroundPosition = "-70px";
                currentP -= 15;
                charCt.style.left = `${currentP}px`;
            }

            break;

        case "KeyD":
        case "ArrowRight":

            if (currentP <= 762.5) {
                // 밑
                charCt.style.backgroundPosition = "-105px";
                currentP += 15;
                charCt.style.left = `${currentP}px`;
            }

            break;

        case "KeyW":
        case "ArrowUp":
            // 왼쪽
            charCt.style.backgroundPosition = "-35px";

            break;

        case "KeyS":
        case "ArrowDown":
            // Handle "turn right"
            charCt.style.backgroundPosition = "0px";

            break;
    }

}


function init() {

    const hero = document.createElement('img');

    charCt.appendChild(hero);
    bg.appendChild(charCt);
    window.addEventListener('keydown', (e) => { moveCharFunc(e) });


}

init();