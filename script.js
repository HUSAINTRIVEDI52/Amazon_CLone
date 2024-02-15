const imags = document.querySelectorAll('.header-slider ul img');

const prvs_btn = document.querySelector('.control_previous');
const next_btn = document.querySelector('.control_next');

let n = 0
function changeSlide() {
    for (let i = 0; i < imags.length; i++) {
        imags[i].style.display = 'none';
    }
    imags[n].style.display = 'block';
}
changeSlide();
prvs_btn.addEventListener('click', (e) => {
    if (n > 0) {
        n--;
    } else {
        n = imags.length - 1;
    }
    changeSlide();
})

next_btn.addEventListener('click', (e) => {
    if (n < imags.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changeSlide();
})

const scrollContainer = document.querySelectorAll('.product');
for (const item of scrollContainer) {
    item.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        item.scrollLeft = + evt.deltaY;
    });
}
