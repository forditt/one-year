document.addEventListener('DOMContentLoaded', () => {
    // Повідомлення, які будуть випадково з’являтися
    const messages = [
        {
            text: '<p>Серденько проснулась</p>',
            imgSrc: 'img/photo_2024-11-17_01-19-19.jpg',
        },
        {
            text: '<p>Є речі за які мені соромно</p>',
            imgSrc: 'img/photo_2024-11-30_12-12-13.jpg',
        },
        {
            text: '<p>Модний типу</p>',
            videoSrc: 'video/doc_2024-12-07_23-30-53.mp4' // Додано відео
        },
        {
            text: '<p>Я ціную твої подарунки</p>',
            videoSrc: 'video/doc_2024-12-08_00-34-29.mp4' // Додано відео
        },
        {
            text: '<p>Сігма</p>',
            videoSrc: 'video/doc_2024-12-08_00-34-24.mp4' // Додано відео
        },
        {
            text: '<p>Інтраверт типу</p>',
            videoSrc: 'video/doc_2024-12-08_00-34-20.mp4' // Додано відео
        },
        {
            text: '<p>Приватна охорона - +380 66 628 21 75</p>',
            videoSrc: 'video/videjkl;kjl;klj;o.mp4' // Додано відео
        },
        {
            text: '<p>Красуня сидить на лавочці</p>',
            videoSrc: 'video/videdfghdfghghfo.mp4' // Додано відео
        },
        {
            text: '<p>"Празднічний вайбік"</p>',
            videoSrc: 'video/vighfjfghjgfhjdeo.mp4' // Додано відео
        },
        {
            text: '<p>Де я</p>',
            videoSrc: 'video/videodfgdfg.mp4' // Додано відео
        },
        {
            text: '<p>Хороші новивни - котик погудований</p>',
            videoSrc: 'video/videoвапвапвапвап.mp4' // Додано відео
        },
        {
            text: '<p>кліп кліп</p>',
            videoSrc: 'video/doc_2024-12-08_00-33-37.mp4' // Додано відео
        },
        {
            text: '<p>Жаба ляяяя</p>',
            videoSrc: 'video/doc_2024-12-08_00-32-57.mp4' // Додано відео
        },
        {
            text: '<p>А я теж так хочу</p>',
            videoSrc: 'video/doc_2024-12-08_00-32-35.mp4' // Додано відео
        },
        {
            text: '<p>"Я больше не арменин"</p>',
            videoSrc: 'video/doc_2024-12-08_00-32-58.mp4' // Додано відео
        },
        {
            text: '<p>Яна любить котиків, тому я запишу відео для Яни</p>',
            videoSrc: 'video/doc_2024-12-08_00-33-00.mp4' // Додано відео
        },
        {
            text: '<p>Що тут коїться</p>',
            videoSrc: 'video/doc_2024-12-08_00-33-04.mp4' // Додано відео
        },
        {
            text: '<p>Довго волосик</p>',
            videoSrc: 'video/doc_2024-12-08_00-32-42.mp4' // Додано відео
        },
        {
            text: '<p>Я приходив на це місце, хоть трошки, відчути те за чим скучав </p>',
            videoSrc: 'video/doc_2024-12-08_00-32-44.mp4' // Додано відео
        },
        {
            text: '<p>- :)</p>',
            videoSrc: 'video/doc_2024-12-08_00-33-06.mp4' // Додано відео
        },
        {
            text: '<p>Ля яка краса</p>',
            videoSrc: 'video/doc_2024-12-08_00-32-46.mp4' // Додано відео
        },
        {
            text: '<p>Яна пусти мене ЯНААААА</p>',
            videoSrc: 'video/doc_2024-12-08_00-33-08.mp4' // Додано відео
        },
        {
            text: '<p>Valorant трішки допоміг нам обєднатись</p>',
            videoSrc: 'video/video.mp4' // Додано відео
        },
        {
            text: '<p>Місце з яким звязані наші спогади</p>',
            videoSrc: 'video/doc_2024-12-08_00-33-10.mp4' // Додано відео
        },
        {
            text: '<p>Фото отчот</p>',
            videoSrc: 'video/videoпар.mp4' // Додано відео
        },
        {
            text: '<p>КепОчка</p>',
            videoSrc: 'video/doc_2024-12-08_00-32-50.mp4' // Додано відео
        },
        {
            text: '<p>Він тут - Помахай Святославові</p>',
            videoSrc: 'video/videoвапвап.mp4' // Додано відео
        },
        {
            text: '<p>Я ціную десятки годин наших розмов</p>',
            videoSrc: 'video/doc_2024-12-08_00-32-55.mp4' // Додано відео
        },
        {
            text: '<p>А Яна казала що мені йде моя стрижка</p>',
            videoSrc: 'video/doc_2024-12-08_00-32-52.mp4' // Додано відео
        },
        {
            text: '<p>Це колечко було згадкою про наші моменти, але вони на завжди у моєму серці</p>',
            imgSrc: 'img/2.png'
        },
        {
            text: '<p>Перший раз, коли ми годували котиків</p>',
            imgSrc: 'img/IMG_20230503_193841.jpg'
        },
        {
            text: '<p>:></p>',
            imgSrc: 'img/IMG_20241208_023614_598.jpg'
        },
        {
            text: '<p>Твої губи на моїх відчуваються так тепло</p>',
            imgSrc: 'img/photo_2024-12-08_02-54-25.jpg'
        },
        {
            text: '<p>Я люблю Янусю</p>',
            imgSrc: 'img/photo_2024-12-08_02-55-06.jpg'
        },
        {
            text: '<p>Я завжди....</p>',
            imgSrc: 'img/Screenshot_20241130-153412.png'
        },
        {
            text: '<p>Хороший насправді</p>',
            imgSrc: 'img/Screenshot_20241207-232842.png'
        },
        {
            text: '<p>Я старався натякати</p>',
            imgSrc: 'img/Screenshot_20241208-010452.png'
        },
        {
            text: '<p>Трошки попутала</p>',
            imgSrc: 'img/Screenshot_20241208-011058.png'
        },
        {
            text: '<p>ЯНАААААА</p>',
            imgSrc: 'img/Screenshot_20241208-011120.png'
        },
        {
            text: '<p>Сміливості не вистачило</p>',
            imgSrc: 'img/Screenshot_20241208-011338.png'
        },
        {
            text: '<p>Точно деяких?</p>',
            imgSrc: 'img/Screenshot_20241208-011800.png'
        },
        {
            text: '<p>Я говорив правду!</p>',
            imgSrc: 'img/Screenshot_20241208-012114.png'
        },
        {
            text: '<p>❤️❤️❤️❤️❤️❤️❤️</p>',
            imgSrc: 'img/Screenshot_20241208-012207.png'
        },
        {
            text: '<p>Ми заведем корову?</p>',
            imgSrc: 'img/Screenshot_20241208-012304.png'
        },
        {
            text: '<p>Ми боялись один одного</p>',
            imgSrc: 'img/Screenshot_20241208-012604.png'
        },
        {
            text: '<p>Перше привітання</p>',
            imgSrc: 'img/Screenshot_20241208-012635.png'
        },
        {
            text: '<p>Я гігант</p>',
            imgSrc: 'img/Screenshot_20241208-013815.png'
        },
        {
            text: '<p>Ми трошки недоговорювали</p>',
            imgSrc: 'img/Screenshot_20241208-014409.png'
        },
        {
            text: '<p>Я люблю тебе обіймати, дуже дуже</p>',
            imgSrc: 'img/Screenshot_20241208-014756.png'
        },
        {
            text: '<p>Жадіни</p>',
            imgSrc: 'img/Screenshot_20241208-020118.png'
        },
        {
            text: '<p>Дивні, але правдиві</p>',
            imgSrc: 'img/Screenshot_20241208-020240.png'
        },
        {
            text: '<p>Йдем</p>',
            imgSrc: 'img/Screenshot_20241208-020317.png'
        },
        {
            text: '<p>Соня</p>',
            imgSrc: 'img/Screenshot_20241208-020555.png'
        },
        {
            text: '<p>Я люблю твої ранішні сердечка</p>',
            imgSrc: 'img/Screenshot_20241208-020637.png'
        },
        {
            text: '<p>Я хочу піклуватись за тебе</p>',
            imgSrc: 'img/Screenshot_20241208-020729.png'
        },
        {
            text: '<p>Воно мало рацію</p>',
            imgSrc: 'img/Screenshot_20241208-020828.png'
        },
        {
            text: '<p>❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️</p>',
            imgSrc: 'img/Screenshot_20241208-022747.png'
        },
        {
            text: '<p>Ця акуратно складена сорочка, була для мене особливою</p>',
            imgSrc: 'img/Screenshot_20241208-021828.png'
        },
        {
            text: '<p>Моя доросла дівчинка :></p>',
            imgSrc: 'img/Screenshot_20241208-024108.png'
        },
        {
            text: '<p>Я?</p>',
            imgSrc: 'img/Screenshot_20241208-023858.png'
        },
        {
            text: '<p>Подзвони мені...</p>',
            imgSrc: 'img/Screenshot_20241208-022251.png'
        },
        {
            text: '<p>Говорю і говорю, це до кращого</p>',
            imgSrc: 'img/Screenshot_20241208-021200.png'
        },
        {
            text: '<p>Твоя любов і довіра взаємні</p>',
            imgSrc: 'img/Screenshot_20241208-021234.png'
        },
        {
            text: '<p>Я буду поряд, обіцяю</p>',
            imgSrc: 'img/Screenshot_20241208-021813.png'
        },
        {
            text: '<p>Надіюсь моя інструкція допомогла</p>',
            imgSrc: 'img/Screenshot_20241208-021900.png'
        },
        {
            text: '<p>Так люблю твої зворушливі повідомлення</p>',
            imgSrc: 'img/Screenshot_20241208-021918.png'
        },
        {
            text: '<p>Милі відео це ідеально</p>',
            imgSrc: 'img/Screenshot_20241208-021930.png'
        },
        {
            text: '<p>Все пройде і налагодиться!</p>',
            imgSrc: 'img/Screenshot_20241208-022109.png'
        },
        {
            text: '<p>Добраніч</p>',
            imgSrc: 'img/Screenshot_20241208-023939.png'
        },
        {
            text: '<p>Я так добре памятаю нашу першу ночівлю</p>',
            imgSrc: 'img/Screenshot_20241208-023815.png'
        },
        {
            text: '<p>У тебе справді дуже красива усмішка!</p>',
            imgSrc: 'img/Screenshot_20241208-023514.png'
        },
        {
            text: '<p>Стосунки - спільна робота один для одного</p>',
            imgSrc: 'img/Screenshot_20241208-022556.png'
        },
        {
            text: '<p>Твій силует у моїх снах, це найкраще що я можу в них побачити</p>',
            imgSrc: 'img/Screenshot_20241208-022722.png'
        },
        {
            text: '<p>Навіть коли ми багато часу разом, я все ще часто скучаю</p>',
            imgSrc: 'img/Screenshot_20241208-023247.png'
        },
        {
            text: '<p>Ніхто і нічого мене так не гріє, як ти</p>',
            imgSrc: 'img/Screenshot_20241208-022443.png'
        },
        {
            text: '<p>Ми команда!</p>',
            imgSrc: 'img/Screenshot_20241208-022151.png'
        },
        {
            text: '<p>Ти допомагаєш мені йти далі</p>',
            imgSrc: 'img/Screenshot_20241208-022127.png'
        },
        {
            text: '<p>Моя хороша хороша красуня</p>',
            imgSrc: 'img/photo_2024-12-08_03-57-12.jpg'
        },
        {
            text: '<p>хі</p>',
            imgSrc: 'img/photo_2024-11-09_22-17-55.jpg'
        }, 
    ];

     // Змінні для збереження стану
     const lastIndexes = [];
     const MAX_RECENT_INDEXES = Math.min(5, messages.length); // Максимальна кількість індексів
     const popupMessageFadeDuration = 300; // Тривалість анімації fade (в мс)
 
     // Елементи DOM
     const surpriseButton = document.getElementById('surpriseButton');
     const popup = document.getElementById('popup');
     const popupMessage = document.getElementById('popupMessage');
     const popupClose = document.getElementById('popupClose');
     const refreshButton = document.getElementById('refreshButton');
     const hideableElements = document.querySelectorAll('.hideable');
 
     // Функція для формування HTML-коду
     function generateHTML({ text, imgSrc, videoSrc }) {
         const imgHTML = imgSrc ? `<img src="${imgSrc}" alt="Surprise Image" class="small-image">` : '';
         const videoHTML = videoSrc 
             ? `<video autoplay loop muted class="small-video">
                   <source src="${videoSrc}" type="video/mp4">
                   Ваш браузер не підтримує відео.
                </video>`
             : '';
         return `${text || ''}${imgHTML}${videoHTML}`;
     }
 
     // Функція для попереднього завантаження зображення
     function preloadImage(src, callback) {
         if (!src) {
             callback();
             return;
         }
         const img = new Image();
         img.onload = callback;
         img.onerror = () => {
             console.error(`Не вдалося завантажити зображення: ${src}`);
             callback(); // Викликати callback навіть у разі помилки
         };
         img.src = src;
     }
 
     // Функція для отримання випадкового індексу без повторів
     function getRandomIndex() {
         let newIndex;
         do {
             newIndex = Math.floor(Math.random() * messages.length);
         } while (lastIndexes.includes(newIndex));
 
         // Оновлюємо список останніх індексів
         lastIndexes.push(newIndex);
         if (lastIndexes.length > MAX_RECENT_INDEXES) {
             lastIndexes.shift(); // Видаляємо найстаріший індекс
         }
 
         return newIndex;
     }
 
     // Функція для показу випадкового повідомлення
     function showRandomMessage() {
         popupMessage.classList.add('fade-out'); // Запускаємо анімацію fade-out
 
         const randomIndex = getRandomIndex();
         const randomMessage = messages[randomIndex];
 
         // Завантаження зображення перед відображенням
         preloadImage(randomMessage.imgSrc, () => {
             setTimeout(() => {
                 popupMessage.innerHTML = generateHTML(randomMessage); // Вставляємо новий HTML
                 popupMessage.classList.remove('fade-out'); // Плавне повернення
             }, popupMessageFadeDuration);
         });
     }
 
     // Відкрити спливаюче вікно
     function showSurprise() {
         popupMessage.innerHTML = ''; // Очищення попереднього вмісту
 
         // Додаємо клас для приховування елементів
         hideableElements.forEach(element => element.classList.add('hidden'));
 
         // Забороняємо прокрутку
         document.body.classList.add('no-scroll');
 
         // Відображаємо попап
         popup.classList.remove('hidden');
         showRandomMessage();
     }
 
     // Закрити спливаюче вікно
     function closePopup() {
         popup.classList.add('hidden');
 
         // Дозволяємо прокрутку
         document.body.classList.remove('no-scroll');
 
         // Відновлюємо приховані елементи
         hideableElements.forEach(element => element.classList.remove('hidden'));
     }
 
     // Прив’язка подій
     surpriseButton.addEventListener('click', showSurprise); // Відкрити попап
     popupClose.addEventListener('click', closePopup); // Закрити попап
     refreshButton.addEventListener('click', showRandomMessage); // Оновити повідомлення
 });