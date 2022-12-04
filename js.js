'use strict'
$(document).ready(()=> {

    $('.icon').click( () => {
        $('.navBar').slideToggle();
        $('.bar-2').toggleClass('fiesta-red');
        $('.bar-1, .bar-3').toggleClass('black');
    });


});

