const startDate = new Date('2023-12-08T18:40:00'); // Дата початку стосунків

function updateTime() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const timeTogether = `
    Ми разом: ${days} днів, ${hours} годин, ${minutes} хвилин, ${seconds} секунд
    `;

    document.getElementById('timeTogether').textContent = timeTogether;
}

setInterval(updateTime, 1000);
updateTime();
