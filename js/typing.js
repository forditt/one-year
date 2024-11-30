const text = "Януся, я кохаю тебе ♡";
const typingTextDiv = document.getElementById("typingText");

function typeText() {
    text.split("").forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char; // Нерозривний пробіл
        span.style.opacity = "0";
        span.style.animation = `fade-in 0.5s ease forwards ${index * 0.1}s`;
        typingTextDiv.appendChild(span);
    });
}

typeText();
