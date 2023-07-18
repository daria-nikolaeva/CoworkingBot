const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const botToken = '6027570796:AAFf3y4VBP4H8KR9ff3NKzOGrajklN67ftE'; // Замените на ваш токен бота

const bot = new TelegramBot(botToken, { polling: true });

app.post('/button', (req, res) => {
  // Обработка нажатия кнопки
  const chatId = req.body.chatId;
  const itemName = req.body.itemName;

  // Ваша логика обработки кнопки

  // Отправка сообщения в ответ на нажатие кнопки
  bot.sendMessage(chatId, 'Вы выбрали ' + itemName);
});

app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});

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

btn1.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали SMAS");
        tg.MainButton.show();
    }
});
btn2.addEventListener("click", function () {buttonClick("DOT"); });
btn3.addEventListener("click", function () {buttonClick("SMAS"); });
btn4.addEventListener("click", function () {buttonClick("SMAS"); });
btn5.addEventListener("click", function () {buttonClick("SMAS"); });
btn6.addEventListener("click", function () {buttonClick("SMAS"); });


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
function sendData(itemName) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/button');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({ chatId: 'YOUR_CHAT_ID', itemName: itemName }));
}

tg.onEvent('mainButtonClicked', function() { tg.sendData(item) });