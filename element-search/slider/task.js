let left = document.getElementsByClassName("slider__arrow_prev")[0];
let right = document.getElementsByClassName("slider__arrow_next")[0];
let images = Array.from(document.getElementsByClassName("slider__item"));
let dots = Array.from(document.getElementsByClassName("slider__dot"));
let active = 0;
let exActive = 0;
dots[active].className = "slider__dot slider__dot_active";

let validateSlide = function(number) {
    if (number > images.length - 1) {
        return 0;
    };
    if (number < 0) {
        return images.length - 1;
    };
    return number
}

let activeSlide = function(number) {
    active = validateSlide(number);
    images[exActive].className = "slider__item";
    dots[exActive].className = "slider__dot";
    images[active].className = "slider__item slider__item_active";
    dots[active].className = "slider__dot slider__dot_active";
}

let clickDots = dots.forEach((element, index) => {
    element.onclick = function() {
        if (element.className === "slider__dot slider__dot_active") {
            console.log("Уже активен!");
            return;
        } else {
            exActive = active;
            activeSlide(index);
        }
    }
});

left.onclick = function() {
    exActive = active;
    active -= 1;
    activeSlide(active);
}

right.onclick = function() {
    exActive = active;
    active += 1;
    activeSlide(active);
}
