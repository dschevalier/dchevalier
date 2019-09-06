AOS.init();

// ADDS SMOOTH SCROLLING TO NAVBAR LINKS
$("a").on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {
            window.location.hash = hash;
        });
    }
});

// COLLAPSE MOBILE NAVIGATION AFTER CLICK
$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});