const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slides');

let slidnumber =1;

left.addEventListener('click',() =>{
slider.style.transform = `translateX(-${slidnumber * 800}px)`
slidnumber ++;
});

right.addEventListener('click',()=>{

    slider.style.transform = `ttranslateX(+${slidnumber * 800}px)`

});