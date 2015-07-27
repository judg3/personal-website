/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        changeHashSilent($(".navbar-fixed-top li.active a").attr('href'));
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

function changeHashSilent(hash)
{
    hash = hash.replace( /^#/, '' );
    var fx, node = $( '#' + hash );
    if ( node.length ) {
        node.attr( 'id', '' );
        fx = $( '<div></div>' )
            .css({
                position:'absolute',
                visibility:'hidden',
                top: $(document).scrollTop() + 'px'
            })
            .attr( 'id', hash )
            .appendTo( document.body );
    }
    document.location.hash = hash;
    if ( node.length ) {
        fx.remove();
        node.attr( 'id', hash );
    }
}

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {

    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();

        /**
         * change window.location.hash without jumping
         */
        var hash = $anchor.attr('href');

        changeHashSilent(hash);
    });

    $(window).bind('scroll', function() {
        $navbar = $(".navbar");
        var colorClass = '';
        $('.nav-color').each(function() {
            var post = $(this);
            var position = post.position().top - $(window).scrollTop();

            if (position <= 0) {
                $navbar.addClass(post.attr('data-nav-color'));
            } else {
                $navbar.removeClass(post.attr('data-nav-color'));
            }
        });
    });

    $('.carousel').carousel('pause');
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});
