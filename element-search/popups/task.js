let popup = document.getElementById("modal_main");
let sucess = document.getElementById("modal_success");
let closeClick = [];
popup.classList = "modal modal_active";

const close = Array.from(document.getElementsByClassName("modal__close"));
close.forEach((element) => {
    closeClick.push(element.onclick = function() {
        element.parentElement.parentElement.classList = "modal";
    })
});

const show = document.getElementsByClassName("show-success");
show[0].onclick = function() {
    sucess.classList = "modal modal_active";
    popup.classList = "modal";
}
