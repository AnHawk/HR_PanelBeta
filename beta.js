
const TOKEN = "6746869776:AAFBDOC2iCzZi747ehkV_VtWZlwIe3w8nuU";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const success = document.querySelector('.alert');
const chatIds = []; // Масив для збереження ID чатів

// Додайте обробник події для кнопки "Зберегти ID чату"
document.getElementById('saveChatId').addEventListener('click', function () {
  const chatIdInput = document.getElementById('chatIdInput');
  const chatId = chatIdInput.value;
  chatIds.push(chatId); // Додати ID чату до масиву
  chatIdInput.value = ''; // Очистити поле введення
});

// Додайте обробник події для кнопки "Надіслати повідомлення в чат"
document.getElementById('sendMessageToChat').addEventListener('click', function () {
    const name = document.getElementById('Name').value;
    // const phone = document.getElementById('Phone').value;
    // const contact = document.getElementById('Contact').value;

    chatIds.forEach((chatId) => {
      sendMessageToChat(chatId, name);
    });
  });

  function sendMessageToChat(chatId, name, phone, contact) {
    let message = `<b>Заявка з сайту</b>\n`;
    message += `<b>Ім'я відправника: </b>${name}\n`;
    // message += `<b>Номер телефона відправника: </b>${phone}\n`;
    // message += `<b>Контакти: </b>${contact}`;

    axios.post(URI_API, {
      chat_id: chatId,
      parse_mode: 'html',
      text: message
    })
      .then((res) => {
        document.getElementById('Name').value = "";
        // document.getElementById('Phone').value = "";
        // document.getElementById('Contact').value = "";
        console.log("Успіх");
        success.style.display = "block";
      })
      .catch((err) => {
        console.warn(err);
      })
      .finally(() => {
        console.log("Finally");
      });
  }