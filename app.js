let tg=window.Telegram.WebApp;

tg.expand();
tg.MainButton.textColor='#FFFFFF';
tg.MainButton.color='#2cab37';

let item ="";

let btn1=Element.GetElementById("btn1");
let btn2=Element.GetElementById("btn2");
let btn3=Element.GetElementById("btn3");
let btn4=Element.GetElementById("btn4");
let btn5=Element.GetElementById("btn5");
let btn6=Element.GetElementById("btn6");

btn1.EventListener("click",buttonClick("SMAS"));
btn2.EventListener("click",buttonClick("DOT"));
btn3.EventListener("click",buttonClick("SMAS"));
btn4.EventListener("click",buttonClick("SMAS"));
btn5.EventListener("click",buttonClick("SMAS"));
btn6.EventListener("click",buttonClick("SMAS"));


function buttonClick(itemName){
    if(tg.MainButton.IsVisible){
        tg.MainButton.hide();
    }else{
        tg.MainButton.SetText("Вы выбрали "+itemName);
    }
}