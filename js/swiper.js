$(function () {
    var
        $Swiper=$(".s-swiper")
        $picUl = $(".s-swiper-wrapper"),
        $width = $picUl.children().eq(0).width()+10,
        $picli=$(".s-swiper-slide")
        $prev = $(".s-swiper-button-prev"),
        $next = $(".s-swiper-button-next"),
        index = 0;
        a=$width*$picli.length-$Swiper.width()

    $next.click(function () {
        index++;
        index%=$picli.length;
        b=index*$width<a?index*$width:0;
        $picUl.animate({
            left:-b
        },500)
    });

    $prev.click(function () {
        index--;
        index<0?index = $picli.length-1:index;
        b=index*$width>a?a:index*$width;
        $picUl.animate({
            left:-b
        },500)
    })
})