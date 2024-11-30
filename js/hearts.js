const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');

// Налаштування canvas на розміри сторінки
function resizeCanvas() {
    canvas.width = Math.max(document.documentElement.scrollWidth, window.innerWidth);
    canvas.height = Math.max(document.documentElement.scrollHeight, window.innerHeight);
}

// Параметри
const hearts = [];
const maxHearts = 150;
const mouse = {
    x: -9999,
    y: -9999,
    radius: 100,
    isTouching: false,
};

// Клас Heart
class Heart {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -50;
        this.size = Math.random() * 15 + 5;
        this.speed = Math.random() * 1.5 + 0.5;
        this.opacity = 0;
        this.fadeInSpeed = Math.random() * 0.02 + 0.01;
        this.swingAmplitude = Math.random() * 20 + 10;
        this.swingFrequency = Math.random() * 0.02 + 0.01;
        this.vx = 0;
        this.vy = 0;
        this.glowIntensity = 10;
        this.targetGlow = 10;
        this.age = 0;
        this.rotation = 0;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = 'red';
        ctx.shadowColor = `rgba(255, 0, 0, ${Math.min(this.opacity + 0.5, 1)})`;
        ctx.shadowBlur = this.glowIntensity;

        const x = this.x + Math.sin(this.age * this.swingFrequency) * this.swingAmplitude;
        const y = this.y;

        ctx.translate(x, y);
        ctx.rotate(this.rotation);
        ctx.beginPath();
        const size = this.size;
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-size / 2, -size / 2, -size, size / 3, 0, size);
        ctx.bezierCurveTo(size, size / 3, size / 2, -size / 2, 0, 0);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    update() {
        this.age++;
        if (this.opacity < 1) {
            this.opacity += this.fadeInSpeed;
        }
        this.x += this.vx;
        this.y += this.vy + this.speed;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (mouse.isTouching && distance < mouse.radius) {
            const angle = Math.atan2(dy, dx);
            const force = (mouse.radius - distance) / mouse.radius;
            this.vx += Math.cos(angle) * force * 0.5;
            this.vy += Math.sin(angle) * force * 0.5;
            this.targetGlow = 50;
            this.rotation = angle;
        } else {
            this.vx *= 0.95;
            this.vy *= 0.95;
            this.targetGlow = 10;
            this.rotation *= 0.95;
        }

        this.glowIntensity += (this.targetGlow - this.glowIntensity) * 0.1;

        if (
            this.y > canvas.height + this.size ||
            this.x < -this.size ||
            this.x > canvas.width + this.size ||
            this.y < -this.size
        ) {
            this.reset();
        }
    }
}

// Додавання сердець
function addHeart() {
    if (hearts.length < maxHearts) {
        hearts.push(new Heart());
    }
}

// Анімація
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach((heart) => {
        heart.update();
        heart.draw();
    });
    requestAnimationFrame(animate);
}

// Спавн сердець
function spawnHearts() {
    setInterval(addHeart, 200);
}

// Відстеження миші та дотиків
function trackMouse(e) {
    mouse.x = (e.clientX || e.touches[0].clientX) + window.scrollX;
    mouse.y = (e.clientY || e.touches[0].clientY) + window.scrollY;
    mouse.isTouching = true;
}

function resetMouse() {
    mouse.x = -9999;
    mouse.y = -9999;
    mouse.isTouching = false;
}

// Події
window.addEventListener('mousemove', trackMouse);
window.addEventListener('mouseup', resetMouse);
window.addEventListener('touchstart', (e) => trackMouse(e.touches[0]));
window.addEventListener('touchmove', (e) => trackMouse(e.touches[0]));
window.addEventListener('touchend', resetMouse);
window.addEventListener('touchcancel', resetMouse);
window.addEventListener('resize', resizeCanvas);

// Ініціалізація
resizeCanvas();
spawnHearts();
animate();
