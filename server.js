const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const botToken = '6746869776:AAFBDOC2iCzZi747ehkV_VtWZlwIe3w8nuU'; // Отримайте токен у BotFather на Telegram
const bot = new TelegramBot(botToken, { polling: false });

const CHAT_IDS = ["-4076977201", "-4095221548"];

app.post('/send-message', (req, res) => {
  const { Name, Phone, Contact } = req.body;

  const message = `<b>Заявка з сайту</b>\n`;
  message += `<b>Ім'я відправника: </b>${Name}\n`;
  message += `<b>Номер телефона відправника: </b>${Phone}\n`;
  message += `<b>Контакти: </b>${Contact}`;


  CHAT_IDS.forEach((chatId) => {
    bot.sendMessage(chatId, message, { parse_mode: 'HTML' })
      .then(() => {
        console.log("Успіх");
      })
      .catch((err) => {
        console.warn(err);
      });
  });

  res.send('Повідомлення надіслано');
});

app.listen(3000, () => {
  console.log('Сервер працює на порті 3000');
});
