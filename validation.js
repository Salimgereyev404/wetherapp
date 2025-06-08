let input = document.getElementById("input")
let text = document.getElementById("text")
let submit = document.getElementById("submit")
let text1=  document.getElementById('text1')
input.addEventListener("input", function() {
    text1.textContent = input.value
    if (input.value.length < 8) {
        text.textContent = "Құпия сөз 8 таңбадан кем болмауы керек"
        text.style.color = "red"
    } else{
    text.textContent = "Дұрыс"
    text.style.color = "green"}
})

submit.addEventListener("click", function() {
    if (input.value.length < 8) {
        input.setCustomValidity("Өрісті толтырыңыз")
    } 
}
else 
{
        input.setCustomValidity("")
    })
    input.addEventListener(focus, function() {
        text.textContent = "Өрісті толтырыңыз"
        text.style.color = "orange"
    }
)




