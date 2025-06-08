let close1 = document.querySelector(".close");
let modal = document.querySelector(".modal");

let content = document.getElementById("content");


close1.addEventListener("click", function () {
  modal.style.display = "none";
  document.body.style.backgroundColor = "white";
})


content.addEventListener("click", function () {
    modal.style.display = "flex";
    document.body.style.backgroundColor = "black";
    })