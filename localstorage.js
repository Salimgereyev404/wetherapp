let name = document.getElementById("name")
let surname = document.getElementById("surname")
let age = document.getElementById("age")
let submit = document.getElementById("submit")
let remove = document.getElementById("remove")



submit.addEventListener("click", function(){
    let user_information = {
        name: name.value,
        surname: surname.value,
        age: age.value
    }
    console.log(user_information)
    localStorage.setItem('user',JSON.stringify(user_information))
})

get.addEventListener('click', function(){
    let a =JSON.parse(localStorage.getItem('user'))
    result.textContent = a.name
})

remove.addEventListener('click', function(){
    localStorage.removeItem('user')
})
let dark = document.getElementById("dark")
let body = document.querySelector("body")

let a = localStorage.getItem('theme')
body.style.backgroundColor = a;
dark.addEventListener('click', function(){
    body.style.backgroundColor = 'black'
    localStorage.setItem('theme', 'black')
})


light.addEventListener('click', function(){
    body.style.backgroundColor = 'white'
    localStorage.setItem('theme', 'white')
})
