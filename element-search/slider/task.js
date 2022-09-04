let left = document.getElementsByClassName("slider__arrow_prev")[0];
let right = document.getElementsByClassName("slider__arrow_next")[0];
let images = Array.from(document.getElementsByClassName("slider__item"));
let dots = Array.from(document.getElementsByClassName("slider__dot"));
let active = images.findIndex((item) => item.className === "slider__item slider__item_active");
dots[active].className = "slider__dot slider__dot_active";

let clickDots = dots.forEach((element, index) => {
    element.onclick = function() {
        if (element.className === "slider__dot slider__dot_active") {
            console.log("Уже активен!");
            return;
        } else {
            dots.forEach((element) => {
                element.className = "slider__dot";
            })
            element.className = "slider__dot slider__dot_active";
            active = images.findIndex((item) => item.className === "slider__item slider__item_active");
            images[active].className = "slider__item";
            images[index].className = "slider__item slider__item_active";
        }

    }
});

left.onclick = function() {
    active = images.findIndex((item) => item.className === "slider__item slider__item_active");
    let prev = (active === 0) ? images.length - 1 : active - 1;
    images[active].className = "slider__item";
    images[prev].className = "slider__item slider__item_active";
    dots[active].className = "slider__dot";
    dots[prev].className = "slider__dot slider__dot_active";
    active = prev;
}

right.onclick = function() {
    active = images.findIndex((item) => item.className === "slider__item slider__item_active");
    let next = (active === images.length - 1) ? 0: active + 1;
    images[active].className = "slider__item";
    images[next].className = "slider__item slider__item_active";
    dots[active].className = "slider__dot";
    dots[next].className = "slider__dot slider__dot_active";
    active = next;
}