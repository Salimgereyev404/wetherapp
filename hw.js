// let a =9;
// let b = 6;
// let c =0;
// function gcd(){
//     for (let i = 0; i<a; i++){
//         if (a % i == 0 && b % i == 0){
//             c=i;
//         }
//     }
//     console.log(c)
// }
// gcd()


// let a = 9;
// let b = 6;
// let c = 0;
// function traingleType(){
//     if (a == b && b == c){
//         console.log("equilateral")
//     }else if (a == b || b == c || a == c){
//         console.log("isosceles")
//     }else{
//         console.log("scalene")
//     }
// }
// traingleType()


// let kz = document.getElementById("kz")
// let ru = document.getElementById("ru")
// let en = document.getElementById("en")
// let drop = document.getElementById("drop")
// let clear = document.getElementById("clear")
// let text = document.getElementById("text")
// drop.value = localStorage.getItem("lang") 
// text.textContent = localStorage.getItem("lang")

// drop.addEventListener("change", function(){
//     localStorage.setItem("lang", drop.value)
//     localStorage.setItem("text", text.textContent)
//     if (drop.value == "kz"){
//         text.textContent = "qazaqsha"
//     }else if (drop.value == "ru"){
//         text.textContent = "po-russki"
        
//     }}else if (drop.value == "en"){
//         text.textContent = "in english"
//     }
// )

// clear.addEventListener("click", function(){
//     localStorage.clear()
// })