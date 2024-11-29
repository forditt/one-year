const text = "Януся, я кохаю тебе ♡";
const typingTextDiv = document.getElementById("typingText");

function typeText() {
    text.split("").forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char; // Нерозривний пробіл
        span.style.opacity = "0";
        span.style.display = "inline-block"; // Дозволяє застосувати трансформації
        span.style.animation = `typing-effect 0.8s ease-out forwards ${index * 0.15}s`;
        typingTextDiv.appendChild(span);
    });
}

typeText();
