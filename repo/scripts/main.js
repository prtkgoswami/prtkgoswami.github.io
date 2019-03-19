$(document).ready(function () {
    console.log("Ready");
    $('#menu-wrapper').css('display', 'none');
    $('#close-btn').css('display', 'none');
    $('#content-wrapper').css('display', 'inline-block');
    $('#theme-toggle').prop('checked', false);
    $('body').addClass('light');

    $('#menu-web').click(function () {
        location.reload();
    });

    $('#menu-btn').click(function() {
        $('#menu-wrapper').css('display', 'inline-block');
        $('#content-wrapper').css('display', 'none');
        $('#close-btn').css('display', 'inline');
        $('#menu-btn').css('display', 'none');
        if($('body').hasClass('dark')){
            $('#main-wrapper').css('background-color', '#005f5f');
            $('body').css('background-color', '#005f5f');
        }else{
            $('#main-wrapper').css('background-color', '#008080');
            $('body').css('background-color', '#008080');
        }
    });
    $('#close-btn').click(function() {
        $('#content-wrapper').css('display', 'inline-block');
        $('#menu-wrapper').css('display', 'none');
        $('#menu-btn').css('display', 'inline');
        $('#close-btn').css('display', 'none');
        if($('body').hasClass('dark')){
            $('#main-wrapper').css('background-color', '#222');
            $('body').css('background-color', '#222');
        }else{
            $('#main-wrapper').css('background-color', 'rgba(0, 128, 128, 0.1)');
            $('body').css('background-color', '#eee');
        }
    });

    $('#theme-toggle').click(function() {
        console.log($(this).prop('checked'));
        if($(this).prop('checked')) {
            console.log("Enabling Dark Mode");
            if($('body').hasClass('light'))
                $('body').removeClass('light');
            $('body').addClass('dark');
        }else {
            console.log("Enabling Light Mode");
            if($('body').hasClass('dark'))
                $('body').removeClass('dark');
            $('body').addClass('light');
        }
    });

});