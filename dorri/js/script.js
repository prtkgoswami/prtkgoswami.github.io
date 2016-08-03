$(document).ready(function(){
    $(this).scrollTop(0);
    $('#logo').css('display','none');
    $('.card-caption').css('display','none');

    function scrollNav() {
        var nav_height = $('nav').height();
        $('#navigate a').click(function(){
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

 //    var distance = $('header').height();
	// $(window).scroll(function() {
	//     if ( $(window).scrollTop() >= distance ) {
	//         $('nav').addClass("navbar-fixed-top");
 //            $('#logo').css('display','block');
	//     }
 //        else{
 //            $('nav').removeClass("navbar-fixed-top");
 //            $('#logo').css('display','none');
 //        }
	// });

    $('.card').mouseover(function(){
        $(this).children('.card-caption').css('display','block');
    });
     $('.card').mouseleave(function(){
        $(this).children('.card-caption').css('display','none');
    });

    var s=0;
    $('#searchbtn').click(function(e){
        if (s==0) {
            $('#search-row > div').animate({marginLeft:'55%'},300);
            s=1;
        }
        else{
            $('#search-row > div').animate({marginLeft:'100%'},300);
            s=0;
        }
        e.preventDefault();
    });

});

$('body').scrollspy({ target: '.navbar' })

