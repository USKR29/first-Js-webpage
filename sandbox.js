
// const para = document.querySelector('p'); // This will select the first <p> element from the doc

// console.log(para)

// const para2 = document.querySelector('.error'); // this will select first element with the classname error

// console.log(para2);

// const title = document.getElementById('ptitle');

// console.log(title);

// ************************************************************************************************************************

const para = document.querySelector('p');

// console.log(para.innerText)

para.innerText += 'Welcome to the DOM!';

para.innerText = 'Welcome to the DOM!';

const paras = document.querySelectorAll('p');

paras.forEach(para => {
    para.innerText += 'Sometext';
});

// for HTML

const content = document.querySelector('.content');

content.innerHTML ='<h2>This is the second title from JS</h2>'