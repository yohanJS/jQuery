'use strict'
$(document).ready(()=> {

    $('.icon').click( () => {
        $('.navBar').slideToggle();
        if($('#toggle').text() == 'menu') {
            $('#toggle').text('close');
        } else {
            $('#toggle').text('menu');
        }
        
    });

});

