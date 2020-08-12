// const para = document.querySelector('div.error');

// console.log(para);

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para);
// });
// const errors = document.querySelectorAll('.error');
// console.log(paras);
// console.log(errors);

//get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);

//get elements by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);

//get elements by their tag name
// const para = document.getElementsByTagName('p');
// console.log(para);
// console.log(para[2]);

// const para = document.querySelector('p');
// console.log(para.innerText);
// para.innerText = 'ninjas are awesome';
// console.log(para.innerText);
// const paras = document.querySelectorAll('p');
// console.log(paras)
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text'
// })
//const content = document.querySelector('.content');
//console.log(content.innerHTML)
// content.innerHTML = '<h2>this is a new h2</h2>'

// const people = ['parker', 'claire', 'ted'];
// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`
// });

const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href','https://www.thenetninja.co.uk');
link.innerText = 'the net ninja website';

const message = document.querySelector('p');
console.log(message.getAttribute('class'));
//message.setAttribute('class', 'success');
//message.setAttribute('style','color: red;');

const title = document.querySelector('h1');
//title.setAttribute('style', 'margin: 50px;');
console.log(title.style);
console.log(title.style.color);
title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '100px';
title.style.margin = '';

const hello = document.querySelector('p');
console.log(hello.classList);
hello.classList.add('wave');
console.log(hello.classList);
hello.classList.remove('wave');
console.log(hello.classList);
