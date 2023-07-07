let tg=window.Telegram.WebApp;

tg.expand();
tg.MainButton.textColor='#FFFFFF';
tg.MainButton.color='#2cab37';

let item ="";

let btn1 = Element.getElementById("btn1");
let btn2 = Element.getElementById("btn2");
let btn3 = Element.getElementById("btn3");
let btn4 = Element.getElementById("btn4");
let btn5 = Element.getElementById("btn5");
let btn6 = Element.getElementById("btn6");

btn1.addEventListener("click", buttonClick("SMAS"));
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