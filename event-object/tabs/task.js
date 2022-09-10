let tab = Array.from(document.getElementsByClassName("tab"));
let activeTab = tab.findIndex((element) => element.className === "tab tab_active");
let tabContent = Array.from(document.getElementsByClassName("tab__content"));

tab.forEach((element, index) => {
    element.onclick = function(){
        tab[activeTab].className = "tab";
        tabContent[activeTab].className = "tab__content";
        element.className = "tab tab_active";
        activeTab = index;
        tabContent[activeTab].className = "tab__content tab__content_active";
    };
});