window.addEventListener('load', function () {
    console.log('Я працюю');
  });
  
  const TOKEN = "6746869776:AAFBDOC2iCzZi747ehkV_VtWZlwIe3w8nuU";
  const CHAT_IDS = ["-4076977201", "-4095221548"];
  const API_URL = `http://127.0.0.1:5505/send-message`;
  
  const success = document.querySelector('.alert');
  
  document.getElementById('form378543988').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const Name = encodeURIComponent(this.Name.value);
    const Phone = encodeURIComponent(this.Phone.value);
    const Contact = encodeURIComponent(this.Contact.value);
  
    // Надсилання POST-запиту з даними у тілі запиту
    CHAT_IDS.forEach((chatId) => {
      axios.post(API_URL, { Name, Phone, Contact })
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
  