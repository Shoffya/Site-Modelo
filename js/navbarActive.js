var nav = document.querySelector('nav');
var nav1 = document.getElementById('option1');
var nav2 = document.getElementById('option2');
var nav3 = document.getElementById('option3');
var nav4 = document.getElementById('option4');
var nav5 = document.getElementById('option5');
var nav6 = document.getElementById('option6');

function navbarActive1(id) {
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

function navbarActive2(id) {
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

function navbarActive3(id) {
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

function navbarActive4(id) {
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

function navbarActive5(id) {
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

function navbarActive6(id) {
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

const menuNav = document.querySelectorAll('.menuNav a');
const mapaSite = document.querySelectorAll('.mapaSite a');

menuNav.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

mapaSite.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick() {
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 59;

    scrollToPosition(to);

    console.log(to)
}

function scrollToPosition(to) {
    // window.scroll({
    //     top: to,
    //     behavior: "smooth",
    // });

    smoothScrollTo(0, to);
}


//  * Smooth scroll animation
//  * @param {int} endX: destination x coordinate
//  * @param {int} endY: destination y coordinate
//  * @param {int} duration: animation duration in ms

function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== 'undefined' ? duration : 400;

    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
};