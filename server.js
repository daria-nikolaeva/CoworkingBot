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
