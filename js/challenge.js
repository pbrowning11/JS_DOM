const paras = document.querySelectorAll('p');
paras.forEach(para => {
    console.log(para);
    if (para.textContent.includes ('error')) {
        para.classList.add('hello');
    } else if (para.textContent.includes('success')) {
        para.classList.add('goodbye');
    };
});

const title = document.querySelector('.title');
title.classList.toggle('test');
title.classList.toggle('test');