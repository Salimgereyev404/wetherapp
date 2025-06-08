let title = document.getElementById("title");
let body = document.querySelector("body");
title.textContent = "Hello World!";
let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  alert("Batyrma Basyldy");
  prompt("Kelisseniz ia dep jazyngiz");
});
btn1.addEventListener("dblclick", function () {
    body.style.backgroundColor = "orange";
    body.style.color = "white";
});
btn2.addEventListener("dblclick", function () {
    body.style.backgroundColor = "white";
    body.style.color = "orange";
});
title.addEventListener("mouseenter", function () {
    title.style.backgroundColor = "blue";
    title.style.color = "red";
});
title.addEventListener("mouseleave", function () {
    title.style.backgroundColor = "white";
    title.style.color = "black";
});