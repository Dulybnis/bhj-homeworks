let dropDown = document.getElementsByClassName("dropdown__value")[0];
let dropDownItems = Array.from(document.getElementsByClassName("dropdown__item"));

dropDown.addEventListener("click", function() {
    console.log("click");
    dropDown.parentElement.children[1].className = (dropDown.parentElement.children[1].className === "dropdown__list dropdown__list_active") ? "dropdown__list" : "dropdown__list dropdown__list_active";
});

dropDownItems.forEach((element) => {
    element.addEventListener("click", function(event) {
        event.target.closest("div").firstElementChild.textContent = event.target.innerText;
        dropDown.parentElement.children[1].className = "dropdown__list";
        console.log(event.target.innerText);
        event.preventDefault();
    })
})
