$(document).ready(function () {

    // Loader Animations
    setTimeout(function(){
        $('#greeting').fadeOut(500);
        $( "#welcome" ).fadeIn(800);
    }, 3000);
    setTimeout(function(){
        $('#loading-icon').html('<p style="color:#43A047;"><i class="fas fa-check"></i></p>')
        $('#preload').animate({ 'marginLeft': "-100%" }, 1500);
        setTimeout(function(){
            $('#preload').css('display', 'none');
        },2000)
    }, 6000);

    // General Sets
    $(this).scrollTop(0);
    var intro_top = $('#skill').offset().top;
    $('nav').css('display', 'none');

    // Displaying & Hiding Navbar
    $(document).scroll(function () {
        var y = $(this).scrollTop();

        if (y >= intro_top) {
            $('nav').fadeIn();
            // console.log("Showing nav");
        } else {
            $('nav').fadeOut();
            // console.log("Hiding nav");
        }
    });

    // Scrolling using Navbar
    $('a[href*="#"]').not('[href="#"]').click(function(event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
        });
        }
    }
    });
});