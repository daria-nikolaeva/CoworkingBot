const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const botToken = '6027570796:AAFf3y4VBP4H8KR9ff3NKzOGrajklN67ftE'; // �������� �� ��� ����� ����

const bot = new TelegramBot(botToken, { polling: true });

app.post('/button', (req, res) => {
  // ��������� ������� ������
  const chatId = req.body.chatId;
  const itemName = req.body.itemName;

  // ���� ������ ��������� ������

  // �������� ��������� � ����� �� ������� ������
  bot.sendMessage(chatId, '�� ������� ' + itemName);
});

app.listen(3000, () => {
  console.log('������ ������� �� ����� 3000');
});
