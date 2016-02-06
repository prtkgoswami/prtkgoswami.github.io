$(document).ready(function(){
    $(this).scrollTop(0);

    function scrollNav() {
      $('nav a').click(function(){
        //Toggle Class
        var a=document.getElementsByClassName('active');
        var b=a[0];
        $(b).removeClass("active");
        $(this).closest('li').addClass("active");
        //Animate
        $('html, body').stop().animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 1600);
        return false;
      });
      $('.scrollTop a').scrollTop();
    }
    scrollNav();
});

$('body').scrollspy({ target: '.navbar' })
