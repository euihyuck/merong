
$('.icon_music').click(function () {
    $(this).toggleClass('on');
    $('.wrap').toggleClass('on');
    $('.text_box').toggleClass('on');
    /* $('audio').fadeToggle() */

    var audio = $('audio#music')[0];


    if (audio.paused) {
        audio.play();

    } else {
        audio.pause();

    }


})

$('text_box').click(function () {
    $('text_box').toggleClass('on')
})

$('icon_music').click(function () {
    $(this).addClass('on')
})



