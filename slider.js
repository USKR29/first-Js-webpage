const left = document.querySelector('#left');
const right = document.querySelector('#right');
const slider = document.querySelector('#slides');
const images = document.querySelectorAll('#images');

let slidnumber = 1;
const len = images.length;

right.addEventListener('click',() =>{
    if(slidnumber < len? nextSlide() : prevSlide());
});

left.addEventListener('click',()=>{
   if(slidnumber >len ? prevSlide() : nextSlide());
});

const nextSlide = () =>{
     slider.style.transform = `translateX(-${slidnumber * 800}px)`;
    slidnumber ++;
};

const prevSlide = () =>{
    slider.style.transform = `translateX(0px)`;
        slidnumber = 1;
}