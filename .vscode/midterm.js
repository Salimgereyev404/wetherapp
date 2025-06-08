let body = document.querySelector("body");

let name = document.getElementById("name");
let email = document.getElementById("email");
let dob = document.getElementById("dob");
let btn = document.getElementById("btn");
let color = document.getElementById("color");
let cc =''

const input = document.getElementById("nameInput");
name.style.width = "100%";
email.style.width = "100%";
dob.style.width = "100%";
color.style.width = "100%";

btn.addEventListener("click", function () {
    cc = color.value;
    body.style.backgroundColor = cc;
});



    