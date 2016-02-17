$(document).ready(function(){
    // $(this).scrollTop(0);
    $('#nmain').hide();
    var h=$(window).height();
    $('#top').css('height',h);

});


$(window).scroll(function(){
    var coding= $('#coding').position().top-50;
    var robotics= $('#robotics').position().top-50;
    var gaming= $('#gaming').position().top-50;
    var foodforfun= $('#foodforfun').position().top-50;
    var infocus= $('#infocus').position().top-50;
    var newron= $('#newron').position().top-50;
    var height= $(document).scrollTop();
    if(height > coding){
        $('#nmain').slideDown("easing");
    }
    else{
        $('#nmain').slideUp("easing");
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
