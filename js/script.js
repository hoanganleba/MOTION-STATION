$('#side-bar-button').click(function (e) {
    e.stopPropagation();
    $('main').toggleClass('show-sidebar');
    $('.sidebar').toggleClass('show');
})
$('.sidebar').click(function (e) {
    e.stopPropagation();
});
$('main').click(function () {
    $('main').removeClass('show-sidebar');
    $('.sidebar').removeClass('show');
});

