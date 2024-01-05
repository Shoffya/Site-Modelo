const tagP = document.querySelector('.left p');
const polaroids = document.querySelectorAll(".swiper-slideP img");
const herois = document.querySelector('#herois');
const jogos = document.querySelector('#jogos');
const series = document.querySelector('#series');
const filmes = document.querySelector('#filmes');
const mascotes = document.querySelector('#mascotes');
const desenhos = document.querySelector('#desenhos');
const fotoPolaroid = ["polaroid1", "polaroid2", "polaroid3", "polaroid4", "polaroid5", "polaroid6"];
const categ = [herois, jogos, series, filmes, mascotes, desenhos]

function ContarSegundos() {
    for (let i = 0; i < 6; i++) {
        if (window.getComputedStyle(categ[i]).getPropertyValue("z-index") == 6) {
            for (let j = 0; j < 12; j++) {
                polaroids[j].src = `./img/${fotoPolaroid[i]}.png`;
            }
        }
    }
}

setInterval(ContarSegundos, 500);