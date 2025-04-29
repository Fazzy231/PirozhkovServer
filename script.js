document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            dots[i].classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    prevBtn.addEventListener('click', () => {
        let newIndex = currentSlide - 1;
        if (newIndex < 0) newIndex = slides.length - 1;
        showSlide(newIndex);
    });

    nextBtn.addEventListener('click', () => {
        let newIndex = currentSlide + 1;
        if (newIndex >= slides.length) newIndex = 0;
        showSlide(newIndex);
    });


    setInterval(() => {
        let newIndex = currentSlide + 1;
        if (newIndex >= slides.length) newIndex = 0;
        showSlide(newIndex);
    }, 5000);
});