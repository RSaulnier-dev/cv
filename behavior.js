var step = "70%";
var prevScrollpos = window.pageYOffset;

$(window.onscroll = displayMenuOnTop);

function displayMenuOnTop() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        $(".menu").css("top","0");
    } else {
        $(".menu").css("top","-60px");
    }
    prevScrollpos = currentScrollPos;
};

$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

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