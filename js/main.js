// Elements on the page
const slider = document.querySelector('#slider');

const sliderItems = Array.from(slider.children);

sliderItems.forEach(function (slide, index) {
    console.log(slide);

    // Hide all the sides except first
    if (index !== 0) slide.classList.add('hidden');

    // Add index to every slide
    slide.dataset.index = index;

    // Click on the slides
    slide.addEventListener('click', function () {

        // Hide current slide        
        slide.classList.add('hidden'); 
        
        // Calculate the index of the next slide
        let nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;

        // Find next slide
        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
        
        // Show next slide
        nextSlide.classList.remove('hidden'); 
    });
});
