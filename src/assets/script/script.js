const slidesPrincipal = document.getElementById('slides-automaticos');
const buttonsPrincipal = document.querySelectorAll('.manual-btn');
const prevBtnPrincipal = document.getElementById('prevBtnPrincipal');
const nextBtnPrincipal = document.getElementById('nextBtnPrincipal');



let indexPrincipal = 0;
const totalPrincipal = buttonsPrincipal.length;

function showSlidePrincipal(i) {
    slidesPrincipal.style.transform =`translateX(-${i * 100}%)`;
    buttonsPrincipal.forEach(btn => btn.classList.remove('active'));
    if (buttonsPrincipal[i]) buttonsPrincipal[i].classList.add('active');
    indexPrincipal = i;
}

buttonsPrincipal.forEach(btn=> {
    btn.addEventListener('click', () => {
        showSlidePrincipal(Number(btn.dataset.index));
    });
});

prevBtnPrincipal.addEventListener('click', () => {
    indexPrincipal = (indexPrincipal - 1 + totalPrincipal) % totalPrincipal;
    showSlidePrincipal(indexPrincipal);
    console.log('Clicou para voltar');
});

nextBtnPrincipal.addEventListener('click', () => {
    indexPrincipal = (indexPrincipal + 1) % totalPrincipal;
    showSlidePrincipal(indexPrincipal);
    console.log('Clicou para avançar');
});

function autoPlay() {
    indexPrincipal = (indexPrincipal + 1) % totalPrincipal;
    showSlidePrincipal(indexPrincipal);
};

showSlidePrincipal(0);
setInterval(autoPlay, 3000);


const slidesPlanos = document.getElementById('slides-planos');
const buttonsPlanos = document.querySelectorAll('.manual-btn-planos');
const prevBtnPlanos = document.getElementById('prevBtnPlanos');
const nextBtnPlanos = document.getElementById('nextBtnPlanos');

let indexPlanos = 0;
const totalPlanos = buttonsPlanos.length;

function showSlidePlanos(i) {
    slidesPlanos.style.transform =`translateX(-${i * 100}%)`;
    buttonsPlanos.forEach(btn => btn.classList.remove('active'));
    if (buttonsPlanos[i]) buttonsPlanos[i].classList.add('active');
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
    console.log('Clicou para voltar')
});

nextBtnPlanos.addEventListener('click', () => {
    indexPlanos = (indexPlanos + 1) % totalPlanos;
    showSlidePlanos(indexPlanos);
    console.log('Clicou para avançar')
});

showSlidePlanos(0);