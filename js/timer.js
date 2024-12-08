const startDate = new Date('2023-12-08T18:40:00'); // Дата початку стосунків

function updateTime() {
    const now = new Date();
    const diff = now - startDate;

    // Рахуємо кількість днів, годин, хвилин і секунд
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // Обчислюємо загальну кількість хвилин
    const totalMinutes = Math.floor(diff / (1000 * 60));

    const timeTogether = `
    Разом: ${days} днів  ${hours}г ${minutes}хв ${seconds}с
    `;

    document.getElementById('timeTogether').innerHTML = timeTogether; // Використовуємо innerHTML, щоб дозволити HTML-розмітку (наприклад, <br> для переносу рядка)
}
 //    <br>Загальна кількість хвилин: ${totalMinutes} хв
    
// Оновлення часу кожну секунду
setInterval(updateTime, 1000);
updateTime();
