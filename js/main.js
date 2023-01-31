// Elements on the page
const slider = document.querySelector('#slider');

const sliderItems = Array.from(slider.children);

sliderItems.forEach(function (slide, index) {
    console.log(slide);

    // Hide all the sides except first
    if (index !== 0) {
        slide.classList.add('hidden');
    }

    // Add index to every slide
    

    // Click on the slides
    slide.addEventListener('click', function () {
        console.log('Next');
        slide.classList.add('hidden')

    })
});
