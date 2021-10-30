$(document).ready(function() {
    $(window).scroll(function(event) {
        let s=$(this).scrollTop();
        let w=$(this).outerWidth();
        let h=$('.content').outerHeight();
        let h_b=$('.parallax').outerHeight();
        let p = s/h*100;
        let p_b = s/h_b*100;
        let o = 1-1/100*p_b;

        let z_1=1+(w/100000*p_b);
        $('.parallax_fog').css('transform','scale('+z_1+')');
        $('.parallax_mountain_1').css('transform','scale('+z_1+')');
        $('.parallax_mountain_2').css('transform','scale('+z_1+')');
        $('.parallax_mountain_3').css('transform','scale('+z_1+')');
        $('.parallax_fog').css('opacity',o);
    
});
});