$(document).ready( function () {
    console.log("Ready");

    animateArrow();

    $('#menu-btn').click( function () {
        console.log("Menu CLicked");
        $('#nav-overlay').animate({marginTop: "0%"}, 800);
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
    })
});

function animateArrow() {
    $('#down-arrow').animate({paddingTop: "15px", paddingBottom: "35px"}, 500, "swing", function () {
        $('#down-arrow').animate({paddingTop: "50px", paddingBottom: "0px"}, 500, "swing", function () {
            setTimeout(animateArrow, 100)
        });
    });
}

function closeMenu() {
    $('#nav-overlay').animate({marginTop: "-200%"}, 800);
}