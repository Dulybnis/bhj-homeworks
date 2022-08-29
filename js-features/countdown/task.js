let time = document.getElementById("timer");
let timeContent = Number(time.textContent);

const getTime = function () {
    let timeDate = new Date(0, 0, 0, 0, 0, timeContent);
    time.textContent = timeDate.toLocaleTimeString("ru-Ru", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
};

const timerClock = function(){
    timeContent -= 1;
    getTime();
    if (timeContent <= 0){
        clearInterval(timerId);
        window.location.assign("file/hello.doc");
        //document.getElementById('link').click();w 
        alert("Вы победили в конкурсе!");
    }
}

let timerId = setInterval(() => timerClock(), 100);