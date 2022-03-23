function hideModalC() {
    var elementC = document.getElementById("telContato");
    elementC.classList.remove("show-modal");
}

function hideModalS() {
    var elementS = document.getElementById("telSuporte");
    elementS.classList.remove("show-modal");
}

var btnC = document.getElementById("btnC");
var btnS = document.getElementById("btnS");

btnC.addEventListener("click", () => {
    var elementC = document.getElementById("telContato");
    elementC.classList.add("show-modal");
});

btnS.addEventListener("click", () => {
    var elementS = document.getElementById("telSuporte");
    elementS.classList.add("show-modal");
});