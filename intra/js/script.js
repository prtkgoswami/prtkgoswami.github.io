$(document).ready(function(){
    $(this).scrollTop(0);
    $('#nmain').hide();
    var h=$(window).height();
    $('#top').css('height',h);
});

$(window).scroll(function(){
    var coding= $('#coding').position().top;
    //console.log(coding);
    var robotics= $('#robotics').position().top;
    var gaming= $('#gaming').position().top;
    var foodforfun= $('#foodforfun').position().top;
    var infocus= $('#infocus').position().top;
    var newron= $('#newron').position().top;
    var height= $(document).scrollTop();
    if(height > coding){
        $('#nmain').slideDown("easing");
        // if($('#nmain').hasClass('hide')){
        //     $('#nmain').removeClass('hide');
        // }
    }
    else{
        $('#nmain').slideUp("easing");
        // $('#nmain').addClass('hide');
    }

    if(height > coding && height < robotics){
        $('#nmain').css('background-color','#a1374c');
        console.log('coding');
    }
    else if(height > robotics && height < gaming){
        $('#nmain').css('background-color','#50bfad');
        console.log('robotics');
    }
    else if(height > gaming && height < foodforfun){
        $('#nmain').css('background-color',' #e33b3b');
        console.log('gaming');
    }
    else if(height > foodforfun && height < infocus){
        $('#nmain').css('background-color','#a1374c');
        console.log('foodforfun');
    }
    else if(height > infocus && height < newron){
        $('#nmain').css('background-color','#50bfad');
        console.log('infocus');
    }
    else if(height > newron){
        $('#nmain').css('background-color',' #e33b3b');
        console.log('newron');
    }

});
