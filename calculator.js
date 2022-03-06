const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded',(e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 1000);
})

function sum()
{
    var var1 = document.getElementById("first");
    var var2 = document.getElementById("second");
    document.getElementById("answer").innerText =  "Addition : " + String(Number(var1.value) + Number(var2.value));
}

function sub()
{
    var var1 = document.getElementById("first");
    var var2 = document.getElementById("second");
    document.getElementById("answer").innerText = "Subtraction : " +  String(Number(var1.value) - Number(var2.value));
}

function mux()
{
    var var1 = document.getElementById("first");
    var var2 = document.getElementById("second");
    document.getElementById("answer").innerText =  "Multiplicaiton : " + String(Number(var1.value) * Number(var2.value));
}

function div()
{
    var var1 = document.getElementById("first");
    var var2 = document.getElementById("second");
    document.getElementById("answer").innerText =  "Division : " + String(Number(var1.value) / Number(var2.value));
}

(()=>{
    console.log("Hello");
})()
