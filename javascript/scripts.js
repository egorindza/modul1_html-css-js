// Функция для проверки видимости элементов при прокрутке
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    const options = {
        threshold: 0.7
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});