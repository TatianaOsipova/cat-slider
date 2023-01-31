// Elements on the page
const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');

sliderItems.forEach(function (slide, index) {
    console.log(slide);

    // Hide all the sides except first
    if (index !== 0) slide.classList.add('hidden');

    // Add index to every slide
    slide.dataset.index = index;

    // Add data attribute active for first/active slide
    sliderItems[0].setAttribute('data-active', '');

    // Click on the slides
    slide.addEventListener('click', function () {
        showNextSlide('next');

        // // Hide current slide        
        // slide.classList.add('hidden'); 
        // slide.removeAttribute('data-active');
        
        // // Calculate the index of the next slide
        // const nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;

        // // Find next slide
        // const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
        
        // // Show next slide
        // nextSlide.classList.remove('hidden'); 
        // nextSlide.setAttribute('data-active', '');
    });
});

btnNext.onclick = function() {
    console.log('Next Slide');
    showNextSlide('next');

    // // Hide current slide
    // const currentSlide = slider.querySelector('[data-active]');
    // const currentSlideIndex = +currentSlide.dataset.index;

    // currentSlide.classList.add('hidden');
    // currentSlide.removeAttribute('data-active');

    // // Show next slide
    // const nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    // const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    // nextSlide.classList.remove('hidden');
    // nextSlide.setAttribute('data-active', '');
}

btnPrev.onclick = function() {
    console.log('Prev Slide');
    showNextSlide('prev');

    // // Hide current slide
    // const currentSlide = slider.querySelector('[data-active]');
    // const currentSlideIndex = +currentSlide.dataset.index;
    // currentSlide.classList.add('hidden');
    // currentSlide.removeAttribute('data-active');

    // // Show next slide
    // const nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    // const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    // nextSlide.classList.remove('hidden');
    // nextSlide.setAttribute('data-active', '');
};

function showNextSlide(direction) {
    // Hide current slide
    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    // Calculate the next index depending on the direction 
    let nextSlideIndex;
    if (direction === 'next') {
        nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    } else if (direction === 'prev') {
        nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    }

     // Show next slide
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
}
