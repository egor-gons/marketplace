const slides = document.querySelectorAll('.slide');
const circles = document.querySelectorAll('.circle');

let currentIndex = 0;

function goToSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });

    circles.forEach((circle, i) => {
        if (i === index) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(currentIndex);
}

circles.forEach((circle, i) => {
    circle.addEventListener('click', () => {
        goToSlide(i);
        currentIndex = i;
    });
});

// Добавляем события для свайпов
let startX = 0;
let startY = 0;

document.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
});

document.addEventListener('touchend', e => {
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const deltaX = endX - startX;
    const deltaY = endY - startY;

    // Проверяем, был ли свайп вправо или влево
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
            prevSlide();
        } else {
            nextSlide();
        }
    }
});
