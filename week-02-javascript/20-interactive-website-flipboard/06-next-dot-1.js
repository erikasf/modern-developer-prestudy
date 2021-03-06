var main = function() {
    $('.dropdown-toggle').click(function() {
        $('.dropdown-menu').toggle();
    });
    $('.arrow-next').click(function() {
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();
        if (nextSlide.length === 0) {
            var nextSlide = $('.slide').first();
        }
        currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');
        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
    });
};
$(document).ready(main);
