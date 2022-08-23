jQuery(document).ready(function ($) {

    var body = $("body"),

        menuSidebar = $(".menu-mobile-sidebar");
    // Mobile menu
    var navToggle = $(".header .navbar-toggle"),
        navOverlay = $(".navbar-overlay");

    navToggle.on("click", function (e) {
        //$(this).toggleClass('open');
        body.toggleClass("navbarmobile-is-active");
    });
    navOverlay.on("click", this, function (e) {
        navToggle.trigger("click");
    });

    // end mobile menu


    // add sticky header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('header').addClass("sticky");
        } else {
            $('header').removeClass("sticky");
        }
    });
    //search 
    $('.search').on('click', function () {
        $('.modale').css('display', 'block');
    })
    if ($('.overplay-search')) {
        $('.overplay-search').on('click', function () {
            $('.modale').css('display', 'none');
        })
    }
    $('.mini-search').on('click', function () {
        $('.modale').css('display', 'block');
    })
    if ($('.overplay-search')) {
        $('.overplay-search').on('click', function () {
            $('.modale').css('display', 'none');
        })
    }
    $('.modale-close-active').on('click', function () {
        $('.modale').css('display', 'none');
    })

});



// ----- Stats ourservice page---------
function makesvg(percentage, inner_text = "") {

    var abs_percentage = Math.abs(percentage).toString();
    var percentage_str = percentage.toString();
    var classes = ""

    if (percentage < 0) {
        classes = "danger-stroke circle-chart__circle--negative";
    } else if (percentage > 0 && percentage <= 30) {
        classes = "warning-stroke";
    } else {
        classes = "success-stroke";
    }

    var svg = '<svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">' +
        '<circle class="circle-chart__background" cx="16.9" cy="16.9" r="15.9" />' +
        '<circle class="circle-chart__circle ' + classes + '"' +
        'stroke-dasharray="' + abs_percentage + ',100"    cx="16.9" cy="16.9" r="15.9" />' +
        '<g class="circle-chart__info">' +
        '   <text class="circle-chart__percent" x="17.9" y="17" >' + percentage_str + '%</text>';

    if (inner_text) {
        svg += '<text class="circle-chart__subline" x="16.91549431" y="22">' + inner_text + '</text>'
    }

    svg += ' </g></svg>';

    return svg
}

(function ($) {

    $.fn.circlechart = function () {
        this.each(function () {
            var percentage = $(this).data("percentage");
            var inner_text = $(this).text();
            $(this).html(makesvg(percentage, inner_text));
        });
        return this;
    };

}(jQuery));

$(function () {
    $('.circlechart').circlechart();
});

// ------Tabs FAQ----------
$(document).ready(function () {
    var pTabItem = $(".faq-tabs .tab-item");
    $(pTabItem).click(function () {
        // Tab nav active functionality
        $(pTabItem).removeClass("active");
        $(this).addClass("active");

        // Tab container active functionality
        var tabid = $(this).attr("id");
        $(".faq-lists").removeClass("active");
        $("#" + tabid + "C").addClass("active");

        return false;
    });
});
//------------------------------------------------
$(document.body).on('click', '.plus, .minus', function () {
    event.preventDefault()
    var $qty = $(this).closest('.quantity').find('.qty'),
        currentVal = parseFloat($qty.val()),
        max = parseFloat($qty.attr('max')),
        min = parseFloat($qty.attr('min')),
        step = $qty.attr('step');
    // Format values
    if (!currentVal || currentVal === '' || currentVal === 'NaN') currentVal = 1;
    if (max === '' || max === 'NaN') max = '';
    if (min === '' || min === 'NaN') min = 1;
    if (step === 'any' || step === '' || step === undefined || parseFloat(step) === 'NaN') step = 1;

    // Change the value
    if ($(this).is('.plus')) {
        if (max && (currentVal >= max)) {
            $qty.val(max);
        } else {
            $qty.val((currentVal + parseFloat(step)).toFixed());
        }
    } else {
        if (min && (currentVal <= min)) {
            $qty.val(min);
        } else if (currentVal > 1) {
            $qty.val((currentVal - parseFloat(step)).toFixed());
        }
    }
});

// slider
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});
var swiper2 = new Swiper(".mySwiperfast", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    pagination: {
        el: ".financial-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".financial-button-next",
        prevEl: ".financial-button-prev",
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});
var swiper3 = new Swiper(".mySwiperclient", {
    slidesPerView: 2,
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: ".client-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".client-button-next",
        prevEl: ".client-button-prev",
    },
});
var swiper4 = new Swiper(".mySwiperpartner", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
});
var swiper5 = new Swiper(".mySwiperexperienceclient", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    pagination: {
        el: ".experience-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
});
var swiper5 = new Swiper(".mySwiperassess", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    pagination: {
        el: ".assess-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
});
var swiper5 = new Swiper(".mySwiperunsecuredexperience", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    pagination: {
        el: ".unsecuredloan-experience-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
});
var swiper6 = new Swiper(".mySwiperabout", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: ".unsecuredloan-experience-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});
const tabs = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".tab-content");

let tabNo = 0;
let contentNo = 0;

tabs.forEach((tab) => {
    tab.dataset.id = tabNo;
    tabNo++;
    tab.addEventListener("click", function () {
        tabs.forEach((tab) => {
            tab.classList.remove("active");
            tab.classList.add("non-active");
        });
        this.classList.remove("non-active");
        this.classList.add("active");
        tabContent.forEach((content) => {
            content.classList.add("hidden");
            if (content.dataset.id === tab.dataset.id) {
                content.classList.remove("hidden");
            }
        });
    });
});

tabContent.forEach((content) => {
    content.dataset.id = contentNo;
    contentNo++;
});

