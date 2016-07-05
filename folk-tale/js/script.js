$(document).ready(function(){
    $(this).scrollTop(0);

    function scrollNav() {
        var nav_height = $('.navbar').height();
        $('nav a').click(function(){
            //Toggle Class
            var a=document.getElementsByClassName('active');
            var b=a[0];
            $(b).removeClass("active");
            $(this).closest('li').addClass("active");
            //Animate
            $('html, body').stop().animate({
                scrollTop: $( $(this).attr('href') ).offset().top - nav_height
            }, 1600);
            return false;
        });
        $('.scrollTop a').scrollTop();
    }
    scrollNav();

    var distance = $('header').height();
	$(window).scroll(function() {
	    if ( $(window).scrollTop() >= distance ) {
	        $('.navbar').addClass("navbar-fixed-top");
	    }
        else{
            $('.navbar').removeClass("navbar-fixed-top");
        }
	});

});

$('body').scrollspy({ target: '.navbar' })