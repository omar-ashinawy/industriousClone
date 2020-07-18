let menuBtn = document.getElementById("menuBtn");
let closeBtn = document.querySelectorAll(".closeBtn");
let menu = document.querySelector(".menu-container");
// let content = document.querySelector(".content");
// let body = document.body;

menuBtn.addEventListener("change", toggleMenu);
function toggleMenu() {
    if (menuBtn.checked == true){
        menu.style.right = "0";
    }
}

closeBtn.forEach(function (element) {
    element.addEventListener("click", function () {
        menu.style.right = "-317px";
        menuBtn.checked = false;
        // console.log("clicked");
    });
});
console.log(document.getElementById("video").style.left);