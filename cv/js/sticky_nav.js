// var a=document.getElementById('#coverpic');
// var b=document.getElementById('#name_cont');
// var style = b.currentStyle || window.getComputedStyle(b);
// var calc=a.offset

// var a=$("#coverpic").outerHeight(true)+$("#name_cont").outerHeight(true);
// $(window).scroll(function() {
//   if( $(this).scrollTop() > a ) {
//   	console.log("done");
//     $('nav').addClass("fix");
//   } else {
//     $('nav').removeClass("fix");
//   }
// });

var bottom = $('#navbar').offset().top();
$(window).scroll(function(){    
    if ($(this).scrollTop() > bottom){ 
        $('#navbar').addClass('fix'); 
    }
    else{
        $('#navbar').removeClass('fix');
    }
});