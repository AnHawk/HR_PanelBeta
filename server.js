const express = require('express');
const axios = require('axios');

const app = express();

const TOKEN = "6746869776:AAFBDOC2iCzZi747ehkV_VtWZlwIe3w8nuU";
const CHAT_IDS = ["-4076977201", "-4095221548"];
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

function sendMessages() {
    const message = "Ваше повідомлення";

    CHAT_IDS.forEach((chatId) => {
        axios.post(URI_API, {
            chat_id: chatId,
            parse_mode: 'html',
            text: message
        })
        .then((res) => {
            console.log("Успіх");
        })
        .catch((err) => {
            console.warn(err);
        });
    });
}

setInterval(sendMessages, 60000); // Відправляти кожну хвилину

app.listen(3000, () => {
    console.log('Сервер працює на порті 3000');
});
