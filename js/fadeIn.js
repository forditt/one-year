document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");
    
    fadeElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = "1"; // Встановлюємо видимість
            element.style.animation = `fade-in 1s ease-out forwards`;
        }, index * 300); // Затримка в 300 мс між елементами
    });
});
