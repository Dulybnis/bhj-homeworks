let popup = document.getElementById("modal_main");
let sucess = document.getElementById("modal_success");
popup.classList = "modal modal_active";

const close = document.getElementsByClassName("modal__close");
close[0].onclick = function() {
    popup.classList = "modal";
};

const show = document.getElementsByClassName("show-success");
show[0].onclick = function() {
    sucess.classList = "modal modal_active";
    popup.classList = "modal";
}

close[2].onclick = function() {
    sucess.classList = "modal";
};