let dead = document.getElementById("dead");
let lost = document.getElementById("lost");
let holes = [];

counter = function(hole){
    if (hole.className.includes("hole_has-mole")){
        dead.textContent = Number(dead.textContent) + 1;
    } else {
        lost.textContent = Number(lost.textContent) + 1;
    }
    if (Number(dead.textContent) === 10){
        alert("Вы победили");
        zeroCounter();
    }
    if (Number(lost.textContent) === 10){
        alert("Вы проиграли");
        zeroCounter();
    }
}

for (i = 1; i < 10; i += 1){
    let element = document.getElementById(`hole${i}`);
    let hole = {
        name: `hole${i}`,
        element,
        click: element.onclick = function(){
            counter(hole.element);
        },
    }
    holes[i] = hole;
}

zeroCounter= function(){
    dead.textContent = 0;
    lost.textContent = 0;
}