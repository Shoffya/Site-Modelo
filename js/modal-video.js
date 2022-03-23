function showModal() {
    var video = document.getElementById("video");
    var element = document.getElementById("modal");
    element.classList.add("show");

    video.play();
}

function hideModal() {
    var video = document.getElementById("video");
    var element = document.getElementById("modal");
    element.classList.remove("show");

    if (video.play()) {
        video.pause();
        video.currentTime = 0;
    }
}