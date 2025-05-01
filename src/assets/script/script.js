const slides = document.getElementById('slides');
const buttons = document.querySelectorAll('.manual-btn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;
const total = buttons.length;

function showSlide(i) {
    slides.style.transform =`translateX(-${i * 100}%)`;
    buttons.forEach(btn => btn.classList.remove('active'));
    buttons[i].classList.add('active');
    index = i;
}

buttons.forEach(btn=> {
    btn.addEventListener('click', () => {
        showSlide(Number(btn.CDATA_SECTION_NODE.index));
    });
});

prevBtn.addEventListener('click', () => {
    index= (index - 1 + total) % total;
    showSlide(index)
});

nextBtn.addEventListener('click', () => {
    index= (index + 1 ) % total;
    showSlide(index)
});

function autoPlay() {
    index = (index + 1) % total;
    showSlide(index);
}

showSlide(0);
setInterval(autoPlay, 2000);