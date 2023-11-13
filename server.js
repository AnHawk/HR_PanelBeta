const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const schedule = require("node-schedule");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const botToken = "6746869776:AAFBDOC2iCzZi747ehkV_VtWZlwIe3w8nuU";
const URI_API = `https://api.telegram.org/bot${botToken}/sendMessage`;
const CHAT_IDS = ["-4076977201", "-4095221548"];

app.post("/section", (req, res) => {
  console.log(req.body);
  const { Name, Phone, Contact } = req.body;

  let message = `<b>Заявка з сайту</b>\n`;
  message += `<b>Ім'я відправника: </b>${Name}\n`;
  message += `<b>Номер телефона відправника: </b>${Phone}\n`;
  message += `<b>Контакти: </b>${Contact}`;

  CHAT_IDS.forEach((chatId) => {
    axios
      .post(URI_API, {
        chat_id: chatId,
        parse_mode: "html",
        text: message,
      })
      .then((response) => {
        console.log("Успіх");
      })
      .catch((error) => {
        console.warn(error);
      });
  });

  res.send("Повідомлення надіслано");

  schedule.scheduleJob("* * * * *", () => {
    CHAT_IDS.forEach((chatId) => {
      axios
        .post(URI_API, {
          chat_id: chatId,
          parse_mode: "html",
          text: message,
        })
        .then((response) => {
          console.log("Дані надіслано повторно");
        })
        .catch((error) => {
          console.warn(error);
        });
    });
  });
});

app.listen(5508, () => {
  console.log("Сервер працює на порті 5508");
});
