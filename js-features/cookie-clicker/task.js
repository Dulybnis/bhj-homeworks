let counter = document.getElementById("clicker__counter");
let speed = document.getElementById("clicker__speed");
let image = document.getElementById("cookie");
let sizer = "normal";
let time = [];

image.onclick = function(){
    counter.textContent = Number(counter.textContent) + 1;
    resize();
    getTime();
}

resize = function(){
    if (sizer === "large"){
        image.width -= 20;
        sizer = "small";
    } else {
        image.width += 20;
        sizer = "large";
    }
}

getTime = function(){
    const now = new Date();
    time.push(now);
    speed.textContent = Math.round(((time[time.length - 1] - time[0])/time.length)/10)/100;
    console.log(speed.textContent);
}