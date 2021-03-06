var main = function() {
    $('.article').click(function() {
        $('.article').removeClass('current');
        $('.description').hide();
        $(this).addClass('current');
        $(this).children('.description').show();
    });
    $(document).keypress(function(event) {
        // o = open article
        if (event.which === 111) {
            $('.current').children('.description').toggle();
        }
        // n = next article
        else if (event.which === 110) {
            var currentArticle = $('.current');
            var nextArticle = currentArticle.next();
            currentArticle.removeClass('current');
            nextArticle.addClass('current');
        }
    });
};
$(document).ready(main);
