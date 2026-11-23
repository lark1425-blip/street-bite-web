// Полоса прогресса
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
});

// Анимация появления слайдов
const slides = document.querySelectorAll('.slide');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.2 // Срабатывает, когда слайд виден на 20%
});

slides.forEach(slide => {
    observer.observe(slide);
});

// Навигация по нажатию на стрелки клавиатуры
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
    }
});