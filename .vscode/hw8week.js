let Input = document.getElementById("Input");
let result = document.getElementById("result");

input.addEventListener("keydown", function () {
    if (event.key === "Enter") {
        result.textContent = input.value;
        console.log = input.value;
       
    }
})