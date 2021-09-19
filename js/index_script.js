$(document).ready( function () {
    console.log("Ready");

    if (navigator.userAgent.indexOf("Firefox") != -1) {
        console.log("Firefox Detected");
        animateArrow();
    }

    $('#menu-btn').click( function () {
        console.log("Menu CLicked");
        $('#nav-overlay').css({visibility: "visible", opacity: "0"}).animate({opacity: "1"}, 300);
    });

    $('#close-menu').click( function () {
        console.log("Menu Close CLicked");
        closeMenu();
    });
    $('#close-menu-min').click( function () {
        console.log("Menu Close CLicked");
        closeMenu();
    });

    $('#nav-overlay a').click(function () {
        closeMenu();
    });

    $('#nav-overlay a, #continue a').on('click', function(event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({scrollTop: $(hash).offset().top}, 900);
    });
});

function animateArrow() {
    $('#down-arrow').animate({paddingTop: "15px", paddingBottom: "35px"}, 500, "swing", function () {
        $('#down-arrow').animate({paddingTop: "50px", paddingBottom: "0px"}, 500, "swing", function () {
            setTimeout(animateArrow, 100)
        });
    });
}

function closeMenu() {
    $('#nav-overlay').animate({opacity: "0"}, 300).css({visibility: "hidden", opacity: "1"});
}