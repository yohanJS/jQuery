'use strict'
$(document).ready(()=> {

    $('.icon').click( () => {
        $('.navBar').slideToggle();
        if($('#toggle').text() == 'menu') {
            $('#toggle').text('close');
            console.log('hello');      
        } else {
            $('#toggle').text('menu');
        }
        
    });

});

