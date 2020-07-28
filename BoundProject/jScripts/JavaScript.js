$(document).ready(function () {
    $("#menu-img").click(function () {
        $(".nav-design").show();
        $("#x").show();
        $(".nav-design").addClass("navclick-design");
    });

    $("#x").click(function () {
        $(".nav-design").hide();
        $(".nav-design").addClass("navclick-design");
        location.reload();
    });
});

function openFullscreen() {
    var elem = document.getElementById("PresentationForClass");
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}