let parallax1 = document.getElementById('parallax1');
let parallax2 = document.getElementById('parallax2');
let parallax3 = document.getElementById('parallax3');
let texto = document.getElementById('texto');
let btnExplore = document.getElementById('btnExplore');
let parallax4 = document.getElementById('parallax4');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    parallax1.style.left = value * 0.25 + 'px';
    parallax2.style.top = value * 1.05 + 'px';
    parallax3.style.top = value * 0.5 + 'px';
    parallax4.style.top = value * 0 + 'px';
    texto.style.marginRight = value * 7 + 'px';
    btnExplore.style.marginTop = value * 5 + 'px';
})