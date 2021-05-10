$('ul').on('click','li',function () {
    $(this).toggleClass('done');
});
$('ul').on('click','span',function (event) {
    $(this).parent().slideUp(function () {
        $(this).remove();
    });
    event.stopPropagation();
});
$('#container button').click(function () {
    $('input').slideToggle(200);
    if ($(this).html() !== '<i class="fas fa-plus" aria-hidden="true"></i>') {
        $(this).html('<i class="fas fa-plus"></i>');
    }
    else {
        $(this).html('<i class="fas fa-minus"></i>');
    };
});
$('input').keypress(function (event) {
    if (event.which === 13) {
        $('ul').append('<li><span><i class="fas fa-trash-alt"></i></span> ' + $('input').val() + '</li>');
        $('input').val('');
    }
});