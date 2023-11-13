const form = document.querySelector(".form__1");

const sendData = async () => {
  const name = document.getElementById("Name").value;
  const phone = document.getElementById("Phone").value;
  const contact = document.getElementById("Contact").value;

  await fetch("http://localhost:5508/section", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Name: name,
      Phone: phone,
      Contact: contact,
    }),
  })
    .then(() => {
      alert("Дані надіслано");
    })
    .catch((err) => {
      alert("Помилка");
    });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendData();
});

// const TelegramBot = require('node-telegram-bot-api');
// const axios = require('axios');

// const TOKEN = "6746869776:AAFBDOC2iCzZi747ehkV_VtWZlwIe3w8nuU";
// const CHAT_IDS = ["-4076977201", "-4095221548"];
// const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

// const bot = new TelegramBot(TOKEN, { polling: false });

// // Останній код для відправки повідомлень
// function sendMessages() {
//     let message = `<b>Заявка з сайту</b>\n`;
//     message += `<b>Ім'я відправника: </b>John Doe\n`;
//     message += `<b>Номер телефона відправника: </b>1234567890\n`;
//     message += `<b>Контакти: </b>example@example.com`;

//     CHAT_IDS.forEach((chatId) => {
//         axios.post(URI_API, {
//             chat_id: chatId,
//             parse_mode: 'html',
//             text: message
//         })
//         .then((res) => {
//             console.log("Успіх");
//         })
//         .catch((err) => {
//             console.warn(err);
//         });
//     });
// }

// // Відправляти повідомлення кожну хвилину
// sendMessages(); // Відправити перше повідомлення в момент запуску

// // Викликати sendMessages кожну хвилину
// setInterval(sendMessages, 60000); // 60000 мс = 1 хвилина

// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const TelegramBot = require('node-telegram-bot-api');
// // const axios = require('axios');

// // const app = express();
// // const PORT = process.env.PORT || 3000;

// // // Telegram Bot Configuration
// // const TOKEN = "6746869776:AAFBDOC2iCzZi747ehkV_VtWZlwIe3w8nuU";
// // const CHAT_IDS = ["-4076977201", "-4095221548"];
// // const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
// // const bot = new TelegramBot(TOKEN, { polling: false });

// // app.use(bodyParser.urlencoded({ extended: true }));

// // app.get('/', (req, res) => {
// //     res.sendFile(__dirname + '/index.html'); // Відправляємо HTML-форму на клієнта
// // });

// // app.post('/section', (req, res) => {
// //     const { Name, Phone, Contact } = req.body;

// //     let message = `<b>Заявка з сайту</b>\n`;
// //     message += `<b>Назва оголошення: </b>${Name}\n`;
// //     message += `<b>Текст оголошення: </b>${Phone}\n`;
// //     message += `<b>Контакти для зворотнього зв'язку: </b>${Contact}`;

// //     CHAT_IDS.forEach((chatId) => {
// //         axios.post(URI_API, {
// //             chat_id: chatId,
// //             parse_mode: 'html',
// //             text: message
// //         })
// //         .then((response) => {
// //             console.log("Успішно відправлено");
// //         })
// //         .catch((error) => {
// //             console.warn(error);
// //         });
// //     });

// //     res.send('Дані були надіслані на сервер Node.js');
// // });

// // app.listen(PORT, () => {
// //     console.log(`Сервер запущено на порті ${PORT}`);
// // });

// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const TelegramBot = require('node-telegram-bot-api');
// // const axios = require('axios');

// // const app = express();
// // const PORT = process.env.PORT || 3003;

// // // Telegram Bot Configuration
// // const TOKEN = "6746869776:AAFBDOC2iCzZi747ehkV_VtWZlwIe3w8nuU";
// // const CHAT_IDS = ["-4076977201", "-4095221548"];
// // const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
// // const bot = new TelegramBot(TOKEN, { polling: false });

// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(express.static('public')); // Директорія "public" містить HTML-форму

// // app.post('/send', (req, res) => {
// //     const { Name, Phone, Contact } = req.body;

// //     let message = `<b>Заявка з сайту</b>\n`;
// //     message += `<b>Назва оголошення: </b>${Name}\n`;
// //     message += `<b>Текст оголошення: </b>${Phone}\n`;
// //     message += `<b>Контакти для зворотнього зв'язку: </b>${Contact}`;

// //     CHAT_IDS.forEach((chatId) => {
// //         axios.post(URI_API, {
// //             chat_id: chatId,
// //             parse_mode: 'html',
// //             text: message
// //         })
// //         .then((response) => {
// //             console.log("Успішно відправлено");
// //         })
// //         .catch((error) => {
// //             console.warn(error);
// //         });
// //     });

// //     res.send('Дані були надіслані на сервер Node.js');
// // });

// // app.listen(PORT, () => {
// //     console.log(`Сервер запущено на порті ${PORT}`);
// // });
