var button = document.querySelector(".hamburger");
var nav = document.querySelectorAll(".column-5");
var count = 0;

button.addEventListener("click", openAndClose);

function openAndClose() {

    if (count % 2 < 1) {
        button.src = "../assets/close.svg";

        for (i = 0; i < nav.length; ++i) {
            nav[i].style.display = "block";
        }
        count++;


    } else {
        button.src = "../assets/nav.svg";

        for (i = 0; i < nav.length; ++i) {
            nav[i].style.display = "none";
        }
        count++;

    }
}