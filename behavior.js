var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".menu").style.top = "0";
    } else {
        document.querySelector(".menu").style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
};

$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

var step = "70%";
$(moveClouds());

$(window.setInterval(() => {
    moveClouds();
}, 12000));

function moveClouds() {
    $(".top-cloud").animate({
        right: step
    }, 10000);

    $(".bottom-cloud").animate({
        left: step
    }, 10000, () => {
        if (step === "70%") {
            step = "30%";
        } else {
            step = "70%";
        }
    });
}