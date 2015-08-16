//NAVIGATION SCRIPT 
// $('body').scrollspy({ target: '#navpil' })
var hashTagActive = "";
$(".scroll").click(function (event) {
    if(hashTagActive != this.hash) {
        event.preventDefault();

        var dest = 0;
        if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
            dest = $(document).height() - $(window).height();
        } else {
            dest = $(this.hash).offset().top;
        }

        $('html,body').animate({
            scrollTop: dest
        }, 2000, 'swing');
        hashTagActive = this.hash;
    }
});
