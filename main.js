const sliderContainer = document.querySelector(".slider_container");
const rightSlide = document.querySelector(".right_slide");
const leftSlide = document.querySelector(".left_slide");
const upButton = document.querySelector(".up_button");
const downButton = document.querySelector(".down_button");
const slidesLength = document.querySelectorAll(".right_slide div").length;
console.log(slidesLength);


let activeSlideIndex = 0;
leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`;
upButton.addEventListener("click",() => changeSlide('up'));
downButton.addEventListener("click",() => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if(direction === 'up') {
        activeSlideIndex++;
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        }
    }
    if(direction === 'down') {
        activeSlideIndex--;
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    }
    rightSlide.style.transform = `translatey(-${activeSlideIndex * sliderHeight}px)`;
    leftSlide.style.transform = `translatey(${activeSlideIndex * sliderHeight}px)`;
}

