// Повідомлення, які будуть випадково з’являтися
const messages = [
    "1іваіваіваіваіваіваіва",
    "2іваіваіваіваіваіваіваіваіва",
    "3іваіваіваіваіваіваіва",
    "4іваіваіваіваіва"
];

// Елементи DOM
const surpriseButton = document.getElementById('surpriseButton');
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popupMessage');
const popupClose = document.getElementById('popupClose');

// Відкрити спливаюче вікно з випадковим повідомленням
function showSurprise() {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    popupMessage.textContent = randomMessage;
    popup.classList.remove('hidden');
}

// Закрити спливаюче вікно
function closePopup() {
    popup.classList.add('hidden');
}

// Прив’язка подій до кнопки і закриття
surpriseButton.addEventListener('click', showSurprise);
popupClose.addEventListener('click', closePopup);

// Закриття при кліку поза вікном
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        closePopup();
    }
});
