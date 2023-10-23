window.addEventListener('load', function () {
    console.log('Я працюю');
});

const TOKEN = "6336295971:AAFWtEDwK9cXKHiuz3L_cVFhLQqmUsAa1xM";
const CHAT_ID = "-1001787066079";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const success = document.querySelector('.alert');

document.getElementById('form378543988').addEventListener('submit', function(e){
    e.preventDefault();

    let message = `<b>Заявка з сайту</b>\n`;
    message += `<b>Ім'я відправника: </b>${this.Name.value}\n`;
    message += `<b>Номер телефона відправника: </b>${this.Phone.value}`;

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res)=>{
        this.Name.value = "";
        this.Phone.value = "";
        console.log("Успіх");
        success.style.display = "block";
    })
    .catch((err)=>{
        console.warn(err);
    })
    .finally((res)=>{
        console.log("Finally");
    })
})