function checkDevice() {
    var bd = document.querySelector('body');

    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ) {
        bd.classList.remove('scrollBody');

        return true; // está utilizando celular
    }
    else {
        bd.classList.add('scrollBody');
        return false; // não é celular
    }
}