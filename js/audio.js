const audio = document.getElementById('background-audio');
const button = document.getElementById('play-audio');

// Подія для кнопки
button.addEventListener('click', () => {
  audio.volume = 1; // Встановлюємо гучність
  audio.play().then(() => {
    console.log('Музика запущена');

    // Додаємо клас для плавного зникнення кнопки
    button.classList.add('fade-out');

    // Прибираємо кнопку з DOM після завершення анімації
    setTimeout(() => {
      button.style.display = 'none';
    }, 500); // Час відповідає тривалості transition (0.5s)
  }).catch(error => {
    console.log('Не вдалося запустити музику:', error);
  });
});