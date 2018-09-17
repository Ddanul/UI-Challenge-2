'use strict';

console.log('js linked');

$('input[type=checkbox]').on('click', function() {
    if($(this).hasClass('checked')){
        $(this).removeClass('checked').addClass('unchecked');
    }else{
        $(this).removeClass('unchecked').addClass('checked');
    }
});

$('#input1').on('blur', function() {
    if(!$(this).val()){
        $(this).addClass('error');
        $('.error_message').show();
    }else{
        $(this).removeClass('error');
        $('.error_message').hide();
    }
});
