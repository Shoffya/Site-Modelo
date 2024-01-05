var nav = document.querySelector('nav');
var nav1 = document.getElementById('option1');
var nav2 = document.getElementById('option2');
var nav3 = document.getElementById('option3');
var nav4 = document.getElementById('option4');
var nav5 = document.getElementById('option5');
var nav6 = document.getElementById('option5');

var M = window.addEventListener('scroll', () => {
    var y = window.scrollY;

    if (y > 440) {
        nav.style.background = "rgb(53, 53, 53)";
    } else {
        nav.style.background = "black";
    }

    if (y == 0 || y < 511) {
        if (nav1.classList.contains('active') === false) {
            if (nav2.classList.contains('active') ||
                nav3.classList.contains('active') ||
                nav4.classList.contains('active') ||
                nav5.classList.contains('active') ||
                nav6.classList.contains('active')
            ) {
                nav2.classList.remove('active')
                nav3.classList.remove('active')
                nav4.classList.remove('active')
                nav5.classList.remove('active')
                nav6.classList.remove('active')
                nav1.classList.add('active')
            }
        } else {
            nav1.classList.add('active')
        }
    }
    else if (y == 511 || y < 1191) {
        if (nav2.classList.contains('active') === false) {
            if (nav1.classList.contains('active') ||
                nav3.classList.contains('active') ||
                nav4.classList.contains('active') ||
                nav5.classList.contains('active') ||
                nav6.classList.contains('active')
            ) {
                nav1.classList.remove('active')
                nav3.classList.remove('active')
                nav4.classList.remove('active')
                nav5.classList.remove('active')
                nav6.classList.remove('active')
                nav2.classList.add('active')
            }
        } else {
            nav2.classList.add('active')
        }
    }
    else if (y == 1191 || y < 1791) {
        if (nav3.classList.contains('active') === false) {
            if (nav1.classList.contains('active') ||
                nav2.classList.contains('active') ||
                nav4.classList.contains('active') ||
                nav5.classList.contains('active') ||
                nav6.classList.contains('active')
            ) {
                nav1.classList.remove('active')
                nav2.classList.remove('active')
                nav4.classList.remove('active')
                nav5.classList.remove('active')
                nav6.classList.remove('active')
                nav3.classList.add('active')
            }
        } else {
            nav3.classList.add('active')
        }
    }
    else if (y == 1791 || y < 2391) {
        if (nav4.classList.contains('active') === false) {
            if (nav1.classList.contains('active') ||
                nav2.classList.contains('active') ||
                nav3.classList.contains('active') ||
                nav5.classList.contains('active') ||
                nav6.classList.contains('active')
            ) {
                nav1.classList.remove('active')
                nav2.classList.remove('active')
                nav3.classList.remove('active')
                nav5.classList.remove('active')
                nav6.classList.remove('active')
                nav4.classList.add('active')
            }
        } else {
            nav4.classList.add('active')
        }
    }
    else if (y == 2391 || y < 2991) {
        if (nav5.classList.contains('active') === false) {
            if (nav1.classList.contains('active') ||
                nav2.classList.contains('active') ||
                nav3.classList.contains('active') ||
                nav4.classList.contains('active') ||
                nav6.classList.contains('active')
            ) {
                nav1.classList.remove('active')
                nav2.classList.remove('active')
                nav3.classList.remove('active')
                nav4.classList.remove('active')
                nav6.classList.remove('active')
                nav5.classList.add('active')
            }
        } else {
            nav5.classList.add('active')
        }
    }
    else if (y >= 2991) {
        if (nav6.classList.contains('active') === false) {
            if (nav1.classList.contains('active') ||
                nav2.classList.contains('active') ||
                nav3.classList.contains('active') ||
                nav4.classList.contains('active') ||
                nav5.classList.contains('active')
            ) {
                nav1.classList.remove('active')
                nav2.classList.remove('active')
                nav3.classList.remove('active')
                nav4.classList.remove('active')
                nav5.classList.remove('active')
                nav6.classList.add('active')
            }
        } else {
            nav6.classList.add('active')
        }
    }
})

setInterval(M, 500);

