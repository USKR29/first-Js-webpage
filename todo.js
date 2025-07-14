
const toddo = async() => {
data = await fetch('https://jsonplaceholder.typicode.com/todos/');
const resp = await data.json();
// console.log(resp);
return resp;
};

// const result = toddo();

const para = document.querySelector('p');
const para2 = document.querySelector('.status')


toddo().then(resp => {
    console.log(resp)
    detailPage(resp);
    
}).catch(err => {
    console.log('Not found',err)
}); 


const detailPage = (resp) => {
//     let title = resp[2].title.toUpperCase();
// para.innerHTML += `Welcome to the DOM! <strong> ${title}</strong>`;
//     // para.style.color = 'red';
para2.style.color = 'crimson';
para2.style.fontSize = '0.90rem';

// console.log(resp.length);

for(i=0; i<10; i++){
    let a = 0;

    para2.innerHTML += `<h4>${resp[i].title.toUpperCase()}</h4>`;
   

};
};