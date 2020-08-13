const copy = document.querySelector('.copy-me');
copy.addEventListener('copy', () => {
    console.log('this has been copied!')
});

const box = document.querySelector('.box');
box.addEventListener('mousemove', (e) => {
    //console.log(e);
    // console.log(e.offsetX);
    // console.log(e.offsetY);
    box.textContent = `x pos - ${e.offsetX}  y pos - ${e.offsetY}`
});

document.addEventListener('wheel', (e) => {
    console.log(e.pageX, e.pageY)
});