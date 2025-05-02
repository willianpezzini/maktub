const slides = document.getElementById('slides');
const buttons = document.querySelectorAll('.manual-btn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');



let index = 0;
const total = buttons.length;


function autoPlay() {
    index = (index + 1) % total;
    showSlide(index);
}

function showSlidePlanos(i) {
    slidesPlanos.style.transform =`translateX(-${i * 100}%)`;
    buttonsPlanos.forEach(btn => btn.classList.remove('active'));
    buttonsPlanos[i].classList.add('active');
    index2 = i;
}

buttonsPlanos.forEach(btn=> {
    btn.addEventListener('click', () => {
        showSlide(Number(btn.CDATA_SECTION_NODE.index));
    });
});

showSlide(0);
setInterval(autoPlay, 3000);

showSlidePlanos(4);

const slidesPlanos = document.getElementById('slides-planos');
const buttonsPlanos = document.querySelectorAll('.manual-btn-planos');
const prevBtnPlanos = document.getElementById('prevBtnPlanos');
const nextBtnPlanos = document.getElementById('nextBtnPlanos');

let indexPlanos = 0;
const totalPlanos = buttonsPlanos.length;

function showSlidePlanos(i) {
    slidesPlanos.style.transform = `translateX(-${i * 100}%)`;
    buttonsPlanos.forEach(btn => btn.classList.remove('active'));
    if (buttonsPlanos[i]) {
        buttonsPlanos[i].classList.add('active');
    }
    indexPlanos = i;
}

buttonsPlanos.forEach(btn => {
    btn.addEventListener('click', () => {
        showSlidePlanos(Number(btn.dataset.index));
    });
});

prevBtnPlanos.addEventListener('click', () => {
    indexPlanos = (indexPlanos - 1 + totalPlanos) % totalPlanos;
    showSlidePlanos(indexPlanos);
});

nextBtnPlanos.addEventListener('click', () => {
    indexPlanos = (indexPlanos + 1) % totalPlanos;
    showSlidePlanos(indexPlanos);
});

showSlidePlanos(0);