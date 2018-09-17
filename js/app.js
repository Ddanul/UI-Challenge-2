'use strict';

console.log('js linked');

$('input[type=checkbox').on('click', function() {
    if($(this).hasClass('checked')){
        $(this).removeClass('checked').addClass('unchecked');
    }else{
        $(this).removeClass('unchecked').addClass('checked');
    }
});

$('input[type=text').on('change', 'input', function() {
    console.log('you typed!');
});
