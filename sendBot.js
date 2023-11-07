window.addEventListener('load', function () {
    console.log('Я працюю');
});

const TOKEN = "6746869776:AAFBDOC2iCzZi747ehkV_VtWZlwIe3w8nuU";
const CHAT_IDS = ["-4076977201", "-4095221548"];
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const success = document.querySelector('.alert');

document.getElementById('form378543988').addEventListener('submit', function(e) {
    e.preventDefault();

    let message = `<b>Заявка з сайту</b>\n`;
    message += `<b>Ім'я відправника: </b>${this.Name.value}\n`;
    message += `<b>Номер телефона відправника: </b>${this.Phone.value}\n`;
    message += `<b>Контакти: </b>${this.Contact.value}`;

    // Надсилання повідомлення в кожен чат зі списку CHAT_IDS
    CHAT_IDS.forEach((chatId) => {
        axios.post(URI_API, {
            chat_id: chatId,
            parse_mode: 'html',
            text: message
        })
        .then((res) => {
            this.Name.value = "";
            this.Phone.value = "";
            this.Contact.value = "";
            console.log("Успіх");
            success.style.display = "block";
        })
        .catch((err) => {
            console.warn(err);
        })
        .finally(() => {
            console.log("Finally");
        });
    });
});
