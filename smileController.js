// Отримайте посилання на текстове поле
const textarea = document.getElementById('exampleFormControlTextarea1');
const smileyCatalog = document.querySelector('.smiley-catalog');
const openCatalogButton = document.getElementById('openCatalogButton');

let isCatalogOpen = false;
// Обробник події для відкриття/закриття каталогу смайликів
openCatalogButton.addEventListener('click', function (e) {
    smileyCatalog.classList.toggle('show');
    isCatalogOpen = !isCatalogOpen;
    e.preventDefault();
});

// Обробник події для смайлів
const smileyButtons = document.querySelectorAll('.smiley');
smileyButtons.forEach(function (smileyButton) {
    smileyButton.addEventListener('click', function (e) {
        e.preventDefault(); // Зупиніть стандартну дію кнопки смайлика

        const smiley = this.getAttribute('data-smiley');
        textarea.value += smiley;

        // Закрийте каталог смайликів після вибору
        smileyCatalog.classList.remove('show');
    });
});