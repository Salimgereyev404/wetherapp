let sec = document.getElementById('sec')
let start = document.getElementById('start')
let stop = document.getElementById('stop')
let min =  document.getElementById('min')
let hour = document.getElementById('hour')
let days = document.getElementById('days')
let num1 = sec.textContent;
let num2 =  min.textContent;
let num3 =  hour.textContent;
let num4 = days.textContent;
let int = '';

start.addEventListener('click', function(){
    int = setInterval(()=>{
        num1++;
        sec.textContent = num1;
        if(num1 ==60){
            num1 = 0;
            num2++
            min.textContent =  num2
        }else if(num2==59){
            num2=-1;
            num3++;
            hour.textContent = num3
        }else if(num3==23){
            num3=-1;
            num4++;
            days.textContent = num4
        }
    }, 10)
})

stop.addEventListener('click', function(){
    clearInterval(int)
})