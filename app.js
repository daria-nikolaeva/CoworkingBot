let tg=window.Telegram.WebApp;

tg.expand();
tg.MainButton.textColor='#FFFFFF';
tg.MainButton.color='#2cab37';

let item ="";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

btn1.addEventListener("click",buttonClick("SMAS"));
btn2.addEventListener("click",buttonClick("DOT"));
btn3.addEventListener("click",buttonClick("SMAS"));
btn4.addEventListener("click",buttonClick("SMAS"));
btn5.addEventListener("click",buttonClick("SMAS"));
btn6.addEventListener("click",buttonClick("SMAS"));


function buttonClick(itemName){
    if (tg.MainButton.isVisible)
    {
        tg.MainButton.hide();
    }
    else
    {
        tg.MainButton.setText("Вы выбрали " + itemName);
        tg.MainButton.show();
    }
}

Telegram.WebApp.onEvent('mainButtonClicked');