$(window).scroll(function () {
    if ($(this).scrollTop() > $("main").offset().top - 1) {
        $(".up").fadeIn();
    } else {
        $(".up").fadeOut();
    }
});

$("#circle,#toGallery").on("click", function () {
    $("body,html").animate({
        scrollTop: $("main").offset().top
    }, 1000)
});

$(".up").on("click", function () {
    $("body,html").animate({
        scrollTop: 0
    }, 1000)
})

$(document).ready(function () {
    $('.icon').click(function () {
        $('nav').stop().slideToggle(300);
    });
});

$(document).ready(function(){
    $(".icon").click(function(){
        $(".icon").toggleClass("active");
    })
})

