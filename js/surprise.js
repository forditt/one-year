document.addEventListener('DOMContentLoaded', () => {
    // Повідомлення, які будуть випадково з’являтися
    const messages = [
        {
            text: '<p>Серденько спить</p>',
            imgSrc: 'img/photo_2024-11-17_01-19-19.jpg',
        },
        {
            text: '<p>Є речі за які мені соромно</p>',
            imgSrc: 'img/photo_2024-11-30_12-12-13.jpg',
        },
        {
            text: '<p>adadsads соромно</p>',
            imgSrc: '',
        },
        {
            text: '<p>Є речі за які мфівфівфівфівфівмно</p>',
            imgSrc: 'img/istockphoto-1160946557-612x612.jpg',
        },
    ];

    // Для зберігання останнього показаного індексу
    let lastIndex = -1;

    // Елементи DOM
    const surpriseButton = document.getElementById('surpriseButton');
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popupMessage');
    const popupClose = document.getElementById('popupClose');
    const refreshButton = document.getElementById('refreshButton');
    const hideableElements = document.querySelectorAll('.hideable'); // Елементи для приховування

    // Функція для формування HTML-коду
    function generateHTML(message) {
        const imgHTML = message.imgSrc 
            ? `<img src="${message.imgSrc}" alt="Surprise Image" class="small-image">` 
            : '';
        return `${message.text}${imgHTML}`;
    }

    // Функція для завантаження зображення перед зміною вмісту
    function preloadImage(src, callback) {
        if (!src) {
            callback();
            return;
        }
        const img = new Image();
        img.onload = callback;
        img.src = src;
    }

    // Функція для отримання випадкового індексу з уникненням повторів
    function getRandomIndex() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * messages.length);
        } while (newIndex === lastIndex);
        lastIndex = newIndex;
        return newIndex;
    }

    // Функція для плавної зміни повідомлення
    function showRandomMessage() {
        popupMessage.classList.add('fade-out'); // Почати зникнення

        const randomIndex = getRandomIndex();
        const randomMessage = messages[randomIndex];

        // Попереднє завантаження зображення
        preloadImage(randomMessage.imgSrc, () => {
            setTimeout(() => {
                popupMessage.innerHTML = generateHTML(randomMessage); // Формуємо HTML динамічно
                popupMessage.classList.remove('fade-out'); // Показати плавно
            }, 300); // Час для завершення fade-out
        });
    }

// Відкрити спливаюче вікно та приховати елементи
function showSurprise() {
    popupMessage.innerHTML = ''; // Скидаємо попередній вміст

    // Додаємо клас для приховування елементів
    hideableElements.forEach(element => {
        element.classList.add('hidden');
    });

    // Забороняємо прокрутку
    document.body.classList.add('no-scroll');

    // Показуємо попап
    popup.classList.remove('hidden');
    showRandomMessage();
}

// Закрити спливаюче вікно та відновити елементи
function closePopup() {
    popup.classList.add('hidden');

    // Дозволяємо прокрутку
    document.body.classList.remove('no-scroll');

    // Показуємо елементи назад
    hideableElements.forEach(element => {
        element.classList.remove('hidden');
    });
}

    // Прив’язка подій
    surpriseButton.addEventListener('click', showSurprise); // Відкрити вікно
    popupClose.addEventListener('click', closePopup); // Закрити вікно
    refreshButton.addEventListener('click', showRandomMessage); // Оновити вміст
});