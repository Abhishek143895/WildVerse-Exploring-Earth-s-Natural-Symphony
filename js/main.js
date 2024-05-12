const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });


    // click to scroll top -----clicking on bottom arrrow ------------------
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })



    // ====================top to bottm scroll on contact us ========================

    $('.top-bottom').click(function () {
    $('html, body').animate({
        scrollTop: $(document).height()
    }, 1000);
    })

      // ====================top to bottm scroll on category ========================

    $(document).ready(function() {
        $('.top-bottom-category').click(function () {
            $('html, body').animate({
                scrollTop: $('.category').offset().top
            }, 500);
        });
    });


    // ====================top to bottm scroll on Explore ========================

    $(document).ready(function() {
        $('.top-bottom-explore').click(function () {
            $('html, body').animate({
                scrollTop: $('.site-content').offset().top
            }, 500);
        });
    });


    // ====================top to bottm scroll on popular tags ========================

    $(document).ready(function() {
        $('.top-bottom-tags').click(function () {
            $('html, body').animate({
                scrollTop: $('.popular-tags').offset().top
            }, 1000);
        });
    });



    // AOS Instance
    AOS.init();

});

// --------------------------For buttons sliding functionality (1 2 3 4 5) -------------------------------------- 

document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const pages = document.querySelectorAll('.pages');
    let currentPageIndex = 0;

    function showPage(index) {
        pages.forEach((page, pageIndex) => {
            if (pageIndex === index) {
                page.style.display = 'block';
            } else {
                page.style.display = 'none';
            }
        });
    }

    function goToNextPage() {
        if (currentPageIndex < pages.length - 1) {
            currentPageIndex++;
            showPage(currentPageIndex);
        }
    }

    function goToPrevPage() {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            showPage(currentPageIndex);
        }
    }

    nextButton.addEventListener('click', goToNextPage);
    prevButton.addEventListener('click', goToPrevPage);

    showPage(currentPageIndex);
});